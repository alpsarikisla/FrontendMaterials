describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-ng-checked/index.html");
  });
  
it('should check both checkBoxes', function() {
  expect(element(by.id('checkFollower')).getAttribute('checked')).toBeFalsy();
  element(by.model('leader')).click();
  expect(element(by.id('checkFollower')).getAttribute('checked')).toBeTruthy();
});
});