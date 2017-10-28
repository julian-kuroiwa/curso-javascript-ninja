(function(win, doc) {

    /*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/


    'use strict';


    var $num = doc.querySelectorAll('button[data-calc="num"]');
    var $calc = doc.querySelector('input[data-calc="calc"]');
    var $operator = doc.querySelectorAll('button[data-calc="operator"]');
    var $equal = doc.querySelector('button[data-calc="="]');
    var $cleanInput = doc.querySelector('button[data-calc="CE"]');

    $equal.addEventListener('click', calcValue, false);
    $cleanInput.addEventListener('click', cleanCalc, false);

    Array.prototype.forEach.call($num, function(button) {
        button.addEventListener('click', getClickNumber, false);
    });

    Array.prototype.forEach.call($operator, function(button) {
        button.addEventListener('click', getClickOperator, false);
    });

    function getClickNumber() {
        if ($calc.value === 0)
            $calc.value = "";
        return $calc.value += this.value;

    }

    function getClickOperator() {
        if ($calc.value !== "0")
            return $calc.value += this.value;
        if (isLastItemOperator($calc.value))
            return $calc.value += this.value;

    }

    function calcValue() {

        $calc.value = removeIfItIsAnOperator($calc.value);
        var allVal = $calc.value.match(/\d+[+*\/-]?/g);

        $calc.value = allVal.reduce(function(accumulated, actual) {
            var firstVal = accumulated.slice(0, -1);
            var operator = accumulated.split('').pop();
            var lastVal = removeIfItIsAnOperator(actual);
            var lastOperator = isLastItemOperator(actual) ? actual.split('').pop() : '';
            switch (operator) {
                case '+':
                    return (Number(firstVal) + Number(lastVal)) + lastOperator;
                case '-':
                    return (Number(firstVal) - Number(lastVal)) + lastOperator;
                case '*':
                    return (Number(firstVal) * Number(lastVal)) + lastOperator;
                case '/':
                    return (Number(firstVal) / Number(lastVal)) + lastOperator;
            }
        });


    }


    function cleanCalc() {
        $calc.value = 0;
    }

    function isLastItemOperator(number) {
        var operators = ['+', '-', '*', '÷'];
        var lastItem = number.split('').pop();

        return operators.some(function(operator) {
            return operator === lastItem;
        });
    }

    function removeIfItIsAnOperator(number) {
        if (isLastItemOperator(number))
            return number.slice(0, -1);

        return number;
    }


})(window, document);