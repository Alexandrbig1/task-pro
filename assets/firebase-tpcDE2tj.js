import{R as ko,r as d,j as T,c as V,b as st,d as qn,e as Zs,u as Te,p as Rn,_ as qo}from"./index-FYmfAUiZ.js";import{G as ea}from"./iconBase-4dB9QrqQ.js";function ta(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var Vl=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Kl=ta(function(t){return Vl.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function xt(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},f.apply(this,arguments)}function Gl(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function ql(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Yl=function(){function t(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ql(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Gl(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Se="-ms-",ar="-moz-",q="-webkit-",na="comm",Yo="rule",Xo="decl",Xl="@import",ra="@keyframes",Jl="@layer",Ql=Math.abs,xr=String.fromCharCode,Zl=Object.assign;function ec(t,e){return Ie(t,0)^45?(((e<<2^Ie(t,0))<<2^Ie(t,1))<<2^Ie(t,2))<<2^Ie(t,3):0}function oa(t){return t.trim()}function tc(t,e){return(t=e.exec(t))?t[0]:t}function Y(t,e,n){return t.replace(e,n)}function Po(t,e){return t.indexOf(e)}function Ie(t,e){return t.charCodeAt(e)|0}function kn(t,e,n){return t.slice(e,n)}function Je(t){return t.length}function Jo(t){return t.length}function Yn(t,e){return e.push(t),t}function nc(t,e){return t.map(e).join("")}var wr=1,rn=1,ia=0,Ne=0,_e=0,cn="";function Ir(t,e,n,r,o,i,s){return{value:t,root:e,parent:n,type:r,props:o,children:i,line:wr,column:rn,length:s,return:""}}function mn(t,e){return Zl(Ir("",null,null,"",null,null,0),t,{length:-t.length},e)}function rc(){return _e}function oc(){return _e=Ne>0?Ie(cn,--Ne):0,rn--,_e===10&&(rn=1,wr--),_e}function De(){return _e=Ne<ia?Ie(cn,Ne++):0,rn++,_e===10&&(rn=1,wr++),_e}function Ze(){return Ie(cn,Ne)}function Zn(){return Ne}function Fn(t,e){return kn(cn,t,e)}function Pn(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sa(t){return wr=rn=1,ia=Je(cn=t),Ne=0,[]}function aa(t){return cn="",t}function er(t){return oa(Fn(Ne-1,Oo(t===91?t+2:t===40?t+1:t)))}function ic(t){for(;(_e=Ze())&&_e<33;)De();return Pn(t)>2||Pn(_e)>3?"":" "}function sc(t,e){for(;--e&&De()&&!(_e<48||_e>102||_e>57&&_e<65||_e>70&&_e<97););return Fn(t,Zn()+(e<6&&Ze()==32&&De()==32))}function Oo(t){for(;De();)switch(_e){case t:return Ne;case 34:case 39:t!==34&&t!==39&&Oo(_e);break;case 40:t===41&&Oo(t);break;case 92:De();break}return Ne}function ac(t,e){for(;De()&&t+_e!==57;)if(t+_e===84&&Ze()===47)break;return"/*"+Fn(e,Ne-1)+"*"+xr(t===47?t:De())}function lc(t){for(;!Pn(Ze());)De();return Fn(t,Ne)}function cc(t){return aa(tr("",null,null,null,[""],t=sa(t),0,[0],t))}function tr(t,e,n,r,o,i,s,a,l){for(var c=0,u=0,p=s,h=0,v=0,m=0,g=1,x=1,_=1,S=0,y="",b=o,w=i,I=r,E=y;x;)switch(m=S,S=De()){case 40:if(m!=108&&Ie(E,p-1)==58){Po(E+=Y(er(S),"&","&\f"),"&\f")!=-1&&(_=-1);break}case 34:case 39:case 91:E+=er(S);break;case 9:case 10:case 13:case 32:E+=ic(m);break;case 92:E+=sc(Zn()-1,7);continue;case 47:switch(Ze()){case 42:case 47:Yn(uc(ac(De(),Zn()),e,n),l);break;default:E+="/"}break;case 123*g:a[c++]=Je(E)*_;case 125*g:case 59:case 0:switch(S){case 0:case 125:x=0;case 59+u:_==-1&&(E=Y(E,/\f/g,"")),v>0&&Je(E)-p&&Yn(v>32?$i(E+";",r,n,p-1):$i(Y(E," ","")+";",r,n,p-2),l);break;case 59:E+=";";default:if(Yn(I=Ai(E,e,n,c,u,o,a,y,b=[],w=[],p),i),S===123)if(u===0)tr(E,e,I,I,b,i,p,a,w);else switch(h===99&&Ie(E,3)===110?100:h){case 100:case 108:case 109:case 115:tr(t,I,I,r&&Yn(Ai(t,I,I,0,0,o,a,y,o,b=[],p),w),o,w,p,a,r?b:w);break;default:tr(E,I,I,I,[""],w,0,a,w)}}c=u=v=0,g=_=1,y=E="",p=s;break;case 58:p=1+Je(E),v=m;default:if(g<1){if(S==123)--g;else if(S==125&&g++==0&&oc()==125)continue}switch(E+=xr(S),S*g){case 38:_=u>0?1:(E+="\f",-1);break;case 44:a[c++]=(Je(E)-1)*_,_=1;break;case 64:Ze()===45&&(E+=er(De())),h=Ze(),u=p=Je(y=E+=lc(Zn())),S++;break;case 45:m===45&&Je(E)==2&&(g=0)}}return i}function Ai(t,e,n,r,o,i,s,a,l,c,u){for(var p=o-1,h=o===0?i:[""],v=Jo(h),m=0,g=0,x=0;m<r;++m)for(var _=0,S=kn(t,p+1,p=Ql(g=s[m])),y=t;_<v;++_)(y=oa(g>0?h[_]+" "+S:Y(S,/&\f/g,h[_])))&&(l[x++]=y);return Ir(t,e,n,o===0?Yo:a,l,c,u)}function uc(t,e,n){return Ir(t,e,n,na,xr(rc()),kn(t,2,-2),0)}function $i(t,e,n,r){return Ir(t,e,n,Xo,kn(t,0,r),kn(t,r+1,-1),r)}function Qt(t,e){for(var n="",r=Jo(t),o=0;o<r;o++)n+=e(t[o],o,t,e)||"";return n}function dc(t,e,n,r){switch(t.type){case Jl:if(t.children.length)break;case Xl:case Xo:return t.return=t.return||t.value;case na:return"";case ra:return t.return=t.value+"{"+Qt(t.children,r)+"}";case Yo:t.value=t.props.join(",")}return Je(n=Qt(t.children,r))?t.return=t.value+"{"+n+"}":""}function fc(t){var e=Jo(t);return function(n,r,o,i){for(var s="",a=0;a<e;a++)s+=t[a](n,r,o,i)||"";return s}}function pc(t){return function(e){e.root||(e=e.return)&&t(e)}}var hc=function(e,n,r){for(var o=0,i=0;o=i,i=Ze(),o===38&&i===12&&(n[r]=1),!Pn(i);)De();return Fn(e,Ne)},mc=function(e,n){var r=-1,o=44;do switch(Pn(o)){case 0:o===38&&Ze()===12&&(n[r]=1),e[r]+=hc(Ne-1,n,r);break;case 2:e[r]+=er(o);break;case 4:if(o===44){e[++r]=Ze()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=xr(o)}while(o=De());return e},gc=function(e,n){return aa(mc(sa(e),n))},Mi=new WeakMap,bc=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,o=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!Mi.get(r))&&!o){Mi.set(e,!0);for(var i=[],s=gc(n,i),a=r.props,l=0,c=0;l<s.length;l++)for(var u=0;u<a.length;u++,c++)e.props[c]=i[l]?s[l].replace(/&\f/g,a[u]):a[u]+" "+s[l]}}},vc=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function la(t,e){switch(ec(t,e)){case 5103:return q+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return q+t+ar+t+Se+t+t;case 6828:case 4268:return q+t+Se+t+t;case 6165:return q+t+Se+"flex-"+t+t;case 5187:return q+t+Y(t,/(\w+).+(:[^]+)/,q+"box-$1$2"+Se+"flex-$1$2")+t;case 5443:return q+t+Se+"flex-item-"+Y(t,/flex-|-self/,"")+t;case 4675:return q+t+Se+"flex-line-pack"+Y(t,/align-content|flex-|-self/,"")+t;case 5548:return q+t+Se+Y(t,"shrink","negative")+t;case 5292:return q+t+Se+Y(t,"basis","preferred-size")+t;case 6060:return q+"box-"+Y(t,"-grow","")+q+t+Se+Y(t,"grow","positive")+t;case 4554:return q+Y(t,/([^-])(transform)/g,"$1"+q+"$2")+t;case 6187:return Y(Y(Y(t,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),t,"")+t;case 5495:case 3959:return Y(t,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return Y(Y(t,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+Se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+t+t;case 4095:case 3583:case 4068:case 2532:return Y(t,/(.+)-inline(.+)/,q+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(t)-1-e>6)switch(Ie(t,e+1)){case 109:if(Ie(t,e+4)!==45)break;case 102:return Y(t,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+ar+(Ie(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Po(t,"stretch")?la(Y(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Ie(t,e+1)!==115)break;case 6444:switch(Ie(t,Je(t)-3-(~Po(t,"!important")&&10))){case 107:return Y(t,":",":"+q)+t;case 101:return Y(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+q+(Ie(t,14)===45?"inline-":"")+"box$3$1"+q+"$2$3$1"+Se+"$2box$3")+t}break;case 5936:switch(Ie(t,e+11)){case 114:return q+t+Se+Y(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return q+t+Se+Y(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return q+t+Se+Y(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return q+t+Se+t+t}return t}var yc=function(e,n,r,o){if(e.length>-1&&!e.return)switch(e.type){case Xo:e.return=la(e.value,e.length);break;case ra:return Qt([mn(e,{value:Y(e.value,"@","@"+q)})],o);case Yo:if(e.length)return nc(e.props,function(i){switch(tc(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Qt([mn(e,{props:[Y(i,/:(read-\w+)/,":"+ar+"$1")]})],o);case"::placeholder":return Qt([mn(e,{props:[Y(i,/:(plac\w+)/,":"+q+"input-$1")]}),mn(e,{props:[Y(i,/:(plac\w+)/,":"+ar+"$1")]}),mn(e,{props:[Y(i,/:(plac\w+)/,Se+"input-$1")]})],o)}return""})}},Ec=[yc],_c=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var x=g.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var o=e.stylisPlugins||Ec,i={},s,a=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var x=g.getAttribute("data-emotion").split(" "),_=1;_<x.length;_++)i[x[_]]=!0;a.push(g)});var l,c=[bc,vc];{var u,p=[dc,pc(function(g){u.insert(g)})],h=fc(c.concat(o,p)),v=function(x){return Qt(cc(x),h)};l=function(x,_,S,y){u=S,v(x?x+"{"+_.styles+"}":_.styles),y&&(m.inserted[_.name]=!0)}}var m={key:n,sheet:new Yl({key:n,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:l};return m.sheet.hydrate(a),m},ca={exports:{}},Q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=typeof Symbol=="function"&&Symbol.for,Qo=xe?Symbol.for("react.element"):60103,Zo=xe?Symbol.for("react.portal"):60106,Sr=xe?Symbol.for("react.fragment"):60107,Cr=xe?Symbol.for("react.strict_mode"):60108,Tr=xe?Symbol.for("react.profiler"):60114,Rr=xe?Symbol.for("react.provider"):60109,kr=xe?Symbol.for("react.context"):60110,ei=xe?Symbol.for("react.async_mode"):60111,Pr=xe?Symbol.for("react.concurrent_mode"):60111,Or=xe?Symbol.for("react.forward_ref"):60112,Ar=xe?Symbol.for("react.suspense"):60113,xc=xe?Symbol.for("react.suspense_list"):60120,$r=xe?Symbol.for("react.memo"):60115,Mr=xe?Symbol.for("react.lazy"):60116,wc=xe?Symbol.for("react.block"):60121,Ic=xe?Symbol.for("react.fundamental"):60117,Sc=xe?Symbol.for("react.responder"):60118,Cc=xe?Symbol.for("react.scope"):60119;function Be(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Qo:switch(t=t.type,t){case ei:case Pr:case Sr:case Tr:case Cr:case Ar:return t;default:switch(t=t&&t.$$typeof,t){case kr:case Or:case Mr:case $r:case Rr:return t;default:return e}}case Zo:return e}}}function ua(t){return Be(t)===Pr}Q.AsyncMode=ei;Q.ConcurrentMode=Pr;Q.ContextConsumer=kr;Q.ContextProvider=Rr;Q.Element=Qo;Q.ForwardRef=Or;Q.Fragment=Sr;Q.Lazy=Mr;Q.Memo=$r;Q.Portal=Zo;Q.Profiler=Tr;Q.StrictMode=Cr;Q.Suspense=Ar;Q.isAsyncMode=function(t){return ua(t)||Be(t)===ei};Q.isConcurrentMode=ua;Q.isContextConsumer=function(t){return Be(t)===kr};Q.isContextProvider=function(t){return Be(t)===Rr};Q.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qo};Q.isForwardRef=function(t){return Be(t)===Or};Q.isFragment=function(t){return Be(t)===Sr};Q.isLazy=function(t){return Be(t)===Mr};Q.isMemo=function(t){return Be(t)===$r};Q.isPortal=function(t){return Be(t)===Zo};Q.isProfiler=function(t){return Be(t)===Tr};Q.isStrictMode=function(t){return Be(t)===Cr};Q.isSuspense=function(t){return Be(t)===Ar};Q.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Sr||t===Pr||t===Tr||t===Cr||t===Ar||t===xc||typeof t=="object"&&t!==null&&(t.$$typeof===Mr||t.$$typeof===$r||t.$$typeof===Rr||t.$$typeof===kr||t.$$typeof===Or||t.$$typeof===Ic||t.$$typeof===Sc||t.$$typeof===Cc||t.$$typeof===wc)};Q.typeOf=Be;ca.exports=Q;var Tc=ca.exports,da=Tc,Rc={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kc={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fa={};fa[da.ForwardRef]=Rc;fa[da.Memo]=kc;var Pc=!0;function Oc(t,e,n){var r="";return n.split(" ").forEach(function(o){t[o]!==void 0?e.push(t[o]+";"):r+=o+" "}),r}var pa=function(e,n,r){var o=e.key+"-"+n.name;(r===!1||Pc===!1)&&e.registered[o]===void 0&&(e.registered[o]=n.styles)},ha=function(e,n,r){pa(e,n,r);var o=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var i=n;do e.insert(n===i?"."+o:"",i,e.sheet,!0),i=i.next;while(i!==void 0)}};function Ac(t){for(var e=0,n,r=0,o=t.length;o>=4;++r,o-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var $c={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Mc=/[A-Z]|^ms/g,Nc=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ma=function(e){return e.charCodeAt(1)===45},Ni=function(e){return e!=null&&typeof e!="boolean"},ho=ta(function(t){return ma(t)?t:t.replace(Mc,"-$&").toLowerCase()}),Li=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(Nc,function(r,o,i){return Qe={name:o,styles:i,next:Qe},o})}return $c[e]!==1&&!ma(e)&&typeof n=="number"&&n!==0?n+"px":n};function On(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Qe={name:n.name,styles:n.styles,next:Qe},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Qe={name:r.name,styles:r.styles,next:Qe},r=r.next;var o=n.styles+";";return o}return Lc(t,e,n)}case"function":{if(t!==void 0){var i=Qe,s=n(t);return Qe=i,On(t,e,s)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function Lc(t,e,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=On(t,e,n[o])+";";else for(var i in n){var s=n[i];if(typeof s!="object")e!=null&&e[s]!==void 0?r+=i+"{"+e[s]+"}":Ni(s)&&(r+=ho(i)+":"+Li(i,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var a=0;a<s.length;a++)Ni(s[a])&&(r+=ho(i)+":"+Li(i,s[a])+";");else{var l=On(t,e,s);switch(i){case"animation":case"animationName":{r+=ho(i)+":"+l+";";break}default:r+=i+"{"+l+"}"}}}return r}var Di=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Qe,ti=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var o=!0,i="";Qe=void 0;var s=e[0];s==null||s.raw===void 0?(o=!1,i+=On(r,n,s)):i+=s[0];for(var a=1;a<e.length;a++)i+=On(r,n,e[a]),o&&(i+=s[a]);Di.lastIndex=0;for(var l="",c;(c=Di.exec(i))!==null;)l+="-"+c[1];var u=Ac(i)+l;return{name:u,styles:i,next:Qe}},Dc=function(e){return e()},ga=ko.useInsertionEffect?ko.useInsertionEffect:!1,Fc=ga||Dc,Fi=ga||d.useLayoutEffect,ba=d.createContext(typeof HTMLElement<"u"?_c({key:"css"}):null);ba.Provider;var va=function(e){return d.forwardRef(function(n,r){var o=d.useContext(ba);return e(n,o,r)})},Nr=d.createContext({}),Bc=va(function(t,e){var n=t.styles,r=ti([n],void 0,d.useContext(Nr)),o=d.useRef();return Fi(function(){var i=e.key+"-global",s=new e.sheet.constructor({key:i,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),a=!1,l=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return e.sheet.tags.length&&(s.before=e.sheet.tags[0]),l!==null&&(a=!0,l.setAttribute("data-emotion",i),s.hydrate([l])),o.current=[s,a],function(){s.flush()}},[e]),Fi(function(){var i=o.current,s=i[0],a=i[1];if(a){i[1]=!1;return}if(r.next!==void 0&&ha(e,r.next,!0),s.tags.length){var l=s.tags[s.tags.length-1].nextElementSibling;s.before=l,s.flush()}e.insert("",r,s,!1)},[e,r.name]),null});function Uc(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return ti(e)}var ni=function(){var e=Uc.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},zc=Kl,Wc=function(e){return e!=="theme"},Bi=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?zc:Wc},Ui=function(e,n,r){var o;if(n){var i=n.shouldForwardProp;o=e.__emotion_forwardProp&&i?function(s){return e.__emotion_forwardProp(s)&&i(s)}:i}return typeof o!="function"&&r&&(o=e.__emotion_forwardProp),o},jc=function(e){var n=e.cache,r=e.serialized,o=e.isStringTag;return pa(n,r,o),Fc(function(){return ha(n,r,o)}),null},Hc=function t(e,n){var r=e.__emotion_real===e,o=r&&e.__emotion_base||e,i,s;n!==void 0&&(i=n.label,s=n.target);var a=Ui(e,n,r),l=a||Bi(o),c=!l("as");return function(){var u=arguments,p=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(i!==void 0&&p.push("label:"+i+";"),u[0]==null||u[0].raw===void 0)p.push.apply(p,u);else{p.push(u[0][0]);for(var h=u.length,v=1;v<h;v++)p.push(u[v],u[0][v])}var m=va(function(g,x,_){var S=c&&g.as||o,y="",b=[],w=g;if(g.theme==null){w={};for(var I in g)w[I]=g[I];w.theme=d.useContext(Nr)}typeof g.className=="string"?y=Oc(x.registered,b,g.className):g.className!=null&&(y=g.className+" ");var E=ti(p.concat(b),x.registered,w);y+=x.key+"-"+E.name,s!==void 0&&(y+=" "+s);var P=c&&a===void 0?Bi(S):l,O={};for(var C in g)c&&C==="as"||P(C)&&(O[C]=g[C]);return O.className=y,O.ref=_,d.createElement(d.Fragment,null,d.createElement(jc,{cache:x,serialized:E,isStringTag:typeof S=="string"}),d.createElement(S,O))});return m.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",m.defaultProps=e.defaultProps,m.__emotion_real=m,m.__emotion_base=o,m.__emotion_styles=p,m.__emotion_forwardProp=a,Object.defineProperty(m,"toString",{value:function(){return"."+s}}),m.withComponent=function(g,x){return t(g,f({},n,x,{shouldForwardProp:Ui(m,x,!0)})).apply(void 0,p)},m}},Vc=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Ao=Hc.bind();Vc.forEach(function(t){Ao[t]=Ao(t)});function Kc(t){return t==null||Object.keys(t).length===0}function Gc(t){const{styles:e,defaultTheme:n={}}=t,r=typeof e=="function"?o=>e(Kc(o)?n:o):e;return T.jsx(Bc,{styles:r})}function ya(t,e){return Ao(t,e)}const qc=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))};function U(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,i;for(i=0;i<r.length;i++)o=r[i],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function it(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function Ea(t){if(!it(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=Ea(t[n])}),e}function Me(t,e,n={clone:!0}){const r=n.clone?f({},t):t;return it(t)&&it(e)&&Object.keys(e).forEach(o=>{o!=="__proto__"&&(it(e[o])&&o in t&&it(t[o])?r[o]=Me(t[o],e[o],n):n.clone?r[o]=it(e[o])?Ea(e[o]):e[o]:r[o]=e[o])}),r}function K(t){if(typeof t!="string")throw new Error(xt(7));return t.charAt(0).toUpperCase()+t.slice(1)}function zi(...t){return t.reduce((e,n)=>n==null?e:function(...o){e.apply(this,o),n.apply(this,o)},()=>{})}function _a(t,e=166){let n;function r(...o){const i=()=>{t.apply(this,o)};clearTimeout(n),n=setTimeout(i,e)}return r.clear=()=>{clearTimeout(n)},r}function mo(t,e){var n,r;return d.isValidElement(t)&&e.indexOf((n=t.type.muiName)!=null?n:(r=t.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function Fe(t){return t&&t.ownerDocument||document}function $t(t){return Fe(t).defaultView||window}function $o(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const Mt=typeof window<"u"?d.useLayoutEffect:d.useEffect;let Wi=0;function Yc(t){const[e,n]=d.useState(t),r=t||e;return d.useEffect(()=>{e==null&&(Wi+=1,n(`mui-${Wi}`))},[e]),r}const ji=ko.useId;function xa(t){if(ji!==void 0){const e=ji();return t??e}return Yc(t)}function Hi({controlled:t,default:e,name:n,state:r="value"}){const{current:o}=d.useRef(t!==void 0),[i,s]=d.useState(e),a=o?t:i,l=d.useCallback(c=>{o||s(c)},[]);return[a,l]}function Xt(t){const e=d.useRef(t);return Mt(()=>{e.current=t}),d.useRef((...n)=>(0,e.current)(...n)).current}function ke(...t){return d.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{$o(n,e)})},t)}const Vi={};function Xc(t,e){const n=d.useRef(Vi);return n.current===Vi&&(n.current=t(e)),n}const Jc=[];function Qc(t){d.useEffect(t,Jc)}class Lr{constructor(){this.currentId=0,this.clear=()=>{this.currentId!==0&&(clearTimeout(this.currentId),this.currentId=0)},this.disposeEffect=()=>this.clear}static create(){return new Lr}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=0,n()},e)}}function wa(){const t=Xc(Lr.create).current;return Qc(t.disposeEffect),t}let Dr=!0,Mo=!1;const Zc=new Lr,eu={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function tu(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&eu[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function nu(t){t.metaKey||t.altKey||t.ctrlKey||(Dr=!0)}function go(){Dr=!1}function ru(){this.visibilityState==="hidden"&&Mo&&(Dr=!0)}function ou(t){t.addEventListener("keydown",nu,!0),t.addEventListener("mousedown",go,!0),t.addEventListener("pointerdown",go,!0),t.addEventListener("touchstart",go,!0),t.addEventListener("visibilitychange",ru,!0)}function iu(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return Dr||tu(e)}function Ia(){const t=d.useCallback(o=>{o!=null&&ou(o.ownerDocument)},[]),e=d.useRef(!1);function n(){return e.current?(Mo=!0,Zc.start(100,()=>{Mo=!1}),e.current=!1,!0):!1}function r(o){return iu(o)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:r,onBlur:n,ref:t}}function Sa(t){const e=t.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function ri(t,e){const n=f({},e);return Object.keys(t).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=f({},t[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=t[r]||{},i=e[r];n[r]={},!i||!Object.keys(i)?n[r]=o:!o||!Object.keys(o)?n[r]=i:(n[r]=f({},i),Object.keys(o).forEach(s=>{n[r][s]=ri(o[s],i[s])}))}else n[r]===void 0&&(n[r]=t[r])}),n}function ge(t,e,n=void 0){const r={};return Object.keys(t).forEach(o=>{r[o]=t[o].reduce((i,s)=>{if(s){const a=e(s);a!==""&&i.push(a),n&&n[s]&&i.push(n[s])}return i},[]).join(" ")}),r}const Ki=t=>t,su=()=>{let t=Ki;return{configure(e){t=e},generate(e){return t(e)},reset(){t=Ki}}},au=su(),Ca=au,lu={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function fe(t,e,n="Mui"){const r=lu[e];return r?`${n}-${r}`:`${Ca.generate(t)}-${e}`}function ce(t,e,n="Mui"){const r={};return e.forEach(o=>{r[o]=fe(t,o,n)}),r}function cu(t,e=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(t,n))}const uu=["values","unit","step"],du=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>f({},n,{[r.key]:r.val}),{})};function fu(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=t,o=U(t,uu),i=du(e),s=Object.keys(i);function a(h){return`@media (min-width:${typeof e[h]=="number"?e[h]:h}${n})`}function l(h){return`@media (max-width:${(typeof e[h]=="number"?e[h]:h)-r/100}${n})`}function c(h,v){const m=s.indexOf(v);return`@media (min-width:${typeof e[h]=="number"?e[h]:h}${n}) and (max-width:${(m!==-1&&typeof e[s[m]]=="number"?e[s[m]]:v)-r/100}${n})`}function u(h){return s.indexOf(h)+1<s.length?c(h,s[s.indexOf(h)+1]):a(h)}function p(h){const v=s.indexOf(h);return v===0?a(s[1]):v===s.length-1?l(s[v]):c(h,s[s.indexOf(h)+1]).replace("@media","@media not all and")}return f({keys:s,values:i,up:a,down:l,between:c,only:u,not:p,unit:n},o)}const pu={borderRadius:4},hu=pu;function wn(t,e){return e?Me(t,e,{clone:!1}):t}const oi={xs:0,sm:600,md:900,lg:1200,xl:1536},Gi={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${oi[t]}px)`};function ct(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const i=r.breakpoints||Gi;return e.reduce((s,a,l)=>(s[i.up(i.keys[l])]=n(e[l]),s),{})}if(typeof e=="object"){const i=r.breakpoints||Gi;return Object.keys(e).reduce((s,a)=>{if(Object.keys(i.values||oi).indexOf(a)!==-1){const l=i.up(a);s[l]=n(e[a],a)}else{const l=a;s[l]=e[l]}return s},{})}return n(e)}function mu(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((r,o)=>{const i=t.up(o);return r[i]={},r},{}))||{}}function gu(t,e){return t.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},e)}function bu(t,e){if(typeof t!="object")return{};const n={},r=Object.keys(e);return Array.isArray(t)?r.forEach((o,i)=>{i<t.length&&(n[o]=!0)}):r.forEach(o=>{t[o]!=null&&(n[o]=!0)}),n}function Fy({values:t,breakpoints:e,base:n}){const r=n||bu(t,e),o=Object.keys(r);if(o.length===0)return t;let i;return o.reduce((s,a,l)=>(Array.isArray(t)?(s[a]=t[l]!=null?t[l]:t[i],i=l):typeof t=="object"?(s[a]=t[a]!=null?t[a]:t[i],i=a):s[a]=t,s),{})}function on(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((o,i)=>o&&o[i]?o[i]:null,t);if(r!=null)return r}return e.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,t)}function lr(t,e,n,r=n){let o;return typeof t=="function"?o=t(n):Array.isArray(t)?o=t[n]||r:o=on(t,n)||r,e&&(o=e(o,r,t)),o}function Ee(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:o}=t,i=s=>{if(s[e]==null)return null;const a=s[e],l=s.theme,c=on(l,r)||{};return ct(s,a,p=>{let h=lr(c,o,p);return p===h&&typeof p=="string"&&(h=lr(c,o,`${e}${p==="default"?"":K(p)}`,p)),n===!1?h:{[n]:h}})};return i.propTypes={},i.filterProps=[e],i}function vu(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const yu={m:"margin",p:"padding"},Eu={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},qi={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},_u=vu(t=>{if(t.length>2)if(qi[t])t=qi[t];else return[t];const[e,n]=t.split(""),r=yu[e],o=Eu[n]||"";return Array.isArray(o)?o.map(i=>r+i):[r+o]}),ii=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],si=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...ii,...si];function Bn(t,e,n,r){var o;const i=(o=on(t,e,!1))!=null?o:n;return typeof i=="number"?s=>typeof s=="string"?s:i*s:Array.isArray(i)?s=>typeof s=="string"?s:i[s]:typeof i=="function"?i:()=>{}}function Ta(t){return Bn(t,"spacing",8)}function Un(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),r=t(n);return e>=0?r:typeof r=="number"?-r:`-${r}`}function xu(t,e){return n=>t.reduce((r,o)=>(r[o]=Un(e,n),r),{})}function wu(t,e,n,r){if(e.indexOf(n)===-1)return null;const o=_u(n),i=xu(o,r),s=t[n];return ct(t,s,i)}function Ra(t,e){const n=Ta(t.theme);return Object.keys(t).map(r=>wu(t,e,r,n)).reduce(wn,{})}function he(t){return Ra(t,ii)}he.propTypes={};he.filterProps=ii;function me(t){return Ra(t,si)}me.propTypes={};me.filterProps=si;function Iu(t=8){if(t.mui)return t;const e=Ta({spacing:t}),n=(...r)=>(r.length===0?[1]:r).map(i=>{const s=e(i);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function Fr(...t){const e=t.reduce((r,o)=>(o.filterProps.forEach(i=>{r[i]=o}),r),{}),n=r=>Object.keys(r).reduce((o,i)=>e[i]?wn(o,e[i](r)):o,{});return n.propTypes={},n.filterProps=t.reduce((r,o)=>r.concat(o.filterProps),[]),n}function He(t){return typeof t!="number"?t:`${t}px solid`}function Ve(t,e){return Ee({prop:t,themeKey:"borders",transform:e})}const Su=Ve("border",He),Cu=Ve("borderTop",He),Tu=Ve("borderRight",He),Ru=Ve("borderBottom",He),ku=Ve("borderLeft",He),Pu=Ve("borderColor"),Ou=Ve("borderTopColor"),Au=Ve("borderRightColor"),$u=Ve("borderBottomColor"),Mu=Ve("borderLeftColor"),Nu=Ve("outline",He),Lu=Ve("outlineColor"),Br=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=Bn(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:Un(e,r)});return ct(t,t.borderRadius,n)}return null};Br.propTypes={};Br.filterProps=["borderRadius"];Fr(Su,Cu,Tu,Ru,ku,Pu,Ou,Au,$u,Mu,Br,Nu,Lu);const Ur=t=>{if(t.gap!==void 0&&t.gap!==null){const e=Bn(t.theme,"spacing",8),n=r=>({gap:Un(e,r)});return ct(t,t.gap,n)}return null};Ur.propTypes={};Ur.filterProps=["gap"];const zr=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=Bn(t.theme,"spacing",8),n=r=>({columnGap:Un(e,r)});return ct(t,t.columnGap,n)}return null};zr.propTypes={};zr.filterProps=["columnGap"];const Wr=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=Bn(t.theme,"spacing",8),n=r=>({rowGap:Un(e,r)});return ct(t,t.rowGap,n)}return null};Wr.propTypes={};Wr.filterProps=["rowGap"];const Du=Ee({prop:"gridColumn"}),Fu=Ee({prop:"gridRow"}),Bu=Ee({prop:"gridAutoFlow"}),Uu=Ee({prop:"gridAutoColumns"}),zu=Ee({prop:"gridAutoRows"}),Wu=Ee({prop:"gridTemplateColumns"}),ju=Ee({prop:"gridTemplateRows"}),Hu=Ee({prop:"gridTemplateAreas"}),Vu=Ee({prop:"gridArea"});Fr(Ur,zr,Wr,Du,Fu,Bu,Uu,zu,Wu,ju,Hu,Vu);function Zt(t,e){return e==="grey"?e:t}const Ku=Ee({prop:"color",themeKey:"palette",transform:Zt}),Gu=Ee({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Zt}),qu=Ee({prop:"backgroundColor",themeKey:"palette",transform:Zt});Fr(Ku,Gu,qu);function Le(t){return t<=1&&t!==0?`${t*100}%`:t}const Yu=Ee({prop:"width",transform:Le}),ai=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var r,o;const i=((r=t.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||oi[n];return i?((o=t.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${i}${t.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:Le(n)}};return ct(t,t.maxWidth,e)}return null};ai.filterProps=["maxWidth"];const Xu=Ee({prop:"minWidth",transform:Le}),Ju=Ee({prop:"height",transform:Le}),Qu=Ee({prop:"maxHeight",transform:Le}),Zu=Ee({prop:"minHeight",transform:Le});Ee({prop:"size",cssProperty:"width",transform:Le});Ee({prop:"size",cssProperty:"height",transform:Le});const ed=Ee({prop:"boxSizing"});Fr(Yu,ai,Xu,Ju,Qu,Zu,ed);const td={border:{themeKey:"borders",transform:He},borderTop:{themeKey:"borders",transform:He},borderRight:{themeKey:"borders",transform:He},borderBottom:{themeKey:"borders",transform:He},borderLeft:{themeKey:"borders",transform:He},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:He},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Br},color:{themeKey:"palette",transform:Zt},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Zt},backgroundColor:{themeKey:"palette",transform:Zt},p:{style:me},pt:{style:me},pr:{style:me},pb:{style:me},pl:{style:me},px:{style:me},py:{style:me},padding:{style:me},paddingTop:{style:me},paddingRight:{style:me},paddingBottom:{style:me},paddingLeft:{style:me},paddingX:{style:me},paddingY:{style:me},paddingInline:{style:me},paddingInlineStart:{style:me},paddingInlineEnd:{style:me},paddingBlock:{style:me},paddingBlockStart:{style:me},paddingBlockEnd:{style:me},m:{style:he},mt:{style:he},mr:{style:he},mb:{style:he},ml:{style:he},mx:{style:he},my:{style:he},margin:{style:he},marginTop:{style:he},marginRight:{style:he},marginBottom:{style:he},marginLeft:{style:he},marginX:{style:he},marginY:{style:he},marginInline:{style:he},marginInlineStart:{style:he},marginInlineEnd:{style:he},marginBlock:{style:he},marginBlockStart:{style:he},marginBlockEnd:{style:he},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Ur},rowGap:{style:Wr},columnGap:{style:zr},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Le},maxWidth:{style:ai},minWidth:{transform:Le},height:{transform:Le},maxHeight:{transform:Le},minHeight:{transform:Le},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},jr=td;function nd(...t){const e=t.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function rd(t,e){return typeof t=="function"?t(e):t}function od(){function t(n,r,o,i){const s={[n]:r,theme:o},a=i[n];if(!a)return{[n]:r};const{cssProperty:l=n,themeKey:c,transform:u,style:p}=a;if(r==null)return null;if(c==="typography"&&r==="inherit")return{[n]:r};const h=on(o,c)||{};return p?p(s):ct(s,r,m=>{let g=lr(h,u,m);return m===g&&typeof m=="string"&&(g=lr(h,u,`${n}${m==="default"?"":K(m)}`,m)),l===!1?g:{[l]:g}})}function e(n){var r;const{sx:o,theme:i={}}=n||{};if(!o)return null;const s=(r=i.unstable_sxConfig)!=null?r:jr;function a(l){let c=l;if(typeof l=="function")c=l(i);else if(typeof l!="object")return l;if(!c)return null;const u=mu(i.breakpoints),p=Object.keys(u);let h=u;return Object.keys(c).forEach(v=>{const m=rd(c[v],i);if(m!=null)if(typeof m=="object")if(s[v])h=wn(h,t(v,m,i,s));else{const g=ct({theme:i},m,x=>({[v]:x}));nd(g,m)?h[v]=e({sx:m,theme:i}):h=wn(h,g)}else h=wn(h,t(v,m,i,s))}),gu(p,h)}return Array.isArray(o)?o.map(a):a(o)}return e}const ka=od();ka.filterProps=["sx"];const Hr=ka;function id(t,e){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(t).replace(/(\[[^\]]+\])/,"*:where($1)")]:e}:n.palette.mode===t?e:{}}const sd=["breakpoints","palette","spacing","shape"];function li(t={},...e){const{breakpoints:n={},palette:r={},spacing:o,shape:i={}}=t,s=U(t,sd),a=fu(n),l=Iu(o);let c=Me({breakpoints:a,direction:"ltr",components:{},palette:f({mode:"light"},r),spacing:l,shape:f({},hu,i)},s);return c.applyStyles=id,c=e.reduce((u,p)=>Me(u,p),c),c.unstable_sxConfig=f({},jr,s==null?void 0:s.unstable_sxConfig),c.unstable_sx=function(p){return Hr({sx:p,theme:this})},c}function ad(t){return Object.keys(t).length===0}function Pa(t=null){const e=d.useContext(Nr);return!e||ad(e)?t:e}const ld=li();function Vr(t=ld){return Pa(t)}function cd({styles:t,themeId:e,defaultTheme:n={}}){const r=Vr(n),o=typeof t=="function"?t(e&&r[e]||r):t;return T.jsx(Gc,{styles:o})}const ud=["sx"],dd=t=>{var e,n;const r={systemProps:{},otherProps:{}},o=(e=t==null||(n=t.theme)==null?void 0:n.unstable_sxConfig)!=null?e:jr;return Object.keys(t).forEach(i=>{o[i]?r.systemProps[i]=t[i]:r.otherProps[i]=t[i]}),r};function Oa(t){const{sx:e}=t,n=U(t,ud),{systemProps:r,otherProps:o}=dd(n);let i;return Array.isArray(e)?i=[r,...e]:typeof e=="function"?i=(...s)=>{const a=e(...s);return it(a)?f({},r,a):r}:i=f({},r,e),f({},o,{sx:i})}const fd=["className","component"];function pd(t={}){const{themeId:e,defaultTheme:n,defaultClassName:r="MuiBox-root",generateClassName:o}=t,i=ya("div",{shouldForwardProp:a=>a!=="theme"&&a!=="sx"&&a!=="as"})(Hr);return d.forwardRef(function(l,c){const u=Vr(n),p=Oa(l),{className:h,component:v="div"}=p,m=U(p,fd);return T.jsx(i,f({as:v,ref:c,className:V(h,o?o(r):r),theme:e&&u[e]||u},m))})}const hd=["variant"];function Yi(t){return t.length===0}function Aa(t){const{variant:e}=t,n=U(t,hd);let r=e||"";return Object.keys(n).sort().forEach(o=>{o==="color"?r+=Yi(r)?t[o]:K(t[o]):r+=`${Yi(r)?o:K(o)}${K(t[o].toString())}`}),r}const md=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function gd(t){return Object.keys(t).length===0}function bd(t){return typeof t=="string"&&t.charCodeAt(0)>96}const vd=(t,e)=>e.components&&e.components[t]&&e.components[t].styleOverrides?e.components[t].styleOverrides:null,cr=t=>{let e=0;const n={};return t&&t.forEach(r=>{let o="";typeof r.props=="function"?(o=`callback${e}`,e+=1):o=Aa(r.props),n[o]=r.style}),n},yd=(t,e)=>{let n=[];return e&&e.components&&e.components[t]&&e.components[t].variants&&(n=e.components[t].variants),cr(n)},ur=(t,e,n)=>{const{ownerState:r={}}=t,o=[];let i=0;return n&&n.forEach(s=>{let a=!0;if(typeof s.props=="function"){const l=f({},t,r);a=s.props(l)}else Object.keys(s.props).forEach(l=>{r[l]!==s.props[l]&&t[l]!==s.props[l]&&(a=!1)});a&&(typeof s.props=="function"?o.push(e[`callback${i}`]):o.push(e[Aa(s.props)])),typeof s.props=="function"&&(i+=1)}),o},Ed=(t,e,n,r)=>{var o;const i=n==null||(o=n.components)==null||(o=o[r])==null?void 0:o.variants;return ur(t,e,i)};function In(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const _d=li(),xd=t=>t&&t.charAt(0).toLowerCase()+t.slice(1);function nr({defaultTheme:t,theme:e,themeId:n}){return gd(e)?t:e[n]||e}function wd(t){return t?(e,n)=>n[t]:null}const Xi=({styledArg:t,props:e,defaultTheme:n,themeId:r})=>{const o=t(f({},e,{theme:nr(f({},e,{defaultTheme:n,themeId:r}))}));let i;if(o&&o.variants&&(i=o.variants,delete o.variants),i){const s=ur(e,cr(i),i);return[o,...s]}return o};function Id(t={}){const{themeId:e,defaultTheme:n=_d,rootShouldForwardProp:r=In,slotShouldForwardProp:o=In}=t,i=s=>Hr(f({},s,{theme:nr(f({},s,{defaultTheme:n,themeId:e}))}));return i.__mui_systemSx=!0,(s,a={})=>{qc(s,b=>b.filter(w=>!(w!=null&&w.__mui_systemSx)));const{name:l,slot:c,skipVariantsResolver:u,skipSx:p,overridesResolver:h=wd(xd(c))}=a,v=U(a,md),m=u!==void 0?u:c&&c!=="Root"&&c!=="root"||!1,g=p||!1;let x,_=In;c==="Root"||c==="root"?_=r:c?_=o:bd(s)&&(_=void 0);const S=ya(s,f({shouldForwardProp:_,label:x},v)),y=(b,...w)=>{const I=w?w.map(C=>{if(typeof C=="function"&&C.__emotion_real!==C)return N=>Xi({styledArg:C,props:N,defaultTheme:n,themeId:e});if(it(C)){let N=C,M;return C&&C.variants&&(M=C.variants,delete N.variants,N=A=>{let R=C;return ur(A,cr(M),M).forEach($=>{R=Me(R,$)}),R}),N}return C}):[];let E=b;if(it(b)){let C;b&&b.variants&&(C=b.variants,delete E.variants,E=N=>{let M=b;return ur(N,cr(C),C).forEach(R=>{M=Me(M,R)}),M})}else typeof b=="function"&&b.__emotion_real!==b&&(E=C=>Xi({styledArg:b,props:C,defaultTheme:n,themeId:e}));l&&h&&I.push(C=>{const N=nr(f({},C,{defaultTheme:n,themeId:e})),M=vd(l,N);if(M){const A={};return Object.entries(M).forEach(([R,k])=>{A[R]=typeof k=="function"?k(f({},C,{theme:N})):k}),h(C,A)}return null}),l&&!m&&I.push(C=>{const N=nr(f({},C,{defaultTheme:n,themeId:e}));return Ed(C,yd(l,N),N,l)}),g||I.push(i);const P=I.length-w.length;if(Array.isArray(b)&&P>0){const C=new Array(P).fill("");E=[...b,...C],E.raw=[...b.raw,...C]}const O=S(E,...I);return s.muiName&&(O.muiName=s.muiName),O};return S.withConfig&&(y.withConfig=S.withConfig),y}}function Sd(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:ri(e.components[n].defaultProps,r)}function Cd({props:t,name:e,defaultTheme:n,themeId:r}){let o=Vr(n);return r&&(o=o[r]||o),Sd({theme:o,name:e,props:t})}function ci(t,e=0,n=1){return cu(t,e,n)}function Td(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Nt(t){if(t.type)return t;if(t.charAt(0)==="#")return Nt(Td(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(xt(9,t));let r=t.substring(e+1,t.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error(xt(10,o))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:n,values:r,colorSpace:o}}function Kr(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.indexOf("rgb")!==-1?r=r.map((o,i)=>i<3?parseInt(o,10):o):e.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function Rd(t){t=Nt(t);const{values:e}=t,n=e[0],r=e[1]/100,o=e[2]/100,i=r*Math.min(o,1-o),s=(c,u=(c+n/30)%12)=>o-i*Math.max(Math.min(u-3,9-u,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return t.type==="hsla"&&(a+="a",l.push(e[3])),Kr({type:a,values:l})}function Ji(t){t=Nt(t);let e=t.type==="hsl"||t.type==="hsla"?Nt(Rd(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function kd(t,e){const n=Ji(t),r=Ji(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Pt(t,e){return t=Nt(t),e=ci(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,Kr(t)}function Pd(t,e){if(t=Nt(t),e=ci(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return Kr(t)}function Od(t,e){if(t=Nt(t),e=ci(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return Kr(t)}const Ad=d.createContext(null),$a=Ad;function Ma(){return d.useContext($a)}const $d=typeof Symbol=="function"&&Symbol.for,Md=$d?Symbol.for("mui.nested"):"__THEME_NESTED__";function Nd(t,e){return typeof e=="function"?e(t):f({},t,e)}function Ld(t){const{children:e,theme:n}=t,r=Ma(),o=d.useMemo(()=>{const i=r===null?n:Nd(r,n);return i!=null&&(i[Md]=r!==null),i},[n,r]);return T.jsx($a.Provider,{value:o,children:e})}const Qi={};function Zi(t,e,n,r=!1){return d.useMemo(()=>{const o=t&&e[t]||e;if(typeof n=="function"){const i=n(o),s=t?f({},e,{[t]:i}):i;return r?()=>s:s}return t?f({},e,{[t]:n}):f({},e,n)},[t,e,n,r])}function Dd(t){const{children:e,theme:n,themeId:r}=t,o=Pa(Qi),i=Ma()||Qi,s=Zi(r,o,n),a=Zi(r,i,n,!0);return T.jsx(Ld,{theme:a,children:T.jsx(Nr.Provider,{value:s,children:e})})}const Lt="$$material";function Fd(t,e){return f({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}const Bd={black:"#000",white:"#fff"},An=Bd,Ud={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},zd=Ud,Wd={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},jt=Wd,jd={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ht=jd,Hd={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},gn=Hd,Vd={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Vt=Vd,Kd={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Kt=Kd,Gd={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Gt=Gd,qd=["mode","contrastThreshold","tonalOffset"],es={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:An.white,default:An.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},bo={text:{primary:An.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:An.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function ts(t,e,n,r){const o=r.light||r,i=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=Od(t.main,o):e==="dark"&&(t.dark=Pd(t.main,i)))}function Yd(t="light"){return t==="dark"?{main:Vt[200],light:Vt[50],dark:Vt[400]}:{main:Vt[700],light:Vt[400],dark:Vt[800]}}function Xd(t="light"){return t==="dark"?{main:jt[200],light:jt[50],dark:jt[400]}:{main:jt[500],light:jt[300],dark:jt[700]}}function Jd(t="light"){return t==="dark"?{main:Ht[500],light:Ht[300],dark:Ht[700]}:{main:Ht[700],light:Ht[400],dark:Ht[800]}}function Qd(t="light"){return t==="dark"?{main:Kt[400],light:Kt[300],dark:Kt[700]}:{main:Kt[700],light:Kt[500],dark:Kt[900]}}function Zd(t="light"){return t==="dark"?{main:Gt[400],light:Gt[300],dark:Gt[700]}:{main:Gt[800],light:Gt[500],dark:Gt[900]}}function ef(t="light"){return t==="dark"?{main:gn[400],light:gn[300],dark:gn[700]}:{main:"#ed6c02",light:gn[500],dark:gn[900]}}function tf(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2}=t,o=U(t,qd),i=t.primary||Yd(e),s=t.secondary||Xd(e),a=t.error||Jd(e),l=t.info||Qd(e),c=t.success||Zd(e),u=t.warning||ef(e);function p(g){return kd(g,bo.text.primary)>=n?bo.text.primary:es.text.primary}const h=({color:g,name:x,mainShade:_=500,lightShade:S=300,darkShade:y=700})=>{if(g=f({},g),!g.main&&g[_]&&(g.main=g[_]),!g.hasOwnProperty("main"))throw new Error(xt(11,x?` (${x})`:"",_));if(typeof g.main!="string")throw new Error(xt(12,x?` (${x})`:"",JSON.stringify(g.main)));return ts(g,"light",S,r),ts(g,"dark",y,r),g.contrastText||(g.contrastText=p(g.main)),g},v={dark:bo,light:es};return Me(f({common:f({},An),mode:e,primary:h({color:i,name:"primary"}),secondary:h({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:h({color:a,name:"error"}),warning:h({color:u,name:"warning"}),info:h({color:l,name:"info"}),success:h({color:c,name:"success"}),grey:zd,contrastThreshold:n,getContrastText:p,augmentColor:h,tonalOffset:r},v[e]),o)}const nf=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function rf(t){return Math.round(t*1e5)/1e5}const ns={textTransform:"uppercase"},rs='"Roboto", "Helvetica", "Arial", sans-serif';function of(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:r=rs,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:c=16,allVariants:u,pxToRem:p}=n,h=U(n,nf),v=o/14,m=p||(_=>`${_/c*v}rem`),g=(_,S,y,b,w)=>f({fontFamily:r,fontWeight:_,fontSize:m(S),lineHeight:y},r===rs?{letterSpacing:`${rf(b/S)}em`}:{},w,u),x={h1:g(i,96,1.167,-1.5),h2:g(i,60,1.2,-.5),h3:g(s,48,1.167,0),h4:g(s,34,1.235,.25),h5:g(s,24,1.334,0),h6:g(a,20,1.6,.15),subtitle1:g(s,16,1.75,.15),subtitle2:g(a,14,1.57,.1),body1:g(s,16,1.5,.15),body2:g(s,14,1.43,.15),button:g(a,14,1.75,.4,ns),caption:g(s,12,1.66,.4),overline:g(s,12,2.66,1,ns),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Me(f({htmlFontSize:c,pxToRem:m,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:l},x),h,{clone:!1})}const sf=.2,af=.14,lf=.12;function le(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${sf})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${af})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${lf})`].join(",")}const cf=["none",le(0,2,1,-1,0,1,1,0,0,1,3,0),le(0,3,1,-2,0,2,2,0,0,1,5,0),le(0,3,3,-2,0,3,4,0,0,1,8,0),le(0,2,4,-1,0,4,5,0,0,1,10,0),le(0,3,5,-1,0,5,8,0,0,1,14,0),le(0,3,5,-1,0,6,10,0,0,1,18,0),le(0,4,5,-2,0,7,10,1,0,2,16,1),le(0,5,5,-3,0,8,10,1,0,3,14,2),le(0,5,6,-3,0,9,12,1,0,3,16,2),le(0,6,6,-3,0,10,14,1,0,4,18,3),le(0,6,7,-4,0,11,15,1,0,4,20,3),le(0,7,8,-4,0,12,17,2,0,5,22,4),le(0,7,8,-4,0,13,19,2,0,5,24,4),le(0,7,9,-4,0,14,21,2,0,5,26,4),le(0,8,9,-5,0,15,22,2,0,6,28,5),le(0,8,10,-5,0,16,24,2,0,6,30,5),le(0,8,11,-5,0,17,26,2,0,6,32,5),le(0,9,11,-5,0,18,28,2,0,7,34,6),le(0,9,12,-6,0,19,29,2,0,7,36,6),le(0,10,13,-6,0,20,31,3,0,8,38,7),le(0,10,13,-6,0,21,33,3,0,8,40,7),le(0,10,14,-6,0,22,35,3,0,8,42,7),le(0,11,14,-7,0,23,36,3,0,9,44,8),le(0,11,15,-7,0,24,38,3,0,9,46,8)],uf=["duration","easing","delay"],df={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},ff={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function os(t){return`${Math.round(t)}ms`}function pf(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function hf(t){const e=f({},df,t.easing),n=f({},ff,t.duration);return f({getAutoHeightDuration:pf,create:(o=["all"],i={})=>{const{duration:s=n.standard,easing:a=e.easeInOut,delay:l=0}=i;return U(i,uf),(Array.isArray(o)?o:[o]).map(c=>`${c} ${typeof s=="string"?s:os(s)} ${a} ${typeof l=="string"?l:os(l)}`).join(",")}},t,{easing:e,duration:n})}const mf={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},gf=mf,bf=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Na(t={},...e){const{mixins:n={},palette:r={},transitions:o={},typography:i={}}=t,s=U(t,bf);if(t.vars)throw new Error(xt(18));const a=tf(r),l=li(t);let c=Me(l,{mixins:Fd(l.breakpoints,n),palette:a,shadows:cf.slice(),typography:of(a,i),transitions:hf(o),zIndex:f({},gf)});return c=Me(c,s),c=e.reduce((u,p)=>Me(u,p),c),c.unstable_sxConfig=f({},jr,s==null?void 0:s.unstable_sxConfig),c.unstable_sx=function(p){return Hr({sx:p,theme:this})},c}const vf=Na(),Gr=vf;function ui(){const t=Vr(Gr);return t[Lt]||t}function be({props:t,name:e}){return Cd({props:t,name:e,defaultTheme:Gr,themeId:Lt})}const Ye=t=>In(t)&&t!=="classes",yf=In,W=Id({themeId:Lt,defaultTheme:Gr,rootShouldForwardProp:Ye}),Ef=["theme"];function By(t){let{theme:e}=t,n=U(t,Ef);const r=e[Lt];return T.jsx(Dd,f({},n,{themeId:r?Lt:void 0,theme:r||e}))}const is=t=>{let e;return t<1?e=5.11916*t**2:e=4.5*Math.log(t+1)+2,(e/100).toFixed(2)},_f=ce("MuiBox",["root"]),xf=_f,wf=Na(),If=pd({themeId:Lt,defaultTheme:wf,defaultClassName:xf.root,generateClassName:Ca.generate}),di=If;function Uy(t){return ea({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"},child:[]},{tag:"path",attr:{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"},child:[]}]})(t)}function zy(t){return ea({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"},child:[]},{tag:"path",attr:{d:"M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"},child:[]}]})(t)}function No(t,e){return No=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},No(t,e)}function La(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,No(t,e)}const ss={disabled:!1},dr=st.createContext(null);var Sf=function(e){return e.scrollTop},En="unmounted",Tt="exited",Rt="entering",Yt="entered",Lo="exiting",dt=function(t){La(e,t);function e(r,o){var i;i=t.call(this,r,o)||this;var s=o,a=s&&!s.isMounting?r.enter:r.appear,l;return i.appearStatus=null,r.in?a?(l=Tt,i.appearStatus=Rt):l=Yt:r.unmountOnExit||r.mountOnEnter?l=En:l=Tt,i.state={status:l},i.nextCallback=null,i}e.getDerivedStateFromProps=function(o,i){var s=o.in;return s&&i.status===En?{status:Tt}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var s=this.state.status;this.props.in?s!==Rt&&s!==Yt&&(i=Rt):(s===Rt||s===Yt)&&(i=Lo)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,s,a;return i=s=a=o,o!=null&&typeof o!="number"&&(i=o.exit,s=o.enter,a=o.appear!==void 0?o.appear:s),{exit:i,enter:s,appear:a}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===Rt){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:qn.findDOMNode(this);s&&Sf(s)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Tt&&this.setState({status:En})},n.performEnter=function(o){var i=this,s=this.props.enter,a=this.context?this.context.isMounting:o,l=this.props.nodeRef?[a]:[qn.findDOMNode(this),a],c=l[0],u=l[1],p=this.getTimeouts(),h=a?p.appear:p.enter;if(!o&&!s||ss.disabled){this.safeSetState({status:Yt},function(){i.props.onEntered(c)});return}this.props.onEnter(c,u),this.safeSetState({status:Rt},function(){i.props.onEntering(c,u),i.onTransitionEnd(h,function(){i.safeSetState({status:Yt},function(){i.props.onEntered(c,u)})})})},n.performExit=function(){var o=this,i=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:qn.findDOMNode(this);if(!i||ss.disabled){this.safeSetState({status:Tt},function(){o.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Lo},function(){o.props.onExiting(a),o.onTransitionEnd(s.exit,function(){o.safeSetState({status:Tt},function(){o.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,i.nextCallback=null,o(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var s=this.props.nodeRef?this.props.nodeRef.current:qn.findDOMNode(this),a=o==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],c=l[0],u=l[1];this.props.addEndListener(c,u)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===En)return null;var i=this.props,s=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var a=U(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return st.createElement(dr.Provider,{value:null},typeof s=="function"?s(o,a):st.cloneElement(st.Children.only(s),a))},e}(st.Component);dt.contextType=dr;dt.propTypes={};function qt(){}dt.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:qt,onEntering:qt,onEntered:qt,onExit:qt,onExiting:qt,onExited:qt};dt.UNMOUNTED=En;dt.EXITED=Tt;dt.ENTERING=Rt;dt.ENTERED=Yt;dt.EXITING=Lo;const Da=dt;function Cf(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function fi(t,e){var n=function(i){return e&&d.isValidElement(i)?e(i):i},r=Object.create(null);return t&&d.Children.map(t,function(o){return o}).forEach(function(o){r[o.key]=n(o)}),r}function Tf(t,e){t=t||{},e=e||{};function n(u){return u in e?e[u]:t[u]}var r=Object.create(null),o=[];for(var i in t)i in e?o.length&&(r[i]=o,o=[]):o.push(i);var s,a={};for(var l in e){if(r[l])for(s=0;s<r[l].length;s++){var c=r[l][s];a[r[l][s]]=n(c)}a[l]=n(l)}for(s=0;s<o.length;s++)a[o[s]]=n(o[s]);return a}function Ot(t,e,n){return n[e]!=null?n[e]:t.props[e]}function Rf(t,e){return fi(t.children,function(n){return d.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:Ot(n,"appear",t),enter:Ot(n,"enter",t),exit:Ot(n,"exit",t)})})}function kf(t,e,n){var r=fi(t.children),o=Tf(e,r);return Object.keys(o).forEach(function(i){var s=o[i];if(d.isValidElement(s)){var a=i in e,l=i in r,c=e[i],u=d.isValidElement(c)&&!c.props.in;l&&(!a||u)?o[i]=d.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:Ot(s,"exit",t),enter:Ot(s,"enter",t)}):!l&&a&&!u?o[i]=d.cloneElement(s,{in:!1}):l&&a&&d.isValidElement(c)&&(o[i]=d.cloneElement(s,{onExited:n.bind(null,s),in:c.props.in,exit:Ot(s,"exit",t),enter:Ot(s,"enter",t)}))}}),o}var Pf=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},Of={component:"div",childFactory:function(e){return e}},pi=function(t){La(e,t);function e(r,o){var i;i=t.call(this,r,o)||this;var s=i.handleExited.bind(Cf(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,i){var s=i.children,a=i.handleExited,l=i.firstRender;return{children:l?Rf(o,a):kf(o,s,a),firstRender:!1}},n.handleExited=function(o,i){var s=fi(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(a){var l=f({},a.children);return delete l[o.key],{children:l}}))},n.render=function(){var o=this.props,i=o.component,s=o.childFactory,a=U(o,["component","childFactory"]),l=this.state.contextValue,c=Pf(this.state.children).map(s);return delete a.appear,delete a.enter,delete a.exit,i===null?st.createElement(dr.Provider,{value:l},c):st.createElement(dr.Provider,{value:l},st.createElement(i,a,c))},e}(st.Component);pi.propTypes={};pi.defaultProps=Of;const Af=pi;function $f(t){const{className:e,classes:n,pulsate:r=!1,rippleX:o,rippleY:i,rippleSize:s,in:a,onExited:l,timeout:c}=t,[u,p]=d.useState(!1),h=V(e,n.ripple,n.rippleVisible,r&&n.ripplePulsate),v={width:s,height:s,top:-(s/2)+i,left:-(s/2)+o},m=V(n.child,u&&n.childLeaving,r&&n.childPulsate);return!a&&!u&&p(!0),d.useEffect(()=>{if(!a&&l!=null){const g=setTimeout(l,c);return()=>{clearTimeout(g)}}},[l,a,c]),T.jsx("span",{className:h,style:v,children:T.jsx("span",{className:m})})}const je=ce("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Mf=["center","classes","className"];let qr=t=>t,as,ls,cs,us;const Do=550,Nf=80,Lf=ni(as||(as=qr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Df=ni(ls||(ls=qr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Ff=ni(cs||(cs=qr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Bf=W("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Uf=W($f,{name:"MuiTouchRipple",slot:"Ripple"})(us||(us=qr`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),je.rippleVisible,Lf,Do,({theme:t})=>t.transitions.easing.easeInOut,je.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,je.child,je.childLeaving,Df,Do,({theme:t})=>t.transitions.easing.easeInOut,je.childPulsate,Ff,({theme:t})=>t.transitions.easing.easeInOut),zf=d.forwardRef(function(e,n){const r=be({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:s}=r,a=U(r,Mf),[l,c]=d.useState([]),u=d.useRef(0),p=d.useRef(null);d.useEffect(()=>{p.current&&(p.current(),p.current=null)},[l]);const h=d.useRef(!1),v=wa(),m=d.useRef(null),g=d.useRef(null),x=d.useCallback(b=>{const{pulsate:w,rippleX:I,rippleY:E,rippleSize:P,cb:O}=b;c(C=>[...C,T.jsx(Uf,{classes:{ripple:V(i.ripple,je.ripple),rippleVisible:V(i.rippleVisible,je.rippleVisible),ripplePulsate:V(i.ripplePulsate,je.ripplePulsate),child:V(i.child,je.child),childLeaving:V(i.childLeaving,je.childLeaving),childPulsate:V(i.childPulsate,je.childPulsate)},timeout:Do,pulsate:w,rippleX:I,rippleY:E,rippleSize:P},u.current)]),u.current+=1,p.current=O},[i]),_=d.useCallback((b={},w={},I=()=>{})=>{const{pulsate:E=!1,center:P=o||w.pulsate,fakeElement:O=!1}=w;if((b==null?void 0:b.type)==="mousedown"&&h.current){h.current=!1;return}(b==null?void 0:b.type)==="touchstart"&&(h.current=!0);const C=O?null:g.current,N=C?C.getBoundingClientRect():{width:0,height:0,left:0,top:0};let M,A,R;if(P||b===void 0||b.clientX===0&&b.clientY===0||!b.clientX&&!b.touches)M=Math.round(N.width/2),A=Math.round(N.height/2);else{const{clientX:k,clientY:$}=b.touches&&b.touches.length>0?b.touches[0]:b;M=Math.round(k-N.left),A=Math.round($-N.top)}if(P)R=Math.sqrt((2*N.width**2+N.height**2)/3),R%2===0&&(R+=1);else{const k=Math.max(Math.abs((C?C.clientWidth:0)-M),M)*2+2,$=Math.max(Math.abs((C?C.clientHeight:0)-A),A)*2+2;R=Math.sqrt(k**2+$**2)}b!=null&&b.touches?m.current===null&&(m.current=()=>{x({pulsate:E,rippleX:M,rippleY:A,rippleSize:R,cb:I})},v.start(Nf,()=>{m.current&&(m.current(),m.current=null)})):x({pulsate:E,rippleX:M,rippleY:A,rippleSize:R,cb:I})},[o,x,v]),S=d.useCallback(()=>{_({},{pulsate:!0})},[_]),y=d.useCallback((b,w)=>{if(v.clear(),(b==null?void 0:b.type)==="touchend"&&m.current){m.current(),m.current=null,v.start(0,()=>{y(b,w)});return}m.current=null,c(I=>I.length>0?I.slice(1):I),p.current=w},[v]);return d.useImperativeHandle(n,()=>({pulsate:S,start:_,stop:y}),[S,_,y]),T.jsx(Bf,f({className:V(je.root,i.root,s),ref:g},a,{children:T.jsx(Af,{component:null,exit:!0,children:l})}))}),Wf=zf;function jf(t){return fe("MuiButtonBase",t)}const Hf=ce("MuiButtonBase",["root","disabled","focusVisible"]),Vf=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Kf=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:r,classes:o}=t,s=ge({root:["root",e&&"disabled",n&&"focusVisible"]},jf,o);return n&&r&&(s.root+=` ${r}`),s},Gf=W("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Hf.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),qf=d.forwardRef(function(e,n){const r=be({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:s,className:a,component:l="button",disabled:c=!1,disableRipple:u=!1,disableTouchRipple:p=!1,focusRipple:h=!1,LinkComponent:v="a",onBlur:m,onClick:g,onContextMenu:x,onDragLeave:_,onFocus:S,onFocusVisible:y,onKeyDown:b,onKeyUp:w,onMouseDown:I,onMouseLeave:E,onMouseUp:P,onTouchEnd:O,onTouchMove:C,onTouchStart:N,tabIndex:M=0,TouchRippleProps:A,touchRippleRef:R,type:k}=r,$=U(r,Vf),D=d.useRef(null),L=d.useRef(null),j=ke(L,R),{isFocusVisibleRef:J,onFocus:Pe,onBlur:ve,ref:pe}=Ia(),[G,oe]=d.useState(!1);c&&G&&oe(!1),d.useImperativeHandle(o,()=>({focusVisible:()=>{oe(!0),D.current.focus()}}),[]);const[ie,Oe]=d.useState(!1);d.useEffect(()=>{Oe(!0)},[]);const Re=ie&&!u&&!c;d.useEffect(()=>{G&&h&&!u&&ie&&L.current.pulsate()},[u,h,G,ie]);function ye(B,ot,pn=p){return Xt(hn=>(ot&&ot(hn),!pn&&L.current&&L.current[B](hn),!0))}const Ae=ye("start",I),X=ye("stop",x),ue=ye("stop",_),H=ye("stop",P),Z=ye("stop",B=>{G&&B.preventDefault(),E&&E(B)}),se=ye("start",N),ft=ye("stop",O),Ue=ye("stop",C),ze=ye("stop",B=>{ve(B),J.current===!1&&oe(!1),m&&m(B)},!1),Ge=Xt(B=>{D.current||(D.current=B.currentTarget),Pe(B),J.current===!0&&(oe(!0),y&&y(B)),S&&S(B)}),We=()=>{const B=D.current;return l&&l!=="button"&&!(B.tagName==="A"&&B.href)},de=d.useRef(!1),nt=Xt(B=>{h&&!de.current&&G&&L.current&&B.key===" "&&(de.current=!0,L.current.stop(B,()=>{L.current.start(B)})),B.target===B.currentTarget&&We()&&B.key===" "&&B.preventDefault(),b&&b(B),B.target===B.currentTarget&&We()&&B.key==="Enter"&&!c&&(B.preventDefault(),g&&g(B))}),$e=Xt(B=>{h&&B.key===" "&&L.current&&G&&!B.defaultPrevented&&(de.current=!1,L.current.stop(B,()=>{L.current.pulsate(B)})),w&&w(B),g&&B.target===B.currentTarget&&We()&&B.key===" "&&!B.defaultPrevented&&g(B)});let ae=l;ae==="button"&&($.href||$.to)&&(ae=v);const Xe={};ae==="button"?(Xe.type=k===void 0?"button":k,Xe.disabled=c):(!$.href&&!$.to&&(Xe.role="button"),c&&(Xe["aria-disabled"]=c));const pt=ke(n,pe,D),rt=f({},r,{centerRipple:i,component:l,disabled:c,disableRipple:u,disableTouchRipple:p,focusRipple:h,tabIndex:M,focusVisible:G}),ne=Kf(rt);return T.jsxs(Gf,f({as:ae,className:V(ne.root,a),ownerState:rt,onBlur:ze,onClick:g,onContextMenu:X,onFocus:Ge,onKeyDown:nt,onKeyUp:$e,onMouseDown:Ae,onMouseLeave:Z,onMouseUp:H,onDragLeave:ue,onTouchEnd:ft,onTouchMove:Ue,onTouchStart:se,ref:pt,tabIndex:c?-1:M,type:k},Xe,$,{children:[s,Re?T.jsx(Wf,f({ref:j,center:i},A)):null]}))}),Yf=qf;function Xf(t){return fe("MuiButton",t)}const Jf=ce("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),Xn=Jf,Qf=d.createContext({}),Zf=Qf,ep=d.createContext(void 0),tp=ep,np=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],rp=t=>{const{color:e,disableElevation:n,fullWidth:r,size:o,variant:i,classes:s}=t,a={root:["root",i,`${i}${K(e)}`,`size${K(o)}`,`${i}Size${K(o)}`,e==="inherit"&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${K(o)}`],endIcon:["endIcon",`iconSize${K(o)}`]},l=ge(a,Xf,s);return f({},s,l)},Fa=t=>f({},t.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},t.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},t.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),op=W(Yf,{shouldForwardProp:t=>Ye(t)||t==="classes",name:"MuiButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],e[`${n.variant}${K(n.color)}`],e[`size${K(n.size)}`],e[`${n.variant}Size${K(n.size)}`],n.color==="inherit"&&e.colorInherit,n.disableElevation&&e.disableElevation,n.fullWidth&&e.fullWidth]}})(({theme:t,ownerState:e})=>{var n,r;const o=t.palette.mode==="light"?t.palette.grey[300]:t.palette.grey[800],i=t.palette.mode==="light"?t.palette.grey.A100:t.palette.grey[700];return f({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":f({textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:Pt(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="text"&&e.color!=="inherit"&&{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Pt(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="outlined"&&e.color!=="inherit"&&{border:`1px solid ${(t.vars||t).palette[e.color].main}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Pt(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="contained"&&{backgroundColor:t.vars?t.vars.palette.Button.inheritContainedHoverBg:i,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},e.variant==="contained"&&e.color!=="inherit"&&{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}}),"&:active":f({},e.variant==="contained"&&{boxShadow:(t.vars||t).shadows[8]}),[`&.${Xn.focusVisible}`]:f({},e.variant==="contained"&&{boxShadow:(t.vars||t).shadows[6]}),[`&.${Xn.disabled}`]:f({color:(t.vars||t).palette.action.disabled},e.variant==="outlined"&&{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},e.variant==="contained"&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},e.variant==="text"&&{padding:"6px 8px"},e.variant==="text"&&e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main},e.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},e.variant==="outlined"&&e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main,border:t.vars?`1px solid rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:`1px solid ${Pt(t.palette[e.color].main,.5)}`},e.variant==="contained"&&{color:t.vars?t.vars.palette.text.primary:(n=(r=t.palette).getContrastText)==null?void 0:n.call(r,t.palette.grey[300]),backgroundColor:t.vars?t.vars.palette.Button.inheritContainedBg:o,boxShadow:(t.vars||t).shadows[2]},e.variant==="contained"&&e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main},e.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},e.size==="small"&&e.variant==="text"&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},e.size==="large"&&e.variant==="text"&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},e.size==="small"&&e.variant==="outlined"&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},e.size==="large"&&e.variant==="outlined"&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},e.size==="small"&&e.variant==="contained"&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},e.size==="large"&&e.variant==="contained"&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},e.fullWidth&&{width:"100%"})},({ownerState:t})=>t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Xn.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Xn.disabled}`]:{boxShadow:"none"}}),ip=W("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.startIcon,e[`iconSize${K(n.size)}`]]}})(({ownerState:t})=>f({display:"inherit",marginRight:8,marginLeft:-4},t.size==="small"&&{marginLeft:-2},Fa(t))),sp=W("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.endIcon,e[`iconSize${K(n.size)}`]]}})(({ownerState:t})=>f({display:"inherit",marginRight:-4,marginLeft:8},t.size==="small"&&{marginRight:-2},Fa(t))),ap=d.forwardRef(function(e,n){const r=d.useContext(Zf),o=d.useContext(tp),i=ri(r,e),s=be({props:i,name:"MuiButton"}),{children:a,color:l="primary",component:c="button",className:u,disabled:p=!1,disableElevation:h=!1,disableFocusRipple:v=!1,endIcon:m,focusVisibleClassName:g,fullWidth:x=!1,size:_="medium",startIcon:S,type:y,variant:b="text"}=s,w=U(s,np),I=f({},s,{color:l,component:c,disabled:p,disableElevation:h,disableFocusRipple:v,fullWidth:x,size:_,type:y,variant:b}),E=rp(I),P=S&&T.jsx(ip,{className:E.startIcon,ownerState:I,children:S}),O=m&&T.jsx(sp,{className:E.endIcon,ownerState:I,children:m}),C=o||"";return T.jsxs(op,f({ownerState:I,className:V(r.className,E.root,u,C),component:c,disabled:p,focusRipple:!v,focusVisibleClassName:V(E.focusVisible,g),ref:n,type:y},w,{classes:E,children:[P,a,O]}))}),lp=ap;function cp(t){return fe("MuiTypography",t)}ce("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const up=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],dp=t=>{const{align:e,gutterBottom:n,noWrap:r,paragraph:o,variant:i,classes:s}=t,a={root:["root",i,t.align!=="inherit"&&`align${K(e)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return ge(a,cp,s)},fp=W("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.variant&&e[n.variant],n.align!=="inherit"&&e[`align${K(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>f({margin:0},e.variant==="inherit"&&{font:"inherit"},e.variant!=="inherit"&&t.typography[e.variant],e.align!=="inherit"&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),ds={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},pp={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},hp=t=>pp[t]||t,mp=d.forwardRef(function(e,n){const r=be({props:e,name:"MuiTypography"}),o=hp(r.color),i=Oa(f({},r,{color:o})),{align:s="inherit",className:a,component:l,gutterBottom:c=!1,noWrap:u=!1,paragraph:p=!1,variant:h="body1",variantMapping:v=ds}=i,m=U(i,up),g=f({},i,{align:s,color:o,className:a,component:l,gutterBottom:c,noWrap:u,paragraph:p,variant:h,variantMapping:v}),x=l||(p?"p":v[h]||ds[h])||"span",_=dp(g);return T.jsx(fp,f({as:x,ref:n,ownerState:g,className:V(_.root,a)},m))}),hi=mp;function gp(t){return fe("MuiLink",t)}const bp=ce("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),vp=bp,Ba={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},yp=t=>Ba[t]||t,Ep=({theme:t,ownerState:e})=>{const n=yp(e.color),r=on(t,`palette.${n}`,!1)||e.color,o=on(t,`palette.${n}Channel`);return"vars"in t&&o?`rgba(${o} / 0.4)`:Pt(r,.4)},_p=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],xp=t=>{const{classes:e,component:n,focusVisible:r,underline:o}=t,i={root:["root",`underline${K(o)}`,n==="button"&&"button",r&&"focusVisible"]};return ge(i,gp,e)},wp=W(hi,{name:"MuiLink",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`underline${K(n.underline)}`],n.component==="button"&&e.button]}})(({theme:t,ownerState:e})=>f({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&f({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:Ep({theme:t,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${vp.focusVisible}`]:{outline:"auto"}})),Ip=d.forwardRef(function(e,n){const r=be({props:e,name:"MuiLink"}),{className:o,color:i="primary",component:s="a",onBlur:a,onFocus:l,TypographyClasses:c,underline:u="always",variant:p="inherit",sx:h}=r,v=U(r,_p),{isFocusVisibleRef:m,onBlur:g,onFocus:x,ref:_}=Ia(),[S,y]=d.useState(!1),b=ke(n,_),w=O=>{g(O),m.current===!1&&y(!1),a&&a(O)},I=O=>{x(O),m.current===!0&&y(!0),l&&l(O)},E=f({},r,{color:i,component:s,focusVisible:S,underline:u,variant:p}),P=xp(E);return T.jsx(wp,f({color:i,className:V(P.root,o),classes:c,component:s,onBlur:w,onFocus:I,ref:b,ownerState:E,variant:p,sx:[...Object.keys(Ba).includes(i)?[]:[{color:i}],...Array.isArray(h)?h:[h]]},v))}),Sp=Ip;function fr(t){return typeof t=="string"}function Cp(t,e,n){return t===void 0||fr(t)?e:f({},e,{ownerState:f({},e.ownerState,n)})}function Ua(t,e=[]){if(t===void 0)return{};const n={};return Object.keys(t).filter(r=>r.match(/^on[A-Z]/)&&typeof t[r]=="function"&&!e.includes(r)).forEach(r=>{n[r]=t[r]}),n}function Tp(t,e,n){return typeof t=="function"?t(e,n):t}function fs(t){if(t===void 0)return{};const e={};return Object.keys(t).filter(n=>!(n.match(/^on[A-Z]/)&&typeof t[n]=="function")).forEach(n=>{e[n]=t[n]}),e}function Rp(t){const{getSlotProps:e,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:i}=t;if(!e){const v=V(n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),m=f({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),g=f({},n,o,r);return v.length>0&&(g.className=v),Object.keys(m).length>0&&(g.style=m),{props:g,internalRef:void 0}}const s=Ua(f({},o,r)),a=fs(r),l=fs(o),c=e(s),u=V(c==null?void 0:c.className,n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),p=f({},c==null?void 0:c.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),h=f({},c,n,l,a);return u.length>0&&(h.className=u),Object.keys(p).length>0&&(h.style=p),{props:h,internalRef:c.ref}}const kp=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function sn(t){var e;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:i=!1}=t,s=U(t,kp),a=i?{}:Tp(r,o),{props:l,internalRef:c}=Rp(f({},s,{externalSlotProps:a})),u=ke(c,a==null?void 0:a.ref,(e=t.additionalProps)==null?void 0:e.ref);return Cp(n,f({},l,{ref:u}),o)}const Pp=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Op(t){const e=parseInt(t.getAttribute("tabindex")||"",10);return Number.isNaN(e)?t.contentEditable==="true"||(t.nodeName==="AUDIO"||t.nodeName==="VIDEO"||t.nodeName==="DETAILS")&&t.getAttribute("tabindex")===null?0:t.tabIndex:e}function Ap(t){if(t.tagName!=="INPUT"||t.type!=="radio"||!t.name)return!1;const e=r=>t.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=e(`[name="${t.name}"]:checked`);return n||(n=e(`[name="${t.name}"]`)),n!==t}function $p(t){return!(t.disabled||t.tagName==="INPUT"&&t.type==="hidden"||Ap(t))}function Mp(t){const e=[],n=[];return Array.from(t.querySelectorAll(Pp)).forEach((r,o)=>{const i=Op(r);i===-1||!$p(r)||(i===0?e.push(r):n.push({documentOrder:o,tabIndex:i,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(e)}function Np(){return!0}function Lp(t){const{children:e,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:i=Mp,isEnabled:s=Np,open:a}=t,l=d.useRef(!1),c=d.useRef(null),u=d.useRef(null),p=d.useRef(null),h=d.useRef(null),v=d.useRef(!1),m=d.useRef(null),g=ke(e.ref,m),x=d.useRef(null);d.useEffect(()=>{!a||!m.current||(v.current=!n)},[n,a]),d.useEffect(()=>{if(!a||!m.current)return;const y=Fe(m.current);return m.current.contains(y.activeElement)||(m.current.hasAttribute("tabIndex")||m.current.setAttribute("tabIndex","-1"),v.current&&m.current.focus()),()=>{o||(p.current&&p.current.focus&&(l.current=!0,p.current.focus()),p.current=null)}},[a]),d.useEffect(()=>{if(!a||!m.current)return;const y=Fe(m.current),b=E=>{x.current=E,!(r||!s()||E.key!=="Tab")&&y.activeElement===m.current&&E.shiftKey&&(l.current=!0,u.current&&u.current.focus())},w=()=>{const E=m.current;if(E===null)return;if(!y.hasFocus()||!s()||l.current){l.current=!1;return}if(E.contains(y.activeElement)||r&&y.activeElement!==c.current&&y.activeElement!==u.current)return;if(y.activeElement!==h.current)h.current=null;else if(h.current!==null)return;if(!v.current)return;let P=[];if((y.activeElement===c.current||y.activeElement===u.current)&&(P=i(m.current)),P.length>0){var O,C;const N=!!((O=x.current)!=null&&O.shiftKey&&((C=x.current)==null?void 0:C.key)==="Tab"),M=P[0],A=P[P.length-1];typeof M!="string"&&typeof A!="string"&&(N?A.focus():M.focus())}else E.focus()};y.addEventListener("focusin",w),y.addEventListener("keydown",b,!0);const I=setInterval(()=>{y.activeElement&&y.activeElement.tagName==="BODY"&&w()},50);return()=>{clearInterval(I),y.removeEventListener("focusin",w),y.removeEventListener("keydown",b,!0)}},[n,r,o,s,a,i]);const _=y=>{p.current===null&&(p.current=y.relatedTarget),v.current=!0,h.current=y.target;const b=e.props.onFocus;b&&b(y)},S=y=>{p.current===null&&(p.current=y.relatedTarget),v.current=!0};return T.jsxs(d.Fragment,{children:[T.jsx("div",{tabIndex:a?0:-1,onFocus:S,ref:c,"data-testid":"sentinelStart"}),d.cloneElement(e,{ref:g,onFocus:_}),T.jsx("div",{tabIndex:a?0:-1,onFocus:S,ref:u,"data-testid":"sentinelEnd"})]})}function Dp(t){return typeof t=="function"?t():t}const Fp=d.forwardRef(function(e,n){const{children:r,container:o,disablePortal:i=!1}=e,[s,a]=d.useState(null),l=ke(d.isValidElement(r)?r.ref:null,n);if(Mt(()=>{i||a(Dp(o)||document.body)},[o,i]),Mt(()=>{if(s&&!i)return $o(n,s),()=>{$o(n,null)}},[n,s,i]),i){if(d.isValidElement(r)){const c={ref:l};return d.cloneElement(r,c)}return T.jsx(d.Fragment,{children:r})}return T.jsx(d.Fragment,{children:s&&Zs.createPortal(r,s)})});function Bp(t){const e=Fe(t);return e.body===t?$t(t).innerWidth>e.documentElement.clientWidth:t.scrollHeight>t.clientHeight}function Sn(t,e){e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden")}function ps(t){return parseInt($t(t).getComputedStyle(t).paddingRight,10)||0}function Up(t){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(t.tagName)!==-1,r=t.tagName==="INPUT"&&t.getAttribute("type")==="hidden";return n||r}function hs(t,e,n,r,o){const i=[e,n,...r];[].forEach.call(t.children,s=>{const a=i.indexOf(s)===-1,l=!Up(s);a&&l&&Sn(s,o)})}function vo(t,e){let n=-1;return t.some((r,o)=>e(r)?(n=o,!0):!1),n}function zp(t,e){const n=[],r=t.container;if(!e.disableScrollLock){if(Bp(r)){const s=Sa(Fe(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${ps(r)+s}px`;const a=Fe(r).querySelectorAll(".mui-fixed");[].forEach.call(a,l=>{n.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${ps(l)+s}px`})}let i;if(r.parentNode instanceof DocumentFragment)i=Fe(r).body;else{const s=r.parentElement,a=$t(r);i=(s==null?void 0:s.nodeName)==="HTML"&&a.getComputedStyle(s).overflowY==="scroll"?s:r}n.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{n.forEach(({value:i,el:s,property:a})=>{i?s.style.setProperty(a,i):s.style.removeProperty(a)})}}function Wp(t){const e=[];return[].forEach.call(t.children,n=>{n.getAttribute("aria-hidden")==="true"&&e.push(n)}),e}class jp{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,n){let r=this.modals.indexOf(e);if(r!==-1)return r;r=this.modals.length,this.modals.push(e),e.modalRef&&Sn(e.modalRef,!1);const o=Wp(n);hs(n,e.mount,e.modalRef,o,!0);const i=vo(this.containers,s=>s.container===n);return i!==-1?(this.containers[i].modals.push(e),r):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblings:o}),r)}mount(e,n){const r=vo(this.containers,i=>i.modals.indexOf(e)!==-1),o=this.containers[r];o.restore||(o.restore=zp(o,n))}remove(e,n=!0){const r=this.modals.indexOf(e);if(r===-1)return r;const o=vo(this.containers,s=>s.modals.indexOf(e)!==-1),i=this.containers[o];if(i.modals.splice(i.modals.indexOf(e),1),this.modals.splice(r,1),i.modals.length===0)i.restore&&i.restore(),e.modalRef&&Sn(e.modalRef,n),hs(i.container,e.mount,e.modalRef,i.hiddenSiblings,!1),this.containers.splice(o,1);else{const s=i.modals[i.modals.length-1];s.modalRef&&Sn(s.modalRef,!1)}return r}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}function Hp(t){return typeof t=="function"?t():t}function Vp(t){return t?t.props.hasOwnProperty("in"):!1}const Kp=new jp;function Gp(t){const{container:e,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=Kp,closeAfterTransition:i=!1,onTransitionEnter:s,onTransitionExited:a,children:l,onClose:c,open:u,rootRef:p}=t,h=d.useRef({}),v=d.useRef(null),m=d.useRef(null),g=ke(m,p),[x,_]=d.useState(!u),S=Vp(l);let y=!0;(t["aria-hidden"]==="false"||t["aria-hidden"]===!1)&&(y=!1);const b=()=>Fe(v.current),w=()=>(h.current.modalRef=m.current,h.current.mount=v.current,h.current),I=()=>{o.mount(w(),{disableScrollLock:r}),m.current&&(m.current.scrollTop=0)},E=Xt(()=>{const $=Hp(e)||b().body;o.add(w(),$),m.current&&I()}),P=d.useCallback(()=>o.isTopModal(w()),[o]),O=Xt($=>{v.current=$,$&&(u&&P()?I():m.current&&Sn(m.current,y))}),C=d.useCallback(()=>{o.remove(w(),y)},[y,o]);d.useEffect(()=>()=>{C()},[C]),d.useEffect(()=>{u?E():(!S||!i)&&C()},[u,C,S,i,E]);const N=$=>D=>{var L;(L=$.onKeyDown)==null||L.call($,D),!(D.key!=="Escape"||D.which===229||!P())&&(n||(D.stopPropagation(),c&&c(D,"escapeKeyDown")))},M=$=>D=>{var L;(L=$.onClick)==null||L.call($,D),D.target===D.currentTarget&&c&&c(D,"backdropClick")};return{getRootProps:($={})=>{const D=Ua(t);delete D.onTransitionEnter,delete D.onTransitionExited;const L=f({},D,$);return f({role:"presentation"},L,{onKeyDown:N(L),ref:g})},getBackdropProps:($={})=>{const D=$;return f({"aria-hidden":!0},D,{onClick:M(D),open:u})},getTransitionProps:()=>{const $=()=>{_(!1),s&&s()},D=()=>{_(!0),a&&a(),i&&C()};return{onEnter:zi($,l==null?void 0:l.props.onEnter),onExited:zi(D,l==null?void 0:l.props.onExited)}},rootRef:g,portalRef:O,isTopModal:P,exited:x,hasTransition:S}}const qp=["onChange","maxRows","minRows","style","value"];function Jn(t){return parseInt(t,10)||0}const Yp={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function ms(t){return t==null||Object.keys(t).length===0||t.outerHeightStyle===0&&!t.overflow}const Xp=d.forwardRef(function(e,n){const{onChange:r,maxRows:o,minRows:i=1,style:s,value:a}=e,l=U(e,qp),{current:c}=d.useRef(a!=null),u=d.useRef(null),p=ke(n,u),h=d.useRef(null),v=d.useRef(0),[m,g]=d.useState({outerHeightStyle:0}),x=d.useCallback(()=>{const b=u.current,I=$t(b).getComputedStyle(b);if(I.width==="0px")return{outerHeightStyle:0};const E=h.current;E.style.width=I.width,E.value=b.value||e.placeholder||"x",E.value.slice(-1)===`
`&&(E.value+=" ");const P=I.boxSizing,O=Jn(I.paddingBottom)+Jn(I.paddingTop),C=Jn(I.borderBottomWidth)+Jn(I.borderTopWidth),N=E.scrollHeight;E.value="x";const M=E.scrollHeight;let A=N;i&&(A=Math.max(Number(i)*M,A)),o&&(A=Math.min(Number(o)*M,A)),A=Math.max(A,M);const R=A+(P==="border-box"?O+C:0),k=Math.abs(A-N)<=1;return{outerHeightStyle:R,overflow:k}},[o,i,e.placeholder]),_=(b,w)=>{const{outerHeightStyle:I,overflow:E}=w;return v.current<20&&(I>0&&Math.abs((b.outerHeightStyle||0)-I)>1||b.overflow!==E)?(v.current+=1,{overflow:E,outerHeightStyle:I}):b},S=d.useCallback(()=>{const b=x();ms(b)||g(w=>_(w,b))},[x]);Mt(()=>{const b=()=>{const N=x();ms(N)||Zs.flushSync(()=>{g(M=>_(M,N))})},w=()=>{v.current=0,b()};let I;const E=_a(w),P=u.current,O=$t(P);O.addEventListener("resize",E);let C;return typeof ResizeObserver<"u"&&(C=new ResizeObserver(w),C.observe(P)),()=>{E.clear(),cancelAnimationFrame(I),O.removeEventListener("resize",E),C&&C.disconnect()}},[x]),Mt(()=>{S()}),d.useEffect(()=>{v.current=0},[a]);const y=b=>{v.current=0,c||S(),r&&r(b)};return T.jsxs(d.Fragment,{children:[T.jsx("textarea",f({value:a,onChange:y,ref:p,rows:i,style:f({height:m.outerHeightStyle,overflow:m.overflow?"hidden":void 0},s)},l)),T.jsx("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:h,tabIndex:-1,style:f({},Yp.shadow,s,{paddingTop:0,paddingBottom:0})})]})});function un({props:t,states:e,muiFormControl:n}){return e.reduce((r,o)=>(r[o]=t[o],n&&typeof t[o]>"u"&&(r[o]=n[o]),r),{})}const Jp=d.createContext(void 0),mi=Jp;function dn(){return d.useContext(mi)}function Qp(t){return T.jsx(cd,f({},t,{defaultTheme:Gr,themeId:Lt}))}function gs(t){return t!=null&&!(Array.isArray(t)&&t.length===0)}function pr(t,e=!1){return t&&(gs(t.value)&&t.value!==""||e&&gs(t.defaultValue)&&t.defaultValue!=="")}function Zp(t){return t.startAdornment}function eh(t){return fe("MuiInputBase",t)}const th=ce("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),an=th,nh=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],Yr=(t,e)=>{const{ownerState:n}=t;return[e.root,n.formControl&&e.formControl,n.startAdornment&&e.adornedStart,n.endAdornment&&e.adornedEnd,n.error&&e.error,n.size==="small"&&e.sizeSmall,n.multiline&&e.multiline,n.color&&e[`color${K(n.color)}`],n.fullWidth&&e.fullWidth,n.hiddenLabel&&e.hiddenLabel]},Xr=(t,e)=>{const{ownerState:n}=t;return[e.input,n.size==="small"&&e.inputSizeSmall,n.multiline&&e.inputMultiline,n.type==="search"&&e.inputTypeSearch,n.startAdornment&&e.inputAdornedStart,n.endAdornment&&e.inputAdornedEnd,n.hiddenLabel&&e.inputHiddenLabel]},rh=t=>{const{classes:e,color:n,disabled:r,error:o,endAdornment:i,focused:s,formControl:a,fullWidth:l,hiddenLabel:c,multiline:u,readOnly:p,size:h,startAdornment:v,type:m}=t,g={root:["root",`color${K(n)}`,r&&"disabled",o&&"error",l&&"fullWidth",s&&"focused",a&&"formControl",h&&h!=="medium"&&`size${K(h)}`,u&&"multiline",v&&"adornedStart",i&&"adornedEnd",c&&"hiddenLabel",p&&"readOnly"],input:["input",r&&"disabled",m==="search"&&"inputTypeSearch",u&&"inputMultiline",h==="small"&&"inputSizeSmall",c&&"inputHiddenLabel",v&&"inputAdornedStart",i&&"inputAdornedEnd",p&&"readOnly"]};return ge(g,eh,e)},Jr=W("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Yr})(({theme:t,ownerState:e})=>f({},t.typography.body1,{color:(t.vars||t).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${an.disabled}`]:{color:(t.vars||t).palette.text.disabled,cursor:"default"}},e.multiline&&f({padding:"4px 0 5px"},e.size==="small"&&{paddingTop:1}),e.fullWidth&&{width:"100%"})),Qr=W("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Xr})(({theme:t,ownerState:e})=>{const n=t.palette.mode==="light",r=f({color:"currentColor"},t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:t.transitions.create("opacity",{duration:t.transitions.duration.shorter})}),o={opacity:"0 !important"},i=t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return f({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${an.formControl} &`]:{"&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus::-webkit-input-placeholder":i,"&:focus::-moz-placeholder":i,"&:focus:-ms-input-placeholder":i,"&:focus::-ms-input-placeholder":i},[`&.${an.disabled}`]:{opacity:1,WebkitTextFillColor:(t.vars||t).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},e.size==="small"&&{paddingTop:1},e.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},e.type==="search"&&{MozAppearance:"textfield"})}),oh=T.jsx(Qp,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),ih=d.forwardRef(function(e,n){var r;const o=be({props:e,name:"MuiInputBase"}),{"aria-describedby":i,autoComplete:s,autoFocus:a,className:l,components:c={},componentsProps:u={},defaultValue:p,disabled:h,disableInjectingGlobalStyles:v,endAdornment:m,fullWidth:g=!1,id:x,inputComponent:_="input",inputProps:S={},inputRef:y,maxRows:b,minRows:w,multiline:I=!1,name:E,onBlur:P,onChange:O,onClick:C,onFocus:N,onKeyDown:M,onKeyUp:A,placeholder:R,readOnly:k,renderSuffix:$,rows:D,slotProps:L={},slots:j={},startAdornment:J,type:Pe="text",value:ve}=o,pe=U(o,nh),G=S.value!=null?S.value:ve,{current:oe}=d.useRef(G!=null),ie=d.useRef(),Oe=d.useCallback(ne=>{},[]),Re=ke(ie,y,S.ref,Oe),[ye,Ae]=d.useState(!1),X=dn(),ue=un({props:o,muiFormControl:X,states:["color","disabled","error","hiddenLabel","size","required","filled"]});ue.focused=X?X.focused:ye,d.useEffect(()=>{!X&&h&&ye&&(Ae(!1),P&&P())},[X,h,ye,P]);const H=X&&X.onFilled,Z=X&&X.onEmpty,se=d.useCallback(ne=>{pr(ne)?H&&H():Z&&Z()},[H,Z]);Mt(()=>{oe&&se({value:G})},[G,se,oe]);const ft=ne=>{if(ue.disabled){ne.stopPropagation();return}N&&N(ne),S.onFocus&&S.onFocus(ne),X&&X.onFocus?X.onFocus(ne):Ae(!0)},Ue=ne=>{P&&P(ne),S.onBlur&&S.onBlur(ne),X&&X.onBlur?X.onBlur(ne):Ae(!1)},ze=(ne,...B)=>{if(!oe){const ot=ne.target||ie.current;if(ot==null)throw new Error(xt(1));se({value:ot.value})}S.onChange&&S.onChange(ne,...B),O&&O(ne,...B)};d.useEffect(()=>{se(ie.current)},[]);const Ge=ne=>{ie.current&&ne.currentTarget===ne.target&&ie.current.focus(),C&&C(ne)};let We=_,de=S;I&&We==="input"&&(D?de=f({type:void 0,minRows:D,maxRows:D},de):de=f({type:void 0,maxRows:b,minRows:w},de),We=Xp);const nt=ne=>{se(ne.animationName==="mui-auto-fill-cancel"?ie.current:{value:"x"})};d.useEffect(()=>{X&&X.setAdornedStart(!!J)},[X,J]);const $e=f({},o,{color:ue.color||"primary",disabled:ue.disabled,endAdornment:m,error:ue.error,focused:ue.focused,formControl:X,fullWidth:g,hiddenLabel:ue.hiddenLabel,multiline:I,size:ue.size,startAdornment:J,type:Pe}),ae=rh($e),Xe=j.root||c.Root||Jr,pt=L.root||u.root||{},rt=j.input||c.Input||Qr;return de=f({},de,(r=L.input)!=null?r:u.input),T.jsxs(d.Fragment,{children:[!v&&oh,T.jsxs(Xe,f({},pt,!fr(Xe)&&{ownerState:f({},$e,pt.ownerState)},{ref:n,onClick:Ge},pe,{className:V(ae.root,pt.className,l,k&&"MuiInputBase-readOnly"),children:[J,T.jsx(mi.Provider,{value:null,children:T.jsx(rt,f({ownerState:$e,"aria-invalid":ue.error,"aria-describedby":i,autoComplete:s,autoFocus:a,defaultValue:p,disabled:ue.disabled,id:x,onAnimationStart:nt,name:E,placeholder:R,readOnly:k,required:ue.required,rows:D,value:G,onKeyDown:M,onKeyUp:A,type:Pe},de,!fr(rt)&&{as:We,ownerState:f({},$e,de.ownerState)},{ref:Re,className:V(ae.input,de.className,k&&"MuiInputBase-readOnly"),onBlur:Ue,onChange:ze,onFocus:ft}))}),m,$?$(f({},ue,{startAdornment:J})):null]}))]})}),gi=ih;function sh(t){return fe("MuiInput",t)}const ah=f({},an,ce("MuiInput",["root","underline","input"])),bn=ah,lh=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],ch=t=>{const{classes:e,disableUnderline:n}=t,o=ge({root:["root",!n&&"underline"],input:["input"]},sh,e);return f({},e,o)},uh=W(Jr,{shouldForwardProp:t=>Ye(t)||t==="classes",name:"MuiInput",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[...Yr(t,e),!n.disableUnderline&&e.underline]}})(({theme:t,ownerState:e})=>{let r=t.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return t.vars&&(r=`rgba(${t.vars.palette.common.onBackgroundChannel} / ${t.vars.opacity.inputUnderline})`),f({position:"relative"},e.formControl&&{"label + &":{marginTop:16}},!e.disableUnderline&&{"&::after":{borderBottom:`2px solid ${(t.vars||t).palette[e.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${bn.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${bn.error}`]:{"&::before, &::after":{borderBottomColor:(t.vars||t).palette.error.main}},"&::before":{borderBottom:`1px solid ${r}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:t.transitions.create("border-bottom-color",{duration:t.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${bn.disabled}, .${bn.error}):before`]:{borderBottom:`2px solid ${(t.vars||t).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${r}`}},[`&.${bn.disabled}:before`]:{borderBottomStyle:"dotted"}})}),dh=W(Qr,{name:"MuiInput",slot:"Input",overridesResolver:Xr})({}),za=d.forwardRef(function(e,n){var r,o,i,s;const a=be({props:e,name:"MuiInput"}),{disableUnderline:l,components:c={},componentsProps:u,fullWidth:p=!1,inputComponent:h="input",multiline:v=!1,slotProps:m,slots:g={},type:x="text"}=a,_=U(a,lh),S=ch(a),b={root:{ownerState:{disableUnderline:l}}},w=m??u?Me(m??u,b):b,I=(r=(o=g.root)!=null?o:c.Root)!=null?r:uh,E=(i=(s=g.input)!=null?s:c.Input)!=null?i:dh;return T.jsx(gi,f({slots:{root:I,input:E},slotProps:w,fullWidth:p,inputComponent:h,multiline:v,ref:n,type:x},_,{classes:S}))});za.muiName="Input";const Wa=za;function fh(t){return fe("MuiFilledInput",t)}const ph=f({},an,ce("MuiFilledInput",["root","underline","input"])),Ct=ph,hh=["disableUnderline","components","componentsProps","fullWidth","hiddenLabel","inputComponent","multiline","slotProps","slots","type"],mh=t=>{const{classes:e,disableUnderline:n}=t,o=ge({root:["root",!n&&"underline"],input:["input"]},fh,e);return f({},e,o)},gh=W(Jr,{shouldForwardProp:t=>Ye(t)||t==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[...Yr(t,e),!n.disableUnderline&&e.underline]}})(({theme:t,ownerState:e})=>{var n;const r=t.palette.mode==="light",o=r?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",i=r?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",s=r?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",a=r?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return f({position:"relative",backgroundColor:t.vars?t.vars.palette.FilledInput.bg:i,borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),"&:hover":{backgroundColor:t.vars?t.vars.palette.FilledInput.hoverBg:s,"@media (hover: none)":{backgroundColor:t.vars?t.vars.palette.FilledInput.bg:i}},[`&.${Ct.focused}`]:{backgroundColor:t.vars?t.vars.palette.FilledInput.bg:i},[`&.${Ct.disabled}`]:{backgroundColor:t.vars?t.vars.palette.FilledInput.disabledBg:a}},!e.disableUnderline&&{"&::after":{borderBottom:`2px solid ${(n=(t.vars||t).palette[e.color||"primary"])==null?void 0:n.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Ct.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Ct.error}`]:{"&::before, &::after":{borderBottomColor:(t.vars||t).palette.error.main}},"&::before":{borderBottom:`1px solid ${t.vars?`rgba(${t.vars.palette.common.onBackgroundChannel} / ${t.vars.opacity.inputUnderline})`:o}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:t.transitions.create("border-bottom-color",{duration:t.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Ct.disabled}, .${Ct.error}):before`]:{borderBottom:`1px solid ${(t.vars||t).palette.text.primary}`},[`&.${Ct.disabled}:before`]:{borderBottomStyle:"dotted"}},e.startAdornment&&{paddingLeft:12},e.endAdornment&&{paddingRight:12},e.multiline&&f({padding:"25px 12px 8px"},e.size==="small"&&{paddingTop:21,paddingBottom:4},e.hiddenLabel&&{paddingTop:16,paddingBottom:17},e.hiddenLabel&&e.size==="small"&&{paddingTop:8,paddingBottom:9}))}),bh=W(Qr,{name:"MuiFilledInput",slot:"Input",overridesResolver:Xr})(({theme:t,ownerState:e})=>f({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!t.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:t.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:t.palette.mode==="light"?null:"#fff",caretColor:t.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},t.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[t.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},e.size==="small"&&{paddingTop:21,paddingBottom:4},e.hiddenLabel&&{paddingTop:16,paddingBottom:17},e.startAdornment&&{paddingLeft:0},e.endAdornment&&{paddingRight:0},e.hiddenLabel&&e.size==="small"&&{paddingTop:8,paddingBottom:9},e.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0})),ja=d.forwardRef(function(e,n){var r,o,i,s;const a=be({props:e,name:"MuiFilledInput"}),{components:l={},componentsProps:c,fullWidth:u=!1,inputComponent:p="input",multiline:h=!1,slotProps:v,slots:m={},type:g="text"}=a,x=U(a,hh),_=f({},a,{fullWidth:u,inputComponent:p,multiline:h,type:g}),S=mh(a),y={root:{ownerState:_},input:{ownerState:_}},b=v??c?Me(y,v??c):y,w=(r=(o=m.root)!=null?o:l.Root)!=null?r:gh,I=(i=(s=m.input)!=null?s:l.Input)!=null?i:bh;return T.jsx(gi,f({slots:{root:w,input:I},componentsProps:b,fullWidth:u,inputComponent:p,multiline:h,ref:n,type:g},x,{classes:S}))});ja.muiName="Input";const Ha=ja;var bs;const vh=["children","classes","className","label","notched"],yh=W("fieldset",{shouldForwardProp:Ye})({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),Eh=W("legend",{shouldForwardProp:Ye})(({ownerState:t,theme:e})=>f({float:"unset",width:"auto",overflow:"hidden"},!t.withLabel&&{padding:0,lineHeight:"11px",transition:e.transitions.create("width",{duration:150,easing:e.transitions.easing.easeOut})},t.withLabel&&f({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:e.transitions.create("max-width",{duration:50,easing:e.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},t.notched&&{maxWidth:"100%",transition:e.transitions.create("max-width",{duration:100,easing:e.transitions.easing.easeOut,delay:50})})));function _h(t){const{className:e,label:n,notched:r}=t,o=U(t,vh),i=n!=null&&n!=="",s=f({},t,{notched:r,withLabel:i});return T.jsx(yh,f({"aria-hidden":!0,className:e,ownerState:s},o,{children:T.jsx(Eh,{ownerState:s,children:i?T.jsx("span",{children:n}):bs||(bs=T.jsx("span",{className:"notranslate",children:"​"}))})}))}function xh(t){return fe("MuiOutlinedInput",t)}const wh=f({},an,ce("MuiOutlinedInput",["root","notchedOutline","input"])),ht=wh,Ih=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],Sh=t=>{const{classes:e}=t,r=ge({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},xh,e);return f({},e,r)},Ch=W(Jr,{shouldForwardProp:t=>Ye(t)||t==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:Yr})(({theme:t,ownerState:e})=>{const n=t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return f({position:"relative",borderRadius:(t.vars||t).shape.borderRadius,[`&:hover .${ht.notchedOutline}`]:{borderColor:(t.vars||t).palette.text.primary},"@media (hover: none)":{[`&:hover .${ht.notchedOutline}`]:{borderColor:t.vars?`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:n}},[`&.${ht.focused} .${ht.notchedOutline}`]:{borderColor:(t.vars||t).palette[e.color].main,borderWidth:2},[`&.${ht.error} .${ht.notchedOutline}`]:{borderColor:(t.vars||t).palette.error.main},[`&.${ht.disabled} .${ht.notchedOutline}`]:{borderColor:(t.vars||t).palette.action.disabled}},e.startAdornment&&{paddingLeft:14},e.endAdornment&&{paddingRight:14},e.multiline&&f({padding:"16.5px 14px"},e.size==="small"&&{padding:"8.5px 14px"}))}),Th=W(_h,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(t,e)=>e.notchedOutline})(({theme:t})=>{const e=t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:t.vars?`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:e}}),Rh=W(Qr,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:Xr})(({theme:t,ownerState:e})=>f({padding:"16.5px 14px"},!t.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:t.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:t.palette.mode==="light"?null:"#fff",caretColor:t.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},t.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[t.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},e.size==="small"&&{padding:"8.5px 14px"},e.multiline&&{padding:0},e.startAdornment&&{paddingLeft:0},e.endAdornment&&{paddingRight:0})),Va=d.forwardRef(function(e,n){var r,o,i,s,a;const l=be({props:e,name:"MuiOutlinedInput"}),{components:c={},fullWidth:u=!1,inputComponent:p="input",label:h,multiline:v=!1,notched:m,slots:g={},type:x="text"}=l,_=U(l,Ih),S=Sh(l),y=dn(),b=un({props:l,muiFormControl:y,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),w=f({},l,{color:b.color||"primary",disabled:b.disabled,error:b.error,focused:b.focused,formControl:y,fullWidth:u,hiddenLabel:b.hiddenLabel,multiline:v,size:b.size,type:x}),I=(r=(o=g.root)!=null?o:c.Root)!=null?r:Ch,E=(i=(s=g.input)!=null?s:c.Input)!=null?i:Rh;return T.jsx(gi,f({slots:{root:I,input:E},renderSuffix:P=>T.jsx(Th,{ownerState:w,className:S.notchedOutline,label:h!=null&&h!==""&&b.required?a||(a=T.jsxs(d.Fragment,{children:[h," ","*"]})):h,notched:typeof m<"u"?m:!!(P.startAdornment||P.filled||P.focused)}),fullWidth:u,inputComponent:p,multiline:v,ref:n,type:x},_,{classes:f({},S,{notchedOutline:null})}))});Va.muiName="Input";const Ka=Va;function kh(t){return fe("MuiFormLabel",t)}const Ph=ce("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),Cn=Ph,Oh=["children","className","color","component","disabled","error","filled","focused","required"],Ah=t=>{const{classes:e,color:n,focused:r,disabled:o,error:i,filled:s,required:a}=t,l={root:["root",`color${K(n)}`,o&&"disabled",i&&"error",s&&"filled",r&&"focused",a&&"required"],asterisk:["asterisk",i&&"error"]};return ge(l,kh,e)},$h=W("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:t},e)=>f({},e.root,t.color==="secondary"&&e.colorSecondary,t.filled&&e.filled)})(({theme:t,ownerState:e})=>f({color:(t.vars||t).palette.text.secondary},t.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${Cn.focused}`]:{color:(t.vars||t).palette[e.color].main},[`&.${Cn.disabled}`]:{color:(t.vars||t).palette.text.disabled},[`&.${Cn.error}`]:{color:(t.vars||t).palette.error.main}})),Mh=W("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(t,e)=>e.asterisk})(({theme:t})=>({[`&.${Cn.error}`]:{color:(t.vars||t).palette.error.main}})),Nh=d.forwardRef(function(e,n){const r=be({props:e,name:"MuiFormLabel"}),{children:o,className:i,component:s="label"}=r,a=U(r,Oh),l=dn(),c=un({props:r,muiFormControl:l,states:["color","required","focused","disabled","error","filled"]}),u=f({},r,{color:c.color||"primary",component:s,disabled:c.disabled,error:c.error,filled:c.filled,focused:c.focused,required:c.required}),p=Ah(u);return T.jsxs($h,f({as:s,ownerState:u,className:V(p.root,i),ref:n},a,{children:[o,c.required&&T.jsxs(Mh,{ownerState:u,"aria-hidden":!0,className:p.asterisk,children:[" ","*"]})]}))}),Lh=Nh;function Dh(t){return fe("MuiInputLabel",t)}ce("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const Fh=["disableAnimation","margin","shrink","variant","className"],Bh=t=>{const{classes:e,formControl:n,size:r,shrink:o,disableAnimation:i,variant:s,required:a}=t,l={root:["root",n&&"formControl",!i&&"animated",o&&"shrink",r&&r!=="normal"&&`size${K(r)}`,s],asterisk:[a&&"asterisk"]},c=ge(l,Dh,e);return f({},e,c)},Uh=W(Lh,{shouldForwardProp:t=>Ye(t)||t==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[{[`& .${Cn.asterisk}`]:e.asterisk},e.root,n.formControl&&e.formControl,n.size==="small"&&e.sizeSmall,n.shrink&&e.shrink,!n.disableAnimation&&e.animated,n.focused&&e.focused,e[n.variant]]}})(({theme:t,ownerState:e})=>f({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},e.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},e.size==="small"&&{transform:"translate(0, 17px) scale(1)"},e.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!e.disableAnimation&&{transition:t.transitions.create(["color","transform","max-width"],{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut})},e.variant==="filled"&&f({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},e.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},e.shrink&&f({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},e.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),e.variant==="outlined"&&f({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},e.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},e.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),zh=d.forwardRef(function(e,n){const r=be({name:"MuiInputLabel",props:e}),{disableAnimation:o=!1,shrink:i,className:s}=r,a=U(r,Fh),l=dn();let c=i;typeof c>"u"&&l&&(c=l.filled||l.focused||l.adornedStart);const u=un({props:r,muiFormControl:l,states:["size","variant","required","focused"]}),p=f({},r,{disableAnimation:o,formControl:l,shrink:c,size:u.size,variant:u.variant,required:u.required,focused:u.focused}),h=Bh(p);return T.jsx(Uh,f({"data-shrink":c,ownerState:p,ref:n,className:V(h.root,s)},a,{classes:h}))}),Wh=zh;function jh(t){return fe("MuiFormControl",t)}ce("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const Hh=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],Vh=t=>{const{classes:e,margin:n,fullWidth:r}=t,o={root:["root",n!=="none"&&`margin${K(n)}`,r&&"fullWidth"]};return ge(o,jh,e)},Kh=W("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:t},e)=>f({},e.root,e[`margin${K(t.margin)}`],t.fullWidth&&e.fullWidth)})(({ownerState:t})=>f({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},t.margin==="normal"&&{marginTop:16,marginBottom:8},t.margin==="dense"&&{marginTop:8,marginBottom:4},t.fullWidth&&{width:"100%"})),Gh=d.forwardRef(function(e,n){const r=be({props:e,name:"MuiFormControl"}),{children:o,className:i,color:s="primary",component:a="div",disabled:l=!1,error:c=!1,focused:u,fullWidth:p=!1,hiddenLabel:h=!1,margin:v="none",required:m=!1,size:g="medium",variant:x="outlined"}=r,_=U(r,Hh),S=f({},r,{color:s,component:a,disabled:l,error:c,fullWidth:p,hiddenLabel:h,margin:v,required:m,size:g,variant:x}),y=Vh(S),[b,w]=d.useState(()=>{let A=!1;return o&&d.Children.forEach(o,R=>{if(!mo(R,["Input","Select"]))return;const k=mo(R,["Select"])?R.props.input:R;k&&Zp(k.props)&&(A=!0)}),A}),[I,E]=d.useState(()=>{let A=!1;return o&&d.Children.forEach(o,R=>{mo(R,["Input","Select"])&&(pr(R.props,!0)||pr(R.props.inputProps,!0))&&(A=!0)}),A}),[P,O]=d.useState(!1);l&&P&&O(!1);const C=u!==void 0&&!l?u:P;let N;const M=d.useMemo(()=>({adornedStart:b,setAdornedStart:w,color:s,disabled:l,error:c,filled:I,focused:C,fullWidth:p,hiddenLabel:h,size:g,onBlur:()=>{O(!1)},onEmpty:()=>{E(!1)},onFilled:()=>{E(!0)},onFocus:()=>{O(!0)},registerEffect:N,required:m,variant:x}),[b,s,l,c,I,C,p,h,N,m,g,x]);return T.jsx(mi.Provider,{value:M,children:T.jsx(Kh,f({as:a,ownerState:S,className:V(y.root,i),ref:n},_,{children:o}))})}),qh=Gh;function Yh(t){return fe("MuiFormHelperText",t)}const Xh=ce("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),vs=Xh;var ys;const Jh=["children","className","component","disabled","error","filled","focused","margin","required","variant"],Qh=t=>{const{classes:e,contained:n,size:r,disabled:o,error:i,filled:s,focused:a,required:l}=t,c={root:["root",o&&"disabled",i&&"error",r&&`size${K(r)}`,n&&"contained",a&&"focused",s&&"filled",l&&"required"]};return ge(c,Yh,e)},Zh=W("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.size&&e[`size${K(n.size)}`],n.contained&&e.contained,n.filled&&e.filled]}})(({theme:t,ownerState:e})=>f({color:(t.vars||t).palette.text.secondary},t.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${vs.disabled}`]:{color:(t.vars||t).palette.text.disabled},[`&.${vs.error}`]:{color:(t.vars||t).palette.error.main}},e.size==="small"&&{marginTop:4},e.contained&&{marginLeft:14,marginRight:14})),em=d.forwardRef(function(e,n){const r=be({props:e,name:"MuiFormHelperText"}),{children:o,className:i,component:s="p"}=r,a=U(r,Jh),l=dn(),c=un({props:r,muiFormControl:l,states:["variant","size","disabled","error","filled","focused","required"]}),u=f({},r,{component:s,contained:c.variant==="filled"||c.variant==="outlined",variant:c.variant,size:c.size,disabled:c.disabled,error:c.error,filled:c.filled,focused:c.focused,required:c.required}),p=Qh(u);return T.jsx(Zh,f({as:s,ownerState:u,className:V(p.root,i),ref:n},a,{children:o===" "?ys||(ys=T.jsx("span",{className:"notranslate",children:"​"})):o}))}),tm=em;var ee={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=Symbol.for("react.element"),vi=Symbol.for("react.portal"),Zr=Symbol.for("react.fragment"),eo=Symbol.for("react.strict_mode"),to=Symbol.for("react.profiler"),no=Symbol.for("react.provider"),ro=Symbol.for("react.context"),nm=Symbol.for("react.server_context"),oo=Symbol.for("react.forward_ref"),io=Symbol.for("react.suspense"),so=Symbol.for("react.suspense_list"),ao=Symbol.for("react.memo"),lo=Symbol.for("react.lazy"),rm=Symbol.for("react.offscreen"),Ga;Ga=Symbol.for("react.module.reference");function Ke(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case bi:switch(t=t.type,t){case Zr:case to:case eo:case io:case so:return t;default:switch(t=t&&t.$$typeof,t){case nm:case ro:case oo:case lo:case ao:case no:return t;default:return e}}case vi:return e}}}ee.ContextConsumer=ro;ee.ContextProvider=no;ee.Element=bi;ee.ForwardRef=oo;ee.Fragment=Zr;ee.Lazy=lo;ee.Memo=ao;ee.Portal=vi;ee.Profiler=to;ee.StrictMode=eo;ee.Suspense=io;ee.SuspenseList=so;ee.isAsyncMode=function(){return!1};ee.isConcurrentMode=function(){return!1};ee.isContextConsumer=function(t){return Ke(t)===ro};ee.isContextProvider=function(t){return Ke(t)===no};ee.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===bi};ee.isForwardRef=function(t){return Ke(t)===oo};ee.isFragment=function(t){return Ke(t)===Zr};ee.isLazy=function(t){return Ke(t)===lo};ee.isMemo=function(t){return Ke(t)===ao};ee.isPortal=function(t){return Ke(t)===vi};ee.isProfiler=function(t){return Ke(t)===to};ee.isStrictMode=function(t){return Ke(t)===eo};ee.isSuspense=function(t){return Ke(t)===io};ee.isSuspenseList=function(t){return Ke(t)===so};ee.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Zr||t===to||t===eo||t===io||t===so||t===rm||typeof t=="object"&&t!==null&&(t.$$typeof===lo||t.$$typeof===ao||t.$$typeof===no||t.$$typeof===ro||t.$$typeof===oo||t.$$typeof===Ga||t.getModuleId!==void 0)};ee.typeOf=Ke;const om=d.createContext({}),im=om;function sm(t){return fe("MuiList",t)}ce("MuiList",["root","padding","dense","subheader"]);const am=["children","className","component","dense","disablePadding","subheader"],lm=t=>{const{classes:e,disablePadding:n,dense:r,subheader:o}=t;return ge({root:["root",!n&&"padding",r&&"dense",o&&"subheader"]},sm,e)},cm=W("ul",{name:"MuiList",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.disablePadding&&e.padding,n.dense&&e.dense,n.subheader&&e.subheader]}})(({ownerState:t})=>f({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})),um=d.forwardRef(function(e,n){const r=be({props:e,name:"MuiList"}),{children:o,className:i,component:s="ul",dense:a=!1,disablePadding:l=!1,subheader:c}=r,u=U(r,am),p=d.useMemo(()=>({dense:a}),[a]),h=f({},r,{component:s,dense:a,disablePadding:l}),v=lm(h);return T.jsx(im.Provider,{value:p,children:T.jsxs(cm,f({as:s,className:V(v.root,i),ref:n,ownerState:h},u,{children:[c,o]}))})}),dm=um,fm=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function yo(t,e,n){return t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:n?null:t.firstChild}function Es(t,e,n){return t===e?n?t.firstChild:t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:n?null:t.lastChild}function qa(t,e){if(e===void 0)return!0;let n=t.innerText;return n===void 0&&(n=t.textContent),n=n.trim().toLowerCase(),n.length===0?!1:e.repeating?n[0]===e.keys[0]:n.indexOf(e.keys.join(""))===0}function vn(t,e,n,r,o,i){let s=!1,a=o(t,e,e?n:!1);for(;a;){if(a===t.firstChild){if(s)return!1;s=!0}const l=r?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!qa(a,i)||l)a=o(t,a,n);else return a.focus(),!0}return!1}const pm=d.forwardRef(function(e,n){const{actions:r,autoFocus:o=!1,autoFocusItem:i=!1,children:s,className:a,disabledItemsFocusable:l=!1,disableListWrap:c=!1,onKeyDown:u,variant:p="selectedMenu"}=e,h=U(e,fm),v=d.useRef(null),m=d.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Mt(()=>{o&&v.current.focus()},[o]),d.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(y,b)=>{const w=!v.current.style.width;if(y.clientHeight<v.current.clientHeight&&w){const I=`${Sa(Fe(y))}px`;v.current.style[b.direction==="rtl"?"paddingLeft":"paddingRight"]=I,v.current.style.width=`calc(100% + ${I})`}return v.current}}),[]);const g=y=>{const b=v.current,w=y.key,I=Fe(b).activeElement;if(w==="ArrowDown")y.preventDefault(),vn(b,I,c,l,yo);else if(w==="ArrowUp")y.preventDefault(),vn(b,I,c,l,Es);else if(w==="Home")y.preventDefault(),vn(b,null,c,l,yo);else if(w==="End")y.preventDefault(),vn(b,null,c,l,Es);else if(w.length===1){const E=m.current,P=w.toLowerCase(),O=performance.now();E.keys.length>0&&(O-E.lastTime>500?(E.keys=[],E.repeating=!0,E.previousKeyMatched=!0):E.repeating&&P!==E.keys[0]&&(E.repeating=!1)),E.lastTime=O,E.keys.push(P);const C=I&&!E.repeating&&qa(I,E);E.previousKeyMatched&&(C||vn(b,I,!1,l,yo,E))?y.preventDefault():E.previousKeyMatched=!1}u&&u(y)},x=ke(v,n);let _=-1;d.Children.forEach(s,(y,b)=>{if(!d.isValidElement(y)){_===b&&(_+=1,_>=s.length&&(_=-1));return}y.props.disabled||(p==="selectedMenu"&&y.props.selected||_===-1)&&(_=b),_===b&&(y.props.disabled||y.props.muiSkipListHighlight||y.type.muiSkipListHighlight)&&(_+=1,_>=s.length&&(_=-1))});const S=d.Children.map(s,(y,b)=>{if(b===_){const w={};return i&&(w.autoFocus=!0),y.props.tabIndex===void 0&&p==="selectedMenu"&&(w.tabIndex=0),d.cloneElement(y,w)}return y});return T.jsx(dm,f({role:"menu",ref:x,className:a,onKeyDown:g,tabIndex:o?0:-1},h,{children:S}))}),hm=pm,Ya=t=>t.scrollTop;function hr(t,e){var n,r;const{timeout:o,easing:i,style:s={}}=t;return{duration:(n=s.transitionDuration)!=null?n:typeof o=="number"?o:o[e.mode]||0,easing:(r=s.transitionTimingFunction)!=null?r:typeof i=="object"?i[e.mode]:i,delay:s.transitionDelay}}const mm=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Fo(t){return`scale(${t}, ${t**2})`}const gm={entering:{opacity:1,transform:Fo(1)},entered:{opacity:1,transform:"none"}},Eo=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Xa=d.forwardRef(function(e,n){const{addEndListener:r,appear:o=!0,children:i,easing:s,in:a,onEnter:l,onEntered:c,onEntering:u,onExit:p,onExited:h,onExiting:v,style:m,timeout:g="auto",TransitionComponent:x=Da}=e,_=U(e,mm),S=wa(),y=d.useRef(),b=ui(),w=d.useRef(null),I=ke(w,i.ref,n),E=k=>$=>{if(k){const D=w.current;$===void 0?k(D):k(D,$)}},P=E(u),O=E((k,$)=>{Ya(k);const{duration:D,delay:L,easing:j}=hr({style:m,timeout:g,easing:s},{mode:"enter"});let J;g==="auto"?(J=b.transitions.getAutoHeightDuration(k.clientHeight),y.current=J):J=D,k.style.transition=[b.transitions.create("opacity",{duration:J,delay:L}),b.transitions.create("transform",{duration:Eo?J:J*.666,delay:L,easing:j})].join(","),l&&l(k,$)}),C=E(c),N=E(v),M=E(k=>{const{duration:$,delay:D,easing:L}=hr({style:m,timeout:g,easing:s},{mode:"exit"});let j;g==="auto"?(j=b.transitions.getAutoHeightDuration(k.clientHeight),y.current=j):j=$,k.style.transition=[b.transitions.create("opacity",{duration:j,delay:D}),b.transitions.create("transform",{duration:Eo?j:j*.666,delay:Eo?D:D||j*.333,easing:L})].join(","),k.style.opacity=0,k.style.transform=Fo(.75),p&&p(k)}),A=E(h),R=k=>{g==="auto"&&S.start(y.current||0,k),r&&r(w.current,k)};return T.jsx(x,f({appear:o,in:a,nodeRef:w,onEnter:O,onEntered:C,onEntering:P,onExit:M,onExited:A,onExiting:N,addEndListener:R,timeout:g==="auto"?null:g},_,{children:(k,$)=>d.cloneElement(i,f({style:f({opacity:0,transform:Fo(.75),visibility:k==="exited"&&!a?"hidden":void 0},gm[k],m,i.props.style),ref:I},$))}))});Xa.muiSupportAuto=!0;const bm=Xa,vm=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],ym={entering:{opacity:1},entered:{opacity:1}},Em=d.forwardRef(function(e,n){const r=ui(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:s=!0,children:a,easing:l,in:c,onEnter:u,onEntered:p,onEntering:h,onExit:v,onExited:m,onExiting:g,style:x,timeout:_=o,TransitionComponent:S=Da}=e,y=U(e,vm),b=d.useRef(null),w=ke(b,a.ref,n),I=R=>k=>{if(R){const $=b.current;k===void 0?R($):R($,k)}},E=I(h),P=I((R,k)=>{Ya(R);const $=hr({style:x,timeout:_,easing:l},{mode:"enter"});R.style.webkitTransition=r.transitions.create("opacity",$),R.style.transition=r.transitions.create("opacity",$),u&&u(R,k)}),O=I(p),C=I(g),N=I(R=>{const k=hr({style:x,timeout:_,easing:l},{mode:"exit"});R.style.webkitTransition=r.transitions.create("opacity",k),R.style.transition=r.transitions.create("opacity",k),v&&v(R)}),M=I(m),A=R=>{i&&i(b.current,R)};return T.jsx(S,f({appear:s,in:c,nodeRef:b,onEnter:P,onEntered:O,onEntering:E,onExit:N,onExited:M,onExiting:C,addEndListener:A,timeout:_},y,{children:(R,k)=>d.cloneElement(a,f({style:f({opacity:0,visibility:R==="exited"&&!c?"hidden":void 0},ym[R],x,a.props.style),ref:w},k))}))}),_m=Em;function xm(t){return fe("MuiBackdrop",t)}ce("MuiBackdrop",["root","invisible"]);const wm=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Im=t=>{const{classes:e,invisible:n}=t;return ge({root:["root",n&&"invisible"]},xm,e)},Sm=W("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.invisible&&e.invisible]}})(({ownerState:t})=>f({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},t.invisible&&{backgroundColor:"transparent"})),Cm=d.forwardRef(function(e,n){var r,o,i;const s=be({props:e,name:"MuiBackdrop"}),{children:a,className:l,component:c="div",components:u={},componentsProps:p={},invisible:h=!1,open:v,slotProps:m={},slots:g={},TransitionComponent:x=_m,transitionDuration:_}=s,S=U(s,wm),y=f({},s,{component:c,invisible:h}),b=Im(y),w=(r=m.root)!=null?r:p.root;return T.jsx(x,f({in:v,timeout:_},S,{children:T.jsx(Sm,f({"aria-hidden":!0},w,{as:(o=(i=g.root)!=null?i:u.Root)!=null?o:c,className:V(b.root,l,w==null?void 0:w.className),ownerState:f({},y,w==null?void 0:w.ownerState),classes:b,ref:n,children:a}))}))}),Tm=Cm;function Rm(t){return fe("MuiModal",t)}ce("MuiModal",["root","hidden","backdrop"]);const km=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Pm=t=>{const{open:e,exited:n,classes:r}=t;return ge({root:["root",!e&&n&&"hidden"],backdrop:["backdrop"]},Rm,r)},Om=W("div",{name:"MuiModal",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.open&&n.exited&&e.hidden]}})(({theme:t,ownerState:e})=>f({position:"fixed",zIndex:(t.vars||t).zIndex.modal,right:0,bottom:0,top:0,left:0},!e.open&&e.exited&&{visibility:"hidden"})),Am=W(Tm,{name:"MuiModal",slot:"Backdrop",overridesResolver:(t,e)=>e.backdrop})({zIndex:-1}),$m=d.forwardRef(function(e,n){var r,o,i,s,a,l;const c=be({name:"MuiModal",props:e}),{BackdropComponent:u=Am,BackdropProps:p,className:h,closeAfterTransition:v=!1,children:m,container:g,component:x,components:_={},componentsProps:S={},disableAutoFocus:y=!1,disableEnforceFocus:b=!1,disableEscapeKeyDown:w=!1,disablePortal:I=!1,disableRestoreFocus:E=!1,disableScrollLock:P=!1,hideBackdrop:O=!1,keepMounted:C=!1,onBackdropClick:N,open:M,slotProps:A,slots:R}=c,k=U(c,km),$=f({},c,{closeAfterTransition:v,disableAutoFocus:y,disableEnforceFocus:b,disableEscapeKeyDown:w,disablePortal:I,disableRestoreFocus:E,disableScrollLock:P,hideBackdrop:O,keepMounted:C}),{getRootProps:D,getBackdropProps:L,getTransitionProps:j,portalRef:J,isTopModal:Pe,exited:ve,hasTransition:pe}=Gp(f({},$,{rootRef:n})),G=f({},$,{exited:ve}),oe=Pm(G),ie={};if(m.props.tabIndex===void 0&&(ie.tabIndex="-1"),pe){const{onEnter:H,onExited:Z}=j();ie.onEnter=H,ie.onExited=Z}const Oe=(r=(o=R==null?void 0:R.root)!=null?o:_.Root)!=null?r:Om,Re=(i=(s=R==null?void 0:R.backdrop)!=null?s:_.Backdrop)!=null?i:u,ye=(a=A==null?void 0:A.root)!=null?a:S.root,Ae=(l=A==null?void 0:A.backdrop)!=null?l:S.backdrop,X=sn({elementType:Oe,externalSlotProps:ye,externalForwardedProps:k,getSlotProps:D,additionalProps:{ref:n,as:x},ownerState:G,className:V(h,ye==null?void 0:ye.className,oe==null?void 0:oe.root,!G.open&&G.exited&&(oe==null?void 0:oe.hidden))}),ue=sn({elementType:Re,externalSlotProps:Ae,additionalProps:p,getSlotProps:H=>L(f({},H,{onClick:Z=>{N&&N(Z),H!=null&&H.onClick&&H.onClick(Z)}})),className:V(Ae==null?void 0:Ae.className,p==null?void 0:p.className,oe==null?void 0:oe.backdrop),ownerState:G});return!C&&!M&&(!pe||ve)?null:T.jsx(Fp,{ref:J,container:g,disablePortal:I,children:T.jsxs(Oe,f({},X,{children:[!O&&u?T.jsx(Re,f({},ue)):null,T.jsx(Lp,{disableEnforceFocus:b,disableAutoFocus:y,disableRestoreFocus:E,isEnabled:Pe,open:M,children:d.cloneElement(m,ie)})]}))})}),Mm=$m;function Nm(t){return fe("MuiPaper",t)}ce("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Lm=["className","component","elevation","square","variant"],Dm=t=>{const{square:e,elevation:n,variant:r,classes:o}=t,i={root:["root",r,!e&&"rounded",r==="elevation"&&`elevation${n}`]};return ge(i,Nm,o)},Fm=W("div",{name:"MuiPaper",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],!n.square&&e.rounded,n.variant==="elevation"&&e[`elevation${n.elevation}`]]}})(({theme:t,ownerState:e})=>{var n;return f({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow")},!e.square&&{borderRadius:t.shape.borderRadius},e.variant==="outlined"&&{border:`1px solid ${(t.vars||t).palette.divider}`},e.variant==="elevation"&&f({boxShadow:(t.vars||t).shadows[e.elevation]},!t.vars&&t.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Pt("#fff",is(e.elevation))}, ${Pt("#fff",is(e.elevation))})`},t.vars&&{backgroundImage:(n=t.vars.overlays)==null?void 0:n[e.elevation]}))}),Bm=d.forwardRef(function(e,n){const r=be({props:e,name:"MuiPaper"}),{className:o,component:i="div",elevation:s=1,square:a=!1,variant:l="elevation"}=r,c=U(r,Lm),u=f({},r,{component:i,elevation:s,square:a,variant:l}),p=Dm(u);return T.jsx(Fm,f({as:i,ownerState:u,className:V(p.root,o),ref:n},c))}),Um=Bm;function zm(t){return fe("MuiPopover",t)}ce("MuiPopover",["root","paper"]);const Wm=["onEntering"],jm=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Hm=["slotProps"];function _s(t,e){let n=0;return typeof e=="number"?n=e:e==="center"?n=t.height/2:e==="bottom"&&(n=t.height),n}function xs(t,e){let n=0;return typeof e=="number"?n=e:e==="center"?n=t.width/2:e==="right"&&(n=t.width),n}function ws(t){return[t.horizontal,t.vertical].map(e=>typeof e=="number"?`${e}px`:e).join(" ")}function _o(t){return typeof t=="function"?t():t}const Vm=t=>{const{classes:e}=t;return ge({root:["root"],paper:["paper"]},zm,e)},Km=W(Mm,{name:"MuiPopover",slot:"Root",overridesResolver:(t,e)=>e.root})({}),Ja=W(Um,{name:"MuiPopover",slot:"Paper",overridesResolver:(t,e)=>e.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Gm=d.forwardRef(function(e,n){var r,o,i;const s=be({props:e,name:"MuiPopover"}),{action:a,anchorEl:l,anchorOrigin:c={vertical:"top",horizontal:"left"},anchorPosition:u,anchorReference:p="anchorEl",children:h,className:v,container:m,elevation:g=8,marginThreshold:x=16,open:_,PaperProps:S={},slots:y,slotProps:b,transformOrigin:w={vertical:"top",horizontal:"left"},TransitionComponent:I=bm,transitionDuration:E="auto",TransitionProps:{onEntering:P}={},disableScrollLock:O=!1}=s,C=U(s.TransitionProps,Wm),N=U(s,jm),M=(r=b==null?void 0:b.paper)!=null?r:S,A=d.useRef(),R=ke(A,M.ref),k=f({},s,{anchorOrigin:c,anchorReference:p,elevation:g,marginThreshold:x,externalPaperSlotProps:M,transformOrigin:w,TransitionComponent:I,transitionDuration:E,TransitionProps:C}),$=Vm(k),D=d.useCallback(()=>{if(p==="anchorPosition")return u;const H=_o(l),se=(H&&H.nodeType===1?H:Fe(A.current).body).getBoundingClientRect();return{top:se.top+_s(se,c.vertical),left:se.left+xs(se,c.horizontal)}},[l,c.horizontal,c.vertical,u,p]),L=d.useCallback(H=>({vertical:_s(H,w.vertical),horizontal:xs(H,w.horizontal)}),[w.horizontal,w.vertical]),j=d.useCallback(H=>{const Z={width:H.offsetWidth,height:H.offsetHeight},se=L(Z);if(p==="none")return{top:null,left:null,transformOrigin:ws(se)};const ft=D();let Ue=ft.top-se.vertical,ze=ft.left-se.horizontal;const Ge=Ue+Z.height,We=ze+Z.width,de=$t(_o(l)),nt=de.innerHeight-x,$e=de.innerWidth-x;if(x!==null&&Ue<x){const ae=Ue-x;Ue-=ae,se.vertical+=ae}else if(x!==null&&Ge>nt){const ae=Ge-nt;Ue-=ae,se.vertical+=ae}if(x!==null&&ze<x){const ae=ze-x;ze-=ae,se.horizontal+=ae}else if(We>$e){const ae=We-$e;ze-=ae,se.horizontal+=ae}return{top:`${Math.round(Ue)}px`,left:`${Math.round(ze)}px`,transformOrigin:ws(se)}},[l,p,D,L,x]),[J,Pe]=d.useState(_),ve=d.useCallback(()=>{const H=A.current;if(!H)return;const Z=j(H);Z.top!==null&&(H.style.top=Z.top),Z.left!==null&&(H.style.left=Z.left),H.style.transformOrigin=Z.transformOrigin,Pe(!0)},[j]);d.useEffect(()=>(O&&window.addEventListener("scroll",ve),()=>window.removeEventListener("scroll",ve)),[l,O,ve]);const pe=(H,Z)=>{P&&P(H,Z),ve()},G=()=>{Pe(!1)};d.useEffect(()=>{_&&ve()}),d.useImperativeHandle(a,()=>_?{updatePosition:()=>{ve()}}:null,[_,ve]),d.useEffect(()=>{if(!_)return;const H=_a(()=>{ve()}),Z=$t(l);return Z.addEventListener("resize",H),()=>{H.clear(),Z.removeEventListener("resize",H)}},[l,_,ve]);let oe=E;E==="auto"&&!I.muiSupportAuto&&(oe=void 0);const ie=m||(l?Fe(_o(l)).body:void 0),Oe=(o=y==null?void 0:y.root)!=null?o:Km,Re=(i=y==null?void 0:y.paper)!=null?i:Ja,ye=sn({elementType:Re,externalSlotProps:f({},M,{style:J?M.style:f({},M.style,{opacity:0})}),additionalProps:{elevation:g,ref:R},ownerState:k,className:V($.paper,M==null?void 0:M.className)}),Ae=sn({elementType:Oe,externalSlotProps:(b==null?void 0:b.root)||{},externalForwardedProps:N,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:ie,open:_},ownerState:k,className:V($.root,v)}),{slotProps:X}=Ae,ue=U(Ae,Hm);return T.jsx(Oe,f({},ue,!fr(Oe)&&{slotProps:X,disableScrollLock:O},{children:T.jsx(I,f({appear:!0,in:_,onEntering:pe,onExited:G,timeout:oe},C,{children:T.jsx(Re,f({},ye,{children:h}))}))}))}),qm=Gm;function Ym(t){return fe("MuiMenu",t)}ce("MuiMenu",["root","paper","list"]);const Xm=["onEntering"],Jm=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],Qm={vertical:"top",horizontal:"right"},Zm={vertical:"top",horizontal:"left"},eg=t=>{const{classes:e}=t;return ge({root:["root"],paper:["paper"],list:["list"]},Ym,e)},tg=W(qm,{shouldForwardProp:t=>Ye(t)||t==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(t,e)=>e.root})({}),ng=W(Ja,{name:"MuiMenu",slot:"Paper",overridesResolver:(t,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),rg=W(hm,{name:"MuiMenu",slot:"List",overridesResolver:(t,e)=>e.list})({outline:0}),og=d.forwardRef(function(e,n){var r,o;const i=be({props:e,name:"MuiMenu"}),{autoFocus:s=!0,children:a,className:l,disableAutoFocusItem:c=!1,MenuListProps:u={},onClose:p,open:h,PaperProps:v={},PopoverClasses:m,transitionDuration:g="auto",TransitionProps:{onEntering:x}={},variant:_="selectedMenu",slots:S={},slotProps:y={}}=i,b=U(i.TransitionProps,Xm),w=U(i,Jm),I=ui(),E=I.direction==="rtl",P=f({},i,{autoFocus:s,disableAutoFocusItem:c,MenuListProps:u,onEntering:x,PaperProps:v,transitionDuration:g,TransitionProps:b,variant:_}),O=eg(P),C=s&&!c&&h,N=d.useRef(null),M=(j,J)=>{N.current&&N.current.adjustStyleForScrollbar(j,I),x&&x(j,J)},A=j=>{j.key==="Tab"&&(j.preventDefault(),p&&p(j,"tabKeyDown"))};let R=-1;d.Children.map(a,(j,J)=>{d.isValidElement(j)&&(j.props.disabled||(_==="selectedMenu"&&j.props.selected||R===-1)&&(R=J))});const k=(r=S.paper)!=null?r:ng,$=(o=y.paper)!=null?o:v,D=sn({elementType:S.root,externalSlotProps:y.root,ownerState:P,className:[O.root,l]}),L=sn({elementType:k,externalSlotProps:$,ownerState:P,className:O.paper});return T.jsx(tg,f({onClose:p,anchorOrigin:{vertical:"bottom",horizontal:E?"right":"left"},transformOrigin:E?Qm:Zm,slots:{paper:k,root:S.root},slotProps:{root:D,paper:L},open:h,ref:n,transitionDuration:g,TransitionProps:f({onEntering:M},b),ownerState:P},w,{classes:m,children:T.jsx(rg,f({onKeyDown:A,actions:N,autoFocus:s&&(R===-1||c),autoFocusItem:C,variant:_},u,{className:V(O.list,u.className),children:a}))}))}),ig=og;function sg(t){return fe("MuiNativeSelect",t)}const ag=ce("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),yi=ag,lg=["className","disabled","error","IconComponent","inputRef","variant"],cg=t=>{const{classes:e,variant:n,disabled:r,multiple:o,open:i,error:s}=t,a={select:["select",n,r&&"disabled",o&&"multiple",s&&"error"],icon:["icon",`icon${K(n)}`,i&&"iconOpen",r&&"disabled"]};return ge(a,sg,e)},Qa=({ownerState:t,theme:e})=>f({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":f({},e.vars?{backgroundColor:`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:e.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"},[`&.${yi.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(e.vars||e).palette.background.paper},"&&&":{paddingRight:24,minWidth:16}},t.variant==="filled"&&{"&&&":{paddingRight:32}},t.variant==="outlined"&&{borderRadius:(e.vars||e).shape.borderRadius,"&:focus":{borderRadius:(e.vars||e).shape.borderRadius},"&&&":{paddingRight:32}}),ug=W("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:Ye,overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.select,e[n.variant],n.error&&e.error,{[`&.${yi.multiple}`]:e.multiple}]}})(Qa),Za=({ownerState:t,theme:e})=>f({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(e.vars||e).palette.action.active,[`&.${yi.disabled}`]:{color:(e.vars||e).palette.action.disabled}},t.open&&{transform:"rotate(180deg)"},t.variant==="filled"&&{right:7},t.variant==="outlined"&&{right:7}),dg=W("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.icon,n.variant&&e[`icon${K(n.variant)}`],n.open&&e.iconOpen]}})(Za),fg=d.forwardRef(function(e,n){const{className:r,disabled:o,error:i,IconComponent:s,inputRef:a,variant:l="standard"}=e,c=U(e,lg),u=f({},e,{disabled:o,variant:l,error:i}),p=cg(u);return T.jsxs(d.Fragment,{children:[T.jsx(ug,f({ownerState:u,className:V(p.select,r),disabled:o,ref:a||n},c)),e.multiple?null:T.jsx(dg,{as:s,ownerState:u,className:p.icon})]})}),pg=fg;function hg(t){return fe("MuiSelect",t)}const yn=ce("MuiSelect",["root","select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]);var Is;const mg=["aria-describedby","aria-label","autoFocus","autoWidth","children","className","defaultOpen","defaultValue","disabled","displayEmpty","error","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"],gg=W("div",{name:"MuiSelect",slot:"Select",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[{[`&.${yn.select}`]:e.select},{[`&.${yn.select}`]:e[n.variant]},{[`&.${yn.error}`]:e.error},{[`&.${yn.multiple}`]:e.multiple}]}})(Qa,{[`&.${yn.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),bg=W("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.icon,n.variant&&e[`icon${K(n.variant)}`],n.open&&e.iconOpen]}})(Za),vg=W("input",{shouldForwardProp:t=>yf(t)&&t!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(t,e)=>e.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function Ss(t,e){return typeof e=="object"&&e!==null?t===e:String(t)===String(e)}function yg(t){return t==null||typeof t=="string"&&!t.trim()}const Eg=t=>{const{classes:e,variant:n,disabled:r,multiple:o,open:i,error:s}=t,a={select:["select",n,r&&"disabled",o&&"multiple",s&&"error"],icon:["icon",`icon${K(n)}`,i&&"iconOpen",r&&"disabled"],nativeInput:["nativeInput"]};return ge(a,hg,e)},_g=d.forwardRef(function(e,n){var r;const{"aria-describedby":o,"aria-label":i,autoFocus:s,autoWidth:a,children:l,className:c,defaultOpen:u,defaultValue:p,disabled:h,displayEmpty:v,error:m=!1,IconComponent:g,inputRef:x,labelId:_,MenuProps:S={},multiple:y,name:b,onBlur:w,onChange:I,onClose:E,onFocus:P,onOpen:O,open:C,readOnly:N,renderValue:M,SelectDisplayProps:A={},tabIndex:R,value:k,variant:$="standard"}=e,D=U(e,mg),[L,j]=Hi({controlled:k,default:p,name:"Select"}),[J,Pe]=Hi({controlled:C,default:u,name:"Select"}),ve=d.useRef(null),pe=d.useRef(null),[G,oe]=d.useState(null),{current:ie}=d.useRef(C!=null),[Oe,Re]=d.useState(),ye=ke(n,x),Ae=d.useCallback(F=>{pe.current=F,F&&oe(F)},[]),X=G==null?void 0:G.parentNode;d.useImperativeHandle(ye,()=>({focus:()=>{pe.current.focus()},node:ve.current,value:L}),[L]),d.useEffect(()=>{u&&J&&G&&!ie&&(Re(a?null:X.clientWidth),pe.current.focus())},[G,a]),d.useEffect(()=>{s&&pe.current.focus()},[s]),d.useEffect(()=>{if(!_)return;const F=Fe(pe.current).getElementById(_);if(F){const re=()=>{getSelection().isCollapsed&&pe.current.focus()};return F.addEventListener("click",re),()=>{F.removeEventListener("click",re)}}},[_]);const ue=(F,re)=>{F?O&&O(re):E&&E(re),ie||(Re(a?null:X.clientWidth),Pe(F))},H=F=>{F.button===0&&(F.preventDefault(),pe.current.focus(),ue(!0,F))},Z=F=>{ue(!1,F)},se=d.Children.toArray(l),ft=F=>{const re=se.find(we=>we.props.value===F.target.value);re!==void 0&&(j(re.props.value),I&&I(F,re))},Ue=F=>re=>{let we;if(re.currentTarget.hasAttribute("tabindex")){if(y){we=Array.isArray(L)?L.slice():[];const Wt=L.indexOf(F.props.value);Wt===-1?we.push(F.props.value):we.splice(Wt,1)}else we=F.props.value;if(F.props.onClick&&F.props.onClick(re),L!==we&&(j(we),I)){const Wt=re.nativeEvent||re,Oi=new Wt.constructor(Wt.type,Wt);Object.defineProperty(Oi,"target",{writable:!0,value:{value:we,name:b}}),I(Oi,F)}y||ue(!1,re)}},ze=F=>{N||[" ","ArrowUp","ArrowDown","Enter"].indexOf(F.key)!==-1&&(F.preventDefault(),ue(!0,F))},Ge=G!==null&&J,We=F=>{!Ge&&w&&(Object.defineProperty(F,"target",{writable:!0,value:{value:L,name:b}}),w(F))};delete D["aria-invalid"];let de,nt;const $e=[];let ae=!1;(pr({value:L})||v)&&(M?de=M(L):ae=!0);const Xe=se.map(F=>{if(!d.isValidElement(F))return null;let re;if(y){if(!Array.isArray(L))throw new Error(xt(2));re=L.some(we=>Ss(we,F.props.value)),re&&ae&&$e.push(F.props.children)}else re=Ss(L,F.props.value),re&&ae&&(nt=F.props.children);return d.cloneElement(F,{"aria-selected":re?"true":"false",onClick:Ue(F),onKeyUp:we=>{we.key===" "&&we.preventDefault(),F.props.onKeyUp&&F.props.onKeyUp(we)},role:"option",selected:re,value:void 0,"data-value":F.props.value})});ae&&(y?$e.length===0?de=null:de=$e.reduce((F,re,we)=>(F.push(re),we<$e.length-1&&F.push(", "),F),[]):de=nt);let pt=Oe;!a&&ie&&G&&(pt=X.clientWidth);let rt;typeof R<"u"?rt=R:rt=h?null:0;const ne=A.id||(b?`mui-component-select-${b}`:void 0),B=f({},e,{variant:$,value:L,open:Ge,error:m}),ot=Eg(B),pn=f({},S.PaperProps,(r=S.slotProps)==null?void 0:r.paper),hn=xa();return T.jsxs(d.Fragment,{children:[T.jsx(gg,f({ref:Ae,tabIndex:rt,role:"combobox","aria-controls":hn,"aria-disabled":h?"true":void 0,"aria-expanded":Ge?"true":"false","aria-haspopup":"listbox","aria-label":i,"aria-labelledby":[_,ne].filter(Boolean).join(" ")||void 0,"aria-describedby":o,onKeyDown:ze,onMouseDown:h||N?null:H,onBlur:We,onFocus:P},A,{ownerState:B,className:V(A.className,ot.select,c),id:ne,children:yg(de)?Is||(Is=T.jsx("span",{className:"notranslate",children:"​"})):de})),T.jsx(vg,f({"aria-invalid":m,value:Array.isArray(L)?L.join(","):L,name:b,ref:ve,"aria-hidden":!0,onChange:ft,tabIndex:-1,disabled:h,className:ot.nativeInput,autoFocus:s,ownerState:B},D)),T.jsx(bg,{as:g,className:ot.icon,ownerState:B}),T.jsx(ig,f({id:`menu-${b||""}`,anchorEl:X,open:Ge,onClose:Z,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},S,{MenuListProps:f({"aria-labelledby":_,role:"listbox","aria-multiselectable":y?"true":void 0,disableListWrap:!0,id:hn},S.MenuListProps),slotProps:f({},S.slotProps,{paper:f({},pn,{style:f({minWidth:pt},pn!=null?pn.style:null)})}),children:Xe}))]})}),xg=_g;function wg(t){return fe("MuiSvgIcon",t)}ce("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Ig=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],Sg=t=>{const{color:e,fontSize:n,classes:r}=t,o={root:["root",e!=="inherit"&&`color${K(e)}`,`fontSize${K(n)}`]};return ge(o,wg,r)},Cg=W("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${K(n.color)}`],e[`fontSize${K(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,r,o,i,s,a,l,c,u,p,h,v,m;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=t.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(o=t.transitions)==null||(o=o.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((i=t.typography)==null||(s=i.pxToRem)==null?void 0:s.call(i,20))||"1.25rem",medium:((a=t.typography)==null||(l=a.pxToRem)==null?void 0:l.call(a,24))||"1.5rem",large:((c=t.typography)==null||(u=c.pxToRem)==null?void 0:u.call(c,35))||"2.1875rem"}[e.fontSize],color:(p=(h=(t.vars||t).palette)==null||(h=h[e.color])==null?void 0:h.main)!=null?p:{action:(v=(t.vars||t).palette)==null||(v=v.action)==null?void 0:v.active,disabled:(m=(t.vars||t).palette)==null||(m=m.action)==null?void 0:m.disabled,inherit:void 0}[e.color]}}),Bo=d.forwardRef(function(e,n){const r=be({props:e,name:"MuiSvgIcon"}),{children:o,className:i,color:s="inherit",component:a="svg",fontSize:l="medium",htmlColor:c,inheritViewBox:u=!1,titleAccess:p,viewBox:h="0 0 24 24"}=r,v=U(r,Ig),m=d.isValidElement(o)&&o.type==="svg",g=f({},r,{color:s,component:a,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:u,viewBox:h,hasSvgAsChild:m}),x={};u||(x.viewBox=h);const _=Sg(g);return T.jsxs(Cg,f({as:a,className:V(_.root,i),focusable:"false",color:c,"aria-hidden":p?void 0:!0,role:p?"img":void 0,ref:n},x,v,m&&o.props,{ownerState:g,children:[m?o.props.children:o,p?T.jsx("title",{children:p}):null]}))});Bo.muiName="SvgIcon";function Tg(t,e){function n(r,o){return T.jsx(Bo,f({"data-testid":`${e}Icon`,ref:o},r,{children:t}))}return n.muiName=Bo.muiName,d.memo(d.forwardRef(n))}const Rg=Tg(T.jsx("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown"),kg=["autoWidth","children","classes","className","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"],Pg=["root"],Og=t=>{const{classes:e}=t;return e},Ei={name:"MuiSelect",overridesResolver:(t,e)=>e.root,shouldForwardProp:t=>Ye(t)&&t!=="variant",slot:"Root"},Ag=W(Wa,Ei)(""),$g=W(Ka,Ei)(""),Mg=W(Ha,Ei)(""),el=d.forwardRef(function(e,n){const r=be({name:"MuiSelect",props:e}),{autoWidth:o=!1,children:i,classes:s={},className:a,defaultOpen:l=!1,displayEmpty:c=!1,IconComponent:u=Rg,id:p,input:h,inputProps:v,label:m,labelId:g,MenuProps:x,multiple:_=!1,native:S=!1,onClose:y,onOpen:b,open:w,renderValue:I,SelectDisplayProps:E,variant:P="outlined"}=r,O=U(r,kg),C=S?pg:xg,N=dn(),M=un({props:r,muiFormControl:N,states:["variant","error"]}),A=M.variant||P,R=f({},r,{variant:A,classes:s}),k=Og(R),$=U(k,Pg),D=h||{standard:T.jsx(Ag,{ownerState:R}),outlined:T.jsx($g,{label:m,ownerState:R}),filled:T.jsx(Mg,{ownerState:R})}[A],L=ke(n,D.ref);return T.jsx(d.Fragment,{children:d.cloneElement(D,f({inputComponent:C,inputProps:f({children:i,error:M.error,IconComponent:u,variant:A,type:void 0,multiple:_},S?{id:p}:{autoWidth:o,defaultOpen:l,displayEmpty:c,labelId:g,MenuProps:x,onClose:y,onOpen:b,open:w,renderValue:I,SelectDisplayProps:f({id:p},E)},v,{classes:v?Me($,v.classes):$},h?h.props.inputProps:{})},(_&&S||c)&&A==="outlined"?{notched:!0}:{},{ref:L,className:V(D.props.className,a,k.root)},!h&&{variant:A},O))})});el.muiName="Select";const Ng=el;function Lg(t){return fe("MuiTextField",t)}ce("MuiTextField",["root"]);const Dg=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],Fg={standard:Wa,filled:Ha,outlined:Ka},Bg=t=>{const{classes:e}=t;return ge({root:["root"]},Lg,e)},Ug=W(qh,{name:"MuiTextField",slot:"Root",overridesResolver:(t,e)=>e.root})({}),zg=d.forwardRef(function(e,n){const r=be({props:e,name:"MuiTextField"}),{autoComplete:o,autoFocus:i=!1,children:s,className:a,color:l="primary",defaultValue:c,disabled:u=!1,error:p=!1,FormHelperTextProps:h,fullWidth:v=!1,helperText:m,id:g,InputLabelProps:x,inputProps:_,InputProps:S,inputRef:y,label:b,maxRows:w,minRows:I,multiline:E=!1,name:P,onBlur:O,onChange:C,onFocus:N,placeholder:M,required:A=!1,rows:R,select:k=!1,SelectProps:$,type:D,value:L,variant:j="outlined"}=r,J=U(r,Dg),Pe=f({},r,{autoFocus:i,color:l,disabled:u,error:p,fullWidth:v,multiline:E,required:A,select:k,variant:j}),ve=Bg(Pe),pe={};j==="outlined"&&(x&&typeof x.shrink<"u"&&(pe.notched=x.shrink),pe.label=b),k&&((!$||!$.native)&&(pe.id=void 0),pe["aria-describedby"]=void 0);const G=xa(g),oe=m&&G?`${G}-helper-text`:void 0,ie=b&&G?`${G}-label`:void 0,Oe=Fg[j],Re=T.jsx(Oe,f({"aria-describedby":oe,autoComplete:o,autoFocus:i,defaultValue:c,fullWidth:v,multiline:E,name:P,rows:R,maxRows:w,minRows:I,type:D,value:L,id:G,inputRef:y,onBlur:O,onChange:C,onFocus:N,placeholder:M,inputProps:_},pe,S));return T.jsxs(Ug,f({className:V(ve.root,a),disabled:u,error:p,fullWidth:v,ref:n,required:A,color:l,variant:j,ownerState:Pe},J,{children:[b!=null&&b!==""&&T.jsx(Wh,f({htmlFor:G,id:ie},x,{children:b})),k?T.jsx(Ng,f({"aria-describedby":oe,id:G,labelId:ie,value:L,input:Re},$,{children:s})):Re,m&&T.jsx(tm,f({id:oe},h,{children:m}))]}))}),Wg=zg,Wy=Te(di)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;

  padding: 1.2rem;
  overflow-x: hidden;

  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    ${t=>t.theme.colors.accentColor} 92.19%
  );
`,jy=Te(di)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  border-radius: 8px;
  background: #151515;
  padding: 2.4rem;
  max-width: 300px;

  @media (min-width: 365px) {
    max-width: 335px;
    padding: 2.4rem;
  }

  @media (min-width: 768px) {
    padding: 4rem;
    max-width: 424px;
  }
`;Te(di)`
  width: 100%;
`;const Hy=Te(lp)`
  width: 100%;
  height: 4.9rem;
`,Vy=Te.div`
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }

  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
  background-color: ${t=>t.theme.colors.accentColor};
  font-size: 2.4rem;

  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${t=>t.theme.colors.btnHoverThemeColor};
  }
`,Ky=Te.span`
  color: ${t=>t.theme.colors.blackColor};
  font-family: ${Rn};
  font-size: 1.4rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,Gy=Te(hi)`
  color: ${t=>t.theme.colors.blackColor};
`,qy=Te(hi)`
  color: ${t=>t.theme.colors.whiteColor};
  font-family: ${Rn};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`,Yy=Te(Sp)`
  color: ${t=>t.theme.colors.blackColor};
`,Xy=Te.a`
  color: ${t=>t.theme.colors.whiteColorLowOp};
  font-family: ${Rn};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`,Jy=Te(Wg)`
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }

  input {
    border-radius: 0.4rem;
    color: ${t=>t.theme.colors.whiteColor};
    font-family: ${Rn};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
    /* border: 1px solid #bedbb0; */
    outline: 1px solid
      ${t=>t.error?t.theme.colors.errorColor:t.theme.colors.accentColor};
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

    &:focus-within {
      /* border: 1px solid transparent; */
      outline: none;
    }
  }

  label {
    color: ${t=>t.theme.colors.whiteColorLowOp};
    font-family: ${Rn};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
  }
`,Qy=Te.div`
  position: relative;
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }
`,Zy=Te.div`
  position: relative;
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }
`,eE=Te.span`
  position: absolute;
  top: 50%;
  right: 1.2rem;

  transform: translateY(-35%);
  font-size: 2rem;
  color: ${t=>t.theme.colors.whiteColorLowOp};

  &:hover {
    cursor: pointer;
  }
