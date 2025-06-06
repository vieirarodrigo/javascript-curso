# javascript-curso


## Módulo A
### O que JS é capaz de fazer?
>       Client (Sou o cliente) x Server (Youtube que fornece o video)

>       Vamos usar mais o JS no lado do cliente

>       Um site geralmente é formado por:
>           - HTML (Jornalista) - Responsável pelo conteúdo;
>           - CSS (Designer) - Deixar o conteúdo de forma mais bonita;
>           - JS (Programador) - Vai cuidar da logística de entregar o jornal.
        
>       O JS pode mudar o HTML e CSS.

### A evolução do JavaScript
>       1970 - Arpanet | 1993 - HTML | 1994 - Netscape | 1995 - JavaScript | 1997 - ECMA | 2002 - Firefox | 2008 - Google Chrome | 2009 - v8 do Chrome | 2010 - node.js

>       ECMAScript é a padronização do JS
>       1997 - 1.0 | 1998 - 2.0 | 1999 - 3.0 | 2009 - ES5 | 2015 - ES6 | ... | ES <ano>

>       Tecnologias:
>       jQuery | Angular | React | Vue | Electron | Ionic | Cordova

>       Gaming:
>       Phaser | PixiJS | Impact | Melon.js | Crafty.js

### Primeiros Passos JS
>       Bibliografia
>           - JavaScript: O guia definitivo;
>           - JavaScript: Guia do programador;
>           - Guia de referencia da mozilla;
>           - Guia de referencia da ecma - 262.

>       Instalação do:
>           - Chrome;
>           - VSCode;
>           - Node.js.

### Nossos Primeiros Scripts
>       Criar nosso primeiro código.
>           ex001.html
>               - window.alert() - Cria um alerta
>               - window.confirm()  - Pede ao usuário para confirmar ou cancelar
>               - window.prompt() - Solicita um entrada para o usuário

## Módulo B
### Tipos de Dados e Variáveis
>       // ou /**/ - Comentários

>       Variável
>           var <identificador> = <valor> | Para strings podemos os limitadores "", '' ou ``

>           typeof - Mostra o tipo da variável

### Manipulção de Dados
<audio controls>
    <source src="./src/audios/manipulacao-de-variaveis.wav">
    Seu navegador não suporta a reprodução de áudio.
</audio>

>       '+' - Serve para somar ou concatenar

>       Comentários em HTML - <!-- -->
>       Comentários em CSS  - /* */

>       Number.parseInt(n) - Converte string para inteiro
>       Number.parseFloat(n) - Converte string para float

>       Number(n) - Resumido

>       String(n) - Converte para string
>       n.toString()

>       Formatando Strings
>           var s = 'JavaScript'
>           'Eu estou aprendendo s' // Não faz interpolação
>           'Eu estou aprendendo ' + s // usa concatenação
>           `Eu estou aprendendo ${s}` // usa template string

>           s.length        // quantos caracteres tem a string
>           s.toUpperCase() // deixa toda string em MAIUSCULO
>           s.toLowerCase() // deixa toda string em minusculo

>       Formatando números
>           n.toFixed() // definir quantidade de casas decimais
>           n.toFixed().replace('', '') // troca algo por outra coisa
>           n.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}) // formata no estilo da moeda

### Operações em JS
<audio controls>
    <source src="./src/audios/operadores-js.wav">
    Seu navegador não suporta a reprodução de áudio.
</audio>

>       Operadores aritmétricos
>           +, -, *, /, % e **

>           Ordem de precedência: () -> ** -> *, /, % -> +, -

>       Operadores de atribuição
>           =

>           Autoatribuição
>               n = n + <valor> ou n += <valor>

>           Incremento / Decremento
>               n++ ou n--

>       Operadores relacionais
>           ==, ===, !=, !==, >, <, >= ou <=

>       Operadores lógicos
>           &&, || ou !

>           Ordem de precedência: () -> ! -> && -> ||

>       Operador ternário
>           ? ou :

>       Ordem geral de precedência: () -> aritmétricos -> relacionais -> lógicos

## Módulo C

### Entendendo o DOM
<audio controls>
    <source src="./src/audios/entendendo-dom.wav">
    Seu navegador não suporta a reprodução de áudio.
</audio>

> O que é o DOM?
>   Document Object Model

> Árvore DOM
>   window
>       location
>       document
>           html
>               head
>                   meta
>                   title
>               body
>                   h1
>                   p
>                   p
>                       strong
>                   div
>       history

> Selecionando
>   por Marca, ID, Nome, Classe ou Seletor

>   por Marca
>       getElementByTagName()

>   por ID
>       getElementByID()

>   por Nome
>       getElementsByName()

>   por Classe
>       getElementsByClassName()

>   por Seletor
        querySelector()
        querySelectorAll()

>   Para ID (#), para classes (.)