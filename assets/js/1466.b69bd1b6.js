"use strict";(self.webpackChunknew_website=self.webpackChunknew_website||[]).push([[1466],{11466:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var t=a(87462),i=(a(67294),a(3905));const l={title:"Strict Checking of Function Call Arity","short-title":"Strict Function Call Arity",author:"Gabe Levi",hide_table_of_contents:!0},o=void 0,r={permalink:"/blog/2017/05/07/Strict-Function-Call-Arity",source:"@site/blog/2017-05-07-Strict-Function-Call-Arity.md",title:"Strict Checking of Function Call Arity",description:"One of Flow's original goals was to be able to understand idiomatic JavaScript.",date:"2017-05-07T00:00:00.000Z",formattedDate:"May 7, 2017",tags:[],hasTruncateMarker:!0,authors:[{name:"Gabe Levi"}],frontMatter:{title:"Strict Checking of Function Call Arity","short-title":"Strict Function Call Arity",author:"Gabe Levi",hide_table_of_contents:!0},prevItem:{title:"Opaque Type Aliases",permalink:"/blog/2017/07/27/Opaque-Types"},nextItem:{title:"Introducing Flow-Typed",permalink:"/blog/2016/10/13/Flow-Typed"}},s={authorsImageUrls:[void 0]},m=[{value:"What is arity?",id:"what-is-arity",level:3},{value:"Motivation",id:"motivation",level:3},{value:"Why JavaScript allows extraneous arguments",id:"why-javascript-allows-extraneous-arguments",level:3},{value:"Callbacks",id:"callbacks",level:4},{value:"Stubbing",id:"stubbing",level:4},{value:"Variadic functions using <code>arguments</code>",id:"variadic-functions-using-arguments",level:4},{value:"Changes to Flow",id:"changes-to-flow",level:3},{value:"Calling a function",id:"calling-a-function",level:4},{value:"Function subtyping",id:"function-subtyping",level:4},{value:"Stubbing and variadic functions",id:"stubbing-and-variadic-functions",level:4},{value:"Rollout plan",id:"rollout-plan",level:3},{value:"Why turn this on over two releases?",id:"why-turn-this-on-over-two-releases",level:4},{value:"Why not keep the <code>experimental.strict_call_arity</code> flag?",id:"why-not-keep-the-experimentalstrict_call_arity-flag",level:4},{value:"What do you think?",id:"what-do-you-think",level:3}],u={toc:m};function d(e){let{components:n,...a}=e;return(0,i.mdx)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"One of Flow's original goals was to be able to understand idiomatic JavaScript.\nIn JavaScript, you can call a function with more arguments than the function\nexpects. Therefore, Flow never complained about calling a function with\nextraneous arguments."),(0,i.mdx)("p",null,"We are changing this behavior."),(0,i.mdx)("h3",{id:"what-is-arity"},"What is arity?"),(0,i.mdx)("p",null,"A function's ",(0,i.mdx)("em",{parentName:"p"},"arity")," is the number of arguments it expects. Since some functions\nhave optional parameters and some use rest parameters, we can define the\n",(0,i.mdx)("em",{parentName:"p"},"minimum arity")," as the smallest number of arguments it expects and the ",(0,i.mdx)("em",{parentName:"p"},"maximum\narity")," as the largest number of arguments it expects."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"function no_args() {} // arity of 0\nfunction two_args(a, b) {} // arity of 2\nfunction optional_args(a, b?) {} // min arity of 1, max arity of 2\nfunction many_args(a, ...rest) {} // min arity of 1, no max arity\n")),(0,i.mdx)("h3",{id:"motivation"},"Motivation"),(0,i.mdx)("p",null,"Consider the following code:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"function add(a, b) { return a + b; }\nconst sum = add(1, 1, 1, 1);\n")),(0,i.mdx)("p",null,"The author apparently thought the ",(0,i.mdx)("inlineCode",{parentName:"p"},"add()")," function adds up all its\narguments, and that ",(0,i.mdx)("inlineCode",{parentName:"p"},"sum")," will have the value ",(0,i.mdx)("inlineCode",{parentName:"p"},"4"),". However, only the first two\narguments are summed, and ",(0,i.mdx)("inlineCode",{parentName:"p"},"sum")," actually will have the value ",(0,i.mdx)("inlineCode",{parentName:"p"},"2"),". This is\nobviously a bug, so why doesn't JavaScript or Flow complain?"),(0,i.mdx)("p",null,"And while the error in the above example is easy to see, in real code it's often\na lot harder to notice. For example, what is the value of ",(0,i.mdx)("inlineCode",{parentName:"p"},"total")," here:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'const total = parseInt("10", 2) + parseFloat("10.1", 2);\n')),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},'"10"')," in base 2 is ",(0,i.mdx)("inlineCode",{parentName:"p"},"2")," in decimal and ",(0,i.mdx)("inlineCode",{parentName:"p"},'"10.1"')," in base 2 is ",(0,i.mdx)("inlineCode",{parentName:"p"},"2.5")," in decimal.\nSo the author probably thought that ",(0,i.mdx)("inlineCode",{parentName:"p"},"total")," would be ",(0,i.mdx)("inlineCode",{parentName:"p"},"4.5"),". However, the correct\nanswer is ",(0,i.mdx)("inlineCode",{parentName:"p"},"12.1"),". ",(0,i.mdx)("inlineCode",{parentName:"p"},'parseInt("10", 2)')," does evaluates to ",(0,i.mdx)("inlineCode",{parentName:"p"},"2"),", as expected.\nHowever, ",(0,i.mdx)("inlineCode",{parentName:"p"},'parseFloat("10.1", 2)')," evaluates to ",(0,i.mdx)("inlineCode",{parentName:"p"},"10.1"),". ",(0,i.mdx)("inlineCode",{parentName:"p"},"parseFloat()")," only takes\na single argument. The second argument is ignored!"),(0,i.mdx)("h3",{id:"why-javascript-allows-extraneous-arguments"},"Why JavaScript allows extraneous arguments"),(0,i.mdx)("p",null,"At this point, you might feel like this is just an example of JavaScript making\nterrible life decisions. However, this behavior is very convenient in a bunch of\nsituations!"),(0,i.mdx)("h4",{id:"callbacks"},"Callbacks"),(0,i.mdx)("p",null,"If you couldn't call a function with more arguments than it handles, then\nmapping over an array would look like"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"const doubled_arr = [1, 2, 3].map((element, index, arr) => element * 2);\n")),(0,i.mdx)("p",null,"When you call ",(0,i.mdx)("inlineCode",{parentName:"p"},"Array.prototype.map"),", you pass in a callback. For each element in\nthe array, that callback is invoked and passed 3 arguments:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"The element"),(0,i.mdx)("li",{parentName:"ol"},"The index of the element"),(0,i.mdx)("li",{parentName:"ol"},"The array over which you're mapping")),(0,i.mdx)("p",null,"However, your callback often only needs to reference the first argument: the\nelement. It's really nice that you can write"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"const doubled_arr = [1, 2, 3].map(element => element * 2);\n")),(0,i.mdx)("h4",{id:"stubbing"},"Stubbing"),(0,i.mdx)("p",null,"Sometimes I come across code like this"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'let log = () => {};\nif (DEBUG) {\n  log = (message) => console.log(message);\n}\nlog("Hello world");\n')),(0,i.mdx)("p",null,"The idea is that in a development environment, calling ",(0,i.mdx)("inlineCode",{parentName:"p"},"log()")," will output a\nmessage, but in production it does nothing. Since you can call a\nfunction with more arguments than it expects, it is easy to stub out ",(0,i.mdx)("inlineCode",{parentName:"p"},"log()")," in\nproduction."),(0,i.mdx)("h4",{id:"variadic-functions-using-arguments"},"Variadic functions using ",(0,i.mdx)("inlineCode",{parentName:"h4"},"arguments")),(0,i.mdx)("p",null,"A variadic function is a function that can take an indefinite number of\narguments. The old-school way to write variadic functions in JavaScript is by\nusing ",(0,i.mdx)("inlineCode",{parentName:"p"},"arguments"),". For example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"function sum_all() {\n  let ret = 0;\n  for (let i = 0; i < arguments.length; i++) { ret += arguments[i]; }\n  return ret;\n}\nconst total = sum_all(1, 2, 3); // returns 6\n")),(0,i.mdx)("p",null,"For all intents and purposes, ",(0,i.mdx)("inlineCode",{parentName:"p"},"sum_all")," appears like it takes no arguments. So\neven though it appears to have an arity of 0, it is convenient that we can call\nit with more arguments."),(0,i.mdx)("h3",{id:"changes-to-flow"},"Changes to Flow"),(0,i.mdx)("p",null,"We think we have found a compromise which catches the motivating bugs without\nbreaking the convenience of JavaScript."),(0,i.mdx)("h4",{id:"calling-a-function"},"Calling a function"),(0,i.mdx)("p",null,"If a function has a maximum arity of N, then Flow will start complaining if you\ncall it with more than N arguments."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'test:1\n  1: const num = parseFloat("10.5", 2);\n                                    ^ unused function argument\n   19: declare function parseFloat(string: mixed): number;\n                                  ^^^^^^^^^^^^^^^^^^^^^^^ function type expects no more than 1 argument. See lib: <BUILTINS>/core.js:19\n')),(0,i.mdx)("h4",{id:"function-subtyping"},"Function subtyping"),(0,i.mdx)("p",null,"Flow will not change its function subtyping behavior. A function\nwith a smaller maximum arity is still a subtype of a function with a larger\nmaximum arity. This allows callbacks to still work as before."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"class Array<T> {\n  ...\n  map<U>(callbackfn: (value: T, index: number, array: Array<T>) => U, thisArg?: any): Array<U>;\n  ...\n}\nconst arr = [1,2,3].map(() => 4); // No error, evaluates to [4,4,4]\n")),(0,i.mdx)("p",null,"In this example, ",(0,i.mdx)("inlineCode",{parentName:"p"},"() => number")," is a subtype of ",(0,i.mdx)("inlineCode",{parentName:"p"},"(number, number, Array<number>) => number"),"."),(0,i.mdx)("h4",{id:"stubbing-and-variadic-functions"},"Stubbing and variadic functions"),(0,i.mdx)("p",null,"This will, unfortunately, cause Flow to complain about stubs and variadic\nfunctions which are written using ",(0,i.mdx)("inlineCode",{parentName:"p"},"arguments"),". However, you can fix these by\nusing rest parameters"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"let log (...rest) => {};\n\nfunction sum_all(...rest) {\n  let ret = 0;\n  for (let i = 0; i < rest.length; i++) { ret += rest[i]; }\n  return ret;\n}\n")),(0,i.mdx)("h3",{id:"rollout-plan"},"Rollout plan"),(0,i.mdx)("p",null,"Flow v0.46.0 will ship with strict function call arity turned off by default. It\ncan be enabled via your ",(0,i.mdx)("inlineCode",{parentName:"p"},".flowconfig")," with the flag"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ini"},"experimental.strict_call_arity=true\n")),(0,i.mdx)("p",null,"Flow v0.47.0 will ship with strict function call arity turned on and the\n",(0,i.mdx)("inlineCode",{parentName:"p"},"experimental.strict_call_arity")," flag will be removed."),(0,i.mdx)("h4",{id:"why-turn-this-on-over-two-releases"},"Why turn this on over two releases?"),(0,i.mdx)("p",null,"This decouples the switch to strict checking of function call arity from the\nrelease."),(0,i.mdx)("h4",{id:"why-not-keep-the-experimentalstrict_call_arity-flag"},"Why not keep the ",(0,i.mdx)("inlineCode",{parentName:"h4"},"experimental.strict_call_arity")," flag?"),(0,i.mdx)("p",null,"This is a pretty core change. If we kept both behaviors, we'd have to test that\neverything works with and without this change. As we add more flags, the number\nof combinations grows exponentially, and Flow's behavior gets harder to reason\nabout. For this reason, we're choosing only one behavior: strict checking of\nfunction call arity."),(0,i.mdx)("h3",{id:"what-do-you-think"},"What do you think?"),(0,i.mdx)("p",null,"This change was motivated by feedback from Flow users. We really appreciate\nall the members of our community who take the time to share their feedback with\nus. This feedback is invaluable and helps us make Flow better, so please keep\nit coming!"))}d.isMDXComponent=!0}}]);