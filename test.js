const test = require('tape');
const shot = require('shot');
const router = require('./src/controllers/routes.js');

test('Home route', (t) => {
  shot.inject(router, { method: 'get', url: '/' }, (res) => {
    t.equal(res.statusCode, 200, 'should respond with status code of 200');
    t.end();
  });
});
