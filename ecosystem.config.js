module.exports = {
  apps: [
    {
      script: "yarn start",
    },
  ],

  deploy: {
    production: {
      key: "key.pem",
      user: "root",
      host: "89.111.174.91",
      ref: "origin/master",
      repo: "git@github.com:dyoneNero/plug-drevo43.git",
      path: ".",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
