import{u as C,b as We,e as Te,r as O,j as g,v as Ti,g as Oe,B as Ae,w as Oi,x as Wn,y as Ai,z as Gn,A as Ri,n as Hn,R as ie,C as Mi,D as Bi,E as $i,F as Li,G as Ni,I as ji,J as ki}from"./index-kSR8cbiM.js";import{p as nt,P as te,G as Un,h as Xt}from"./hoist-non-react-statics.cjs-_oxF8iT5.js";import{I as sr,f as Le,C as Yr,a as Ye,c as zn,b as jr,d as qn,F as Vn,e as Yn,g as Fi}from"./selectors-uFJbIetm.js";import{_ as kr,a as U,b as Kn}from"./objectWithoutPropertiesLoose-wqavpohd.js";const Wi=C.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-left: auto;
`,Zt=C.li`
  display: flex;
  align-items: flex-end;
`,Qt=C.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`,_t=C.svg`
  stroke: ${e=>e.theme.colors.mainPageTextColor};
  transition: all var(--primary-transition);

  &:hover {
    stroke: ${e=>e.theme.colors.accentTextColor};
  }
`,Ue="/task-pro/assets/icons-dtHiyAGN.svg",Gi=C.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${e=>e.theme.colors.modalBgColor};
  z-index: 5;
