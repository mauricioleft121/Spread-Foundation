/* eslint-disable prettier/prettier */

export function Aprox(valor) {
  var result = 0.05;
  var number = (((valor * 100) % 5) / 100);
  var add = parseFloat(result) - parseFloat(number);
  valor = parseFloat(valor) + parseFloat(add);
  valor = valor.toFixed(2);
  return valor;
}
