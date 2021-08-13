export const FormatCurrency = (valor) => {
  const emDecimal = (valor/100);

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(emDecimal);
};

export default FormatCurrency;
