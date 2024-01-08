"use strict";(self.webpackChunknew_website=self.webpackChunknew_website||[]).push([[5221],{35221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>l});var a=t(87462),s=(t(67294),t(3905));t(45475);const i={title:"Flow Enums",description:"Define a fixed set of constants which create their own type. Exhaustively checked in switch statements.",slug:"/enums"},u=void 0,m={unversionedId:"enums/index",id:"enums/index",title:"Flow Enums",description:"Define a fixed set of constants which create their own type. Exhaustively checked in switch statements.",source:"@site/docs/enums/index.md",sourceDirName:"enums",slug:"/enums",permalink:"/en/docs/enums",draft:!1,editUrl:"https://github.com/facebook/flow/edit/main/website/docs/enums/index.md",tags:[],version:"current",frontMatter:{title:"Flow Enums",description:"Define a fixed set of constants which create their own type. Exhaustively checked in switch statements.",slug:"/enums"},sidebar:"docsSidebar",previous:{title:"Type Reference",permalink:"/en/docs/react/types"},next:{title:"Enabling enums in your project",permalink:"/en/docs/enums/enabling-enums"}},o={},l=[{value:"Benefits",id:"toc-benefits",level:2},{value:"Quickstart",id:"toc-quickstart",level:2},{value:"Defining enums",id:"toc-defining-enums-defining-enums",level:4},{value:"Using enums",id:"toc-using-enums-using-enums",level:4},{value:"When to use Flow Enums",id:"toc-when-to-use-flow-enums",level:2},{value:"When to not use Flow Enums",id:"toc-when-to-not-use-flow-enums",level:2}],r={toc:l};function d(e){let{components:n,...t}=e;return(0,s.mdx)("wrapper",(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("p",null,"Flow Enums define a fixed set of constants which create their own type."),(0,s.mdx)("p",null,"Unlike other features of Flow, Flow Enums exist as values at runtime, as well as existing as types."),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"./enabling-enums/"},"Read how to enable Flow Enums in your project"),"."),(0,s.mdx)("h2",{id:"toc-benefits"},"Benefits"),(0,s.mdx)("p",null,"Enums provide several benefits over existing patterns:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Reduce repetition: Enum declarations provide both the type and the value of the enum."),(0,s.mdx)("li",{parentName:"ul"},"Improve Flow performance: Enums are guaranteed to have good type-checking performance,\nunlike unions which may be expensive to type-check in certain situations."),(0,s.mdx)("li",{parentName:"ul"},"Enable new functionality: Enums come with a ",(0,s.mdx)("inlineCode",{parentName:"li"},"cast")," ",(0,s.mdx)("a",{parentName:"li",href:"./using-enums/#toc-methods"},"method"),", which converts from a primitive type to an enum type safely."),(0,s.mdx)("li",{parentName:"ul"},"Enhance safety: Enums define their own type which does not implicitly coerce to and from other types (e.g. from ",(0,s.mdx)("inlineCode",{parentName:"li"},"string"),"s),\nand are required to be ",(0,s.mdx)("a",{parentName:"li",href:"./using-enums/#toc-exhaustively-checking-enums-with-a-switch"},"exhaustively checked in switch statements"),". These properties can help prevent logic bugs.")),(0,s.mdx)("h2",{id:"toc-quickstart"},"Quickstart"),(0,s.mdx)("h4",{id:"toc-defining-enums-defining-enums"},(0,s.mdx)("a",{parentName:"h4",href:"./defining-enums"},"Defining enums")),(0,s.mdx)("p",null,"An enum named ",(0,s.mdx)("inlineCode",{parentName:"p"},"Status")," with three members: ",(0,s.mdx)("inlineCode",{parentName:"p"},"Active"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"Paused"),", and ",(0,s.mdx)("inlineCode",{parentName:"p"},"Off"),"."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-flow",metastring:"[]","[]":!0},"enum Status {\n  Active,\n  Paused,\n  Off,\n}\n")),(0,s.mdx)("p",null,"By default, enums define members with string values which mirror their names. You can also explicitly set values:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-flow",metastring:"[]","[]":!0},"enum Status {\n  Active = 'active',\n  Paused = 'paused',\n  Off = 'off',\n}\n")),(0,s.mdx)("p",null,"You can use numbers as well:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-flow",metastring:"[]","[]":!0},"enum Status {\n  Active = 1,\n  Paused = 2,\n  Off = 3,\n}\n")),(0,s.mdx)("p",null,"Values must be unique, literals, and all of the same type. Check out the ",(0,s.mdx)("a",{parentName:"p",href:"./defining-enums/"},"full docs on defining enums")," to learn more."),(0,s.mdx)("h4",{id:"toc-using-enums-using-enums"},(0,s.mdx)("a",{parentName:"h4",href:"./using-enums/"},"Using enums")),(0,s.mdx)("p",null,"To access an enum member, use dot access:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"Status.Active\n")),(0,s.mdx)("p",null,"To use the enum type as an annotation, use the enum name:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"const status: Status = Status.Active;\n")),(0,s.mdx)("p",null,"Cast from the representation type (in this case, a ",(0,s.mdx)("inlineCode",{parentName:"p"},"string"),") to the enum type:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"const status: Status | void = Status.cast(someString);\n")),(0,s.mdx)("p",null,"You can easily provide a default value with the ",(0,s.mdx)("inlineCode",{parentName:"p"},"??")," operator:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"const status: Status = Status.cast(someString) ?? Status.Off;\n")),(0,s.mdx)("p",null,"Read more about the  ",(0,s.mdx)("a",{parentName:"p",href:"./using-enums/#toc-methods"},"other methods enums provide"),", including ",(0,s.mdx)("inlineCode",{parentName:"p"},"isValid"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"members"),", and ",(0,s.mdx)("inlineCode",{parentName:"p"},"getName"),"."),(0,s.mdx)("p",null,"Cast an enum type to its representation type (must be done explicitly):"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"(status: string)\n")),(0,s.mdx)("p",null,"Checks of enums in ",(0,s.mdx)("inlineCode",{parentName:"p"},"switch")," statements are exhaustive - we ensure you check all members:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-flow",metastring:'[{"startLine":9,"startColumn":9,"endLine":9,"endColumn":14,"description":"Incomplete exhaustive check: the member `Off` of enum `Status` [1] has not been considered in check of `status`. [invalid-exhaustive-check]"}]','[{"startLine":9,"startColumn":9,"endLine":9,"endColumn":14,"description":"Incomplete':!0,exhaustive:!0,"check:":!0,the:!0,member:!0,"`Off`":!0,of:!0,enum:!0,"`Status`":!0,"[1]":!0,has:!0,not:!0,been:!0,considered:!0,in:!0,check:!0,"`status`.":!0,'[invalid-exhaustive-check]"}]':!0},"enum Status {\n  Active,\n  Paused,\n  Off,\n}\nconst status: Status = Status.Active;\n\n// ERROR: Incomplete exhaustive check\nswitch (status) {\n  case Status.Active:  break;\n  case Status.Paused: break;\n  // We forgot to add `case: Status.Off:` here, resulting in error above.\n  // Using `default:` would also work to check all remaining members.\n}\n")),(0,s.mdx)("p",null,"Read more about ",(0,s.mdx)("a",{parentName:"p",href:"./using-enums/#toc-exhaustively-checking-enums-with-a-switch"},"exhaustively checking enums"),"."),(0,s.mdx)("p",null,"Check out the ",(0,s.mdx)("a",{parentName:"p",href:"./using-enums/"},"the full docs on using enums")," to learn more."),(0,s.mdx)("h2",{id:"toc-when-to-use-flow-enums"},"When to use Flow Enums"),(0,s.mdx)("p",null,"If you previously defined a union type of literals, you can use an enum to define that type instead. Instead of"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-flow",metastring:"[]","[]":!0},"type Status =\n  | 'Active'\n  | 'Paused'\n  | 'Off';\n\nconst x: Status = 'Active';\n")),(0,s.mdx)("p",null,"or"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-flow",metastring:"[]","[]":!0},"const Status = Object.freeze({\n  Active: 'Active',\n  Paused: 'Paused',\n  Off: 'Off',\n});\ntype StatusType = $Keys<typeof Status>;\nconst x: StatusType = Status.Active;\n")),(0,s.mdx)("p",null,"you can use:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-flow",metastring:"[]","[]":!0},"enum Status {\n  Active,\n  Paused,\n  Off,\n}\nconst x: Status = Status.Active;\n")),(0,s.mdx)("p",null,"See ",(0,s.mdx)("a",{parentName:"p",href:"./migrating-legacy-patterns"},"migrating from legacy patterns")," to learn more about migrating legacy JavaScript enum patterns to Flow Enums."),(0,s.mdx)("h2",{id:"toc-when-to-not-use-flow-enums"},"When to not use Flow Enums"),(0,s.mdx)("p",null,"Enums are designed to cover many use cases and exhibit certain benefits. The design makes a variety of trade-offs to make this happen, and in certain situations,\nthese trade-offs might not be right for you. In those cases, you can continue to use existing patterns to satisfy your use cases.\n",(0,s.mdx)("a",{parentName:"p",href:"./using-enums/#toc-when-to-not-use-enums"},"Read more about those situations"),"."))}d.isMDXComponent=!0}}]);