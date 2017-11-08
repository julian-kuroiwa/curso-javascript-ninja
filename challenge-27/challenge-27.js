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

    function is(obj) {
        return Object.prototype.slice.call(obj);
    }

    function isArray(obj) {
        return is(obj) === '[object Array]';
    }

    function isObject(obj) {
        return is(obj) === '[object Object]';
    }

    function isFunction(obj) {
        return is(obj) === '[object Function]';
    }

    function isNumber(obj) {
        return is(obj) === '[object Number]';
    }

    function isString(obj) {
        return is(obj) === '[object String]';
    }

    function isBoolean(obj) {
        return is(obj) === '[object Boolean]';
    }

    function isNull(obj) {
        return is(obj) === ('[object Null]' || '[object Undefined]');
    }

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

    DOM.prototype.forEach = function(callback) {
        Array.prototype.forEach.call(this.element, callback);
    }

    DOM.prototype.map = function(callback) {
        Array.prototype.map.call(this.element, callback);
    }

    DOM.prototype.filter = function(callback) {
        Array.prototype.filter.call(this.element, callback);
    }

    DOM.prototype.reduce = function(callback) {
        Array.prototype.reduce.call(this.element, callback);
    }

    DOM.prototype.reduceRight = function(callback) {
        Array.prototype.reduceRight.call(this.element, callback);
    }

    DOM.prototype.every = function(callback) {
        Array.prototype.every.call(this.element, callback);
    }

    DOM.prototype.some = function(callback) {
        Array.prototype.some.call(this.element, callback);
    }

    var $a = new DOM('[data-js="link"]');
    $a.on('click', function(e) {
        e.preventDefault();
        console.log('clicou');
    });
})();