webpackJsonp([0],[,,,function(t,e,n){var s,i;n(25),s=n(14);var r=n(44);i=s=s||{},"object"==typeof s["default"]&&(i=s=s["default"]),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=s},,,,,,function(t,e,n){"use strict";(function(t){function s(){return p()({max:1e3,maxAge:9e5})}function i(){function t(){c((e.__ids__.top||[]).slice(0,30)),setTimeout(t,9e5)}var e=new d.a("https://hacker-news.firebaseio.com/v0");return e.__ids__={},["top","new","show","ask","job"].forEach(function(t){e.child(t+"stories").on("value",function(n){e.__ids__[t]=n.val()})}),t(),e}function r(t){return f&&f.has(t)?Promise.resolve(f.get(t)):new Promise(function(e,n){v.child(t).once("value",function(n){var s=n.val();s.__lastUpdated=Date.now(),f&&f.set(t,s),e(s)},n)})}function a(t){return v.__ids__&&v.__ids__[t]?Promise.resolve(v.__ids__[t]):r(t+"stories")}function o(t){return r("item/"+t)}function c(t){return Promise.all(t.map(function(t){return o(t)}))}function u(t){return r("user/"+t)}function h(t,e){var n=!0,s=v.child(t+"stories"),i=function(t){n?n=!1:e(t.val())};return s.on("value",i),function(){s.off("value",i)}}var m=n(5),d=n.n(m),l=n(6),p=n.n(l);e.a=a,e.b=c,e.c=u,e.d=h;var _="undefined"!=typeof window,f=_?null:t.__API_CACHE__||(t.__API_CACHE__=s()),v=_?new d.a("https://hacker-news.firebaseio.com/v0"):t.__API__||(t.__API__=i())}).call(e,n(0))},function(t,e,n){"use strict";var s=n(1),i=n.n(s),r=n(34),a=n.n(r),o=n(19),c=n(18),u=n(47),h=(n.n(u),n(17));n.d(e,"b",function(){return d});var m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t};n.i(u.sync)(o.a,c.a),Object.keys(h).forEach(function(t){i.a.filter(t,h[t])});var d=new i.a(m({router:c.a,store:o.a},a.a));n.o(o,"a")&&n.d(e,"a",function(){return o.a})},function(t,e,n){"use strict";e["default"]={name:"comment",props:["id"],data:function(){return{open:!0}},computed:{comment:function(){return this.$store.state.items[this.id]}},beforeMount:function(){this.$store.dispatch("FETCH_ITEMS",{ids:[this.id]})},methods:{pluralize:function(t){return t+(1===t?" reply":" replies")}}}},function(t,e,n){"use strict";e["default"]={name:"news-item",props:["item"],serverCacheKey:function(t){return t.item.id+"::"+t.item.__lastUpdated}}},function(t,e,n){"use strict";var s=n(3),i=n.n(s),r=n(36),a=n.n(r),o=n(9);e["default"]={name:"item-list",components:{Spinner:i.a,Item:a.a},props:{type:String},data:function(){var t=!this.$root._isMounted;return{loading:!1,transition:"slide-left",displayedPage:t?Number(this.$store.state.route.params.page)||1:-1,displayedItems:t?this.$store.getters.activeItems:[]}},computed:{page:function(){return Number(this.$store.state.route.params.page)||1},maxPage:function(){var t=this.$store.state,e=t.itemsPerPage,n=t.lists;return Math.ceil(n[this.type].length/e)},hasMore:function(){return this.page<this.maxPage}},beforeMount:function(){var t=this;this.$root._isMounted&&this.loadItems(this.page),this.unwatchList=n.i(o.d)(this.type,function(e){t.$store.commit("SET_LIST",{type:t.type,ids:e}),t.$store.dispatch("ENSURE_ACTIVE_ITEMS").then(function(){t.displayedItems=t.$store.getters.activeItems})})},beforeDestroy:function(){this.unwatchList()},watch:{page:function(t,e){this.loadItems(t,e)}},methods:{loadItems:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?this.page:arguments[0],n=arguments.length<=1||void 0===arguments[1]?-1:arguments[1];this.loading=!0,this.$store.dispatch("FETCH_LIST_DATA",{type:this.type}).then(function(){return t.page<0||t.page>t.maxPage?void t.$router.replace("/"+t.type+"/1"):(t.transition=e>n?"slide-left":"slide-right",t.displayedPage=e,t.displayedItems=t.$store.getters.activeItems,void(t.loading=!1))})}}}},function(t,e,n){"use strict";e["default"]={props:["show"]}},function(t,e,n){"use strict";function s(t){return t.dispatch("FETCH_ITEMS",{ids:[t.state.route.params.id]})}var i=n(3),r=n.n(i),a=n(35),o=n.n(a);e["default"]={name:"item-view",components:{Spinner:r.a,Comment:o.a},computed:{item:function(){return this.$store.state.items[this.$route.params.id]}},preFetch:s,beforeMount:function(){s(this.$store)}}},function(t,e,n){"use strict";function s(t){return t.dispatch("FETCH_USER",{id:t.state.route.params.id})}var i=n(3),r=n.n(i);e["default"]={name:"user-view",components:{Spinner:r.a},computed:{user:function(){return this.$store.state.users[this.$route.params.id]}},preFetch:s,beforeMount:function(){s(this.$store)}}},function(t,e,n){"use strict";function s(t){var e=t.replace(/^https?:\/\//,"").replace(/\/.*$/,""),n=e.split(".").slice(-3);return"www"===n[0]&&n.shift(),n.join(".")}function i(t){var e=Date.now()/1e3-Number(t);return e<3600?r(~~(e/60)," minute"):e<86400?r(~~(e/3600)," hour"):r(~~(e/86400)," day")}function r(t,e){return 1===t?t+e:t+e+"s"}e.host=s,e.timeAgo=i},function(t,e,n){"use strict";var s=n(1),i=n.n(s),r=n(7),a=n.n(r),o=n(20),c=n(38),u=n.n(c),h=n(39),m=n.n(h);i.a.use(a.a),e.a=new a.a({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/top/:page(\\d+)?",component:n.i(o.a)("top")},{path:"/new/:page(\\d+)?",component:n.i(o.a)("new")},{path:"/show/:page(\\d+)?",component:n.i(o.a)("show")},{path:"/ask/:page(\\d+)?",component:n.i(o.a)("ask")},{path:"/job/:page(\\d+)?",component:n.i(o.a)("job")},{path:"/item/:id(\\d+)",component:u.a},{path:"/user/:id",component:m.a},{path:"*",redirect:"/top"}]})},function(t,e,n){"use strict";var s=n(1),i=n.n(s),r=n(8),a=n.n(r),o=n(9);i.a.use(a.a);var c=new a.a.Store({state:{activeType:null,itemsPerPage:20,items:{},users:{},lists:{top:[],"new":[],show:[],ask:[],job:[]}},actions:{FETCH_LIST_DATA:function(t,e){var s=t.commit,i=t.dispatch,r=(t.state,e.type);return s("SET_ACTIVE_TYPE",{type:r}),n.i(o.a)(r).then(function(t){return s("SET_LIST",{type:r,ids:t})}).then(function(){return i("ENSURE_ACTIVE_ITEMS")})},ENSURE_ACTIVE_ITEMS:function(t){var e=t.dispatch,n=t.getters;return e("FETCH_ITEMS",{ids:n.activeIds})},FETCH_ITEMS:function(t,e){var s=t.commit,i=t.state,r=e.ids;return r=r.filter(function(t){return!i.items[t]}),r.length?n.i(o.b)(r).then(function(t){return s("SET_ITEMS",{items:t})}):Promise.resolve()},FETCH_USER:function(t,e){var s=t.commit,i=t.state,r=e.id;return i.users[r]?Promise.resolve(i.users[r]):n.i(o.c)(r).then(function(t){return s("SET_USER",{user:t})})}},mutations:{SET_ACTIVE_TYPE:function(t,e){var n=e.type;t.activeType=n},SET_LIST:function(t,e){var n=e.type,s=e.ids;t.lists[n]=s},SET_ITEMS:function(t,e){var n=e.items;n.forEach(function(e){e&&i.a.set(t.items,e.id,e)})},SET_USER:function(t,e){var n=e.user;i.a.set(t.users,n.id,n)}},getters:{activeIds:function(t){var e=t.activeType,n=t.itemsPerPage,s=t.lists,i=Number(t.route.params.page)||1;if(e){var r=(i-1)*n,a=i*n;return s[e].slice(r,a)}return[]},activeItems:function(t,e){return e.activeIds.map(function(e){return t.items[e]}).filter(function(t){return t})}}});e.a=c},function(t,e,n){"use strict";function s(t){return{name:t+"-stories-view",preFetch:function(e){return e.dispatch("FETCH_LIST_DATA",{type:t})},render:function(e){return e(r.a,{props:{type:t}})}}}var i=n(37),r=n.n(i);e.a=s},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0QwQUQ3MDQ1ODRDMTFFNjg3RTY4OTk2MDI5RjY0NEEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0QwQUQ3MDM1ODRDMTFFNjg3RTY4OTk2MDI5RjY0NEEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkIxQUFERjk1ODRCMTFFNkEzNzlDMEVFOEY2NTE3RDEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkIxQUFERkE1ODRCMTFFNkEzNzlDMEVFOEY2NTE3RDEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6R9N1XAAADmklEQVR42uxZW0hUQRj+zrrrqizqakmWuV0gMBQlpOihkOgC9qIF4kOPQSAYlIW59tCF6qGgBKGgoDJpJbQrlaEo2YumgmhiopUt5L1Myk1dPaeZWXV3jmue3bMuG+ywHM7+M2fmO9/3z//PzBEkSUIgFQ0CrAQcIK3zdqALbTWI0EMQ/Dc+cRjbFNL2IT5pEaC2ZzhdhET/siYCVuDqFXeAIowUzTrAjwRBmh/ajWREKQ1DI/jdjV2cJDjLPJhl/1ZacpHSca+Z94DFRWDeuvgRwSeASJPfwCjfO0GzBtABs0uQPgzY5x9xoIkDwoEZlYBIR0PAnsPYnoOJH3PepwvD935YzAgF/ckKGXIMyC2AKQX2ybleDEbUlqKlATFL86oUEHnjPivycuRVnY14+xybGBMLJYS9wIZk5F6Tt79jVqKHZvnARahubUb5KXlV7gU6/NQizyCkZBfIG986ip5exC5Dj7JZRiRYC1Rex2gfZzelYud+fHPpQ8NcbWM8dh/hWvZ34/Vd2ondJ9OevFMkYBNRYZZXZRVRFewu+o4De49B4LWxFGFShGF5ehTHITKVEoBqC760cPatGdi2CwPMFYl8P4F4Aw7yen1qRP0TrHc3H70HJLEZS673T8qrsospQ9PsfojRE2bgGpQX0qteET2eRGoHSU3v0F7N2VMPIC0NI0RTwKhFZj5X21GLpgaasGeVjqMYkMR0IVHndr686tBZ6vgEU0YOYkxc1b3j9CmtUno8zGVk1HjgQy9qbnL2HdnYvIW6c9YZzv6+Cm1dNKDPeDCIh8mVNF8NPDqHqV+cNT0LyUlISHEJYCIsxYhi6WUFs/0sA/R5GI8vc/bMPJjLOAthsaPbU3q8Wn6ITLinNzA+6DTGmpCY7vw7PYHK80riso8ARZOQM4mHhUu2eVWCryOUS9E/CzSHd78og7XdTa1tDBWXKD0z3vTtFSAihIG9/YMTbmqrLmLUBqM3eqlYwpLoTLJBYx1aX3L2wR68KaH8ebtBV7Gm1jJRZKqND2NWpIlC9D8gkcWYiGjOqNNDp1GeKFZi1+Hjw5PgviwIKAhInvzDIzlLVBxdXauYeVpVgFYB9aXorIPIdh5CCP6MQS+q6VIdIJLRPjahucm5hw9lG0sV4UkdIDtbihj5MKmKIJWABLXD/18HVpI0d8rkz+KQ2OVrgpZb6Vn9zprjWJgMveAFzm8dgXFwLgQ/vvxvgP4KMAC8TAc1j4IsCQAAAABJRU5ErkJggg=="},,,function(t,e,n){var s,i;n(21);var r=n(40);i=s=s||{},"object"==typeof s["default"]&&(i=s=s["default"]),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,n){var s,i;n(26),s=n(11);var r=n(45);i=s=s||{},"object"==typeof s["default"]&&(i=s=s["default"]),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,n){var s,i;n(27),s=n(12);var r=n(46);i=s=s||{},"object"==typeof s["default"]&&(i=s=s["default"]),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,n){var s,i;n(24),s=n(13);var r=n(43);i=s=s||{},"object"==typeof s["default"]&&(i=s=s["default"]),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,n){var s,i;n(23),s=n(15);var r=n(42);i=s=s||{},"object"==typeof s["default"]&&(i=s=s["default"]),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,n){var s,i;n(22),s=n(16);var r=n(41);i=s=s||{},"object"==typeof s["default"]&&(i=s=s["default"]),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=s},function(module,exports,__webpack_require__){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"app"}},[_h("div",{staticClass:"header"},[_h("div",{staticClass:"inner"},[_h("router-link",{attrs:{to:"/",exact:""}},[_m(0)])," ",_h("router-link",{attrs:{to:"/top"}},["Top"])," ",_h("router-link",{attrs:{to:"/new"}},["New"])," ",_h("router-link",{attrs:{to:"/show"}},["Show"])," ",_h("router-link",{attrs:{to:"/ask"}},["Ask"])," ",_h("router-link",{attrs:{to:"/job"}},["Jobs"])," ",_m(1)])])," ",_h("transition",{attrs:{name:"fade",mode:"out-in"}},[_h("router-view",{staticClass:"view"})])])},staticRenderFns:[function(){with(this)return _h("img",{staticClass:"logo",attrs:{src:__webpack_require__(31),alt:"logo"}})},function(){with(this)return _h("a",{staticClass:"github",attrs:{href:"https://github.com/vuejs/vue-hackernews-2.0",target:"_blank"}},["\n        Built with Vue.js\n      "])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"user-view"},[_h("spinner",{attrs:{show:!user}})," ",user?[_h("h1",["User : "+_s(user.id)])," ",_h("ul",{staticClass:"meta"},[_h("li",[_m(0)," "+_s(_f("timeAgo")(user.created))+" ago"])," ",_h("li",[_m(1)," "+_s(user.karma)])," ",user.about?_h("li",{staticClass:"about",domProps:{innerHTML:_s(user.about)}}):_e()])," ",_h("p",{staticClass:"links"},[_h("a",{attrs:{href:"https://news.ycombinator.com/submitted?id="+user.id}},["submissions"])," |\n      ",_h("a",{attrs:{href:"https://news.ycombinator.com/threads?id="+user.id}},["comments"])])]:_e()])},staticRenderFns:[function(){with(this)return _h("span",{staticClass:"label"},["Created:"])},function(){with(this)return _h("span",{staticClass:"label"},["Karma:"])}]}},function(module,exports){module.exports={render:function(){with(this)return item?_h("div",{staticClass:"item-view"},[_h("spinner",{attrs:{show:!item}})," ",item?[_h("div",{staticClass:"item-view-header"},[_h("a",{attrs:{href:item.url,target:"_blank"}},[_h("h1",[_s(item.title)])])," ",item.url?_h("span",{staticClass:"host"},["\n        ("+_s(_f("host")(item.url))+")\n      "]):_e()," ",_h("p",{staticClass:"meta"},["\n        "+_s(item.score)+" points\n        | by ",_h("router-link",{attrs:{to:"/user/"+item.by}},[_s(item.by)]),"\n        "+_s(_f("timeAgo")(item.time))+" ago\n      "])])," ",_h("div",{staticClass:"item-view-comments"},[_h("p",{staticClass:"item-view-comments-header"},["\n        "+_s(item.kids?item.descendants+" comments":"No comments yet.")+"\n      "])," ",item.kids?_h("ul",{staticClass:"comment-children"},[item.kids&&_l(item.kids,function(t){return _h("comment",{attrs:{id:t}})})]):_e()])]:_e()]):_e()},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"news-view"},[_h("spinner",{attrs:{show:loading}})," ",_h("div",{staticClass:"news-list-nav"},[page>1?_h("router-link",{attrs:{to:"/"+type+"/"+(page-1)}},["< prev"]):_h("a",{staticClass:"disabled"},["< prev"])," "," ",_h("span",[_s(page)+"/"+_s(maxPage)])," ",hasMore?_h("router-link",{attrs:{to:"/"+type+"/"+(page+1)}},["more >"]):_h("a",{staticClass:"disabled"},["more >"])," "])," ",_h("transition",{attrs:{name:transition}},[displayedPage>0?_h("div",{key:displayedPage,staticClass:"news-list"},[_h("transition-group",{attrs:{tag:"ul",name:"item"}},[displayedItems&&_l(displayedItems,function(t){return _h("item",{key:t.id,attrs:{item:t}})})])]):_e()])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("svg",{staticClass:"spinner","class":{show:show},attrs:{width:"44px",height:"44px",viewBox:"0 0 44 44"}},[_h("circle",{staticClass:"path",attrs:{fill:"none","stroke-width":"4","stroke-linecap":"round",cx:"22",cy:"22",r:"20"}})])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return comment?_h("li",{staticClass:"comment"},[_h("div",{staticClass:"by"},[_h("router-link",{attrs:{to:"/user/"+comment.by}},[_s(comment.by)]),"\n    "+_s(_f("timeAgo")(comment.time))+" ago\n    ",comment.kids&&comment.kids.length?_h("span",["\n      | ",_h("a",{staticClass:"expand",on:{click:function(t){open=!open}}},["\n        "+_s((open?"collapse ":"expand ")+pluralize(comment.kids.length))+"\n      "])]):_e()])," ",_h("div",{staticClass:"text",domProps:{innerHTML:_s(comment.text)}})," ",_h("ul",{directives:[{name:"show",value:open,expression:"open"}],staticClass:"comment-children"},[comment.kids&&_l(comment.kids,function(t){return _h("comment",{attrs:{id:t}})})])]):_e()},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("li",{staticClass:"news-item"},[_h("span",{staticClass:"score"},[_s(item.score)])," ",_h("span",{staticClass:"title"},[item.url?[_h("a",{attrs:{href:item.url,target:"_blank"}},[_s(item.title)])," ",_h("span",{staticClass:"host"},["("+_s(_f("host")(item.url))+")"])]:[_h("router-link",{attrs:{to:"/item/"+item.id}},[_s(item.title)])]," "])," ",_m(0)," ",_h("span",{staticClass:"meta"},["job"!==item.type?_h("span",{staticClass:"by"},["\n      by ",_h("router-link",{attrs:{to:"/user/"+item.by}},[_s(item.by)])]):_e()," ",_h("span",{staticClass:"time"},["\n      "+_s(_f("timeAgo")(item.time))+" ago\n    "])," ","job"!==item.type?_h("span",{staticClass:"comments-link"},["\n      | ",_h("router-link",{attrs:{to:"/item/"+item.id}},[_s(item.descendants)+" comments"])]):_e()])," ","story"!==item.type?_h("span",{staticClass:"label"},[_s(item.type)]):_e()])},staticRenderFns:[function(){with(this)return _h("br")}]}},function(t,e){e.sync=function(t,e){t.registerModule("route",{state:{},mutations:{"router/ROUTE_CHANGED":function(e,n){t.state.route=Object.freeze({name:n.name,path:n.path,hash:n.hash,query:n.query,params:n.params,fullPath:n.fullPath})}}});var n,s=!1;t.watch(function(t){return t.route},function(t){t.fullPath!==n&&(s=!0,n=t.fullPath,e.push(t))},{sync:!0}),e.afterEach(function(e){return s?void(s=!1):(n=e.fullPath,void t.commit("router/ROUTE_CHANGED",e))})}},,,function(t,e,n){"use strict";var s=n(10);n(2).polyfill(),s.a.replaceState(window.__INITIAL_STATE__),s.b.$mount("#app")}],[50]);