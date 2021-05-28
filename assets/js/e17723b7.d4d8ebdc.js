(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6213],{2122:function(e,a,o){"use strict";function t(){return(t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}o.d(a,{Z:function(){return t}})},9756:function(e,a,o){"use strict";function t(e,a){if(null==e)return{};var o,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}o.d(a,{Z:function(){return t}})},3905:function(e,a,o){"use strict";o.d(a,{Zo:function(){return m},kt:function(){return u}});var t=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=t.createContext({}),d=function(e){var a=t.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):r(r({},a),e)),o},m=function(e){var a=d(e.components);return t.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(o),u=n,f=c["".concat(l,".").concat(u)]||c[u]||p[u]||i;return o?t.createElement(f,r(r({ref:a},m),{},{components:o})):t.createElement(f,r({ref:a},m))}));function u(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=c;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var d=2;d<i;d++)r[d]=o[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},4817:function(e,a,o){"use strict";o.r(a),o.d(a,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var t=o(2122),n=o(9756),i=(o(7294),o(3905)),r={title:"Perguntas de CSS"},s={unversionedId:"pr/css-questions",id:"pr/css-questions",isDocsHomePage:!1,title:"Perguntas de CSS",description:"Respostas \xe0s Perguntas da Entrevista de Trabalho de Front-end - Quest\xf5es CSS. Pull requests para sugest\xf5es e corre\xe7\xf5es s\xe3o bem-vindos!",source:"@site/../contents/pr/css-questions.md",sourceDirName:"pr",slug:"/pr/css-questions",permalink:"/front-end-interview-handbook/pr/css-questions",editUrl:"https://github.com/yangshun/front-end-interview-handbook/edit/master/contents/../contents/pr/css-questions.md",version:"current",lastUpdatedBy:"Tay Yang Shun",lastUpdatedAt:1617371593,formattedLastUpdatedAt:"4/2/2021",frontMatter:{title:"Perguntas de CSS"},sidebar:"pr",previous:{title:"Perguntas de HTML",permalink:"/front-end-interview-handbook/pr/html-questions"},next:{title:"Perguntas de JavaScript",permalink:"/front-end-interview-handbook/pr/javascript-questions"}},l=[{value:"\xcdndice",id:"\xedndice",children:[{value:'<a id="01">O que \xe9 a especificidade do seletor CSS e como funciona?</a>',id:"o-que-\xe9-a-especificidade-do-seletor-css-e-como-funciona",children:[]},{value:'<a id="02">Qual \xe9 a diferen\xe7a entre &quot;redefinir&quot;/&quot;resetting&quot; e &quot;normalizar&quot;/&quot;normalizing&quot; o CSS? Qual voc\xea escolheria e porqu\xea?</a>',id:"qual-\xe9-a-diferen\xe7a-entre-redefinirresetting-e-normalizarnormalizing-o-css-qual-voc\xea-escolheria-e-porqu\xea",children:[]},{value:'<a id="03">Descreva <code>float</code> e como eles funcionam.</a>',id:"descreva-float-e-como-eles-funcionam",children:[]},{value:'<a id="04">Descreva o z-index e como o contexto de empilhamento \xe9 formado.</a>',id:"descreva-o-z-index-e-como-o-contexto-de-empilhamento-\xe9-formado",children:[]},{value:'<a id="05">Descreva o BFC (Block Formatting Context) e como ele funciona.</a>',id:"descreva-o-bfc-block-formatting-context-e-como-ele-funciona",children:[]},{value:'<a id="06">Quais s\xe3o as v\xe1rias t\xe9cnicas de limpeza e quais s\xe3o apropriadas para qual contexto?</a>',id:"quais-s\xe3o-as-v\xe1rias-t\xe9cnicas-de-limpeza-e-quais-s\xe3o-apropriadas-para-qual-contexto",children:[]},{value:'<a id="07">Explique os sprites CSS e como voc\xea os implementaria em uma p\xe1gina ou site.</a>',id:"explique-os-sprites-css-e-como-voc\xea-os-implementaria-em-uma-p\xe1gina-ou-site",children:[]}]}],d={toc:l};function m(e){var a=e.components,o=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Respostas \xe0s ",(0,i.kt)("a",{href:"https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/src/questions/css-questions.md",id:"top"},"Perguntas da Entrevista de Trabalho de Front-end - Quest\xf5es CSS"),". Pull requests para sugest\xf5es e corre\xe7\xf5es s\xe3o bem-vindos!"),(0,i.kt)("h2",{id:"\xedndice"},"\xcdndice"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#01"},"O que \xe9 a especificidade do seletor CSS e como funciona?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#02"},'Qual \xe9 a diferen\xe7a entre "redefinir"/"resetting" e "normalizar"/"normalizing" o CSS? Qual voc\xea escolheri a e porqu\xea'),"?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#03"},"Descreva ",(0,i.kt)("inlineCode",{parentName:"a"},"float")," e como eles funcionam.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#04"},"Descreva o z-index e como o contexto de empilhamento \xe9 formado.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#05"},"Descreva o BFC (Block Formatting Context) e como ele funciona.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#06"},"Quais s\xe3o as v\xe1rias t\xe9cnicas de limpeza e quais s\xe3o apropriadas para qual contexto?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#07"},"Explique os sprites CSS e como voc\xea os implementaria em uma p\xe1gina ou site."))),(0,i.kt)("h3",{id:"o-que-\xe9-a-especificidade-do-seletor-css-e-como-funciona"},(0,i.kt)("a",{id:"01"},"O que \xe9 a especificidade do seletor CSS e como funciona?")),(0,i.kt)("p",null,"O navegador determina quais estilos mostrar em um elemento, dependendo da especificidade das regras CSS. Presumimos que o navegador j\xe1 determinou as regras que correspondem a um elemento espec\xedfico. Entre as regras de correspond\xeancia, a especificidade, quatro valores separados por v\xedrgulas, ",(0,i.kt)("inlineCode",{parentName:"p"},"a, b, c, d")," s\xe3o calculados para cada regra com base no seguinte:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"a")," \xe9 se estilos embutidos est\xe3o sendo usados. Se a declara\xe7\xe3o da propriedade for um estilo embutido no elemento, ",(0,i.kt)("inlineCode",{parentName:"li"},"a")," \xe9 1, caso contr\xe1rio, 0."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"b")," \xe9 o n\xfamero de seletores de ID."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"c")," \xe9 o n\xfamero de classes, atributos e seletores de pseudo-classes."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"d")," \xe9 o n\xfamero de tags e seletores de pseudo-elementos.")),(0,i.kt)("p",null,"A especificidade resultante n\xe3o \xe9 uma pontua\xe7\xe3o, mas uma matriz de valores que podem ser comparados coluna por coluna. Ao comparar seletores para determinar qual tem a especificidade mais alta, olhe da esquerda para a direita e compare o valor mais alto em cada coluna. Portanto, um valor na coluna ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," substituir\xe1 os valores nas colunas ",(0,i.kt)("inlineCode",{parentName:"p"},"c e d"),", n\xe3o importa quais sejam. Como tal, a especificidade de ",(0,i.kt)("inlineCode",{parentName:"p"},"0,1,0,0")," seria maior do que ",(0,i.kt)("inlineCode",{parentName:"p"},"0,0,10,10"),"."),(0,i.kt)("p",null,"Nos casos de especificidade igual: a regra mais recente \xe9 a que conta. Se voc\xea escreveu a mesma regra em sua folha de estilo (independentemente de interna ou externa) duas vezes, ent\xe3o a regra inferior em sua folha de estilo est\xe1 mais pr\xf3xima do elemento a ser estilizado, \xe9 considerada mais espec\xedfica e, portanto, ser\xe1 aplicada."),(0,i.kt)("p",null,"Eu escreveria regras CSS com baixa especificidade para que possam ser facilmente substitu\xeddas, se necess\xe1rio. Ao escrever c\xf3digo de biblioteca de componente de UI CSS, \xe9 importante que eles tenham especificidades baixas para que os usu\xe1rios da biblioteca possam substitu\xed-los sem usar regras CSS muito complicadas apenas para aumentar a especificidade ou recorrer a ",(0,i.kt)("inlineCode",{parentName:"p"},"!important"),"."),(0,i.kt)("h6",{id:"refer\xeancias"},"Refer\xeancias"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/"},"https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.sitepoint.com/web-foundations/specificity/"},"https://www.sitepoint.com/web-foundations/specificity/"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#%C3%8Dndice"},"[\u2191] De volta ao topo")),(0,i.kt)("h3",{id:"qual-\xe9-a-diferen\xe7a-entre-redefinirresetting-e-normalizarnormalizing-o-css-qual-voc\xea-escolheria-e-porqu\xea"},(0,i.kt)("a",{id:"02"},'Qual \xe9 a diferen\xe7a entre "redefinir"/"resetting" e "normalizar"/"normalizing" o CSS? Qual voc\xea escolheria e porqu\xea?')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Redefinir")," - Redefinir visa eliminar todos os estilos padr\xe3o do navegador nos elementos. Por exemplo: `margins, paddings, font-size` s\xe3o todos redefinidos. Voc\xea ter\xe1 que redeclarar o estilo dos elementos tipogr\xe1ficos comuns."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Normalizar"),' - A normaliza\xe7\xe3o preserva estilos padr\xe3o \xfateis em vez de "desestilizar" tudo. Ele tamb\xe9m corrige bugs para depend\xeancias comuns do navegador.')),(0,i.kt)("p",null,"Eu escolheria redefinir quando tenho um design de site muito personalizado ou n\xe3o convencional, de modo que preciso fazer muito do meu pr\xf3prio estilo e n\xe3o preciso que nenhum estilo padr\xe3o seja preservado."),(0,i.kt)("h6",{id:"refer\xeancias-1"},"Refer\xeancias"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css"},"https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#%C3%8Dndice"},"[\u2191] De volta ao topo")),(0,i.kt)("h3",{id:"descreva-float-e-como-eles-funcionam"},(0,i.kt)("a",{id:"03"},"Descreva ",(0,i.kt)("inlineCode",{parentName:"h3"},"float")," e como eles funcionam.")),(0,i.kt)("p",null,"Float \xe9 uma propriedade de posicionamento CSS. Os elementos flutuantes permanecem como parte do fluxo da p\xe1gina e afetar\xe3o o posicionamento de outros elementos (por exemplo, o texto fluir\xe1 em torno dos elementos flutuantes), ao contr\xe1rio dos elementos ",(0,i.kt)("inlineCode",{parentName:"p"},"position: absolute"),", que s\xe3o removidos do fluxo da p\xe1gina."),(0,i.kt)("p",null,"A propriedade CSS ",(0,i.kt)("inlineCode",{parentName:"p"},"clear")," pode ser usada para ser posicionada abaixo de ",(0,i.kt)("inlineCode",{parentName:"p"},"left"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"right"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"both")," elementos flutuantes."),(0,i.kt)("p",null,"Se um elemento pai n\xe3o cont\xe9m nada al\xe9m de elementos flutuantes, sua altura ser\xe1 reduzida a nada. Pode ser consertado limpando o flutuador ap\xf3s os elementos flutuantes no cont\xeainer, mas antes do fechamento do cont\xeainer."),(0,i.kt)("p",null,"O hack ",(0,i.kt)("inlineCode",{parentName:"p"},".clearfix")," usa um pseudo-seletor CSS inteligente (",(0,i.kt)("inlineCode",{parentName:"p"},": after"),") para limpar os floats. Em vez de definir o overflow no pai, voc\xea aplica uma classe adicional ",(0,i.kt)("inlineCode",{parentName:"p"},"clearfix")," a ele. Em seguida, aplique este CSS:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".clearfix:after { content: ' '; visibility: hidden; display: block; height: 0; clear: both; }")),(0,i.kt)("p",null,"Como alternativa, atribua a propriedade ",(0,i.kt)("inlineCode",{parentName:"p"},"overflow: auto")," ou ",(0,i.kt)("inlineCode",{parentName:"p"},"overflow: hidden")," ao elemento pai, que estabelecer\xe1 um novo contexto de formata\xe7\xe3o de bloco dentro dos filhos e se expandir\xe1 para conter seus filhos."),(0,i.kt)("h6",{id:"refer\xeancias-2"},"Refer\xeancias"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://css-tricks.com/all-about-floats/"},"https://css-tricks.com/all-about-floats/"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#%C3%8Dndice"},"[\u2191] De volta ao topo")),(0,i.kt)("h3",{id:"descreva-o-z-index-e-como-o-contexto-de-empilhamento-\xe9-formado"},(0,i.kt)("a",{id:"04"},"Descreva o z-index e como o contexto de empilhamento \xe9 formado.")),(0,i.kt)("p",null,"A propriedade ",(0,i.kt)("inlineCode",{parentName:"p"},"z-index")," em CSS controla a ordem de empilhamento vertical dos elementos que se sobrep\xf5em. O ",(0,i.kt)("inlineCode",{parentName:"p"},"z-index")," afeta apenas os elementos que possuem um valor ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," que n\xe3o seja ",(0,i.kt)("inlineCode",{parentName:"p"},"static"),"."),(0,i.kt)("p",null,"Sem nenhum valor de ",(0,i.kt)("inlineCode",{parentName:"p"},"z-index"),", os elementos s\xe3o empilhados na ordem em que aparecem no DOM (o mais baixo no mesmo n\xedvel de hierarquia aparece no topo). Os elementos com posicionamento n\xe3o est\xe1tico (e seus filhos) sempre aparecer\xe3o no topo dos elementos com posicionamento est\xe1tico padr\xe3o, independentemente da hierarquia HTML."),(0,i.kt)("p",null,"Um contexto de empilhamento \xe9 um elemento que cont\xe9m um conjunto de camadas. Em um contexto de empilhamento local, os valores de ",(0,i.kt)("inlineCode",{parentName:"p"},"z-index")," de seus filhos s\xe3o definidos em rela\xe7\xe3o a esse elemento, e n\xe3o \xe0 raiz do documento. Camadas fora desse contexto - ou seja, elementos irm\xe3os de um contexto de empilhamento local - n\xe3o podem ficar entre as camadas dentro dele. Se um elemento B fica em cima do elemento A, um elemento filho do elemento A, elemento C, nunca pode ser maior do que o elemento B, mesmo se o elemento C tiver um ",(0,i.kt)("inlineCode",{parentName:"p"},"z-index")," maior do que o elemento B."),(0,i.kt)("p",null,"Cada contexto de empilhamento \xe9 autocontido - depois que o conte\xfado do elemento \xe9 empilhado, todo o elemento \xe9 considerado na ordem de empilhamento do contexto de empilhamento pai. Algumas propriedades CSS acionam um novo contexto de empilhamento, como ",(0,i.kt)("inlineCode",{parentName:"p"},"opacity")," menor que 1, ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," que n\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," e ",(0,i.kt)("inlineCode",{parentName:"p"},"transform")," que n\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"none"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Nota: O que exatamente qualifica um elemento para criar um contexto de empilhamento est\xe1 listado neste longo conjunto de ",(0,i.kt)("a",{parentName:"em",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context#the_stacking_context%22"},"regras"),".")),(0,i.kt)("h6",{id:"refer\xeancias-3"},"Refer\xeancias"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://css-tricks.com/almanac/properties/z/z-index/"},"https://css-tricks.com/almanac/properties/z/z-index/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://philipwalton.com/articles/what-no-one-told-you-about-z-index/"},"https://philipwalton.com/articles/what-no-one-told-you-about-z-index/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context"},"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#%C3%8Dndice"},"[\u2191] De volta ao topo")),(0,i.kt)("h3",{id:"descreva-o-bfc-block-formatting-context-e-como-ele-funciona"},(0,i.kt)("a",{id:"05"},"Descreva o BFC (Block Formatting Context) e como ele funciona.")),(0,i.kt)("p",null,"Um Block Formatting Context (BFC) \xe9 parte da renderiza\xe7\xe3o CSS visual de uma p\xe1gina da web na qual as caixas de bloco s\xe3o dispostas. Floats, elementos com position absolute, ",(0,i.kt)("inlineCode",{parentName:"p"},"inline-block"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"table-cells"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"table-caption")," e elementos com ",(0,i.kt)("inlineCode",{parentName:"p"},"overflow")," diferente de ",(0,i.kt)("inlineCode",{parentName:"p"},"visible")," (exceto quando esse valor foi propagado para a janela de visualiza\xe7\xe3o) estabelecem novos contextos de formata\xe7\xe3o de bloco."),(0,i.kt)("p",null,"Saber como estabelecer um contexto de formata\xe7\xe3o de bloco \xe9 importante, pois, sem isso, a caixa que o cont\xe9m n\xe3o conter\xe1 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context#Make_float_content_and_alongside_content_the_same_height"},"filhos flutuantes"),". Isso \xe9 semelhante ao colapso de margens, mas mais insidioso, pois voc\xea encontrar\xe1 caixas inteiras colapsando de maneiras estranhas."),(0,i.kt)("p",null,"Um BFC \xe9 uma caixa HTML que satisfaz pelo menos uma das seguintes condi\xe7\xf5es:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"O valor de ",(0,i.kt)("inlineCode",{parentName:"li"},"float")," n\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},"O valor de ",(0,i.kt)("inlineCode",{parentName:"li"},"position")," n\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," nem ",(0,i.kt)("inlineCode",{parentName:"li"},"relative"),"."),(0,i.kt)("li",{parentName:"ul"},"O valor de ",(0,i.kt)("inlineCode",{parentName:"li"},"display")," \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"table-cell"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"table-caption"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"inline-block"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"flex"),", ou ",(0,i.kt)("inlineCode",{parentName:"li"},"inline-flex"),"."),(0,i.kt)("li",{parentName:"ul"},"O valor de ",(0,i.kt)("inlineCode",{parentName:"li"},"overflow")," n\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"visible"),".")),(0,i.kt)("p",null,"Em um BFC, a borda externa esquerda de cada caixa toca a borda esquerda do bloco que o cont\xe9m (para formata\xe7\xe3o da direita para a esquerda, as bordas direitas se tocam)."),(0,i.kt)("p",null,"Margens verticais entre caixas de n\xedvel de bloco adjacentes em um colapso BFC. Leia mais sobre ",(0,i.kt)("a",{parentName:"p",href:"https://www.sitepoint.com/collapsing-margins/"},"redu\xe7\xe3o de margens"),"."),(0,i.kt)("h6",{id:"refer\xeancias-4"},"Refer\xeancias"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context"},"https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.sitepoint.com/understanding-block-formatting-contexts-in-css/"},"https://www.sitepoint.com/understanding-block-formatting-contexts-in-css/"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#%C3%8Dndice"},"[\u2191] De volta ao topo")),(0,i.kt)("h3",{id:"quais-s\xe3o-as-v\xe1rias-t\xe9cnicas-de-limpeza-e-quais-s\xe3o-apropriadas-para-qual-contexto"},(0,i.kt)("a",{id:"06"},"Quais s\xe3o as v\xe1rias t\xe9cnicas de limpeza e quais s\xe3o apropriadas para qual contexto?")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"div")," vazia, m\xe9todo - ",(0,i.kt)("inlineCode",{parentName:"li"},'<div style="clear: both;"></div>'),"."),(0,i.kt)("li",{parentName:"ul"},"M\xe9todo Clearfix - Consulte a classe ",(0,i.kt)("inlineCode",{parentName:"li"},".clearfix")," acima."),(0,i.kt)("li",{parentName:"ul"},"M\xe9todo ",(0,i.kt)("inlineCode",{parentName:"li"},"overflow: auto")," ou ",(0,i.kt)("inlineCode",{parentName:"li"},"overflow: hidden")," - O pai estabelecer\xe1 um novo contexto de formata\xe7\xe3o de bloco e se expandir\xe1 para conter seus filhos flutuados.")),(0,i.kt)("p",null,"Em grandes projetos, eu escreveria uma classe utilit\xe1ria ",(0,i.kt)("inlineCode",{parentName:"p"},".clearfix")," e a usaria nos lugares onde preciso. ",(0,i.kt)("inlineCode",{parentName:"p"},"overflow: hidden")," pode cortar os filhos se os filhos forem mais altos do que os pais e n\xe3o for muito ideal."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#%C3%8Dndice"},"[\u2191] De volta ao topo")),(0,i.kt)("h3",{id:"explique-os-sprites-css-e-como-voc\xea-os-implementaria-em-uma-p\xe1gina-ou-site"},(0,i.kt)("a",{id:"07"},"Explique os sprites CSS e como voc\xea os implementaria em uma p\xe1gina ou site.")),(0,i.kt)("p",null,"Sprites CSS combinam v\xe1rias imagens em uma \xfanica imagem maior. \xc9 uma t\xe9cnica comumente usada para \xedcones (o Gmail usa). Como implementar:"),(0,i.kt)("p",null,"[1]","Use um gerador de sprite que re\xfana v\xe1rias imagens em uma e gere o CSS apropriado para isso. ","[2]","Cada imagem teria uma classe CSS correspondente com propriedades de ",(0,i.kt)("inlineCode",{parentName:"p"},"background-image"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"background-position")," e ",(0,i.kt)("inlineCode",{parentName:"p"},"background-size")," definidas. ","[3]","Para usar essa imagem, adicione a classe correspondente ao seu elemento."),(0,i.kt)("b",null,"Vantagens:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reduza o n\xfamero de solicita\xe7\xf5es HTTP para v\xe1rias imagens (apenas uma \xfanica solicita\xe7\xe3o \xe9 necess\xe1ria por planilha). Mas com HTTP2, carregar v\xe1rias imagens n\xe3o \xe9 mais um problema."),(0,i.kt)("li",{parentName:"ul"},"Download avan\xe7ado de ativos que n\xe3o ser\xe3o baixados at\xe9 que sejam necess\xe1rios, como imagens que s\xf3 aparecem em: pseudo-estados de ",(0,i.kt)("inlineCode",{parentName:"li"},":hover"),". Piscando n\xe3o seria visto.")),(0,i.kt)("h6",{id:"refer\xeancias-5"},"Refer\xeancias"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://css-tricks.com/css-sprites/"},"https://css-tricks.com/css-sprites/"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#%C3%8Dndice"},"[\u2191] De volta ao topo")),(0,i.kt)("p",null,"Vamos traduzir esse conte\xfado juntos para toda comunidade. Agradecemos a sua ajuda na tradu\xe7\xe3o!"))}m.isMDXComponent=!0}}]);