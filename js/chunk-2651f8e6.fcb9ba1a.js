(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2651f8e6"],{"08b5":function(t,a,s){t.exports=s.p+"img/logomediano.f8a0f0f1.png"},"322e":function(t,a,s){"use strict";s("a1bf")},a1bf:function(t,a,s){},da27:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"Movies"},[s("Movies2")],1)},i=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("header",{staticClass:"header"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link text-white",attrs:{to:"/"}},[t._v("Home"),e("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link text-white",attrs:{to:"/about"}},[t._v("Nosotros")])],1),e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle text-white",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Contenido ")]),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[e("router-link",{staticClass:"dropdown-item",attrs:{to:"/movies"}},[t._v("Mejor valorada")]),e("router-link",{staticClass:"dropdown-item",attrs:{to:"/bestmovies"}},[t._v("Mejor del momento")]),e("div",{staticClass:"dropdown-divider"}),e("router-link",{staticClass:"dropdown-item",attrs:{to:"/extramovies"}},[t._v("Algo mas")])],1)]),t._m(1)]),e("form",{staticClass:"form-inline my-2 my-lg-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.busqueda,expression:"busqueda"}],staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:t.busqueda},on:{input:function(a){a.target.composing||(t.busqueda=a.target.value)}}}),e("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"},on:{click:function(a){return t.buscar(t.busqueda)}}},[t._v(" Search ")])])])]),t._m(2)]),t._m(3),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 my-auto"},[e("img",{staticClass:"p-2 bg-white rounded",attrs:{src:s("08b5"),alt:"logo-imago"}})]),t._m(4)]),e("hr")]),e("div",{staticClass:"scrollspy-example",attrs:{"data-spy":"scroll","data-target":"#scroll","data-offset":"0"}},[e("div",{attrs:{id:"list-item-1"}},[e("div",{staticClass:"p-1 bg-white rounded"},[e("div",{staticClass:"carousel slide carousel-fade",attrs:{id:"carouselExampleFade1","data-ride":"carousel"}},[e("div",{staticClass:"carousel-inner"},[e("div",{staticClass:"carousel-item active"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/w1280/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",alt:"Godzilla vs. Kong"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/w1280/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",alt:"Zack Snyder's Justice League"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/w1280/jiqD14fg7UTZOT6qgvzTmfRYpWI.jpg",alt:"Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/w1280/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg",alt:"Raya and the Last Dragon"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/w1280/uQtqiAu2bBlokqjlURVLEha6zoi.jpg",alt:"Cherry"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/w1280/lOSdUkGQmbAl5JQ3QoHqBZUbZhC.jpg",alt:"Outside the Wire"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/w1280/jeAQdDX9nguP6YOX6QSWKDPkbBo.jpg",alt:"Jiu Jitsu"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/w1280/nz8xWrTKZzA5A7FgxaM4kfAoO1W.jpg",alt:"Breach"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/w1280/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",alt:"Avengers: Infinity War"}})])]),t._m(5),t._m(6)])])])]),t._m(7),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"mx-auto"},[e("div",{staticClass:"card-group"},t._l(t.movies,(function(a,s){return e("div",{key:s,staticClass:"col-sm-12 col-md-6 col-lg-4 mx-auto my-2",staticStyle:{cursor:"pointer"},on:{click:function(s){return t.mostrar(a.id)}}},[e("div",{staticClass:"card p-2"},[e("img",{attrs:{src:"https://image.tmdb.org/t/p/w500/"+a.poster_path,alt:a.title}})])])})),0),e("hr"),e("div",{staticClass:"card-group"},t._l(t.movies2,(function(a,s){return e("div",{key:s,staticClass:"col-sm-12 col-md-6 col-lg-4 mx-auto my-2",staticStyle:{cursor:"pointer"},on:{click:function(a){return t.mostrar(t.movie.id)}}},[e("div",{staticClass:"card p-2"},[e("img",{attrs:{src:"https://image.tmdb.org/t/p/w500/"+a.poster_path,alt:a.title}})])])})),0)])])]),t._m(8),e("div",{staticClass:"p-1 bg-white rounded"},[e("div",{staticClass:"carousel slide carousel-fade",attrs:{id:"carouselExampleFade2","data-ride":"carousel"}},[e("div",{staticClass:"carousel-inner"},[e("div",{staticClass:"carousel-item active"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/w1280/5NxjLfs7Bi07bfZCRl9CCnUw7AA.jpg",alt:"After We Collided"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/w1280/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",alt:"Joker"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/w1280/gGwA6YErMjiROavfGyxdciQnlTA.jpg",alt:"Pacto de fuga"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/w1280/jb6Ju38HmKX0bYHCmAxs8HyNeJ2.jpg",alt:"Godzilla: King of the Monsters"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/w1280/9NlswPRK5Kap6KVr59Feah9EBLP.jpg",alt:"Legionnaire's Trail"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/w1280/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg",alt:"Extraction"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/w1280/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg",alt:"Jumanji: The Next Level"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/w1280/wu1uilmhM4TdluKi2ytfz8gidHf.jpg",alt:"The SpongeBob Movie: Sponge on the Run"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/w1280/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",alt:"Avengers: Endgame"}})])]),t._m(9),t._m(10)])]),t._m(11),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"mx-auto"},[e("div",{staticClass:"card-group"},t._l(t.movies3,(function(a,s){return e("div",{key:s,staticClass:"col-sm-12 col-md-6 col-lg-4 mx-auto my-2",staticStyle:{cursor:"pointer"},on:{click:function(a){return t.mostrar(t.movie.id)}}},[e("div",{staticClass:"card p-2"},[e("img",{attrs:{src:"https://image.tmdb.org/t/p/w500/"+a.poster_path,alt:a.title}})])])})),0),e("hr"),e("div",{staticClass:"card-group"},t._l(t.movies4,(function(a,s){return e("div",{key:s,staticClass:"col-sm-12 col-md-6 col-lg-4 mx-auto my-2",staticStyle:{cursor:"pointer"},on:{click:function(a){return t.mostrar(t.movie.id)}}},[e("div",{staticClass:"card p-2"},[e("img",{attrs:{src:"https://image.tmdb.org/t/p/w500/"+a.poster_path,alt:a.title}})])])})),0),e("hr")])])]),e("footer",{staticClass:"dk-footer",attrs:{id:"dk-footer"}},[t._m(12),e("div",{staticClass:"copyright"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(13),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"copyright-menu"},[e("ul",[e("li",[e("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._m(14),t._m(15),t._m(16)])])])])])]),t._m(17)])])},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{id:"color-line",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link disabled text-white",attrs:{href:"#"}},[t._v("Streamers Company")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6 mx-auto"},[s("h1",{staticClass:"text-white"},[t._v(" Tu plataforma de Streaming favorita ")]),s("p",{staticClass:"text-white font-italic"},[t._v(" En Streamers encontraras un lugar acogedor donde disfrutar en familia, nuestro servicio de Streaming te proporcionara las mejores series, peliculas y demas contenido para hacer maravilloso cualquier momento en familia en cualquier epoca del año ")]),s("div",{staticClass:"list-group hover-zoom"},[s("a",{staticClass:"list-group-item list-group-item-action",attrs:{id:"titulo",href:"#list-item-1"}},[s("button",{staticClass:"btn btn-outline-success my-2 my-sm-0"},[t._v(" Echarle un vistazo ")])])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("hr")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 mt-2"},[s("i",{staticClass:"text-white"},[t._v(" Streamers, unete a la nueva tendencia en visualizacion de material y contenido multimedia. Nuestra plataforma te ofrece una experiencia inigualable, permitiendote hacer de un momento en familia un recuerdo memorable, fieles a nuestra primicia de convertir momentos en verdaderas aventuras junto a tu familia. "),s("hr"),t._v(' "Es una plataforma verdaderamente increible, su variedad de material y la facilidad para encontrar el mejor contenido es extraordinario !" '),s("br"),s("br"),s("strong",[t._v("Mario Luna @MarioNk128")]),s("hr"),t._v(' " Mis momentos libres y de descanso los paso en Streamers, mi hijo adora la plataforma es muy dinamica y contiene las mejores peliculas para convertir un rato en familia en una grandiosa experiencia " '),s("br"),s("br"),s("strong",[t._v("Martha Alviarez @SoyMartha_04")]),s("hr"),t._v(' "Es increible el contenido y el desarrollo de la plataforma contigo, ella te lleva a otro nivel de contenido en streaming, cada vez que puedo disfruto de alguna pelicula en la plataforma. No puedo despegarme de ella! Soy un Streamer #Streamers" '),s("br"),s("br"),s("strong",[t._v("Fernando Moreno @Fercho2000")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleFade1",role:"button","data-slide":"prev"}},[s("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleFade1",role:"button","data-slide":"next"}},[s("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Next")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("hr")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("hr")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleFade2",role:"button","data-slide":"prev"}},[s("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleFade2",role:"button","data-slide":"next"}},[s("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Next")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("hr")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-lg-4"},[s("div",{staticClass:"dk-footer-box-info mt-5"},[s("p",{staticClass:"footer-info-text text-white"},[s("span",[s("h4",[t._v("Streamers")])]),t._v(" te ofrece producciones espectaculares, el mejor contenido en la mejor plataforma y un excelente servicio de peliculas, series y estelares cubiertos por los mejores artistas de la gran pantalla. Te aseguramos un momento de calidad en Familia ")]),s("div",{staticClass:"footer-social-link"},[s("h3",[t._v("Follow us")]),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-facebook"})])]),s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-twitter"})])]),s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-google-plus"})])]),s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-linkedin"})])]),s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-instagram"})])])])])]),s("div",{staticClass:"footer-awarad"},[s("img",{attrs:{src:"images/icon/best.png",alt:""}}),s("p",[t._v("Best Streaming Company 2021")])])]),s("div",{staticClass:"col-md-12 col-lg-8"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"contact-us"},[s("div",{staticClass:"contact-icon"},[s("i",{staticClass:"fa fa-map-o",attrs:{"aria-hidden":"true"}})]),s("div",{staticClass:"contact-info"},[s("h3",[t._v("San Cristobal Venezuela")]),s("p",[t._v("5353 Road Avenue")])])])]),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"contact-us contact-us-last"},[s("div",{staticClass:"contact-icon"},[s("i",{staticClass:"fa fa-volume-control-phone",attrs:{"aria-hidden":"true"}})]),s("div",{staticClass:"contact-info"},[s("h3",[t._v("+58 555 555")]),s("p",[t._v("Llamanos !")])])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-lg-6"},[s("div",{staticClass:"footer-widget footer-left-widget"},[s("div",{staticClass:"section-heading"},[s("h3",[t._v("Useful Links")]),s("span",{staticClass:"animate-border border-black"})]),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("About us")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Services")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Projects")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Our Team")])])]),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("Contact us")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Blog")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Testimonials")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Faq")])])])])]),s("div",{staticClass:"col-md-12 col-lg-6"},[s("div",{staticClass:"footer-widget"},[s("div",{staticClass:"section-heading"},[s("h3",[t._v("Subscribe")]),s("span",{staticClass:"animate-border border-black"})]),s("p",{staticClass:"text-white"},[t._v(" No olvides suscribirte y recibir en tu correo nuestros titulos estelares ! ")]),s("form",{attrs:{action:"#"}},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"col dk-footer-form"},[s("input",{staticClass:"form-control",attrs:{type:"email",placeholder:"Email Address"}}),s("button",{attrs:{type:"submit"}},[s("i",{staticClass:"fa fa-send"})])])])])])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-6"},[s("span",[t._v("Copyright © 2021, All Right Reserved Streamers")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("a",{attrs:{href:"#"}},[t._v("Terms")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("a",{attrs:{href:"#"}},[t._v("Privacy Policy")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("a",{attrs:{href:"#"}},[t._v("Contact")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"back-to-top",attrs:{id:"back-to-top"}},[s("button",{staticClass:"btn btn-dark",staticStyle:{display:"block"},attrs:{title:"Back to Top"}},[s("i",{staticClass:"fa fa-angle-up"})])])}],l=s("1da1"),c=(s("96cf"),s("bc3a")),n=s.n(c),d={name:"Movies2",data:function(){return{movies:[],movies2:[],movies3:[],movies4:[],busqueda:[]}},methods:{getmovies:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.a.get("https://api.themoviedb.org/3/movie/popular?api_key=9cce8ac649022e53376ee7864fe9a772&language=en-US",{params:{page:1}});case 2:s=a.sent,t.movies=s.data.results,console.log(t.movies);case 5:case"end":return a.stop()}}),a)})))()},getmovies2:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.a.get("https://api.themoviedb.org/3/movie/popular?api_key=9cce8ac649022e53376ee7864fe9a772&language=en-US",{params:{page:2}});case 2:s=a.sent,t.movies2=s.data.results,console.log(t.movies2);case 5:case"end":return a.stop()}}),a)})))()},getmovies3:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.a.get("https://api.themoviedb.org/3/movie/popular?api_key=9cce8ac649022e53376ee7864fe9a772&language=en-US",{params:{page:3}});case 2:s=a.sent,t.movies3=s.data.results,console.log(t.movies3);case 5:case"end":return a.stop()}}),a)})))()},getmovies4:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.a.get("https://api.themoviedb.org/3/movie/popular?api_key=9cce8ac649022e53376ee7864fe9a772&language=en-US",{params:{page:4}});case 2:s=a.sent,t.movies4=s.data.results,console.log(t.movies4);case 5:case"end":return a.stop()}}),a)})))()},mostrar:function(t){this.$router.push("/singlemovie/"+t)},buscar:function(t){this.busqueda=t,this.$router.push("/search/"+t)}},created:function(){this.getmovies(),this.getmovies2(),this.getmovies3(),this.getmovies4()}},m=d,u=(s("322e"),s("2877")),v=Object(u["a"])(m,r,o,!1,null,"5c3a4eae",null),p=v.exports,g={name:"Movies",components:{Movies2:p}},f=g,C=Object(u["a"])(f,e,i,!1,null,null,null);a["default"]=C.exports}}]);
//# sourceMappingURL=chunk-2651f8e6.fcb9ba1a.js.map