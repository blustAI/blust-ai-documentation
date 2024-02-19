"use strict";(self.webpackChunkblust_ai_documentation=self.webpackChunkblust_ai_documentation||[]).push([[768],{9812:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=a(7624),n=a(2172),i=a(1268),s=a(5388);const o={sidebar_position:3},l="Example 1: Retrieving Weather Information",c={id:"creating-ai-tools/capabilities/weather_example",title:"Example 1: Retrieving Weather Information",description:"This example demonstrates how to configure a custom additional capability for retrieving current weather information.",source:"@site/docs/creating-ai-tools/capabilities/weather_example.mdx",sourceDirName:"creating-ai-tools/capabilities",slug:"/creating-ai-tools/capabilities/weather_example",permalink:"/docs/creating-ai-tools/capabilities/weather_example",draft:!1,unlisted:!1,editUrl:"https://github.com/blustAI/blust-ai-documentation/tree/main/docs/creating-ai-tools/capabilities/weather_example.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Custom capabilities",permalink:"/docs/creating-ai-tools/capabilities/custom_capabilities"},next:{title:"Example 2: Generating Images",permalink:"/docs/creating-ai-tools/capabilities/image_example"}},u={},d=[];function m(e){const t={h1:"h1",img:"img",p:"p",...(0,n.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"example-1-retrieving-weather-information",children:"Example 1: Retrieving Weather Information"}),"\n",(0,r.jsx)(t.p,{children:"This example demonstrates how to configure a custom additional capability for retrieving current weather information."}),"\n",(0,r.jsxs)(i.c,{children:[(0,r.jsx)(s.c,{value:"Details",label:"Details",default:!0,children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Details",src:a(1636).c+"",width:"1194",height:"754"})})}),(0,r.jsx)(s.c,{value:"Configuration",label:"Configuration",children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Configuration",src:a(5220).c+"",width:"1160",height:"1865"})})}),(0,r.jsx)(s.c,{value:"Parameters",label:"Parameters",children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Parameters",src:a(7752).c+"",width:"1166",height:"1783"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},5388:(e,t,a)=>{a.d(t,{c:()=>s});a(1504);var r=a(5456);const n={tabItem:"tabItem_Ymn6"};var i=a(7624);function s(e){let{children:t,hidden:a,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.c)(n.tabItem,s),hidden:a,children:t})}},1268:(e,t,a)=>{a.d(t,{c:()=>y});var r=a(1504),n=a(5456),i=a(3943),s=a(5592),o=a(5288),l=a(632),c=a(7128),u=a(1148);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,c.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.Uz)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._M)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=m(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,d]=h({queryString:a,groupId:n}),[b,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.IN)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),g=(()=>{const e=c??b;return p({value:e,tabValues:i})?e:null})();(0,o.c)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=a(3664);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(7624);function x(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.MV)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),n=o[a].value;n!==r&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.c)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,n.c)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,n.c)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function y(e){const t=(0,f.c)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},5220:(e,t,a)=>{a.d(t,{c:()=>r});const r=a.p+"assets/images/example_weather_config-5e9a792a2bb94fac8019c857aaec7fdb.jpg"},1636:(e,t,a)=>{a.d(t,{c:()=>r});const r=a.p+"assets/images/example_weather_details-a264f659c61855c25a55fd14aefcd293.jpg"},7752:(e,t,a)=>{a.d(t,{c:()=>r});const r=a.p+"assets/images/example_weather_params-7f37ded74a8842e12b9b9b6a30e0cfe0.jpg"},2172:(e,t,a)=>{a.d(t,{I:()=>o,M:()=>s});var r=a(1504);const n={},i=r.createContext(n);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);