(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80417ae4"],{"5da9":function(t,a,s){"use strict";s("5ffa")},"5ffa":function(t,a,s){},d8f2:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"SingleMovies mx-auto my-auto"},[s("header",{staticClass:"header"},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link text-white",attrs:{to:"/"}},[t._v("Home"),s("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link text-white",attrs:{to:"/about"}},[t._v("Nosotros")])],1),s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle text-white",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Contenido ")]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[s("router-link",{staticClass:"dropdown-item",attrs:{to:"/movies"}},[t._v("Mejor valorada")]),s("router-link",{staticClass:"dropdown-item",attrs:{to:"/bestmovies"}},[t._v("Mejor del momento")]),s("div",{staticClass:"dropdown-divider"}),s("router-link",{staticClass:"dropdown-item",attrs:{to:"/extramovies"}},[t._v("Algo mas")])],1)]),t._m(1)]),s("form",{staticClass:"form-inline my-2 my-lg-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.busqueda,expression:"busqueda"}],staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:t.busqueda},on:{input:function(a){a.target.composing||(t.busqueda=a.target.value)}}}),s("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"},on:{click:function(a){return t.buscar(t.busqueda)}}},[t._v(" Search ")])])])])]),s("div",{staticClass:"row col-12"},[s("div",{staticClass:"col-lg-6 col-md-4 col-sm-12 mx-auto my-auto"},[s("img",{attrs:{src:"https://image.tmdb.org/t/p/w500/"+t.movie.poster_path,alt:t.movie.original_title}})]),s("div",{staticClass:"col-lg-6 col-md-4 col-sm-12 mx-auto my-auto text-white"},[s("h1",[t._v(" "+t._s(t.movie.original_title)+" ")]),s("br"),s("i",[t._v(" "+t._s(t.movie.overview)+" ")])])]),t._m(2),s("img",{staticClass:"col-12 mt-3 mb-3",attrs:{src:"https://image.tmdb.org/t/p/original/"+t.movie.backdrop_path,alt:t.movie.original_title}}),t._m(3),t._m(4),t._m(5),s("div",{staticClass:"card-group"},t._l(t.movie2,(function(a,e){return s("div",{key:e,staticClass:"col-sm-12 col-md-6 col-lg-4 mx-auto my-2",staticStyle:{cursor:"pointer"},on:{click:function(s){return t.mostrar(a.id)}}},[s("div",{staticClass:"card p-2"},[s("img",{attrs:{src:"https://image.tmdb.org/t/p/w500/"+a.poster_path,alt:t.movie.original_title}})])])})),0),t._m(6),s("footer",{staticClass:"dk-footer",attrs:{id:"dk-footer"}},[t._m(7),s("div",{staticClass:"copyright"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t._m(8),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"copyright-menu"},[s("ul",[s("li",[s("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._m(9),t._m(10),t._m(11)])])])])])]),t._m(12)])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{id:"color-line",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link disabled text-white",attrs:{href:"#"}},[t._v("Streamers Company")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("hr")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("hr")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h1",{staticClass:"text-white"},[s("i",[t._v(" Contenido similar a tu eleccion ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("hr")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("hr")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-lg-4"},[s("div",{staticClass:"dk-footer-box-info mt-5"},[s("p",{staticClass:"footer-info-text text-white"},[s("span",[s("h4",[t._v("Streamers")])]),t._v(" te ofrece producciones espectaculares, el mejor contenido en la mejor plataforma y un excelente servicio de peliculas, series y estelares cubiertos por los mejores artistas de la gran pantalla. Te aseguramos un momento de calidad en Familia ")]),s("div",{staticClass:"footer-social-link"},[s("h3",[t._v("Follow us")]),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-facebook"})])]),s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-twitter"})])]),s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-google-plus"})])]),s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-linkedin"})])]),s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-instagram"})])])])])]),s("div",{staticClass:"footer-awarad"},[s("img",{attrs:{src:"images/icon/best.png",alt:""}}),s("p",[t._v("Best Streaming Company 2021")])])]),s("div",{staticClass:"col-md-12 col-lg-8"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"contact-us"},[s("div",{staticClass:"contact-icon"},[s("i",{staticClass:"fa fa-map-o",attrs:{"aria-hidden":"true"}})]),s("div",{staticClass:"contact-info"},[s("h3",[t._v("San Cristobal Venezuela")]),s("p",[t._v("5353 Road Avenue")])])])]),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"contact-us contact-us-last"},[s("div",{staticClass:"contact-icon"},[s("i",{staticClass:"fa fa-volume-control-phone",attrs:{"aria-hidden":"true"}})]),s("div",{staticClass:"contact-info"},[s("h3",[t._v("+58 555 555")]),s("p",[t._v("Llamanos !")])])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-lg-6"},[s("div",{staticClass:"footer-widget footer-left-widget"},[s("div",{staticClass:"section-heading"},[s("h3",[t._v("Useful Links")]),s("span",{staticClass:"animate-border border-black"})]),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("About us")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Services")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Projects")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Our Team")])])]),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("Contact us")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Blog")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Testimonials")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Faq")])])])])]),s("div",{staticClass:"col-md-12 col-lg-6"},[s("div",{staticClass:"footer-widget"},[s("div",{staticClass:"section-heading"},[s("h3",[t._v("Subscribe")]),s("span",{staticClass:"animate-border border-black"})]),s("p",{staticClass:"text-white"},[t._v(" No olvides suscribirte y recibir en tu correo nuestros titulos estelares ! ")]),s("form",{attrs:{action:"#"}},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"col dk-footer-form"},[s("input",{staticClass:"form-control",attrs:{type:"email",placeholder:"Email Address"}}),s("button",{attrs:{type:"submit"}},[s("i",{staticClass:"fa fa-send"})])])])])])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-6"},[s("span",[t._v("Copyright © 2021, All Right Reserved Streamers")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("a",{attrs:{href:"#"}},[t._v("Terms")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("a",{attrs:{href:"#"}},[t._v("Privacy Policy")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("a",{attrs:{href:"#"}},[t._v("Contact")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"back-to-top",attrs:{id:"back-to-top"}},[s("button",{staticClass:"btn btn-dark",staticStyle:{display:"block"},attrs:{title:"Back to Top"}},[s("i",{staticClass:"fa fa-angle-up"})])])}],r=s("1da1"),o=(s("96cf"),s("bc3a")),l=s.n(o),n={name:"SingleMovies",data:function(){return{movieid:null,movie:[],movie2:[],busqueda:[]}},methods:{getsimilarmovies:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.movieid=t.$route.params.id,a.next=3,l.a.get("https://api.themoviedb.org/3/movie/"+t.movieid+"/similar?api_key=9cce8ac649022e53376ee7864fe9a772&language=en-US&page=1");case 3:s=a.sent,t.movie2=s.data.results,console.log(t.movie2);case 6:case"end":return a.stop()}}),a)})))()},mostrar:function(t){this.$router.push("/singlemovie/"+t)},buscar:function(t){this.busqueda=t,this.$router.push("/search/"+t)}},created:function(){this.getsimilarmovies()},mounted:function(){var t=this;this.movieid=this.$route.params.id,l.a.get("https://api.themoviedb.org/3/movie/"+this.movieid+"?api_key=9cce8ac649022e53376ee7864fe9a772&language=en-US").then((function(a){t.movie=a.data,console.log(a)}))}},c=n,d=(s("5da9"),s("2877")),v=Object(d["a"])(c,e,i,!1,null,"39e816df",null);a["default"]=v.exports}}]);
//# sourceMappingURL=chunk-80417ae4.8f86c273.js.map