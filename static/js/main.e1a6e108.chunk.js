(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports={red:"Affairs_red__aaiTq",button:"Affairs_button__22GjV"}},function(e,t,n){e.exports={message:"Message_message__1PbQ7",ava:"Message_ava__2y7vZ",chat:"Message_chat__35oCa",name:"Message_name__2i_wo",text:"Message_text__2WwaF",time:"Message_time__2m4yT"}},function(e,t,n){e.exports={nav:"Nav_nav__1GrOh",nn:"Nav_nn__33i3C",but:"Nav_but__1ZFRx"}},,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__mw64P",errorInput:"SuperInputText_errorInput__pQlEn",error:"SuperInputText_error__3xMLH"}},,,function(e,t,n){e.exports={mainClass:"Greeting_mainClass__T4jZi",error:"Greeting_error__1aBxR",button:"Greeting_button__2Ey-k"}},,,function(e,t,n){e.exports={blue:"HW4_blue__XdO_5",column:"HW4_column__3fxta",testSpanError:"HW4_testSpanError__2cw7A"}},function(e,t,n){e.exports={default:"SuperButton_default__3NVI1",red:"SuperButton_red__ioNUh"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2fU5n",spanClassName:"SuperCheckbox_spanClassName__35MLD"}},,,,function(e,t,n){e.exports={App:"App_App__2xdOC"}},,,function(e,t,n){e.exports={main:"HW2_main__29KeR"}},function(e,t,n){e.exports={main:"HW3_main__34l58"}},function(e,t,n){e.exports={span:"SuperSpanStyle_span__SOaoy"}},,,,,,,function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),s=n.n(c),i=(n(44),n(32)),o=n.n(i),j=n(15),l=n(68),u=n(18),b=n.n(u),d=n(1);var x=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(l.a,{title:Object(d.jsxs)("div",{className:b.a.nn,children:[Object(d.jsx)(j.b,{className:b.a.nav,to:"/pre-junior",children:"Pre-Junior"}),Object(d.jsx)(j.b,{className:b.a.nav,to:"/junior",children:"Junior"}),Object(d.jsx)(j.b,{className:b.a.nav,to:"/junior-plus",children:"Junior-Plus"})]}),interactive:!0,placement:"right",children:Object(d.jsx)("div",{className:b.a.but})})})},O=n(3);var h=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},m=n(17),p=n.n(m);var f=function(e){return Object(d.jsxs)("div",{className:p.a.message,children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:e.avatar,className:p.a.ava,alt:""})}),Object(d.jsxs)("div",{className:p.a.chat,children:[Object(d.jsx)("div",{className:p.a.name,children:e.name}),Object(d.jsx)("div",{className:p.a.text,children:e.message}),Object(d.jsx)("div",{className:p.a.time,children:e.time})]})]})},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",v="Some Name",g="some text",C="22:00";var N=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)(f,{avatar:_,name:v,message:g,time:C})]})},k=n(5),S=n(16),y=n.n(S);var w=function(e){return Object(d.jsxs)("div",{children:[e.affair," - ",e.prior,Object(d.jsx)("button",{className:y.a.red,onClick:function(){e.deleteAffairCallback(e.id)},children:"X"})]})};var T=function(e){var t=e.data.map((function(t){return Object(d.jsx)(w,{affair:t.name,prior:t.priority,id:t._id,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{className:y.a.button,onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{className:y.a.button,onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{className:y.a.button,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{className:y.a.button,onClick:function(){e.setFilter("low")},children:"Low"})]})},A=n(35),I=n.n(A),E=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var F=function(){var e=Object(a.useState)(E),t=Object(k.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(k.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(n,i);return Object(d.jsxs)("div",{className:I.a.main,children:[Object(d.jsx)("hr",{}),"Task #2",Object(d.jsx)(T,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return t!==e._id}))}(n,e))}})]})},P=n(38),M=n(23),W=n.n(M),B=function(e){var t,n=e.name,a=e.setNameCallback,r=e.addUser,c=e.error,s=e.totalUsers;return t=c?W.a.error:W.a.mainClass,Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:n,onChange:a,className:t}),Object(d.jsx)("button",{className:W.a.button,onClick:r,children:"add"}),Object(d.jsx)("span",{children:s}),Object(d.jsx)("div",{children:c})]})},H=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(k.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(k.a)(o,2),l=j[0],u=j[1],b=t.length;return Object(d.jsx)(B,{name:s,setNameCallback:function(e){""!=e.currentTarget.value?(i(e.currentTarget.value),u("")):(u("error!!!"),i(""))},addUser:function(){alert("Hello  ".concat(s,"!")),n(s)},error:l,totalUsers:b})},J=n(69),U=n(36),G=n.n(U);var R=function(){var e=Object(a.useState)([]),t=Object(k.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{className:G.a.main,children:[Object(d.jsx)("hr",{}),"Task #3",Object(d.jsx)(H,{users:n,addUserCallback:function(e){r([].concat(Object(P.a)(n),[{_id:Object(J.a)(),name:e}]))}})]})},D=n(12),K=n(14),Z=n(20),L=n.n(Z),X=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=(e.className,e.spanClassName),i=Object(K.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(L.a.error," ").concat(s||""),j="".concat(L.a.errorInput,"  ").concat(L.a.superInput?L.a.superInput:"");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(D.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:j},i)),c&&Object(d.jsx)("span",{className:o,children:c})]})},q=n(26),Q=n.n(q),V=n(27),Y=n.n(V),$=function(e){var t=e.red,n=e.className,a=Object(K.a)(e,["red","className"]),r="".concat(t?Y.a.red:Y.a.default," ").concat(n);return Object(d.jsx)("button",Object(D.a)({className:r},a))},z=n(28),ee=n.n(z),te=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=(e.onChangeTest,Object(K.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children","onChangeTest"])),s=function(e){n&&n(e.currentTarget.checked),t&&t(e)},i="".concat(ee.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(D.a)({type:"checkbox",onChange:function(e){return s(e)},className:i},c)),r&&Object(d.jsx)("span",{className:ee.a.spanClassName,children:r})]})};var ne=function(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(k.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:Q.a.column,children:[Object(d.jsx)(X,{value:n,onChangeText:r,onEnter:s,error:c}),Object(d.jsx)(X,{className:Q.a.blue}),Object(d.jsx)($,{children:"default"}),Object(d.jsx)($,{red:!0,onClick:s,children:"delete"}),Object(d.jsx)($,{disabled:!0,children:"disabled"}),Object(d.jsx)(te,{checked:j,onChangeChecked:l,children:"some text"}),Object(d.jsx)(te,{checked:j,onChange:function(e){l(e.currentTarget.checked)}})]})]})};var ae=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(N,{}),Object(d.jsx)(F,{}),Object(d.jsx)(R,{}),Object(d.jsx)(ne,{})]})};var re=function(){return Object(d.jsx)("div",{})};var ce=function(){return Object(d.jsx)("div",{})},se="/pre-junior",ie="/junior",oe="/junior-plus";var je=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(O.d,{children:["\u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u043c\u044b \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u043c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 '/' \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 PRE_JUNIOR exact \u043d\u0443\u0436\u0435\u043d \u0447\u0442\u043e\u0431 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0435 \u0441\u043e\u0432\u043f\u043e\u0434\u0435\u043d\u0438\u0435 (\u0447\u0442\u043e \u043f\u043e\u0441\u043b\u0435 '/' \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442)",Object(d.jsx)(O.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(O.a,{to:se})}}),Object(d.jsx)(O.b,{path:se,render:function(){return Object(d.jsx)(ae,{})}}),Object(d.jsx)(O.b,{path:ie,render:function(){return Object(d.jsx)(re,{})}}),Object(d.jsx)(O.b,{path:oe,render:function(){return Object(d.jsx)(ce,{})}}),"\u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",Object(d.jsx)(O.b,{render:function(){return Object(d.jsx)(h,{})}})]})})};var le=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(x,{}),Object(d.jsx)(je,{})]})})},ue=n(37),be=n.n(ue),de=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(K.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(k.a)(s,2),o=i[0],j=i[1],l=r||{},u=l.children,b=l.onDoubleClick,x=l.className,O=Object(K.a)(l,["children","onDoubleClick","className"]),h="".concat(be.a.span," ").concat(x);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(X,Object(D.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},c)):Object(d.jsx)("span",Object(D.a)(Object(D.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:h},O),{},{children:u||c.value}))})};function xe(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function Oe(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}xe("test",{x:"A",y:1});Oe("test",{x:"",y:0});var he=function(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{style:{textAlign:"center"},children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(de,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)($,{onClick:function(){xe("editable-span-value",n)},children:"save"}),Object(d.jsx)($,{onClick:function(){r(Oe("editable-span-value",n))},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var me=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(le,{}),Object(d.jsx)(he,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(me,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[50,1,2]]]);
//# sourceMappingURL=main.e1a6e108.chunk.js.map