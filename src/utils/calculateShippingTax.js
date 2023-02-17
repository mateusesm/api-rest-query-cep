import { axiosData } from './axiosData';
import { urls } from '../config/urls';
import { regionsTax } from '../config/regionsTax';

export const calculateShippingTax = async (uf) => {
  try {
    const url = `${urls.ibgeAPI}${uf}`;
    const { regiao: { nome } } = await axiosData(url);

    const name = String(nome).toLowerCase();

    if (name === 'sudeste') {
      const tax = regionsTax.sudesteTax;
      return tax;
    }

    if (name === 'centro-oeste') {
      const tax = regionsTax.centroOesteTax;
      return tax;
    }

    if (name === 'nordeste') {
      const tax = regionsTax.nordesteTax;
      return tax;
    }

    if (name === 'sul') {
      const tax = regionsTax.sulTax;
      return tax;
    }

    if (name === 'norte') {
      const tax = regionsTax.norteTax;
      return tax;
    }
  } catch (error) {
    return -1;
  }

  return null;
};
