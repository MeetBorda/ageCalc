(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),i=n.n(r),c=(n(14),n(4)),l=n(6),u=n(5),s=n(1),m=n(7),v=(n(15),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={birthDay:n.birth(),time:n.currentTime(),age:void 0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"currentTime",value:function(){return new Date}},{key:"birth",value:function(){return new Date("1998-11-13 07:15:00")}}]),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.age/315569e5,t=e.toFixed(9).toString().split(".");return console.log(e),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"try"},o.a.createElement("h1",null,t[0],o.a.createElement("span",null,".",t[1]))))}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){e.setState({age:e.currentTime()-e.birth()}),console.log(e.state.age)},100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.aed6d014.chunk.js.map