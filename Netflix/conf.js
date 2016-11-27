exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['netflix-spec.js'],
  jasmineNodeOpts: {
defaultTimeoutInterval: 25000000
}
};