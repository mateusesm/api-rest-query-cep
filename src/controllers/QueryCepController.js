import { urls } from '../config/urls';
import { axiosData } from '../utils/axiosData';
import { calculateShippingTax } from '../utils/calculateShippingTax';

class QueryCepController {
  async query(req, res) {
    const cepRequest = req.body.cep;
    const url = `${urls.viaCep}${cepRequest}/json`;
    const data = await axiosData(url);

    if (data === -1) {
      return res.status(400).json({
        errors: ['Erro! Tente novamente!'],
      });
    }

    if (data.erro) {
      return res.status(400).json({
        errors: ['CEP não existe! Verifique o CEP digitado e tente novamente!'],
      });
    }

    const tax = await calculateShippingTax(data.uf);

    const newDatasCep = {
      cep: data.cep,
      rua: data.logradouro,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.localidade,
      estado: data.uf,
      frete: tax || ['Erro ao calcular frete! Tente novamente!'],
    };

    return res.status(200).json(newDatasCep);
  }
}

export default new QueryCepController();
