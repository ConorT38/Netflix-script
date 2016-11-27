var arr = require('../Netflix/login.json');
describe('Netflix accounts login test', function() {
  it('should try and login with each account in the array', function() {
    browser.ignoreSynchronization = true;
    browser.get('https://www.netflix.com/ie/Login');

        for (var i = 0; i < arr.length; i++){
  var obj = arr[i];
  for (var key in obj){
    var value = obj[key];
    element(by.name('email')).sendKeys(key);
    element(by.name('password')).sendKeys(value);
    element(by.buttonText('Sign In')).click();
        element(by.name('email')).clear();
        element(by.name('password')).clear();
      }
}

    

  });
});