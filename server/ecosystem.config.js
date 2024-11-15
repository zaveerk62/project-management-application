module.exports = {
  apps: [
    {
      name: 'project-management-app',
      script: "npm",
      args: "npm run dev",
      env: {
        NODE_ENV: "development",
      }
    }
  ]
}