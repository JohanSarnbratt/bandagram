(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,n,a){e.exports=a(58)},53:function(e,n,a){},54:function(e,n,a){},58:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(31),i=a.n(o),l=(a(53),a(54),a(15));function s(e){let n,a=e.length;for(;a>0;)n=Math.floor(Math.random()*a),a--,[e[a],e[n]]=[e[n],e[a]];return e}var c,u=a(17),m=a(81),d=a(78),h=a(77),y=a(79);const g=Object(u.a)(y.a)(c||(c=Object(l.a)(["\n  width: 25px;\n  height: 25px;\n  font-size: 15px;\n  font-weight: bold;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 3px;\n"]))),p=e=>{let{letter:n,backgroundColor:a}=e;const t=a?"white":void 0;return r.a.createElement(g,{style:{backgroundColor:a,color:t}},n)};function f(e){return e.toLowerCase().split("").filter(e=>" "!==e)}function C(e,n){return r.a.createElement(r.a.Fragment,null,function(e,n){let a=f(e);return n.map(e=>{const n=a.includes(e);if(n){const n=a.findIndex(n=>n===e);a.splice(n,1)}return{letter:e,guessed:n}})}(e,n).map((e,n)=>{let{letter:a,guessed:t}=e;const o=t?"orange":void 0;return r.a.createElement(p,{letter:a,backgroundColor:o,key:n})}))}function k(e,n,a){return r.a.createElement(r.a.Fragment,null,function(e,n,a){const t=f(n);let r=[...t,...a];return f(e).map((e,n)=>{const a=r.includes(e);if(a){const n=r.findIndex(n=>n===e);r.splice(n,1)}const o=e===t[n];return{guessLetter:e,guessed:o,wrong:!a}})}(e,n,a).map((e,n)=>{let{guessLetter:a,guessed:t,wrong:o}=e;const i=t?"green":o?"red":void 0;return r.a.createElement(p,{letter:a,backgroundColor:i,key:n})}))}function M(e,n){return e.toLowerCase().replace(" ","").trim()===n.toLowerCase().replace(" ","").trim()}var b;const S=u.a.div(b||(b=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"]))),T=e=>{let{correctAnswer:n,lastGuess:a}=e;const t=M(a,n);return r.a.createElement(S,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{variant:"body1"}," ",n),r.a.createElement("h1",null,"Good job!")):r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{variant:"body1"}," ",n),r.a.createElement("h1",null,"So close! Better luck next time...")))};var L,E,A;const B=u.a.div(L||(L=Object(l.a)(["\n  display: inline-block;\n"]))),w=u.a.div(E||(E=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  "]))),D=u.a.div(A||(A=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: flex-start;\n  margin-top: 50px;\n"]))),v=e=>{let{correctAnswer:n,initMissingLetters:a,initFakeLetters:o}=e;const[i,l]=Object(t.useState)([]),[c,u]=r.a.useState(""),[y,g]=Object(t.useState)(a),[p,b]=Object(t.useState)(o),S=Object(t.useMemo)(()=>s(f(n.toLowerCase())),[n]),L=Object(t.useMemo)(()=>y>0?S.slice(0,-y):S,[y,S]),E=Object(t.useMemo)(()=>f(function(e){let n="";const a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<e;t++)n+=a.charAt(Math.floor(Math.random()*a.length));return n}(o)),[o]),A=Object(t.useMemo)(()=>E.slice(0,p),[p,E]),v=Object(t.useMemo)(()=>s([...L,...A]),[L,A]),F=e=>{e.preventDefault(),i.length%2===0&&p>0&&b(p-1),i.length%2===1&&y>0&&g(y-1),l([...i,c]),u("")},P=i.length&&M(i[i.length-1],n)||i.length>5;return r.a.createElement(w,null,r.a.createElement(D,null,i.map((e,a)=>r.a.createElement(B,{key:a},k(e,n,A))),P?r.a.createElement(T,{correctAnswer:n,lastGuess:i[i.length-1]}):r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{variant:"body2",align:"center",sx:{fontSize:12}},"Missing letters: ",y," Fake letters: ",p),r.a.createElement(B,null,C(c,v)),r.a.createElement("form",{onSubmit:F},r.a.createElement(d.a,{style:{maxWidth:300,width:"100%"},value:c,onChange:e=>u(e.target.value)}),r.a.createElement(h.a,{type:"submit",onClick:F},"Guess")))))},F=["Lady Gaga","Miley Cyrus","Taylor Swift","Ed Sheeran","No Doubt","Elton John","Green Day","Icona Pop","Lana Del Rey","Nirvana","The Beatles","Alice Cooper","David Bowie","Harry Styles","Johnny Cash","Linkin Park","Madonna","Manu Chao","Nickelback","YUNGBLUD","A*Teens","Ace of Base","Aerosmith","Bee Gees","blink-182","Bon Jovi","Bright Eyes","Bryan Adams","C\xe9line Dion","Dire Straits","Ebba Gr\xf6n","Erasure","Eric Clapton","Foo Fighters","Gorillaz","Imperiet","Jan Johansen","Juice WRLD","Lambretta","Lily Allen","Maskinen","Meat Loaf","Patti Smith","Paul Simon","Ramones","Shakira","Shawn Mendes","Tenacious D","The Police","Tina Turner","Tomas Ledin","Zara Larsson","24kGoldn","Aaron Carter","Adam Lambert","Afroman","Ansiktet","Arvingarna","Billy Joel","Blondie","Bolaget","Bonnie Tyler","Caesars","Coldplay","Daddy Yankee","Daft Punk","Diana Ross","Die Antwoord","Disturbed","Doja Cat","Dolly Parton","Donna Summer","Dua Lipa","Eurythmics","Faith Hill","Fall Out Boy","Far & Son","Fatboy Slim","First Aid Kit","Fools Garden","Glee Cast","Guns N Roses","Iggy Azalea","In Flames","Irene Cara","Iron Maiden","Jeff Buckley","John Lennon","Kate Bush","Katy Perry","Kid Rock","Kim Carnes","Lasse Holm","Lazlo Bane","LeAnn Rimes","Led Zeppelin","Limp Bizkit","Lisa Ekdahl","Madness","Melody Club","Neil Diamond","Nicki Minaj","Outkast","Papa Roach","Peps Persson","Pet Shop Boys","Radiohead","Reel Big Fish","Rick Astley","Ricky Martin","Rihanna","Roxette","Run\u2013D.M.C.","Ryan Adams","September","Sex Pistols","Simple Plan","Smash Mouth","Snow Patrol","Survivor","Teddybears","The Killers","The Kooks","The Rasmus","The Weeknd","Timbuktu","Van Morrison","Vance Joy","Volbeat","Westlife","Young MC","2 Unlimited","4 Non Blondes","Aaliyah","Adam Tensta","Alessia Cara","All Saints","America","Anastacia","Ane Brun","Anna Book","Anti-Flag","Architects","AWOLNATION","B*Witched","Bad Religion","Barbados","Bastille","Beastie Boys","Beyonc\xe9","Billy Paul","Billy Talent","Bruno Mars","Caramell","Cascada","Chuck Berry","Clara Mae","Clean Bandit","Cornershop","Crazy Town","Cutting Crew","Cyndi Lauper","Cypress Hill","Def Leppard","Del Amitri","Docent D\xf6d","Don McLean","Don Omar","Dr\xf6mhus","Echosmith","Eddie Murphy","\xc9dith Piaf","Eiffel 65","Eldkvarn","Elov & Beny","Emma Bunton","Eric Carmen","Eric Saade","Familjen","Flo Rida","Flobots","Foreigner","Freestyle","Frej Larsson","Friends","Gary Portnoy","Gavin DeGraw","George Ezra","Girls Aloud","G\xfcnther","Gwen Stefani","Haddaway","Halestorm","Hans Zimmer","Hilary Duff","Hoobastank","Hugh Grant","iann dior","Ice Cube","Iggy Pop","Imogen Heap","Iron & Wine","Jace Everett","James Blunt","Jason Mraz","Jean Stout","Jessie J","Jimmy Cliff","Joe Cocker","John Denver","John Farnham","Journey","Kanye West","Keala Settle","Kid Cudi","Kim Wilde","Kings of Leon","Lil Wayne","Lisa Nilsson","Lou Reed","Luis Fonsi","Lykke Li","Magnum Bonum","M\xe5neskin","Marc Cohn","Maria Mena","Mark Ronson","Marvin Gaye","Masked Wolf","Mattafix","Men At Work","Metallica","MexicoFALLZ","Midnight Oil","Millencolin","Modest Mouse","Molly Sand\xe9n","M\xf6tley Cr\xfce","Nat King Cole","Nazareth","Nick Jonas","Nine Days","Norlie & KKV","Owl City","Paramore","Paris Hilton","Pat Benatar","Peaches","Per Gessle","Peter LeMarc","Phil Collins","Quinn XCII","Rammstein","Robin Cook","Rod Stewart","Roffe Ruff","Roy Orbison","Sabaton","S\xe4kert!","Salt-N-Pepa","Saweetie","Scorpions","Shania Twain","Shebang","Sheppard","Snoop Dogg","Sonny & Cher","Soulja Boy","Spice Girls","Stevie Nicks","Sugarcult","Suzanne Vega","t.A.T.u.","Take That","Taylor Dayne","The 1975","The Animals","The Clash","The Coral","The Corrs","The Cure","The Darkness","The Hives","The Jackson 5","The Kid LAROI","The Kinks","The Knack","The Pierces","The Script","The Sounds","The Verve","The Wombats","Tom Jones","Tom Petty","Tone Norum","Tones And I","Toy-Box","Transplants","Travie McCoy","Van Halen","Vengaboys","Vitamin C","Wet Wet Wet","Wheatus","Wiktoria","Will Ferrell","Will Smith","Yellowcard","You Me At Six","Zach Sobiech"];var P=function(){const e=Object(t.useMemo)(()=>F[Math.floor(Math.random()*F.length)],[]);return r.a.createElement("div",{className:"App"},r.a.createElement(v,{correctAnswer:e,initMissingLetters:2,initFakeLetters:2}))};var R=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,82)).then(n=>{let{getCLS:a,getFID:t,getFCP:r,getLCP:o,getTTFB:i}=n;a(e),t(e),r(e),o(e),i(e)})};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),R()}},[[48,1,2]]]);
//# sourceMappingURL=main.1272f2a5.chunk.js.map