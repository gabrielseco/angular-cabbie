import * as assert from 'assert';
import cabbie, { startChromedriver } from 'cabbie-sync';

startChromedriver();

const driver = cabbie('chromedriver', {
  base: 'localhost:4200',
  debug: true,
});

driver.activeWindow.navigateTo('/');

const value = driver.activeWindow.getElement('[data-test-id="value"]');
assert.equal(value.getAttribute('value'), '');

value.sendKeys('Hello World');
assert.equal(value.getAttribute('value'), 'Hello World');

const reverse = driver.activeWindow.getElement('[data-test-id="reverse"]');
reverse.mouse.click();

assert.equal(value.getAttribute('value'), 'dlroW olleH');

driver.dispose();
