(function() {
    'use strict';

    /*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

    function DOM(stringNode) {
        this.element = document.querySelectorAll(stringNode);
    }

    DOM.prototype.on = function(event, handleEvent) {
        Array.prototype.forEach.call(this.element, function(element) {
            element.addEventListener(event, handleEvent, false);
        });
    }
    DOM.prototype.off = function(event, handleEvent) {
        Array.prototype.forEach.call(this.element, function(element) {
            element.removeEventListener(event, handleEvent, false);
        });
    }
    DOM.prototype.get = function() {
        return this.element;
    }

    DOM.prototype.forEach = function forEach() {
        Array.prototype.forEach.apply(this.element, arguments);
    }

    DOM.prototype.map = function map() {
        Array.prototype.map.apply(this.element, arguments);
    }

    DOM.prototype.filter = function filter() {
        Array.prototype.filter.apply(this.element, arguments);
    }

    DOM.prototype.reduce = function reduce() {
        Array.prototype.reduce.apply(this.element, arguments);
    }

    DOM.prototype.reduceRight = function reduceRight() {
        Array.prototype.reduceRight.apply(this.element, arguments);
    }

    DOM.prototype.every = function every() {
        Array.prototype.every.apply(this.element, arguments);
    }

    DOM.prototype.some = function some() {
        Array.prototype.some.apply(this.element, arguments);
    }

    DOM.prototype.is = function is(obj) {
        return Object.prototype.toString.call(obj);
    }

    DOM.prototype.isArray = function isArray(obj) {
        return is(obj) === '[object Array]';
    }

    DOM.prototype.isObject = function isObject(obj) {
        return is(obj) === '[object Object]';
    }

    DOM.prototype.isFunction = function isFunction(obj) {
        return is(obj) === '[object Function]';
    }

    DOM.prototype.isNumber = function isNumber(obj) {
        return is(obj) === '[object Number]';
    }

    DOM.prototype.isString = function isString(obj) {
        return is(obj) === '[object String]';
    }

    DOM.prototype.isBoolean = function isBoolean(obj) {
        return is(obj) === '[object Boolean]';
    }

    DOM.prototype.isNull = function isNull(obj) {
        return is(obj) === ('[object Null]' || '[object Undefined]');
    }

    var $a = new DOM('[data-js="link"]');
    $a.on('click', function(e) {
        e.preventDefault();
        console.log('clicou');
    });
})();