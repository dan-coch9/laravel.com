import{c as Z}from"./app-ea607b40.js";var B={},ee={get exports(){return B},set exports(o){B=o}};(function(o){var m=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(g){var p=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,v=0,w={},s={manual:g.Prism&&g.Prism.manual,disableWorkerMessageHandler:g.Prism&&g.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof f?new f(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++v}),t.__id},clone:function t(e,a){a=a||{};var n,i;switch(s.util.type(e)){case"Object":if(i=s.util.objId(e),a[i])return a[i];n={},a[i]=n;for(var u in e)e.hasOwnProperty(u)&&(n[u]=t(e[u],a));return n;case"Array":return i=s.util.objId(e),a[i]?a[i]:(n=[],a[i]=n,e.forEach(function(c,l){n[l]=t(c,a)}),n);default:return e}},getLanguage:function(t){for(;t;){var e=p.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(p,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(n){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var a in e)if(e[a].src==t)return e[a]}return null}},isActive:function(t,e,a){for(var n="no-"+e;t;){var i=t.classList;if(i.contains(e))return!0;if(i.contains(n))return!1;t=t.parentElement}return!!a}},languages:{plain:w,plaintext:w,text:w,txt:w,extend:function(t,e){var a=s.util.clone(s.languages[t]);for(var n in e)a[n]=e[n];return a},insertBefore:function(t,e,a,n){n=n||s.languages;var i=n[t],u={};for(var c in i)if(i.hasOwnProperty(c)){if(c==e)for(var l in a)a.hasOwnProperty(l)&&(u[l]=a[l]);a.hasOwnProperty(c)||(u[c]=i[c])}var h=n[t];return n[t]=u,s.languages.DFS(s.languages,function(x,$){$===h&&x!=t&&(this[x]=u)}),u},DFS:function t(e,a,n,i){i=i||{};var u=s.util.objId;for(var c in e)if(e.hasOwnProperty(c)){a.call(e,c,e[c],n||c);var l=e[c],h=s.util.type(l);h==="Object"&&!i[u(l)]?(i[u(l)]=!0,t(l,a,null,i)):h==="Array"&&!i[u(l)]&&(i[u(l)]=!0,t(l,a,c,i))}}},plugins:{},highlightAll:function(t,e){s.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,a){var n={callback:a,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),s.hooks.run("before-all-elements-highlight",n);for(var i=0,u;u=n.elements[i++];)s.highlightElement(u,e===!0,n.callback)},highlightElement:function(t,e,a){var n=s.util.getLanguage(t),i=s.languages[n];s.util.setLanguage(t,n);var u=t.parentElement;u&&u.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(u,n);var c=t.textContent,l={element:t,language:n,grammar:i,code:c};function h($){l.highlightedCode=$,s.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,s.hooks.run("after-highlight",l),s.hooks.run("complete",l),a&&a.call(l.element)}if(s.hooks.run("before-sanity-check",l),u=l.element.parentElement,u&&u.nodeName.toLowerCase()==="pre"&&!u.hasAttribute("tabindex")&&u.setAttribute("tabindex","0"),!l.code){s.hooks.run("complete",l),a&&a.call(l.element);return}if(s.hooks.run("before-highlight",l),!l.grammar){h(s.util.encode(l.code));return}if(e&&g.Worker){var x=new Worker(s.filename);x.onmessage=function($){h($.data)},x.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else h(s.highlight(l.code,l.grammar,l.language))},highlight:function(t,e,a){var n={code:t,grammar:e,language:a};if(s.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=s.tokenize(n.code,n.grammar),s.hooks.run("after-tokenize",n),f.stringify(s.util.encode(n.tokens),n.language)},tokenize:function(t,e){var a=e.rest;if(a){for(var n in a)e[n]=a[n];delete e.rest}var i=new _;return C(i,i.head,t),k(t,i,e,i.head,0),M(i)},hooks:{all:{},add:function(t,e){var a=s.hooks.all;a[t]=a[t]||[],a[t].push(e)},run:function(t,e){var a=s.hooks.all[t];if(!(!a||!a.length))for(var n=0,i;i=a[n++];)i(e)}},Token:f};g.Prism=s;function f(t,e,a,n){this.type=t,this.content=e,this.alias=a,this.length=(n||"").length|0}f.stringify=function t(e,a){if(typeof e=="string")return e;if(Array.isArray(e)){var n="";return e.forEach(function(h){n+=t(h,a)}),n}var i={type:e.type,content:t(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a},u=e.alias;u&&(Array.isArray(u)?Array.prototype.push.apply(i.classes,u):i.classes.push(u)),s.hooks.run("wrap",i);var c="";for(var l in i.attributes)c+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+c+">"+i.content+"</"+i.tag+">"};function A(t,e,a,n){t.lastIndex=e;var i=t.exec(a);if(i&&n&&i[1]){var u=i[1].length;i.index+=u,i[0]=i[0].slice(u)}return i}function k(t,e,a,n,i,u){for(var c in a)if(!(!a.hasOwnProperty(c)||!a[c])){var l=a[c];l=Array.isArray(l)?l:[l];for(var h=0;h<l.length;++h){if(u&&u.cause==c+","+h)return;var x=l[h],$=x.inside,G=!!x.lookbehind,N=!!x.greedy,J=x.alias;if(N&&!x.pattern.global){var K=x.pattern.toString().match(/[imsuy]*$/)[0];x.pattern=RegExp(x.pattern.source,K+"g")}for(var W=x.pattern||x,F=n.next,E=i;F!==e.tail&&!(u&&E>=u.reach);E+=F.value.length,F=F.next){var T=F.value;if(e.length>t.length)return;if(!(T instanceof f)){var q=1,S;if(N){if(S=A(W,E,t,G),!S||S.index>=t.length)break;var I=S.index,Q=S.index+S[0].length,L=E;for(L+=F.value.length;I>=L;)F=F.next,L+=F.value.length;if(L-=F.value.length,E=L,F.value instanceof f)continue;for(var D=F;D!==e.tail&&(L<Q||typeof D.value=="string");D=D.next)q++,L+=D.value.length;q--,T=t.slice(E,L),S.index-=E}else if(S=A(W,0,T,G),!S)continue;var I=S.index,P=S[0],H=T.slice(0,I),U=T.slice(I+P.length),O=E+T.length;u&&O>u.reach&&(u.reach=O);var z=F.prev;H&&(z=C(e,z,H),E+=H.length),j(e,z,q);var V=new f(c,$?s.tokenize(P,$):P,J,P);if(F=C(e,z,V),U&&C(e,F,U),q>1){var R={cause:c+","+h,reach:O};k(t,e,a,F.prev,E,R),u&&R.reach>u.reach&&(u.reach=R.reach)}}}}}}function _(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function C(t,e,a){var n=e.next,i={value:a,prev:e,next:n};return e.next=i,n.prev=i,t.length++,i}function j(t,e,a){for(var n=e.next,i=0;i<a&&n!==t.tail;i++)n=n.next;e.next=n,n.prev=e,t.length-=i}function M(t){for(var e=[],a=t.head.next;a!==t.tail;)e.push(a.value),a=a.next;return e}if(!g.document)return g.addEventListener&&(s.disableWorkerMessageHandler||g.addEventListener("message",function(t){var e=JSON.parse(t.data),a=e.language,n=e.code,i=e.immediateClose;g.postMessage(s.highlight(n,s.languages[a],a)),i&&g.close()},!1)),s;var b=s.util.currentScript();b&&(s.filename=b.src,b.hasAttribute("data-manual")&&(s.manual=!0));function d(){s.manual||s.highlightAll()}if(!s.manual){var y=document.readyState;y==="loading"||y==="interactive"&&b&&b.defer?document.addEventListener("DOMContentLoaded",d):window.requestAnimationFrame?window.requestAnimationFrame(d):window.setTimeout(d,16)}return s}(m);o.exports&&(o.exports=r),typeof Z<"u"&&(Z.Prism=r),r.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",function(g){g.type==="entity"&&(g.attributes.title=g.content.replace(/&amp;/,"&"))}),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(p,v){var w={};w["language-"+v]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[v]},w.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:w}};s["language-"+v]={pattern:/[\s\S]+/,inside:r.languages[v]};var f={};f[p]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return p}),"i"),lookbehind:!0,greedy:!0,inside:s},r.languages.insertBefore("markup","cdata",f)}}),Object.defineProperty(r.languages.markup.tag,"addAttribute",{value:function(g,p){r.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+g+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[p,"language-"+p],inside:r.languages[p]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,function(g){var p=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;g.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+p.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+p.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+p.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:p,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},g.languages.css.atrule.inside.rest=g.languages.css;var v=g.languages.markup;v&&(v.tag.addInlined("style","css"),v.tag.addAttribute("style","css"))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:r.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),r.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),r.languages.markup&&(r.languages.markup.tag.addInlined("script","javascript"),r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),r.languages.js=r.languages.javascript,function(){if(typeof r>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var g="Loading…",p=function(b,d){return"✖ Error "+b+" while fetching file: "+d},v="✖ Error: File does not exist or is empty",w={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",f="loading",A="loaded",k="failed",_="pre[data-src]:not(["+s+'="'+A+'"]):not(['+s+'="'+f+'"])';function C(b,d,y){var t=new XMLHttpRequest;t.open("GET",b,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?d(t.responseText):t.status>=400?y(p(t.status,t.statusText)):y(v))},t.send(null)}function j(b){var d=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b||"");if(d){var y=Number(d[1]),t=d[2],e=d[3];return t?e?[y,Number(e)]:[y,void 0]:[y,y]}}r.hooks.add("before-highlightall",function(b){b.selector+=", "+_}),r.hooks.add("before-sanity-check",function(b){var d=b.element;if(d.matches(_)){b.code="",d.setAttribute(s,f);var y=d.appendChild(document.createElement("CODE"));y.textContent=g;var t=d.getAttribute("data-src"),e=b.language;if(e==="none"){var a=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=w[a]||a}r.util.setLanguage(y,e),r.util.setLanguage(d,e);var n=r.plugins.autoloader;n&&n.loadLanguages(e),C(t,function(i){d.setAttribute(s,A);var u=j(d.getAttribute("data-range"));if(u){var c=i.split(/\r\n?|\n/g),l=u[0],h=u[1]==null?c.length:u[1];l<0&&(l+=c.length),l=Math.max(0,Math.min(l-1,c.length)),h<0&&(h+=c.length),h=Math.max(0,Math.min(h,c.length)),i=c.slice(l,h).join(`
`),d.hasAttribute("data-start")||d.setAttribute("data-start",String(l+1))}y.textContent=i,r.highlightElement(y)},function(i){d.setAttribute(s,k),y.textContent=i})}}),r.plugins.fileHighlight={highlight:function(d){for(var y=(d||document).querySelectorAll(_),t=0,e;e=y[t++];)r.highlightElement(e)}};var M=!1;r.fileHighlight=function(){M||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),M=!0),r.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(ee);const te=B,ae=()=>{localStorage.theme="dark",window.updateTheme()},ne=()=>{localStorage.theme="light",window.updateTheme()},re=()=>{localStorage.theme="system",window.updateTheme()};te.manual=!0;ie();se();le();ue();function ie(){[...document.querySelector(".docs_main").querySelectorAll("a[name]")].forEach(o=>{const m=o.parentNode.nextElementSibling;m.id=o.name,o.href=`#${o.name}`,o.removeAttribute("name"),[...m.childNodes].forEach(r=>o.appendChild(r)),m.appendChild(o)})}function se(){[...document.querySelectorAll(".docs_sidebar ul")].forEach(o=>{const m=window.location.pathname.split("/").length,r=o.querySelector('li a[href="'+(m===3?window.location.pathname+"/installation":window.location.pathname)+'"]');r&&(r.parentNode.parentNode.parentNode.classList.add("sub--on"),r.parentNode.classList.add("active"))}),[...document.querySelectorAll(".docs_sidebar h2")].forEach(o=>{o.addEventListener("click",m=>{m.preventDefault();const r=o.parentNode.classList.contains("sub--on");[...document.querySelectorAll(".docs_sidebar ul li")].forEach(g=>g.classList.remove("sub--on")),r||o.parentNode.classList.add("sub--on")})})}function le(){[...document.querySelectorAll(".docs_main blockquote p")].forEach(o=>{X(o,/\{(.*?)\}/,m=>{switch(m){case"note":return["/img/callouts/exclamation.min.svg","bg-red-600"];case"tip":return["/img/callouts/lightbulb.min.svg","bg-purple-600"];case"laracasts":case"video":return["/img/callouts/laracast.min.svg","bg-blue-600"];default:return[null,null]}}),X(o,/^<strong>(.*?)<\/strong>(?:<br>\n?)?/,m=>{switch(m){case"Warning":return["/img/callouts/exclamation.min.svg","bg-red-600"];case"Note":return["/img/callouts/lightbulb.min.svg","bg-purple-600"];default:return[null,null]}})})}function X(o,m,r){var g=o.innerHTML,p=g.match(m),v,w;if(p)var s=p[1]||!1;if(s){if([v,w]=r(s),v===null&&w===null)return;const f=document.createElement("div");f.classList="mb-10 max-w-2xl mx-auto px-4 py-8 shadow-lg lg:flex lg:items-center";const A=document.createElement("div");A.classList=`w-20 h-20 mb-6 flex items-center justify-center shrink-0 ${w} lg:mb-0`;const k=document.createElement("img");k.src=v,k.classList="opacity-75",A.appendChild(k),f.appendChild(A),o.parentNode.insertBefore(f,o),o.innerHTML=g.replace(m,""),o.classList="mb-0 lg:ml-6",f.classList.add("callout"),f.appendChild(o)}}function ue(){function o(g){const p=new Date().valueOf();Array.from(g.rows).forEach((v,w)=>{if(w>0){const s=v.cells,f=s[0],A=Y(s[s.length-2]),k=Y(s[s.length-1]);p>k?f.classList.add("bg-red-500","support-policy-highlight"):p<=k&&p>A&&f.classList.add("bg-orange-600","support-policy-highlight")}})}const m=document.querySelector(".docs_main #support-policy ~ div table:first-of-type");if(m){o(m);return}const r=document.querySelector(".docs_main #support-policy ~ table:first-of-type");r&&o(r)}function Y(o){return Date.parse(o.innerHTML.replace(/(\d+)(st|nd|rd|th)/,"$1"))}window.toDarkMode=ae;window.toLightMode=ne;window.toSystemMode=re;