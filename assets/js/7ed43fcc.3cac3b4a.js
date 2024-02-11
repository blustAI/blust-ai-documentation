"use strict";(self.webpackChunkblust_ai_documentation=self.webpackChunkblust_ai_documentation||[]).push([[964],{6292:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(7624),r=a(2172),i=a(1268),s=a(5388);const l={sidebar_position:4},o="Example 2: Generating Images",u={id:"creating-ai-tools/capabilities/image_example",title:"Example 2: Generating Images",description:"This example demonstrates how to configure a custom additional capability to generate images using the DALL-E 2 AI model.",source:"@site/docs/creating-ai-tools/capabilities/image_example.md",sourceDirName:"creating-ai-tools/capabilities",slug:"/creating-ai-tools/capabilities/image_example",permalink:"/docs/creating-ai-tools/capabilities/image_example",draft:!1,unlisted:!1,editUrl:"https://github.com/blustAI/blust-ai-documentation/tree/main/docs/creating-ai-tools/capabilities/image_example.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Example 1: Retrieving Weather Information",permalink:"/docs/creating-ai-tools/capabilities/weather_example"},next:{title:"Integrations",permalink:"/docs/category/integrations"}},c={},d=[];function m(e){const t={h1:"h1",img:"img",p:"p",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"example-2-generating-images",children:"Example 2: Generating Images"}),"\n",(0,n.jsx)(t.p,{children:"This example demonstrates how to configure a custom additional capability to generate images using the DALL-E 2 AI model."}),"\n",(0,n.jsxs)(i.c,{children:[(0,n.jsx)(s.c,{value:"Details",label:"Details",default:!0,children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Details",src:a(6788).c+"",width:"1184",height:"752"})})}),(0,n.jsx)(s.c,{value:"Configuration",label:"Configuration",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Configuration",src:a(72).c+"",width:"1196",height:"424"})})}),(0,n.jsx)(s.c,{value:"Parameters",label:"Parameters",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Parameters",src:a(6524).c+"",width:"1172",height:"626"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},5388:(e,t,a)=>{a.d(t,{c:()=>s});a(1504);var n=a(5456);const r={tabItem:"tabItem_Ymn6"};var i=a(7624);function s(e){let{children:t,hidden:a,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.c)(r.tabItem,s),hidden:a,children:t})}},1268:(e,t,a)=>{a.d(t,{c:()=>y});var n=a(1504),r=a(5456),i=a(3943),s=a(5592),l=a(5288),o=a(632),u=a(7128),c=a(1148);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,u.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.Uz)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._M)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=m(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[u,d]=g({queryString:a,groupId:r}),[b,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.IN)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),h=(()=>{const e=u??b;return p({value:e,tabValues:i})?e:null})();(0,l.c)((()=>{h&&o(h)}),[h]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=a(3664);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(7624);function x(e){let{className:t,block:a,selectedValue:n,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.MV)(),c=e=>{const t=e.currentTarget,a=o.indexOf(t),r=l[a].value;r!==n&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.c)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...i,className:(0,r.c)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,r.c)("tabs-container",h.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function y(e){const t=(0,f.c)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},72:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/example_genimage_config-037804f4c3d2da01bef17c5a63f03062.jpg"},6788:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/example_genimage_details-3e25ab72dab7a9033f32fa8669d1944e.jpg"},6524:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/example_genimage_params-61781f6d508549e215f0d8a9f7a2875a.jpg"},2172:(e,t,a)=>{a.d(t,{I:()=>l,M:()=>s});var n=a(1504);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);