(this.webpackJsonpmy=this.webpackJsonpmy||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),a=n(4),r=n.n(a);n(13),n(14);var o=n(2),d=n(1);function l(){var t=Object(o.c)((function(t){return t.theme})),e=Object(o.c)((function(t){return t.placeData}));return Object(d.jsxs)("div",{className:" ".concat(t?"dark":"light"),children:[" ",e.location?Object(d.jsxs)("div",{className:" ".concat(t?"dark":"light"),children:[Object(d.jsx)("h1",{children:e.location.name}),Object(d.jsx)("img",{src:e.current.condition.icon}),Object(d.jsxs)("div",{children:["Condition : ",e.current.condition.text]}),Object(d.jsxs)("span",{children:["Temp : ",e.current.temp_c," \xb0C"]}),Object(d.jsxs)("div",{children:["Humidity : ",e.current.humidity]}),Object(d.jsxs)("div",{children:["wind : ",e.current.wind_kph,"kmph"]})]}):Object(d.jsx)("div",{children:"Place not found "})]})}var s=function(){var t,e=Object(o.c)((function(t){return t.theme})),n=Object(o.b)(),c=(Object(o.c)((function(t){return t.theme})),Object(o.c)((function(t){return t.placeData})));return console.log("data==",c,e,"=toggle"),Object(d.jsxs)("div",{className:"App ".concat(e?"dark":"light"),children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:"dark-btn ".concat(e?"dark":"light"),onClick:function(){n({type:"TOGGLE_THEME"})},children:e?"Light":"Dark"}),Object(d.jsx)("input",{className:" ".concat(e?"dark":"light"),onChange:function(e){t=e.target.value,n(function(t){return{type:"UPDATE_PALACE",payload:t}}(e.target.value))}}),Object(d.jsx)("button",{className:" ".concat(e?"dark":"light"),onClick:function(){var e;n((e=t,function(t){fetch("https://api.weatherapi.com/v1/current.json?key=c7ecd36dd16a43828e0102855212907&q=".concat(e)).then((function(t){return t.json()})).then((function(e){t({type:"UPDATE_PLACE_DATA",payload:e})}))}))},children:"Submit"})]}),Object(d.jsx)(l,{})]})},u=n(3);var j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mumbai",e=arguments.length>1?arguments[1]:void 0;return"UPDATE_PLACE"===e.type?e.payload:t};var h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return"UPDATE_PLACE_DATA"===e.type?e.payload:t};var b=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;return console.log("theme=",t),"TOGGLE_THEME"===e.type?!t:t},p=Object(u.b)({place:j,placeData:h,theme:b}),v=n(8),O=Object(u.c)(p,Object(u.a)(v.a));r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(o.a,{store:O,children:Object(d.jsx)(s,{})})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.b5e620e6.chunk.js.map