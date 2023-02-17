export default (req, res, next) => {
  const numRegEx = /\d+/g;

  const { cep } = req.body;

  let numCep = cep.match(numRegEx);
  numCep = numCep.join('');

  if (numCep.length > 8 || numCep.length < 8) {
    return res.status(400).json({
      errors: ['CEP inválido!'],
    });
  }

  req.body = { cep: numCep };
  return next();
};
