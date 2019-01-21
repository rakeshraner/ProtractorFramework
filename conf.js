var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    // launch locally when fields directConnect and seleniumAddress are not provided
    chromeDriver: '/Users/rakeshrane/Tools/chromedriver',
    seleniumServerJar: '/Users/rakeshrane/Tools/selenium-server-standalone-3.8.1.jar',
    specs: ['/Users/rakeshrane/ProtractorDemo/JSFilesLocation/POM/Spec/*-spec.js'],
    capabilities: {
      browserName: 'chrome'
    },
 
   onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'tmp/screenshots',
         excludeSkippedSpecs: true,
         takeScreenShotsForSkippedSpecs: true,
         takeScreenShotsOnlyForFailedSpecs: true,
         docTitle: 'Protractor Test report',
         docName: 'Protractor Test report.html',
      }).getJasmine2Reporter());
   }
}
  