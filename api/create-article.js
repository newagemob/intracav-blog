// Netlify/Vercel Serverless Function for Creating Articles
// This creates markdown files via GitHub API or file system

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Check authentication using password hash
  const authHeader = event.headers.authorization;
  const expectedPasswordHash = process.env.ADMIN_PASSWORD_HASH;
  
  if (!expectedPasswordHash) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server configuration error: ADMIN_PASSWORD_HASH not set' })
    };
  }
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized: Missing or invalid authorization header' })
    };
  }
  
  // The client sends the password hash as the Bearer token
  const providedHash = authHeader.replace('Bearer ', '');
  
  if (providedHash !== expectedPasswordHash) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized: Invalid password' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Validate required fields
    if (!data.title || !data.content_type || !data.audience || !data.content) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Generate filename from title
    const filename = data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') + '.md';

    // Build frontmatter
    const frontmatter = {
      title: `"${data.title}"`,
      date: data.date || new Date().toISOString(),
      content_type: data.content_type,
      audience: data.audience,
      category: data.category || [],
      tags: data.tags || [],
      author: data.author || [],
      description: data.description ? `"${data.description}"` : null
    };

    // Format frontmatter as YAML
    let frontmatterYaml = '+++\n';
    frontmatterYaml += `title = ${frontmatter.title}\n`;
    frontmatterYaml += `date = ${frontmatter.date}\n`;
    frontmatterYaml += `content_type = "${frontmatter.content_type}"\n`;
    frontmatterYaml += `audience = "${frontmatter.audience}"\n`;
    
    if (frontmatter.category.length > 0) {
      frontmatterYaml += `category = [${frontmatter.category.map(c => `"${c}"`).join(', ')}]\n`;
    }
    
    if (frontmatter.tags.length > 0) {
      frontmatterYaml += `tags = [${frontmatter.tags.map(t => `"${t}"`).join(', ')}]\n`;
    }
    
    if (frontmatter.author.length > 0) {
      frontmatterYaml += `author = [${frontmatter.author.map(a => `"${a}"`).join(', ')}]\n`;
    }
    
    if (frontmatter.description) {
      frontmatterYaml += `description = ${frontmatter.description}\n`;
    }
    
    frontmatterYaml += '+++\n\n';

    // Combine frontmatter and content
    const markdownContent = frontmatterYaml + data.content;

    // If using GitHub API (recommended for GitHub Pages)
    if (process.env.GITHUB_TOKEN && process.env.GITHUB_REPO) {
      const [owner, repo] = process.env.GITHUB_REPO.split('/');
      // Determine directory based on content_type
      const contentDir = data.content_type === 'policies' ? 'policies' : 'blog';
      const path = `content/${contentDir}/${filename}`;
      
      const githubResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: `Add article: ${data.title}`,
            content: Buffer.from(markdownContent).toString('base64'),
            branch: 'main'
          })
        }
      );

      if (!githubResponse.ok) {
        const error = await githubResponse.json();
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Failed to create file', details: error })
        };
      }

      return {
        statusCode: 200,
        body: JSON.stringify({ 
          success: true, 
          message: 'Article created successfully',
          filename: filename,
          path: path
        })
      };
    }

    // Fallback: Return the markdown content for manual creation
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Article ready (GitHub integration not configured)',
        filename: filename,
        content: markdownContent,
        note: `Copy this content to content/${data.content_type === 'policies' ? 'policies' : 'blog'}/` + filename
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
