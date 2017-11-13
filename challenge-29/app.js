(function($) {
    'use strict';

    /*
    Vamos estruturar um pequeno app utilizando módulos.
    Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
    A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
    seguinte forma:
    - No início do arquivo, deverá ter as informações da sua empresa - nome e
    telefone (já vamos ver como isso vai ser feito)
    - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
    um formulário para cadastro do carro, com os seguintes campos:
      - Imagem do carro (deverá aceitar uma URL)
      - Marca / Modelo
      - Ano
      - Placa
      - Cor
      - e um botão "Cadastrar"

    Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
    carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
    aparecer no final da tabela.

    Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
    empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
    Dê um nome para a empresa e um telefone fictício, preechendo essas informações
    no arquivo company.json que já está criado.

    Essas informações devem ser adicionadas no HTML via Ajax.

    Parte técnica:
    Separe o nosso módulo de DOM criado nas últimas aulas em
    um arquivo DOM.js.

    E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
    que será nomeado de "app".
    */


    var app = (function() {
        return {
            init: function init() {
                console.log("APP iniciado");
                // this.companyInfo();
                this.initEvents();
            },
            initEvents: function initEvents() {
                $("[data-js='carForm']").on('submit', this.handleEvents, false);
            },
            handleEvents: function handleEvents(e) {
                e.preventDefault();
                var $carRegistered = $("[data-js='carRegistered']").get()[0];
                $carRegistered.appendChild(app.createNewCar());
            },
            createNewCar: function createNewCar() {
                var $fragments = document.createDocumentFragment();
                var $tr = document.createElement('tr');
                var $tdImage = document.createElement('td');
                var $tdModel = document.createElement('td');
                var $tdYear = document.createElement('td');
                var $tdBoard = document.createElement('td');
                var $tdColor = document.createElement('td');
                var $image = document.createElement('img');

                $image.setAttribute('src', $('[data-js="carImage"]').get()[0].value);
                $tdImage.appendChild($image);

                $tdModel.textContent = $('[data-js="carModel"]').get()[0].value;
                $tdYear.textContent = $('[data-js="carYear"]').get()[0].value;
                $tdBoard.textContent = $('[data-js="carBoard"]').get()[0].value;
                $tdColor.textContent = $('[data-js="carColor"]').get()[0].value;

                $tr.appendChild($tdImage);
                $tr.appendChild($tdModel);
                $tr.appendChild($tdYear);
                $tr.appendChild($tdBoard);
                $tr.appendChild($tdColor);

                return $fragments.appendChild($tr);
            },
            companyInfo: function companyInfo() {
                var ajax = new XMLHttpRequest();
                ajax.open("GET", "company.json", true);
                ajax.send();
                ajax.addEventListener("readystatechange", this.companyInfo, false);
            },
            getCompanyInfo: function getCompanyInfo() {
                if (!app.isReady().call(this))
                    return;

                var data = JSON.parse(this.responseText);
                var $companyName = $("[data-js='nameCompany']").get()[0];
                var $companyPhone = $("[data-js='phoneCompany']").get()[0];

                $companyName.textContent = data.name;
                $companyPhone.textContent = data.phone;

            },
            isReady: function isReady() {
                return this.readyState === 4 && this.readyStatus === 200;
            }
        }
    })();

    app.init();

})(window.DOM);