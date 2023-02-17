import request from 'supertest';
import app from './app';

describe('Testing app server', () => {
  const testCep = '01001000';
  it('should make a post in route "consulta-endereco"', async () => {
    const res = await request(app)
      .post('/consulta-endereco')
      .send({ cep: testCep });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('cep');
  });
});