`,Hi=C.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  width: 100%;
  max-width: 350px;
  min-height: 221px;
  z-index: 10;
  background-color: ${e=>e.theme.colors.modalWindowsBgColor};
  border-radius: 10px;
`,Ui=C.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,zi=C.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,qi=C.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Vi=C.input`
  width: 100%;
  /* max-width: 352px; */
  height: 49px;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  background-color: transparent;

  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  outline: none;
  margin-bottom: 24px;
`,Yi=C(sr)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.secondaryTextColor};
  position: absolute;
  // top: 1.4rem;
  right: 0;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,Jn=({openEditColumnModal:e,columnId:r,title:t})=>{const n=We(),{board:o}=Te(Le);O.useEffect(()=>{const a=s=>{s.code==="Escape"&&e()};return window.addEventListener("keydown",a),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow="auto"}},[e]);const i=a=>{a.target===a.currentTarget&&e()},l=async a=>{a.preventDefault();const s=a.currentTarget,d=s.elements.title.value.trim();d.length>0?(await n(Ti({columnId:r,newColumnData:{titleColumn:d}})),n(Oe(o._id)),s.reset(),e(),Ae.success("You have successfully edited the column!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})):Ae.error("Please enter a title",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})};return g.jsx(Gi,{onClick:i,children:g.jsxs(Hi,{className:"modal",children:[g.jsx(Ui,{onClick:()=>e(),type:"button",children:g.jsx(Yi,{})}),g.jsxs("div",{children:[g.jsx(zi,{children:"Edit column"}),g.jsxs(qi,{onSubmit:l,children:[g.jsx(Vi,{autoFocus:!0,type:"text",placeholder:"To Do",name:"title",defaultValue:t}),g.jsx(Yr,{btnText:"Add"})]})]})]})})};Jn.propTypes={openEditColumnModal:nt.PropTypes.func,columnId:nt.PropTypes.string,title:nt.PropTypes.string};const Xn=({columnID:e,title:r,handleDelete:t})=>{const[n,o]=O.useState(),i=()=>{o(!n)};return g.jsxs(g.Fragment,{children:[g.jsxs(Wi,{children:[g.jsx(Zt,{children:g.jsx(Qt,{type:"button",onClick:i,children:g.jsx(_t,{width:"16",height:"16",children:g.jsx("use",{href:`${Ue}#icon-pencil-dark`})})})},"edit"),g.jsx(Zt,{onClick:()=>t(e),children:g.jsx(Qt,{type:"button",children:g.jsx(_t,{width:"16",height:"16",children:g.jsx("use",{href:`${Ue}#icon-trash-dark`})})})},"delete")]}),n&&g.jsx(Jn,{openEditColumnModal:i,columnId:e,title:r})]})};Xn.propTypes={columnID:te.string,title:te.string,handleDelete:te.func};var Zn={exports:{}};(function(e,r){(function(t,n){e.exports=n()})(Oi,function(){var t=1e3,n=6e4,o=36e5,i="millisecond",l="second",a="minute",s="hour",d="day",p="week",u="month",c="quarter",f="year",v="date",m="Invalid Date",y=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(B){var T=["th","st","nd","rd"],I=B%100;return"["+B+(T[(I-20)%10]||T[I]||T[0])+"]"}},w=function(B,T,I){var $=String(B);return!$||$.length>=T?B:""+Array(T+1-$.length).join(I)+B},x={s:w,z:function(B){var T=-B.utcOffset(),I=Math.abs(T),$=Math.floor(I/60),A=I%60;return(T<=0?"+":"-")+w($,2,"0")+":"+w(A,2,"0")},m:function B(T,I){if(T.date()<I.date())return-B(I,T);var $=12*(I.year()-T.year())+(I.month()-T.month()),A=T.clone().add($,u),G=I-A<0,N=T.clone().add($+(G?-1:1),u);return+(-($+(I-A)/(G?A-N:N-A))||0)},a:function(B){return B<0?Math.ceil(B)||0:Math.floor(B)},p:function(B){return{M:u,y:f,w:p,d,D:v,h:s,m:a,s:l,ms:i,Q:c}[B]||String(B||"").toLowerCase().replace(/s$/,"")},u:function(B){return B===void 0}},E="en",M={};M[E]=b;var S="$isDayjsObject",Q=function(B){return B instanceof ae||!(!B||!B[S])},Y=function B(T,I,$){var A;if(!T)return E;if(typeof T=="string"){var G=T.toLowerCase();M[G]&&(A=G),I&&(M[G]=I,A=G);var N=T.split("-");if(!A&&N.length>1)return B(N[0])}else{var X=T.name;M[X]=T,A=X}return!$&&A&&(E=A),A||!$&&E},j=function(B,T){if(Q(B))return B.clone();var I=typeof T=="object"?T:{};return I.date=B,I.args=arguments,new ae(I)},L=x;L.l=Y,L.i=Q,L.w=function(B,T){return j(B,{locale:T.$L,utc:T.$u,x:T.$x,$offset:T.$offset})};var ae=function(){function B(I){this.$L=Y(I.locale,null,!0),this.parse(I),this.$x=this.$x||I.x||{},this[S]=!0}var T=B.prototype;return T.parse=function(I){this.$d=function($){var A=$.date,G=$.utc;if(A===null)return new Date(NaN);if(L.u(A))return new Date;if(A instanceof Date)return new Date(A);if(typeof A=="string"&&!/Z$/i.test(A)){var N=A.match(y);if(N){var X=N[2]-1||0,Z=(N[7]||"0").substring(0,3);return G?new Date(Date.UTC(N[1],X,N[3]||1,N[4]||0,N[5]||0,N[6]||0,Z)):new Date(N[1],X,N[3]||1,N[4]||0,N[5]||0,N[6]||0,Z)}}return new Date(A)}(I),this.init()},T.init=function(){var I=this.$d;this.$y=I.getFullYear(),this.$M=I.getMonth(),this.$D=I.getDate(),this.$W=I.getDay(),this.$H=I.getHours(),this.$m=I.getMinutes(),this.$s=I.getSeconds(),this.$ms=I.getMilliseconds()},T.$utils=function(){return L},T.isValid=function(){return this.$d.toString()!==m},T.isSame=function(I,$){var A=j(I);return this.startOf($)<=A&&A<=this.endOf($)},T.isAfter=function(I,$){return j(I)<this.startOf($)},T.isBefore=function(I,$){return this.endOf($)<j(I)},T.$g=function(I,$,A){return L.u(I)?this[$]:this.set(A,I)},T.unix=function(){return Math.floor(this.valueOf()/1e3)},T.valueOf=function(){return this.$d.getTime()},T.startOf=function(I,$){var A=this,G=!!L.u($)||$,N=L.p(I),X=function(K,k){var H=L.w(A.$u?Date.UTC(A.$y,k,K):new Date(A.$y,k,K),A);return G?H:H.endOf(d)},Z=function(K,k){return L.w(A.toDate()[K].apply(A.toDate("s"),(G?[0,0,0,0]:[23,59,59,999]).slice(k)),A)},ne=this.$W,D=this.$M,R=this.$D,V="set"+(this.$u?"UTC":"");switch(N){case f:return G?X(1,0):X(31,11);case u:return G?X(1,D):X(0,D+1);case p:var z=this.$locale().weekStart||0,q=(ne<z?ne+7:ne)-z;return X(G?R-q:R+(6-q),D);case d:case v:return Z(V+"Hours",0);case s:return Z(V+"Minutes",1);case a:return Z(V+"Seconds",2);case l:return Z(V+"Milliseconds",3);default:return this.clone()}},T.endOf=function(I){return this.startOf(I,!1)},T.$set=function(I,$){var A,G=L.p(I),N="set"+(this.$u?"UTC":""),X=(A={},A[d]=N+"Date",A[v]=N+"Date",A[u]=N+"Month",A[f]=N+"FullYear",A[s]=N+"Hours",A[a]=N+"Minutes",A[l]=N+"Seconds",A[i]=N+"Milliseconds",A)[G],Z=G===d?this.$D+($-this.$W):$;if(G===u||G===f){var ne=this.clone().set(v,1);ne.$d[X](Z),ne.init(),this.$d=ne.set(v,Math.min(this.$D,ne.daysInMonth())).$d}else X&&this.$d[X](Z);return this.init(),this},T.set=function(I,$){return this.clone().$set(I,$)},T.get=function(I){return this[L.p(I)]()},T.add=function(I,$){var A,G=this;I=Number(I);var N=L.p($),X=function(D){var R=j(G);return L.w(R.date(R.date()+Math.round(D*I)),G)};if(N===u)return this.set(u,this.$M+I);if(N===f)return this.set(f,this.$y+I);if(N===d)return X(1);if(N===p)return X(7);var Z=(A={},A[a]=n,A[s]=o,A[l]=t,A)[N]||1,ne=this.$d.getTime()+I*Z;return L.w(ne,this)},T.subtract=function(I,$){return this.add(-1*I,$)},T.format=function(I){var $=this,A=this.$locale();if(!this.isValid())return A.invalidDate||m;var G=I||"YYYY-MM-DDTHH:mm:ssZ",N=L.z(this),X=this.$H,Z=this.$m,ne=this.$M,D=A.weekdays,R=A.months,V=A.meridiem,z=function(k,H,J,_){return k&&(k[H]||k($,G))||J[H].slice(0,_)},q=function(k){return L.s(X%12||12,k,"0")},K=V||function(k,H,J){var _=k<12?"AM":"PM";return J?_.toLowerCase():_};return G.replace(h,function(k,H){return H||function(J){switch(J){case"YY":return String($.$y).slice(-2);case"YYYY":return L.s($.$y,4,"0");case"M":return ne+1;case"MM":return L.s(ne+1,2,"0");case"MMM":return z(A.monthsShort,ne,R,3);case"MMMM":return z(R,ne);case"D":return $.$D;case"DD":return L.s($.$D,2,"0");case"d":return String($.$W);case"dd":return z(A.weekdaysMin,$.$W,D,2);case"ddd":return z(A.weekdaysShort,$.$W,D,3);case"dddd":return D[$.$W];case"H":return String(X);case"HH":return L.s(X,2,"0");case"h":return q(1);case"hh":return q(2);case"a":return K(X,Z,!0);case"A":return K(X,Z,!1);case"m":return String(Z);case"mm":return L.s(Z,2,"0");case"s":return String($.$s);case"ss":return L.s($.$s,2,"0");case"SSS":return L.s($.$ms,3,"0");case"Z":return N}return null}(k)||N.replace(":","")})},T.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},T.diff=function(I,$,A){var G,N=this,X=L.p($),Z=j(I),ne=(Z.utcOffset()-this.utcOffset())*n,D=this-Z,R=function(){return L.m(N,Z)};switch(X){case f:G=R()/12;break;case u:G=R();break;case c:G=R()/3;break;case p:G=(D-ne)/6048e5;break;case d:G=(D-ne)/864e5;break;case s:G=D/o;break;case a:G=D/n;break;case l:G=D/t;break;default:G=D}return A?G:L.a(G)},T.daysInMonth=function(){return this.endOf(u).$D},T.$locale=function(){return M[this.$L]},T.locale=function(I,$){if(!I)return this.$L;var A=this.clone(),G=Y(I,$,!0);return G&&(A.$L=G),A},T.clone=function(){return L.w(this.$d,this)},T.toDate=function(){return new Date(this.valueOf())},T.toJSON=function(){return this.isValid()?this.toISOString():null},T.toISOString=function(){return this.$d.toISOString()},T.toString=function(){return this.$d.toUTCString()},B}(),le=ae.prototype;return j.prototype=le,[["$ms",i],["$s",l],["$m",a],["$H",s],["$W",d],["$M",u],["$y",f],["$D",v]].forEach(function(B){le[B[1]]=function(T){return this.$g(T,B[0],B[1])}}),j.extend=function(B,T){return B.$i||(B(T,ae,j),B.$i=!0),j},j.locale=Y,j.isDayjs=Q,j.unix=function(B){return j(1e3*B)},j.en=M[E],j.Ls=M,j.p={},j})})(Zn);var Ki=Zn.exports;const Qn=Wn(Ki);var _n={exports:{}};(function(e){e.exports=function(r){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return r[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=r,n.c=t,n.i=function(o){return o},n.d=function(o,i,l){n.o(o,i)||Object.defineProperty(o,i,{configurable:!1,enumerable:!0,get:l})},n.n=function(o){var i=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(i,"a",i),i},n.o=function(o,i){return Object.prototype.hasOwnProperty.call(o,i)},n.p="",n(n.s=5)}([function(r,t){var n=r.exports={},o,i;function l(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?o=setTimeout:o=l}catch{o=l}try{typeof clearTimeout=="function"?i=clearTimeout:i=a}catch{i=a}})();function s(b){if(o===setTimeout)return setTimeout(b,0);if((o===l||!o)&&setTimeout)return o=setTimeout,setTimeout(b,0);try{return o(b,0)}catch{try{return o.call(null,b,0)}catch{return o.call(this,b,0)}}}function d(b){if(i===clearTimeout)return clearTimeout(b);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(b);try{return i(b)}catch{try{return i.call(null,b)}catch{return i.call(this,b)}}}var p=[],u=!1,c,f=-1;function v(){!u||!c||(u=!1,c.length?p=c.concat(p):f=-1,p.length&&m())}function m(){if(!u){var b=s(v);u=!0;for(var w=p.length;w;){for(c=p,p=[];++f<w;)c&&c[f].run();f=-1,w=p.length}c=null,u=!1,d(b)}}n.nextTick=function(b){var w=new Array(arguments.length-1);if(arguments.length>1)for(var x=1;x<arguments.length;x++)w[x-1]=arguments[x];p.push(new y(b,w)),p.length===1&&!u&&s(m)};function y(b,w){this.fun=b,this.array=w}y.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={};function h(){}n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(b){return[]},n.binding=function(b){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(b){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},function(r,t,n){var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";r.exports=o},function(r,t,n){(function(o){o.env.NODE_ENV==="production"?r.exports=n(11):r.exports=n(10)}).call(t,n(0))},function(r,t,n){(function(o){if(o.env.NODE_ENV!=="production"){var i=n(2),l=!0;r.exports=n(9)(i.isElement,l)}else r.exports=n(8)()}).call(t,n(0))},function(r,t){r.exports=O},function(r,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function v(m,y){for(var h=0;h<y.length;h++){var b=y[h];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(m,b.key,b)}}return function(m,y,h){return y&&v(m.prototype,y),h&&v(m,h),m}}(),i=n(4),l=d(i),a=n(3),s=d(a);function d(v){return v&&v.__esModule?v:{default:v}}function p(v,m){if(!(v instanceof m))throw new TypeError("Cannot call a class as a function")}function u(v,m){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:v}function c(v,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);v.prototype=Object.create(m&&m.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(v,m):v.__proto__=m)}var f=function(v){c(m,v);function m(y){p(this,m);var h=u(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,y));return h.state={showMore:!1},h}return o(m,[{key:"render",value:function(){var h=this.props,b=h.children,w=h.ellipsis,x=h.readMoreText,E=h.readLessText,M=h.readMoreClassName,S=h.readLessClassName,Q=h.readMoreStyle,Y=h.readLessStyle,j=h.charLimit,L=this.state.showMore,ae=b.substr(0,j).replace(/[\s\n]+$/,"").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]+$/,"")+(j>=b.length?"":w),le=this,B=function(){return j>=b.length||!x?null:l.default.createElement("span",{className:M,role:"presentation",style:Q,onClick:function(){le.setState({showMore:!0})}},x)},T=function(){return j>=b.length||!E?null:l.default.createElement("span",{className:S,role:"presentation",style:Y,onClick:function(){le.setState({showMore:!1})}},E)};return l.default.createElement(l.default.Fragment,null,L?b:ae," ",L?l.default.createElement(T,null):l.default.createElement(B,null))}}]),m}(l.default.Component);f.propTypes={charLimit:s.default.number,ellipsis:s.default.string,readMoreText:s.default.string,readLessText:s.default.string,readMoreClassName:s.default.string,readLessClassName:s.default.string,readMoreStyle:s.default.object,readLessStyle:s.default.object,children:s.default.string.isRequired},f.defaultProps={charLimit:150,ellipsis:"…",readMoreText:"Read more",readLessText:"Read less",readMoreClassName:"react-read-more-read-less react-read-more-read-less-more",readLessClassName:"react-read-more-read-less react-read-more-read-less-less",readMoreStyle:{whiteSpace:"nowrap",cursor:"pointer"},readLessStyle:{whiteSpace:"nowrap",cursor:"pointer"}},t.default=f},function(r,t,n){/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function a(d){if(d==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(d)}function s(){try{if(!Object.assign)return!1;var d=new String("abc");if(d[5]="de",Object.getOwnPropertyNames(d)[0]==="5")return!1;for(var p={},u=0;u<10;u++)p["_"+String.fromCharCode(u)]=u;var c=Object.getOwnPropertyNames(p).map(function(v){return p[v]});if(c.join("")!=="0123456789")return!1;var f={};return"abcdefghijklmnopqrst".split("").forEach(function(v){f[v]=v}),Object.keys(Object.assign({},f)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}r.exports=s()?Object.assign:function(d,p){for(var u,c=a(d),f,v=1;v<arguments.length;v++){u=Object(arguments[v]);for(var m in u)i.call(u,m)&&(c[m]=u[m]);if(o){f=o(u);for(var y=0;y<f.length;y++)l.call(u,f[y])&&(c[f[y]]=u[f[y]])}}return c}},function(r,t,n){(function(o){var i=function(){};if(o.env.NODE_ENV!=="production"){var l=n(1),a={},s=Function.call.bind(Object.prototype.hasOwnProperty);i=function(p){var u="Warning: "+p;typeof console<"u"&&console.error(u);try{throw new Error(u)}catch{}}}function d(p,u,c,f,v){if(o.env.NODE_ENV!=="production"){for(var m in p)if(s(p,m)){var y;try{if(typeof p[m]!="function"){var h=Error((f||"React class")+": "+c+" type `"+m+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof p[m]+"`.");throw h.name="Invariant Violation",h}y=p[m](u,m,f,c,null,l)}catch(w){y=w}if(y&&!(y instanceof Error)&&i((f||"React class")+": type specification of "+c+" `"+m+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof y+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),y instanceof Error&&!(y.message in a)){a[y.message]=!0;var b=v?v():"";i("Failed "+c+" type: "+y.message+(b??""))}}}}d.resetWarningCache=function(){o.env.NODE_ENV!=="production"&&(a={})},r.exports=d}).call(t,n(0))},function(r,t,n){var o=n(1);function i(){}function l(){}l.resetWarningCache=i,r.exports=function(){function a(p,u,c,f,v,m){if(m!==o){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}a.isRequired=a;function s(){return a}var d={array:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:s,element:a,elementType:a,instanceOf:s,node:a,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:l,resetWarningCache:i};return d.PropTypes=d,d}},function(r,t,n){(function(o){var i=n(2),l=n(6),a=n(1),s=n(7),d=Function.call.bind(Object.prototype.hasOwnProperty),p=function(){};o.env.NODE_ENV!=="production"&&(p=function(c){var f="Warning: "+c;typeof console<"u"&&console.error(f);try{throw new Error(f)}catch{}});function u(){return null}r.exports=function(c,f){var v=typeof Symbol=="function"&&Symbol.iterator,m="@@iterator";function y(D){var R=D&&(v&&D[v]||D[m]);if(typeof R=="function")return R}var h="<<anonymous>>",b={array:M("array"),bool:M("boolean"),func:M("function"),number:M("number"),object:M("object"),string:M("string"),symbol:M("symbol"),any:S(),arrayOf:Q,element:Y(),elementType:j(),instanceOf:L,node:T(),objectOf:le,oneOf:ae,oneOfType:B,shape:I,exact:$};function w(D,R){return D===R?D!==0||1/D===1/R:D!==D&&R!==R}function x(D){this.message=D,this.stack=""}x.prototype=Error.prototype;function E(D){if(o.env.NODE_ENV!=="production")var R={},V=0;function z(K,k,H,J,_,re,he){if(J=J||h,re=re||H,he!==a){if(f){var fe=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw fe.name="Invariant Violation",fe}else if(o.env.NODE_ENV!=="production"&&typeof console<"u"){var Ee=J+":"+H;!R[Ee]&&V<3&&(p("You are manually calling a React.PropTypes validation function for the `"+re+"` prop on `"+J+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),R[Ee]=!0,V++)}}return k[H]==null?K?k[H]===null?new x("The "+_+" `"+re+"` is marked as required "+("in `"+J+"`, but its value is `null`.")):new x("The "+_+" `"+re+"` is marked as required in "+("`"+J+"`, but its value is `undefined`.")):null:D(k,H,J,_,re)}var q=z.bind(null,!1);return q.isRequired=z.bind(null,!0),q}function M(D){function R(V,z,q,K,k,H){var J=V[z],_=N(J);if(_!==D){var re=X(J);return new x("Invalid "+K+" `"+k+"` of type "+("`"+re+"` supplied to `"+q+"`, expected ")+("`"+D+"`."))}return null}return E(R)}function S(){return E(u)}function Q(D){function R(V,z,q,K,k){if(typeof D!="function")return new x("Property `"+k+"` of component `"+q+"` has invalid PropType notation inside arrayOf.");var H=V[z];if(!Array.isArray(H)){var J=N(H);return new x("Invalid "+K+" `"+k+"` of type "+("`"+J+"` supplied to `"+q+"`, expected an array."))}for(var _=0;_<H.length;_++){var re=D(H,_,q,K,k+"["+_+"]",a);if(re instanceof Error)return re}return null}return E(R)}function Y(){function D(R,V,z,q,K){var k=R[V];if(!c(k)){var H=N(k);return new x("Invalid "+q+" `"+K+"` of type "+("`"+H+"` supplied to `"+z+"`, expected a single ReactElement."))}return null}return E(D)}function j(){function D(R,V,z,q,K){var k=R[V];if(!i.isValidElementType(k)){var H=N(k);return new x("Invalid "+q+" `"+K+"` of type "+("`"+H+"` supplied to `"+z+"`, expected a single ReactElement type."))}return null}return E(D)}function L(D){function R(V,z,q,K,k){if(!(V[z]instanceof D)){var H=D.name||h,J=ne(V[z]);return new x("Invalid "+K+" `"+k+"` of type "+("`"+J+"` supplied to `"+q+"`, expected ")+("instance of `"+H+"`."))}return null}return E(R)}function ae(D){if(!Array.isArray(D))return o.env.NODE_ENV!=="production"&&(arguments.length>1?p("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):p("Invalid argument supplied to oneOf, expected an array.")),u;function R(V,z,q,K,k){for(var H=V[z],J=0;J<D.length;J++)if(w(H,D[J]))return null;var _=JSON.stringify(D,function(he,fe){var Ee=X(fe);return Ee==="symbol"?String(fe):fe});return new x("Invalid "+K+" `"+k+"` of value `"+String(H)+"` "+("supplied to `"+q+"`, expected one of "+_+"."))}return E(R)}function le(D){function R(V,z,q,K,k){if(typeof D!="function")return new x("Property `"+k+"` of component `"+q+"` has invalid PropType notation inside objectOf.");var H=V[z],J=N(H);if(J!=="object")return new x("Invalid "+K+" `"+k+"` of type "+("`"+J+"` supplied to `"+q+"`, expected an object."));for(var _ in H)if(d(H,_)){var re=D(H,_,q,K,k+"."+_,a);if(re instanceof Error)return re}return null}return E(R)}function B(D){if(!Array.isArray(D))return o.env.NODE_ENV!=="production"&&p("Invalid argument supplied to oneOfType, expected an instance of array."),u;for(var R=0;R<D.length;R++){var V=D[R];if(typeof V!="function")return p("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Z(V)+" at index "+R+"."),u}function z(q,K,k,H,J){for(var _=0;_<D.length;_++){var re=D[_];if(re(q,K,k,H,J,a)==null)return null}return new x("Invalid "+H+" `"+J+"` supplied to "+("`"+k+"`."))}return E(z)}function T(){function D(R,V,z,q,K){return A(R[V])?null:new x("Invalid "+q+" `"+K+"` supplied to "+("`"+z+"`, expected a ReactNode."))}return E(D)}function I(D){function R(V,z,q,K,k){var H=V[z],J=N(H);if(J!=="object")return new x("Invalid "+K+" `"+k+"` of type `"+J+"` "+("supplied to `"+q+"`, expected `object`."));for(var _ in D){var re=D[_];if(re){var he=re(H,_,q,K,k+"."+_,a);if(he)return he}}return null}return E(R)}function $(D){function R(V,z,q,K,k){var H=V[z],J=N(H);if(J!=="object")return new x("Invalid "+K+" `"+k+"` of type `"+J+"` "+("supplied to `"+q+"`, expected `object`."));var _=l({},V[z],D);for(var re in _){var he=D[re];if(!he)return new x("Invalid "+K+" `"+k+"` key `"+re+"` supplied to `"+q+"`.\nBad object: "+JSON.stringify(V[z],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(D),null,"  "));var fe=he(H,re,q,K,k+"."+re,a);if(fe)return fe}return null}return E(R)}function A(D){switch(typeof D){case"number":case"string":case"undefined":return!0;case"boolean":return!D;case"object":if(Array.isArray(D))return D.every(A);if(D===null||c(D))return!0;var R=y(D);if(R){var V=R.call(D),z;if(R!==D.entries){for(;!(z=V.next()).done;)if(!A(z.value))return!1}else for(;!(z=V.next()).done;){var q=z.value;if(q&&!A(q[1]))return!1}}else return!1;return!0;default:return!1}}function G(D,R){return D==="symbol"?!0:R?R["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&R instanceof Symbol:!1}function N(D){var R=typeof D;return Array.isArray(D)?"array":D instanceof RegExp?"object":G(R,D)?"symbol":R}function X(D){if(typeof D>"u"||D===null)return""+D;var R=N(D);if(R==="object"){if(D instanceof Date)return"date";if(D instanceof RegExp)return"regexp"}return R}function Z(D){var R=X(D);switch(R){case"array":case"object":return"an "+R;case"boolean":case"date":case"regexp":return"a "+R;default:return R}}function ne(D){return!D.constructor||!D.constructor.name?h:D.constructor.name}return b.checkPropTypes=s,b.resetWarningCache=s.resetWarningCache,b.PropTypes=b,b}}).call(t,n(0))},function(r,t,n){(function(o){/** @license React v16.9.0
* react-is.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/o.env.NODE_ENV!=="production"&&function(){Object.defineProperty(t,"__esModule",{value:!0});var i=typeof Symbol=="function"&&Symbol.for,l=i?Symbol.for("react.element"):60103,a=i?Symbol.for("react.portal"):60106,s=i?Symbol.for("react.fragment"):60107,d=i?Symbol.for("react.strict_mode"):60108,p=i?Symbol.for("react.profiler"):60114,u=i?Symbol.for("react.provider"):60109,c=i?Symbol.for("react.context"):60110,f=i?Symbol.for("react.async_mode"):60111,v=i?Symbol.for("react.concurrent_mode"):60111,m=i?Symbol.for("react.forward_ref"):60112,y=i?Symbol.for("react.suspense"):60113,h=i?Symbol.for("react.suspense_list"):60120,b=i?Symbol.for("react.memo"):60115,w=i?Symbol.for("react.lazy"):60116,x=i?Symbol.for("react.fundamental"):60117,E=i?Symbol.for("react.responder"):60118;function M(F){return typeof F=="string"||typeof F=="function"||F===s||F===v||F===p||F===d||F===y||F===h||typeof F=="object"&&F!==null&&(F.$$typeof===w||F.$$typeof===b||F.$$typeof===u||F.$$typeof===c||F.$$typeof===m||F.$$typeof===x||F.$$typeof===E)}var S=function(){};{var Q=function(F){for(var pe=arguments.length,ve=Array(pe>1?pe-1:0),Pe=1;Pe<pe;Pe++)ve[Pe-1]=arguments[Pe];var Ge=0,Jt="Warning: "+F.replace(/%s/g,function(){return ve[Ge++]});typeof console<"u"&&console.warn(Jt);try{throw new Error(Jt)}catch{}};S=function(F,pe){if(pe===void 0)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!F){for(var ve=arguments.length,Pe=Array(ve>2?ve-2:0),Ge=2;Ge<ve;Ge++)Pe[Ge-2]=arguments[Ge];Q.apply(void 0,[pe].concat(Pe))}}}var Y=S;function j(F){if(typeof F=="object"&&F!==null){var pe=F.$$typeof;switch(pe){case l:var ve=F.type;switch(ve){case f:case v:case s:case p:case d:case y:return ve;default:var Pe=ve&&ve.$$typeof;switch(Pe){case c:case m:case u:return Pe;default:return pe}}case w:case b:case a:return pe}}}var L=f,ae=v,le=c,B=u,T=l,I=m,$=s,A=w,G=b,N=a,X=p,Z=d,ne=y,D=!1;function R(F){return D||(D=!0,Y(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),V(F)||j(F)===f}function V(F){return j(F)===v}function z(F){return j(F)===c}function q(F){return j(F)===u}function K(F){return typeof F=="object"&&F!==null&&F.$$typeof===l}function k(F){return j(F)===m}function H(F){return j(F)===s}function J(F){return j(F)===w}function _(F){return j(F)===b}function re(F){return j(F)===a}function he(F){return j(F)===p}function fe(F){return j(F)===d}function Ee(F){return j(F)===y}t.typeOf=j,t.AsyncMode=L,t.ConcurrentMode=ae,t.ContextConsumer=le,t.ContextProvider=B,t.Element=T,t.ForwardRef=I,t.Fragment=$,t.Lazy=A,t.Memo=G,t.Portal=N,t.Profiler=X,t.StrictMode=Z,t.Suspense=ne,t.isValidElementType=M,t.isAsyncMode=R,t.isConcurrentMode=V,t.isContextConsumer=z,t.isContextProvider=q,t.isElement=K,t.isForwardRef=k,t.isFragment=H,t.isLazy=J,t.isMemo=_,t.isPortal=re,t.isProfiler=he,t.isStrictMode=fe,t.isSuspense=Ee}()}).call(t,n(0))},function(r,t,n){/** @license React v16.9.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(t,"__esModule",{value:!0});var o=typeof Symbol=="function"&&Symbol.for,i=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,d=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,u=o?Symbol.for("react.context"):60110,c=o?Symbol.for("react.async_mode"):60111,f=o?Symbol.for("react.concurrent_mode"):60111,v=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.suspense_list"):60120,h=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,w=o?Symbol.for("react.fundamental"):60117,x=o?Symbol.for("react.responder"):60118;function E(S){if(typeof S=="object"&&S!==null){var Q=S.$$typeof;switch(Q){case i:switch(S=S.type,S){case c:case f:case a:case d:case s:case m:return S;default:switch(S=S&&S.$$typeof,S){case u:case v:case p:return S;default:return Q}}case b:case h:case l:return Q}}}function M(S){return E(S)===f}t.typeOf=E,t.AsyncMode=c,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=p,t.Element=i,t.ForwardRef=v,t.Fragment=a,t.Lazy=b,t.Memo=h,t.Portal=l,t.Profiler=d,t.StrictMode=s,t.Suspense=m,t.isValidElementType=function(S){return typeof S=="string"||typeof S=="function"||S===a||S===f||S===d||S===s||S===m||S===y||typeof S=="object"&&S!==null&&(S.$$typeof===b||S.$$typeof===h||S.$$typeof===p||S.$$typeof===u||S.$$typeof===v||S.$$typeof===w||S.$$typeof===x)},t.isAsyncMode=function(S){return M(S)||E(S)===c},t.isConcurrentMode=M,t.isContextConsumer=function(S){return E(S)===u},t.isContextProvider=function(S){return E(S)===p},t.isElement=function(S){return typeof S=="object"&&S!==null&&S.$$typeof===i},t.isForwardRef=function(S){return E(S)===v},t.isFragment=function(S){return E(S)===a},t.isLazy=function(S){return E(S)===b},t.isMemo=function(S){return E(S)===h},t.isPortal=function(S){return E(S)===l},t.isProfiler=function(S){return E(S)===d},t.isStrictMode=function(S){return E(S)===s},t.isSuspense=function(S){return E(S)===m}}])})(_n);var Ji=_n.exports;const Xi=Wn(Ji),Zi=C.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-left: auto;
`,ot=C.li`
  display: flex;
  align-items: flex-end;
`,it=C.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`,at=C.svg`
  stroke: ${e=>e.theme.colors.mainPageTextColor};
  transition: all var(--primary-transition);

  &:hover {
    stroke: ${e=>e.theme.colors.accentTextColor};
  }
`,Qi=C.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(46, 46, 46, 0.7);
`,_i=C.div`
  position: absolute;
  z-index: 20px;
  width: 335px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  border-radius: 8px;
  background-color: ${e=>e.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`,ea=C.div`
  padding: 24px;
  position: relative;
`,ra=C(sr)`
  font-size: 24px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;

  transition: all var(--primary-transition);

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,ta=C.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 24px;
`,na=C.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;

  z-index: 250;
`,oa=C(Ye)`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  width: 100%;
  height: 49px;
  color: ${e=>e.theme.colors.burgerColor};
  background: ${e=>e.theme.colors.needHelpBgColor};
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  padding: 14px 18px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.burgerColor};
    opacity: 0.4;
  }
`,ia=C(Ye)`
  resize: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  width: 100%;
  height: 154px;
  color: ${e=>e.theme.colors.burgerColor};
  background: ${e=>e.theme.colors.needHelpBgColor};
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  padding: 14px 18px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.burgerColor};
    opacity: 0.4;
  }
`,aa=C.div`
  width: 80px;
  height: 36px;
  margin-bottom: 18px;
`,la=C.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,sa=C.div`
  display: flex;
  gap: 8px;
`,xr=C.label`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`,ua=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},wr=C(Ye)`
  appearance: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: ${ua};

  &:checked {
    border: 3px double white;
  }
`,ca=C.div`
  margin-bottom: 45px;
`,da=C.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,pa=C.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.accentTextColor};
`,fa=zn().shape({title:jr().required(),description:jr()}),eo=({cardInfo:e,onClose:r})=>{const{_id:t,titleCard:n,description:o,priority:i,deadline:l}=e,{board:a}=Te(Le),[s,d]=O.useState(i),p=We(),u=f=>{d(f.target.value)},c=async(f,{resetForm:v})=>{const m={titleCard:f.title,description:f.description,priority:s,deadline:"2024-01-02"};await p(Ai({_id:t,newCardData:m})),p(Oe(a._id)),Ae.success("You have successfully edited the card!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"}),v(),r()};return g.jsx(qn,{initialValues:{title:n,description:o},validationSchema:fa,onSubmit:c,children:g.jsxs(Vn,{autoComplete:"off",children:[g.jsxs(na,{children:[g.jsx("label",{htmlFor:"title",children:g.jsx(oa,{type:"text",name:"title",placeholder:"Title",autoFocus:!0,required:!0})}),g.jsx("label",{htmlFor:"description",children:g.jsx(ia,{component:"textarea",name:"description",rows:"5",cols:"33",placeholder:"Description"})})]}),g.jsxs(aa,{children:[g.jsx(la,{children:"Label color"}),g.jsxs(sa,{role:"group",children:[g.jsx(xr,{htmlFor:"low",children:g.jsx(wr,{type:"radio",name:"priority",value:"low",onChange:u,checked:s==="low"})}),g.jsx(xr,{htmlFor:"medium",children:g.jsx(wr,{type:"radio",name:"priority",value:"medium",onChange:u,checked:s==="medium"})}),g.jsx(xr,{htmlFor:"high",children:g.jsx(wr,{type:"radio",name:"priority",value:"high",onChange:u,checked:s==="high"})}),g.jsx(xr,{htmlFor:"without",children:g.jsx(wr,{type:"radio",name:"priority",value:"without",onChange:u,checked:s==="without"})})]})]}),g.jsxs(ca,{children:[g.jsx(da,{children:"Deadline"}),g.jsx(pa,{children:"Today, 8"})]}),g.jsx(Yr,{btnText:"Edit"})]})})};eo.propTypes={cardInfo:te.object,onClose:te.func};const ro=({onClose:e,cardInfo:r})=>{O.useEffect(()=>{const n=o=>{o.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[e]);const t=n=>{n.target===n.currentTarget&&e()};return g.jsx(Qi,{onClick:t,children:g.jsx(_i,{children:g.jsxs(ea,{children:[g.jsx(ra,{onClick:e}),g.jsx(ta,{children:"Edit card"}),g.jsx(eo,{onClose:e,cardInfo:r})]})})})};ro.propTypes={onClose:te.func,cardInfo:te.object};function va(e){return Un({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]},{tag:"path",attr:{d:"M4 2C2.8 3.7 2 5.7 2 8"},child:[]},{tag:"path",attr:{d:"M22 8c0-2.3-.8-4.3-2-6"},child:[]}]})(e)}const ga=C(va)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.accentTextColor};

  &:hover {
    cursor: pointer;
  }
`,ma=C.li`
  display: flex;
  align-items: flex-end;
`;function ha(){const[e,r]=O.useState();return O.useEffect(()=>{const t="2024-02-09";r((()=>{const o=new Date,a=(new Date(t)-o)/(1e3*60*60);return a<24&&a>0})())},[]),e&&g.jsx(ma,{children:g.jsx(ga,{})},"bell")}const ba=C.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(46, 46, 46, 0.7);
`,ya=C.div`
  position: absolute;
  z-index: 11;
  width: 135px;
  padding: 18px;
  border-radius: 8px;
  background-color: ${e=>e.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
`,xa=C.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`,wa=C.li``,Ca=C.button`
  width: 100%;
  display: flex;
  justify-content: space-between;

  background-color: transparent;
  border: none;
  cursor: pointer;

  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  transition: all var(--primary-transition);

  color: ${e=>e.theme.colors.mainPageTextColor};
  stroke: ${e=>e.theme.colors.mainPageTextColor};

  &:hover {
    color: ${e=>e.theme.colors.accentTextColor};
    stroke: ${e=>e.theme.colors.accentTextColor};
  }
`,to=({onClose:e,currentColumn:r,cardId:t})=>{const{board:n,columns:o}=Te(Le),i=We(),l=o.filter(s=>s.titleColumn!==r);function a(s){i(Gn({cardId:t,newColumnId:s})).then(()=>i(Oe(n._id))).catch(d=>{console.err("Error handling column:",d)}).finally(e)}return g.jsx(ba,{id:"backdrop",onClick:s=>{s.target.id==="backdrop"&&e()},children:g.jsx(ya,{children:g.jsx(xa,{children:l.map(s=>g.jsx(wa,{children:g.jsxs(Ca,{onClick:()=>a(s._id),children:[s.titleColumn,g.jsx("svg",{width:"16",height:"16",children:g.jsx("use",{href:`${Ue}#icon-arrow-circle-dark`})})]})},s._id))})})})};to.propTypes={columnsInfo:te.array,currentColumn:te.string,onClose:te.func};const no=({currentColumn:e,cardInfo:r,columnsInfo:t})=>{const{_id:n}=r,[o,i]=O.useState(!1),[l,a]=O.useState(!1),{board:s}=Te(Le),d=We(),p=()=>{i(!o)};function u(){a(f=>!f)}const c=async()=>{await d(Ri(n)),d(Oe(s._id)),Ae.success("You have successfully deleted the card!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})};return g.jsxs(g.Fragment,{children:[g.jsxs(Zi,{children:[g.jsx(ha,{}),g.jsx(ot,{children:g.jsx(it,{type:"button",onClick:u,children:g.jsx(at,{width:"16",height:"16",children:g.jsx("use",{href:`${Ue}#icon-arrow-circle-dark`})})})},"move"),g.jsx(ot,{children:g.jsx(it,{type:"button",onClick:p,children:g.jsx(at,{width:"16",height:"16",children:g.jsx("use",{href:`${Ue}#icon-pencil-dark`})})})},"edit"),g.jsx(ot,{children:g.jsx(it,{type:"button",onClick:c,children:g.jsx(at,{width:"16",height:"16",children:g.jsx("use",{href:`${Ue}#icon-trash-dark`})})})},"delete")]}),o&&g.jsx(ro,{onClose:p,cardInfo:r}),l&&g.jsx(to,{columnsInfo:t,currentColumn:e,onClose:a,cardId:n})]})};no.propTypes={currentColumn:te.string,cardInfo:te.object,columnsInfo:te.array};const oo=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},Da=C.div`
  width: 335px;
  border-radius: 8px;
  background: ${oo};
  overflow: hidden;
  list-style: none;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 260px;
  }
`,Sa=C.div`
  width: 330px;
  padding: 14px 20px;
  background: ${e=>e.theme.colors.themeWrapper};
  margin-left: auto;
  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 255px;
  }
`,Ia=C.h2`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 12px;
`,Ea=C.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  height: 34px;
  overflow: hidden;
  margin-bottom: 18px;
`,Pa=C.div`
  max-width: 290px;
  height: 0.5px;
  background-color: ${e=>e.theme.colors.priorityColorWithout};
  margin-bottom: 16px;
`,Ta=C.div`
  display: flex;
  gap: 14px;
`,Oa=C.div`
  text-align: left;
  width: 56px;
`,en=C.div`
  font-weight: 400;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Aa=C.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 4px;
`,Ra=C.div`
  border-radius: 100%;
  width: 12px;
  height: 12px;
  background: ${oo};
`,Ma=C.span`
  text-transform: capitalize;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,Ba=C.div`
  width: 53px;
`,$a=C.div`
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,io=({cardInfo:e,currentColumn:r})=>{const{titleCard:t,description:n,priority:o,deadline:i}=e,[l,a]=O.useState("");return O.useEffect(()=>{const s=Qn(i),d=`0${s.$D}/0${s.$M}/${s.$y}`;a(d)},[i]),g.jsx(Da,{value:o,children:g.jsxs(Sa,{children:[g.jsx(Ia,{children:t}),g.jsx(Ea,{children:g.jsx(Xi,{charLimit:90,children:n+"..."})}),g.jsx(Pa,{}),g.jsxs(Ta,{children:[g.jsxs(Oa,{children:[g.jsx(en,{children:"Priority"}),g.jsxs(Aa,{children:[g.jsx(Ra,{value:o}),g.jsx(Ma,{children:o})]})]}),g.jsxs(Ba,{children:[g.jsx(en,{children:"Deadline"}),g.jsx($a,{children:l})]}),g.jsx(no,{currentColumn:r,cardInfo:e})]})]})})};io.propTypes={cardInfo:te.object,currentColumn:te.string,columnsInfo:te.array};const La=C.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 480px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding-right: 8px;
  margin-bottom: 14px;

  &::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.colors.cardListScrollThumb};
    border-radius: 12px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: transparent;
  }

  ${e=>(e==null?void 0:e.$scrollable)&&Hn`
      &::-webkit-scrollbar-thumb {
        background-color: ${r=>r.theme.colors.cardListScrollThumb};
      }
      &::-webkit-scrollbar-track {
        background-color: ${r=>r.theme.colors.cardListScrollBar};
      }
    `}
`;function tr(e){"@babel/helpers - typeof";return tr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},tr(e)}function Na(e,r){if(tr(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(tr(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function ja(e){var r=Na(e,"string");return tr(r)=="symbol"?r:String(r)}function ka(e,r,t){return r=ja(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function rn(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function tn(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?rn(Object(t),!0).forEach(function(n){ka(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):rn(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function me(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var nn=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),lt=function(){return Math.random().toString(36).substring(7).split("").join(".")},on={INIT:"@@redux/INIT"+lt(),REPLACE:"@@redux/REPLACE"+lt(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+lt()}};function Fa(e){if(typeof e!="object"||e===null)return!1;for(var r=e;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(e)===r}function ao(e,r,t){var n;if(typeof r=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(me(0));if(typeof r=="function"&&typeof t>"u"&&(t=r,r=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(me(1));return t(ao)(e,r)}if(typeof e!="function")throw new Error(me(2));var o=e,i=r,l=[],a=l,s=!1;function d(){a===l&&(a=l.slice())}function p(){if(s)throw new Error(me(3));return i}function u(m){if(typeof m!="function")throw new Error(me(4));if(s)throw new Error(me(5));var y=!0;return d(),a.push(m),function(){if(y){if(s)throw new Error(me(6));y=!1,d();var b=a.indexOf(m);a.splice(b,1),l=null}}}function c(m){if(!Fa(m))throw new Error(me(7));if(typeof m.type>"u")throw new Error(me(8));if(s)throw new Error(me(9));try{s=!0,i=o(i,m)}finally{s=!1}for(var y=l=a,h=0;h<y.length;h++){var b=y[h];b()}return m}function f(m){if(typeof m!="function")throw new Error(me(10));o=m,c({type:on.REPLACE})}function v(){var m,y=u;return m={subscribe:function(b){if(typeof b!="object"||b===null)throw new Error(me(11));function w(){b.next&&b.next(p())}w();var x=y(w);return{unsubscribe:x}}},m[nn]=function(){return this},m}return c({type:on.INIT}),n={dispatch:c,subscribe:u,getState:p,replaceReducer:f},n[nn]=v,n}function an(e,r){return function(){return r(e.apply(this,arguments))}}function ln(e,r){if(typeof e=="function")return an(e,r);if(typeof e!="object"||e===null)throw new Error(me(16));var t={};for(var n in e){var o=e[n];typeof o=="function"&&(t[n]=an(o,r))}return t}function lo(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.length===0?function(n){return n}:r.length===1?r[0]:r.reduce(function(n,o){return function(){return n(o.apply(void 0,arguments))}})}function Wa(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){return function(){var o=n.apply(void 0,arguments),i=function(){throw new Error(me(15))},l={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},a=r.map(function(s){return s(l)});return i=lo.apply(void 0,a)(o.dispatch),tn(tn({},o),{},{dispatch:i})}}}var so=ie.createContext(null);function Ga(e){e()}var uo=Ga,Ha=function(r){return uo=r},Ua=function(){return uo};function za(){var e=Ua(),r=null,t=null;return{clear:function(){r=null,t=null},notify:function(){e(function(){for(var o=r;o;)o.callback(),o=o.next})},get:function(){for(var o=[],i=r;i;)o.push(i),i=i.next;return o},subscribe:function(o){var i=!0,l=t={callback:o,next:null,prev:t};return l.prev?l.prev.next=l:r=l,function(){!i||r===null||(i=!1,l.next?l.next.prev=l.prev:t=l.prev,l.prev?l.prev.next=l.next:r=l.next)}}}}var sn={notify:function(){},get:function(){return[]}};function co(e,r){var t,n=sn;function o(u){return s(),n.subscribe(u)}function i(){n.notify()}function l(){p.onStateChange&&p.onStateChange()}function a(){return!!t}function s(){t||(t=r?r.addNestedSub(l):e.subscribe(l),n=za())}function d(){t&&(t(),t=void 0,n.clear(),n=sn)}var p={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:l,isSubscribed:a,trySubscribe:s,tryUnsubscribe:d,getListeners:function(){return n}};return p}var po=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?O.useLayoutEffect:O.useEffect;function qa(e){var r=e.store,t=e.context,n=e.children,o=O.useMemo(function(){var a=co(r);return{store:r,subscription:a}},[r]),i=O.useMemo(function(){return r.getState()},[r]);po(function(){var a=o.subscription;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),i!==r.getState()&&a.notifyNestedSubs(),function(){a.tryUnsubscribe(),a.onStateChange=null}},[o,i]);var l=t||so;return ie.createElement(l.Provider,{value:o},n)}var fo={exports:{}},oe={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kr=60103,Jr=60106,ur=60107,cr=60108,dr=60114,pr=60109,fr=60110,vr=60112,gr=60113,It=60120,mr=60115,hr=60116,vo=60121,go=60122,mo=60117,ho=60129,bo=60131;if(typeof Symbol=="function"&&Symbol.for){var ce=Symbol.for;Kr=ce("react.element"),Jr=ce("react.portal"),ur=ce("react.fragment"),cr=ce("react.strict_mode"),dr=ce("react.profiler"),pr=ce("react.provider"),fr=ce("react.context"),vr=ce("react.forward_ref"),gr=ce("react.suspense"),It=ce("react.suspense_list"),mr=ce("react.memo"),hr=ce("react.lazy"),vo=ce("react.block"),go=ce("react.server.block"),mo=ce("react.fundamental"),ho=ce("react.debug_trace_mode"),bo=ce("react.legacy_hidden")}function Ie(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case Kr:switch(e=e.type,e){case ur:case dr:case cr:case gr:case It:return e;default:switch(e=e&&e.$$typeof,e){case fr:case vr:case hr:case mr:case pr:return e;default:return r}}case Jr:return r}}}var Va=pr,Ya=Kr,Ka=vr,Ja=ur,Xa=hr,Za=mr,Qa=Jr,_a=dr,el=cr,rl=gr;oe.ContextConsumer=fr;oe.ContextProvider=Va;oe.Element=Ya;oe.ForwardRef=Ka;oe.Fragment=Ja;oe.Lazy=Xa;oe.Memo=Za;oe.Portal=Qa;oe.Profiler=_a;oe.StrictMode=el;oe.Suspense=rl;oe.isAsyncMode=function(){return!1};oe.isConcurrentMode=function(){return!1};oe.isContextConsumer=function(e){return Ie(e)===fr};oe.isContextProvider=function(e){return Ie(e)===pr};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kr};oe.isForwardRef=function(e){return Ie(e)===vr};oe.isFragment=function(e){return Ie(e)===ur};oe.isLazy=function(e){return Ie(e)===hr};oe.isMemo=function(e){return Ie(e)===mr};oe.isPortal=function(e){return Ie(e)===Jr};oe.isProfiler=function(e){return Ie(e)===dr};oe.isStrictMode=function(e){return Ie(e)===cr};oe.isSuspense=function(e){return Ie(e)===gr};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ur||e===dr||e===ho||e===cr||e===gr||e===It||e===bo||typeof e=="object"&&e!==null&&(e.$$typeof===hr||e.$$typeof===mr||e.$$typeof===pr||e.$$typeof===fr||e.$$typeof===vr||e.$$typeof===mo||e.$$typeof===vo||e[0]===go)};oe.typeOf=Ie;fo.exports=oe;var tl=fo.exports,nl=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],ol=["reactReduxForwardedRef"],il=[],al=[null,null];function ll(e,r){var t=e[1];return[r.payload,t+1]}function un(e,r,t){po(function(){return e.apply(void 0,r)},t)}function sl(e,r,t,n,o,i,l){e.current=n,r.current=o,t.current=!1,i.current&&(i.current=null,l())}function ul(e,r,t,n,o,i,l,a,s,d){if(e){var p=!1,u=null,c=function(){if(!p){var m=r.getState(),y,h;try{y=n(m,o.current)}catch(b){h=b,u=b}h||(u=null),y===i.current?l.current||s():(i.current=y,a.current=y,l.current=!0,d({type:"STORE_UPDATED",payload:{error:h}}))}};t.onStateChange=c,t.trySubscribe(),c();var f=function(){if(p=!0,t.tryUnsubscribe(),t.onStateChange=null,u)throw u};return f}}var cl=function(){return[null,0]};function dl(e,r){r===void 0&&(r={});var t=r,n=t.getDisplayName,o=n===void 0?function(w){return"ConnectAdvanced("+w+")"}:n,i=t.methodName,l=i===void 0?"connectAdvanced":i,a=t.renderCountProp,s=a===void 0?void 0:a,d=t.shouldHandleStateChanges,p=d===void 0?!0:d,u=t.storeKey,c=u===void 0?"store":u;t.withRef;var f=t.forwardRef,v=f===void 0?!1:f,m=t.context,y=m===void 0?so:m,h=kr(t,nl),b=y;return function(x){var E=x.displayName||x.name||"Component",M=o(E),S=U({},h,{getDisplayName:o,methodName:l,renderCountProp:s,shouldHandleStateChanges:p,storeKey:c,displayName:M,wrappedComponentName:E,WrappedComponent:x}),Q=h.pure;function Y(B){return e(B.dispatch,S)}var j=Q?O.useMemo:function(B){return B()};function L(B){var T=O.useMemo(function(){var pe=B.reactReduxForwardedRef,ve=kr(B,ol);return[B.context,pe,ve]},[B]),I=T[0],$=T[1],A=T[2],G=O.useMemo(function(){return I&&I.Consumer&&tl.isContextConsumer(ie.createElement(I.Consumer,null))?I:b},[I,b]),N=O.useContext(G),X=!!B.store&&!!B.store.getState&&!!B.store.dispatch;N&&N.store;var Z=X?B.store:N.store,ne=O.useMemo(function(){return Y(Z)},[Z]),D=O.useMemo(function(){if(!p)return al;var pe=co(Z,X?null:N.subscription),ve=pe.notifyNestedSubs.bind(pe);return[pe,ve]},[Z,X,N]),R=D[0],V=D[1],z=O.useMemo(function(){return X?N:U({},N,{subscription:R})},[X,N,R]),q=O.useReducer(ll,il,cl),K=q[0],k=K[0],H=q[1];if(k&&k.error)throw k.error;var J=O.useRef(),_=O.useRef(A),re=O.useRef(),he=O.useRef(!1),fe=j(function(){return re.current&&A===_.current?re.current:ne(Z.getState(),A)},[Z,k,A]);un(sl,[_,J,he,A,fe,re,V]),un(ul,[p,Z,R,ne,_,J,he,re,V,H],[Z,R,ne]);var Ee=O.useMemo(function(){return ie.createElement(x,U({},fe,{ref:$}))},[$,x,fe]),F=O.useMemo(function(){return p?ie.createElement(G.Provider,{value:z},Ee):Ee},[G,Ee,z]);return F}var ae=Q?ie.memo(L):L;if(ae.WrappedComponent=x,ae.displayName=L.displayName=M,v){var le=ie.forwardRef(function(T,I){return ie.createElement(ae,U({},T,{reactReduxForwardedRef:I}))});return le.displayName=M,le.WrappedComponent=x,Xt(le,x)}return Xt(ae,x)}}function cn(e,r){return e===r?e!==0||r!==0||1/e===1/r:e!==e&&r!==r}function st(e,r){if(cn(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(var o=0;o<t.length;o++)if(!Object.prototype.hasOwnProperty.call(r,t[o])||!cn(e[t[o]],r[t[o]]))return!1;return!0}function pl(e,r){var t={},n=function(l){var a=e[l];typeof a=="function"&&(t[l]=function(){return r(a.apply(void 0,arguments))})};for(var o in e)n(o);return t}function Et(e){return function(t,n){var o=e(t,n);function i(){return o}return i.dependsOnOwnProps=!1,i}}function dn(e){return e.dependsOnOwnProps!==null&&e.dependsOnOwnProps!==void 0?!!e.dependsOnOwnProps:e.length!==1}function yo(e,r){return function(n,o){o.displayName;var i=function(a,s){return i.dependsOnOwnProps?i.mapToProps(a,s):i.mapToProps(a)};return i.dependsOnOwnProps=!0,i.mapToProps=function(a,s){i.mapToProps=e,i.dependsOnOwnProps=dn(e);var d=i(a,s);return typeof d=="function"&&(i.mapToProps=d,i.dependsOnOwnProps=dn(d),d=i(a,s)),d},i}}function fl(e){return typeof e=="function"?yo(e):void 0}function vl(e){return e?void 0:Et(function(r){return{dispatch:r}})}function gl(e){return e&&typeof e=="object"?Et(function(r){return pl(e,r)}):void 0}const ml=[fl,vl,gl];function hl(e){return typeof e=="function"?yo(e):void 0}function bl(e){return e?void 0:Et(function(){return{}})}const yl=[hl,bl];function xl(e,r,t){return U({},t,e,r)}function wl(e){return function(t,n){n.displayName;var o=n.pure,i=n.areMergedPropsEqual,l=!1,a;return function(d,p,u){var c=e(d,p,u);return l?(!o||!i(c,a))&&(a=c):(l=!0,a=c),a}}}function Cl(e){return typeof e=="function"?wl(e):void 0}function Dl(e){return e?void 0:function(){return xl}}const Sl=[Cl,Dl];var Il=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function El(e,r,t,n){return function(i,l){return t(e(i,l),r(n,l),l)}}function Pl(e,r,t,n,o){var i=o.areStatesEqual,l=o.areOwnPropsEqual,a=o.areStatePropsEqual,s=!1,d,p,u,c,f;function v(w,x){return d=w,p=x,u=e(d,p),c=r(n,p),f=t(u,c,p),s=!0,f}function m(){return u=e(d,p),r.dependsOnOwnProps&&(c=r(n,p)),f=t(u,c,p),f}function y(){return e.dependsOnOwnProps&&(u=e(d,p)),r.dependsOnOwnProps&&(c=r(n,p)),f=t(u,c,p),f}function h(){var w=e(d,p),x=!a(w,u);return u=w,x&&(f=t(u,c,p)),f}function b(w,x){var E=!l(x,p),M=!i(w,d,x,p);return d=w,p=x,E&&M?m():E?y():M?h():f}return function(x,E){return s?b(x,E):v(x,E)}}function Tl(e,r){var t=r.initMapStateToProps,n=r.initMapDispatchToProps,o=r.initMergeProps,i=kr(r,Il),l=t(e,i),a=n(e,i),s=o(e,i),d=i.pure?Pl:El;return d(l,a,s,e,i)}var Ol=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function ut(e,r,t){for(var n=r.length-1;n>=0;n--){var o=r[n](e);if(o)return o}return function(i,l){throw new Error("Invalid value of type "+typeof e+" for "+t+" argument when connecting component "+l.wrappedComponentName+".")}}function Al(e,r){return e===r}function Rl(e){var r=e===void 0?{}:e,t=r.connectHOC,n=t===void 0?dl:t,o=r.mapStateToPropsFactories,i=o===void 0?yl:o,l=r.mapDispatchToPropsFactories,a=l===void 0?ml:l,s=r.mergePropsFactories,d=s===void 0?Sl:s,p=r.selectorFactory,u=p===void 0?Tl:p;return function(f,v,m,y){y===void 0&&(y={});var h=y,b=h.pure,w=b===void 0?!0:b,x=h.areStatesEqual,E=x===void 0?Al:x,M=h.areOwnPropsEqual,S=M===void 0?st:M,Q=h.areStatePropsEqual,Y=Q===void 0?st:Q,j=h.areMergedPropsEqual,L=j===void 0?st:j,ae=kr(h,Ol),le=ut(f,i,"mapStateToProps"),B=ut(v,a,"mapDispatchToProps"),T=ut(m,d,"mergeProps");return n(u,U({methodName:"connect",getDisplayName:function($){return"Connect("+$+")"},shouldHandleStateChanges:!!f,initMapStateToProps:le,initMapDispatchToProps:B,initMergeProps:T,pure:w,areStatesEqual:E,areOwnPropsEqual:S,areStatePropsEqual:Y,areMergedPropsEqual:L},ae))}}const xo=Rl();Ha(Mi.unstable_batchedUpdates);function Ml(e,r){if(e.length!==r.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}function wo(e,r){var t=O.useState(function(){return{inputs:r,result:e()}})[0],n=O.useRef(!0),o=O.useRef(t),i=n.current||!!(r&&o.current.inputs&&Ml(r,o.current.inputs)),l=i?o.current:{inputs:r,result:e()};return O.useEffect(function(){n.current=!1,o.current=l},[l]),l.result}function Bl(e,r){return wo(function(){return e},r)}var ee=wo,W=Bl,$l="Invariant failed";function Ll(e,r){if(!e)throw new Error($l)}var Se=function(r){var t=r.top,n=r.right,o=r.bottom,i=r.left,l=n-i,a=o-t,s={top:t,right:n,bottom:o,left:i,width:l,height:a,x:i,y:t,center:{x:(n+i)/2,y:(o+t)/2}};return s},Pt=function(r,t){return{top:r.top-t.top,left:r.left-t.left,bottom:r.bottom+t.bottom,right:r.right+t.right}},pn=function(r,t){return{top:r.top+t.top,left:r.left+t.left,bottom:r.bottom-t.bottom,right:r.right-t.right}},Nl=function(r,t){return{top:r.top+t.y,left:r.left+t.x,bottom:r.bottom+t.y,right:r.right+t.x}},ct={top:0,right:0,bottom:0,left:0},Tt=function(r){var t=r.borderBox,n=r.margin,o=n===void 0?ct:n,i=r.border,l=i===void 0?ct:i,a=r.padding,s=a===void 0?ct:a,d=Se(Pt(t,o)),p=Se(pn(t,l)),u=Se(pn(p,s));return{marginBox:d,borderBox:Se(t),paddingBox:p,contentBox:u,margin:o,border:l,padding:s}},we=function(r){var t=r.slice(0,-2),n=r.slice(-2);if(n!=="px")return 0;var o=Number(t);return isNaN(o)&&Ll(!1),o},jl=function(){return{x:window.pageXOffset,y:window.pageYOffset}},Fr=function(r,t){var n=r.borderBox,o=r.border,i=r.margin,l=r.padding,a=Nl(n,t);return Tt({borderBox:a,border:o,margin:i,padding:l})},Wr=function(r,t){return t===void 0&&(t=jl()),Fr(r,t)},Co=function(r,t){var n={top:we(t.marginTop),right:we(t.marginRight),bottom:we(t.marginBottom),left:we(t.marginLeft)},o={top:we(t.paddingTop),right:we(t.paddingRight),bottom:we(t.paddingBottom),left:we(t.paddingLeft)},i={top:we(t.borderTopWidth),right:we(t.borderRightWidth),bottom:we(t.borderBottomWidth),left:we(t.borderLeftWidth)};return Tt({borderBox:r,margin:n,padding:o,border:i})},Do=function(r){var t=r.getBoundingClientRect(),n=window.getComputedStyle(r);return Co(t,n)},fn=Number.isNaN||function(r){return typeof r=="number"&&r!==r};function kl(e,r){return!!(e===r||fn(e)&&fn(r))}function Fl(e,r){if(e.length!==r.length)return!1;for(var t=0;t<e.length;t++)if(!kl(e[t],r[t]))return!1;return!0}function se(e,r){r===void 0&&(r=Fl);var t,n=[],o,i=!1;function l(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];return i&&t===this&&r(a,n)||(o=e.apply(this,a),i=!0,t=this,n=a),o}return l}var nr=function(r){var t=[],n=null,o=function(){for(var l=arguments.length,a=new Array(l),s=0;s<l;s++)a[s]=arguments[s];t=a,!n&&(n=requestAnimationFrame(function(){n=null,r.apply(void 0,t)}))};return o.cancel=function(){n&&(cancelAnimationFrame(n),n=null)},o};function So(e,r){}So.bind(null,"warn");So.bind(null,"error");function Re(){}function Wl(e,r){return U({},e,{},r)}function Ce(e,r,t){var n=r.map(function(o){var i=Wl(t,o.options);return e.addEventListener(o.eventName,o.fn,i),function(){e.removeEventListener(o.eventName,o.fn,i)}});return function(){n.forEach(function(i){i()})}}var Gl="Invariant failed";function Gr(e){this.message=e}Gr.prototype.toString=function(){return this.message};function P(e,r){if(!e)throw new Gr(Gl)}var Hl=function(e){Kn(r,e);function r(){for(var n,o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return n=e.call.apply(e,[this].concat(i))||this,n.callbacks=null,n.unbind=Re,n.onWindowError=function(a){var s=n.getCallbacks();s.isDragging()&&s.tryAbort();var d=a.error;d instanceof Gr&&a.preventDefault()},n.getCallbacks=function(){if(!n.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");return n.callbacks},n.setCallbacks=function(a){n.callbacks=a},n}var t=r.prototype;return t.componentDidMount=function(){this.unbind=Ce(window,[{eventName:"error",fn:this.onWindowError}])},t.componentDidCatch=function(o){if(o instanceof Gr){this.setState({});return}throw o},t.componentWillUnmount=function(){this.unbind()},t.render=function(){return this.props.children(this.setCallbacks)},r}(ie.Component),Ul=`
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,Hr=function(r){return r+1},zl=function(r){return`
  You have lifted an item in position `+Hr(r.source.index)+`
`},Io=function(r,t){var n=r.droppableId===t.droppableId,o=Hr(r.index),i=Hr(t.index);return n?`
      You have moved the item from position `+o+`
      to position `+i+`
    `:`
    You have moved the item from position `+o+`
    in list `+r.droppableId+`
    to list `+t.droppableId+`
    in position `+i+`
  `},Eo=function(r,t,n){var o=t.droppableId===n.droppableId;return o?`
      The item `+r+`
      has been combined with `+n.draggableId:`
      The item `+r+`
      in list `+t.droppableId+`
      has been combined with `+n.draggableId+`
      in list `+n.droppableId+`
    `},ql=function(r){var t=r.destination;if(t)return Io(r.source,t);var n=r.combine;return n?Eo(r.draggableId,r.source,n):"You are over an area that cannot be dropped on"},vn=function(r){return`
  The item has returned to its starting position
  of `+Hr(r.index)+`
`},Vl=function(r){if(r.reason==="CANCEL")return`
      Movement cancelled.
      `+vn(r.source)+`
    `;var t=r.destination,n=r.combine;return t?`
      You have dropped the item.
      `+Io(r.source,t)+`
    `:n?`
      You have dropped the item.
      `+Eo(r.draggableId,r.source,n)+`
    `:`
    The item has been dropped while not over a drop area.
    `+vn(r.source)+`
  `},Nr={dragHandleUsageInstructions:Ul,onDragStart:zl,onDragUpdate:ql,onDragEnd:Vl},ue={x:0,y:0},de=function(r,t){return{x:r.x+t.x,y:r.y+t.y}},be=function(r,t){return{x:r.x-t.x,y:r.y-t.y}},Me=function(r,t){return r.x===t.x&&r.y===t.y},Ke=function(r){return{x:r.x!==0?-r.x:0,y:r.y!==0?-r.y:0}},Fe=function(r,t,n){var o;return n===void 0&&(n=0),o={},o[r]=t,o[r==="x"?"y":"x"]=n,o},or=function(r,t){return Math.sqrt(Math.pow(t.x-r.x,2)+Math.pow(t.y-r.y,2))},gn=function(r,t){return Math.min.apply(Math,t.map(function(n){return or(r,n)}))},Po=function(r){return function(t){return{x:r(t.x),y:r(t.y)}}},Yl=function(e,r){var t=Se({top:Math.max(r.top,e.top),right:Math.min(r.right,e.right),bottom:Math.min(r.bottom,e.bottom),left:Math.max(r.left,e.left)});return t.width<=0||t.height<=0?null:t},br=function(r,t){return{top:r.top+t.y,left:r.left+t.x,bottom:r.bottom+t.y,right:r.right+t.x}},mn=function(r){return[{x:r.left,y:r.top},{x:r.right,y:r.top},{x:r.left,y:r.bottom},{x:r.right,y:r.bottom}]},Kl={top:0,right:0,bottom:0,left:0},Jl=function(r,t){return t?br(r,t.scroll.diff.displacement):r},Xl=function(r,t,n){if(n&&n.increasedBy){var o;return U({},r,(o={},o[t.end]=r[t.end]+n.increasedBy[t.line],o))}return r},Zl=function(r,t){return t&&t.shouldClipSubject?Yl(t.pageMarginBox,r):Se(r)},ze=function(e){var r=e.page,t=e.withPlaceholder,n=e.axis,o=e.frame,i=Jl(r.marginBox,o),l=Xl(i,n,t),a=Zl(l,o);return{page:r,withPlaceholder:t,active:a}},Ot=function(e,r){e.frame||P(!1);var t=e.frame,n=be(r,t.scroll.initial),o=Ke(n),i=U({},t,{scroll:{initial:t.scroll.initial,current:r,diff:{value:n,displacement:o},max:t.scroll.max}}),l=ze({page:e.subject.page,withPlaceholder:e.subject.withPlaceholder,axis:e.axis,frame:i}),a=U({},e,{frame:i,subject:l});return a};function Ur(e){return Object.values?Object.values(e):Object.keys(e).map(function(r){return e[r]})}function At(e,r){if(e.findIndex)return e.findIndex(r);for(var t=0;t<e.length;t++)if(r(e[t]))return t;return-1}function Ne(e,r){if(e.find)return e.find(r);var t=At(e,r);if(t!==-1)return e[t]}function To(e){return Array.prototype.slice.call(e)}var Oo=se(function(e){return e.reduce(function(r,t){return r[t.descriptor.id]=t,r},{})}),Ao=se(function(e){return e.reduce(function(r,t){return r[t.descriptor.id]=t,r},{})}),Xr=se(function(e){return Ur(e)}),Ql=se(function(e){return Ur(e)}),Je=se(function(e,r){var t=Ql(r).filter(function(n){return e===n.descriptor.droppableId}).sort(function(n,o){return n.descriptor.index-o.descriptor.index});return t});function Rt(e){return e.at&&e.at.type==="REORDER"?e.at.destination:null}function Zr(e){return e.at&&e.at.type==="COMBINE"?e.at.combine:null}var Qr=se(function(e,r){return r.filter(function(t){return t.descriptor.id!==e.descriptor.id})}),_l=function(e){var r=e.isMovingForward,t=e.draggable,n=e.destination,o=e.insideDestination,i=e.previousImpact;if(!n.isCombineEnabled)return null;var l=Rt(i);if(!l)return null;function a(m){var y={type:"COMBINE",combine:{draggableId:m,droppableId:n.descriptor.id}};return U({},i,{at:y})}var s=i.displaced.all,d=s.length?s[0]:null;if(r)return d?a(d):null;var p=Qr(t,o);if(!d){if(!p.length)return null;var u=p[p.length-1];return a(u.descriptor.id)}var c=At(p,function(m){return m.descriptor.id===d});c===-1&&P(!1);var f=c-1;if(f<0)return null;var v=p[f];return a(v.descriptor.id)},Xe=function(e,r){return e.descriptor.droppableId===r.descriptor.id},Ro={point:ue,value:0},ir={invisible:{},visible:{},all:[]},es={displaced:ir,displacedBy:Ro,at:null},De=function(e,r){return function(t){return e<=t&&t<=r}},Mo=function(e){var r=De(e.top,e.bottom),t=De(e.left,e.right);return function(n){var o=r(n.top)&&r(n.bottom)&&t(n.left)&&t(n.right);if(o)return!0;var i=r(n.top)||r(n.bottom),l=t(n.left)||t(n.right),a=i&&l;if(a)return!0;var s=n.top<e.top&&n.bottom>e.bottom,d=n.left<e.left&&n.right>e.right,p=s&&d;if(p)return!0;var u=s&&l||d&&i;return u}},rs=function(e){var r=De(e.top,e.bottom),t=De(e.left,e.right);return function(n){var o=r(n.top)&&r(n.bottom)&&t(n.left)&&t(n.right);return o}},Mt={direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"},Bo={direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"},ts=function(e){return function(r){var t=De(r.top,r.bottom),n=De(r.left,r.right);return function(o){return e===Mt?t(o.top)&&t(o.bottom):n(o.left)&&n(o.right)}}},ns=function(r,t){var n=t.frame?t.frame.scroll.diff.displacement:ue;return br(r,n)},os=function(r,t,n){return t.subject.active?n(t.subject.active)(r):!1},is=function(r,t,n){return n(t)(r)},Bt=function(r){var t=r.target,n=r.destination,o=r.viewport,i=r.withDroppableDisplacement,l=r.isVisibleThroughFrameFn,a=i?ns(t,n):t;return os(a,n,l)&&is(a,o,l)},as=function(r){return Bt(U({},r,{isVisibleThroughFrameFn:Mo}))},$o=function(r){return Bt(U({},r,{isVisibleThroughFrameFn:rs}))},ls=function(r){return Bt(U({},r,{isVisibleThroughFrameFn:ts(r.destination.axis)}))},ss=function(r,t,n){if(typeof n=="boolean")return n;if(!t)return!0;var o=t.invisible,i=t.visible;if(o[r])return!1;var l=i[r];return l?l.shouldAnimate:!0};function us(e,r){var t=e.page.marginBox,n={top:r.point.y,right:0,bottom:0,left:r.point.x};return Se(Pt(t,n))}function ar(e){var r=e.afterDragging,t=e.destination,n=e.displacedBy,o=e.viewport,i=e.forceShouldAnimate,l=e.last;return r.reduce(function(s,d){var p=us(d,n),u=d.descriptor.id;s.all.push(u);var c=as({target:p,destination:t,viewport:o,withDroppableDisplacement:!0});if(!c)return s.invisible[d.descriptor.id]=!0,s;var f=ss(u,l,i),v={draggableId:u,shouldAnimate:f};return s.visible[u]=v,s},{all:[],visible:{},invisible:{}})}function cs(e,r){if(!e.length)return 0;var t=e[e.length-1].descriptor.index;return r.inHomeList?t:t+1}function hn(e){var r=e.insideDestination,t=e.inHomeList,n=e.displacedBy,o=e.destination,i=cs(r,{inHomeList:t});return{displaced:ir,displacedBy:n,at:{type:"REORDER",destination:{droppableId:o.descriptor.id,index:i}}}}function zr(e){var r=e.draggable,t=e.insideDestination,n=e.destination,o=e.viewport,i=e.displacedBy,l=e.last,a=e.index,s=e.forceShouldAnimate,d=Xe(r,n);if(a==null)return hn({insideDestination:t,inHomeList:d,displacedBy:i,destination:n});var p=Ne(t,function(m){return m.descriptor.index===a});if(!p)return hn({insideDestination:t,inHomeList:d,displacedBy:i,destination:n});var u=Qr(r,t),c=t.indexOf(p),f=u.slice(c),v=ar({afterDragging:f,destination:n,displacedBy:i,last:l,viewport:o.frame,forceShouldAnimate:s});return{displaced:v,displacedBy:i,at:{type:"REORDER",destination:{droppableId:n.descriptor.id,index:a}}}}function $e(e,r){return!!r.effected[e]}var ds=function(e){var r=e.isMovingForward,t=e.destination,n=e.draggables,o=e.combine,i=e.afterCritical;if(!t.isCombineEnabled)return null;var l=o.draggableId,a=n[l],s=a.descriptor.index,d=$e(l,i);return d?r?s:s-1:r?s+1:s},ps=function(e){var r=e.isMovingForward,t=e.isInHomeList,n=e.insideDestination,o=e.location;if(!n.length)return null;var i=o.index,l=r?i+1:i-1,a=n[0].descriptor.index,s=n[n.length-1].descriptor.index,d=t?s:s+1;return l<a||l>d?null:l},fs=function(e){var r=e.isMovingForward,t=e.isInHomeList,n=e.draggable,o=e.draggables,i=e.destination,l=e.insideDestination,a=e.previousImpact,s=e.viewport,d=e.afterCritical,p=a.at;if(p||P(!1),p.type==="REORDER"){var u=ps({isMovingForward:r,isInHomeList:t,location:p.destination,insideDestination:l});return u==null?null:zr({draggable:n,insideDestination:l,destination:i,viewport:s,last:a.displaced,displacedBy:a.displacedBy,index:u})}var c=ds({isMovingForward:r,destination:i,displaced:a.displaced,draggables:o,combine:p.combine,afterCritical:d});return c==null?null:zr({draggable:n,insideDestination:l,destination:i,viewport:s,last:a.displaced,displacedBy:a.displacedBy,index:c})},vs=function(e){var r=e.displaced,t=e.afterCritical,n=e.combineWith,o=e.displacedBy,i=!!(r.visible[n]||r.invisible[n]);return $e(n,t)?i?ue:Ke(o.point):i?o.point:ue},gs=function(e){var r=e.afterCritical,t=e.impact,n=e.draggables,o=Zr(t);o||P(!1);var i=o.draggableId,l=n[i].page.borderBox.center,a=vs({displaced:t.displaced,afterCritical:r,combineWith:i,displacedBy:t.displacedBy});return de(l,a)},Lo=function(r,t){return t.margin[r.start]+t.borderBox[r.size]/2},ms=function(r,t){return t.margin[r.end]+t.borderBox[r.size]/2},$t=function(r,t,n){return t[r.crossAxisStart]+n.margin[r.crossAxisStart]+n.borderBox[r.crossAxisSize]/2},bn=function(r){var t=r.axis,n=r.moveRelativeTo,o=r.isMoving;return Fe(t.line,n.marginBox[t.end]+Lo(t,o),$t(t,n.marginBox,o))},yn=function(r){var t=r.axis,n=r.moveRelativeTo,o=r.isMoving;return Fe(t.line,n.marginBox[t.start]-ms(t,o),$t(t,n.marginBox,o))},hs=function(r){var t=r.axis,n=r.moveInto,o=r.isMoving;return Fe(t.line,n.contentBox[t.start]+Lo(t,o),$t(t,n.contentBox,o))},bs=function(e){var r=e.impact,t=e.draggable,n=e.draggables,o=e.droppable,i=e.afterCritical,l=Je(o.descriptor.id,n),a=t.page,s=o.axis;if(!l.length)return hs({axis:s,moveInto:o.page,isMoving:a});var d=r.displaced,p=r.displacedBy,u=d.all[0];if(u){var c=n[u];if($e(u,i))return yn({axis:s,moveRelativeTo:c.page,isMoving:a});var f=Fr(c.page,p.point);return yn({axis:s,moveRelativeTo:f,isMoving:a})}var v=l[l.length-1];if(v.descriptor.id===t.descriptor.id)return a.borderBox.center;if($e(v.descriptor.id,i)){var m=Fr(v.page,Ke(i.displacedBy.point));return bn({axis:s,moveRelativeTo:m,isMoving:a})}return bn({axis:s,moveRelativeTo:v.page,isMoving:a})},yt=function(e,r){var t=e.frame;return t?de(r,t.scroll.diff.displacement):r},ys=function(r){var t=r.impact,n=r.draggable,o=r.droppable,i=r.draggables,l=r.afterCritical,a=n.page.borderBox.center,s=t.at;return!o||!s?a:s.type==="REORDER"?bs({impact:t,draggable:n,draggables:i,droppable:o,afterCritical:l}):gs({impact:t,draggables:i,afterCritical:l})},_r=function(e){var r=ys(e),t=e.droppable,n=t?yt(t,r):r;return n},No=function(e,r){var t=be(r,e.scroll.initial),n=Ke(t),o=Se({top:r.y,bottom:r.y+e.frame.height,left:r.x,right:r.x+e.frame.width}),i={frame:o,scroll:{initial:e.scroll.initial,max:e.scroll.max,current:r,diff:{value:t,displacement:n}}};return i};function xn(e,r){return e.map(function(t){return r[t]})}function xs(e,r){for(var t=0;t<r.length;t++){var n=r[t].visible[e];if(n)return n}return null}var ws=function(e){var r=e.impact,t=e.viewport,n=e.destination,o=e.draggables,i=e.maxScrollChange,l=No(t,de(t.scroll.current,i)),a=n.frame?Ot(n,de(n.frame.scroll.current,i)):n,s=r.displaced,d=ar({afterDragging:xn(s.all,o),destination:n,displacedBy:r.displacedBy,viewport:l.frame,last:s,forceShouldAnimate:!1}),p=ar({afterDragging:xn(s.all,o),destination:a,displacedBy:r.displacedBy,viewport:t.frame,last:s,forceShouldAnimate:!1}),u={},c={},f=[s,d,p];s.all.forEach(function(m){var y=xs(m,f);if(y){c[m]=y;return}u[m]=!0});var v=U({},r,{displaced:{all:s.all,invisible:u,visible:c}});return v},Cs=function(e,r){return de(e.scroll.diff.displacement,r)},Lt=function(e){var r=e.pageBorderBoxCenter,t=e.draggable,n=e.viewport,o=Cs(n,r),i=be(o,t.page.borderBox.center);return de(t.client.borderBox.center,i)},jo=function(e){var r=e.draggable,t=e.destination,n=e.newPageBorderBoxCenter,o=e.viewport,i=e.withDroppableDisplacement,l=e.onlyOnMainAxis,a=l===void 0?!1:l,s=be(n,r.page.borderBox.center),d=br(r.page.borderBox,s),p={target:d,destination:t,withDroppableDisplacement:i,viewport:o};return a?ls(p):$o(p)},Ds=function(e){var r=e.isMovingForward,t=e.draggable,n=e.destination,o=e.draggables,i=e.previousImpact,l=e.viewport,a=e.previousPageBorderBoxCenter,s=e.previousClientSelection,d=e.afterCritical;if(!n.isEnabled)return null;var p=Je(n.descriptor.id,o),u=Xe(t,n),c=_l({isMovingForward:r,draggable:t,destination:n,insideDestination:p,previousImpact:i})||fs({isMovingForward:r,isInHomeList:u,draggable:t,draggables:o,destination:n,insideDestination:p,previousImpact:i,viewport:l,afterCritical:d});if(!c)return null;var f=_r({impact:c,draggable:t,droppable:n,draggables:o,afterCritical:d}),v=jo({draggable:t,destination:n,newPageBorderBoxCenter:f,viewport:l.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});if(v){var m=Lt({pageBorderBoxCenter:f,draggable:t,viewport:l});return{clientSelection:m,impact:c,scrollJumpRequest:null}}var y=be(f,a),h=ws({impact:c,viewport:l,destination:n,draggables:o,maxScrollChange:y});return{clientSelection:s,impact:h,scrollJumpRequest:y}},ge=function(r){var t=r.subject.active;return t||P(!1),t},Ss=function(e){var r=e.isMovingForward,t=e.pageBorderBoxCenter,n=e.source,o=e.droppables,i=e.viewport,l=n.subject.active;if(!l)return null;var a=n.axis,s=De(l[a.start],l[a.end]),d=Xr(o).filter(function(u){return u!==n}).filter(function(u){return u.isEnabled}).filter(function(u){return!!u.subject.active}).filter(function(u){return Mo(i.frame)(ge(u))}).filter(function(u){var c=ge(u);return r?l[a.crossAxisEnd]<c[a.crossAxisEnd]:c[a.crossAxisStart]<l[a.crossAxisStart]}).filter(function(u){var c=ge(u),f=De(c[a.start],c[a.end]);return s(c[a.start])||s(c[a.end])||f(l[a.start])||f(l[a.end])}).sort(function(u,c){var f=ge(u)[a.crossAxisStart],v=ge(c)[a.crossAxisStart];return r?f-v:v-f}).filter(function(u,c,f){return ge(u)[a.crossAxisStart]===ge(f[0])[a.crossAxisStart]});if(!d.length)return null;if(d.length===1)return d[0];var p=d.filter(function(u){var c=De(ge(u)[a.start],ge(u)[a.end]);return c(t[a.line])});return p.length===1?p[0]:p.length>1?p.sort(function(u,c){return ge(u)[a.start]-ge(c)[a.start]})[0]:d.sort(function(u,c){var f=gn(t,mn(ge(u))),v=gn(t,mn(ge(c)));return f!==v?f-v:ge(u)[a.start]-ge(c)[a.start]})[0]},wn=function(r,t){var n=r.page.borderBox.center;return $e(r.descriptor.id,t)?be(n,t.displacedBy.point):n},Is=function(r,t){var n=r.page.borderBox;return $e(r.descriptor.id,t)?br(n,Ke(t.displacedBy.point)):n},Es=function(e){var r=e.pageBorderBoxCenter,t=e.viewport,n=e.destination,o=e.insideDestination,i=e.afterCritical,l=o.filter(function(a){return $o({target:Is(a,i),destination:n,viewport:t.frame,withDroppableDisplacement:!0})}).sort(function(a,s){var d=or(r,yt(n,wn(a,i))),p=or(r,yt(n,wn(s,i)));return d<p?-1:p<d?1:a.descriptor.index-s.descriptor.index});return l[0]||null},yr=se(function(r,t){var n=t[r.line];return{value:n,point:Fe(r.line,n)}}),Ps=function(r,t,n){var o=r.axis;if(r.descriptor.mode==="virtual")return Fe(o.line,t[o.line]);var i=r.subject.page.contentBox[o.size],l=Je(r.descriptor.id,n),a=l.reduce(function(p,u){return p+u.client.marginBox[o.size]},0),s=a+t[o.line],d=s-i;return d<=0?null:Fe(o.line,d)},ko=function(r,t){return U({},r,{scroll:U({},r.scroll,{max:t})})},Fo=function(r,t,n){var o=r.frame;Xe(t,r)&&P(!1),r.subject.withPlaceholder&&P(!1);var i=yr(r.axis,t.displaceBy).point,l=Ps(r,i,n),a={placeholderSize:i,increasedBy:l,oldFrameMaxScroll:r.frame?r.frame.scroll.max:null};if(!o){var s=ze({page:r.subject.page,withPlaceholder:a,axis:r.axis,frame:r.frame});return U({},r,{subject:s})}var d=l?de(o.scroll.max,l):o.scroll.max,p=ko(o,d),u=ze({page:r.subject.page,withPlaceholder:a,axis:r.axis,frame:p});return U({},r,{subject:u,frame:p})},Ts=function(r){var t=r.subject.withPlaceholder;t||P(!1);var n=r.frame;if(!n){var o=ze({page:r.subject.page,axis:r.axis,frame:null,withPlaceholder:null});return U({},r,{subject:o})}var i=t.oldFrameMaxScroll;i||P(!1);var l=ko(n,i),a=ze({page:r.subject.page,axis:r.axis,frame:l,withPlaceholder:null});return U({},r,{subject:a,frame:l})},Os=function(e){var r=e.previousPageBorderBoxCenter,t=e.moveRelativeTo,n=e.insideDestination,o=e.draggable,i=e.draggables,l=e.destination,a=e.viewport,s=e.afterCritical;if(!t){if(n.length)return null;var d={displaced:ir,displacedBy:Ro,at:{type:"REORDER",destination:{droppableId:l.descriptor.id,index:0}}},p=_r({impact:d,draggable:o,droppable:l,draggables:i,afterCritical:s}),u=Xe(o,l)?l:Fo(l,o,i),c=jo({draggable:o,destination:u,newPageBorderBoxCenter:p,viewport:a.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});return c?d:null}var f=r[l.axis.line]<=t.page.borderBox.center[l.axis.line],v=function(){var y=t.descriptor.index;return t.descriptor.id===o.descriptor.id||f?y:y+1}(),m=yr(l.axis,o.displaceBy);return zr({draggable:o,insideDestination:n,destination:l,viewport:a,displacedBy:m,last:ir,index:v})},As=function(e){var r=e.isMovingForward,t=e.previousPageBorderBoxCenter,n=e.draggable,o=e.isOver,i=e.draggables,l=e.droppables,a=e.viewport,s=e.afterCritical,d=Ss({isMovingForward:r,pageBorderBoxCenter:t,source:o,droppables:l,viewport:a});if(!d)return null;var p=Je(d.descriptor.id,i),u=Es({pageBorderBoxCenter:t,viewport:a,destination:d,insideDestination:p,afterCritical:s}),c=Os({previousPageBorderBoxCenter:t,destination:d,draggable:n,draggables:i,moveRelativeTo:u,insideDestination:p,viewport:a,afterCritical:s});if(!c)return null;var f=_r({impact:c,draggable:n,droppable:d,draggables:i,afterCritical:s}),v=Lt({pageBorderBoxCenter:f,draggable:n,viewport:a});return{clientSelection:v,impact:c,scrollJumpRequest:null}},ye=function(e){var r=e.at;return r?r.type==="REORDER"?r.destination.droppableId:r.combine.droppableId:null},Rs=function(r,t){var n=ye(r);return n?t[n]:null},Ms=function(e){var r=e.state,t=e.type,n=Rs(r.impact,r.dimensions.droppables),o=!!n,i=r.dimensions.droppables[r.critical.droppable.id],l=n||i,a=l.axis.direction,s=a==="vertical"&&(t==="MOVE_UP"||t==="MOVE_DOWN")||a==="horizontal"&&(t==="MOVE_LEFT"||t==="MOVE_RIGHT");if(s&&!o)return null;var d=t==="MOVE_DOWN"||t==="MOVE_RIGHT",p=r.dimensions.draggables[r.critical.draggable.id],u=r.current.page.borderBoxCenter,c=r.dimensions,f=c.draggables,v=c.droppables;return s?Ds({isMovingForward:d,previousPageBorderBoxCenter:u,draggable:p,destination:l,draggables:f,viewport:r.viewport,previousClientSelection:r.current.client.selection,previousImpact:r.impact,afterCritical:r.afterCritical}):As({isMovingForward:d,previousPageBorderBoxCenter:u,draggable:p,isOver:l,draggables:f,droppables:v,viewport:r.viewport,afterCritical:r.afterCritical})};function ke(e){return e.phase==="DRAGGING"||e.phase==="COLLECTING"}function Wo(e){var r=De(e.top,e.bottom),t=De(e.left,e.right);return function(o){return r(o.y)&&t(o.x)}}function Bs(e,r){return e.left<r.right&&e.right>r.left&&e.top<r.bottom&&e.bottom>r.top}function $s(e){var r=e.pageBorderBox,t=e.draggable,n=e.candidates,o=t.page.borderBox.center,i=n.map(function(l){var a=l.axis,s=Fe(l.axis.line,r.center[a.line],l.page.borderBox.center[a.crossAxisLine]);return{id:l.descriptor.id,distance:or(o,s)}}).sort(function(l,a){return a.distance-l.distance});return i[0]?i[0].id:null}function Ls(e){var r=e.pageBorderBox,t=e.draggable,n=e.droppables,o=Xr(n).filter(function(i){if(!i.isEnabled)return!1;var l=i.subject.active;if(!l||!Bs(r,l))return!1;if(Wo(l)(r.center))return!0;var a=i.axis,s=l.center[a.crossAxisLine],d=r[a.crossAxisStart],p=r[a.crossAxisEnd],u=De(l[a.crossAxisStart],l[a.crossAxisEnd]),c=u(d),f=u(p);return!c&&!f?!0:c?d<s:p>s});return o.length?o.length===1?o[0].descriptor.id:$s({pageBorderBox:r,draggable:t,candidates:o}):null}var Go=function(r,t){return Se(br(r,t))},Ns=function(e,r){var t=e.frame;return t?Go(r,t.scroll.diff.value):r};function Ho(e){var r=e.displaced,t=e.id;return!!(r.visible[t]||r.invisible[t])}function js(e){var r=e.draggable,t=e.closest,n=e.inHomeList;return t?n&&t.descriptor.index>r.descriptor.index?t.descriptor.index-1:t.descriptor.index:null}var ks=function(e){var r=e.pageBorderBoxWithDroppableScroll,t=e.draggable,n=e.destination,o=e.insideDestination,i=e.last,l=e.viewport,a=e.afterCritical,s=n.axis,d=yr(n.axis,t.displaceBy),p=d.value,u=r[s.start],c=r[s.end],f=Qr(t,o),v=Ne(f,function(y){var h=y.descriptor.id,b=y.page.borderBox.center[s.line],w=$e(h,a),x=Ho({displaced:i,id:h});return w?x?c<=b:u<b-p:x?c<=b+p:u<b}),m=js({draggable:t,closest:v,inHomeList:Xe(t,n)});return zr({draggable:t,insideDestination:o,destination:n,viewport:l,last:i,displacedBy:d,index:m})},Fs=4,Ws=function(e){var r=e.draggable,t=e.pageBorderBoxWithDroppableScroll,n=e.previousImpact,o=e.destination,i=e.insideDestination,l=e.afterCritical;if(!o.isCombineEnabled)return null;var a=o.axis,s=yr(o.axis,r.displaceBy),d=s.value,p=t[a.start],u=t[a.end],c=Qr(r,i),f=Ne(c,function(m){var y=m.descriptor.id,h=m.page.borderBox,b=h[a.size],w=b/Fs,x=$e(y,l),E=Ho({displaced:n.displaced,id:y});return x?E?u>h[a.start]+w&&u<h[a.end]-w:p>h[a.start]-d+w&&p<h[a.end]-d-w:E?u>h[a.start]+d+w&&u<h[a.end]+d-w:p>h[a.start]+w&&p<h[a.end]-w});if(!f)return null;var v={displacedBy:s,displaced:n.displaced,at:{type:"COMBINE",combine:{draggableId:f.descriptor.id,droppableId:o.descriptor.id}}};return v},Uo=function(e){var r=e.pageOffset,t=e.draggable,n=e.draggables,o=e.droppables,i=e.previousImpact,l=e.viewport,a=e.afterCritical,s=Go(t.page.borderBox,r),d=Ls({pageBorderBox:s,draggable:t,droppables:o});if(!d)return es;var p=o[d],u=Je(p.descriptor.id,n),c=Ns(p,s);return Ws({pageBorderBoxWithDroppableScroll:c,draggable:t,previousImpact:i,destination:p,insideDestination:u,afterCritical:a})||ks({pageBorderBoxWithDroppableScroll:c,draggable:t,destination:p,insideDestination:u,last:i.displaced,viewport:l,afterCritical:a})},Nt=function(e,r){var t;return U({},e,(t={},t[r.descriptor.id]=r,t))},Gs=function(r){var t=r.previousImpact,n=r.impact,o=r.droppables,i=ye(t),l=ye(n);if(!i||i===l)return o;var a=o[i];if(!a.subject.withPlaceholder)return o;var s=Ts(a);return Nt(o,s)},Hs=function(e){var r=e.draggable,t=e.draggables,n=e.droppables,o=e.previousImpact,i=e.impact,l=Gs({previousImpact:o,impact:i,droppables:n}),a=ye(i);if(!a)return l;var s=n[a];if(Xe(r,s)||s.subject.withPlaceholder)return l;var d=Fo(s,r,t);return Nt(l,d)},er=function(e){var r=e.state,t=e.clientSelection,n=e.dimensions,o=e.viewport,i=e.impact,l=e.scrollJumpRequest,a=o||r.viewport,s=n||r.dimensions,d=t||r.current.client.selection,p=be(d,r.initial.client.selection),u={offset:p,selection:d,borderBoxCenter:de(r.initial.client.borderBoxCenter,p)},c={selection:de(u.selection,a.scroll.current),borderBoxCenter:de(u.borderBoxCenter,a.scroll.current),offset:de(u.offset,a.scroll.diff.value)},f={client:u,page:c};if(r.phase==="COLLECTING")return U({phase:"COLLECTING"},r,{dimensions:s,viewport:a,current:f});var v=s.draggables[r.critical.draggable.id],m=i||Uo({pageOffset:c.offset,draggable:v,draggables:s.draggables,droppables:s.droppables,previousImpact:r.impact,viewport:a,afterCritical:r.afterCritical}),y=Hs({draggable:v,impact:m,previousImpact:r.impact,draggables:s.draggables,droppables:s.droppables}),h=U({},r,{current:f,dimensions:{draggables:s.draggables,droppables:y},impact:m,viewport:a,scrollJumpRequest:l||null,forceShouldAnimate:l?!1:null});return h};function Us(e,r){return e.map(function(t){return r[t]})}var zo=function(e){var r=e.impact,t=e.viewport,n=e.draggables,o=e.destination,i=e.forceShouldAnimate,l=r.displaced,a=Us(l.all,n),s=ar({afterDragging:a,destination:o,displacedBy:r.displacedBy,viewport:t.frame,forceShouldAnimate:i,last:l});return U({},r,{displaced:s})},qo=function(e){var r=e.impact,t=e.draggable,n=e.droppable,o=e.draggables,i=e.viewport,l=e.afterCritical,a=_r({impact:r,draggable:t,draggables:o,droppable:n,afterCritical:l});return Lt({pageBorderBoxCenter:a,draggable:t,viewport:i})},Vo=function(e){var r=e.state,t=e.dimensions,n=e.viewport;r.movementMode!=="SNAP"&&P(!1);var o=r.impact,i=n||r.viewport,l=t||r.dimensions,a=l.draggables,s=l.droppables,d=a[r.critical.draggable.id],p=ye(o);p||P(!1);var u=s[p],c=zo({impact:o,viewport:i,destination:u,draggables:a}),f=qo({impact:c,draggable:d,droppable:u,draggables:a,viewport:i,afterCritical:r.afterCritical});return er({impact:c,clientSelection:f,state:r,dimensions:l,viewport:i})},zs=function(e){return{index:e.index,droppableId:e.droppableId}},Yo=function(e){var r=e.draggable,t=e.home,n=e.draggables,o=e.viewport,i=yr(t.axis,r.displaceBy),l=Je(t.descriptor.id,n),a=l.indexOf(r);a===-1&&P(!1);var s=l.slice(a+1),d=s.reduce(function(f,v){return f[v.descriptor.id]=!0,f},{}),p={inVirtualList:t.descriptor.mode==="virtual",displacedBy:i,effected:d},u=ar({afterDragging:s,destination:t,displacedBy:i,last:null,viewport:o.frame,forceShouldAnimate:!1}),c={displaced:u,displacedBy:i,at:{type:"REORDER",destination:zs(r.descriptor)}};return{impact:c,afterCritical:p}},qs=function(e,r){return{draggables:e.draggables,droppables:Nt(e.droppables,r)}},Vs=function(e){var r=e.draggable,t=e.offset,n=e.initialWindowScroll,o=Fr(r.client,t),i=Wr(o,n),l=U({},r,{placeholder:U({},r.placeholder,{client:o}),client:o,page:i});return l},Ys=function(e){var r=e.frame;return r||P(!1),r},Ks=function(e){var r=e.additions,t=e.updatedDroppables,n=e.viewport,o=n.scroll.diff.value;return r.map(function(i){var l=i.descriptor.droppableId,a=t[l],s=Ys(a),d=s.scroll.diff.value,p=de(o,d),u=Vs({draggable:i,offset:p,initialWindowScroll:n.scroll.initial});return u})},Js=function(e){var r=e.state,t=e.published,n=t.modified.map(function(w){var x=r.dimensions.droppables[w.droppableId],E=Ot(x,w.scroll);return E}),o=U({},r.dimensions.droppables,{},Oo(n)),i=Ao(Ks({additions:t.additions,updatedDroppables:o,viewport:r.viewport})),l=U({},r.dimensions.draggables,{},i);t.removals.forEach(function(w){delete l[w]});var a={droppables:o,draggables:l},s=ye(r.impact),d=s?a.droppables[s]:null,p=a.draggables[r.critical.draggable.id],u=a.droppables[r.critical.droppable.id],c=Yo({draggable:p,home:u,draggables:l,viewport:r.viewport}),f=c.impact,v=c.afterCritical,m=d&&d.isCombineEnabled?r.impact:f,y=Uo({pageOffset:r.current.page.offset,draggable:a.draggables[r.critical.draggable.id],draggables:a.draggables,droppables:a.droppables,previousImpact:m,viewport:r.viewport,afterCritical:v}),h=U({phase:"DRAGGING"},r,{phase:"DRAGGING",impact:y,onLiftImpact:f,dimensions:a,afterCritical:v,forceShouldAnimate:!1});if(r.phase==="COLLECTING")return h;var b=U({phase:"DROP_PENDING"},h,{phase:"DROP_PENDING",reason:r.reason,isWaiting:!1});return b},xt=function(r){return r.movementMode==="SNAP"},dt=function(r,t,n){var o=qs(r.dimensions,t);return!xt(r)||n?er({state:r,dimensions:o}):Vo({state:r,dimensions:o})};function pt(e){return e.isDragging&&e.movementMode==="SNAP"?U({phase:"DRAGGING"},e,{scrollJumpRequest:null}):e}var Cn={phase:"IDLE",completed:null,shouldFlush:!1},Xs=function(e,r){if(e===void 0&&(e=Cn),r.type==="FLUSH")return U({},Cn,{shouldFlush:!0});if(r.type==="INITIAL_PUBLISH"){e.phase!=="IDLE"&&P(!1);var t=r.payload,n=t.critical,o=t.clientSelection,i=t.viewport,l=t.dimensions,a=t.movementMode,s=l.draggables[n.draggable.id],d=l.droppables[n.droppable.id],p={selection:o,borderBoxCenter:s.client.borderBox.center,offset:ue},u={client:p,page:{selection:de(p.selection,i.scroll.initial),borderBoxCenter:de(p.selection,i.scroll.initial),offset:de(p.selection,i.scroll.diff.value)}},c=Xr(l.droppables).every(function(H){return!H.isFixedOnPage}),f=Yo({draggable:s,home:d,draggables:l.draggables,viewport:i}),v=f.impact,m=f.afterCritical,y={phase:"DRAGGING",isDragging:!0,critical:n,movementMode:a,dimensions:l,initial:u,current:u,isWindowScrollAllowed:c,impact:v,afterCritical:m,onLiftImpact:v,viewport:i,scrollJumpRequest:null,forceShouldAnimate:null};return y}if(r.type==="COLLECTION_STARTING"){if(e.phase==="COLLECTING"||e.phase==="DROP_PENDING")return e;e.phase!=="DRAGGING"&&P(!1);var h=U({phase:"COLLECTING"},e,{phase:"COLLECTING"});return h}if(r.type==="PUBLISH_WHILE_DRAGGING")return e.phase==="COLLECTING"||e.phase==="DROP_PENDING"||P(!1),Js({state:e,published:r.payload});if(r.type==="MOVE"){if(e.phase==="DROP_PENDING")return e;ke(e)||P(!1);var b=r.payload.client;return Me(b,e.current.client.selection)?e:er({state:e,clientSelection:b,impact:xt(e)?e.impact:null})}if(r.type==="UPDATE_DROPPABLE_SCROLL"){if(e.phase==="DROP_PENDING"||e.phase==="COLLECTING")return pt(e);ke(e)||P(!1);var w=r.payload,x=w.id,E=w.newScroll,M=e.dimensions.droppables[x];if(!M)return e;var S=Ot(M,E);return dt(e,S,!1)}if(r.type==="UPDATE_DROPPABLE_IS_ENABLED"){if(e.phase==="DROP_PENDING")return e;ke(e)||P(!1);var Q=r.payload,Y=Q.id,j=Q.isEnabled,L=e.dimensions.droppables[Y];L||P(!1),L.isEnabled===j&&P(!1);var ae=U({},L,{isEnabled:j});return dt(e,ae,!0)}if(r.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){if(e.phase==="DROP_PENDING")return e;ke(e)||P(!1);var le=r.payload,B=le.id,T=le.isCombineEnabled,I=e.dimensions.droppables[B];I||P(!1),I.isCombineEnabled===T&&P(!1);var $=U({},I,{isCombineEnabled:T});return dt(e,$,!0)}if(r.type==="MOVE_BY_WINDOW_SCROLL"){if(e.phase==="DROP_PENDING"||e.phase==="DROP_ANIMATING")return e;ke(e)||P(!1),e.isWindowScrollAllowed||P(!1);var A=r.payload.newScroll;if(Me(e.viewport.scroll.current,A))return pt(e);var G=No(e.viewport,A);return xt(e)?Vo({state:e,viewport:G}):er({state:e,viewport:G})}if(r.type==="UPDATE_VIEWPORT_MAX_SCROLL"){if(!ke(e))return e;var N=r.payload.maxScroll;if(Me(N,e.viewport.scroll.max))return e;var X=U({},e.viewport,{scroll:U({},e.viewport.scroll,{max:N})});return U({phase:"DRAGGING"},e,{viewport:X})}if(r.type==="MOVE_UP"||r.type==="MOVE_DOWN"||r.type==="MOVE_LEFT"||r.type==="MOVE_RIGHT"){if(e.phase==="COLLECTING"||e.phase==="DROP_PENDING")return e;e.phase!=="DRAGGING"&&P(!1);var Z=Ms({state:e,type:r.type});return Z?er({state:e,impact:Z.impact,clientSelection:Z.clientSelection,scrollJumpRequest:Z.scrollJumpRequest}):e}if(r.type==="DROP_PENDING"){var ne=r.payload.reason;e.phase!=="COLLECTING"&&P(!1);var D=U({phase:"DROP_PENDING"},e,{phase:"DROP_PENDING",isWaiting:!0,reason:ne});return D}if(r.type==="DROP_ANIMATE"){var R=r.payload,V=R.completed,z=R.dropDuration,q=R.newHomeClientOffset;e.phase==="DRAGGING"||e.phase==="DROP_PENDING"||P(!1);var K={phase:"DROP_ANIMATING",completed:V,dropDuration:z,newHomeClientOffset:q,dimensions:e.dimensions};return K}if(r.type==="DROP_COMPLETE"){var k=r.payload.completed;return{phase:"IDLE",completed:k,shouldFlush:!1}}return e},Zs=function(r){return{type:"BEFORE_INITIAL_CAPTURE",payload:r}},Qs=function(r){return{type:"LIFT",payload:r}},_s=function(r){return{type:"INITIAL_PUBLISH",payload:r}},eu=function(r){return{type:"PUBLISH_WHILE_DRAGGING",payload:r}},ru=function(){return{type:"COLLECTION_STARTING",payload:null}},tu=function(r){return{type:"UPDATE_DROPPABLE_SCROLL",payload:r}},nu=function(r){return{type:"UPDATE_DROPPABLE_IS_ENABLED",payload:r}},ou=function(r){return{type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:r}},Ko=function(r){return{type:"MOVE",payload:r}},iu=function(r){return{type:"MOVE_BY_WINDOW_SCROLL",payload:r}},au=function(r){return{type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:r}},lu=function(){return{type:"MOVE_UP",payload:null}},su=function(){return{type:"MOVE_DOWN",payload:null}},uu=function(){return{type:"MOVE_RIGHT",payload:null}},cu=function(){return{type:"MOVE_LEFT",payload:null}},jt=function(){return{type:"FLUSH",payload:null}},du=function(r){return{type:"DROP_ANIMATE",payload:r}},kt=function(r){return{type:"DROP_COMPLETE",payload:r}},Jo=function(r){return{type:"DROP",payload:r}},pu=function(r){return{type:"DROP_PENDING",payload:r}},Xo=function(){return{type:"DROP_ANIMATION_FINISHED",payload:null}},fu=function(e){return function(r){var t=r.getState,n=r.dispatch;return function(o){return function(i){if(i.type!=="LIFT"){o(i);return}var l=i.payload,a=l.id,s=l.clientSelection,d=l.movementMode,p=t();p.phase==="DROP_ANIMATING"&&n(kt({completed:p.completed})),t().phase!=="IDLE"&&P(!1),n(jt()),n(Zs({draggableId:a,movementMode:d}));var u={shouldPublishImmediately:d==="SNAP"},c={draggableId:a,scrollOptions:u},f=e.startPublishing(c),v=f.critical,m=f.dimensions,y=f.viewport;n(_s({critical:v,dimensions:m,clientSelection:s,movementMode:d,viewport:y}))}}}},vu=function(e){return function(){return function(r){return function(t){t.type==="INITIAL_PUBLISH"&&e.dragging(),t.type==="DROP_ANIMATE"&&e.dropping(t.payload.completed.result.reason),(t.type==="FLUSH"||t.type==="DROP_COMPLETE")&&e.resting(),r(t)}}}},Ft={outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"},lr={opacity:{drop:0,combining:.7},scale:{drop:.75}},Wt={outOfTheWay:.2,minDropTime:.33,maxDropTime:.55},je=Wt.outOfTheWay+"s "+Ft.outOfTheWay,rr={fluid:"opacity "+je,snap:"transform "+je+", opacity "+je,drop:function(r){var t=r+"s "+Ft.drop;return"transform "+t+", opacity "+t},outOfTheWay:"transform "+je,placeholder:"height "+je+", width "+je+", margin "+je},Dn=function(r){return Me(r,ue)?null:"translate("+r.x+"px, "+r.y+"px)"},wt={moveTo:Dn,drop:function(r,t){var n=Dn(r);return n?t?n+" scale("+lr.scale.drop+")":n:null}},Ct=Wt.minDropTime,Zo=Wt.maxDropTime,gu=Zo-Ct,Sn=1500,mu=.6,hu=function(e){var r=e.current,t=e.destination,n=e.reason,o=or(r,t);if(o<=0)return Ct;if(o>=Sn)return Zo;var i=o/Sn,l=Ct+gu*i,a=n==="CANCEL"?l*mu:l;return Number(a.toFixed(2))},bu=function(e){var r=e.impact,t=e.draggable,n=e.dimensions,o=e.viewport,i=e.afterCritical,l=n.draggables,a=n.droppables,s=ye(r),d=s?a[s]:null,p=a[t.descriptor.droppableId],u=qo({impact:r,draggable:t,draggables:l,afterCritical:i,droppable:d||p,viewport:o}),c=be(u,t.client.borderBox.center);return c},yu=function(e){var r=e.draggables,t=e.reason,n=e.lastImpact,o=e.home,i=e.viewport,l=e.onLiftImpact;if(!n.at||t!=="DROP"){var a=zo({draggables:r,impact:l,destination:o,viewport:i,forceShouldAnimate:!0});return{impact:a,didDropInsideDroppable:!1}}if(n.at.type==="REORDER")return{impact:n,didDropInsideDroppable:!0};var s=U({},n,{displaced:ir});return{impact:s,didDropInsideDroppable:!0}},xu=function(e){var r=e.getState,t=e.dispatch;return function(n){return function(o){if(o.type!=="DROP"){n(o);return}var i=r(),l=o.payload.reason;if(i.phase==="COLLECTING"){t(pu({reason:l}));return}if(i.phase!=="IDLE"){var a=i.phase==="DROP_PENDING"&&i.isWaiting;a&&P(!1),i.phase==="DRAGGING"||i.phase==="DROP_PENDING"||P(!1);var s=i.critical,d=i.dimensions,p=d.draggables[i.critical.draggable.id],u=yu({reason:l,lastImpact:i.impact,afterCritical:i.afterCritical,onLiftImpact:i.onLiftImpact,home:i.dimensions.droppables[i.critical.droppable.id],viewport:i.viewport,draggables:i.dimensions.draggables}),c=u.impact,f=u.didDropInsideDroppable,v=f?Rt(c):null,m=f?Zr(c):null,y={index:s.draggable.index,droppableId:s.droppable.id},h={draggableId:p.descriptor.id,type:p.descriptor.type,source:y,reason:l,mode:i.movementMode,destination:v,combine:m},b=bu({impact:c,draggable:p,dimensions:d,viewport:i.viewport,afterCritical:i.afterCritical}),w={critical:i.critical,afterCritical:i.afterCritical,result:h,impact:c},x=!Me(i.current.client.offset,b)||!!h.combine;if(!x){t(kt({completed:w}));return}var E=hu({current:i.current.client.offset,destination:b,reason:l}),M={newHomeClientOffset:b,dropDuration:E,completed:w};t(du(M))}}}},Qo=function(){return{x:window.pageXOffset,y:window.pageYOffset}};function wu(e){return{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(t){t.target!==window&&t.target!==window.document||e()}}}function Cu(e){var r=e.onWindowScroll;function t(){r(Qo())}var n=nr(t),o=wu(n),i=Re;function l(){return i!==Re}function a(){l()&&P(!1),i=Ce(window,[o])}function s(){l()||P(!1),n.cancel(),i(),i=Re}return{start:a,stop:s,isActive:l}}var Du=function(r){return r.type==="DROP_COMPLETE"||r.type==="DROP_ANIMATE"||r.type==="FLUSH"},Su=function(e){var r=Cu({onWindowScroll:function(n){e.dispatch(iu({newScroll:n}))}});return function(t){return function(n){!r.isActive()&&n.type==="INITIAL_PUBLISH"&&r.start(),r.isActive()&&Du(n)&&r.stop(),t(n)}}},Iu=function(e){var r=!1,t=!1,n=setTimeout(function(){t=!0}),o=function(l){r||t||(r=!0,e(l),clearTimeout(n))};return o.wasCalled=function(){return r},o},Eu=function(){var e=[],r=function(i){var l=At(e,function(d){return d.timerId===i});l===-1&&P(!1);var a=e.splice(l,1),s=a[0];s.callback()},t=function(i){var l=setTimeout(function(){return r(l)}),a={timerId:l,callback:i};e.push(a)},n=function(){if(e.length){var i=[].concat(e);e.length=0,i.forEach(function(l){clearTimeout(l.timerId),l.callback()})}};return{add:t,flush:n}},Pu=function(r,t){return r==null&&t==null?!0:r==null||t==null?!1:r.droppableId===t.droppableId&&r.index===t.index},Tu=function(r,t){return r==null&&t==null?!0:r==null||t==null?!1:r.draggableId===t.draggableId&&r.droppableId===t.droppableId},Ou=function(r,t){if(r===t)return!0;var n=r.draggable.id===t.draggable.id&&r.draggable.droppableId===t.draggable.droppableId&&r.draggable.type===t.draggable.type&&r.draggable.index===t.draggable.index,o=r.droppable.id===t.droppable.id&&r.droppable.type===t.droppable.type;return n&&o},Ze=function(r,t){t()},Cr=function(r,t){return{draggableId:r.draggable.id,type:r.droppable.type,source:{droppableId:r.droppable.id,index:r.draggable.index},mode:t}},ft=function(r,t,n,o){if(!r){n(o(t));return}var i=Iu(n),l={announce:i};r(t,l),i.wasCalled()||n(o(t))},Au=function(e,r){var t=Eu(),n=null,o=function(c,f){n&&P(!1),Ze("onBeforeCapture",function(){var v=e().onBeforeCapture;if(v){var m={draggableId:c,mode:f};v(m)}})},i=function(c,f){n&&P(!1),Ze("onBeforeDragStart",function(){var v=e().onBeforeDragStart;v&&v(Cr(c,f))})},l=function(c,f){n&&P(!1);var v=Cr(c,f);n={mode:f,lastCritical:c,lastLocation:v.source,lastCombine:null},t.add(function(){Ze("onDragStart",function(){return ft(e().onDragStart,v,r,Nr.onDragStart)})})},a=function(c,f){var v=Rt(f),m=Zr(f);n||P(!1);var y=!Ou(c,n.lastCritical);y&&(n.lastCritical=c);var h=!Pu(n.lastLocation,v);h&&(n.lastLocation=v);var b=!Tu(n.lastCombine,m);if(b&&(n.lastCombine=m),!(!y&&!h&&!b)){var w=U({},Cr(c,n.mode),{combine:m,destination:v});t.add(function(){Ze("onDragUpdate",function(){return ft(e().onDragUpdate,w,r,Nr.onDragUpdate)})})}},s=function(){n||P(!1),t.flush()},d=function(c){n||P(!1),n=null,Ze("onDragEnd",function(){return ft(e().onDragEnd,c,r,Nr.onDragEnd)})},p=function(){if(n){var c=U({},Cr(n.lastCritical,n.mode),{combine:null,destination:null,reason:"CANCEL"});d(c)}};return{beforeCapture:o,beforeStart:i,start:l,update:a,flush:s,drop:d,abort:p}},Ru=function(e,r){var t=Au(e,r);return function(n){return function(o){return function(i){if(i.type==="BEFORE_INITIAL_CAPTURE"){t.beforeCapture(i.payload.draggableId,i.payload.movementMode);return}if(i.type==="INITIAL_PUBLISH"){var l=i.payload.critical;t.beforeStart(l,i.payload.movementMode),o(i),t.start(l,i.payload.movementMode);return}if(i.type==="DROP_COMPLETE"){var a=i.payload.completed.result;t.flush(),o(i),t.drop(a);return}if(o(i),i.type==="FLUSH"){t.abort();return}var s=n.getState();s.phase==="DRAGGING"&&t.update(s.critical,s.impact)}}}},Mu=function(e){return function(r){return function(t){if(t.type!=="DROP_ANIMATION_FINISHED"){r(t);return}var n=e.getState();n.phase!=="DROP_ANIMATING"&&P(!1),e.dispatch(kt({completed:n.completed}))}}},Bu=function(e){var r=null,t=null;function n(){t&&(cancelAnimationFrame(t),t=null),r&&(r(),r=null)}return function(o){return function(i){if((i.type==="FLUSH"||i.type==="DROP_COMPLETE"||i.type==="DROP_ANIMATION_FINISHED")&&n(),o(i),i.type==="DROP_ANIMATE"){var l={eventName:"scroll",options:{capture:!0,passive:!1,once:!0},fn:function(){var s=e.getState();s.phase==="DROP_ANIMATING"&&e.dispatch(Xo())}};t=requestAnimationFrame(function(){t=null,r=Ce(window,[l])})}}}},$u=function(e){return function(){return function(r){return function(t){(t.type==="DROP_COMPLETE"||t.type==="FLUSH"||t.type==="DROP_ANIMATE")&&e.stopPublishing(),r(t)}}}},Lu=function(e){var r=!1;return function(){return function(t){return function(n){if(n.type==="INITIAL_PUBLISH"){r=!0,e.tryRecordFocus(n.payload.critical.draggable.id),t(n),e.tryRestoreFocusRecorded();return}if(t(n),!!r){if(n.type==="FLUSH"){r=!1,e.tryRestoreFocusRecorded();return}if(n.type==="DROP_COMPLETE"){r=!1;var o=n.payload.completed.result;o.combine&&e.tryShiftRecord(o.draggableId,o.combine.draggableId),e.tryRestoreFocusRecorded()}}}}}},Nu=function(r){return r.type==="DROP_COMPLETE"||r.type==="DROP_ANIMATE"||r.type==="FLUSH"},ju=function(e){return function(r){return function(t){return function(n){if(Nu(n)){e.stop(),t(n);return}if(n.type==="INITIAL_PUBLISH"){t(n);var o=r.getState();o.phase!=="DRAGGING"&&P(!1),e.start(o);return}t(n),e.scroll(r.getState())}}}},ku=function(e){return function(r){return function(t){if(r(t),t.type==="PUBLISH_WHILE_DRAGGING"){var n=e.getState();n.phase==="DROP_PENDING"&&(n.isWaiting||e.dispatch(Jo({reason:n.reason})))}}}},Fu=lo,Wu=function(e){var r=e.dimensionMarshal,t=e.focusMarshal,n=e.styleMarshal,o=e.getResponders,i=e.announce,l=e.autoScroller;return ao(Xs,Fu(Wa(vu(n),$u(r),fu(r),xu,Mu,Bu,ku,ju(l),Su,Lu(t),Ru(o,i))))},vt=function(){return{additions:{},removals:{},modified:{}}};function Gu(e){var r=e.registry,t=e.callbacks,n=vt(),o=null,i=function(){o||(t.collectionStarting(),o=requestAnimationFrame(function(){o=null;var p=n,u=p.additions,c=p.removals,f=p.modified,v=Object.keys(u).map(function(h){return r.draggable.getById(h).getDimension(ue)}).sort(function(h,b){return h.descriptor.index-b.descriptor.index}),m=Object.keys(f).map(function(h){var b=r.droppable.getById(h),w=b.callbacks.getScrollWhileDragging();return{droppableId:h,scroll:w}}),y={additions:v,removals:Object.keys(c),modified:m};n=vt(),t.publish(y)}))},l=function(p){var u=p.descriptor.id;n.additions[u]=p,n.modified[p.descriptor.droppableId]=!0,n.removals[u]&&delete n.removals[u],i()},a=function(p){var u=p.descriptor;n.removals[u.id]=!0,n.modified[u.droppableId]=!0,n.additions[u.id]&&delete n.additions[u.id],i()},s=function(){o&&(cancelAnimationFrame(o),o=null,n=vt())};return{add:l,remove:a,stop:s}}var _o=function(e){var r=e.scrollHeight,t=e.scrollWidth,n=e.height,o=e.width,i=be({x:t,y:r},{x:o,y:n}),l={x:Math.max(0,i.x),y:Math.max(0,i.y)};return l},ei=function(){var e=document.documentElement;return e||P(!1),e},ri=function(){var e=ei(),r=_o({scrollHeight:e.scrollHeight,scrollWidth:e.scrollWidth,width:e.clientWidth,height:e.clientHeight});return r},Hu=function(){var e=Qo(),r=ri(),t=e.y,n=e.x,o=ei(),i=o.clientWidth,l=o.clientHeight,a=n+i,s=t+l,d=Se({top:t,left:n,right:a,bottom:s}),p={frame:d,scroll:{initial:e,current:e,max:r,diff:{value:ue,displacement:ue}}};return p},Uu=function(e){var r=e.critical,t=e.scrollOptions,n=e.registry,o=Hu(),i=o.scroll.current,l=r.droppable,a=n.droppable.getAllByType(l.type).map(function(u){return u.callbacks.getDimensionAndWatchScroll(i,t)}),s=n.draggable.getAllByType(r.draggable.type).map(function(u){return u.getDimension(i)}),d={draggables:Ao(s),droppables:Oo(a)},p={dimensions:d,critical:r,viewport:o};return p};function In(e,r,t){if(t.descriptor.id===r.id||t.descriptor.type!==r.type)return!1;var n=e.droppable.getById(t.descriptor.droppableId);return n.descriptor.mode==="virtual"}var zu=function(e,r){var t=null,n=Gu({callbacks:{publish:r.publishWhileDragging,collectionStarting:r.collectionStarting},registry:e}),o=function(f,v){e.droppable.exists(f)||P(!1),t&&r.updateDroppableIsEnabled({id:f,isEnabled:v})},i=function(f,v){t&&(e.droppable.exists(f)||P(!1),r.updateDroppableIsCombineEnabled({id:f,isCombineEnabled:v}))},l=function(f,v){t&&(e.droppable.exists(f)||P(!1),r.updateDroppableScroll({id:f,newScroll:v}))},a=function(f,v){t&&e.droppable.getById(f).callbacks.scroll(v)},s=function(){if(t){n.stop();var f=t.critical.droppable;e.droppable.getAllByType(f.type).forEach(function(v){return v.callbacks.dragStopped()}),t.unsubscribe(),t=null}},d=function(f){t||P(!1);var v=t.critical.draggable;f.type==="ADDITION"&&In(e,v,f.value)&&n.add(f.value),f.type==="REMOVAL"&&In(e,v,f.value)&&n.remove(f.value)},p=function(f){t&&P(!1);var v=e.draggable.getById(f.draggableId),m=e.droppable.getById(v.descriptor.droppableId),y={draggable:v.descriptor,droppable:m.descriptor},h=e.subscribe(d);return t={critical:y,unsubscribe:h},Uu({critical:y,registry:e,scrollOptions:f.scrollOptions})},u={updateDroppableIsEnabled:o,updateDroppableIsCombineEnabled:i,scrollDroppable:a,updateDroppableScroll:l,startPublishing:p,stopPublishing:s};return u},ti=function(e,r){return e.phase==="IDLE"?!0:e.phase!=="DROP_ANIMATING"||e.completed.result.draggableId===r?!1:e.completed.result.reason==="DROP"},qu=function(e){window.scrollBy(e.x,e.y)},Vu=se(function(e){return Xr(e).filter(function(r){return!(!r.isEnabled||!r.frame)})}),Yu=function(r,t){var n=Ne(Vu(t),function(o){return o.frame||P(!1),Wo(o.frame.pageMarginBox)(r)});return n},Ku=function(e){var r=e.center,t=e.destination,n=e.droppables;if(t){var o=n[t];return o.frame?o:null}var i=Yu(r,n);return i},Be={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:function(r){return Math.pow(r,2)},durationDampening:{stopDampeningAt:1200,accelerateAt:360}},Ju=function(e,r){var t=e[r.size]*Be.startFromPercentage,n=e[r.size]*Be.maxScrollAtPercentage,o={startScrollingFrom:t,maxScrollValueAt:n};return o},ni=function(e){var r=e.startOfRange,t=e.endOfRange,n=e.current,o=t-r;if(o===0)return 0;var i=n-r,l=i/o;return l},Gt=1,Xu=function(e,r){if(e>r.startScrollingFrom)return 0;if(e<=r.maxScrollValueAt)return Be.maxPixelScroll;if(e===r.startScrollingFrom)return Gt;var t=ni({startOfRange:r.maxScrollValueAt,endOfRange:r.startScrollingFrom,current:e}),n=1-t,o=Be.maxPixelScroll*Be.ease(n);return Math.ceil(o)},En=Be.durationDampening.accelerateAt,Pn=Be.durationDampening.stopDampeningAt,Zu=function(e,r){var t=r,n=Pn,o=Date.now(),i=o-t;if(i>=Pn)return e;if(i<En)return Gt;var l=ni({startOfRange:En,endOfRange:n,current:i}),a=e*Be.ease(l);return Math.ceil(a)},Tn=function(e){var r=e.distanceToEdge,t=e.thresholds,n=e.dragStartTime,o=e.shouldUseTimeDampening,i=Xu(r,t);return i===0?0:o?Math.max(Zu(i,n),Gt):i},On=function(e){var r=e.container,t=e.distanceToEdges,n=e.dragStartTime,o=e.axis,i=e.shouldUseTimeDampening,l=Ju(r,o),a=t[o.end]<t[o.start];return a?Tn({distanceToEdge:t[o.end],thresholds:l,dragStartTime:n,shouldUseTimeDampening:i}):-1*Tn({distanceToEdge:t[o.start],thresholds:l,dragStartTime:n,shouldUseTimeDampening:i})},Qu=function(e){var r=e.container,t=e.subject,n=e.proposedScroll,o=t.height>r.height,i=t.width>r.width;return!i&&!o?n:i&&o?null:{x:i?0:n.x,y:o?0:n.y}},_u=Po(function(e){return e===0?0:e}),oi=function(e){var r=e.dragStartTime,t=e.container,n=e.subject,o=e.center,i=e.shouldUseTimeDampening,l={top:o.y-t.top,right:t.right-o.x,bottom:t.bottom-o.y,left:o.x-t.left},a=On({container:t,distanceToEdges:l,dragStartTime:r,axis:Mt,shouldUseTimeDampening:i}),s=On({container:t,distanceToEdges:l,dragStartTime:r,axis:Bo,shouldUseTimeDampening:i}),d=_u({x:s,y:a});if(Me(d,ue))return null;var p=Qu({container:t,subject:n,proposedScroll:d});return p?Me(p,ue)?null:p:null},ec=Po(function(e){return e===0?0:e>0?1:-1}),Ht=function(){var e=function(t,n){return t<0?t:t>n?t-n:0};return function(r){var t=r.current,n=r.max,o=r.change,i=de(t,o),l={x:e(i.x,n.x),y:e(i.y,n.y)};return Me(l,ue)?null:l}}(),ii=function(r){var t=r.max,n=r.current,o=r.change,i={x:Math.max(n.x,t.x),y:Math.max(n.y,t.y)},l=ec(o),a=Ht({max:i,current:n,change:l});return!a||l.x!==0&&a.x===0||l.y!==0&&a.y===0},Ut=function(r,t){return ii({current:r.scroll.current,max:r.scroll.max,change:t})},rc=function(r,t){if(!Ut(r,t))return null;var n=r.scroll.max,o=r.scroll.current;return Ht({current:o,max:n,change:t})},zt=function(r,t){var n=r.frame;return n?ii({current:n.scroll.current,max:n.scroll.max,change:t}):!1},tc=function(r,t){var n=r.frame;return!n||!zt(r,t)?null:Ht({current:n.scroll.current,max:n.scroll.max,change:t})},nc=function(e){var r=e.viewport,t=e.subject,n=e.center,o=e.dragStartTime,i=e.shouldUseTimeDampening,l=oi({dragStartTime:o,container:r.frame,subject:t,center:n,shouldUseTimeDampening:i});return l&&Ut(r,l)?l:null},oc=function(e){var r=e.droppable,t=e.subject,n=e.center,o=e.dragStartTime,i=e.shouldUseTimeDampening,l=r.frame;if(!l)return null;var a=oi({dragStartTime:o,container:l.pageMarginBox,subject:t,center:n,shouldUseTimeDampening:i});return a&&zt(r,a)?a:null},An=function(e){var r=e.state,t=e.dragStartTime,n=e.shouldUseTimeDampening,o=e.scrollWindow,i=e.scrollDroppable,l=r.current.page.borderBoxCenter,a=r.dimensions.draggables[r.critical.draggable.id],s=a.page.marginBox;if(r.isWindowScrollAllowed){var d=r.viewport,p=nc({dragStartTime:t,viewport:d,subject:s,center:l,shouldUseTimeDampening:n});if(p){o(p);return}}var u=Ku({center:l,destination:ye(r.impact),droppables:r.dimensions.droppables});if(u){var c=oc({dragStartTime:t,droppable:u,subject:s,center:l,shouldUseTimeDampening:n});c&&i(u.descriptor.id,c)}},ic=function(e){var r=e.scrollWindow,t=e.scrollDroppable,n=nr(r),o=nr(t),i=null,l=function(p){i||P(!1);var u=i,c=u.shouldUseTimeDampening,f=u.dragStartTime;An({state:p,scrollWindow:n,scrollDroppable:o,dragStartTime:f,shouldUseTimeDampening:c})},a=function(p){i&&P(!1);var u=Date.now(),c=!1,f=function(){c=!0};An({state:p,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:f,scrollDroppable:f}),i={dragStartTime:u,shouldUseTimeDampening:c},c&&l(p)},s=function(){i&&(n.cancel(),o.cancel(),i=null)};return{start:a,stop:s,scroll:l}},ac=function(e){var r=e.move,t=e.scrollDroppable,n=e.scrollWindow,o=function(d,p){var u=de(d.current.client.selection,p);r({client:u})},i=function(d,p){if(!zt(d,p))return p;var u=tc(d,p);if(!u)return t(d.descriptor.id,p),null;var c=be(p,u);t(d.descriptor.id,c);var f=be(p,c);return f},l=function(d,p,u){if(!d||!Ut(p,u))return u;var c=rc(p,u);if(!c)return n(u),null;var f=be(u,c);n(f);var v=be(u,f);return v},a=function(d){var p=d.scrollJumpRequest;if(p){var u=ye(d.impact);u||P(!1);var c=i(d.dimensions.droppables[u],p);if(c){var f=d.viewport,v=l(d.isWindowScrollAllowed,f,c);v&&o(d,v)}}};return a},lc=function(e){var r=e.scrollDroppable,t=e.scrollWindow,n=e.move,o=ic({scrollWindow:t,scrollDroppable:r}),i=ac({move:n,scrollWindow:t,scrollDroppable:r}),l=function(d){if(d.phase==="DRAGGING"){if(d.movementMode==="FLUID"){o.scroll(d);return}d.scrollJumpRequest&&i(d)}},a={scroll:l,start:o.start,stop:o.stop};return a},qe="data-rbd",Ve=function(){var e=qe+"-drag-handle";return{base:e,draggableId:e+"-draggable-id",contextId:e+"-context-id"}}(),Dt=function(){var e=qe+"-draggable";return{base:e,contextId:e+"-context-id",id:e+"-id"}}(),sc=function(){var e=qe+"-droppable";return{base:e,contextId:e+"-context-id",id:e+"-id"}}(),Rn={contextId:qe+"-scroll-container-context-id"},uc=function(r){return function(t){return"["+t+'="'+r+'"]'}},Qe=function(r,t){return r.map(function(n){var o=n.styles[t];return o?n.selector+" { "+o+" }":""}).join(" ")},cc="pointer-events: none;",dc=function(e){var r=uc(e),t=function(){var a=`
      cursor: -webkit-grab;
      cursor: grab;
    `;return{selector:r(Ve.contextId),styles:{always:`
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,resting:a,dragging:cc,dropAnimating:a}}}(),n=function(){var a=`
      transition: `+rr.outOfTheWay+`;
    `;return{selector:r(Dt.contextId),styles:{dragging:a,dropAnimating:a,userCancel:a}}}(),o={selector:r(sc.contextId),styles:{always:"overflow-anchor: none;"}},i={selector:"body",styles:{dragging:`
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `}},l=[n,t,o,i];return{always:Qe(l,"always"),resting:Qe(l,"resting"),dragging:Qe(l,"dragging"),dropAnimating:Qe(l,"dropAnimating"),userCancel:Qe(l,"userCancel")}},xe=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?O.useLayoutEffect:O.useEffect,gt=function(){var r=document.querySelector("head");return r||P(!1),r},Mn=function(r){var t=document.createElement("style");return r&&t.setAttribute("nonce",r),t.type="text/css",t};function pc(e,r){var t=ee(function(){return dc(e)},[e]),n=O.useRef(null),o=O.useRef(null),i=W(se(function(u){var c=o.current;c||P(!1),c.textContent=u}),[]),l=W(function(u){var c=n.current;c||P(!1),c.textContent=u},[]);xe(function(){!n.current&&!o.current||P(!1);var u=Mn(r),c=Mn(r);return n.current=u,o.current=c,u.setAttribute(qe+"-always",e),c.setAttribute(qe+"-dynamic",e),gt().appendChild(u),gt().appendChild(c),l(t.always),i(t.resting),function(){var f=function(m){var y=m.current;y||P(!1),gt().removeChild(y),m.current=null};f(n),f(o)}},[r,l,i,t.always,t.resting,e]);var a=W(function(){return i(t.dragging)},[i,t.dragging]),s=W(function(u){if(u==="DROP"){i(t.dropAnimating);return}i(t.userCancel)},[i,t.dropAnimating,t.userCancel]),d=W(function(){o.current&&i(t.resting)},[i,t.resting]),p=ee(function(){return{dragging:a,dropping:s,resting:d}},[a,s,d]);return p}var ai=function(e){return e&&e.ownerDocument?e.ownerDocument.defaultView:window};function et(e){return e instanceof ai(e).HTMLElement}function fc(e,r){var t="["+Ve.contextId+'="'+e+'"]',n=To(document.querySelectorAll(t));if(!n.length)return null;var o=Ne(n,function(i){return i.getAttribute(Ve.draggableId)===r});return!o||!et(o)?null:o}function vc(e){var r=O.useRef({}),t=O.useRef(null),n=O.useRef(null),o=O.useRef(!1),i=W(function(c,f){var v={id:c,focus:f};return r.current[c]=v,function(){var y=r.current,h=y[c];h!==v&&delete y[c]}},[]),l=W(function(c){var f=fc(e,c);f&&f!==document.activeElement&&f.focus()},[e]),a=W(function(c,f){t.current===c&&(t.current=f)},[]),s=W(function(){n.current||o.current&&(n.current=requestAnimationFrame(function(){n.current=null;var c=t.current;c&&l(c)}))},[l]),d=W(function(c){t.current=null;var f=document.activeElement;f&&f.getAttribute(Ve.draggableId)===c&&(t.current=c)},[]);xe(function(){return o.current=!0,function(){o.current=!1;var c=n.current;c&&cancelAnimationFrame(c)}},[]);var p=ee(function(){return{register:i,tryRecordFocus:d,tryRestoreFocusRecorded:s,tryShiftRecord:a}},[i,d,s,a]);return p}function gc(){var e={draggables:{},droppables:{}},r=[];function t(u){return r.push(u),function(){var f=r.indexOf(u);f!==-1&&r.splice(f,1)}}function n(u){r.length&&r.forEach(function(c){return c(u)})}function o(u){return e.draggables[u]||null}function i(u){var c=o(u);return c||P(!1),c}var l={register:function(c){e.draggables[c.descriptor.id]=c,n({type:"ADDITION",value:c})},update:function(c,f){var v=e.draggables[f.descriptor.id];v&&v.uniqueId===c.uniqueId&&(delete e.draggables[f.descriptor.id],e.draggables[c.descriptor.id]=c)},unregister:function(c){var f=c.descriptor.id,v=o(f);v&&c.uniqueId===v.uniqueId&&(delete e.draggables[f],n({type:"REMOVAL",value:c}))},getById:i,findById:o,exists:function(c){return!!o(c)},getAllByType:function(c){return Ur(e.draggables).filter(function(f){return f.descriptor.type===c})}};function a(u){return e.droppables[u]||null}function s(u){var c=a(u);return c||P(!1),c}var d={register:function(c){e.droppables[c.descriptor.id]=c},unregister:function(c){var f=a(c.descriptor.id);f&&c.uniqueId===f.uniqueId&&delete e.droppables[c.descriptor.id]},getById:s,findById:a,exists:function(c){return!!a(c)},getAllByType:function(c){return Ur(e.droppables).filter(function(f){return f.descriptor.type===c})}};function p(){e.draggables={},e.droppables={},r.length=0}return{draggable:l,droppable:d,subscribe:t,clean:p}}function mc(){var e=ee(gc,[]);return O.useEffect(function(){return function(){requestAnimationFrame(e.clean)}},[e]),e}var qt=ie.createContext(null),qr=function(){var e=document.body;return e||P(!1),e},hc={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"},bc=function(r){return"rbd-announcement-"+r};function yc(e){var r=ee(function(){return bc(e)},[e]),t=O.useRef(null);O.useEffect(function(){var i=document.createElement("div");return t.current=i,i.id=r,i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true"),U(i.style,hc),qr().appendChild(i),function(){setTimeout(function(){var s=qr();s.contains(i)&&s.removeChild(i),i===t.current&&(t.current=null)})}},[r]);var n=W(function(o){var i=t.current;if(i){i.textContent=o;return}},[]);return n}var xc=0,wc={separator:"::"};function Vt(e,r){return r===void 0&&(r=wc),ee(function(){return""+e+r.separator+xc++},[r.separator,e])}function Cc(e){var r=e.contextId,t=e.uniqueId;return"rbd-hidden-text-"+r+"-"+t}function Dc(e){var r=e.contextId,t=e.text,n=Vt("hidden-text",{separator:"-"}),o=ee(function(){return Cc({contextId:r,uniqueId:n})},[n,r]);return O.useEffect(function(){var l=document.createElement("div");return l.id=o,l.textContent=t,l.style.display="none",qr().appendChild(l),function(){var s=qr();s.contains(l)&&s.removeChild(l)}},[o,t]),o}var rt=ie.createContext(null);function li(e){var r=O.useRef(e);return O.useEffect(function(){r.current=e}),r}function Sc(){var e=null;function r(){return!!e}function t(l){return l===e}function n(l){e&&P(!1);var a={abandon:l};return e=a,a}function o(){e||P(!1),e=null}function i(){e&&(e.abandon(),o())}return{isClaimed:r,isActive:t,claim:n,release:o,tryAbandon:i}}var Ic=9,Ec=13,Yt=27,si=32,Pc=33,Tc=34,Oc=35,Ac=36,Rc=37,Mc=38,Bc=39,$c=40,Dr,Lc=(Dr={},Dr[Ec]=!0,Dr[Ic]=!0,Dr),ui=function(e){Lc[e.keyCode]&&e.preventDefault()},tt=function(){var e="visibilitychange";if(typeof document>"u")return e;var r=[e,"ms"+e,"webkit"+e,"moz"+e,"o"+e],t=Ne(r,function(n){return"on"+n in document});return t||e}(),ci=0,Bn=5;function Nc(e,r){return Math.abs(r.x-e.x)>=Bn||Math.abs(r.y-e.y)>=Bn}var $n={type:"IDLE"};function jc(e){var r=e.cancel,t=e.completed,n=e.getPhase,o=e.setPhase;return[{eventName:"mousemove",fn:function(l){var a=l.button,s=l.clientX,d=l.clientY;if(a===ci){var p={x:s,y:d},u=n();if(u.type==="DRAGGING"){l.preventDefault(),u.actions.move(p);return}u.type!=="PENDING"&&P(!1);var c=u.point;if(Nc(c,p)){l.preventDefault();var f=u.actions.fluidLift(p);o({type:"DRAGGING",actions:f})}}}},{eventName:"mouseup",fn:function(l){var a=n();if(a.type!=="DRAGGING"){r();return}l.preventDefault(),a.actions.drop({shouldBlockNextClick:!0}),t()}},{eventName:"mousedown",fn:function(l){n().type==="DRAGGING"&&l.preventDefault(),r()}},{eventName:"keydown",fn:function(l){var a=n();if(a.type==="PENDING"){r();return}if(l.keyCode===Yt){l.preventDefault(),r();return}ui(l)}},{eventName:"resize",fn:r},{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(){n().type==="PENDING"&&r()}},{eventName:"webkitmouseforcedown",fn:function(l){var a=n();if(a.type==="IDLE"&&P(!1),a.actions.shouldRespectForcePress()){r();return}l.preventDefault()}},{eventName:tt,fn:r}]}function kc(e){var r=O.useRef($n),t=O.useRef(Re),n=ee(function(){return{eventName:"mousedown",fn:function(u){if(!u.defaultPrevented&&u.button===ci&&!(u.ctrlKey||u.metaKey||u.shiftKey||u.altKey)){var c=e.findClosestDraggableId(u);if(c){var f=e.tryGetLock(c,l,{sourceEvent:u});if(f){u.preventDefault();var v={x:u.clientX,y:u.clientY};t.current(),d(f,v)}}}}}},[e]),o=ee(function(){return{eventName:"webkitmouseforcewillbegin",fn:function(u){if(!u.defaultPrevented){var c=e.findClosestDraggableId(u);if(c){var f=e.findOptionsForDraggable(c);f&&(f.shouldRespectForcePress||e.canGetLock(c)&&u.preventDefault())}}}}},[e]),i=W(function(){var u={passive:!1,capture:!0};t.current=Ce(window,[o,n],u)},[o,n]),l=W(function(){var p=r.current;p.type!=="IDLE"&&(r.current=$n,t.current(),i())},[i]),a=W(function(){var p=r.current;l(),p.type==="DRAGGING"&&p.actions.cancel({shouldBlockNextClick:!0}),p.type==="PENDING"&&p.actions.abort()},[l]),s=W(function(){var u={capture:!0,passive:!1},c=jc({cancel:a,completed:l,getPhase:function(){return r.current},setPhase:function(v){r.current=v}});t.current=Ce(window,c,u)},[a,l]),d=W(function(u,c){r.current.type!=="IDLE"&&P(!1),r.current={type:"PENDING",point:c,actions:u},s()},[s]);xe(function(){return i(),function(){t.current()}},[i])}var He;function Fc(){}var Wc=(He={},He[Tc]=!0,He[Pc]=!0,He[Ac]=!0,He[Oc]=!0,He);function Gc(e,r){function t(){r(),e.cancel()}function n(){r(),e.drop()}return[{eventName:"keydown",fn:function(i){if(i.keyCode===Yt){i.preventDefault(),t();return}if(i.keyCode===si){i.preventDefault(),n();return}if(i.keyCode===$c){i.preventDefault(),e.moveDown();return}if(i.keyCode===Mc){i.preventDefault(),e.moveUp();return}if(i.keyCode===Bc){i.preventDefault(),e.moveRight();return}if(i.keyCode===Rc){i.preventDefault(),e.moveLeft();return}if(Wc[i.keyCode]){i.preventDefault();return}ui(i)}},{eventName:"mousedown",fn:t},{eventName:"mouseup",fn:t},{eventName:"click",fn:t},{eventName:"touchstart",fn:t},{eventName:"resize",fn:t},{eventName:"wheel",fn:t,options:{passive:!0}},{eventName:tt,fn:t}]}function Hc(e){var r=O.useRef(Fc),t=ee(function(){return{eventName:"keydown",fn:function(i){if(i.defaultPrevented||i.keyCode!==si)return;var l=e.findClosestDraggableId(i);if(!l)return;var a=e.tryGetLock(l,p,{sourceEvent:i});if(!a)return;i.preventDefault();var s=!0,d=a.snapLift();r.current();function p(){s||P(!1),s=!1,r.current(),n()}r.current=Ce(window,Gc(d,p),{capture:!0,passive:!1})}}},[e]),n=W(function(){var i={passive:!1,capture:!0};r.current=Ce(window,[t],i)},[t]);xe(function(){return n(),function(){r.current()}},[n])}var mt={type:"IDLE"},Uc=120,zc=.15;function qc(e){var r=e.cancel,t=e.getPhase;return[{eventName:"orientationchange",fn:r},{eventName:"resize",fn:r},{eventName:"contextmenu",fn:function(o){o.preventDefault()}},{eventName:"keydown",fn:function(o){if(t().type!=="DRAGGING"){r();return}o.keyCode===Yt&&o.preventDefault(),r()}},{eventName:tt,fn:r}]}function Vc(e){var r=e.cancel,t=e.completed,n=e.getPhase;return[{eventName:"touchmove",options:{capture:!1},fn:function(i){var l=n();if(l.type!=="DRAGGING"){r();return}l.hasMoved=!0;var a=i.touches[0],s=a.clientX,d=a.clientY,p={x:s,y:d};i.preventDefault(),l.actions.move(p)}},{eventName:"touchend",fn:function(i){var l=n();if(l.type!=="DRAGGING"){r();return}i.preventDefault(),l.actions.drop({shouldBlockNextClick:!0}),t()}},{eventName:"touchcancel",fn:function(i){if(n().type!=="DRAGGING"){r();return}i.preventDefault(),r()}},{eventName:"touchforcechange",fn:function(i){var l=n();l.type==="IDLE"&&P(!1);var a=i.touches[0];if(a){var s=a.force>=zc;if(s){var d=l.actions.shouldRespectForcePress();if(l.type==="PENDING"){d&&r();return}if(d){if(l.hasMoved){i.preventDefault();return}r();return}i.preventDefault()}}}},{eventName:tt,fn:r}]}function Yc(e){var r=O.useRef(mt),t=O.useRef(Re),n=W(function(){return r.current},[]),o=W(function(f){r.current=f},[]),i=ee(function(){return{eventName:"touchstart",fn:function(f){if(!f.defaultPrevented){var v=e.findClosestDraggableId(f);if(v){var m=e.tryGetLock(v,a,{sourceEvent:f});if(m){var y=f.touches[0],h=y.clientX,b=y.clientY,w={x:h,y:b};t.current(),u(m,w)}}}}}},[e]),l=W(function(){var f={capture:!0,passive:!1};t.current=Ce(window,[i],f)},[i]),a=W(function(){var c=r.current;c.type!=="IDLE"&&(c.type==="PENDING"&&clearTimeout(c.longPressTimerId),o(mt),t.current(),l())},[l,o]),s=W(function(){var c=r.current;a(),c.type==="DRAGGING"&&c.actions.cancel({shouldBlockNextClick:!0}),c.type==="PENDING"&&c.actions.abort()},[a]),d=W(function(){var f={capture:!0,passive:!1},v={cancel:s,completed:a,getPhase:n},m=Ce(window,Vc(v),f),y=Ce(window,qc(v),f);t.current=function(){m(),y()}},[s,n,a]),p=W(function(){var f=n();f.type!=="PENDING"&&P(!1);var v=f.actions.fluidLift(f.point);o({type:"DRAGGING",actions:v,hasMoved:!1})},[n,o]),u=W(function(f,v){n().type!=="IDLE"&&P(!1);var m=setTimeout(p,Uc);o({type:"PENDING",point:v,actions:f,longPressTimerId:m}),d()},[d,n,o,p]);xe(function(){return l(),function(){t.current();var v=n();v.type==="PENDING"&&(clearTimeout(v.longPressTimerId),o(mt))}},[n,l,o]),xe(function(){var f=Ce(window,[{eventName:"touchmove",fn:function(){},options:{capture:!1,passive:!1}}]);return f},[])}var Kc={input:!0,button:!0,textarea:!0,select:!0,option:!0,optgroup:!0,video:!0,audio:!0};function di(e,r){if(r==null)return!1;var t=!!Kc[r.tagName.toLowerCase()];if(t)return!0;var n=r.getAttribute("contenteditable");return n==="true"||n===""?!0:r===e?!1:di(e,r.parentElement)}function Jc(e,r){var t=r.target;return et(t)?di(e,t):!1}var Xc=function(e){return Se(e.getBoundingClientRect()).center};function Zc(e){return e instanceof ai(e).Element}var Qc=function(){var e="matches";if(typeof document>"u")return e;var r=[e,"msMatchesSelector","webkitMatchesSelector"],t=Ne(r,function(n){return n in Element.prototype});return t||e}();function pi(e,r){return e==null?null:e[Qc](r)?e:pi(e.parentElement,r)}function _c(e,r){return e.closest?e.closest(r):pi(e,r)}function ed(e){return"["+Ve.contextId+'="'+e+'"]'}function rd(e,r){var t=r.target;if(!Zc(t))return null;var n=ed(e),o=_c(t,n);return!o||!et(o)?null:o}function td(e,r){var t=rd(e,r);return t?t.getAttribute(Ve.draggableId):null}function nd(e,r){var t="["+Dt.contextId+'="'+e+'"]',n=To(document.querySelectorAll(t)),o=Ne(n,function(i){return i.getAttribute(Dt.id)===r});return!o||!et(o)?null:o}function od(e){e.preventDefault()}function Sr(e){var r=e.expected,t=e.phase,n=e.isLockActive;return e.shouldWarn,!(!n()||r!==t)}function fi(e){var r=e.lockAPI,t=e.store,n=e.registry,o=e.draggableId;if(r.isClaimed())return!1;var i=n.draggable.findById(o);return!(!i||!i.options.isEnabled||!ti(t.getState(),o))}function id(e){var r=e.lockAPI,t=e.contextId,n=e.store,o=e.registry,i=e.draggableId,l=e.forceSensorStop,a=e.sourceEvent,s=fi({lockAPI:r,store:n,registry:o,draggableId:i});if(!s)return null;var d=o.draggable.getById(i),p=nd(t,d.descriptor.id);if(!p||a&&!d.options.canDragInteractiveElements&&Jc(p,a))return null;var u=r.claim(l||Re),c="PRE_DRAG";function f(){return d.options.shouldRespectForcePress}function v(){return r.isActive(u)}function m(M,S){Sr({expected:M,phase:c,isLockActive:v,shouldWarn:!0})&&n.dispatch(S())}var y=m.bind(null,"DRAGGING");function h(M){function S(){r.release(),c="COMPLETED"}c!=="PRE_DRAG"&&(S(),c!=="PRE_DRAG"&&P(!1)),n.dispatch(Qs(M.liftActionArgs)),c="DRAGGING";function Q(Y,j){if(j===void 0&&(j={shouldBlockNextClick:!1}),M.cleanup(),j.shouldBlockNextClick){var L=Ce(window,[{eventName:"click",fn:od,options:{once:!0,passive:!1,capture:!0}}]);setTimeout(L)}S(),n.dispatch(Jo({reason:Y}))}return U({isActive:function(){return Sr({expected:"DRAGGING",phase:c,isLockActive:v,shouldWarn:!1})},shouldRespectForcePress:f,drop:function(j){return Q("DROP",j)},cancel:function(j){return Q("CANCEL",j)}},M.actions)}function b(M){var S=nr(function(Y){y(function(){return Ko({client:Y})})}),Q=h({liftActionArgs:{id:i,clientSelection:M,movementMode:"FLUID"},cleanup:function(){return S.cancel()},actions:{move:S}});return U({},Q,{move:S})}function w(){var M={moveUp:function(){return y(lu)},moveRight:function(){return y(uu)},moveDown:function(){return y(su)},moveLeft:function(){return y(cu)}};return h({liftActionArgs:{id:i,clientSelection:Xc(p),movementMode:"SNAP"},cleanup:Re,actions:M})}function x(){var M=Sr({expected:"PRE_DRAG",phase:c,isLockActive:v,shouldWarn:!0});M&&r.release()}var E={isActive:function(){return Sr({expected:"PRE_DRAG",phase:c,isLockActive:v,shouldWarn:!1})},shouldRespectForcePress:f,fluidLift:b,snapLift:w,abort:x};return E}var ad=[kc,Hc,Yc];function ld(e){var r=e.contextId,t=e.store,n=e.registry,o=e.customSensors,i=e.enableDefaultSensors,l=[].concat(i?ad:[],o||[]),a=O.useState(function(){return Sc()})[0],s=W(function(b,w){b.isDragging&&!w.isDragging&&a.tryAbandon()},[a]);xe(function(){var b=t.getState(),w=t.subscribe(function(){var x=t.getState();s(b,x),b=x});return w},[a,t,s]),xe(function(){return a.tryAbandon},[a.tryAbandon]);for(var d=W(function(h){return fi({lockAPI:a,registry:n,store:t,draggableId:h})},[a,n,t]),p=W(function(h,b,w){return id({lockAPI:a,registry:n,contextId:r,store:t,draggableId:h,forceSensorStop:b,sourceEvent:w&&w.sourceEvent?w.sourceEvent:null})},[r,a,n,t]),u=W(function(h){return td(r,h)},[r]),c=W(function(h){var b=n.draggable.findById(h);return b?b.options:null},[n.draggable]),f=W(function(){a.isClaimed()&&(a.tryAbandon(),t.getState().phase!=="IDLE"&&t.dispatch(jt()))},[a,t]),v=W(a.isClaimed,[a]),m=ee(function(){return{canGetLock:d,tryGetLock:p,findClosestDraggableId:u,findOptionsForDraggable:c,tryReleaseLock:f,isLockClaimed:v}},[d,p,u,c,f,v]),y=0;y<l.length;y++)l[y](m)}var sd=function(r){return{onBeforeCapture:r.onBeforeCapture,onBeforeDragStart:r.onBeforeDragStart,onDragStart:r.onDragStart,onDragEnd:r.onDragEnd,onDragUpdate:r.onDragUpdate}};function _e(e){return e.current||P(!1),e.current}function ud(e){var r=e.contextId,t=e.setCallbacks,n=e.sensors,o=e.nonce,i=e.dragHandleUsageInstructions,l=O.useRef(null),a=li(e),s=W(function(){return sd(a.current)},[a]),d=yc(r),p=Dc({contextId:r,text:i}),u=pc(r,o),c=W(function(Y){_e(l).dispatch(Y)},[]),f=ee(function(){return ln({publishWhileDragging:eu,updateDroppableScroll:tu,updateDroppableIsEnabled:nu,updateDroppableIsCombineEnabled:ou,collectionStarting:ru},c)},[c]),v=mc(),m=ee(function(){return zu(v,f)},[v,f]),y=ee(function(){return lc(U({scrollWindow:qu,scrollDroppable:m.scrollDroppable},ln({move:Ko},c)))},[m.scrollDroppable,c]),h=vc(r),b=ee(function(){return Wu({announce:d,autoScroller:y,dimensionMarshal:m,focusMarshal:h,getResponders:s,styleMarshal:u})},[d,y,m,h,s,u]);l.current=b;var w=W(function(){var Y=_e(l),j=Y.getState();j.phase!=="IDLE"&&Y.dispatch(jt())},[]),x=W(function(){var Y=_e(l).getState();return Y.isDragging||Y.phase==="DROP_ANIMATING"},[]),E=ee(function(){return{isDragging:x,tryAbort:w}},[x,w]);t(E);var M=W(function(Y){return ti(_e(l).getState(),Y)},[]),S=W(function(){return ke(_e(l).getState())},[]),Q=ee(function(){return{marshal:m,focus:h,contextId:r,canLift:M,isMovementAllowed:S,dragHandleUsageInstructionsId:p,registry:v}},[r,m,p,h,M,S,v]);return ld({contextId:r,store:b,registry:v,customSensors:n,enableDefaultSensors:e.enableDefaultSensors!==!1}),O.useEffect(function(){return w},[w]),ie.createElement(rt.Provider,{value:Q},ie.createElement(qa,{context:qt,store:b},e.children))}var cd=0;function dd(){return ee(function(){return""+cd++},[])}function pd(e){var r=dd(),t=e.dragHandleUsageInstructions||Nr.dragHandleUsageInstructions;return ie.createElement(Hl,null,function(n){return ie.createElement(ud,{nonce:e.nonce,contextId:r,setCallbacks:n,dragHandleUsageInstructions:t,enableDefaultSensors:e.enableDefaultSensors,sensors:e.sensors,onBeforeCapture:e.onBeforeCapture,onBeforeDragStart:e.onBeforeDragStart,onDragStart:e.onDragStart,onDragUpdate:e.onDragUpdate,onDragEnd:e.onDragEnd},e.children)})}var vi=function(r){return function(t){return r===t}},fd=vi("scroll"),vd=vi("auto"),Ln=function(r,t){return t(r.overflowX)||t(r.overflowY)},gd=function(r){var t=window.getComputedStyle(r),n={overflowX:t.overflowX,overflowY:t.overflowY};return Ln(n,fd)||Ln(n,vd)},md=function(){return!1},hd=function e(r){return r==null?null:r===document.body?md()?r:null:r===document.documentElement?null:gd(r)?r:e(r.parentElement)},St=function(e){return{x:e.scrollLeft,y:e.scrollTop}},bd=function e(r){if(!r)return!1;var t=window.getComputedStyle(r);return t.position==="fixed"?!0:e(r.parentElement)},yd=function(e){var r=hd(e),t=bd(e);return{closestScrollable:r,isFixedOnPage:t}},xd=function(e){var r=e.descriptor,t=e.isEnabled,n=e.isCombineEnabled,o=e.isFixedOnPage,i=e.direction,l=e.client,a=e.page,s=e.closest,d=function(){if(!s)return null;var f=s.scrollSize,v=s.client,m=_o({scrollHeight:f.scrollHeight,scrollWidth:f.scrollWidth,height:v.paddingBox.height,width:v.paddingBox.width});return{pageMarginBox:s.page.marginBox,frameClient:v,scrollSize:f,shouldClipSubject:s.shouldClipSubject,scroll:{initial:s.scroll,current:s.scroll,max:m,diff:{value:ue,displacement:ue}}}}(),p=i==="vertical"?Mt:Bo,u=ze({page:a,withPlaceholder:null,axis:p,frame:d}),c={descriptor:r,isCombineEnabled:n,isFixedOnPage:o,axis:p,isEnabled:t,client:l,page:a,frame:d,subject:u};return c},wd=function(r,t){var n=Do(r);if(!t||r!==t)return n;var o=n.paddingBox.top-t.scrollTop,i=n.paddingBox.left-t.scrollLeft,l=o+t.scrollHeight,a=i+t.scrollWidth,s={top:o,right:a,bottom:l,left:i},d=Pt(s,n.border),p=Tt({borderBox:d,margin:n.margin,border:n.border,padding:n.padding});return p},Cd=function(e){var r=e.ref,t=e.descriptor,n=e.env,o=e.windowScroll,i=e.direction,l=e.isDropDisabled,a=e.isCombineEnabled,s=e.shouldClipSubject,d=n.closestScrollable,p=wd(r,d),u=Wr(p,o),c=function(){if(!d)return null;var v=Do(d),m={scrollHeight:d.scrollHeight,scrollWidth:d.scrollWidth};return{client:v,page:Wr(v,o),scroll:St(d),scrollSize:m,shouldClipSubject:s}}(),f=xd({descriptor:t,isEnabled:!l,isCombineEnabled:a,isFixedOnPage:n.isFixedOnPage,direction:i,client:p,page:u,closest:c});return f},Dd={passive:!1},Sd={passive:!0},Nn=function(e){return e.shouldPublishImmediately?Dd:Sd};function Vr(e){var r=O.useContext(e);return r||P(!1),r}var Ir=function(r){return r&&r.env.closestScrollable||null};function Id(e){var r=O.useRef(null),t=Vr(rt),n=Vt("droppable"),o=t.registry,i=t.marshal,l=li(e),a=ee(function(){return{id:e.droppableId,type:e.type,mode:e.mode}},[e.droppableId,e.mode,e.type]),s=O.useRef(a),d=ee(function(){return se(function(x,E){r.current||P(!1);var M={x,y:E};i.updateDroppableScroll(a.id,M)})},[a.id,i]),p=W(function(){var x=r.current;return!x||!x.env.closestScrollable?ue:St(x.env.closestScrollable)},[]),u=W(function(){var x=p();d(x.x,x.y)},[p,d]),c=ee(function(){return nr(u)},[u]),f=W(function(){var x=r.current,E=Ir(x);x&&E||P(!1);var M=x.scrollOptions;if(M.shouldPublishImmediately){u();return}c()},[c,u]),v=W(function(x,E){r.current&&P(!1);var M=l.current,S=M.getDroppableRef();S||P(!1);var Q=yd(S),Y={ref:S,descriptor:a,env:Q,scrollOptions:E};r.current=Y;var j=Cd({ref:S,descriptor:a,env:Q,windowScroll:x,direction:M.direction,isDropDisabled:M.isDropDisabled,isCombineEnabled:M.isCombineEnabled,shouldClipSubject:!M.ignoreContainerClipping}),L=Q.closestScrollable;return L&&(L.setAttribute(Rn.contextId,t.contextId),L.addEventListener("scroll",f,Nn(Y.scrollOptions))),j},[t.contextId,a,f,l]),m=W(function(){var x=r.current,E=Ir(x);return x&&E||P(!1),St(E)},[]),y=W(function(){var x=r.current;x||P(!1);var E=Ir(x);r.current=null,E&&(c.cancel(),E.removeAttribute(Rn.contextId),E.removeEventListener("scroll",f,Nn(x.scrollOptions)))},[f,c]),h=W(function(x){var E=r.current;E||P(!1);var M=Ir(E);M||P(!1),M.scrollTop+=x.y,M.scrollLeft+=x.x},[]),b=ee(function(){return{getDimensionAndWatchScroll:v,getScrollWhileDragging:m,dragStopped:y,scroll:h}},[y,v,m,h]),w=ee(function(){return{uniqueId:n,descriptor:a,callbacks:b}},[b,a,n]);xe(function(){return s.current=w.descriptor,o.droppable.register(w),function(){r.current&&y(),o.droppable.unregister(w)}},[b,a,y,w,i,o.droppable]),xe(function(){r.current&&i.updateDroppableIsEnabled(s.current.id,!e.isDropDisabled)},[e.isDropDisabled,i]),xe(function(){r.current&&i.updateDroppableIsCombineEnabled(s.current.id,e.isCombineEnabled)},[e.isCombineEnabled,i])}function ht(){}var jn={width:0,height:0,margin:Kl},Ed=function(r){var t=r.isAnimatingOpenOnMount,n=r.placeholder,o=r.animate;return t||o==="close"?jn:{height:n.client.borderBox.height,width:n.client.borderBox.width,margin:n.client.margin}},Pd=function(r){var t=r.isAnimatingOpenOnMount,n=r.placeholder,o=r.animate,i=Ed({isAnimatingOpenOnMount:t,placeholder:n,animate:o});return{display:n.display,boxSizing:"border-box",width:i.width,height:i.height,marginTop:i.margin.top,marginRight:i.margin.right,marginBottom:i.margin.bottom,marginLeft:i.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:o!=="none"?rr.placeholder:null}};function Td(e){var r=O.useRef(null),t=W(function(){r.current&&(clearTimeout(r.current),r.current=null)},[]),n=e.animate,o=e.onTransitionEnd,i=e.onClose,l=e.contextId,a=O.useState(e.animate==="open"),s=a[0],d=a[1];O.useEffect(function(){return s?n!=="open"?(t(),d(!1),ht):r.current?ht:(r.current=setTimeout(function(){r.current=null,d(!1)}),t):ht},[n,s,t]);var p=W(function(c){c.propertyName==="height"&&(o(),n==="close"&&i())},[n,i,o]),u=Pd({isAnimatingOpenOnMount:s,animate:e.animate,placeholder:e.placeholder});return ie.createElement(e.placeholder.tagName,{style:u,"data-rbd-placeholder-context-id":l,onTransitionEnd:p,ref:e.innerRef})}var Od=ie.memo(Td),Kt=ie.createContext(null),Ad=function(e){Kn(r,e);function r(){for(var n,o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return n=e.call.apply(e,[this].concat(i))||this,n.state={isVisible:!!n.props.on,data:n.props.on,animate:n.props.shouldAnimate&&n.props.on?"open":"none"},n.onClose=function(){n.state.animate==="close"&&n.setState({isVisible:!1})},n}r.getDerivedStateFromProps=function(o,i){return o.shouldAnimate?o.on?{isVisible:!0,data:o.on,animate:"open"}:i.isVisible?{isVisible:!0,data:i.data,animate:"close"}:{isVisible:!1,animate:"close",data:null}:{isVisible:!!o.on,data:o.on,animate:"none"}};var t=r.prototype;return t.render=function(){if(!this.state.isVisible)return null;var o={onClose:this.onClose,data:this.state.data,animate:this.state.animate};return this.props.children(o)},r}(ie.PureComponent),kn={dragging:5e3,dropAnimating:4500},Rd=function(r,t){return t?rr.drop(t.duration):r?rr.snap:rr.fluid},Md=function(r,t){return r?t?lr.opacity.drop:lr.opacity.combining:null},Bd=function(r){return r.forceShouldAnimate!=null?r.forceShouldAnimate:r.mode==="SNAP"};function $d(e){var r=e.dimension,t=r.client,n=e.offset,o=e.combineWith,i=e.dropping,l=!!o,a=Bd(e),s=!!i,d=s?wt.drop(n,l):wt.moveTo(n),p={position:"fixed",top:t.marginBox.top,left:t.marginBox.left,boxSizing:"border-box",width:t.borderBox.width,height:t.borderBox.height,transition:Rd(a,i),transform:d,opacity:Md(l,s),zIndex:s?kn.dropAnimating:kn.dragging,pointerEvents:"none"};return p}function Ld(e){return{transform:wt.moveTo(e.offset),transition:e.shouldAnimateDisplacement?null:"none"}}function Nd(e){return e.type==="DRAGGING"?$d(e):Ld(e)}function jd(e,r,t){t===void 0&&(t=ue);var n=window.getComputedStyle(r),o=r.getBoundingClientRect(),i=Co(o,n),l=Wr(i,t),a={client:i,tagName:r.tagName.toLowerCase(),display:n.display},s={x:i.marginBox.width,y:i.marginBox.height},d={descriptor:e,placeholder:a,displaceBy:s,client:i,page:l};return d}function kd(e){var r=Vt("draggable"),t=e.descriptor,n=e.registry,o=e.getDraggableRef,i=e.canDragInteractiveElements,l=e.shouldRespectForcePress,a=e.isEnabled,s=ee(function(){return{canDragInteractiveElements:i,shouldRespectForcePress:l,isEnabled:a}},[i,a,l]),d=W(function(f){var v=o();return v||P(!1),jd(t,v,f)},[t,o]),p=ee(function(){return{uniqueId:r,descriptor:t,options:s,getDimension:d}},[t,d,s,r]),u=O.useRef(p),c=O.useRef(!0);xe(function(){return n.draggable.register(u.current),function(){return n.draggable.unregister(u.current)}},[n.draggable]),xe(function(){if(c.current){c.current=!1;return}var f=u.current;u.current=p,n.draggable.update(p,f)},[p,n.draggable])}function Fd(e){e.preventDefault()}function Wd(e){var r=O.useRef(null),t=W(function(Y){r.current=Y},[]),n=W(function(){return r.current},[]),o=Vr(rt),i=o.contextId,l=o.dragHandleUsageInstructionsId,a=o.registry,s=Vr(Kt),d=s.type,p=s.droppableId,u=ee(function(){return{id:e.draggableId,index:e.index,type:d,droppableId:p}},[e.draggableId,e.index,d,p]),c=e.children,f=e.draggableId,v=e.isEnabled,m=e.shouldRespectForcePress,y=e.canDragInteractiveElements,h=e.isClone,b=e.mapped,w=e.dropAnimationFinished;if(!h){var x=ee(function(){return{descriptor:u,registry:a,getDraggableRef:n,canDragInteractiveElements:y,shouldRespectForcePress:m,isEnabled:v}},[u,a,n,y,m,v]);kd(x)}var E=ee(function(){return v?{tabIndex:0,role:"button","aria-describedby":l,"data-rbd-drag-handle-draggable-id":f,"data-rbd-drag-handle-context-id":i,draggable:!1,onDragStart:Fd}:null},[i,l,f,v]),M=W(function(Y){b.type==="DRAGGING"&&b.dropping&&Y.propertyName==="transform"&&w()},[w,b]),S=ee(function(){var Y=Nd(b),j=b.type==="DRAGGING"&&b.dropping?M:null,L={innerRef:t,draggableProps:{"data-rbd-draggable-context-id":i,"data-rbd-draggable-id":f,style:Y,onTransitionEnd:j},dragHandleProps:E};return L},[i,E,f,b,M,t]),Q=ee(function(){return{draggableId:u.id,type:u.type,source:{index:u.index,droppableId:u.droppableId}}},[u.droppableId,u.id,u.index,u.type]);return c(S,b.snapshot,Q)}var gi=function(e,r){return e===r},mi=function(e){var r=e.combine,t=e.destination;return t?t.droppableId:r?r.droppableId:null},Gd=function(r){return r.combine?r.combine.draggableId:null},Hd=function(r){return r.at&&r.at.type==="COMBINE"?r.at.combine.draggableId:null};function Ud(){var e=se(function(o,i){return{x:o,y:i}}),r=se(function(o,i,l,a,s){return{isDragging:!0,isClone:i,isDropAnimating:!!s,dropAnimation:s,mode:o,draggingOver:l,combineWith:a,combineTargetFor:null}}),t=se(function(o,i,l,a,s,d,p){return{mapped:{type:"DRAGGING",dropping:null,draggingOver:s,combineWith:d,mode:i,offset:o,dimension:l,forceShouldAnimate:p,snapshot:r(i,a,s,d,null)}}}),n=function(i,l){if(i.isDragging){if(i.critical.draggable.id!==l.draggableId)return null;var a=i.current.client.offset,s=i.dimensions.draggables[l.draggableId],d=ye(i.impact),p=Hd(i.impact),u=i.forceShouldAnimate;return t(e(a.x,a.y),i.movementMode,s,l.isClone,d,p,u)}if(i.phase==="DROP_ANIMATING"){var c=i.completed;if(c.result.draggableId!==l.draggableId)return null;var f=l.isClone,v=i.dimensions.draggables[l.draggableId],m=c.result,y=m.mode,h=mi(m),b=Gd(m),w=i.dropDuration,x={duration:w,curve:Ft.drop,moveTo:i.newHomeClientOffset,opacity:b?lr.opacity.drop:null,scale:b?lr.scale.drop:null};return{mapped:{type:"DRAGGING",offset:i.newHomeClientOffset,dimension:v,dropping:x,draggingOver:h,combineWith:b,mode:y,forceShouldAnimate:null,snapshot:r(y,f,h,b,x)}}}return null};return n}function hi(e){return{isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:e,combineWith:null}}var zd={mapped:{type:"SECONDARY",offset:ue,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:hi(null)}};function qd(){var e=se(function(l,a){return{x:l,y:a}}),r=se(hi),t=se(function(l,a,s){return a===void 0&&(a=null),{mapped:{type:"SECONDARY",offset:l,combineTargetFor:a,shouldAnimateDisplacement:s,snapshot:r(a)}}}),n=function(a){return a?t(ue,a,!0):null},o=function(a,s,d,p){var u=d.displaced.visible[a],c=!!(p.inVirtualList&&p.effected[a]),f=Zr(d),v=f&&f.draggableId===a?s:null;if(!u){if(!c)return n(v);if(d.displaced.invisible[a])return null;var m=Ke(p.displacedBy.point),y=e(m.x,m.y);return t(y,v,!0)}if(c)return n(v);var h=d.displacedBy.point,b=e(h.x,h.y);return t(b,v,u.shouldAnimate)},i=function(a,s){if(a.isDragging)return a.critical.draggable.id===s.draggableId?null:o(s.draggableId,a.critical.draggable.id,a.impact,a.afterCritical);if(a.phase==="DROP_ANIMATING"){var d=a.completed;return d.result.draggableId===s.draggableId?null:o(s.draggableId,d.result.draggableId,d.impact,d.afterCritical)}return null};return i}var Vd=function(){var r=Ud(),t=qd(),n=function(i,l){return r(i,l)||t(i,l)||zd};return n},Yd={dropAnimationFinished:Xo},Kd=xo(Vd,Yd,null,{context:qt,pure:!0,areStatePropsEqual:gi})(Wd);function bi(e){var r=Vr(Kt),t=r.isUsingCloneFor;return t===e.draggableId&&!e.isClone?null:ie.createElement(Kd,e)}function Jd(e){var r=typeof e.isDragDisabled=="boolean"?!e.isDragDisabled:!0,t=!!e.disableInteractiveElementBlocking,n=!!e.shouldRespectForcePress;return ie.createElement(bi,U({},e,{isClone:!1,isEnabled:r,canDragInteractiveElements:t,shouldRespectForcePress:n}))}function Xd(e){var r=O.useContext(rt);r||P(!1);var t=r.contextId,n=r.isMovementAllowed,o=O.useRef(null),i=O.useRef(null),l=e.children,a=e.droppableId,s=e.type,d=e.mode,p=e.direction,u=e.ignoreContainerClipping,c=e.isDropDisabled,f=e.isCombineEnabled,v=e.snapshot,m=e.useClone,y=e.updateViewportMaxScroll,h=e.getContainerForClone,b=W(function(){return o.current},[]),w=W(function(L){o.current=L},[]);W(function(){return i.current},[]);var x=W(function(L){i.current=L},[]),E=W(function(){n()&&y({maxScroll:ri()})},[n,y]);Id({droppableId:a,type:s,mode:d,direction:p,isDropDisabled:c,isCombineEnabled:f,ignoreContainerClipping:u,getDroppableRef:b});var M=ie.createElement(Ad,{on:e.placeholder,shouldAnimate:e.shouldAnimatePlaceholder},function(L){var ae=L.onClose,le=L.data,B=L.animate;return ie.createElement(Od,{placeholder:le,onClose:ae,innerRef:x,animate:B,contextId:t,onTransitionEnd:E})}),S=ee(function(){return{innerRef:w,placeholder:M,droppableProps:{"data-rbd-droppable-id":a,"data-rbd-droppable-context-id":t}}},[t,a,M,w]),Q=m?m.dragging.draggableId:null,Y=ee(function(){return{droppableId:a,type:s,isUsingCloneFor:Q}},[a,Q,s]);function j(){if(!m)return null;var L=m.dragging,ae=m.render,le=ie.createElement(bi,{draggableId:L.draggableId,index:L.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0},function(B,T){return ae(B,T,L)});return Bi.createPortal(le,h())}return ie.createElement(Kt.Provider,{value:Y},l(S,v),j())}var bt=function(r,t){return r===t.droppable.type},Fn=function(r,t){return t.draggables[r.draggable.id]},Zd=function(){var r={placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1},useClone:null},t=U({},r,{shouldAnimatePlaceholder:!1}),n=se(function(l){return{draggableId:l.id,type:l.type,source:{index:l.index,droppableId:l.droppableId}}}),o=se(function(l,a,s,d,p,u){var c=p.descriptor.id,f=p.descriptor.droppableId===l;if(f){var v=u?{render:u,dragging:n(p.descriptor)}:null,m={isDraggingOver:s,draggingOverWith:s?c:null,draggingFromThisWith:c,isUsingPlaceholder:!0};return{placeholder:p.placeholder,shouldAnimatePlaceholder:!1,snapshot:m,useClone:v}}if(!a)return t;if(!d)return r;var y={isDraggingOver:s,draggingOverWith:c,draggingFromThisWith:null,isUsingPlaceholder:!0};return{placeholder:p.placeholder,shouldAnimatePlaceholder:!0,snapshot:y,useClone:null}}),i=function(a,s){var d=s.droppableId,p=s.type,u=!s.isDropDisabled,c=s.renderClone;if(a.isDragging){var f=a.critical;if(!bt(p,f))return t;var v=Fn(f,a.dimensions),m=ye(a.impact)===d;return o(d,u,m,m,v,c)}if(a.phase==="DROP_ANIMATING"){var y=a.completed;if(!bt(p,y.critical))return t;var h=Fn(y.critical,a.dimensions);return o(d,u,mi(y.result)===d,ye(y.impact)===d,h,c)}if(a.phase==="IDLE"&&a.completed&&!a.shouldFlush){var b=a.completed;if(!bt(p,b.critical))return t;var w=ye(b.impact)===d,x=!!(b.impact.at&&b.impact.at.type==="COMBINE"),E=b.critical.droppable.id===d;return w?x?r:t:E?r:t}return t};return i},Qd={updateViewportMaxScroll:au};function _d(){return document.body||P(!1),document.body}var ep={mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:_d},yi=xo(Zd,Qd,null,{context:qt,pure:!0,areStatePropsEqual:gi})(Xd);yi.defaultProps=ep;const xi=({currentColumn:e,cardInfo:r})=>{const[t,n]=O.useState(!1),o=O.useRef();function i(s){}const{board:l}=Te(Le),a=l.filter==="default"?r:r.filter(s=>s.priority===l.filter);return O.useEffect(()=>{const s=o.current,d=()=>{n(s.scrollTop>0)};return s.addEventListener("scroll",d),()=>{s.removeEventListener("scroll",d)}},[]),g.jsx(La,{ref:o,$scrollable:t,children:a.map((s,d)=>g.jsx("li",{children:g.jsx(Jd,{draggableId:s._id,index:d,children:p=>g.jsxs("div",{onClick:()=>(s._id,void 0),...p.dragHandleProps,...p.draggableProps,ref:p.innerRef,children:[g.jsx(io,{currentColumn:e,cardInfo:s,index:d}),p.placeholder]})})},s._id))})};xi.propTypes={currentColumn:te.string,cardInfo:te.array,columnsInfo:te.array};const rp=C.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 335px;
  background-color: ${e=>e.theme.colors.accentTextColor};
  border: none;
  border-radius: 8px;
  padding: 14px 0;
  cursor: pointer;

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.modalBtnHover};
  }

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 260px;
  }
`,tp=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,np=C(Yn)`
  font-size: 14px;
  color: ${e=>e.theme.colors.modalPlusIcon};
`,op=C.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,wi=({handleCardModalOpen:e,val:r})=>g.jsxs(rp,{type:"button",onClick:()=>e(r),children:[g.jsx(tp,{children:g.jsx(np,{})}),g.jsx(op,{children:"Add another card"})]});wi.propTypes={handleCardModalOpen:te.func,val:te.string};const ip=C.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-width: 335px;
  height: 56px;
  background-color: ${e=>e.theme.colors.addColumnBtn};
  border: none;
  border-radius: 8px;
  padding: 14px 0;
  cursor: pointer;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 95%;
  }
`,ap=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.addColumnPlusWrapper};
`,lp=C(Yn)`
  font-size: 14px;
  color: ${e=>e.theme.colors.addColumnBtn};
`,sp=C.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,Ci=({onClick:e})=>g.jsxs(ip,{type:"button",onClick:e,children:[g.jsx(ap,{children:g.jsx(lp,{})}),g.jsx(sp,{children:"Add another column"})]});Ci.propTypes={onClick:te.func};const up=C.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: ${e=>e.theme.colors.modalBgColor};
z-index: 5;
`,cp=C.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  width: 100%;
  max-width: 350px;
  min-height: 221px;
  z-index: 10;
  background-color: ${e=>e.theme.colors.modalWindowsBgColor};
  border-radius: 10px;
`,dp=C.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,pp=C.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,fp=C.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,vp=C.input`
  width: 100%;
  /* max-width: 352px; */
  height: 49px;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  background-color: transparent;

  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  outline: none;
  margin-bottom: 24px;
`,gp=C(sr)`
font-size: 2.4rem;
  color: ${e=>e.theme.colors.secondaryTextColor};
  position: absolute;
  // top: 1.4rem;
  right: 0;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,Di=({openColumnModal:e,onSubmitColumnClick:r})=>{O.useEffect(()=>{const n=o=>{o.code==="Escape"&&e()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.body.style.overflow="auto"}},[e]);const t=n=>{n.target===n.currentTarget&&e()};return g.jsx(up,{onClick:t,children:g.jsxs(cp,{className:"modal",children:[g.jsx(dp,{onClick:e,type:"button",children:g.jsx(gp,{})}),g.jsxs("div",{children:[g.jsx(pp,{children:"Add column"}),g.jsxs(fp,{onSubmit:r,children:[g.jsx(vp,{autoFocus:!0,type:"text",placeholder:"Title",name:"title"}),g.jsx(Yr,{type:"submit",btnText:"Add"})]})]})]})})};Di.propTypes={openColumnModal:te.func.isRequired,onSubmitColumnClick:te.func.isRequired};const mp=C.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(46, 46, 46, 0.7);
`,hp=C.div`
  position: absolute;
  z-index: 20px;
  width: 335px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  border-radius: 8px;
  background-color: ${e=>e.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`,bp=C.div`
  padding: 24px;
  position: relative;
`,yp=C(sr)`
  font-size: 24px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;

  transition: all var(--primary-transition);

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,xp=C.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 24px;
`,wp=C.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`,Cp=C(Ye)`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  width: 100%;
  height: 49px;
  color: ${e=>e.theme.colors.burgerColor};
  background: ${e=>e.theme.colors.needHelpBgColor};
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  opacity: 0.4;
  padding: 14px 18px;

  &:focus {
    opacity: 1;
    outline: none;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.burgerColor};
  }
`,Dp=C(Ye)`
  resize: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  width: 100%;
  height: 154px;
  color: ${e=>e.theme.colors.burgerColor};
  background: ${e=>e.theme.colors.needHelpBgColor};
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  opacity: 0.4;
  padding: 14px 18px;

  &:focus {
    opacity: 1;
    outline: none;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.burgerColor};
  }
`,Sp=C.div`
  width: 80px;
  height: 36px;
  margin-bottom: 18px;
`,Ip=C.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Ep=C.div`
  display: flex;
  gap: 8px;
`,Er=C.label`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`,Pp=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},Pr=C(Ye)`
  appearance: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: ${Pp};

  &:checked {
    border: 3px double white;
  }
`,Tp=C.div`
  margin-bottom: 45px;
`,Op=C.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Ap=C.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.accentTextColor};
`,Rp=zn().shape({title:jr().required(),description:jr()}),Si=({onClose:e,columnId:r})=>{const[t,n]=O.useState("without"),o=We();O.useState(Qn());const{board:i}=Te(Le),l=s=>{n(s.target.value)},a=async(s,{resetForm:d})=>{const p={titleCard:s.title,description:s.description,priority:t,deadline:"2024-02-08",columnId:r};await o($i(p)),o(Oe(i._id)),Ae.success("You have successfully added the card!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"}),d(),e()};return g.jsx(qn,{initialValues:{title:"",description:""},validationSchema:Rp,onSubmit:a,children:g.jsxs(Vn,{autoComplete:"off",children:[g.jsxs(wp,{children:[g.jsx("label",{htmlFor:"title",children:g.jsx(Cp,{autoFocus:!0,type:"text",name:"title",placeholder:"Title",required:!0})}),g.jsx("label",{htmlFor:"description",children:g.jsx(Dp,{component:"textarea",name:"description",rows:"5",cols:"33",placeholder:"Description"})})]}),g.jsxs(Sp,{children:[g.jsx(Ip,{children:"Label color"}),g.jsxs(Ep,{role:"group",children:[g.jsx(Er,{htmlFor:"low",children:g.jsx(Pr,{type:"radio",name:"priority",value:"low",onChange:l,checked:t==="low"})}),g.jsx(Er,{htmlFor:"medium",children:g.jsx(Pr,{type:"radio",name:"priority",value:"medium",onChange:l,checked:t==="medium"})}),g.jsx(Er,{htmlFor:"high",children:g.jsx(Pr,{type:"radio",name:"priority",value:"high",onChange:l,checked:t==="high"})}),g.jsx(Er,{htmlFor:"without",children:g.jsx(Pr,{type:"radio",name:"priority",value:"without",onChange:l,checked:t==="without"})})]})]}),g.jsxs(Tp,{children:[g.jsx(Op,{children:"Deadline"}),g.jsx(Ap,{children:"Today, 8"})]}),g.jsx(Yr,{btnText:"Add"})]})})};Si.propTypes={onClose:te.func,columnId:te.string};const Ii=({onClose:e,columnId:r})=>{O.useEffect(()=>{const n=o=>{o.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[e]);const t=n=>{n.target===n.currentTarget&&e()};return g.jsx(mp,{onClick:t,children:g.jsx(hp,{children:g.jsxs(bp,{children:[g.jsx(yp,{onClick:e}),g.jsx(xp,{children:"Add card"}),g.jsx(Si,{onClose:e,columnId:r})]})})})};Ii.propTypes={onClose:te.func,columnId:te.string};const Mp=C.div`
  display: flex;
  gap: 15px;
  height: 100%;
  min-height: calc(100vh - 6rem - 9.4rem);

  overflow-x: scroll;

  &::-webkit-scrollbar {
    /* width: 12px; */
    width: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 12px;
    background-color: ${e=>e.theme.colors.scrollThumb};
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 12px;
  }

  ${e=>(e==null?void 0:e.$scrollable)&&Hn`
      &::-webkit-scrollbar {
        width: 12px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${r=>r.theme.colors.scrollThumb};
      }
      &::-webkit-scrollbar-track {
        background-color: ${r=>r.theme.colors.scrollBar};
      }
    `}

  @media(min-width: 768px) {
    min-height: calc(100vh - 6.8rem - 9.4rem);
  }

  @media (min-width: 1440px) {
    max-width: 118rem;
    height: 100%;
  }
`,Bp=C.h2`
  position: absolute;
  top: 14px;
  left: 20px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  @media only screen and (max-width: 767.9px) {
    font-size: 14px;
  }
`,$p=C.ul`
  display: flex;
  gap: 15px;
  margin-bottom: 16px;
`,Lp=C.li`
  // display: flex;
  // flex-direction: column;
  // gap: 14px;
  // margin-bottom: 20px;
`,Np=C.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  width: 335px;
  height: 56px;
  background: ${e=>e.theme.colors.addColumnBtn};
  padding: 18px 20px;
  margin-bottom: 14px;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 260px;
  }
`,jp=C.h2`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`;function kp(e){return Un({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 4 L 5 6.34375 L 5.21875 6.625 L 13 16.34375 L 13 28 L 14.59375 26.8125 L 18.59375 23.8125 L 19 23.5 L 19 16.34375 L 26.78125 6.625 L 27 6.34375 L 27 4 Z M 7.28125 6 L 24.71875 6 L 17.53125 15 L 14.46875 15 Z M 15 17 L 17 17 L 17 22.5 L 15 24 Z"},child:[]}]})(e)}const Fp=C.button`
  position: absolute;
  right: 24px;
  top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  padding: 4px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;

  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.themeMainTextColor};
`,Wp=C(kp)`
  fill: ${e=>e.theme.colors.themeMainTextColor};
  width: 2.4rem;
  height: 2.4rem;
`,Gp=C.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(46, 46, 46, 0.7);
`,Hp=C.div`
  position: absolute;
  z-index: 11;
  width: 300px;
  padding: 24px;
  border-radius: 8px;
  background-color: ${e=>e.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
`,Up=C.h2`
  font-size: 18px;
  font-weight: 500;
  color: ${e=>e.theme.colors.secondaryTextColor};
  text-align: left;
  letter-spacing: -0.02em;
`,zp=C.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,qp=C(sr)`
  color: ${e=>e.theme.colors.secondaryTextColor};

  font-size: 2.4rem;

  transition: all var(--primary-transition);

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,Vp=C.div`
  border-top: 1px solid ${e=>e.theme.colors.modalBorderColorLowOp};
`,Yp=C.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
`,Kp=C.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,Jp=C.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  text-decoration: underline;
  color: ${e=>e.theme.colors.secondaryTextColorLowOp};
`,Xp=C.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`,Tr=C.li``,Or=C.label`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 8px;
  cursor: pointer;
`,Ar=C.input`
  display: none;
`,Rr=C.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;

  background-color: ${e=>(e==null?void 0:e.$priority)==="without"?e.theme.colors.priorityColorWithout:(e==null?void 0:e.$priority)==="low"?e.theme.colors.priorityColorLow:(e==null?void 0:e.$priority)==="medium"?e.theme.colors.priorityColorMedium:e.theme.colors.priorityColorHigh};
`,Mr=C.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid
    ${e=>(e==null?void 0:e.$priority)==="without"?e.theme.colors.priorityColorWithout:(e==null?void 0:e.$priority)==="low"?e.theme.colors.priorityColorLow:(e==null?void 0:e.$priority)==="medium"?e.theme.colors.priorityColorMedium:e.theme.colors.priorityColorHigh};
`,Br=C.span`
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${e=>(e==null?void 0:e.$priority)==="without"?e.theme.colors.priorityColorWithout:(e==null?void 0:e.$priority)==="low"?e.theme.colors.priorityColorLow:(e==null?void 0:e.$priority)==="medium"?e.theme.colors.priorityColorMedium:e.theme.colors.priorityColorHigh};
`,$r=C.span`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;

  color: ${e=>e.theme.colors.secondaryTextColorLowOp};
`,Lr=C.span`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;

  color: ${e=>e.theme.colors.secondaryTextColor};
`,Ei=({closeModal:e})=>{const r=Te(Fi),{board:t}=Te(Le),[n,o]=O.useState(t.filter),i=We(),l=s=>{i(Li(s)),i(Ni({boardId:r,filter:s}))},a=s=>{o(s.target.value)};return O.useEffect(()=>{const s=d=>{d.code==="Escape"&&e()};return window.addEventListener("keydown",s),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",s),document.body.style.overflow="auto"}},[e]),g.jsx(Gp,{id:"backdrop",onClick:s=>{s.target.id==="backdrop"&&e()},children:g.jsxs(Hp,{children:[g.jsx(zp,{onClick:()=>e(),children:g.jsx(qp,{})}),g.jsx(Up,{children:"Filters"}),g.jsxs(Vp,{children:[g.jsxs(Yp,{children:[g.jsx(Kp,{children:"Label color"}),g.jsx(Jp,{onClick:()=>{o("default"),l("default")},children:"Show all"})]}),g.jsxs(Xp,{children:[g.jsx(Tr,{children:g.jsxs(Or,{onClick:()=>l("without"),children:[g.jsx(Ar,{onChange:a,type:"radio",name:"priority",value:"without"}),n==="without"?g.jsx(Mr,{$priority:"without",children:g.jsx(Br,{$priority:"without"})}):g.jsx(Rr,{$priority:"without"}),n!=="without"?g.jsx($r,{children:"Without priority"}):g.jsx(Lr,{children:"Without priority"})]})}),g.jsx(Tr,{children:g.jsxs(Or,{onClick:()=>l("low"),children:[g.jsx(Ar,{onChange:a,type:"radio",name:"priority",value:"low"}),n==="low"?g.jsx(Mr,{$priority:"low",children:g.jsx(Br,{$priority:"low"})}):g.jsx(Rr,{$priority:"low"}),n!=="low"?g.jsx($r,{children:"Low"}):g.jsx(Lr,{children:"Low"})]})}),g.jsx(Tr,{children:g.jsxs(Or,{onClick:()=>l("medium"),children:[g.jsx(Ar,{onChange:a,type:"radio",name:"priority",value:"medium"}),n==="medium"?g.jsx(Mr,{$priority:"medium",children:g.jsx(Br,{$priority:"medium"})}):g.jsx(Rr,{$priority:"medium"}),n!=="medium"?g.jsx($r,{children:"Medium"}):g.jsx(Lr,{children:"Medium"})]})}),g.jsx(Tr,{children:g.jsxs(Or,{onClick:()=>l("high"),children:[g.jsx(Ar,{onChange:a,type:"radio",name:"priority",value:"high"}),n==="high"?g.jsx(Mr,{$priority:"high",children:g.jsx(Br,{$priority:"high"})}):g.jsx(Rr,{$priority:"high"}),n!=="high"?g.jsx($r,{children:"High"}):g.jsx(Lr,{children:"High"})]})})]})]})]})})};Ei.propTypes={closeModal:te.func};const Pi=()=>{const[e,r]=O.useState(!1),t=()=>{r(!e)};return g.jsxs(g.Fragment,{children:[e&&g.jsx(Ei,{closeModal:t}),g.jsxs(Fp,{onClick:t,children:[g.jsx(Wp,{}),"Filters"]})]})},Zp=()=>{const[e,r]=O.useState(!1),[t,n]=O.useState(!1),[o,i]=O.useState(),[l,a]=O.useState(!1),s=O.useRef(),d=We(),{board:p,columns:u}=Te(Le);O.useEffect(()=>{const h=s.current,b=()=>{a(h.scrollLeft>0)};return h.addEventListener("scroll",b),()=>{h.removeEventListener("scroll",b)}},[]);const c=()=>{r(h=>!h)},f=h=>{n(b=>!b),i(h)},v=async h=>{h.preventDefault();const b=h.currentTarget,w=b.elements.title.value.trim();if(w.length>0){const E={titleColumn:w,boardId:p._id};await d(ji(E)),d(Oe(p._id)),b.reset(),c(),Ae.success("You are successful add column!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})}else Ae.error("Please enter a title",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})},m=async h=>{await d(ki(h)),d(Oe(p._id)),Ae.success("You have successfully deleted the column!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})};function y(h){const{destination:b,source:w,type:x}=h;!b||w.droppableId===b.droppableId&&w.index===b.index||d(Gn({cardId:w.droppableId,newColumnId:b.droppableId})).then(()=>d(Oe(p._id))).catch(E=>{console.err("Error handling column:",E)})}return g.jsx(pd,{onDragEnd:y,children:g.jsxs(Mp,{ref:s,$scrollable:l,children:[g.jsx(Bp,{children:p==null?void 0:p.titleBoard}),(u==null?void 0:u.length)!==0&&g.jsx($p,{children:u==null?void 0:u.map(h=>g.jsx(Lp,{children:g.jsx(yi,{droppableId:h._id,type:"group",children:b=>{var w;return g.jsxs("div",{...b.droppableProps,ref:b.innerRef,children:[g.jsxs(Np,{children:[g.jsx(jp,{children:h.titleColumn}),g.jsx(Xn,{columnID:h._id,title:h.titleColumn,handleDelete:m})]}),((w=h==null?void 0:h.cards)==null?void 0:w.length)!==0&&g.jsx(xi,{currentColumn:h.titleColumn,cardInfo:h.cards,columnID:h._id}),g.jsx(wi,{handleCardModalOpen:f,val:h._id}),b.placeholder]})}})},h._id))}),g.jsx(Ci,{onClick:c}),t&&g.jsx(Ii,{onClose:f,columnId:o}),e&&g.jsx(Di,{openColumnModal:c,onSubmitColumnClick:v}),g.jsx(Pi,{})]})})};function nf(){return g.jsxs(g.Fragment,{children:[g.jsx(Pi,{}),g.jsx(Zp,{})]})}export{nf as default};