`,tE=Te.p`
  position: absolute;
  top: -2rem;
  right: 0;
  color: ${t=>t.theme.colors.errorColor};
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`,nE=Te.p`
  position: absolute;
  top: -0.4rem;
  right: 0;
  color: ${t=>t.theme.colors.errorColor};
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;var Cs={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},jg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const o=t[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=t[n++];e[r++]=String.fromCharCode((o&31)<<6|i&63)}else if(o>239&&o<365){const i=t[n++],s=t[n++],a=t[n++],l=((o&7)<<18|(i&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],s=t[n++];e[r++]=String.fromCharCode((o&15)<<12|(i&63)<<6|s&63)}}return e.join("")},nl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<t.length;o+=3){const i=t[o],s=o+1<t.length,a=s?t[o+1]:0,l=o+2<t.length,c=l?t[o+2]:0,u=i>>2,p=(i&3)<<4|a>>4;let h=(a&15)<<2|c>>6,v=c&63;l||(v=64,s||(h=64)),r.push(n[u],n[p],n[h],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<t.length;){const i=n[t.charAt(o++)],a=o<t.length?n[t.charAt(o)]:0;++o;const c=o<t.length?n[t.charAt(o)]:64;++o;const p=o<t.length?n[t.charAt(o)]:64;if(++o,i==null||a==null||c==null||p==null)throw new Hg;const h=i<<2|a>>4;if(r.push(h),c!==64){const v=a<<4&240|c>>2;if(r.push(v),p!==64){const m=c<<6&192|p;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vg=function(t){const e=tl(t);return nl.encodeByteArray(e,!0)},rl=function(t){return Vg(t).replace(/\./g,"")},ol=function(t){try{return nl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=()=>Kg().__FIREBASE_DEFAULTS__,qg=()=>{if(typeof process>"u"||typeof Cs>"u")return;const t=Cs.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ol(t[1]);return e&&JSON.parse(e)},_i=()=>{try{return Gg()||qg()||Yg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xg=t=>{var e,n;return(n=(e=_i())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},il=()=>{var t;return(t=_i())===null||t===void 0?void 0:t.config},sl=t=>{var e;return(e=_i())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Zg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tb(){const t=Ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nb(){try{return typeof indexedDB=="object"}catch{return!1}}function rb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var i;e(((i=o.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="FirebaseError";class wt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ob,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zn.prototype.create)}}class zn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,i=this.errors[e],s=i?ib(i,r):"Error",a=`${this.serviceName}: ${s} (${o}).`;return new wt(o,a,r)}}function ib(t,e){return t.replace(sb,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const sb=/\{\$([^}]+)}/g;function ab(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const i=t[o],s=e[o];if(Ts(i)&&Ts(s)){if(!mr(i,s))return!1}else if(i!==s)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function Ts(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _n(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,i]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(i)}}),e}function xn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lb(t,e){const n=new cb(t,e);return n.subscribe.bind(n)}class cb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ub(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=xo),o.error===void 0&&(o.error=xo),o.complete===void 0&&(o.complete=xo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ub(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){return t&&t._delegate?t._delegate:t}class ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(o)return null;throw i}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pb(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:o});r.resolve(i)}catch{}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&s.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(o,i);const s=this.instances.get(o);return s&&e(s,o),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fb(t){return t===kt?void 0:t}function pb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new db(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const mb={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},gb=te.INFO,bb={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},vb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),o=bb[e];if(o)console[o](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class al{constructor(e){this.name=e,this._logLevel=gb,this._logHandler=vb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const yb=(t,e)=>e.some(n=>t instanceof n);let Rs,ks;function Eb(){return Rs||(Rs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _b(){return ks||(ks=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ll=new WeakMap,Uo=new WeakMap,cl=new WeakMap,wo=new WeakMap,xi=new WeakMap;function xb(t){const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{n(Et(t.result)),o()},s=()=>{r(t.error),o()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&ll.set(n,t)}).catch(()=>{}),xi.set(e,t),e}function wb(t){if(Uo.has(t))return;const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{n(),o()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});Uo.set(t,e)}let zo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ib(t){zo=t(zo)}function Sb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Io(this),e,...n);return cl.set(r,e.sort?e.sort():[e]),Et(r)}:_b().includes(t)?function(...e){return t.apply(Io(this),e),Et(ll.get(this))}:function(...e){return Et(t.apply(Io(this),e))}}function Cb(t){return typeof t=="function"?Sb(t):(t instanceof IDBTransaction&&wb(t),yb(t,Eb())?new Proxy(t,zo):t)}function Et(t){if(t instanceof IDBRequest)return xb(t);if(wo.has(t))return wo.get(t);const e=Cb(t);return e!==t&&(wo.set(t,e),xi.set(e,t)),e}const Io=t=>xi.get(t);function Tb(t,e,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(t,e),a=Et(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Et(s.result),l.oldVersion,l.newVersion,Et(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),o&&l.addEventListener("versionchange",c=>o(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Rb=["get","getKey","getAll","getAllKeys","count"],kb=["put","add","delete","clear"],So=new Map;function Ps(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(So.get(e))return So.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=kb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Rb.includes(n)))return;const i=async function(s,...a){const l=this.transaction(s,o?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),o&&l.done]))[0]};return So.set(e,i),i}Ib(t=>({...t,get:(e,n,r)=>Ps(e,n)||t.get(e,n,r),has:(e,n)=>!!Ps(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ob(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ob(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wo="@firebase/app",Os="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new al("@firebase/app"),Ab="@firebase/app-compat",$b="@firebase/analytics-compat",Mb="@firebase/analytics",Nb="@firebase/app-check-compat",Lb="@firebase/app-check",Db="@firebase/auth",Fb="@firebase/auth-compat",Bb="@firebase/database",Ub="@firebase/database-compat",zb="@firebase/functions",Wb="@firebase/functions-compat",jb="@firebase/installations",Hb="@firebase/installations-compat",Vb="@firebase/messaging",Kb="@firebase/messaging-compat",Gb="@firebase/performance",qb="@firebase/performance-compat",Yb="@firebase/remote-config",Xb="@firebase/remote-config-compat",Jb="@firebase/storage",Qb="@firebase/storage-compat",Zb="@firebase/firestore",ev="@firebase/firestore-compat",tv="firebase",nv="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo="[DEFAULT]",rv={[Wo]:"fire-core",[Ab]:"fire-core-compat",[Mb]:"fire-analytics",[$b]:"fire-analytics-compat",[Lb]:"fire-app-check",[Nb]:"fire-app-check-compat",[Db]:"fire-auth",[Fb]:"fire-auth-compat",[Bb]:"fire-rtdb",[Ub]:"fire-rtdb-compat",[zb]:"fire-fn",[Wb]:"fire-fn-compat",[jb]:"fire-iid",[Hb]:"fire-iid-compat",[Vb]:"fire-fcm",[Kb]:"fire-fcm-compat",[Gb]:"fire-perf",[qb]:"fire-perf-compat",[Yb]:"fire-rc",[Xb]:"fire-rc-compat",[Jb]:"fire-gcs",[Qb]:"fire-gcs-compat",[Zb]:"fire-fst",[ev]:"fire-fst-compat","fire-js":"fire-js",[tv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Map,Ho=new Map;function ov(t,e){try{t.container.addComponent(e)}catch(n){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(Ho.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;Ho.set(e,t);for(const n of gr.values())ov(n,t);return!0}function ul(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_t=new zn("app","Firebase",iv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=nv;function dl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jo,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw _t.create("bad-app-name",{appName:String(o)});if(n||(n=il()),!n)throw _t.create("no-options");const i=gr.get(o);if(i){if(mr(n,i.options)&&mr(r,i.config))return i;throw _t.create("duplicate-app",{appName:o})}const s=new hb(o);for(const l of Ho.values())s.addComponent(l);const a=new sv(n,r,s);return gr.set(o,a),a}function av(t=jo){const e=gr.get(t);if(!e&&t===jo&&il())return dl();if(!e)throw _t.create("no-app",{appName:t});return e}function en(t,e,n){var r;let o=(r=rv[t])!==null&&r!==void 0?r:t;n&&(o+=`-${n}`);const i=o.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${o}" with version "${e}":`];i&&a.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(a.join(" "));return}$n(new ln(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="firebase-heartbeat-database",cv=1,Mn="firebase-heartbeat-store";let Co=null;function fl(){return Co||(Co=Tb(lv,cv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Mn)}catch(n){console.warn(n)}}}}).catch(t=>{throw _t.create("idb-open",{originalErrorMessage:t.message})})),Co}async function uv(t){try{const n=(await fl()).transaction(Mn),r=await n.objectStore(Mn).get(pl(t));return await n.done,r}catch(e){if(e instanceof wt)Dt.warn(e.message);else{const n=_t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dt.warn(n.message)}}}async function As(t,e){try{const r=(await fl()).transaction(Mn,"readwrite");await r.objectStore(Mn).put(e,pl(t)),await r.done}catch(n){if(n instanceof wt)Dt.warn(n.message);else{const r=_t.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dt.warn(r.message)}}}function pl(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=1024,fv=30*24*60*60*1e3;class pv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=$s();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=fv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$s(),{heartbeatsToSend:r,unsentEntries:o}=hv(this._heartbeatsCache.heartbeats),i=rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function $s(){return new Date().toISOString().substring(0,10)}function hv(t,e=dv){const n=[];let r=t.slice();for(const o of t){const i=n.find(s=>s.agent===o.agent);if(i){if(i.dates.push(o.date),Ms(n)>e){i.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ms(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nb()?rb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return As(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return As(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Ms(t){return rl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t){$n(new ln("platform-logger",e=>new Pb(e),"PRIVATE")),$n(new ln("heartbeat",e=>new pv(e),"PRIVATE")),en(Wo,Os,t),en(Wo,Os,"esm2017"),en("fire-js","")}gv("");function hl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bv=hl,ml=new zn("auth","Firebase",hl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new al("@firebase/auth");function vv(t,...e){br.logLevel<=te.WARN&&br.warn(`Auth (${jn}): ${t}`,...e)}function rr(t,...e){br.logLevel<=te.ERROR&&br.error(`Auth (${jn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t,...e){throw wi(t,...e)}function et(t,...e){return wi(t,...e)}function yv(t,e,n){const r=Object.assign(Object.assign({},bv()),{[e]:n});return new zn("auth","Firebase",r).create(e,{appName:t.name})}function wi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ml.create(t,...e)}function z(t,e,...n){if(!t)throw wi(e,...n)}function at(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rr(e),new Error(e)}function ut(t,e){t||at(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ev(){return Ns()==="http:"||Ns()==="https:"}function Ns(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ev()||Zg()||"connection"in navigator)?navigator.onLine:!0}function xv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ut(n>e,"Short delay should be less than long delay!"),this.isMobile=Qg()||eb()}get(){return _v()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t,e){ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;at("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;at("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;at("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=new Hn(3e4,6e4);function It(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function St(t,e,n,r,o={}){return bl(t,o,async()=>{let i={},s={};r&&(e==="GET"?s=r:i={body:JSON.stringify(r)});const a=Wn(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),gl.fetch()(vl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function bl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wv),e);try{const o=new Cv(t),i=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Qn(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const a=i.ok?s.errorMessage:s.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qn(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Qn(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Qn(t,"user-disabled",s);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw yv(t,u,c);qe(t,u)}}catch(o){if(o instanceof wt)throw o;qe(t,"network-request-failed",{message:String(o)})}}async function Vn(t,e,n,r,o={}){const i=await St(t,e,n,r,o);return"mfaPendingCredential"in i&&qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vl(t,e,n,r){const o=`${e}${n}?${r}`;return t.config.emulator?Ii(t.config,o):`${t.config.apiScheme}://${o}`}function Sv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Cv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),Iv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=et(t,e,r);return o.customData._tokenResponse=n,o}function Ls(t){return t!==void 0&&t.enterprise!==void 0}class Tv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Sv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Rv(t,e){return St(t,"GET","/v2/recaptchaConfig",It(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(t,e){return St(t,"POST","/v1/accounts:delete",e)}async function Pv(t,e){return St(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ov(t,e=!1){const n=Ut(t),r=await n.getIdToken(e),o=Si(r);z(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const i=typeof o.firebase=="object"?o.firebase:void 0,s=i==null?void 0:i.sign_in_provider;return{claims:o,token:r,authTime:Tn(To(o.auth_time)),issuedAtTime:Tn(To(o.iat)),expirationTime:Tn(To(o.exp)),signInProvider:s||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function To(t){return Number(t)*1e3}function Si(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rr("JWT malformed, contained fewer than 3 sections"),null;try{const o=ol(n);return o?JSON.parse(o):(rr("Failed to decode base64 JWT payload"),null)}catch(o){return rr("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Av(t){const e=Si(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wt&&$v(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $v({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tn(this.lastLoginAt),this.creationTime=Tn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(t){var e;const n=t.auth,r=await t.getIdToken(),o=await Nn(t,Pv(n,{idToken:r}));z(o==null?void 0:o.users.length,n,"internal-error");const i=o.users[0];t._notifyReloadListener(i);const s=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Dv(i.providerUserInfo):[],a=Lv(t.providerData,s),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new yl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,p)}async function Nv(t){const e=Ut(t);await vr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Lv(t,e){return[...t.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Dv(t){return t.map(e=>{var{providerId:n}=e,r=qo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fv(t,e){const n=await bl(t,{},async()=>{const r=Wn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:i}=t.config,s=vl(t,o,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gl.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Bv(t,e){return St(t,"POST","/v2/accounts:revokeToken",It(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Av(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:i}=await Fv(e,n);this.updateTokensAndExpiration(r,o,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:i}=n,s=new Ln;return r&&(z(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),o&&(z(typeof o=="string","internal-error",{appName:e}),s.accessToken=o),i&&(z(typeof i=="number","internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ln,this.toJSON())}_performRefresh(){return at("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class At{constructor(e){var{uid:n,auth:r,stsTokenManager:o}=e,i=qo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Mv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Nn(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ov(this,e)}reload(){return Nv(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Nn(this,kv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,o,i,s,a,l,c,u;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(o=n.email)!==null&&o!==void 0?o:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(s=n.photoURL)!==null&&s!==void 0?s:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:I,stsTokenManager:E}=n;z(y&&E,e,"internal-error");const P=Ln.fromJSON(this.name,E);z(typeof y=="string",e,"internal-error"),mt(p,e.name),mt(h,e.name),z(typeof b=="boolean",e,"internal-error"),z(typeof w=="boolean",e,"internal-error"),mt(v,e.name),mt(m,e.name),mt(g,e.name),mt(x,e.name),mt(_,e.name),mt(S,e.name);const O=new At({uid:y,auth:e,email:h,emailVerified:b,displayName:p,isAnonymous:w,photoURL:m,phoneNumber:v,tenantId:g,stsTokenManager:P,createdAt:_,lastLoginAt:S});return I&&Array.isArray(I)&&(O.providerData=I.map(C=>Object.assign({},C))),x&&(O._redirectEventId=x),O}static async _fromIdTokenResponse(e,n,r=!1){const o=new Ln;o.updateFromServerResponse(n);const i=new At({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await vr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new Map;function lt(t){ut(t instanceof Function,"Expected a class definition");let e=Ds.get(t);return e?(ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ds.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}El.type="NONE";const Fs=El;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e,n){return`firebase:${t}:${e}:${n}`}class tn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:i}=this.auth;this.fullUserKey=or(this.userKey,o.apiKey,i),this.fullPersistenceKey=or("persistence",o.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?At._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new tn(lt(Fs),e,r);const o=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=o[0]||lt(Fs);const s=or(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(s);if(u){const p=At._fromJSON(e,u);c!==i&&(a=p),i=c;break}}catch{}const l=o.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new tn(i,e,r):(i=l[0],a&&await i._set(s,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(s)}catch{}})),new tn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_l(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sl(e))return"Blackberry";if(Cl(e))return"Webos";if(Ci(e))return"Safari";if((e.includes("chrome/")||xl(e))&&!e.includes("edge/"))return"Chrome";if(Il(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _l(t=Ce()){return/firefox\//i.test(t)}function Ci(t=Ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xl(t=Ce()){return/crios\//i.test(t)}function wl(t=Ce()){return/iemobile/i.test(t)}function Il(t=Ce()){return/android/i.test(t)}function Sl(t=Ce()){return/blackberry/i.test(t)}function Cl(t=Ce()){return/webos/i.test(t)}function co(t=Ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Uv(t=Ce()){var e;return co(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zv(){return tb()&&document.documentMode===10}function Tl(t=Ce()){return co(t)||Il(t)||Cl(t)||Sl(t)||/windows phone/i.test(t)||wl(t)}function Wv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t,e=[]){let n;switch(t){case"Browser":n=Bs(Ce());break;case"Worker":n=`${Bs(Ce())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((s,a)=>{try{const l=e(i);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(t,e={}){return St(t,"GET","/v2/passwordPolicy",It(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=6;class Kv{constructor(e){var n,r,o,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:Vv,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,o,i,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsLowercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Us(this),this.idTokenSubscription=new Us(this),this.beforeStateQueue=new jv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ml,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let o=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=o==null?void 0:o._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(o=l.user,i=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(o)}catch(s){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ut(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Hv(this),n=new Kv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Bv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lt(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{s||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,o);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zt(t){return Ut(t)}class Us{constructor(e){this.auth=e,this.observer=null,this.addObserver=lb(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qv(t){uo=t}function kl(t){return uo.loadJS(t)}function Yv(){return uo.recaptchaEnterpriseScript}function Xv(){return uo.gapiScript}function Jv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Qv="recaptcha-enterprise",Zv="NO_RECAPTCHA";class e0{constructor(e){this.type=Qv,this.auth=zt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(s,a)=>{Rv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Tv(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,s(c.siteKey)}}).catch(l=>{a(l)})})}function o(i,s,a){const l=window.grecaptcha;Ls(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{s(c)}).catch(()=>{s(Zv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,s)=>{r(this.auth).then(a=>{if(!n&&Ls(window.grecaptcha))o(a,i,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Yv();l.length!==0&&(l+=a),kl(l).then(()=>{o(a,i,s)}).catch(c=>{s(c)})}}).catch(a=>{s(a)})})}}async function zs(t,e,n,r=!1){const o=new e0(t);let i;try{i=await o.verify(n)}catch{i=await o.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:i}):Object.assign(s,{captchaResponse:i}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Ko(t,e,n,r){var o;if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await zs(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await zs(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t,e){const n=ul(t,"auth");if(n.isInitialized()){const o=n.getImmediate(),i=n.getOptions();if(mr(i,e??{}))return o;qe(o,"already-initialized")}return n.initialize({options:e})}function n0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function r0(t,e,n){const r=zt(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!!(n!=null&&n.disableWarnings),i=Pl(e),{host:s,port:a}=o0(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||i0()}function Pl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function o0(t){const e=Pl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const i=o[1];return{host:i,port:Ws(r.substr(i.length+1))}}else{const[i,s]=r.split(":");return{host:i,port:Ws(s)}}}function Ws(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function i0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return at("not implemented")}_getIdTokenResponse(e){return at("not implemented")}_linkToIdToken(e,n){return at("not implemented")}_getReauthenticationResolver(e){return at("not implemented")}}async function s0(t,e){return St(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(t,e){return Vn(t,"POST","/v1/accounts:signInWithPassword",It(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l0(t,e){return Vn(t,"POST","/v1/accounts:signInWithEmailLink",It(t,e))}async function c0(t,e){return Vn(t,"POST","/v1/accounts:signInWithEmailLink",It(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Ti{constructor(e,n,r,o=null){super("password",r),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new Dn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Dn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ko(e,n,"signInWithPassword",a0);case"emailLink":return l0(e,{email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ko(e,r,"signUpPassword",s0);case"emailLink":return c0(e,{idToken:n,email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(t,e){return Vn(t,"POST","/v1/accounts:signInWithIdp",It(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="http://localhost";class Ft extends Ti{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ft(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=n,i=qo(n,["providerId","signInMethod"]);if(!r||!o)return null;const s=new Ft(r,o);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return nn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,nn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,nn(e,n)}buildRequest(){const e={requestUri:u0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function f0(t){const e=_n(xn(t)).link,n=e?_n(xn(e)).deep_link_id:null,r=_n(xn(t)).deep_link_id;return(r?_n(xn(r)).link:null)||r||n||e||t}class Ri{constructor(e){var n,r,o,i,s,a;const l=_n(xn(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,p=d0((o=l.mode)!==null&&o!==void 0?o:null);z(c&&u&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=f0(e);try{return new Ri(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.providerId=fn.PROVIDER_ID}static credential(e,n){return Dn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ri.parseLink(n);return z(r,"argument-error"),Dn._fromEmailAndCode(e,r.code,r.tenantId)}}fn.PROVIDER_ID="password";fn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Ol{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends Kn{constructor(){super("facebook.com")}static credential(e){return Ft._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Kn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ft._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Kn{constructor(){super("github.com")}static credential(e){return Ft._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Kn{constructor(){super("twitter.com")}static credential(e,n){return Ft._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(t,e){return Vn(t,"POST","/v1/accounts:signUp",It(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,o=!1){const i=await At._fromIdTokenResponse(e,r,o),s=js(r);return new Bt({user:i,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const o=js(r);return new Bt({user:e,providerId:o,_tokenResponse:r,operationType:n})}}function js(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends wt{constructor(e,n,r,o){var i;super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,yr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,o){return new yr(e,n,r,o)}}function Al(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yr._fromErrorAndOperation(t,i,e,r):i})}async function h0(t,e,n=!1){const r=await Nn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m0(t,e,n=!1){const{auth:r}=t,o="reauthenticate";try{const i=await Nn(t,Al(r,o,e,t),n);z(i.idToken,r,"internal-error");const s=Si(i.idToken);z(s,r,"internal-error");const{sub:a}=s;return z(t.uid===a,r,"user-mismatch"),Bt._forOperation(t,o,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l(t,e,n=!1){const r="signIn",o=await Al(t,r,e),i=await Bt._fromIdTokenResponse(t,r,o);return n||await t._updateCurrentUser(i.user),i}async function g0(t,e){return $l(zt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(t){const e=zt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rE(t,e,n){const r=zt(t),s=await Ko(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",p0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ml(t),l}),a=await Bt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function oE(t,e,n){return g0(Ut(t),fn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ml(t),r})}function b0(t,e,n,r){return Ut(t).onIdTokenChanged(e,n,r)}function v0(t,e,n){return Ut(t).beforeAuthStateChanged(e,n)}const Er="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Er,"1"),this.storage.removeItem(Er),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(){const t=Ce();return Ci(t)||co(t)}const E0=1e3,_0=10;class Ll extends Nl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=y0()&&Wv(),this.fallbackToPolling=Tl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&e(n,o,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const o=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},i=this.storage.getItem(r);zv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,_0):o()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},E0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ll.type="LOCAL";const x0=Ll;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends Nl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dl.type="SESSION";const Fl=Dl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const r=new fo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:o,data:i}=n.data,s=this.handlersMap[o];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const a=Array.from(s).map(async c=>c(n.origin,i)),l=await w0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let i,s;return new Promise((a,l)=>{const c=ki("",20);o.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:o,onMessage(p){const h=p;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(s),o.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[o.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function S0(t){tt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function C0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function R0(){return Bl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="firebaseLocalStorageDb",k0=1,_r="firebaseLocalStorage",zl="fbase_key";class Gn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function po(t,e){return t.transaction([_r],e?"readwrite":"readonly").objectStore(_r)}function P0(){const t=indexedDB.deleteDatabase(Ul);return new Gn(t).toPromise()}function Go(){const t=indexedDB.open(Ul,k0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_r,{keyPath:zl})}catch(o){n(o)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_r)?e(r):(r.close(),await P0(),e(await Go()))})})}async function Hs(t,e,n){const r=po(t,!0).put({[zl]:e,value:n});return new Gn(r).toPromise()}async function O0(t,e){const n=po(t,!1).get(e),r=await new Gn(n).toPromise();return r===void 0?null:r.value}function Vs(t,e){const n=po(t,!0).delete(e);return new Gn(n).toPromise()}const A0=800,$0=3;class Wl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Go(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fo._getInstance(R0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await C0(),!this.activeServiceWorker)return;this.sender=new I0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||T0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Go();return await Hs(e,Er,"1"),await Vs(e,Er),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hs(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>O0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vs(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const i=po(o,!1).getAll();return new Gn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:i}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(i)&&(this.notifyListeners(o,i),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),A0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wl.type="LOCAL";const M0=Wl;new Hn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(t,e){return e?lt(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Ti{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return nn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function L0(t){return $l(t.auth,new Pi(t),t.bypassAuthState)}function D0(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),m0(n,new Pi(t),t.bypassAuthState)}async function F0(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),h0(n,new Pi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r,o,i=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:o,tenantId:i,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return L0;case"linkViaPopup":case"linkViaRedirect":return F0;case"reauthViaPopup":case"reauthViaRedirect":return D0;default:qe(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=new Hn(2e3,1e4);class Jt extends jl{constructor(e,n,r,o,i){super(e,n,o,i),this.provider=r,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=ki();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,B0.get())};e()}}Jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0="pendingRedirect",ir=new Map;class z0 extends jl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ir.get(this.auth._key());if(!e){try{const r=await W0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ir.set(this.auth._key(),e)}return this.bypassAuthState||ir.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function W0(t,e){const n=V0(e),r=H0(t);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function j0(t,e){ir.set(t._key(),e)}function H0(t){return lt(t._redirectPersistence)}function V0(t){return or(U0,t.config.apiKey,t.name)}async function K0(t,e,n=!1){const r=zt(t),o=N0(r,e),s=await new z0(r,o,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=10*60*1e3;class q0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Hl(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(et(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=G0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ks(e))}saveEventToCache(e){this.cachedEventUids.add(Ks(e)),this.lastProcessedEventTime=Date.now()}}function Ks(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X0(t,e={}){return St(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Q0=/^https?/;async function Z0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await X0(t);for(const n of e)try{if(ey(n))return}catch{}qe(t,"unauthorized-domain")}function ey(t){const e=Vo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!Q0.test(n))return!1;if(J0.test(t))return r===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new Hn(3e4,6e4);function Gs(){const t=tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ny(t){return new Promise((e,n)=>{var r,o,i;function s(){Gs(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gs(),n(et(t,"network-request-failed"))},timeout:ty.get()})}if(!((o=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((i=tt().gapi)===null||i===void 0)&&i.load)s();else{const a=Jv("iframefcb");return tt()[a]=()=>{gapi.load?s():n(et(t,"network-request-failed"))},kl(`${Xv()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw sr=null,e})}let sr=null;function ry(t){return sr=sr||ny(t),sr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=new Hn(5e3,15e3),iy="__/auth/iframe",sy="emulator/auth/iframe",ay={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ly=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cy(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ii(e,sy):`https://${t.config.authDomain}/${iy}`,r={apiKey:e.apiKey,appName:t.name,v:jn},o=ly.get(t.config.apiHost);o&&(r.eid=o);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Wn(r).slice(1)}`}async function uy(t){const e=await ry(t),n=tt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:cy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ay,dontclear:!0},r=>new Promise(async(o,i)=>{await r.restyle({setHideOnLeave:!1});const s=et(t,"network-request-failed"),a=tt().setTimeout(()=>{i(s)},oy.get());function l(){tt().clearTimeout(a),o(r)}r.ping(l).then(l,()=>{i(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fy=500,py=600,hy="_blank",my="http://localhost";class qs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gy(t,e,n,r=fy,o=py){const i=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},dy),{width:r.toString(),height:o.toString(),top:i,left:s}),c=Ce().toLowerCase();n&&(a=xl(c)?hy:n),_l(c)&&(e=e||my,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[v,m])=>`${h}${v}=${m},`,"");if(Uv(c)&&a!=="_self")return by(e||"",a),new qs(null);const p=window.open(e||"",a,u);z(p,t,"popup-blocked");try{p.focus()}catch{}return new qs(p)}function by(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy="__/auth/handler",yy="emulator/auth/handler",Ey=encodeURIComponent("fac");async function Ys(t,e,n,r,o,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:jn,eventId:o};if(e instanceof Ol){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",ab(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,p]of Object.entries(i||{}))s[u]=p}if(e instanceof Kn){const u=e.getScopes().filter(p=>p!=="");u.length>0&&(s.scopes=u.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Ey}=${encodeURIComponent(l)}`:"";return`${_y(t)}?${Wn(a).slice(1)}${c}`}function _y({config:t}){return t.emulator?Ii(t,yy):`https://${t.authDomain}/${vy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="webStorageSupport";class xy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fl,this._completeRedirectFn=K0,this._overrideRedirectResult=j0}async _openPopup(e,n,r,o){var i;ut((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await Ys(e,n,r,Vo(),o);return gy(e,s,ki())}async _openRedirect(e,n,r,o){await this._originValidation(e);const i=await Ys(e,n,r,Vo(),o);return S0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:i}=this.eventManagers[n];return o?Promise.resolve(o):(ut(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uy(e),r=new q0(e);return n.register("authEvent",o=>(z(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ro,{type:Ro},o=>{var i;const s=(i=o==null?void 0:o[0])===null||i===void 0?void 0:i[Ro];s!==void 0&&n(!!s),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Z0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tl()||Ci()||co()}}const wy=xy;var Xs="@firebase/auth",Js="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Cy(t){$n(new ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;z(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rl(t)},c=new Gv(r,o,i,l);return n0(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$n(new ln("auth-internal",e=>{const n=zt(e.getProvider("auth").getImmediate());return(r=>new Iy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(Xs,Js,Sy(t)),en(Xs,Js,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=5*60,Ry=sl("authIdTokenMaxAge")||Ty;let Qs=null;const ky=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ry)return;const o=n==null?void 0:n.token;Qs!==o&&(Qs=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Py(t=av()){const e=ul(t,"auth");if(e.isInitialized())return e.getImmediate();const n=t0(t,{popupRedirectResolver:wy,persistence:[M0,x0,Fl]}),r=sl("authTokenSyncURL");if(r){const i=ky(r);v0(n,i,()=>i(n.currentUser)),b0(n,s=>i(s))}const o=Xg("auth");return o&&r0(n,`http://${o}`),n}function Oy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}qv({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=o=>{const i=et("internal-error");i.customData=o,n(i)},r.type="text/javascript",r.charset="UTF-8",Oy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Cy("Browser");var Ay="firebase",$y="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en(Ay,$y,"app");const My={apiKey:"AIzaSyCZ28tU2kAIjh5l-IpB3SzCt3blkLnAQhU",authDomain:"task-pro-creamy-sharks.firebaseapp.com",projectId:"task-pro-creamy-sharks",storageBucket:"task-pro-creamy-sharks.appspot.com",messagingSenderId:"554256292424",appId:"1:554256292424:web:68b4fc8d94e62704a4567d",measurementId:"G-QCG32KQ45Q"},Ny=dl(My),iE=Py(Ny);export{Gy as A,di as B,Wy as C,Yy as D,tE as E,Qy as F,rE as G,Sp as L,nE as P,Vy as S,hi as T,f as _,lp as a,Wg as b,By as c,zy as d,Uy as e,Na as f,iE as g,fe as h,ce as i,W as j,ui as k,Oa as l,U as m,ct as n,ge as o,jy as p,qy as q,Fy as r,oE as s,Xy as t,be as u,Jy as v,Zy as w,eE as x,Hy as y,Ky as z};
