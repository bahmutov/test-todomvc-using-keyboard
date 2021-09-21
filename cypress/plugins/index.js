module.exports = (on, config) => {
  require('cyclope/plugin')(on, config)

  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config
}
