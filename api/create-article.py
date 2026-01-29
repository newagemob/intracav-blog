#!/usr/bin/env python3
"""
Serverless function for creating articles (Python version for Vercel/Netlify)
"""

import os
import json
import base64
from datetime import datetime
from urllib.parse import unquote

def handler(event, context):
    """Handle article creation request"""
    
    # Only allow POST
    if event.get('httpMethod') != 'POST':
        return {
            'statusCode': 405,
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    # Check authentication
    auth_header = event.get('headers', {}).get('authorization', '')
    expected_password = os.environ.get('ADMIN_PASSWORD', 'change-me')
    
    if not auth_header or auth_header != f'Bearer {expected_password}':
        return {
            'statusCode': 401,
            'body': json.dumps({'error': 'Unauthorized'})
        }
    
    try:
        data = json.loads(event.get('body', '{}'))
        
        # Validate required fields
        required = ['title', 'content_type', 'audience', 'content']
        if not all(field in data for field in required):
            return {
                'statusCode': 400,
                'body': json.dumps({'error': 'Missing required fields'})
            }
        
        # Generate filename
        filename = ''.join(c if c.isalnum() or c == '-' else '-' 
                          for c in data['title'].lower()).strip('-') + '.md'
        
        # Build frontmatter
        frontmatter_lines = [
            '+++',
            f'title = "{data["title"]}"',
            f'date = {data.get("date", datetime.now().isoformat())}',
            f'content_type = "{data["content_type"]}"',
            f'audience = "{data["audience"]}"'
        ]
        
        if data.get('category'):
            categories = ', '.join(f'"{c}"' for c in data['category'])
            frontmatter_lines.append(f'category = [{categories}]')
        
        if data.get('tags'):
            tags = ', '.join(f'"{t}"' for t in data['tags'])
            frontmatter_lines.append(f'tags = [{tags}]')
        
        if data.get('author'):
            authors = ', '.join(f'"{a}"' for a in data['author'])
            frontmatter_lines.append(f'author = [{authors}]')
        
        if data.get('description'):
            frontmatter_lines.append(f'description = "{data["description"]}"')
        
        frontmatter_lines.append('+++')
        frontmatter_lines.append('')
        
        # Combine frontmatter and content
        markdown_content = '\n'.join(frontmatter_lines) + '\n' + data['content']
        
        # GitHub API integration
        github_token = os.environ.get('GITHUB_TOKEN')
        github_repo = os.environ.get('GITHUB_REPO')
        
        if github_token and github_repo:
            import requests
            owner, repo = github_repo.split('/')
            # Determine directory based on content_type
            content_dir = 'policies' if data['content_type'] == 'policies' else 'blog'
            path = f'content/{content_dir}/{filename}'
            
            url = f'https://api.github.com/repos/{owner}/{repo}/contents/{path}'
            headers = {
                'Authorization': f'token {github_token}',
                'Accept': 'application/vnd.github.v3+json'
            }
            payload = {
                'message': f'Add article: {data["title"]}',
                'content': base64.b64encode(markdown_content.encode()).decode(),
                'branch': 'main'
            }
            
            response = requests.put(url, json=payload, headers=headers)
            
            if response.status_code == 201:
                return {
                    'statusCode': 200,
                    'body': json.dumps({
                        'success': True,
                        'message': 'Article created successfully',
                        'filename': filename
                    })
                }
            else:
                return {
                    'statusCode': 500,
                    'body': json.dumps({
                        'error': 'Failed to create file',
                        'details': response.json()
                    })
                }
        
        # Fallback: return content for manual creation
        return {
            'statusCode': 200,
            'body': json.dumps({
                'success': True,
                'message': 'Article ready',
                'filename': filename,
                'content': markdown_content
            })
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }
