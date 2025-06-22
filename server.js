#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Configuration pour Render
const PORT = process.env.PORT || process.env.N8N_PORT || 10000;
const HOST = process.env.N8N_HOST || '0.0.0.0';

// Variables d'environnement pour n8n
process.env.N8N_PORT = PORT;
process.env.N8N_HOST = HOST;
process.env.N8N_PROTOCOL = process.env.N8N_PROTOCOL || 'https';
process.env.DB_TYPE = process.env.DB_TYPE || 'sqlite';

// Démarrer n8n
console.log(`🚀 Démarrage de n8n sur ${HOST}:${PORT}`);
console.log(`📊 Protocol: ${process.env.N8N_PROTOCOL}`);
console.log(`💾 Database: ${process.env.DB_TYPE}`);

const n8nProcess = spawn('n8n', ['start'], {
  stdio: 'inherit',
  env: process.env
});

n8nProcess.on('error', (error) => {
  console.error('❌ Erreur lors du démarrage de n8n:', error);
  process.exit(1);
});

n8nProcess.on('close', (code) => {
  console.log(`🔄 n8n s'est fermé avec le code ${code}`);
  if (code !== 0) {
    process.exit(code);
  }
});

// Gérer l'arrêt propre
process.on('SIGTERM', () => {
  console.log('🛑 Arrêt de n8n...');
  n8nProcess.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('🛑 Arrêt de n8n...');
  n8nProcess.kill('SIGINT');
});
