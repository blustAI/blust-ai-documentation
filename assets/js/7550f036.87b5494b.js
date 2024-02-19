"use strict";(self.webpackChunkblust_ai_documentation=self.webpackChunkblust_ai_documentation||[]).push([[824],{7792:(e,t,n)=>{n.d(t,{cp:()=>a});var i=n(7624),o=n(2172);function s(e){const t={a:"a",code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"AI Role Definition"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"AI Role Definition"})," is a critical component that defines the purpose and operational context of your AI tool. This definition guides how the AI interacts with inputs, making it essential for achieving desired outcomes. Properly defining the AI Role ensures the tool performs tasks accurately and efficiently.\n",(0,i.jsx)(t.em,{children:"If left blank"}),", the tool will default to the standard behavior defined by the model's authors."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"AI Model"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"AI Model"})," selection involves choosing a pre-existing model that will power your AI tool. The choice of AI model dictates the capabilities, limitations, and the cost of requests. Different models consume varying amounts of credits, which can significantly affect the operational cost of your AI tool. It is important to choose a model that not only aligns with the AI Role Definition for optimal performance but also fits within your credit budget. Please refer to the ",(0,i.jsx)(t.a,{href:"/docs/creating-ai-tools/available_models/",children:"list of available models"})," for detailed descriptions of each model."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Strategy"})}),"\n",(0,i.jsx)(t.p,{children:"By default, AI models do not retain the entire conversation context. To enable an AI tool to maintain a conversation, it is necessary to provide it with the history or context of the conversation each time. However, one of the major challenges with contemporary AI is the limitation on the size of the input message. While developers are continuously improving this aspect (for example, GPT-3.5 had a limitation of processing messages longer than 4096 tokens, GPT-4 turbo can process up to 128,000 tokens at once), the cost of interaction with such models can become significant if the conversation extends and the entire context is transmitted each time. Therefore, it is crucial to decide how many messages the model should remember. This can be configured through the following options:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Standard"}),": The system sends the AI Role Definition and the last six messages (three from the user and three responses), providing a balance between context and cost."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Last Message"}),": Only the last message from the user along with the AI Role Definition is sent. This option is suitable for AI tools where retaining the full conversation context is unnecessary."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Whole Context"}),": All previous messages are sent to the AI model. This option offers the most comprehensive context at a higher cost. If the conversation history exceeds 50% of the model's capacity, part of the text will be condensed to summarize the conversation context."]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},3596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var i=n(7624),o=n(2172),s=n(1268),a=n(5388),r=n(7792);const l={sidebar_position:3},c="Configuration",u={id:"creating-ai-tools/configuration",title:"Configuration",description:"In this section, we detail the configuration options available for customizing and optimizing your AI tool within Blust AI Studio. The settings are organized across four tabs, each dedicated to a different aspect of your tool's setup and operation.",source:"@site/docs/creating-ai-tools/configuration.mdx",sourceDirName:"creating-ai-tools",slug:"/creating-ai-tools/configuration",permalink:"/docs/creating-ai-tools/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/blustAI/blust-ai-documentation/tree/main/docs/creating-ai-tools/configuration.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dashboard",permalink:"/docs/creating-ai-tools/dashboard"},next:{title:"Capabilities",permalink:"/docs/category/capabilities"}},d={},h=[];function f(e){const t={code:"code",h1:"h1",img:"img",p:"p",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(t.p,{children:"In this section, we detail the configuration options available for customizing and optimizing your AI tool within Blust AI Studio. The settings are organized across four tabs, each dedicated to a different aspect of your tool's setup and operation."}),"\n",(0,i.jsxs)(s.c,{children:[(0,i.jsxs)(a.c,{value:"Details",label:"Details",default:!0,children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Details",src:n(660).c+"",width:"1746",height:"670"})}),(0,i.jsx)(t.p,{children:"Title, one-liner and description,  are fields that define the basic information about your AI tool. These details are essential for users to understand the purpose of your tool and are required before submitting your tool for catalog inclusion."}),(0,i.jsx)(t.p,{children:"Additionally, you can update your AI tool's avatar by providing a prompt for its description. Manual icon uploads are not supported at this time."})]}),(0,i.jsxs)(a.c,{value:"Configuration",label:"Configuration",children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Details",src:n(8188).c+"",width:"1732",height:"804"})}),(0,i.jsx)(r.cp,{})]}),(0,i.jsxs)(a.c,{value:"Appearance",label:"Appearance",children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Details",src:n(7928).c+"",width:"1802",height:"1768"})}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Single Chat Session"})}),(0,i.jsx)(t.p,{children:"When enabled, each user's interaction with the system is contained within a single thread. Disabling allows users to start new threads."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Full-Screen Only"})}),(0,i.jsx)(t.p,{children:"Ensures that the chat interface launches in full-screen mode without the option to resize or minimize."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Display Chat Topics as Project List"})}),(0,i.jsx)(t.p,{children:"This setting, when enabled, displays threads as Cards at the tool's launch, allowing users to choose from a visual list of projects. This format is particularly useful for tools designed to manage or navigate multiple distinct projects."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Stream Response in Real Time"})}),(0,i.jsx)(t.p,{children:"Activating this feature allows the AI's responses to be displayed dynamically as they are generated, offering a more interactive experience. Compatibility with real-time streaming varies by AI model, and should be verified, especially when using complex data formats like JSON."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Allow Users to Choose Preferred Language"})}),(0,i.jsx)(t.p,{children:"This option enables users to select their preferred language for each chat session, enhancing the accessibility and user-friendliness of the AI tool."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Welcome Message"})}),(0,i.jsx)(t.p,{children:"Specify a greeting to initiate every interaction, setting a welcoming or informative tone for the conversation. This message is an opportunity to personalize the user's experience with your AI tool."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Custom HTML Page"})}),(0,i.jsx)(t.p,{children:"Here, you can provide HTML code for additional content to be displayed below the chat interface. This feature allows for the integration of extra information, branding elements, or other relevant materials, visible when 'Full-Screen Only' is not active. Ensure the HTML is designed for optimal display and user interaction."})]}),(0,i.jsxs)(a.c,{value:"Access",label:"Access",children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Details",src:n(4204).c+"",width:"1806",height:"491"})}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Public"}),"\nDetermines whether your AI tool is accessible to anyone with the link or remains private for your use only."]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Free for Users"}),"\nIndicates whether your AI tool is available for free to end-users, with any associated costs being your responsibility."]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Premium"}),"\nMaking your AI tool premium restricts access to paid users only, ensuring revenue generation from user interactions. This setting excludes non-registered or free-plan users from access, necessitating a consideration of the benefits of exclusivity against the potential of reaching a broader audience initially."]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},5388:(e,t,n)=>{n.d(t,{c:()=>a});n(1504);var i=n(5456);const o={tabItem:"tabItem_Ymn6"};var s=n(7624);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.c)(o.tabItem,a),hidden:n,children:t})}},1268:(e,t,n)=>{n.d(t,{c:()=>w});var i=n(1504),o=n(5456),s=n(3943),a=n(5592),r=n(5288),l=n(632),c=n(7128),u=n(1148);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:o}}=e;return{value:t,label:n,attributes:i,default:o}}))}(n);return function(e){const t=(0,c.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const o=(0,a.Uz)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._M)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,s=h(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:s}))),[c,d]=p({queryString:n,groupId:o}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,s]=(0,u.IN)(n);return[o,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),b=(()=>{const e=c??m;return f({value:e,tabValues:s})?e:null})();(0,r.c)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=n(3664);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(7624);function v(e){let{className:t,block:n,selectedValue:i,selectValue:a,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.MV)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),o=r[n].value;o!==i&&(c(t),a(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.c)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,o.c)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,o.c)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(y,{...e,...t})]})}function w(e){const t=(0,g.c)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},660:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/configuration_tab1-f9aeb6a46014c9f9d14a2c28f5a1ae7b.jpg"},8188:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/configuration_tab2-9ed0745d6e498c7313f9b857bd3ac020.jpg"},7928:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/configuration_tab3-9b30aaf03986643481ba9a8b5bf7027f.jpg"},4204:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/configuration_tab4-9d0f872d174aa115d2b9cae82c093c29.jpg"},2172:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>a});var i=n(1504);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);