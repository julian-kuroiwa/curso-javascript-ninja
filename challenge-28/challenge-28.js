(function(win, doc) {

    'use strict';

    /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
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

    var $form = new DOM('[data-form="form"]');
    var $formCEP = new DOM('[data-input="cep"]');
    var $logradouro = new DOM('[data-text="logradouro"]');
    var $bairro = new DOM('[data-text="bairro"]');
    var $estado = new DOM('[data-text="estado"]');
    var $cidade = new DOM('[data-text="cidade"]');
    var $status = new DOM('[data-text="status"]');
    var cepValue = $formCEP.get()[0].value.replace(/\D/g, '');

    var ajax = new XMLHttpRequest();

    $form.on('submit', sendForm, false);

    function sendForm(e) {
        e.preventDefault();
        var url = getURL();
        return handleForm('GET', url, null, ajaxResult);
    }

    function getURL() {
        return 'https://viacep.com.br/ws/[CEP]/json/'.replace(
            '[CEP]',
            cepValue
        );
    }

    function handleForm(method, url, data, ajaxResult) {
        ajax.open(method, url);
        ajax.send(data);
        getMessage('loading');
        ajax.addEventListener('readystatechange', ajaxResult, false);
    }

    function ajaxResult() {
        if (isRequestOk()) {
            getMessage('ok');
            fillAddressFields();
        }
    }

    function isRequestOk() {
        return ajax.readyState === 4 && ajax.readyStatus === 200;
    }

    function fillAddressFields() {

        var data = parseData();

        if (!data) {
            getMessage('loading');
            data = clearData();
        }

        $logradouro.get()[0].textContent = data.logradouro;
        $bairro.get()[0].textContent = data.bairro;
        $estado.get()[0].textContent = data.uf;
        $cidade.get()[0].textContent = data.localidade;
    }

    function clearData() {
        return {
            logradouro: "-",
            bairro: "-",
            uf: "-",
            localidade: "-"
        }
    }

    function parseData() {
        var result;
        try {
            result = JSON.parse(ajax.responseText);
        } catch (e) {
            result = null;
        }
        return result;
    }

    function getMessage(type) {

        var messages = {
            loading: 'Buscando informações para o CEP ' + cepValue + '...',
            ok: 'Endereço referente ao CEP ' + cepValue + ':',
            error: 'Não encontramos o endereço para o CEP  ' + cepValue + '.'
        };
        $status.get()[0].textContent = messages[type];
    }

})(window, document);