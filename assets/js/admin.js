// Admin Interface for Intracav Wiki
(function() {
  'use strict';

  // Password (in production, this should be hashed and stored securely)
  // For now, using a simple check. In production, use proper authentication
  const ADMIN_PASSWORD = 'intracav2024'; // Change this to your desired password

  // Initialize
  document.addEventListener('DOMContentLoaded', function() {
    initAdmin();
  });

  function initAdmin() {
    const loginForm = document.getElementById('login-form');
    const adminInterface = document.getElementById('admin-interface');
    const adminLogin = document.getElementById('admin-login');
    const contentForm = document.getElementById('content-form');

    // Check if already authenticated
    if (sessionStorage.getItem('admin-authenticated') === 'true') {
      showAdminInterface();
    }

    // Login form handler
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('admin-password').value;
        
        if (password === ADMIN_PASSWORD) {
          sessionStorage.setItem('admin-authenticated', 'true');
          showAdminInterface();
        } else {
          const errorDiv = document.getElementById('login-error');
          errorDiv.textContent = 'Incorrect password. Please try again.';
          errorDiv.style.display = 'block';
          document.getElementById('admin-password').value = '';
        }
      });
    }

    // Content form handler
    if (contentForm) {
      contentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        generateMarkdown();
      });
    }

    // Preview button
    const previewBtn = document.getElementById('preview-btn');
    if (previewBtn) {
      previewBtn.addEventListener('click', showPreview);
    }

    // Download button
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', downloadMarkdown);
    }

    // Copy markdown button
    const copyBtn = document.getElementById('copy-markdown');
    if (copyBtn) {
      copyBtn.addEventListener('click', copyMarkdown);
    }

    // Close preview modal
    const closePreview = document.getElementById('close-preview');
    if (closePreview) {
      closePreview.addEventListener('click', function() {
        document.getElementById('preview-modal').style.display = 'none';
      });
    }

    // Editor toolbar
    initEditorToolbar();

    // Set default date to now
    const dateInput = document.getElementById('content-date');
    if (dateInput) {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      dateInput.value = `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    // Image upload preview
    const imageInput = document.getElementById('content-images');
    if (imageInput) {
      imageInput.addEventListener('change', handleImageUpload);
    }
  }

  function showAdminInterface() {
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('admin-interface').style.display = 'block';
  }

  function initEditorToolbar() {
    const toolbar = document.querySelector('.handbook-admin-editor-toolbar');
    if (!toolbar) return;

    toolbar.addEventListener('click', function(e) {
      if (e.target.classList.contains('handbook-admin-toolbar-btn')) {
        e.preventDefault();
        const action = e.target.dataset.action;
        const editor = document.getElementById('content-body');
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        const selectedText = editor.value.substring(start, end);

        let replacement = '';
        switch(action) {
          case 'bold':
            replacement = `**${selectedText || 'bold text'}**`;
            break;
          case 'italic':
            replacement = `*${selectedText || 'italic text'}*`;
            break;
          case 'heading':
            replacement = `## ${selectedText || 'Heading'}`;
            break;
          case 'link':
            replacement = `[${selectedText || 'link text'}](url)`;
            break;
          case 'image':
            replacement = `![${selectedText || 'alt text'}](image-url)`;
            break;
          case 'code':
            replacement = `\`${selectedText || 'code'}\``;
            break;
          case 'list':
            replacement = `- ${selectedText || 'list item'}`;
            break;
        }

        editor.value = editor.value.substring(0, start) + replacement + editor.value.substring(end);
        editor.focus();
        editor.setSelectionRange(start + replacement.length, start + replacement.length);
      }
    });
  }

  function handleImageUpload(e) {
    const files = e.target.files;
    const preview = document.getElementById('image-preview');
    preview.innerHTML = '';

    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const img = document.createElement('img');
          img.src = e.target.result;
          img.style.maxWidth = '200px';
          img.style.margin = '0.5rem';
          img.style.border = '1px solid #e5e7eb';
          img.style.borderRadius = '4px';
          preview.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    });
  }

  function generateMarkdown() {
    const title = document.getElementById('content-title').value;
    const contentType = document.getElementById('content-type').value;
    const description = document.getElementById('content-description').value;
    const date = document.getElementById('content-date').value;
    const author = document.getElementById('content-author').value;
    const category = document.getElementById('content-category').value;
    const tags = document.getElementById('content-tags').value;
    const body = document.getElementById('content-body').value;

    // Format date for Hugo
    const dateObj = new Date(date);
    const formattedDate = dateObj.toISOString().replace('Z', '-05:00');

    // Generate filename
    const filename = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') + '.md';

    // Build frontmatter
    let frontmatter = '+++\n';
    frontmatter += `title = "${title.replace(/"/g, '\\"')}"\n`;
    frontmatter += `date = ${formattedDate}\n`;
    frontmatter += `content_type = "${contentType}"\n`;
    
    if (description) {
      frontmatter += `description = "${description.replace(/"/g, '\\"')}"\n`;
    }

    if (author) {
      const authors = author.split(',').map(a => a.trim()).filter(a => a);
      frontmatter += `author = [${authors.map(a => `"${a.replace(/"/g, '\\"')}"`).join(', ')}]\n`;
    }

    if (category) {
      const categories = category.split(',').map(c => c.trim()).filter(c => c);
      frontmatter += `category = [${categories.map(c => `"${c.replace(/"/g, '\\"')}"`).join(', ')}]\n`;
    }

    if (tags) {
      const tagList = tags.split(',').map(t => t.trim()).filter(t => t);
      frontmatter += `tags = [${tagList.map(t => `"${t.replace(/"/g, '\\"')}"`).join(', ')}]\n`;
    }

    frontmatter += '+++\n\n';

    // Combine frontmatter and body
    const markdown = frontmatter + body;

    // Display generated content
    document.getElementById('markdown-output').textContent = markdown;
    document.getElementById('generated-content').style.display = 'block';
    document.getElementById('generated-content').scrollIntoView({ behavior: 'smooth' });
  }

  function downloadMarkdown() {
    generateMarkdown();
    const markdown = document.getElementById('markdown-output').textContent;
    const title = document.getElementById('content-title').value;
    const filename = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') + '.md';

    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function copyMarkdown() {
    const markdown = document.getElementById('markdown-output').textContent;
    navigator.clipboard.writeText(markdown).then(function() {
      const btn = document.getElementById('copy-markdown');
      const originalText = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(function() {
        btn.textContent = originalText;
      }, 2000);
    });
  }

  function showPreview() {
    const body = document.getElementById('content-body').value;
    const previewContent = document.getElementById('preview-content');
    
    // Simple markdown to HTML conversion (basic)
    let html = body
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')
      .replace(/\n/g, '<br>');

    previewContent.innerHTML = html;
    document.getElementById('preview-modal').style.display = 'block';
  }
})();
