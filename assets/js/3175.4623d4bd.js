"use strict";(self.webpackChunknew_website=self.webpackChunknew_website||[]).push([[3175],{53175:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=o(87462),a=(o(67294),o(3905));const i={title:"Announcing Bounded Polymorphism","short-title":"Bounded Polymorphism",author:"Avik Chaudhuri",hide_table_of_contents:!0},s=void 0,l={permalink:"/blog/2015/03/12/Bounded-Polymorphism",source:"@site/blog/2015-03-12-Bounded-Polymorphism.md",title:"Announcing Bounded Polymorphism",description:"As of Flow 0.5.0, you can define polymorphic functions and classes with bounds on their type parameters. This is extremely useful for writing functions and classes that need some constraints on their type parameters. Flow's bounded polymorphism syntax looks like",date:"2015-03-12T00:00:00.000Z",formattedDate:"March 12, 2015",tags:[],hasTruncateMarker:!0,authors:[{name:"Avik Chaudhuri"}],frontMatter:{title:"Announcing Bounded Polymorphism","short-title":"Bounded Polymorphism",author:"Avik Chaudhuri",hide_table_of_contents:!0},prevItem:{title:"Announcing Disjoint Unions",permalink:"/blog/2015/07/03/Disjoint-Unions"},nextItem:{title:"Announcing Flow Comments",permalink:"/blog/2015/02/20/Flow-Comments"}},r={authorsImageUrls:[void 0]},d=[{value:"The problem",id:"the-problem",level:2}],m={toc:d};function p(e){let{components:n,...o}=e;return(0,a.mdx)("wrapper",(0,t.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"As of Flow 0.5.0, you can define polymorphic functions and classes with bounds on their type parameters. This is extremely useful for writing functions and classes that need some constraints on their type parameters. Flow's bounded polymorphism syntax looks like"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-JavaScript"},"class BagOfBones<T: Bone> { ... }\nfunction eat<T: Food>(meal: T): Indigestion<T> { ... }\n")),(0,a.mdx)("h2",{id:"the-problem"},"The problem"),(0,a.mdx)("p",null,"Consider the following code that defines a polymorphic function in Flow:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-JavaScript"},"function fooBad<T>(obj: T): T {\n  console.log(Math.abs(obj.x));\n  return obj;\n}\n")),(0,a.mdx)("p",null,"This code does not (and should not!) type check. Not all values ",(0,a.mdx)("inlineCode",{parentName:"p"},"obj: T")," have a property ",(0,a.mdx)("inlineCode",{parentName:"p"},"x"),", let alone a property ",(0,a.mdx)("inlineCode",{parentName:"p"},"x")," that is a ",(0,a.mdx)("inlineCode",{parentName:"p"},"number"),", given the additional requirement imposed by ",(0,a.mdx)("inlineCode",{parentName:"p"},"Math.abs()"),"."))}p.isMDXComponent=!0}}]);