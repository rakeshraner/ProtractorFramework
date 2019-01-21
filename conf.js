exports.config = {
    // launch locally when fields directConnect and seleniumAddress are not provided
    chromeDriver: '/Users/rakeshrane/Tools/chromedriver',
    seleniumServerJar: '/Users/rakeshrane/Tools/selenium-server-standalone-3.8.1.jar',
    specs: ['/Users/rakeshrane/ProtractorDemo/JSFilesLocation/POM/Spec/*-spec.js'],
    capabilities: {
      browserName: 'chrome'
    }
  }
  