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
      repo: "GIT_REPOSITORY",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
