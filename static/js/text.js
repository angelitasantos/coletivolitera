/* index.html */

let fullName = document.querySelector('#name');
let selectorName = 'Coletivo Litera';
if (fullName) {fullName.textContent = selectorName};


let nameFunction = document.querySelector('#name-function');
let selectorNameFunction = 'Escritores Brasileiros Independentes';
if (nameFunction) {nameFunction.textContent = selectorNameFunction};


let textoGeral = document.querySelector('#texto-geral');
let selectorTexto = `O Coletivo Litera foi fundado em 2020 e reune autores
                        independentes LGBTQIA+, sendo um espaço de acolhimento, apoio e troca de experiências.
                        Divulgamos projetos, eventos literários, concursos, trocamos
                        ideias e dicas. Apoiamos nossos autores, divulgando seus
                        livros, incentivando a escrita e o lançamento de novos projetos.
                        Lançamos nossa primeira antologia em 2021 (Edifício Litera),
                        com contos de 9 autores do nosso Coletivo. E temos diversos projetos por vir.
                        Estamos espalhados por todo o Brasil, valorizamos a
                        diversidade e respeitamos as diferenças. Somos um grupo sem fins
                        lucrativos, que busca ser um ambiente de apoio a literatura independente LGBTQIA +.`;
if (textoGeral) {textoGeral.textContent = selectorTexto};

