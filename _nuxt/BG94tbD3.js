import k from"./B4JWZyzk.js";import P from"./DQ9tl4Pt.js";import b from"./Czhcgo1k.js";import{k as L,d as f,G as g,P as R,v as C,H as x,I as S,r as B,u as N,J as m,K as T,L as j,M as p,T as E,N as u,O as H,Q as O,S as A,R as w,U as D,m as $,V as q,b as d,c as I,g as y,w as _,W as v}from"./Dbvayov6.js";import{u as M}from"./BXwFhB7Z.js";import"./CzRvR1mc.js";const V=f({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,a){const e=await m[t.name]().then(o=>o.default||o);return()=>p(e,t.layoutProps,a.slots)}}),F=f({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,a){const e=L(),o=g(R),s=o===C()?x():o,r=S(()=>{let n=u(t.name)??s.meta.layout??"default";return n&&!(n in m)&&t.fallback&&(n=u(t.fallback)),n}),i=B();a.expose({layoutRef:i});const l=e.deferHydration();if(e.isHydrating){const n=e.hooks.hookOnce("app:error",l);N().beforeEach(n)}return()=>{const n=r.value&&r.value in m,c=s.meta.layoutTransition??T;return j(E,n&&c,{default:()=>p(A,{suspensible:!0,onResolve:()=>{O(l)}},{default:()=>p(G,{layoutProps:H(a.attrs,{ref:i}),key:r.value||void 0,name:r.value,shouldProvide:!t.name,hasTransition:!!c},a.slots)})}).default()}}}),G=f({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,a){const e=t.name;return t.shouldProvide&&w(D,{isCurrent:o=>e===(o.meta.layout??"default")}),()=>{var o,s;return!e||typeof e=="string"&&!(e in m)?(s=(o=a.slots).default)==null?void 0:s.call(o):p(V,{key:e,layoutProps:t.layoutProps,name:e},a.slots)}}}),J={class:"document-driven-page"},Y=f({__name:"document-driven",setup(t){const{contentHead:a}=$().public.content,{page:e,layout:o}=q();return e.value,a&&M(e),(s,r)=>{const i=k,l=P,n=b,c=F;return d(),I("div",J,[y(c,{name:u(o)||"default"},{default:_(()=>[u(e)?(d(),v(l,{key:u(e)._id,value:u(e)},{empty:_(({value:h})=>[y(i,{value:h},null,8,["value"])]),_:1},8,["value"])):(d(),v(n,{key:1}))]),_:1},8,["name"])])}}});export{Y as default};
