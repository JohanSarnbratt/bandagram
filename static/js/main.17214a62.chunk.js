(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,a,n){e.exports=n(65)},58:function(e,a,n){},59:function(e,a,n){},65:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(44),i=n.n(o),l=(n(58),n(13)),s=(n(59),n(84)),c=n(90),u=n(14);function m(e,a){let n,t=e.length;for(;t>0;)n=Math.floor(a()*t),t--,[e[t],e[n]]=[e[n],e[t]];return e}var d,h=n(89),y=n(87),g=n(86);const C=Object(u.a)(g.a)(d||(d=Object(l.a)(["\n  width: 25px;\n  height: 25px;\n  font-size: 15px;\n  font-weight: bold;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 3px;\n  text-align: center;\n"]))),M=e=>{let{letter:a,backgroundColor:n,onClick:t}=e;const o=n?"white":void 0;return r.a.createElement(C,{style:{backgroundColor:n,color:o},onClick:t},a)};function k(e){return e.toLowerCase().split("").filter(e=>" "!==e)}function p(e,a,n){return r.a.createElement(r.a.Fragment,null,function(e,a){let n=k(e);return a.map(e=>{const a=n.includes(e);if(a){const a=n.findIndex(a=>a===e);n.splice(a,1)}return{letter:e,guessed:a}})}(e,a).map((e,a)=>{let{letter:t,guessed:o}=e;const i=o?"orange":void 0;return r.a.createElement(M,{letter:t,backgroundColor:i,key:a,onClick:()=>n(t)})}))}function S(e,a,n){const t=k(a);let r=[...t,...n];return k(e).map((e,a)=>{const n=r.includes(e);if(n){const a=r.findIndex(a=>a===e);r.splice(a,1)}const o=e===t[a];return{guessLetter:e,correct:o,wrong:!n}})}function f(e,a){return T(e)===T(a)}function T(e){return e.toLowerCase().replaceAll(" ","").trim()}function A(){const e=new Date,a=new Date(2023,10,18),n=Math.abs(e.getTime()-a.getTime())/864e5;return Math.floor(n)}var B;const b=u.a.div(B||(B=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"]))),L=e=>{let{correctAnswer:a,guesses:n,playAgain:t}=e;const o=f(n[n.length-1],a);return r.a.createElement(b,null,o?r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{variant:"body1"}," ",a),r.a.createElement("h1",null,"Good job!")):r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{variant:"body1"}," ",a),r.a.createElement("h1",null,"So close! Better luck next time...")),t&&r.a.createElement(y.a,{onClick:t,variant:"contained"},"Play again"),!t&&r.a.createElement(y.a,{onClick:()=>{navigator.clipboard.writeText(D(n,a))},variant:"contained"},"Share!"))},D=(e,a)=>{const n=e.map(e=>S(e,a,[]).map((e,a)=>{let{guessLetter:n,correct:t,wrong:r}=e;return t?"\ud83d\udfe2":r?"\ud83d\udd34":"\u26aa"}).join("")).join("\n");return"I finished Bandagram #".concat(A(),"\n").concat(n)};var E,v,P,R,w;const F=u.a.div(E||(E=Object(l.a)(["\n  display: inline-block;\n  text-align: left;\n"]))),J=u.a.div(v||(v=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: flex-start;\n"]))),G=u.a.div(P||(P=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),N=u.a.div(R||(R=Object(l.a)(["\n  align-items: center;\n"]))),O=u.a.form(w||(w=Object(l.a)(["\n  width: 100%;\n"]))),W=e=>{let{correctAnswer:a,initMissingLetters:n,initFakeLetters:o,random:i,guesses:l,onMakeGuess:s,playAgain:c}=e;const[u,d]=r.a.useState(""),g=Math.max(n-Math.floor(l.length/2),0),C=Math.max(o-Math.ceil(l.length/2),0),T=Object(t.useMemo)(()=>m(k(a.toLowerCase()),i),[a,i]),A=Object(t.useMemo)(()=>g>0?T.slice(0,-g):T,[g,T]),B=Object(t.useMemo)(()=>k(function(e,a){let n="";const t="AAAAABBCCCDDDEEEEEFFGGHHHIIIIJJKKLLLLMMMNNNNOOOOPPQRRRRSSSSTTTTUUVWWXYYZ\xc5\xc4\xd6";for(let r=0;r<e;r++)n+=t.charAt(Math.floor(a()*t.length));return n}(o,i)),[o,i]),b=Object(t.useMemo)(()=>B.slice(0,C),[C,B]),D=Object(t.useMemo)(()=>m([...A,...b],i),[A,b,i]),E=e=>{e.preventDefault(),e.stopPropagation(),u.length>0&&(s(u),d(""))},v=l.length&&f(l[l.length-1],a)||l.length>5,P=Object(t.useRef)(null),R=()=>{var e;v||(null===P||void 0===P||null===(e=P.current)||void 0===e||e.focus({preventScroll:!0}))};Object(t.useEffect)(()=>{R()},[null===P||void 0===P?void 0:P.current]);return r.a.createElement(J,null,l.map((e,n)=>r.a.createElement(F,{key:n},function(e,a,n){return r.a.createElement(r.a.Fragment,null,S(e,a,n).map((e,a)=>{let{guessLetter:n,correct:t,wrong:o}=e;const i=t?"green":o?"red":void 0;return r.a.createElement(M,{letter:n,backgroundColor:i,key:a})}))}(e,a,b))),v?r.a.createElement(L,{correctAnswer:a,guesses:l,playAgain:c}):r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{variant:"body2",align:"center",sx:{fontSize:12}},"Missing letters: ",g," Fake letters: ",C),r.a.createElement(F,null,p(u,D,e=>{d(u+e)})),r.a.createElement(O,{onSubmit:E},r.a.createElement(G,null,r.a.createElement(F,null,function(e){return r.a.createElement(r.a.Fragment,null,k(e).map((e,a)=>r.a.createElement(M,{letter:e,key:a})))}(u)),r.a.createElement(N,null,r.a.createElement(y.a,{type:"submit",onClick:E},"Guess"))),r.a.createElement("input",{ref:P,style:{position:"absolute",top:"-9999px"},value:u,onChange:e=>{e.preventDefault(),e.stopPropagation(),k(e.target.value).length<=T.length&&d(e.target.value)},onBlur:R}))))},I=["Lady Gaga","Miley Cyrus","Taylor Swift","Ed Sheeran","No Doubt","Elton John","Green Day","Icona Pop","Lana Del Rey","Nirvana","The Beatles","Alice Cooper","David Bowie","Harry Styles","Johnny Cash","Linkin Park","Madonna","Manu Chao","Nickelback","YUNGBLUD","A*Teens","Ace of Base","Aerosmith","Bee Gees","blink-182","Bon Jovi","Bright Eyes","Bryan Adams","C\xe9line Dion","Dire Straits","Ebba Gr\xf6n","Erasure","Eric Clapton","Foo Fighters","Gorillaz","Imperiet","Jan Johansen","Juice WRLD","Lambretta","Lily Allen","Maskinen","Meat Loaf","Patti Smith","Paul Simon","Ramones","Shakira","Shawn Mendes","Tenacious D","The Police","Tina Turner","Tomas Ledin","Zara Larsson","24kGoldn","Aaron Carter","Adam Lambert","Afroman","Ansiktet","Arvingarna","Billy Joel","Blondie","Bolaget","Bonnie Tyler","Caesars","Coldplay","Daddy Yankee","Daft Punk","Diana Ross","Die Antwoord","Disturbed","Doja Cat","Dolly Parton","Donna Summer","Dua Lipa","Eurythmics","Faith Hill","Fall Out Boy","Far & Son","Fatboy Slim","First Aid Kit","Fools Garden","Glee Cast","Guns N Roses","Iggy Azalea","In Flames","Irene Cara","Iron Maiden","Jeff Buckley","John Lennon","Kate Bush","Katy Perry","Kid Rock","Kim Carnes","Lasse Holm","Lazlo Bane","LeAnn Rimes","Led Zeppelin","Limp Bizkit","Lisa Ekdahl","Madness","Melody Club","Neil Diamond","Nicki Minaj","Outkast","Papa Roach","Peps Persson","Pet Shop Boys","Radiohead","Reel Big Fish","Rick Astley","Ricky Martin","Rihanna","Roxette","Run\u2013D.M.C.","Ryan Adams","September","Sex Pistols","Simple Plan","Smash Mouth","Snow Patrol","Survivor","Teddybears","The Killers","The Kooks","The Rasmus","The Weeknd","Timbuktu","Van Morrison","Vance Joy","Volbeat","Westlife","Young MC","2 Unlimited","4 Non Blondes","Aaliyah","Adam Tensta","Alessia Cara","All Saints","America","Anastacia","Ane Brun","Anna Book","Anti-Flag","Architects","AWOLNATION","B*Witched","Bad Religion","Barbados","Bastille","Beastie Boys","Beyonc\xe9","Billy Paul","Billy Talent","Bruno Mars","Caramell","Cascada","Chuck Berry","Clara Mae","Clean Bandit","Cornershop","Crazy Town","Cutting Crew","Cyndi Lauper","Cypress Hill","Def Leppard","Del Amitri","Docent D\xf6d","Don McLean","Don Omar","Dr\xf6mhus","Echosmith","Eddie Murphy","\xc9dith Piaf","Eiffel 65","Eldkvarn","Elov & Beny","Emma Bunton","Eric Carmen","Eric Saade","Familjen","Flo Rida","Flobots","Foreigner","Freestyle","Frej Larsson","Friends","Gary Portnoy","Gavin DeGraw","George Ezra","Girls Aloud","G\xfcnther","Gwen Stefani","Haddaway","Halestorm","Hans Zimmer","Hilary Duff","Hoobastank","Hugh Grant","iann dior","Ice Cube","Iggy Pop","Imogen Heap","Iron & Wine","Jace Everett","James Blunt","Jason Mraz","Jean Stout","Jessie J","Jimmy Cliff","Joe Cocker","John Denver","John Farnham","Journey","Kanye West","Keala Settle","Kid Cudi","Kim Wilde","Kings of Leon","Lil Wayne","Lisa Nilsson","Lou Reed","Luis Fonsi","Lykke Li","Magnum Bonum","M\xe5neskin","Marc Cohn","Maria Mena","Mark Ronson","Marvin Gaye","Masked Wolf","Mattafix","Men At Work","Metallica","MexicoFALLZ","Midnight Oil","Millencolin","Modest Mouse","Molly Sand\xe9n","M\xf6tley Cr\xfce","Nat King Cole","Nazareth","Nick Jonas","Nine Days","Norlie & KKV","Owl City","Paramore","Paris Hilton","Pat Benatar","Peaches","Per Gessle","Peter LeMarc","Phil Collins","Quinn XCII","Rammstein","Robin Cook","Rod Stewart","Roffe Ruff","Roy Orbison","Sabaton","S\xe4kert!","Salt-N-Pepa","Saweetie","Scorpions","Shania Twain","Shebang","Sheppard","Snoop Dogg","Sonny & Cher","Soulja Boy","Spice Girls","Stevie Nicks","Sugarcult","Suzanne Vega","t.A.T.u.","Take That","Taylor Dayne","The 1975","The Animals","The Clash","The Coral","The Corrs","The Cure","The Darkness","The Hives","The Jackson 5","The Kid LAROI","The Kinks","The Knack","The Pierces","The Script","The Sounds","The Verve","The Wombats","Tom Jones","Tom Petty","Tone Norum","Tones And I","Toy-Box","Transplants","Travie McCoy","Van Halen","Vengaboys","Vitamin C","Wet Wet Wet","Wheatus","Wiktoria","Will Ferrell","Will Smith","Yellowcard","You Me At Six","Zach Sobiech"],x=()=>{const[e,a]=Object(t.useState)(I[Math.floor(Math.random()*I.length)]),[n,o]=Object(t.useState)([]);return r.a.createElement(W,{correctAnswer:e,initMissingLetters:2,initFakeLetters:2,random:Math.random,guesses:n,onMakeGuess:e=>{o([...n,e])},playAgain:()=>{a(I[Math.floor(Math.random()*I.length)]),o([])}})},K=["Ansiktet","\xc9dith Piaf","Sheppard","Arvingarna","Eric Carmen","Peps Persson","Will Smith","Limp Bizkit","Foo Fighters","Lisa Ekdahl","Zach Sobiech","Papa Roach","Midnight Oil","Kim Carnes","Billy Paul","Coldplay","Paris Hilton","Anastacia","Eddie Murphy","Men At Work","Dolly Parton","Vance Joy","Roy Orbison","Daft Punk","Bruno Mars","Lisa Nilsson","M\xf6tley Cr\xfce","Hugh Grant","Rihanna","Peaches","Halestorm","Marvin Gaye","Wheatus","Paul Simon","Cornershop","The Rasmus","The Beatles","Lana Del Rey","Elov & Beny","Van Halen","Adam Lambert","Glee Cast","G\xfcnther","Iggy Azalea","Imogen Heap","Cascada","Freestyle","Doja Cat","The Knack","Paramore","Phil Collins","Chuck Berry","Neil Diamond","AWOLNATION","Eiffel 65","Dire Straits","Architects","Billy Talent","Peter LeMarc","September","Ebba Gr\xf6n","Melody Club","Run\u2013D.M.C.","Simple Plan","Cypress Hill","Roxette","The Kinks","John Lennon","Vengaboys","Iggy Pop","Survivor","Pat Benatar","Gavin DeGraw","Masked Wolf","Sabaton","Lambretta","Ice Cube","Jeff Buckley","Donna Summer","Ane Brun","LeAnn Rimes","Timbuktu","Cutting Crew","The Kooks","Green Day","Familjen","Gorillaz","Westlife","Dr\xf6mhus","Docent D\xf6d","Roffe Ruff","Lil Wayne","Caramell","Cyndi Lauper","Sonny & Cher","Led Zeppelin","Iron & Wine","Rammstein","The 1975","Vitamin C","Linkin Park","Hoobastank","The Verve","Per Gessle","Afroman","Elton John","Jason Mraz","Fools Garden","Pet Shop Boys","Magnum Bonum","Lily Allen","Madonna","Maria Mena","George Ezra","Harry Styles","Young MC","C\xe9line Dion","Tone Norum","Icona Pop","Nickelback","Adam Tensta","Will Ferrell","Jessie J","Yellowcard","Erasure","Volbeat","Kid Rock","Keala Settle","Emma Bunton","Crazy Town","Nat King Cole","Anna Book","The Darkness","Norlie & KKV","24kGoldn","B*Witched","Girls Aloud","Blondie","Juice WRLD","Guns N Roses","Eurythmics","David Bowie","Eric Saade","Frej Larsson","Flo Rida","4 Non Blondes","The Wombats","Ricky Martin","blink-182","Anti-Flag","The Jackson 5","Clara Mae","Fatboy Slim","Jimmy Cliff","Daddy Yankee","Transplants","The Animals","Soulja Boy","Meat Loaf","Barbados","Spice Girls","Lykke Li","YUNGBLUD","Irene Cara","iann dior","Mark Ronson","Bonnie Tyler","Shakira","Outkast","Nirvana","The Script","Jace Everett","Stevie Nicks","S\xe4kert!","Metallica","Snoop Dogg","Nick Jonas","Foreigner","No Doubt","Millencolin","John Farnham","Wiktoria","Katy Perry","Gwen Stefani","Salt-N-Pepa","Die Antwoord","Kate Bush","Echosmith","Ace of Base","Travie McCoy","Disturbed","The Weeknd","Zara Larsson","You Me At Six","Wet Wet Wet","Beyonc\xe9","Radiohead","Lasse Holm","Joe Cocker","Eldkvarn","Ed Sheeran","Caesars","Kid Cudi","t.A.T.u.","Modest Mouse","The Corrs","Imperiet","The Police","Rod Stewart","Kings of Leon","Dua Lipa","Manu Chao","Haddaway","The Killers","Far & Son","Teddybears","Bastille","Ramones","Lady Gaga","Saweetie","The Pierces","Def Leppard","Kim Wilde","Smash Mouth","Fall Out Boy","The Sounds","Aerosmith","MexicoFALLZ","M\xe5neskin","First Aid Kit","2 Unlimited","Don McLean","America","Mattafix","Bryan Adams","A*Teens","Clean Bandit","Robin Cook","Shawn Mendes","All Saints","Aaliyah","Lou Reed","Hilary Duff","Bolaget","James Blunt","Nazareth","Van Morrison","Tom Petty","Taylor Swift","Alice Cooper","Diana Ross","Tomas Ledin","Sugarcult","Del Amitri","The Kid LAROI","Aaron Carter","Tenacious D","Tom Jones","The Cure","Flobots","Faith Hill","Alessia Cara","Kanye West","Jean Stout","Beastie Boys","Lazlo Bane","Journey","The Clash","The Hives","Rick Astley","Johnny Cash","Reel Big Fish","Snow Patrol","Taylor Dayne","Luis Fonsi","Nine Days","Gary Portnoy","Molly Sand\xe9n","Quinn XCII","Bright Eyes","Billy Joel","Maskinen","Tones And I","John Denver","Patti Smith","Shebang","Hans Zimmer","Scorpions","Owl City","Sex Pistols","Take That","Friends","Tina Turner","Miley Cyrus","In Flames","Bon Jovi","Madness","Bee Gees","Nicki Minaj","Eric Clapton","Bad Religion","Ryan Adams","Iron Maiden","Shania Twain","The Coral","Suzanne Vega","Don Omar","Jan Johansen","Marc Cohn","Toy-Box"];var j=n(46);const H=()=>{const{correctAnswer:e,random:a}=Object(t.useMemo)(()=>(function(){const e=A()%K.length,a=(n=e,function(){let e=n+=1831565813;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/4294967296});var n;return{correctAnswer:K[e],random:a}})(),[]),n=new j.a("dailyState",{path:"/"}),[o,i]=r.a.useState(function(e){const a=e.get("dailyState"),n=(new Date).toDateString();return(null===a||void 0===a?void 0:a.date)===n?a.guesses:(e.set("dailyState",{date:n,guesses:[]},{path:"/"}),[])}(n));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Bandagram #",A()),r.a.createElement(W,{correctAnswer:e,initMissingLetters:2,initFakeLetters:2,random:a,guesses:o,onMakeGuess:e=>{const a=[...o,e];n.set("dailyState",{...n.get("dailyState"),guesses:a},{path:"/"}),i(a)}}))};var z;const V=u.a.div(z||(z=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"])));var Y=function(e){return e.DailyQuiz="DailyQuiz",e.Practice="Practice",e}(Y||{});var Z=function(){const[e,a]=r.a.useState(Y.DailyQuiz);return r.a.createElement(V,{className:"App"},r.a.createElement(s.a,{value:e},r.a.createElement(c.a,{label:"BANDAGRAM",value:Y.DailyQuiz,onClick:()=>a(Y.DailyQuiz)}),r.a.createElement(c.a,{label:"Practice",value:Y.Practice,onClick:()=>a(Y.Practice)})),e===Y.Practice&&r.a.createElement(x,null),e===Y.DailyQuiz&&r.a.createElement(H,null))};var Q=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,92)).then(a=>{let{getCLS:n,getFID:t,getFCP:r,getLCP:o,getTTFB:i}=a;n(e),t(e),r(e),o(e),i(e)})};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),Q()}},[[53,1,2]]]);
//# sourceMappingURL=main.17214a62.chunk.js.map