"use strict";(self.webpackChunkblust_ai_documentation=self.webpackChunkblust_ai_documentation||[]).push([[532],{8040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=n(7624),o=n(2172);const s={sidebar_position:7,sidebar_label:"Sign in with ..."},r="Sign in with Blust.AI button",a={id:"integrating-ai-tools/sign_in_with",title:"Sign in with Blust.AI button",description:"Integrating the Sign in with blust.AI button allows users of your AI tool to seamlessly sign into their account directly from your website or application, bypassing the need to navigate through the blust.AI catalog. This feature is completely optional but highly recommended to enhance user experience.",source:"@site/docs/integrating-ai-tools/sign_in_with.md",sourceDirName:"integrating-ai-tools",slug:"/integrating-ai-tools/sign_in_with",permalink:"/docs/integrating-ai-tools/sign_in_with",draft:!1,unlisted:!1,editUrl:"https://github.com/blustAI/blust-ai-documentation/tree/main/docs/integrating-ai-tools/sign_in_with.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Sign in with ..."},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/integrating-ai-tools/API"}},l={},c=[{value:"Implementation",id:"implementation",level:4},{value:"Requirements",id:"requirements",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"sign-in-with-blustai-button",children:"Sign in with Blust.AI button"}),"\n",(0,i.jsxs)(t.p,{children:["Integrating the ",(0,i.jsx)(t.strong,{children:"Sign in with blust.AI"})," button allows users of your AI tool to seamlessly sign into their account directly from your website or application, bypassing the need to navigate through the blust.AI catalog. This feature is completely ",(0,i.jsx)(t.em,{children:"optional"})," but highly recommended to enhance user experience."]}),"\n",(0,i.jsx)(t.h4,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsxs)(t.p,{children:["To add the ",(0,i.jsx)(t.strong,{children:"Sign in with blust.AI"})," button, construct the URL for the button as follows:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"https://accounts.blust.ai/oauth2/v2/auth?client_id={YOUR CLIENT ID}&redirect_uri={URL TO REDIRECT USER AFTER AUTHORIZATION}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Replace ",(0,i.jsx)(t.code,{children:"{YOUR CLIENT ID}"})," with your actual client ID and ",(0,i.jsx)(t.code,{children:"{URL TO REDIRECT USER AFTER AUTHORIZATION}"})," with the URL where users should be redirected after successfully signing in."]}),"\n",(0,i.jsx)(t.h4,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"redirect_uri"})," must be pre-registered and included in your list of allowed redirect URIs. For more information on managing redirect URIs, refer to the ",(0,i.jsx)(t.a,{href:"/docs/integrating-ai-tools/credentials",children:"Credentials"})," section of our documentation."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Upon redirecting users to this URL, your application will receive an ",(0,i.jsx)(t.code,{children:"authorization_code"}),". You must use this code to request an Access Token, which will then allow your application to access user data and report usage. Detailed instructions for exchanging the ",(0,i.jsx)(t.code,{children:"authorization_code"})," for an ",(0,i.jsx)(t.code,{children:"Access Token"})," can be found in the ",(0,i.jsx)(t.a,{href:"/docs/integrating-ai-tools/API",children:"API"}),"  section."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Incorporating the ",(0,i.jsx)(t.strong,{children:"Sign in with blust.AI"})," button is designed to streamline the authentication process, offering a more integrated and efficient user experience within your application."]})})]})}function u(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>r});var i=n(1504);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);