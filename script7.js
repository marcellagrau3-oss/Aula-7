let valorDoPrduto // entrada - input
let percentualDeDesconto // entrada - input
let desconto // saída - output

valorDoPrduto = prompt("Informe o valor de produto");
percentualDeDesconto = prompt("Informe o percetual de desconto");

valorDoPrduto = parseFloat(valorDoPrduto);
percentualDeDesconto = parseFloat(percentualDeDesconto);

desconto = parseFloat(valorDoPrduto) * parseFloat(percentualDeDesconto) / 100;

alert("O valor do desconto é de R$" + desconto);