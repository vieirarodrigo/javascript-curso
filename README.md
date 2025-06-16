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
>       querySelector()
>       querySelectorAll()

>   Para ID (#), para classes (.)

### Eventos DOM

    mouseenter
    mousemove
    mousedown
    mouseup
    click
    mouseout
Prezados irmãos em Cristo, com a devida seriedade que o tema requer em nosso estudo das Sagradas Escrituras, debruçamo-nos sobre o material que introduz nossa jornada pelo Antigo Testamento. A primeira aula deste módulo tem como objetivo fundamental munir-nos de ferramentas para compreender o panorama do Antigo Testamento, permitindo-nos enxergar o que se encontra por detrás da história narrada.

É crucial reconhecer a natureza singular do Antigo Testamento. Ele registra eventos naturais, mas as atividades sobrenaturais de Deus permanecem intrinsecamente ligadas a essa história. Esta característica distintiva — o desvendamento de Deus nos eventos históricos e nas mensagens divinas — eleva o Antigo Testamento acima do nível da literatura e história seculares. Para uma compreensão total de seu conteúdo, é necessário reconhecer que tanto os fatores naturais quanto os sobrenaturais são essenciais em toda a Bíblia. Assim, o Antigo Testamento deve ser entendido em seu sentido mais amplo como **história sagrada**.

O Antigo Testamento reivindica para si o reconhecimento de ser as **Sagradas Escrituras**. Esta foi a atitude dos judeus, a quem esses escritos foram confiados, e igualmente dos cristãos. O registro escrito constitui um produto divino-humano inerrante em sua escrita original, contendo a verdade para a raça humana inteira. Esta foi a postura de Jesus Cristo e dos apóstolos. Jesus, o Deus-homem, aceitava a autoridade de toda a coletânea do Antigo Testamento, utilizando-o livremente como base para Seu ensino. De igual modo, os apóstolos agiram em relação ao Antigo Testamento na igreja primitiva. Escrito por homens sob orientação divina, o Antigo Testamento foi aceito como inteiramente fidedigno.

Dentro do contexto do Pentateuco, a Aula 1 introduz o **contexto religioso babilônico**. A figura de **Ninrode** é destacada, sendo ele bisneto de Noé e fundador de grandes cidades. Seu nome, "Ninrode", possivelmente significa "devemos nos rebelar", pois, segundo a tradição, ele incitou todos a se rebelar contra a soberania de Deus. Ninrode é identificado como o patriarca apóstata que organizou e dirigiu a construção da **torre de Babel**, a qual é considerada a primeira representação de uma religião falsa, sofisticada e organizada. Flavio Josefo relata que Ninrode transformou o estado de coisas em uma tirania, buscando tornar os homens dependentes de seu próprio poder para afastá-los do temor a Deus. Ele chegou a ameaçar vingar-se de Deus caso houvesse outro dilúvio, planejando construir uma torre tão alta que as águas não a alcançariam. O povo, sentindo ser escravidão submeter-se a Deus, seguiu ansiosamente seu conselho na construção da torre.

A tradição babilônica também associa Ninrode a narrativas míticas, como o casamento com sua própria mãe e a tentativa de se colocar como um deus. Após sua morte (segundo a tradição, pelas mãos de seu tio-avô), sua mãe insistiu que ele era o deus sol. Ela engravidou e afirmou que o filho era de Ninrode, dando à luz Tamuz, que morreu jovem. A crença na oração pela ressurreição de Tamuz e seu aparente "renascimento" faz parte dessa tradição.

A influência da religião babilônica sobre os judeus é notada, conforme evidenciado em passagens como Ezequiel 8.14-18 e Jeremias 44.14-19. Diversos ensinamentos e superstições comuns a antigas religiões (como as fenícias, assírias, egípcias, gregas e romanas, com suas respectivas divindades sincretizadas) apontam para uma mesma origem: Babilônia. Todos os falsos sistemas de adoração originaram-se nas religiões de mistério da Babilônia, pois todos começaram na torre de Babel. Assim, todas as falsas religiões subsequentes provêm da religião de Babel, e a heresia babilônica permanece viva até hoje.

Em suma, a Aula 1 nos convida a abordar o Antigo Testamento como **história sagrada inerrante**, fundamentada na revelação divina e aceita como autoridade por Cristo e os apóstolos. Ao mesmo tempo, introduz o contexto religioso da época, destacando a figura de Ninrode e a torre de Babel como a origem da religião falsa e sua influência, um ponto crucial para a análise e exposição subsequente das Escrituras. Observar aspectos contextuais, autorais, estruturais, linguísticos e literários é fundamental para uma análise abrangente do Antigo Testamento.

Que Deus nos conceda sabedoria e discernimento em nosso estudo de Sua santa Palavra.
    Funções
        function ação(param){

        }

## Módulo D

### Condições em JS

    if (condição) {
        true
    } else {
        false
    }

    Tipos de condição
        condição simples
        condição composta

    Condições aninhadas

## Módulo E

### Repetições em JS

    while (condição) {

    }

    do {

    } while (condição)

    for (variável; condição; incremento) {
        
    }

## Módulo F

### Avançando nos Estudos

#### Arrays

let num = [ , , ]

Array num, 3 elementos, 0, 1, 2 indices

num[3] = 6

num.push(7)
num.length
num.sort()
num.indexOf()