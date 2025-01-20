const request = require('supertest');
const app = require('../index'); 
const { add } = require('../index'); 

it('should return Hello World message and app version', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ 
    msg: 'Hello World!', 
    app_version: '1' 
  });
});

it('should return the correct sum of two numbers', async () => {
  const res = await request(app).get('/add/5/10');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ sum: 15 });
});

it('should return "Invalid Input" for non-numeric parameters', async () => {
  const res = await request(app).get('/add/a/b');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ sum: 'Invalid Input' });
});

it('should correctly add two numbers', () => {
  expect(add(5, 10)).toBe(15);
});

it('should return "Invalid Input" for non-numeric parameters', () => {
  expect(add('a', 'b')).toBe('Invalid Input');
});
