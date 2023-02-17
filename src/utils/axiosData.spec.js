import { urls } from '../config/urls';
import { axiosData } from './axiosData';

describe('Testing axiosData function', () => {
  const testUrl = `${urls.viaCep}01001000/json`;

  it('should return a truthy value', async () => {
    const testData = await axiosData(testUrl);
    expect(testData).toBeTruthy();
  });
});
