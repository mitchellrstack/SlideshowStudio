const { exec } = require('child_process')

// Executes starting local react development server to be shown in iframe
exec('cd slideshow && npm run start && cd .. && electron electron/main.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`)
    return
  }
  console.log(`stdout: ${stdout}`)
  console.log(`stderr: ${stderr}`)
})

