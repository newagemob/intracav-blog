#!/usr/bin/env node
/**
 * Generate Admin Password Hash for Intracav Blog
 * 
 * This script generates a password hash for admin access.
 * Choose a strong password and share it securely with your clinical team.
 * 
 * Usage:
 *   node scripts/generate-admin-token.js [password]
 * 
 * If no password is provided, you'll be prompted to enter one.
 */

const crypto = require('crypto');
const readline = require('readline');

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

async function promptPassword() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.stdoutMuted = true;
    const stdin = process.openStdin();
    
    process.stdout.write('Enter admin password: ');
    
    let password = '';
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');
    
    stdin.on('data', (char) => {
      char = char.toString();
      
      switch (char) {
        case '\n':
        case '\r':
        case '\u0004':
          stdin.setRawMode(false);
          stdin.pause();
          process.stdout.write('\n');
          rl.close();
          resolve(password);
          break;
        case '\u0003':
          process.exit();
          break;
        case '\u007f': // backspace
          if (password.length > 0) {
            password = password.slice(0, -1);
            process.stdout.write('\b \b');
          }
          break;
        default:
          password += char;
          process.stdout.write('*');
          break;
      }
    });
  });
}

async function main() {
  let password = process.argv[2];
  
  if (!password) {
    password = await promptPassword();
    if (!password) {
      console.error('\n❌ Password cannot be empty');
      process.exit(1);
    }
    console.log('\n✅ Using provided password\n');
  } else {
    console.log('\n✅ Using provided password\n');
  }
  
  const passwordHash = hashPassword(password);
  
  console.log('='.repeat(60));
  console.log('ADMIN PASSWORD SETUP');
  console.log('='.repeat(60));
  console.log('\n🔐 PASSWORD HASH (set this as ADMIN_PASSWORD_HASH env var):');
  console.log(passwordHash);
  console.log('\n' + '='.repeat(60));
  console.log('\n📝 SETUP INSTRUCTIONS:');
  console.log('\n1. Set the environment variable during Hugo build:');
  console.log(`   export ADMIN_PASSWORD_HASH="${passwordHash}"`);
  console.log('   hugo');
  console.log('\n2. Share the PASSWORD securely with your clinical team');
  console.log('\n3. They can access the admin page at:');
  console.log('   https://blog.intracav.ai/admin/');
  console.log('   and enter the password when prompted');
  console.log('\n⚠️  Keep the password secure and change it periodically');
  console.log('='.repeat(60) + '\n');
}

main().catch(console.error);
