!function(t){var e={};function s(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=3)}([function(t,e){t.exports=function(t,e,s,n,a,o){var r,i=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(r=t,i=t.default);var c,d="function"==typeof i?i.options:i;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),s&&(d.functional=!0),a&&(d._scopeId=a),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=c):n&&(c=n),c){var u=d.functional,m=u?d.render:d.beforeCreate;u?(d._injectStyles=c,d.render=function(t,e){return c.call(e),m(t,e)}):d.beforeCreate=m?[].concat(m,c):[c]}return{esModule:r,exports:i,options:d}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var s=function(t,e){var s=t[1]||"",n=t[3];if(!n)return s;if(e&&"function"==typeof btoa){var a=(r=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),o=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[s].concat(o).concat([a]).join("\n")}var r;return[s].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+s+"}":s}).join("")},e.i=function(t,s){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(n[o]=!0)}for(a=0;a<t.length;a++){var r=t[a];"number"==typeof r[0]&&n[r[0]]||(s&&!r[2]?r[2]=s:s&&(r[2]="("+r[2]+") and ("+s+")"),e.push(r))}},e}},function(t,e,s){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a=s(10),o={},r=n&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,c=!1,d=function(){},u=null,m="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t){for(var e=0;e<t.length;e++){var s=t[e],n=o[s.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](s.parts[a]);for(;a<s.parts.length;a++)n.parts.push(h(s.parts[a]));n.parts.length>s.parts.length&&(n.parts.length=s.parts.length)}else{var r=[];for(a=0;a<s.parts.length;a++)r.push(h(s.parts[a]));o[s.id]={id:s.id,refs:1,parts:r}}}}function f(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function h(t){var e,s,n=document.querySelector("style["+m+'~="'+t.id+'"]');if(n){if(c)return d;n.parentNode.removeChild(n)}if(v){var a=l++;n=i||(i=f()),e=C.bind(null,n,a,!1),s=C.bind(null,n,a,!0)}else n=f(),e=function(t,e){var s=e.css,n=e.media,a=e.sourceMap;n&&t.setAttribute("media",n);u.ssrId&&t.setAttribute(m,e.id);a&&(s+="\n/*# sourceURL="+a.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");if(t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}.bind(null,n),s=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else s()}}t.exports=function(t,e,s,n){c=s,u=n||{};var r=a(t,e);return p(r),function(e){for(var s=[],n=0;n<r.length;n++){var i=r[n];(l=o[i.id]).refs--,s.push(l)}e?p(r=a(t,e)):r=[];for(n=0;n<s.length;n++){var l;if(0===(l=s[n]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete o[l.id]}}}};var _,b=(_=[],function(t,e){return _[t]=e,_.filter(Boolean).join("\n")});function C(t,e,s,n){var a=s?"":n.css;if(t.styleSheet)t.styleSheet.cssText=b(e,a);else{var o=document.createTextNode(a),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}},function(t,e,s){s(4),t.exports=s(24)},function(t,e,s){Nova.booting(function(t,e,n){e.addRoutes([{name:"novapassport",path:"/novapassport",component:s(5)}])})},function(t,e,s){var n=s(0)(s(6),s(23),!1,null,null,null);t.exports=n.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(7),a=s.n(n),o=s(13),r=s.n(o),i=s(18),l=s.n(i);e.default={components:{PassportClients:a.a,PassportAuthorizedClients:r.a,PassportPersonalAccessTokens:l.a}}},function(t,e,s){var n=s(0)(s(11),s(12),!1,function(t){s(8)},"data-v-3dbc996a",null);t.exports=n.exports},function(t,e,s){var n=s(9);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(2)("ded4bc92",n,!0,{})},function(t,e,s){(t.exports=s(1)(!1)).push([t.i,".action-link[data-v-3dbc996a]{cursor:pointer}",""])},function(t,e){t.exports=function(t,e){for(var s=[],n={},a=0;a<e.length;a++){var o=e[a],r=o[0],i={id:t+":"+a,css:o[1],media:o[2],sourceMap:o[3]};n[r]?n[r].parts.push(i):s.push(n[r]={id:r,parts:[i]})}return s}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{tokens:[]}},ready:function(){this.prepareComponent()},mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getTokens()},getTokens:function(){var t=this;axios.get("/oauth/tokens").then(function(e){t.tokens=e.data})},revoke:function(t){var e=this;axios.delete("/oauth/tokens/"+t.id).then(function(t){e.getTokens()})}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.tokens.length>0?s("div",[s("div",{staticClass:"novapass_card card-default"},[s("div",{staticClass:"novapass_card-header"},[t._v("Authorized Applications")]),t._v(" "),s("div",{staticClass:"novapass_card-body"},[s("table",{staticClass:"table table-borderless mb-0"},[t._m(0),t._v(" "),s("tbody",t._l(t.tokens,function(e){return s("tr",[s("td",{staticStyle:{"vertical-align":"middle"}},[t._v("\n                                "+t._s(e.client.name)+"\n                            ")]),t._v(" "),s("td",{staticStyle:{"vertical-align":"middle"}},[e.scopes.length>0?s("span",[t._v("\n                                    "+t._s(e.scopes.join(", "))+"\n                                ")]):t._e()]),t._v(" "),s("td",{staticStyle:{"vertical-align":"middle"}},[s("a",{staticClass:"action-link text-danger",on:{click:function(s){return t.revoke(e)}}},[t._v("\n                                    Revoke\n                                ")])])])}),0)])])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Scopes")]),this._v(" "),e("th")])])}]}},function(t,e,s){var n=s(0)(s(16),s(17),!1,function(t){s(14)},"data-v-aaf77974",null);t.exports=n.exports},function(t,e,s){var n=s(15);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(2)("4313423a",n,!0,{})},function(t,e,s){(t.exports=s(1)(!1)).push([t.i,".action-link[data-v-aaf77974]{cursor:pointer}",""])},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default={data:function(){return{clients:[],createForm:{errors:[],name:"",redirect:""},editForm:{errors:[],name:"",redirect:""}}},ready:function(){this.prepareComponent()},mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getClients(),$("#modal-create-client").on("shown.bs.modal",function(){$("#create-client-name").focus()}),$("#modal-edit-client").on("shown.bs.modal",function(){$("#edit-client-name").focus()})},getClients:function(){var t=this;axios.get("/oauth/clients").then(function(e){t.clients=e.data})},showCreateClientForm:function(){$("#modal-create-client").modal("show")},store:function(){this.persistClient("post","/oauth/clients",this.createForm,"#modal-create-client")},edit:function(t){this.editForm.id=t.id,this.editForm.name=t.name,this.editForm.redirect=t.redirect,$("#modal-edit-client").modal("show")},update:function(){this.persistClient("put","/oauth/clients/"+this.editForm.id,this.editForm,"#modal-edit-client")},persistClient:function(t,e,s,a){var o=this;s.errors=[],axios[t](e,s).then(function(t){o.getClients(),s.name="",s.redirect="",s.errors=[],$(a).modal("hide")}).catch(function(t){"object"===n(t.response.data)?s.errors=_.flatten(_.toArray(t.response.data.errors)):s.errors=["Something went wrong. Please try again."]})},destroy:function(t){var e=this;axios.delete("/oauth/clients/"+t.id).then(function(t){e.getClients()})}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"novapass_card novapass_card-default"},[s("div",{staticClass:"novapass_card-header"},[s("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[s("span",[t._v("\n                    OAuth Clients\n                ")]),t._v(" "),s("a",{staticClass:"action-link",attrs:{tabindex:"-1"},on:{click:t.showCreateClientForm}},[t._v("\n                    Create New Client\n                ")])])]),t._v(" "),s("div",{staticClass:"novapass_card-body"},[0===t.clients.length?s("p",{staticClass:"mb-0"},[t._v("\n                You have not created any OAuth clients.\n            ")]):t._e(),t._v(" "),t.clients.length>0?s("table",{staticClass:"table table-borderless mb-0 w-full"},[t._m(0),t._v(" "),s("tbody",t._l(t.clients,function(e){return s("tr",[s("td",{staticStyle:{"vertical-align":"middle"}},[t._v("\n                            "+t._s(e.id)+"\n                        ")]),t._v(" "),s("td",{staticStyle:{"vertical-align":"middle"}},[t._v("\n                            "+t._s(e.name)+"\n                        ")]),t._v(" "),s("td",{staticStyle:{"vertical-align":"middle"}},[s("code",[t._v(t._s(e.secret))])]),t._v(" "),s("td",{staticStyle:{"vertical-align":"middle"}},[s("a",{staticClass:"action-link",attrs:{tabindex:"-1"},on:{click:function(s){return t.edit(e)}}},[t._v("\n                                Edit\n                            ")])]),t._v(" "),s("td",{staticStyle:{"vertical-align":"middle"}},[s("a",{staticClass:"action-link text-danger",on:{click:function(s){return t.destroy(e)}}},[t._v("\n                                Delete\n                            ")])])])}),0)]):t._e()])]),t._v(" "),s("div",{staticClass:"modal bsmodal fade",attrs:{id:"modal-create-client",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),s("div",{staticClass:"modal-body"},[t.createForm.errors.length>0?s("div",{staticClass:"alert alert-danger"},[t._m(2),t._v(" "),s("br"),t._v(" "),s("ul",t._l(t.createForm.errors,function(e){return s("li",[t._v("\n                                "+t._s(e)+"\n                            ")])}),0)]):t._e(),t._v(" "),s("form",{attrs:{role:"form"}},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-3 col-form-label"},[t._v("Name")]),t._v(" "),s("div",{staticClass:"col-md-9 pb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.createForm.name,expression:"createForm.name"}],staticClass:"w-full border border-light-grey p-2 border border-grey-light rounded-lg",attrs:{id:"create-client-name",type:"text"},domProps:{value:t.createForm.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.store(e)},input:function(e){e.target.composing||t.$set(t.createForm,"name",e.target.value)}}}),t._v(" "),s("span",{staticClass:"text-sm pb-3 text-grey"},[t._v("\n                                    Something your users will recognize and trust.\n                                ")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-3 col-form-label"},[t._v("Redirect URL")]),t._v(" "),s("div",{staticClass:"col-md-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.createForm.redirect,expression:"createForm.redirect"}],staticClass:"w-full border border-light-grey p-2 border border-grey-light rounded-lg",attrs:{type:"text",name:"redirect"},domProps:{value:t.createForm.redirect},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.store(e)},input:function(e){e.target.composing||t.$set(t.createForm,"redirect",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text text-muted text-sm text-grey"},[t._v("\n                                    Your application's authorization callback URL.\n                                ")])])])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary p-3",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),s("button",{staticClass:"btn btn-primary p-3",attrs:{type:"button"},on:{click:t.store}},[t._v("\n                        Create\n                    ")])])])])]),t._v(" "),s("div",{staticClass:"modal bsmodal fade",attrs:{id:"modal-edit-client",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),s("div",{staticClass:"modal-body"},[t.editForm.errors.length>0?s("div",{staticClass:"alert alert-danger"},[t._m(4),t._v(" "),s("br"),t._v(" "),s("ul",t._l(t.editForm.errors,function(e){return s("li",[t._v("\n                                "+t._s(e)+"\n                            ")])}),0)]):t._e(),t._v(" "),s("form",{attrs:{role:"form"}},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-3 col-form-label"},[t._v("Name")]),t._v(" "),s("div",{staticClass:"col-md-9 pb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.editForm.name,expression:"editForm.name"}],staticClass:"w-full border border-light-grey p-2",attrs:{id:"edit-client-name",type:"text"},domProps:{value:t.editForm.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.update(e)},input:function(e){e.target.composing||t.$set(t.editForm,"name",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text text-muted text-grey"},[t._v("\n                                    Something your users will recognize and trust.\n                                ")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-3 col-form-label"},[t._v("Redirect URL")]),t._v(" "),s("div",{staticClass:"col-md-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.editForm.redirect,expression:"editForm.redirect"}],staticClass:"w-full border border-light-grey p-2",attrs:{type:"text",name:"redirect"},domProps:{value:t.editForm.redirect},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.update(e)},input:function(e){e.target.composing||t.$set(t.editForm,"redirect",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text text-muted text-grey"},[t._v("\n                                    Your application's authorization callback URL.\n                                ")])])])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary p-3",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),s("button",{staticClass:"btn btn-primary p-3",attrs:{type:"button"},on:{click:t.update}},[t._v("\n                        Save Changes\n                    ")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"text-left"},[this._v("Client ID")]),this._v(" "),e("th",{staticClass:"text-left"},[this._v("Name")]),this._v(" "),e("th",{staticClass:"text-left"},[this._v("Secret")]),this._v(" "),e("th",{staticClass:"text-left",attrs:{colspan:"2"}},[this._v("Action")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title"},[this._v("\n                        Create Client\n                    ")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mb-0"},[e("strong",[this._v("Whoops!")]),this._v(" Something went wrong!")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title"},[this._v("\n                        Edit Client\n                    ")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mb-0"},[e("strong",[this._v("Whoops!")]),this._v(" Something went wrong!")])}]}},function(t,e,s){var n=s(0)(s(21),s(22),!1,function(t){s(19)},"data-v-dee5751a",null);t.exports=n.exports},function(t,e,s){var n=s(20);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(2)("db98406e",n,!0,{})},function(t,e,s){(t.exports=s(1)(!1)).push([t.i,".action-link[data-v-dee5751a]{cursor:pointer}",""])},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default={data:function(){return{accessToken:null,tokens:[],scopes:[],form:{name:"",scopes:[],errors:[]}}},ready:function(){this.prepareComponent()},mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getTokens(),this.getScopes(),$("#modal-create-token").on("shown.bs.modal",function(){$("#create-token-name").focus()})},getTokens:function(){var t=this;axios.get("/oauth/personal-access-tokens").then(function(e){t.tokens=e.data})},getScopes:function(){var t=this;axios.get("/oauth/scopes").then(function(e){t.scopes=e.data})},showCreateTokenForm:function(){$("#modal-create-token").modal("show")},store:function(){var t=this;this.accessToken=null,this.form.errors=[],axios.post("/oauth/personal-access-tokens",this.form).then(function(e){t.form.name="",t.form.scopes=[],t.form.errors=[],t.tokens.push(e.data.token),t.showAccessToken(e.data.accessToken)}).catch(function(e){"object"===n(e.response.data)?t.form.errors=_.flatten(_.toArray(e.response.data.errors)):t.form.errors=["Something went wrong. Please try again."]})},toggleScope:function(t){this.scopeIsAssigned(t)?this.form.scopes=_.reject(this.form.scopes,function(e){return e==t}):this.form.scopes.push(t)},scopeIsAssigned:function(t){return _.indexOf(this.form.scopes,t)>=0},showAccessToken:function(t){$("#modal-create-token").modal("hide"),this.accessToken=t,$("#modal-access-token").modal("show")},revoke:function(t){var e=this;axios.delete("/oauth/personal-access-tokens/"+t.id).then(function(t){e.getTokens()})}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("div",{staticClass:"novapass_card novapass_card-default"},[s("div",{staticClass:"novapass_card-header"},[s("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[s("span",[t._v("\n                        Personal Access Tokens\n                    ")]),t._v(" "),s("a",{staticClass:"action-link",attrs:{tabindex:"-1"},on:{click:t.showCreateTokenForm}},[t._v("\n                        Create New Token\n                    ")])])]),t._v(" "),s("div",{staticClass:"novapass_card-body"},[0===t.tokens.length?s("p",{staticClass:"mb-0"},[t._v("\n                    You have not created any personal access tokens.\n                ")]):t._e(),t._v(" "),t.tokens.length>0?s("table",{staticClass:"table table-borderless mb-0 w-full"},[t._m(0),t._v(" "),s("tbody",t._l(t.tokens,function(e){return s("tr",[s("td",{staticStyle:{"vertical-align":"middle"}},[t._v("\n                                "+t._s(e.name)+"\n                            ")]),t._v(" "),s("td",{staticStyle:{"vertical-align":"middle"}},[s("a",{staticClass:"action-link text-danger",on:{click:function(s){return t.revoke(e)}}},[t._v("\n                                    Delete\n                                ")])])])}),0)]):t._e()])])]),t._v(" "),s("div",{staticClass:"bsmodal modal fade",attrs:{id:"modal-create-token",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),s("div",{staticClass:"modal-body"},[t.form.errors.length>0?s("div",{staticClass:"alert alert-danger"},[t._m(2),t._v(" "),s("br"),t._v(" "),s("ul",t._l(t.form.errors,function(e){return s("li",[t._v("\n                                "+t._s(e)+"\n                            ")])}),0)]):t._e(),t._v(" "),s("form",{attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.store(e)}}},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label"},[t._v("Name")]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"w-full border border-light-grey p-2",attrs:{id:"create-token-name",type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),t._v(" "),t.scopes.length>0?s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label"},[t._v("Scopes")]),t._v(" "),s("div",{staticClass:"col-md-6"},t._l(t.scopes,function(e){return s("div",[s("div",{staticClass:"checkbox"},[s("label",[s("input",{attrs:{type:"checkbox"},domProps:{checked:t.scopeIsAssigned(e.id)},on:{click:function(s){return t.toggleScope(e.id)}}}),t._v("\n\n                                                "+t._s(e.id)+"\n                                        ")])])])}),0)]):t._e()])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),s("button",{staticClass:"btn btn-primary p-3",attrs:{type:"button"},on:{click:t.store}},[t._v("\n                        Create\n                    ")])])])])]),t._v(" "),s("div",{staticClass:"bsmodal modal fade",attrs:{id:"modal-access-token",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),s("div",{staticClass:"modal-body"},[s("p",[t._v("\n                        Here is your new personal access token. This is the only time it will be shown so don't lose it!\n                        You may now use this token to make API requests.\n                    ")]),t._v(" "),s("textarea",{staticClass:"w-full border border-light-grey text-sm",attrs:{rows:"22"}},[t._v(t._s(t.accessToken))])]),t._v(" "),t._m(4)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"text-left"},[this._v("Name")]),this._v(" "),e("th",{staticClass:"text-left"},[this._v("Action")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title"},[this._v("\n                        Create Token\n                    ")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mb-0"},[e("strong",[this._v("Whoops!")]),this._v(" Something went wrong!")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title"},[this._v("\n                        Personal Access Token\n                    ")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary p-3",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])}]}},function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticClass:"mb-3 text-90 font-normal text-2xl"},[this._v("OAuth Passport")]),this._v(" "),e("passport-clients"),e("br"),this._v(" "),e("passport-authorized-clients"),e("br"),this._v(" "),e("passport-personal-access-tokens"),e("br")],1)},staticRenderFns:[]}},function(t,e){}]);