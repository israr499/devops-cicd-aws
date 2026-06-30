const request = require('supertest');
const app = require('../src/app');

describe('Health endpoints', () => {
  test('GET /health returns 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('GET /db-health returns 500 when no DB connected', async () => {
    const res = await request(app).get('/db-health');
    expect(res.statusCode).toBe(500);
    expect(res.body.db).toBe('error');
  });
});
