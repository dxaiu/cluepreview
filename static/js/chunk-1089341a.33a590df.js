(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1089341a"],{3835:function(t,e,n){"use strict";function a(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return l}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function r(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var a,r,i=[],s=!0,l=!1;try{for(n=n.call(t);!(s=(a=n.next()).done);s=!0)if(i.push(a.value),e&&i.length===e)break}catch(o){l=!0,r=o}finally{try{s||null==n["return"]||n["return"]()}finally{if(l)throw r}}return i}}var i=n("06c5");function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){return a(t)||r(t,e)||Object(i["a"])(t,e)||s()}},4287:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container"},[n("div",{staticClass:"form-wrapper"},[n("d-form",{staticClass:"iform",attrs:{"layout-span":t.layoutSpan,breakpoint:t.breakpoint,inline:!0,items:t.formItems,model:t.form}}),n("div",{staticClass:"btn-wrapper"},[n("el-button",{attrs:{type:"primary"},on:{click:t.searchTable}},[t._v("查询")]),n("el-button",{on:{click:t.reset}},[t._v("重置")])],1)],1),n("div",{staticClass:"table-dash"},[n("div",{staticClass:"search-header"},[n("div",{staticClass:"search-result-count"},[n("i",{staticClass:"el-icon-info"}),n("span",[t._v("当前搜索结果"+t._s(t.totalCount||0)+"条")])])]),n("d-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",staticClass:"table-wrapper table-wrapper-scorll",attrs:{data:t.tableData,columns:t.columns,pagination:t.pagination,total:t.totalCount,layout:"total, sizes, prev, pager, next, jumper",small:""},on:{"pagination-change":t.handlePageChange}})],1),t.assignVisible?n("Assignment",{attrs:{visible:t.assignVisible},on:{"update:visible":function(e){t.assignVisible=e},refreshTable:t.refreshTable}}):t._e()],1)},r=[],i=n("3835"),s=n("5530"),l=n("b775");n("5f87");function o(t){return Object(l["a"])({url:"/customer/nodistr",method:"get",params:t})}function u(t){return Object(l["a"])({url:"/v0/item/".concat(t),method:"delete"})}function c(t){return Object(l["a"])({url:"/customer/index/nodistribution",method:"get",query:t})}var d=n("2f62"),h=n("ed08"),f=n("6be8"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("d-dialog",{attrs:{title:t.title,visible:t.visible,width:"500px","vertical-center":"","close-on-click-modal":!1},on:{close:t.close,opened:t.opened}},[n("d-form",{ref:"form",attrs:{items:t.items,model:t.form,rules:t.rules,labelPosition:"top"}}),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.handleSure}},[t._v("确定")]),n("el-button",{on:{click:t.close}},[t._v("取消")])],1)],1)},p=[],b=(n("d81d"),{name:"Assignment",data:function(){return{title:"分配客户",items:[{type:"select",value:"id",label:"分配客户",clearable:!0,options:[]},{label:"备注",type:"text",value:"remark",clearable:!0,placeholder:"请输入备注"},{label:"城市",type:"text",value:"city",clearable:!0,placeholder:"请输入城市"}],form:{},rules:{id:[{required:!0,message:"请选择分配客户",trigger:"blur"}],remark:[{required:!0,message:"请输入备注",trigger:"blur"},{max:50,message:"备注不超过50个字符",trigger:"blur"}],city:[{required:!0,message:"请输入城市",trigger:"blur"},{max:10,message:"城市名称不可大于10个字符",trigger:"blur"}]}}},mounted:function(){this.getOrgList()},methods:{opened:function(){this.getOrgList()},close:function(){this.$emit("update:visible",!1)},handleSure:function(){var t=this;this.$refs.form.validate((function(e){e&&t.$emit("add",t.form)}))},getOrgList:function(){var t=this;c().then((function(e){console.log(e,"pppp"),e.data.list&&0!==e.data.list.length?t.items[0].options=e.data.list.map((function(t){return{label:t.nickname,value:t.id}})):t.items[0].options=[]}))}},props:{visible:{type:Boolean,required:!0}}}),g=b,v=n("2877"),y=Object(v["a"])(g,m,p,!1,null,null,null),$=y.exports,D={name:"unassignedLead",components:{Assignment:$},data:function(){return{barData:[],layoutSpan:24,breakpoint:[[768,2],[992,3],[1200,3],[1920,3],[1/0,4]],labelPosition:"right",labelWidth:150,form:{},lockedModel:{},multipleSelection:[],formItems:[{type:"text",value:"name",label:"ID",clearable:!0},{type:"text",value:"mobile",label:"备注",clearable:!0},{type:"text",value:"source",label:"名称",clearable:!0},{type:"text",value:"province",label:"电话",clearable:!0},{type:"text",value:"city",label:"线索来源",clearable:!0},{type:"text",value:"keshi",label:"省份",clearable:!0},{type:"text",value:"customer",label:"城市",clearable:!0},{type:"text",value:"detail",label:"科室",clearable:!0},{type:"text",value:"status",label:"广告主名称",clearable:!0},{type:"text",value:"planStatus",label:"广告计划名称",clearable:!0},{type:"daterange",value:"createtime",label:"创建时间",clearable:!0},{type:"daterange",value:"updatetime",label:"更新时间",clearable:!0}],loading:!1,tableData:[],totalCount:0,columns:[{label:"ID",prop:"id"},{label:"备注",prop:"note"},{label:"名称",prop:"name"},{label:"电话",prop:"telphone"},{label:"线索来源",prop:"comefrom"},{label:"省份",prop:"province"},{label:"城市",prop:"city"},{label:"科室",prop:"keshi"},{label:"广告主名称",prop:"organ"},{label:"广告计划名称",prop:"ad_name"},{label:"创建时间",prop:"createtime",formatter:f["a"]},{label:"更新时间",prop:"updatetime",formatter:f["a"]},{label:"操作",width:"180",fixed:"right",buttons:[{type:"text",label:"分配客户",click:this.handleAssignCustomer},{type:"text",label:"删除",click:this.handleDelete}]}],pagination:{currentPage:1,pageSize:10},assignVisible:!1,indexParams:{startIndex:null,endIndex:null}}},computed:Object(s["a"])({},Object(d["b"])(["info"])),mounted:function(){this.handleTableData()},methods:{searchTable:function(){this.pagination.currentPage=1,this.lockedModel=Object(h["a"])(this.form),this.handleTableData()},handleTableData:function(){var t=this,e=this.lockedModel,n=e.vin,a=e.iccid,r=e.vehicleDepartment,l=e.vehicleStatus,u=e.realNameState,c=e.customerType,d=e.orgUUID,h=e.createtime,f=e.updatetime,m=h||[],p=Object(i["a"])(m,2),b=p[0],g=p[1],v=f||[],y=Object(i["a"])(v,2),$=y[0],D=y[1],M=Object(s["a"])({vin:n,iccid:a,vehicleDepartment:r,vehicleStatus:l,realNameState:u,customerType:c,orgUUID:d,createStartTime:b,createEndTime:g,updateStartTime:$,updateEndTime:D},this.pagination);this.loading=!0,o(M).then((function(e){t.loading=!1,t.tableData=e.data.items,t.totalCount=e.data.total})).catch((function(){t.loading=!1}))},handleAssignCustomer:function(t){console.log(t,"row"),this.assignVisible=!0},reset:function(){this.form={}},refreshTable:function(){this.reset(),this.pagination.currentPage=1,this.handleTableData()},handlePageChange:function(t){var e=t.type,n=t.val;this.pagination[e]=n,"pageSize"===e&&(this.pagination.currentPage=1),this.handleTableData()},handleDelete:function(t){var e=this;this.$confirm("是否确认删除?","删除",{showClose:!0,confirmButtonText:"确认"}).then((function(){u({vin:t.vin}).then((function(){e.$message.success("删除成功"),e.handleTableData()}))})).catch((function(t){return console.log(t)}))}}},M=D,S=Object(v["a"])(M,a,r,!1,null,"f3a78232",null);e["default"]=S.exports},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,a="millisecond",r="second",i="minute",s="hour",l="day",o="week",u="month",c="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},g=function(t,e,n){var a=String(t);return!a||a.length>=e?t:""+Array(e+1-a.length).join(n)+t},v={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),a=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+g(a,2,"0")+":"+g(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var a=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(a,u),i=n-r<0,s=e.clone().add(a+(i?-1:1),u);return+(-(a+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:d,w:o,d:l,D:h,h:s,m:i,s:r,ms:a,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=b;var D=function(t){return t instanceof x},M=function t(e,n,a){var r;if(!e)return y;if("string"==typeof e){var i=e.toLowerCase();$[i]&&(r=i),n&&($[i]=n,r=i);var s=e.split("-");if(!r&&s.length>1)return t(s[0])}else{var l=e.name;$[l]=e,r=l}return!a&&r&&(y=r),r||!a&&y},S=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},w=v;w.l=M,w.i=D,w.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function b(t){this.$L=M(t.locale,null,!0),this.parse(t)}var g=b.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var a=e.match(m);if(a){var r=a[2]-1||0,i=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)):new Date(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return w},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return S(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<S(t)},g.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,a=!!w.u(e)||e,c=w.p(t),f=function(t,e){var r=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return a?r:r.endOf(l)},m=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,b=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case d:return a?f(1,0):f(31,11);case u:return a?f(1,b):f(0,b+1);case o:var y=this.$locale().weekStart||0,$=(p<y?p+7:p)-y;return f(a?g-$:g+(6-$),b);case l:case h:return m(v+"Hours",0);case s:return m(v+"Minutes",1);case i:return m(v+"Seconds",2);case r:return m(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,o=w.p(t),c="set"+(this.$u?"UTC":""),f=(n={},n[l]=c+"Date",n[h]=c+"Date",n[u]=c+"Month",n[d]=c+"FullYear",n[s]=c+"Hours",n[i]=c+"Minutes",n[r]=c+"Seconds",n[a]=c+"Milliseconds",n)[o],m=o===l?this.$D+(e-this.$W):e;if(o===u||o===d){var p=this.clone().set(h,1);p.$d[f](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[w.p(t)]()},g.add=function(a,c){var h,f=this;a=Number(a);var m=w.p(c),p=function(t){var e=S(f);return w.w(e.date(e.date()+Math.round(t*a)),f)};if(m===u)return this.set(u,this.$M+a);if(m===d)return this.set(d,this.$y+a);if(m===l)return p(1);if(m===o)return p(7);var b=(h={},h[i]=e,h[s]=n,h[r]=t,h)[m]||1,g=this.$d.getTime()+a*b;return w.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var a=t||"YYYY-MM-DDTHH:mm:ssZ",r=w.z(this),i=this.$H,s=this.$m,l=this.$M,o=n.weekdays,u=n.months,c=function(t,n,r,i){return t&&(t[n]||t(e,a))||r[n].slice(0,i)},d=function(t){return w.s(i%12||12,t,"0")},h=n.meridiem||function(t,e,n){var a=t<12?"AM":"PM";return n?a.toLowerCase():a},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:w.s(l+1,2,"0"),MMM:c(n.monthsShort,l,u,3),MMMM:c(u,l),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,o,2),ddd:c(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(i),HH:w.s(i,2,"0"),h:d(1),hh:d(2),a:h(i,s,!0),A:h(i,s,!1),m:String(s),mm:w.s(s,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:r};return a.replace(p,(function(t,e){return e||m[t]||r.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(a,h,f){var m,p=w.p(h),b=S(a),g=(b.utcOffset()-this.utcOffset())*e,v=this-b,y=w.m(this,b);return y=(m={},m[d]=y/12,m[u]=y,m[c]=y/3,m[o]=(v-g)/6048e5,m[l]=(v-g)/864e5,m[s]=v/n,m[i]=v/e,m[r]=v/t,m)[p]||v,f?y:w.a(y)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return $[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),a=M(t,e,!0);return a&&(n.$L=a),n},g.clone=function(){return w.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},b}(),O=x.prototype;return S.prototype=O,[["$ms",a],["$s",r],["$m",i],["$H",s],["$W",l],["$M",u],["$y",d],["$D",h]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,x,S),t.$i=!0),S},S.locale=M,S.isDayjs=D,S.unix=function(t){return S(1e3*t)},S.en=$[y],S.Ls=$,S.p={},S}))},"6be8":function(t,e,n){"use strict";var a=n("ed08"),r=n("5a0c"),i=n.n(r),s={status:{normal:"正常",DISABLE:"停用"},state:{normal:"正常",hidden:"隐藏"},planStatus:{0:"正常",1:"停用"},yellow:{0:"正常",1:"变黄"},success:{true:"成功",false:"失败"},createTime:function(t){if(t)return i.a.unix(t).format("YYYY-MM-DD HH:mm:ss")},createtime:function(t){if(t)return i.a.unix(t).format("YYYY-MM-DD HH:mm:ss")},updatetime:function(t){if(t)return i.a.unix(t).format("YYYY-MM-DD HH:mm:ss")}};e["a"]=function(){for(var t,e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];if(2===r.length?(t=r[0],e=r[1]):(t=Object(a["b"])(r[0],r[1].property).k,e=r[2]),s[t])return"function"===typeof s[t]?s[t](e):s[t][e]||e}}}]);