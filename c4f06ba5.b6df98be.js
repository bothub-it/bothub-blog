(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return c}));n(58),n(31),n(22),n(23),n(59),n(0);var a=n(173);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={id:"nov-2019",title:"November 2019",sidebar_label:"nov-2019"},i=[{value:"Newly Added Features",id:"newly-added-features",children:[{value:"UI Changes",id:"ui-changes",children:[]},{value:"Back-end Changes",id:"back-end-changes",children:[]},{value:"NLP Changes",id:"nlp-changes",children:[]},{value:"Roadmap",id:"roadmap",children:[]}]}],s={rightToc:i},l="wrapper";function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(l,r({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Bug fixes, better models and speed have been the main focus of this new update")),Object(a.b)("p",null,"Bothub has just released a new version and this post will highlight the new main changes. This release focused on updating our legacy Rasa version and fixing the stability problems we have been facing ever since we acquired more users. As a consequence of these changes, Bothub is now faster than ever and finally capable of handling the amount of requests necessary for handling the new ",Object(a.b)("a",r({parentName:"p"},{href:"https://rapidpro.io/"}),"RapidPro")," integration."),Object(a.b)("h2",{id:"newly-added-features"},"Newly Added Features"),Object(a.b)("h3",{id:"ui-changes"},"UI Changes"),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"summary")," screen has been redesigned to look prettier than it used to be. The entities and labels now appear colored and much mure organized (instead of the old greyish labels):"),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"nov-2019-media/new_summary_2.0.png",alt:null}))),Object(a.b)("p",null,"Besides that, you can now write your formatting in Markdown:"),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"nov-2019-media/markdown_summary.gif",alt:null}))),Object(a.b)("p",null,"The repositories are now ranked by the most popular ones. To accomplish that we are temporarily using the number of executed evaluations, but this metric may change in the future."),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},'"analyze text"')," window finally works by just typing Enter and has a new icon to copy the JSON content into the clipboard:"),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"nov-2019-media/analyze_refactored.gif",alt:null}))),Object(a.b)("p",null,"The training screen was refactored to show all the training samples without the need to select a specific intent. If you want to see examples of a single intent, you can select it in the filter:"),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"nov-2019-media/new_training.gif",alt:null}))),Object(a.b)("h3",{id:"back-end-changes"},"Back-end Changes"),Object(a.b)("p",null,"During this month, we've been working on migrating all the old routes from ",Object(a.b)("inlineCode",{parentName:"p"},"v1")," to ",Object(a.b)("inlineCode",{parentName:"p"},"v2"),". The new routes can be consulted and tested at ",Object(a.b)("a",r({parentName:"p"},{href:"https://api.bothub.it/"}),"https://api.bothub.it/"),"."),Object(a.b)("p",null,"As of this version, Bothub allows each repository to use a self-hosted NLP instance if you want. This setting isn't available in the front-end yet, but it will be soon."),Object(a.b)("h3",{id:"nlp-changes"},"NLP Changes"),Object(a.b)("p",null,"We've updated the version of Rasa to ",Object(a.b)("inlineCode",{parentName:"p"},"1.4.3")," and of SpaCy to ",Object(a.b)("inlineCode",{parentName:"p"},"2.1.9"),". This changes bring all of their ",Object(a.b)("a",r({parentName:"p"},{href:"https://explosion.ai/blog/spacy-v2-1"}),"latest improvements")," to Bothub as well. Besides that, the NLP API now makes use of ",Object(a.b)("a",r({parentName:"p"},{href:"https://fastapi.tiangolo.com/"}),"FastAPI")," instead of ",Object(a.b)("a",r({parentName:"p"},{href:"https://www.tornadoweb.org/en/stable/"}),"Tornado"),", making the responses faster."),Object(a.b)("p",null,"We now successfully cache the language embeddings in a way that they can be shared among many Bothub-NLP instances, which means we can now run tens of instances and use just a small amount of memory. Also the Rasa code was better isolated, making future Rasa updates easier than ever."),Object(a.b)("p",null,"There is a new switch available in the Settings screen, the ",Object(a.b)("em",{parentName:"p"},'"Use analyze char"')," option. This option makes some predictions better for languages that have complicated morphological variations of certain words, such as the ",Object(a.b)("a",r({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Romance_languages"}),"Romance languages")," and, with enough examples, it can make the models more robust against mistypes."),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"nov-2019-media/use_analyze_char.png",alt:null}))),Object(a.b)("p",null,"The NLP routes can be consulted at ",Object(a.b)("a",r({parentName:"p"},{href:"https://nlp.bothub.it"}),"https://nlp.bothub.it"),"."),Object(a.b)("h3",{id:"roadmap"},"Roadmap"),Object(a.b)("p",null,"This was the first official Bothub update, which is why we decided to cover the main changes we've done so far. Many of the features we introduced are far from polished. We still have plans to roll out a better permissions system that will allow repository owners to define customized permission groups."),Object(a.b)("p",null,"Aside from that, we have plans to experiment with better visualizations and add features such as issues tracker and dataset forking. Stay tuned!"))}c.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),h=a,u=p[s+"."+h]||p[h]||c[h]||o;return n?r.a.createElement(u,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(u,Object.assign({},{ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var h=2;h<o;h++)i[h]=n[h];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);