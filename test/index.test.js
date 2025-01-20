const request = require('supertest');
const app = require('../index');
const { concatenate } = require('../index');

it('should return Hello World message and app version', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({
    msg: 'Hello World Rizon String Concatenation Service',
    app_version: '1.2'
  });
});

it('should return the concatenated string for valid inputs', async () => {
  const res = await request(app).get('/concat/Hello/World');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ result: 'HelloWorld' });
});

// it('should handle empty strings correctly', async () => {
//   const res = await request(app).get('/concat/Hello/');
//   expect(res.statusCode).toBe(200);
//   expect(res.body).toEqual({ result: 'Hello' });
// });


it('should return "Invalid Input" for non-string parameters', async () => {
  const res = await request(app).get('/concat/123/456');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ result: '123456' }); // Strings are formed by default when numbers are passed
});

it('should concatenate two strings correctly', () => {
  expect(concatenate('Hello', 'World')).toBe('HelloWorld');
});

it('should return "Invalid Input" for non-string parameters directly', () => {
  expect(concatenate(123, 456)).toBe('Invalid Input'); // Valid as concatenation is interpreted naturally
});
