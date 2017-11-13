(function() {

    'use strict';

    function DOM(stringNode) {
        if (!(this instanceof DOM))
            return new DOM(stringNode);
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
    DOM.prototype.get = function(index) {
        if (!index)
            return this.element;
        return this.element[index];
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

    window.DOM = DOM;
})();