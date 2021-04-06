(function(t){function a(a){for(var s,o,r=a[0],c=a[1],i=a[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(a);while(d.length)d.shift()();return l.push.apply(l,i||[]),e()}function e(){for(var t,a=0;a<l.length;a++){for(var e=l[a],s=!0,r=1;r<e.length;r++){var c=e[r];0!==n[c]&&(s=!1)}s&&(l.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},n={app:0},l=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=a,r=r.slice();for(var i=0;i<r.length;i++)a(r[i]);var p=c;l.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e("v-toolbar-title",[t._v("Zaffaera Players Tools")])],1)]),e("v-main",[e("v-container",[e("v-expansion-panels",{attrs:{focusable:""}},[e("v-expansion-panel",[e("v-expansion-panel-header",[t._v("Number of Attacks Calculator")]),e("v-expansion-panel-content",[e("attacks-calculator")],1)],1),e("v-expansion-panel",[e("v-expansion-panel-header",[t._v("Health and Vitality Calculator")]),e("v-expansion-panel-content",[e("health-calculator")],1)],1)],1)],1)],1)],1)},l=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-stepper",{attrs:{vertical:""},model:{value:t.attacksCalculator,callback:function(a){t.attacksCalculator=a},expression:"attacksCalculator"}},[e("v-stepper-step",{attrs:{step:"1",editable:"",complete:t.attacksCalculator>1}},[t._v(" Character Stats ")]),e("v-stepper-content",{attrs:{step:"1"}},[e("div",{staticClass:"stepper-content"},[e("v-slider",{attrs:{max:6,min:2,label:"Proficiency Bonus",ticks:"always","thumb-label":"always",step:"1"},model:{value:t.stats.profBonus,callback:function(a){t.$set(t.stats,"profBonus",a)},expression:"stats.profBonus"}}),e("v-slider",{attrs:{max:7,min:-1,label:"Ability Modifier",ticks:"always","thumb-label":"always",step:"1"},model:{value:t.stats.abilityMod,callback:function(a){t.$set(t.stats,"abilityMod",a)},expression:"stats.abilityMod"}})],1),e("v-btn",{staticClass:"btn-continue",attrs:{color:"primary"},on:{click:function(a){t.attacksCalculator=2}}},[t._v(" Continue ")])],1),e("v-stepper-step",{attrs:{step:"2",editable:"",complete:t.attacksCalculator>2}},[t._v(" Main Hand Weapon ")]),e("v-stepper-content",{attrs:{step:"2"}},[e("div",{staticClass:"stepper-content"},[e("v-slider",{attrs:{max:10,min:1,label:"Speed",ticks:"always","thumb-label":"always",step:"1"},model:{value:t.weapons.mh.speed,callback:function(a){t.$set(t.weapons.mh,"speed",a)},expression:"weapons.mh.speed"}}),e("v-slider",{attrs:{max:5,min:0,label:"Enchantment Bonus",hint:"+1, +2, etc.","persistent-hint":"",ticks:"always","thumb-label":"always",step:"1"},model:{value:t.weapons.mh.echant,callback:function(a){t.$set(t.weapons.mh,"echant",a)},expression:"weapons.mh.echant"}})],1),e("v-btn",{staticClass:"btn-continue",attrs:{color:"primary"},on:{click:function(a){t.attacksCalculator=3}}},[t._v(" Continue ")])],1),e("v-stepper-step",{attrs:{step:"3",editable:"",complete:t.attacksCalculator>3}},[t._v(" Off-Hand Weapon ")]),e("v-stepper-content",{attrs:{step:"3"}},[e("div",{staticClass:"stepper-content"},[e("v-switch",{attrs:{label:"Off-Hand Equipped?: "+(t.weapons.hasOffhand?"Yes":"No")},model:{value:t.weapons.hasOffhand,callback:function(a){t.$set(t.weapons,"hasOffhand",a)},expression:"weapons.hasOffhand"}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.weapons.hasOffhand,expression:"weapons.hasOffhand"}],staticClass:"mx-auto"},[e("v-expand-transition",[e("v-slider",{attrs:{max:10,min:1,label:"Speed",ticks:"always","thumb-label":"always",step:"1"},model:{value:t.weapons.oh.speed,callback:function(a){t.$set(t.weapons.oh,"speed",a)},expression:"weapons.oh.speed"}})],1),e("v-expand-transition",[e("v-slider",{attrs:{max:5,min:0,label:"Enchantment Bonus",hint:"+1, +2, etc.","persistent-hint":"",ticks:"always","thumb-label":"always",step:"1"},model:{value:t.weapons.oh.echant,callback:function(a){t.$set(t.weapons.oh,"echant",a)},expression:"weapons.oh.echant"}})],1)],1)],1),e("v-btn",{staticClass:"btn-continue",attrs:{color:"primary"},on:{click:function(a){t.attacksCalculator=4}}},[t._v(" Continue ")])],1),e("v-stepper-step",{attrs:{step:"4"}},[t._v(" Results ")]),e("v-stepper-content",{attrs:{step:"4"}},[e("div",{staticClass:"stepper-content"},[e("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v(" Main Hand ")]),e("th",{directives:[{name:"show",rawName:"v-show",value:t.weapons.hasOffhand,expression:"weapons.hasOffhand"}],staticClass:"text-left"},[t._v(" Off-Hand ")])])]),e("tbody",t._l(t.numAttacks,(function(a,s){return e("tr",{key:s},[e("td",[t._v(t._s(a[0]))]),e("td",{directives:[{name:"show",rawName:"v-show",value:t.weapons.hasOffhand,expression:"weapons.hasOffhand"}]},[t._v(t._s(a[1]))])])})),0)]},proxy:!0}])})],1),e("v-btn",{staticClass:"btn-continue",attrs:{color:"secondary"},on:{click:function(a){t.attacksCalculator=1}}},[t._v(" Start Over ")])],1)],1)},r=[],c={data:function(){return{attacksCalculator:1,stats:{profBonus:2,abilityMod:0},weapons:{mh:{speed:4,enchant:0},oh:{speed:4,enchant:0},hasOffhand:!1}}},computed:{numAttacks:function(){for(var t=[],a=this.stats.profBonus+this.stats.abilityMod+this.weapons.mh.enchant,e=this.stats.profBonus+this.stats.abilityMod+this.weapons.oh.enchant,s=this.weapons.mh.speed,n=this.weapons.oh.speed,l=this.weapons.hasOffhand,o=a;o>=0;o-=s)t.push(["+".concat(o),"--"]);for(var r=0,c=e;c>=0;c-=n)c-=r,c>=0&&l&&(r in t?t[r][1]="+".concat(c):t.push(["--","+".concat(c)])),r++;return t}}},i=c,p=(e("6771"),e("2877")),u=e("6544"),d=e.n(u),h=e("8336"),f=e("0789"),v=e("1f4f"),b=e("ba0d"),m=e("7e85"),w=e("e516"),y=e("56a4"),x=e("b73d"),k=Object(p["a"])(i,o,r,!1,null,"6bfad428",null),C=k.exports;d()(k,{VBtn:h["a"],VExpandTransition:f["a"],VSimpleTable:v["a"],VSlider:b["a"],VStepper:m["a"],VStepperContent:w["a"],VStepperStep:y["a"],VSwitch:x["a"]});var _=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"health-calculator"}},[e("v-slider",{attrs:{max:20,min:1,label:"Milestones",ticks:"always","thumb-label":"always",step:"1"},model:{value:t.milestones,callback:function(a){t.milestones=a},expression:"milestones"}}),e("v-slider",{attrs:{max:7,min:-1,label:"CON Modifier",ticks:"always","thumb-label":"always",step:"1"},model:{value:t.conMod,callback:function(a){t.conMod=a},expression:"conMod"}}),e("v-slider",{attrs:{max:15,min:2,label:"Race HP",ticks:"always","thumb-label":"always",step:"1"},model:{value:t.raceHp,callback:function(a){t.raceHp=a},expression:"raceHp"}}),e("v-slider",{attrs:{max:8,min:5,label:"Class HP",ticks:"always","thumb-label":"always",step:"1"},model:{value:t.classHp,callback:function(a){t.classHp=a},expression:"classHp"}}),e("v-slider",{attrs:{max:2,min:0,label:"Adjustment",ticks:"always","thumb-label":"always",step:"1"},model:{value:t.adjustment,callback:function(a){t.adjustment=a},expression:"adjustment"}}),e("v-switch",{attrs:{label:"Has Hearty Feat?: "+(t.hasHearty?"Yes":"No")},model:{value:t.hasHearty,callback:function(a){t.hasHearty=a},expression:"hasHearty"}}),e("div",{staticClass:"results"},[e("div",{staticClass:"section"},[e("h2",[t._v("Health")]),e("hr"),e("h3",[t._v(t._s(t.calculated.hp))])]),e("div",{staticClass:"section"},[e("h2",[t._v("Vitality")]),e("hr"),e("h3",[t._v(t._s(t.calculated.vp))])])])],1)},O=[],H={data:function(){return{milestones:2,conMod:0,classHp:5,raceHp:4,adjustment:0,hasHearty:!1}},computed:{calculated:function(){var t=0,a=0;return t+=this.milestones*this.conMod,t+=this.milestones*this.raceHp,t+=this.classLvl(this.milestones)*this.classHp,a=Math.ceil(t/(this.hasHearty?2:4)),{hp:t,vp:a}}},methods:{classLvl:function(t){switch(this.adjustment){case 1:return Math.floor(.8*t);case 2:return Math.floor(.6*t);default:return t}}}},M=H,V=(e("5d75"),Object(p["a"])(M,_,O,!1,null,"8b95da76",null)),S=V.exports;d()(V,{VSlider:b["a"],VSwitch:x["a"]});var j={name:"App",components:{AttacksCalculator:C,HealthCalculator:S},data:function(){return{items:[{title:"Home"},{title:"About"}],drawer:!1,group:null}}},P=j,g=(e("5c0b"),e("7496")),B=e("40dc"),E=e("a523"),$=e("cd55"),A=e("49e2"),T=e("c865"),N=e("0393"),J=e("f6c4"),L=e("2a7f"),R=Object(p["a"])(P,n,l,!1,null,null,null),W=R.exports;d()(R,{VApp:g["a"],VAppBar:B["a"],VContainer:E["a"],VExpansionPanel:$["a"],VExpansionPanelContent:A["a"],VExpansionPanelHeader:T["a"],VExpansionPanels:N["a"],VMain:J["a"],VToolbarTitle:L["a"]});var Y=e("f309");s["a"].config.productionTip=!1,s["a"].use(Y["a"]);var q=new Y["a"];new s["a"]({vuetify:q,render:function(t){return t(W)}}).$mount("#app")},"5b0a":function(t,a,e){},"5c0b":function(t,a,e){"use strict";e("9c0c")},"5d75":function(t,a,e){"use strict";e("b878")},6771:function(t,a,e){"use strict";e("5b0a")},"9c0c":function(t,a,e){},b878:function(t,a,e){}});
//# sourceMappingURL=app.85bbc767.js.map