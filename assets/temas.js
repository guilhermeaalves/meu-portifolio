//DOM - Document Object Model - Modelo de Objeto do Documento
//Transforma tudo na página em objetos. Cada objeto recebe atributos (propriedades) e métodos (funções) associadas a ele.

//function "nome da função"(parâmetros)

// Para qual tema?

// Saber o tema atual e obter o elemento do tema atual

// Saber onde está o atributo de tema

// se o botão for clicado, então...

    // pegar o elemento com o tema 
    // se o tema for light, então mude o atributo para dark
    // se não for, então mude o atributo para light

document.querySelector('#btTrocaTema').addEventListener('click', () => {
    
    
    if (document.documentElement.getAttribute('data-tema') === 'light') {
        document.documentElement.setAttribute('data-tema', 'dark');
    } else {
        document.documentElement.setAttribute('data-tema', 'light');
    }

})

// Trocar o tema:
// 1. Pegar o elemento com tema
// 2. Apagar o atributo do tema atual
// 3. Escrever o atributo do novo tema