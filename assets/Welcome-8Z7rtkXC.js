import{r as k,g as Ae,u as h,p as re,L as be,j as O}from"./index-oGf2uz7L.js";import{L as Ne}from"./Logo-6qeooOp1.js";import"./hoist-non-react-statics.cjs-ruMgn741.js";function F(){return F=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},F.apply(this,arguments)}function M(r,t){if(r==null)return{};var e={},n=Object.keys(r),i,s;for(s=0;s<n.length;s++)i=n[s],!(t.indexOf(i)>=0)&&(e[i]=r[i]);return e}var W=k.createContext(void 0);W.displayName="FormikContext";W.Provider;W.Consumer;function we(){var r=k.useContext(W);return r}var ze=function(t){return typeof t=="function"};function ve(r){var t=r.validate,e=r.name,n=r.render,i=r.children,s=r.as,a=r.component,u=r.className,o=M(r,["validate","name","render","children","as","component","className"]),l=we(),c=M(l,["validate","validationSchema"]),f=c.registerField,d=c.unregisterField;k.useEffect(function(){return f(e,{validate:t}),function(){d(e)}},[f,d,e,t]);var p=c.getFieldProps(F({name:e},o)),g=c.getFieldMeta(e),x={field:p,form:c};if(n)return n(F({},x,{meta:g}));if(ze(i))return i(F({},x,{meta:g}));if(a){if(typeof a=="string"){var v=o.innerRef,A=M(o,["innerRef"]);return k.createElement(a,F({ref:v},p,A,{className:u}),i)}return k.createElement(a,F({field:p,form:c},o,{className:u}),i)}var b=s||"input";if(typeof b=="string"){var I=o.innerRef,P=M(o,["innerRef"]);return k.createElement(b,F({ref:I},p,P,{className:u}),i)}return k.createElement(b,F({},p,o,{className:u}),i)}var Fe=k.forwardRef(function(r,t){var e=r.action,n=M(r,["action"]),i=e??"#",s=we(),a=s.handleReset,u=s.handleSubmit;return k.createElement("form",F({onSubmit:u,ref:t,onReset:a,action:i},n))});Fe.displayName="Form";function D(r){this._maxSize=r,this.clear()}D.prototype.clear=function(){this._size=0,this._values=Object.create(null)};D.prototype.get=function(r){return this._values[r]};D.prototype.set=function(r,t){return this._size>=this._maxSize&&this.clear(),r in this._values||this._size++,this._values[r]=t};var Re=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Ee=/^\d+$/,Pe=/^\d/,Me=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,Ie=/^\s*(['"]?)(.*?)(\1)\s*$/,ne=512,he=new D(ne),pe=new D(ne),me=new D(ne),C={Cache:D,split:Q,normalizePath:H,setter:function(r){var t=H(r);return pe.get(r)||pe.set(r,function(n,i){for(var s=0,a=t.length,u=n;s<a-1;){var o=t[s];if(o==="__proto__"||o==="constructor"||o==="prototype")return n;u=u[t[s++]]}u[t[s]]=i})},getter:function(r,t){var e=H(r);return me.get(r)||me.set(r,function(i){for(var s=0,a=e.length;s<a;)if(i!=null||!t)i=i[e[s++]];else return;return i})},join:function(r){return r.reduce(function(t,e){return t+(ie(e)||Ee.test(e)?"["+e+"]":(t?".":"")+e)},"")},forEach:function(r,t,e){Le(Array.isArray(r)?r:Q(r),t,e)}};function H(r){return he.get(r)||he.set(r,Q(r).map(function(t){return t.replace(Ie,"$2")}))}function Q(r){return r.match(Re)||[""]}function Le(r,t,e){var n=r.length,i,s,a,u;for(s=0;s<n;s++)i=r[s],i&&(Ze(i)&&(i='"'+i+'"'),u=ie(i),a=!u&&/^\d+$/.test(i),t.call(e,i,u,a,s,r))}function ie(r){return typeof r=="string"&&r&&["'",'"'].indexOf(r.charAt(0))!==-1}function Ve(r){return r.match(Pe)&&!r.match(Ee)}function Ue(r){return Me.test(r)}function Ze(r){return!ie(r)&&(Ve(r)||Ue(r))}const qe=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,B=r=>r.match(qe)||[],G=r=>r[0].toUpperCase()+r.slice(1),se=(r,t)=>B(r).join(t).toLowerCase(),$e=r=>B(r).reduce((t,e)=>`${t}${t?e[0].toUpperCase()+e.slice(1).toLowerCase():e.toLowerCase()}`,""),We=r=>G($e(r)),Be=r=>se(r,"_"),Ge=r=>se(r,"-"),Ye=r=>G(se(r," ")),Ke=r=>B(r).map(G).join(" ");var J={words:B,upperFirst:G,camelCase:$e,pascalCase:We,snakeCase:Be,kebabCase:Ge,sentenceCase:Ye,titleCase:Ke},ae={exports:{}};ae.exports=function(r){return _e(Xe(r),r)};ae.exports.array=_e;function _e(r,t){var e=r.length,n=new Array(e),i={},s=e,a=He(t),u=Je(r);for(t.forEach(function(l){if(!u.has(l[0])||!u.has(l[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||o(r[s],s,new Set);return n;function o(l,c,f){if(f.has(l)){var d;try{d=", node was:"+JSON.stringify(l)}catch{d=""}throw new Error("Cyclic dependency"+d)}if(!u.has(l))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(l));if(!i[c]){i[c]=!0;var p=a.get(l)||new Set;if(p=Array.from(p),c=p.length){f.add(l);do{var g=p[--c];o(g,u.get(g),f)}while(c);f.delete(l)}n[--e]=l}}}function Xe(r){for(var t=new Set,e=0,n=r.length;e<n;e++){var i=r[e];t.add(i[0]),t.add(i[1])}return Array.from(t)}function He(r){for(var t=new Map,e=0,n=r.length;e<n;e++){var i=r[e];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function Je(r){for(var t=new Map,e=0,n=r.length;e<n;e++)t.set(r[e],e);return t}var Qe=ae.exports;const et=Ae(Qe),tt=Object.prototype.toString,rt=Error.prototype.toString,nt=RegExp.prototype.toString,it=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",st=/^Symbol\((.*)\)(.*)$/;function at(r){return r!=+r?"NaN":r===0&&1/r<0?"-0":""+r}function xe(r,t=!1){if(r==null||r===!0||r===!1)return""+r;const e=typeof r;if(e==="number")return at(r);if(e==="string")return t?`"${r}"`:r;if(e==="function")return"[Function "+(r.name||"anonymous")+"]";if(e==="symbol")return it.call(r).replace(st,"Symbol($1)");const n=tt.call(r).slice(8,-1);return n==="Date"?isNaN(r.getTime())?""+r:r.toISOString(r):n==="Error"||r instanceof Error?"["+rt.call(r)+"]":n==="RegExp"?nt.call(r):null}function T(r,t){let e=xe(r,t);return e!==null?e:JSON.stringify(r,function(n,i){let s=xe(this[n],t);return s!==null?s:i},2)}function ke(r){return r==null?[]:[].concat(r)}let Oe,ut=/\$\{\s*(\w+)\s*\}/g;Oe=Symbol.toStringTag;class y extends Error{static formatError(t,e){const n=e.label||e.path||"this";return n!==e.path&&(e=Object.assign({},e,{path:n})),typeof t=="string"?t.replace(ut,(i,s)=>T(e[s])):typeof t=="function"?t(e):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,e,n,i,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[Oe]="Error",this.name="ValidationError",this.value=e,this.path=n,this.type=i,this.errors=[],this.inner=[],ke(t).forEach(a=>{if(y.isError(a)){this.errors.push(...a.errors);const u=a.inner.length?a.inner:[a];this.inner.push(...u)}else this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!s&&Error.captureStackTrace&&Error.captureStackTrace(this,y)}}let E={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:r,type:t,value:e,originalValue:n})=>{const i=n!=null&&n!==e?` (cast from the value \`${T(n,!0)}\`).`:".";return t!=="mixed"?`${r} must be a \`${t}\` type, but the final value was: \`${T(e,!0)}\``+i:`${r} must match the configured type. The validated value was: \`${T(e,!0)}\``+i}},w={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},ot={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},ee={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},lt={isValue:"${path} field must be ${value}"},te={noUnknown:"${path} field has unspecified keys: ${unknown}"},ct={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},ft={notType:r=>{const{path:t,value:e,spec:n}=r,i=n.types.length;if(Array.isArray(e)){if(e.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${e.length} for value: \`${T(e,!0)}\``;if(e.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${e.length} for value: \`${T(e,!0)}\``}return y.formatError(E.notType,r)}};Object.assign(Object.create(null),{mixed:E,string:w,number:ot,date:ee,object:te,array:ct,boolean:lt,tuple:ft});const ue=r=>r&&r.__isYupSchema__;class Z{static fromOptions(t,e){if(!e.then&&!e.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:n,then:i,otherwise:s}=e,a=typeof n=="function"?n:(...u)=>u.every(o=>o===n);return new Z(t,(u,o)=>{var l;let c=a(...u)?i:s;return(l=c==null?void 0:c(o))!=null?l:o})}constructor(t,e){this.fn=void 0,this.refs=t,this.refs=t,this.fn=e}resolve(t,e){let n=this.refs.map(s=>s.getValue(e==null?void 0:e.value,e==null?void 0:e.parent,e==null?void 0:e.context)),i=this.fn(n,t,e);if(i===void 0||i===t)return t;if(!ue(i))throw new TypeError("conditions must return a schema object");return i.resolve(e)}}const V={context:"$",value:"."};class j{constructor(t,e={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===V.context,this.isValue=this.key[0]===V.value,this.isSibling=!this.isContext&&!this.isValue;let n=this.isContext?V.context:this.isValue?V.value:"";this.path=this.key.slice(n.length),this.getter=this.path&&C.getter(this.path,!0),this.map=e.map}getValue(t,e,n){let i=this.isContext?n:this.isValue?t:e;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,e){return this.getValue(t,e==null?void 0:e.parent,e==null?void 0:e.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}j.prototype.__isYupRef=!0;const S=r=>r==null;function z(r){function t({value:e,path:n="",options:i,originalValue:s,schema:a},u,o){const{name:l,test:c,params:f,message:d,skipAbsent:p}=r;let{parent:g,context:x,abortEarly:v=a.spec.abortEarly,disableStackTrace:A=a.spec.disableStackTrace}=i;function b(m){return j.isRef(m)?m.getValue(e,g,x):m}function I(m={}){var ce;const N=Object.assign({value:e,originalValue:s,label:a.spec.label,path:m.path||n,spec:a.spec},f,m.params);for(const de of Object.keys(N))N[de]=b(N[de]);const fe=new y(y.formatError(m.message||d,N),e,N.path,m.type||l,(ce=m.disableStackTrace)!=null?ce:A);return fe.params=N,fe}const P=v?u:o;let K={path:n,parent:g,type:l,from:i.from,createError:I,resolve:b,options:i,originalValue:s,schema:a};const X=m=>{y.isError(m)?P(m):m?o(null):P(I())},oe=m=>{y.isError(m)?P(m):u(m)};if(p&&S(e))return X(!0);let L;try{var le;if(L=c.call(K,e,K),typeof((le=L)==null?void 0:le.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${K.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(L).then(X,oe)}}catch(m){oe(m);return}X(L)}return t.OPTIONS=r,t}function dt(r,t,e,n=e){let i,s,a;return t?(C.forEach(t,(u,o,l)=>{let c=o?u.slice(1,u.length-1):u;r=r.resolve({context:n,parent:i,value:e});let f=r.type==="tuple",d=l?parseInt(c,10):0;if(r.innerType||f){if(f&&!l)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(e&&d>=e.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${u}, in the path: ${t}. because there is no value at that index. `);i=e,e=e&&e[d],r=f?r.spec.types[d]:r.innerType}if(!l){if(!r.fields||!r.fields[c])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${r.type}")`);i=e,e=e&&e[c],r=r.fields[c]}s=c,a=o?"["+u+"]":"."+u}),{schema:r,parent:i,parentPath:s}):{parent:i,parentPath:t,schema:r}}class q extends Set{describe(){const t=[];for(const e of this.values())t.push(j.isRef(e)?e.describe():e);return t}resolveAll(t){let e=[];for(const n of this.values())e.push(t(n));return e}clone(){return new q(this.values())}merge(t,e){const n=this.clone();return t.forEach(i=>n.add(i)),e.forEach(i=>n.delete(i)),n}}function R(r,t=new Map){if(ue(r)||!r||typeof r!="object")return r;if(t.has(r))return t.get(r);let e;if(r instanceof Date)e=new Date(r.getTime()),t.set(r,e);else if(r instanceof RegExp)e=new RegExp(r),t.set(r,e);else if(Array.isArray(r)){e=new Array(r.length),t.set(r,e);for(let n=0;n<r.length;n++)e[n]=R(r[n],t)}else if(r instanceof Map){e=new Map,t.set(r,e);for(const[n,i]of r.entries())e.set(n,R(i,t))}else if(r instanceof Set){e=new Set,t.set(r,e);for(const n of r)e.add(R(n,t))}else if(r instanceof Object){e={},t.set(r,e);for(const[n,i]of Object.entries(r))e[n]=R(i,t)}else throw Error(`Unable to clone ${r}`);return e}class ${constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new q,this._blacklist=new q,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(E.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(e=>{e.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const e=Object.create(Object.getPrototypeOf(this));return e.type=this.type,e._typeCheck=this._typeCheck,e._whitelist=this._whitelist.clone(),e._blacklist=this._blacklist.clone(),e.internalTests=Object.assign({},this.internalTests),e.exclusiveTests=Object.assign({},this.exclusiveTests),e.deps=[...this.deps],e.conditions=[...this.conditions],e.tests=[...this.tests],e.transforms=[...this.transforms],e.spec=R(Object.assign({},this.spec,t)),e}label(t){let e=this.clone();return e.spec.label=t,e}meta(...t){if(t.length===0)return this.spec.meta;let e=this.clone();return e.spec.meta=Object.assign(e.spec.meta||{},t[0]),e}withMutation(t){let e=this._mutate;this._mutate=!0;let n=t(this);return this._mutate=e,n}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let e=this,n=t.clone();const i=Object.assign({},e.spec,n.spec);return n.spec=i,n.internalTests=Object.assign({},e.internalTests,n.internalTests),n._whitelist=e._whitelist.merge(t._whitelist,t._blacklist),n._blacklist=e._blacklist.merge(t._blacklist,t._whitelist),n.tests=e.tests,n.exclusiveTests=e.exclusiveTests,n.withMutation(s=>{t.tests.forEach(a=>{s.test(a.OPTIONS)})}),n.transforms=[...e.transforms,...n.transforms],n}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let e=this;if(e.conditions.length){let n=e.conditions;e=e.clone(),e.conditions=[],e=n.reduce((i,s)=>s.resolve(i,t),e),e=e.resolve(t)}return e}resolveOptions(t){var e,n,i,s;return Object.assign({},t,{from:t.from||[],strict:(e=t.strict)!=null?e:this.spec.strict,abortEarly:(n=t.abortEarly)!=null?n:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=t.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(t,e={}){let n=this.resolve(Object.assign({value:t},e)),i=e.assert==="ignore-optionality",s=n._cast(t,e);if(e.assert!==!1&&!n.isType(s)){if(i&&S(s))return s;let a=T(t),u=T(s);throw new TypeError(`The value of ${e.path||"field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${a} 
`+(u!==a?`result of cast: ${u}`:""))}return s}_cast(t,e){let n=t===void 0?t:this.transforms.reduce((i,s)=>s.call(this,i,t,this),t);return n===void 0&&(n=this.getDefault(e)),n}_validate(t,e={},n,i){let{path:s,originalValue:a=t,strict:u=this.spec.strict}=e,o=t;u||(o=this._cast(o,Object.assign({assert:!1},e)));let l=[];for(let c of Object.values(this.internalTests))c&&l.push(c);this.runTests({path:s,value:o,originalValue:a,options:e,tests:l},n,c=>{if(c.length)return i(c,o);this.runTests({path:s,value:o,originalValue:a,options:e,tests:this.tests},n,i)})}runTests(t,e,n){let i=!1,{tests:s,value:a,originalValue:u,path:o,options:l}=t,c=x=>{i||(i=!0,e(x,a))},f=x=>{i||(i=!0,n(x,a))},d=s.length,p=[];if(!d)return f([]);let g={value:a,originalValue:u,path:o,options:l,schema:this};for(let x=0;x<s.length;x++){const v=s[x];v(g,c,function(b){b&&(Array.isArray(b)?p.push(...b):p.push(b)),--d<=0&&f(p)})}}asNestedTest({key:t,index:e,parent:n,parentPath:i,originalParent:s,options:a}){const u=t??e;if(u==null)throw TypeError("Must include `key` or `index` for nested validations");const o=typeof u=="number";let l=n[u];const c=Object.assign({},a,{strict:!0,parent:n,value:l,originalValue:s[u],key:void 0,[o?"index":"key"]:u,path:o||u.includes(".")?`${i||""}[${l?u:`"${u}"`}]`:(i?`${i}.`:"")+t});return(f,d,p)=>this.resolve(c)._validate(l,c,d,p)}validate(t,e){var n;let i=this.resolve(Object.assign({},e,{value:t})),s=(n=e==null?void 0:e.disableStackTrace)!=null?n:i.spec.disableStackTrace;return new Promise((a,u)=>i._validate(t,e,(o,l)=>{y.isError(o)&&(o.value=l),u(o)},(o,l)=>{o.length?u(new y(o,l,void 0,void 0,s)):a(l)}))}validateSync(t,e){var n;let i=this.resolve(Object.assign({},e,{value:t})),s,a=(n=e==null?void 0:e.disableStackTrace)!=null?n:i.spec.disableStackTrace;return i._validate(t,Object.assign({},e,{sync:!0}),(u,o)=>{throw y.isError(u)&&(u.value=o),u},(u,o)=>{if(u.length)throw new y(u,t,void 0,void 0,a);s=o}),s}isValid(t,e){return this.validate(t,e).then(()=>!0,n=>{if(y.isError(n))return!1;throw n})}isValidSync(t,e){try{return this.validateSync(t,e),!0}catch(n){if(y.isError(n))return!1;throw n}}_getDefault(t){let e=this.spec.default;return e==null?e:typeof e=="function"?e.call(this,t):R(e)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,e){const n=this.clone({nullable:t});return n.internalTests.nullable=z({message:e,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),n}optionality(t,e){const n=this.clone({optional:t});return n.internalTests.optionality=z({message:e,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),n}optional(){return this.optionality(!0)}defined(t=E.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=E.notNull){return this.nullability(!1,t)}required(t=E.required){return this.clone().withMutation(e=>e.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let e=this.clone();return e.transforms.push(t),e}test(...t){let e;if(t.length===1?typeof t[0]=="function"?e={test:t[0]}:e=t[0]:t.length===2?e={name:t[0],test:t[1]}:e={name:t[0],message:t[1],test:t[2]},e.message===void 0&&(e.message=E.default),typeof e.test!="function")throw new TypeError("`test` is a required parameters");let n=this.clone(),i=z(e),s=e.exclusive||e.name&&n.exclusiveTests[e.name]===!0;if(e.exclusive&&!e.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return e.name&&(n.exclusiveTests[e.name]=!!e.exclusive),n.tests=n.tests.filter(a=>!(a.OPTIONS.name===e.name&&(s||a.OPTIONS.test===i.OPTIONS.test))),n.tests.push(i),n}when(t,e){!Array.isArray(t)&&typeof t!="string"&&(e=t,t=".");let n=this.clone(),i=ke(t).map(s=>new j(s));return i.forEach(s=>{s.isSibling&&n.deps.push(s.key)}),n.conditions.push(typeof e=="function"?new Z(i,e):Z.fromOptions(i,e)),n}typeError(t){let e=this.clone();return e.internalTests.typeError=z({message:t,name:"typeError",skipAbsent:!0,test(n){return this.schema._typeCheck(n)?!0:this.createError({params:{type:this.schema.type}})}}),e}oneOf(t,e=E.oneOf){let n=this.clone();return t.forEach(i=>{n._whitelist.add(i),n._blacklist.delete(i)}),n.internalTests.whiteList=z({message:e,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,a=s.resolveAll(this.resolve);return a.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:a}})}}),n}notOneOf(t,e=E.notOneOf){let n=this.clone();return t.forEach(i=>{n._blacklist.add(i),n._whitelist.delete(i)}),n.internalTests.blacklist=z({message:e,name:"notOneOf",test(i){let s=this.schema._blacklist,a=s.resolveAll(this.resolve);return a.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:a}}):!0}}),n}strip(t=!0){let e=this.clone();return e.spec.strip=t,e}describe(t){const e=(t?this.resolve(t):this).clone(),{label:n,meta:i,optional:s,nullable:a}=e.spec;return{meta:i,label:n,optional:s,nullable:a,default:e.getDefault(t),type:e.type,oneOf:e._whitelist.describe(),notOneOf:e._blacklist.describe(),tests:e.tests.map(o=>({name:o.OPTIONS.name,params:o.OPTIONS.params})).filter((o,l,c)=>c.findIndex(f=>f.name===o.name)===l)}}}$.prototype.__isYupSchema__=!0;for(const r of["validate","validateSync"])$.prototype[`${r}At`]=function(t,e,n={}){const{parent:i,parentPath:s,schema:a}=dt(this,t,e,n.context);return a[r](i&&i[s],Object.assign({},n,{parent:i,path:t}))};for(const r of["equals","is"])$.prototype[r]=$.prototype.oneOf;for(const r of["not","nope"])$.prototype[r]=$.prototype.notOneOf;let ht=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,pt=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,mt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,xt=r=>S(r)||r===r.trim(),gt={}.toString();function Te(){return new Se}class Se extends ${constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,e,n)=>{if(!n.spec.coerce||n.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===gt?t:i})})}required(t){return super.required(t).withMutation(e=>e.test({message:t||E.required,name:"required",skipAbsent:!0,test:n=>!!n.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(e=>e.OPTIONS.name!=="required"),t))}length(t,e=w.length){return this.test({message:e,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(n){return n.length===this.resolve(t)}})}min(t,e=w.min){return this.test({message:e,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(n){return n.length>=this.resolve(t)}})}max(t,e=w.max){return this.test({name:"max",exclusive:!0,message:e,params:{max:t},skipAbsent:!0,test(n){return n.length<=this.resolve(t)}})}matches(t,e){let n=!1,i,s;return e&&(typeof e=="object"?{excludeEmptyString:n=!1,message:i,name:s}=e:i=e),this.test({name:s||"matches",message:i||w.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&n||a.search(t)!==-1})}email(t=w.email){return this.matches(ht,{name:"email",message:t,excludeEmptyString:!0})}url(t=w.url){return this.matches(pt,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=w.uuid){return this.matches(mt,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=w.trim){return this.transform(e=>e!=null?e.trim():e).test({message:t,name:"trim",test:xt})}lowercase(t=w.lowercase){return this.transform(e=>S(e)?e:e.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:e=>S(e)||e===e.toLowerCase()})}uppercase(t=w.uppercase){return this.transform(e=>S(e)?e:e.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:e=>S(e)||e===e.toUpperCase()})}}Te.prototype=Se.prototype;const yt=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function _(r,t=0){return Number(r)||t}function bt(r){const t=yt.exec(r);if(!t)return Date.parse?Date.parse(r):Number.NaN;const e={year:_(t[1]),month:_(t[2],1)-1,day:_(t[3],1),hour:_(t[4]),minute:_(t[5]),second:_(t[6]),millisecond:t[7]?_(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:_(t[10]),minuteOffset:_(t[11])};if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let n=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(n=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(n=0-n)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+n,e.second,e.millisecond)}let wt=new Date(""),vt=r=>Object.prototype.toString.call(r)==="[object Date]";class Y extends ${constructor(){super({type:"date",check(t){return vt(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,e,n)=>!n.spec.coerce||n.isType(t)||t===null?t:(t=bt(t),isNaN(t)?Y.INVALID_DATE:new Date(t)))})}prepareParam(t,e){let n;if(j.isRef(t))n=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${e}\` must be a Date or a value that can be \`cast()\` to a Date`);n=i}return n}min(t,e=ee.min){let n=this.prepareParam(t,"min");return this.test({message:e,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(n)}})}max(t,e=ee.max){let n=this.prepareParam(t,"max");return this.test({message:e,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(n)}})}}Y.INVALID_DATE=wt;Y.prototype;function Ft(r,t=[]){let e=[],n=new Set,i=new Set(t.map(([a,u])=>`${a}-${u}`));function s(a,u){let o=C.split(a)[0];n.add(o),i.has(`${u}-${o}`)||e.push([u,o])}for(const a of Object.keys(r)){let u=r[a];n.add(a),j.isRef(u)&&u.isSibling?s(u.path,a):ue(u)&&"deps"in u&&u.deps.forEach(o=>s(o,a))}return et.array(Array.from(n),e).reverse()}function ge(r,t){let e=1/0;return r.some((n,i)=>{var s;if((s=t.path)!=null&&s.includes(n))return e=i,!0}),e}function Ce(r){return(t,e)=>ge(r,t)-ge(r,e)}const Et=(r,t,e)=>{if(typeof r!="string")return r;let n=r;try{n=JSON.parse(r)}catch{}return e.isType(n)?n:r};function U(r){if("fields"in r){const t={};for(const[e,n]of Object.entries(r.fields))t[e]=U(n);return r.setFields(t)}if(r.type==="array"){const t=r.optional();return t.innerType&&(t.innerType=U(t.innerType)),t}return r.type==="tuple"?r.optional().clone({types:r.spec.types.map(U)}):"optional"in r?r.optional():r}const $t=(r,t)=>{const e=[...C.normalizePath(t)];if(e.length===1)return e[0]in r;let n=e.pop(),i=C.getter(C.join(e),!0)(r);return!!(i&&n in i)};let ye=r=>Object.prototype.toString.call(r)==="[object Object]";function _t(r,t){let e=Object.keys(r.fields);return Object.keys(t).filter(n=>e.indexOf(n)===-1)}const kt=Ce([]);function De(r){return new je(r)}class je extends ${constructor(t){super({type:"object",check(e){return ye(e)||typeof e=="function"}}),this.fields=Object.create(null),this._sortErrors=kt,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,e={}){var n;let i=super._cast(t,e);if(i===void 0)return this.getDefault(e);if(!this._typeCheck(i))return i;let s=this.fields,a=(n=e.stripUnknown)!=null?n:this.spec.noUnknown,u=[].concat(this._nodes,Object.keys(i).filter(f=>!this._nodes.includes(f))),o={},l=Object.assign({},e,{parent:o,__validating:e.__validating||!1}),c=!1;for(const f of u){let d=s[f],p=f in i;if(d){let g,x=i[f];l.path=(e.path?`${e.path}.`:"")+f,d=d.resolve({value:x,context:e.context,parent:o});let v=d instanceof $?d.spec:void 0,A=v==null?void 0:v.strict;if(v!=null&&v.strip){c=c||f in i;continue}g=!e.__validating||!A?d.cast(i[f],l):i[f],g!==void 0&&(o[f]=g)}else p&&!a&&(o[f]=i[f]);(p!==f in o||o[f]!==i[f])&&(c=!0)}return c?o:i}_validate(t,e={},n,i){let{from:s=[],originalValue:a=t,recursive:u=this.spec.recursive}=e;e.from=[{schema:this,value:a},...s],e.__validating=!0,e.originalValue=a,super._validate(t,e,n,(o,l)=>{if(!u||!ye(l)){i(o,l);return}a=a||l;let c=[];for(let f of this._nodes){let d=this.fields[f];!d||j.isRef(d)||c.push(d.asNestedTest({options:e,key:f,parent:l,parentPath:e.path,originalParent:a}))}this.runTests({tests:c,value:l,originalValue:a,options:e},n,f=>{i(f.sort(this._sortErrors).concat(o),l)})})}clone(t){const e=super.clone(t);return e.fields=Object.assign({},this.fields),e._nodes=this._nodes,e._excludedEdges=this._excludedEdges,e._sortErrors=this._sortErrors,e}concat(t){let e=super.concat(t),n=e.fields;for(let[i,s]of Object.entries(this.fields)){const a=n[i];n[i]=a===void 0?s:a}return e.withMutation(i=>i.setFields(n,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let e={};return this._nodes.forEach(n=>{var i;const s=this.fields[n];let a=t;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[n]})),e[n]=s&&"getDefault"in s?s.getDefault(a):void 0}),e}setFields(t,e){let n=this.clone();return n.fields=t,n._nodes=Ft(t,e),n._sortErrors=Ce(Object.keys(t)),e&&(n._excludedEdges=e),n}shape(t,e=[]){return this.clone().withMutation(n=>{let i=n._excludedEdges;return e.length&&(Array.isArray(e[0])||(e=[e]),i=[...n._excludedEdges,...e]),n.setFields(Object.assign(n.fields,t),i)})}partial(){const t={};for(const[e,n]of Object.entries(this.fields))t[e]="optional"in n&&n.optional instanceof Function?n.optional():n;return this.setFields(t)}deepPartial(){return U(this)}pick(t){const e={};for(const n of t)this.fields[n]&&(e[n]=this.fields[n]);return this.setFields(e,this._excludedEdges.filter(([n,i])=>t.includes(n)&&t.includes(i)))}omit(t){const e=[];for(const n of Object.keys(this.fields))t.includes(n)||e.push(n);return this.pick(e)}from(t,e,n){let i=C.getter(t,!0);return this.transform(s=>{if(!s)return s;let a=s;return $t(s,t)&&(a=Object.assign({},s),n||delete a[t],a[e]=i(s)),a})}json(){return this.transform(Et)}noUnknown(t=!0,e=te.noUnknown){typeof t!="boolean"&&(e=t,t=!0);let n=this.test({name:"noUnknown",exclusive:!0,message:e,test(i){if(i==null)return!0;const s=_t(this.schema,i);return!t||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return n.spec.noUnknown=t,n}unknown(t=!0,e=te.noUnknown){return this.noUnknown(!t,e)}transformKeys(t){return this.transform(e=>{if(!e)return e;const n={};for(const i of Object.keys(e))n[t(i)]=e[i];return n})}camelCase(){return this.transformKeys(J.camelCase)}snakeCase(){return this.transformKeys(J.snakeCase)}constantCase(){return this.transformKeys(t=>J.snakeCase(t).toUpperCase())}describe(t){const e=(t?this.resolve(t):this).clone(),n=super.describe(t);n.fields={};for(const[s,a]of Object.entries(e.fields)){var i;let u=t;(i=u)!=null&&i.value&&(u=Object.assign({},u,{parent:u.value,value:u.value[s]})),n.fields[s]=a.describe(u)}return n}}De.prototype=je.prototype;h.p`
  font-size: 18px;
  color: ${r=>r.theme.colors.mainTextColor};
  text-align: left;
  margin-bottom: 24px;
`;h.p`
  color: ${r=>r.theme.colors.mainTextColor};
  font-size: 14px;
  text-align: left;
  margin-bottom: 14px;
`;h(ve)`
  width: 287px;
  height: 49px;
  padding: 18px;
  font-size: 14px;
  border: 1px solid ${r=>r.theme.colors.accentTextColor};
  background-color: ${r=>r.theme.colors.mainBgColor};
  border-radius: 8px;
  margin-bottom: 24px;
  opacity: 0.4;

  &:focus {
    opacity: 1;
    outline: none;
  }

  @media (min-width: 768px) {
    width: 302px;
  }
`;h.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 18px;
  height: 18px;
`;h.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  text-align: center;
`;h(ve)`
  appearance: none;

  &: checked {
    color: ${r=>r.theme.colors.whiteColor};
  }
`;h.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;h.svg`
  width: 100%;
  height: 100%;
  stroke: ${r=>r.theme.colors.whiteColor};
  stroke-width: 1.5;
  opacity: ${({ischecked:r})=>r?"1":"0.5"};
  &:active {
    opacity: 1;
  }
`;h.svg`
  width: 28px;
  height: 28px;
  background-color: white;
  background-image: url("./images/Vector.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;h.button`
  background-color: ${r=>r.theme.colors.accentTextColor};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 287px;
  height: 49px;
  padding: 0;
  border-radius: 8px;
  border: none;

  &:hover {
    background-color: #9dc888;
  }

  @media (min-width: 768px) {
    width: 302px;
  }
`;h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: #161616;
`;h.span`
  font-weight: 500;
  font-size: 14px;
  color: #161616;
`;h(Fe)`
  margin: 0;
`;h.div`
  position: relative;
  width: 335px;
  height: 433px;
  padding: 24px;
  background-color: ${r=>r.theme.colors.themeWrapper};

  @media (min-width: 768px) {
    width: 350px;
  }
`;h.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
`;h.div`
  display: flex;
  gap: 4px;
  margin-bottom: 40px;
`;De().shape({title:Te().min(2,"Too Short!").max(50,"Too Long!").required("Required")});const Ot=h.div`
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    ${r=>r.theme.colors.accentBgColor} 92.19%
  );
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  margin: 0 auto;
  padding: 0 2rem;

  /* @media (min-width: 375px) {
    max-width: 37.5rem;
  }

  @media (min-width: 768px) {
    max-width: 76.8rem;
  }

  @media (min-width: 1440px) {
    max-width: 144rem;
  } */
`,Tt=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`,St=h.p`
  color: #161616;
  text-align: center;
  font-family: ${re};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
  max-width: 300px;
  width: 100%;

  @media (min-width: 375px) {
    max-width: 335px;
  }

  @media (min-width: 768px) {
    max-width: 474px;
  }
`,Ct=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`,Dt=h(be)`
  color: #fff;
  text-align: center;
  font-family: ${re};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  border-radius: 8px;
  background-color: #161616;

  display: flex;
  width: 300px;
  padding: 14px 0px;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 375px) {
    max-width: 335px;
  }

  @media (min-width: 768px) {
    width: 344px;
  }
`,jt=h(be)`
  color: #161616;
  font-family: ${re};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`,At={width:"48px",height:"48px"},Nt={color:"#161616",font:"4rem"};function It(){return O.jsx(Ot,{children:O.jsxs(Tt,{children:[O.jsx("img",{src:"images/welcome.png",alt:"boy with laptop"}),O.jsx(Ne,{size:At,text:Nt}),O.jsx(St,{children:"Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!"}),O.jsxs(Ct,{children:[O.jsx(Dt,{to:"auth/signup",children:"Registration"}),O.jsx(jt,{to:"auth/signin",children:"Log In"})]})]})})}export{It as default};
