(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e598f6a0"],{"02bc":function(e,t,r){"use strict";var a=r("9b86"),s=r.n(a);s.a},"159b":function(e,t,r){var a=r("da84"),s=r("fdbc"),i=r("17c2"),n=r("9112");for(var c in s){var o=a[c],l=o&&o.prototype;if(l&&l.forEach!==i)try{n(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(e,t,r){"use strict";var a=r("b727").forEach,s=r("a640"),i=r("ae40"),n=s("forEach"),c=i("forEach");e.exports=n&&c?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"1bcb":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-allseries"},[r("b-container",{staticClass:"container-filter-serie"},[r("h3",[e._v("Descrubir")]),r("b-row",[r("b-col",{staticClass:"filter-margin",attrs:{lg:"2"}},[r("span",[e._v("Categoria")]),r("b-form-select",{attrs:{options:e.options},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),r("b-col",{staticClass:"filter-margin",attrs:{lg:"2"}},[r("span",[e._v("Año")]),r("b-form-select",{attrs:{options:e.optionsYear},model:{value:e.selectedYear,callback:function(t){e.selectedYear=t},expression:"selectedYear"}})],1),r("b-col",{attrs:{lg:"2"}},[r("br"),r("b-button",{attrs:{block:"",variant:"danger"},on:{click:function(t){return e.applyFilter()}}},[e._v("Filtrar")])],1)],1)],1),r("b-container",[r("h3",[e._v("Series")]),r("b-pagination-nav",{attrs:{"number-of-pages":e.totalPages,"use-router":"","base-url":e.currentUrl,align:"center"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),r("b-row",e._l(e.Series,(function(t){return r("b-col",{key:t.id,staticClass:"container-serie text-center",attrs:{col:"6"}},[r("div",{staticClass:"container-serie-img",on:{click:function(r){return e.seeSerie(t.id)}}},[r("b-img-lazy",{attrs:{rounded:"",width:"180",src:e.baseUrl+t.poster_path}}),r("div",{staticClass:"title-img"},[r("span",[r("strong",[e._v(e._s(t.original_name))])])])],1)])})),1),r("b-pagination-nav",{attrs:{"number-of-pages":e.totalPages,"use-router":"","base-url":e.currentUrl,align:"center"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)},s=[],i=(r("4160"),r("b0c0"),r("159b"),r("bc3a")),n=r.n(i),c={data:function(){return{Series:[],baseUrl:"https://image.tmdb.org/t/p/w200/",Genres:[],selected:null,options:[{value:null,text:"Categoria"}],selectedYear:null,optionsYear:[{value:null,text:"Año"}],totalPages:0,currentPage:1,previousPage:1,currentUrl:"/allseries/page="}},created:function(){void 0!=this.$route.params.number?(this.currentPage=this.$route.params.number,this.previousPage=this.$route.params.number):(this.currentPage=1,this.previousPage=1),void 0==this.$route.params.category&&void 0==this.$route.params.year?(this.getGenres(),this.getSeries(),this.setYears()):(this.selected=this.$route.params.category,this.selectedYear=this.$route.params.year,this.getGenres(),this.getSeries(),this.setYears())},updated:function(){this.currentPage!=this.previousPage&&(this.previousPage=this.currentPage,this.getSeries())},methods:{seeSerie:function(e){this.$router.push("/serie/"+e)},applyFilter:function(){this.$router.push("/allseries/category="+this.selected+"/year="+this.selectedYear),null!=this.selected||null!=this.selectedYear?this.currentUrl="/allseries/category="+this.selected+"/year="+this.selectedYear+"/page=":this.currentUrl="/allseries/page=",this.currentPage=1,this.previousPage=1,this.getSeries()},getGenres:function(){var e=this;n.a.get("https://api.themoviedb.org/3/genre/tv/list?api_key=eac810b6ade616ce25d01396797173f0&language=es-CO").then((function(t){t.data.genres.forEach((function(t){e.options.push({value:t.id,text:t.name})}))})).catch((function(e){console.log(e)}))},getSeries:function(){var e,t=this;e=null!=this.selected&&null!=this.selectedYear?"https://api.themoviedb.org/3/discover/tv?api_key=eac810b6ade616ce25d01396797173f0&language=es-CO&page="+this.currentPage+"&primary_release_year="+this.selectedYear+"&with_genres="+this.selected:null==this.selected&&null!=this.selectedYear?"https://api.themoviedb.org/3/discover/tv?api_key=eac810b6ade616ce25d01396797173f0&language=es-CO&page="+this.currentPage+"&primary_release_year="+this.selectedYear:null!=this.selected&&null==this.selectedYear?"https://api.themoviedb.org/3/discover/tv?api_key=eac810b6ade616ce25d01396797173f0&language=es-CO&page="+this.currentPage+"&with_genres="+this.selected:"https://api.themoviedb.org/3/discover/tv?api_key=eac810b6ade616ce25d01396797173f0&language=es-CO&page="+this.currentPage,n.a.get(e).then((function(e){t.Series=e.data.results,t.totalPages=e.data.total_pages})).catch((function(e){console.log(e)}))},setYears:function(){for(var e=(new Date).getFullYear();e>=1900;e--)this.optionsYear.push({value:e,text:e})}}},o=c,l=(r("02bc"),r("2877")),u=Object(l["a"])(o,a,s,!1,null,null,null);t["default"]=u.exports},4160:function(e,t,r){"use strict";var a=r("23e7"),s=r("17c2");a({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},"65f0":function(e,t,r){var a=r("861d"),s=r("e8b5"),i=r("b622"),n=i("species");e.exports=function(e,t){var r;return s(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!s(r.prototype)?a(r)&&(r=r[n],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},"9b86":function(e,t,r){},a640:function(e,t,r){"use strict";var a=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&a((function(){r.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,r){var a=r("83ab"),s=r("d039"),i=r("5135"),n=Object.defineProperty,c={},o=function(e){throw e};e.exports=function(e,t){if(i(c,e))return c[e];t||(t={});var r=[][e],l=!!i(t,"ACCESSORS")&&t.ACCESSORS,u=i(t,0)?t[0]:o,h=i(t,1)?t[1]:void 0;return c[e]=!!r&&!s((function(){if(l&&!a)return!0;var e={length:-1};l?n(e,1,{enumerable:!0,get:o}):e[1]=1,r.call(e,u,h)}))}},b0c0:function(e,t,r){var a=r("83ab"),s=r("9bf2").f,i=Function.prototype,n=i.toString,c=/^\s*function ([^ (]*)/,o="name";!a||o in i||s(i,o,{configurable:!0,get:function(){try{return n.call(this).match(c)[1]}catch(e){return""}}})},b727:function(e,t,r){var a=r("0366"),s=r("44ad"),i=r("7b0b"),n=r("50c4"),c=r("65f0"),o=[].push,l=function(e){var t=1==e,r=2==e,l=3==e,u=4==e,h=6==e,g=5==e||h;return function(f,p,d,b){for(var v,m,y=i(f),S=s(y),P=a(p,d,3),L=n(S.length),C=0,_=b||c,x=t?_(f,L):r?_(f,0):void 0;L>C;C++)if((g||C in S)&&(v=S[C],m=P(v,C,y),e))if(t)x[C]=m;else if(m)switch(e){case 3:return!0;case 5:return v;case 6:return C;case 2:o.call(x,v)}else if(u)return!1;return h?-1:l||u?u:x}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},e8b5:function(e,t,r){var a=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-e598f6a0.789ec42e.js.map