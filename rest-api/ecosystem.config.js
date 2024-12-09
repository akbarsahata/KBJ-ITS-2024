const os = require('os');

module.exports = {
  apps: [
    {
      name: 'rest-api',
      script: 'api/index.js',
      node_args: '-r dotenv/config --no-warnings',
      exec_mode: os.cpus().length > 1 ? 'cluster' : 'fork',
      instances: os.cpus().length,
      autorestart: true,
      watch: false,
    },
  ],
};