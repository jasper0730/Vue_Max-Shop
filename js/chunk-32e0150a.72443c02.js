(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32e0150a"],{"00b4":function(e,t,a){"use strict";a("ac1f");var r=a("23e7"),c=a("da84"),o=a("c65b"),n=a("e330"),l=a("1626"),s=a("861d"),i=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),d=c.Error,m=n(/./.test);r({target:"RegExp",proto:!0,forced:!i},{test:function(e){var t=this.exec;if(!l(t))return m(this,e);var a=o(t,this,e);if(null!==a&&!s(a))throw new d("RegExp exec method returned something other than an Object or null");return!!a}})},"1dde":function(e,t,a){var r=a("d039"),c=a("b622"),o=a("2d00"),n=c("species");e.exports=function(e){return o>=51||!r((function(){var t=[],a=t.constructor={};return a[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"4dcd":function(e,t,a){"use strict";var r=function(e){return{all:e=e||new Map,on:function(t,a){var r=e.get(t);r?r.push(a):e.set(t,[a])},off:function(t,a){var r=e.get(t);r&&(a?r.splice(r.indexOf(a)>>>0,1):e.set(t,[]))},emit:function(t,a){var r=e.get(t);r&&r.slice().map((function(e){e(a)})),(r=e.get("*"))&&r.slice().map((function(e){e(t,a)}))}}},c=r();t["a"]=c},8418:function(e,t,a){"use strict";var r=a("a04b"),c=a("9bf2"),o=a("5c6c");e.exports=function(e,t,a){var n=r(t);n in e?c.f(e,n,o(0,a)):e[n]=a}},"99af":function(e,t,a){"use strict";var r=a("23e7"),c=a("da84"),o=a("d039"),n=a("e8b5"),l=a("861d"),s=a("7b0b"),i=a("07fa"),d=a("8418"),m=a("65f0"),u=a("1dde"),b=a("b622"),f=a("2d00"),p=b("isConcatSpreadable"),j=9007199254740991,O="Maximum allowed index exceeded",v=c.TypeError,h=f>=51||!o((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),V=u("concat"),N=function(e){if(!l(e))return!1;var t=e[p];return void 0!==t?!!t:n(e)},E=!h||!V;r({target:"Array",proto:!0,forced:E},{concat:function(e){var t,a,r,c,o,n=s(this),l=m(n,0),u=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?n:arguments[t],N(o)){if(c=i(o),u+c>j)throw v(O);for(a=0;a<c;a++,u++)a in o&&d(l,u,o[a])}else{if(u>=j)throw v(O);d(l,u++,o)}return l.length=u,l}})},b0c0:function(e,t,a){var r=a("83ab"),c=a("5e77").EXISTS,o=a("e330"),n=a("9bf2").f,l=Function.prototype,s=o(l.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=o(i.exec),m="name";r&&!c&&n(l,m,{configurable:!0,get:function(){try{return d(i,s(this))[1]}catch(e){return""}}})},e2ea:function(e,t,a){"use strict";a.r(t);a("b0c0");var r=a("7a23"),c={class:"container"},o={class:"mt-3 pb-5"},n=Object(r["createElementVNode"])("h3",{class:"mt-3 mb-4"},"訂購資訊",-1),l={class:"row"},s={class:"col-md-8"},i={class:"justify-content-center"},d={class:"mb-3"},m=Object(r["createElementVNode"])("label",{for:"email",class:"form-label"},"Email",-1),u={class:"mb-3"},b=Object(r["createElementVNode"])("label",{for:"name",class:"form-label"},"訂購人姓名",-1),f={class:"mb-3"},p=Object(r["createElementVNode"])("label",{for:"tel",class:"form-label"},"訂購人電話",-1),j={class:"mb-3"},O=Object(r["createElementVNode"])("label",{for:"address",class:"form-label"},"訂購人地址",-1),v={class:"mb-3"},h=Object(r["createElementVNode"])("label",{for:"message",class:"form-label"},"備註",-1),V=Object(r["createElementVNode"])("div",{class:"text-end"},[Object(r["createElementVNode"])("button",{type:"submit",class:"rounded btn btn-dark mb-3"}," 訂單送出 ")],-1),N={class:"col-md-4"},E={class:"border p-4 mb-4"},g=Object(r["createElementVNode"])("h4",{class:"fw-bold mb-4"},"訂購明細",-1),x={class:"table text-muted border-bottom"},w=Object(r["createElementVNode"])("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"}," 費用 ",-1),y={class:"text-end border-0 px-0 pt-4"},C=Object(r["createElementVNode"])("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"}," 折扣 ",-1),k={class:"text-end border-0 px-0 pt-0 pb-4"},D={class:"d-flex justify-content-between mt-4"},$=Object(r["createElementVNode"])("p",{class:"mb-0 h4 fw-bold"},"總金額",-1),L={class:"mb-0 h4 fw-bold"},S=Object(r["createElementVNode"])("button",{type:"button",class:"btn btn-dark w-100 mt-4 rounded"}," 回上一頁 ",-1);function z(e,t,a,z,M,T){var U=Object(r["resolveComponent"])("Loading"),_=Object(r["resolveComponent"])("Field"),F=Object(r["resolveComponent"])("ErrorMessage"),q=Object(r["resolveComponent"])("Form"),B=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,[Object(r["createVNode"])(U,{active:M.isLoading,"z-index":1060},null,8,["active"]),Object(r["createElementVNode"])("div",o,[n,Object(r["createElementVNode"])("div",l,[Object(r["createElementVNode"])("div",s,[Object(r["createElementVNode"])("div",i,[Object(r["createVNode"])(q,{class:"g-3",onSubmit:T.createOrder,ref:"form"},{default:Object(r["withCtx"])((function(e){var a=e.errors;return[Object(r["createElementVNode"])("div",d,[m,Object(r["createVNode"])(_,{type:"text",name:"email",class:Object(r["normalizeClass"])(["form-control",{"is-invalid":a["email"]}]),id:"email",placeholder:"請輸入Email",rules:"email|required",modelValue:M.form.user.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return M.form.user.email=e})},null,8,["class","modelValue"]),Object(r["createVNode"])(F,{name:"email",class:"invalid-feedback"})]),Object(r["createElementVNode"])("div",u,[b,Object(r["createVNode"])(_,{type:"text",name:"姓名",class:Object(r["normalizeClass"])(["form-control",{"is-invalid":a["姓名"]}]),id:"name",placeholder:"請輸入姓名",rules:"required",modelValue:M.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return M.form.user.name=e})},null,8,["class","modelValue"]),Object(r["createVNode"])(F,{name:"姓名",class:"invalid-feedback"})]),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("div",f,[p,Object(r["createVNode"])(_,{class:Object(r["normalizeClass"])(["form-control",{"is-invalid":a["電話"]}]),type:"text",name:"電話",id:"tel",placeholder:"請輸入電話",rules:T.isPhone,modelValue:M.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=function(e){return M.form.user.tel=e})},null,8,["class","rules","modelValue"]),Object(r["createVNode"])(F,{name:"電話",class:"invalid-feedback"})]),Object(r["createElementVNode"])("div",j,[O,Object(r["createVNode"])(_,{class:Object(r["normalizeClass"])(["form-control",{"is-invalid":a["地址"]}]),type:"text",name:"地址",id:"address",placeholder:"請輸入地址",rules:"required",modelValue:M.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=function(e){return M.form.user.address=e})},null,8,["class","modelValue"]),Object(r["createVNode"])(F,{name:"地址",class:"invalid-feedback"})]),Object(r["createElementVNode"])("div",v,[h,Object(r["withDirectives"])(Object(r["createElementVNode"])("textarea",{class:"form-control",type:"text",id:"message",cols:"30",rows:"3","onUpdate:modelValue":t[4]||(t[4]=function(e){return M.form.message=e})},"\r\n                  ",512),[[r["vModelText"],M.form.message]])]),V])]})),_:1},8,["onSubmit"])])]),Object(r["createElementVNode"])("div",N,[Object(r["createElementVNode"])("div",E,[g,Object(r["createElementVNode"])("table",x,[Object(r["createElementVNode"])("tbody",null,[Object(r["createElementVNode"])("tr",null,[w,Object(r["createElementVNode"])("td",y," NT "+Object(r["toDisplayString"])(e.$filters.currency(M.cartData.total)),1)]),Object(r["createElementVNode"])("tr",null,[C,Object(r["createElementVNode"])("td",k,Object(r["toDisplayString"])(e.$filters.currency(M.cartData.final_total-M.cartData.total)),1)])])]),Object(r["createElementVNode"])("div",D,[$,Object(r["createElementVNode"])("p",L," NT$ "+Object(r["toDisplayString"])(e.$filters.currency(Math.round(M.cartData.final_total))),1)]),Object(r["createVNode"])(B,{to:"/carts"},{default:Object(r["withCtx"])((function(){return[S]})),_:1})])])])])])}a("99af"),a("ac1f"),a("00b4");var M=a("4dcd"),T={data:function(){return{cartData:{carts:[]},isLoading:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""},coupon_code:""}},methods:{getCart:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jasper07301","/cart");this.$http.get(t).then((function(t){e.isLoading=!1,e.cartData=t.data.data,M["a"].emit("get-cart")})).catch((function(){e.isLoading=!1,e.$swal.fire({title:"失敗",text:"購物車列表",icon:"error",timer:3e3})}))},createOrder:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jasper07301","/order"),a=this.form;this.$http.post(t,{data:a}).then((function(){e.isLoading=!1,e.$swal.fire({title:"成功",text:"訂單已成立，感謝您的購買",icon:"success",timer:3e3}),e.$refs.form.resetForm(),e.cartData={},e.getCart()})).catch((function(){e.isLoading=!1,e.$swal.fire({title:"失敗",text:"訂單成立",icon:"error",timer:3e3})}))},isPhone:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"請輸入正確的電話號碼"}},created:function(){this.isLoading=!0},mounted:function(){this.getCart()}},U=a("6b0d"),_=a.n(U);const F=_()(T,[["render",z]]);t["default"]=F}}]);
//# sourceMappingURL=chunk-32e0150a.72443c02.js.map