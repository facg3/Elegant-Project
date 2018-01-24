const test = require('tape');
const supertest = require('supertest');
const app = require('../../app');

const { signup } = require('../../models/queries/signup');

const getSignup = () => {
  test('test get /signup', (t) => {
    supertest(app)
      .get('/signup')
      .expect(200)
      .end((err, res) => {
        if (err) {
          console.log(err);
          t.end();
        }
        t.equal(res.type, 'text/html', 'should return with type html');
        t.equal(res.statusCode, 200, 'should return with statusCode 200');
        t.equal(res.res.statusMessage, 'OK', 'should return with statusMessage OK');
        t.end();
      });
  });
};

const postSignup302 = () => {
  test('test post /signup', (t) => {
    supertest(app)
      .post('/signup')
      .send({
        username: 'salamtest',
        password: 'Salam123',
        email: 'salamtest@gmail.com',
      })
      .set('Accept', 'application/json, text/plain, */*')
      .set('Content-Type', 'application/json')
      .expect(302)
      .end((err, res) => {
        if (err) {
          console.log(err);
          t.end();
        }
        t.equal(res.statusCode, 302, 'should return with statusCode 302');
        t.equal(res.res.statusMessage, 'Found', 'should return statusMessage Found');
        t.equal(res.type, 'text/plain', 'should return res.type text/plain');
        t.end();
      });
  });
};

const postSignup500 = () => {
  test('test post /signup', (t) => {
    supertest(app)
      .post('/signup')
      .send({
        username: 'salam',
        password: 'Salam123',
        email: 'salam@gmail.com',
      })
      .set('Accept', 'application/json, text/plain, */*')
      .set('Content-Type', 'application/json')
      .expect(500)
      .end((err, res) => {
        if (err) {
          console.log(err);
          t.end();
        }
        t.equal(res.statusCode, 500, 'should return with statusCode 500');
        t.equal(res.res.statusMessage, 'Internal Server Error', 'should return statusMessage Internal Server Error');
        t.equal(res.type, '', 'should return res.type \'\'');
        t.end();
      });
  });
};

const signupUser = () => {
  test('test sign up user query', (t) => {
    const userData = {
      username: 'salam5',
      password: 'Salam123',
      email: 'salam@gmaiiil.com',
    };
    signup(userData, (err, res) => {
      if (err) {
        t.fail();
        t.end();
      }
      t.equal(res, true, 'result should be true when signup');
      // const {
      //   name, email,
      // } = res.rows[0];
      // t.equal(res.rowCount, 1, 'rowCount should be incremented by 1');
      // t.deepEqual({ name, email }, { name: userData.username, email: userData.email }, 'should return userData');
      t.end();
    });
  });
};
module.exports = {
  getSignup, postSignup302, postSignup500, signupUser,
};
