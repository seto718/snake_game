(this.webpackJsonpsnake_game=this.webpackJsonpsnake_game||[]).push([[0],{18:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(12),o=n.n(i),s=(n(18),function(t,e){for(var n=function(){var n=Math.floor(Math.random()*(t-1-1))+1,a=Math.floor(Math.random()*(t-1-1))+1;if(!e.some((function(t){return t.x===n&&t.y===a})))return{v:{x:n,y:a}}};;){var a=n();if("object"===typeof a)return a.v}}),r=function(t){return{x:Math.floor(Math.random()*(t-1-1))+1,y:Math.floor(Math.random()*(t-1-1))+1}},u=function(t,e){for(var n=[],a=0;a<t;a++){var c=new Array(t).fill("");n.push(c)}n[e.y][e.x]="snake";var i=s(t,[e]);return n[i.y][i.x]="food",n},l=n(10),b=n.p+"static/media/grume.fca7230a.mp3",d=n.p+"static/media/retoro.6524bdeb.mp3",j=n.p+"static/media/gameover.f15b9471.mp3",f=r(35),p=u(35,f),g=[1e3,500,100,50,10],m=new l.Howl({src:j,loop:!0,volume:.6,sprite:{beginning:[0,3e4]}}),O=m.play("beginning");m.stop(O);var v=new l.Howl({src:b,loop:!0,volume:.4,sprite:{between:[0,7e4]}}),h=v.play("between");v.stop(h);var x=new l.Howl({src:d,loop:!1,volume:.4}),y=x.play();x.stop(y);var k=Object.freeze({init:"init",playing:"playing",suspended:"suspended",gameover:"gameover"}),N=Object.freeze({up:"up",right:"right",left:"left",down:"down"}),C=Object.freeze({up:"up",right:"right",left:"left",down:"down"}),w=Object.freeze({up:{x:0,y:-1},right:{x:1,y:0},left:{x:-1,y:0},down:{x:0,y:1}}),S=Object.freeze({37:N.left,38:N.up,39:N.right,40:N.down}),_=Object.freeze({on:"on",off:"off"}),z=n(0),I=function(t){var e=t.length,n=t.difficulty,a=void 0===n?3:n,c=t.onChangeDifficulty,i=a<g.length?"":"is-hidden",o=a>1?"":"is-hidden";return Object(z.jsxs)("div",{className:"navigation",children:[Object(z.jsxs)("div",{className:"navigation-item",children:[Object(z.jsx)("span",{className:"navigation-label",children:"Length: "}),Object(z.jsx)("div",{className:"navigation-item-number-container",children:Object(z.jsx)("div",{className:"num-board",children:e})})]}),Object(z.jsxs)("div",{className:"navigation-item",children:[Object(z.jsx)("span",{className:"navigation-label",children:"Difficulty: "}),Object(z.jsxs)("div",{className:"navigation-item-number-container",children:[Object(z.jsx)("span",{className:"num-board",children:a}),Object(z.jsxs)("div",{className:"difficulty-button-container",children:[Object(z.jsx)("div",{className:"difficulty-button difficulty-up ".concat(i),onClick:function(){return c(a+1)}}),Object(z.jsx)("div",{className:"difficulty-button difficulty-down ".concat(o),onClick:function(){return c(a-1)}})]})]})]})]})},M=function(t){var e=t.fields;return Object(z.jsx)("div",{className:"field",children:e.map((function(t){return t.map((function(t,e){return Object(z.jsx)("div",{className:"dots ".concat(t)},e)}))}))})},D=function(t){var e=t.status,n=t.onStart,a=t.onStop,c=t.onRestart;return Object(z.jsxs)("div",{className:"button",children:[e===k.gameover&&Object(z.jsx)("button",{className:"btn btn-gameover",onClick:c,children:"gameover"}),e===k.playing&&Object(z.jsx)("button",{className:"btn btn-playing",onClick:a,children:"stop"}),e===k.init&&Object(z.jsx)("button",{className:"btn btn-init",onClick:n,children:"start"}),e===k.suspended&&Object(z.jsx)("button",{className:"btn btn-suspended",onClick:n,children:"start"})]})},E=n(4),P=n(3),R=function(t){var e=t.onChange;return Object(z.jsxs)("div",{className:"manipulation-panel",children:[Object(z.jsx)("button",{className:"manipulation-btn btn btn-left",onClick:function(){return e(N.left)},children:Object(z.jsx)(E.a,{icon:P.d})}),Object(z.jsxs)("div",{children:[Object(z.jsx)("button",{className:"manipulation-btn btn btn-up",onClick:function(){return e(N.up)},children:Object(z.jsx)(E.a,{icon:P.f})}),Object(z.jsx)("button",{className:"manipulation-btn btn btn-down",onClick:function(){return e(N.down)},children:Object(z.jsx)(E.a,{icon:P.c})})]}),Object(z.jsx)("button",{className:"manipulation-btn btn btn-right",onClick:function(){return e(N.right)},children:Object(z.jsx)(E.a,{icon:P.e})})]})},L=function(t){var e=t.soundstatus,n=t.onChange,a=t.id1,c=t.id2,i="on"===e?P.i:P.h,o="on"===e?"music-btn btn sound-btn":"music-btn-mute btn sound-btn";return Object(z.jsx)("button",{className:o,onClick:function(){return n(e,a,c)},children:Object(z.jsx)(E.a,{icon:i})})},F=n(13),H=n(5),A=void 0,B=function(){A&&clearInterval(A)},J=function(){var t=Object(a.useState)(p),e=Object(H.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)([]),o=Object(H.a)(i,2),l=o[0],b=o[1],d=Object(a.useState)(k.init),j=Object(H.a)(d,2),z=j[0],I=j[1],M=Object(a.useState)(0),D=Object(H.a)(M,2),E=D[0],P=D[1],R=Object(a.useState)(N.up),L=Object(H.a)(R,2),J=L[0],T=L[1],G=Object(a.useState)(3),q=Object(H.a)(G,2),K=q[0],Q=q[1],U=Object(a.useState)(f),V=Object(H.a)(U,2),W=V[0],X=V[1],Y=Object(a.useState)("on"),Z=Object(H.a)(Y,2),$=Z[0],tt=Z[1],et=Object(a.useState)(0),nt=Object(H.a)(et,2),at=nt[0],ct=nt[1],it=Object(a.useState)(""),ot=Object(H.a)(it,2),st=ot[0],rt=ot[1];Object(a.useEffect)((function(){return z===k.init?(b([W]),A=setInterval((function(){P((function(t){return t+1}))}),g[K-1]),B):z===k.suspended?(A=setInterval((function(){P((function(t){return t+1}))}),g[K-1]),B):void 0}),[K],z,W),Object(a.useEffect)((function(){if(0!==!l.length&&z===k.playing&&!ut()){B(),$!==_.off&&(x.play(y),1==v.playing(h)&&v.stop(h),m.play(O)),I(k.gameover);ct(l.length>60?4:l.length<=60&&l.length>40?3:l.length<=40&&l.length>20?2:l.length<=20&&l.length>=1?1:0),rt(0)}}),[E]);var ut=function(){var t=l[0],e=t.x,a=t.y,i=w[J],o={x:e+i.x,y:a+i.y};if(function(t,e){return e.y<0||e.x<0||e.y>t-1||e.x>t-1}(n.length,o)||function(t,e){return"snake"===t[e.y][e.x]}(n,o))return B(),!1;var r=Object(F.a)(l);if("food"!==n[o.y][o.x]){var u=r.pop();n[u.y][u.x]=""}else{var d=s(n.length,[].concat(Object(F.a)(r),[o]));n[d.y][d.x]="food"}return n[o.y][o.x]="snake",r.unshift(o),b(r),c(n),!0},lt=Object(a.useCallback)((function(t){return z!==k.playing||"up"===C[J]&&"down"===t||"down"===C[J]&&"up"===t||"left"===C[J]&&"right"===t||"right"===C[J]&&"left"===t?J:void(C[J]!==t&&T(t))}),[J,z]),bt=Object(a.useCallback)((function(t){if(z===k.suspended){if(t<1||t>t.length)return;Q(t)}z===k.init&&(t<1||t>t.length||Q(t))}),[z,K]);Object(a.useEffect)((function(){var t=function(t){var e=S[t.keyCode];e&&lt(e)};return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[lt]);var dt=Object(a.useCallback)((function(t,e,n){if(t===_.on){if(t=_.off,tt(t),v.playing(n))return v.stop(n);if(m.playing(e))return m.stop(e)}else{if(t=_.on,tt(t),!1===v.playing(n)&&z!==k.gameover)return v.play(n);if(!1===m.playing(e))return m.play(e)}}),[$]),jt=Object(a.useCallback)((function(t){if(0!==at)return 1,rt(1),m.stop(O),1}),[at]);return{body:l,difficulty:K,fields:n,status:z,start:function(){I(k.playing),$!==_.off&&!1===v.playing(h)&&v.play(h)},stop:function(){I(k.suspended)},reload:function(){A=setInterval((function(){P((function(t){return t+1}))}),100),I(k.init);var t=r(n.length);X(t),T(N.up),c(u(n.length,t)),b([t]),Q(3),m.stop(O)},updateDirection:lt,updateDifficulty:bt,soundstatus:$,changeSoundStatus:dt,id1:O,id2:h,gameoverstatus:at,close_popup2:jt,imgstatus:st}},T=n.p+"static/media/exp1.13620d33.jpg",G=n.p+"static/media/exp2.5062c8f9.jpg",q=T,K={backgroundImage:"url(".concat(q,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},Q=function(){var t=function(){K=q===T?{backgroundImage:"url(".concat(q=G,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}:{backgroundImage:"url(".concat(q=T,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}};return Object(z.jsxs)("div",{className:"popup_image",style:K,children:[q===T?Object(z.jsxs)("p",{className:"text-box",children:["\u3084\u3042\uff01\u30b9\u30cd\u30fc\u30af\u30b2\u30fc\u30e0\u306b\u3088\u3046\u3053\u305d\uff01",Object(z.jsx)("br",{}),"\u3053\u306e\u30b2\u30fc\u30e0\u306f\u307c\u304f\u3092\u98df\u3079\u7269\u306e\u3068\u3053\u308d\u306b\u9023\u308c\u3066\u884c\u3063\u3066\u5927\u304d\u304f\u3057\u3066\u3044\u304f\u30b2\u30fc\u30e0\u3060\u3088\u3002",Object(z.jsx)("br",{}),"\u6ca2\u5c71\u98df\u3079\u3066\u5927\u304d\u304f\u3057\u3066\u306d\uff01",Object(z.jsx)("br",{}),"\u77e2\u5370\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u30b2\u30fc\u30e0\u8aac\u660e\u3092\u8aad\u3093\u3067\u306d"]}):q===G?Object(z.jsxs)("p",{className:"text-box2",children:["Start\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u305f\u3089\u767d\u3044\u30c9\u30c3\u30c8\u304c\u52d5\u304d\u51fa\u3059\u3088\u3002",Object(z.jsx)("br",{}),"\u77e2\u5370\u30ad\u30fc\u3067\u64cd\u4f5c\u3057\u3066\u30d4\u30f3\u30af\u306e\u30a8\u30b5\u307e\u3067\u9023\u308c\u3066\u884c\u3053\u3046\uff01",Object(z.jsx)("br",{}),"\u53f3\u4e0a\u306e\u96e3\u6613\u5ea6\u306b\u3088\u3063\u3066\u3078\u3073\u306e\u901f\u3055\u304c\u5909\u308f\u308b\u3088\u3002",Object(z.jsx)("br",{}),"\u3078\u3073\u3092\u3088\u308a\u9577\u304f\u51fa\u6765\u308b\u3088\u3046\u306b\u9811\u5f35\u3063\u3066\u306d\uff01"]}):void 0,Object(z.jsx)(E.a,{icon:P.g,className:"close_icon",onClick:function(){K={display:"none"}}}),q===T?Object(z.jsx)(E.a,{icon:P.b,className:"arrow_icon",onClick:t}):Object(z.jsx)(E.a,{icon:P.a,className:"arrow_icon arrow_icon_left",onClick:t})]})},U=n.p+"static/media/gameover1.0cbdf882.jpg",V=n.p+"static/media/gameover2.8a0b590d.jpg",W=n.p+"static/media/gameover3.38425739.jpg",X=n.p+"static/media/gameover4.3b645634.jpg",Y={display:"none"},Z=function(t){var e=t.gameoverstatus,n=t.status,a=t.close_popup2,c=t.imgstatus;n===k.gameover&&(Y={backgroundImage:"url(".concat(1===e?U:2===e?V:3===e?W:4===e?X:"",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"});var i=1===c&&"close";return Object(z.jsx)("div",{className:"popup_image2 pop_opacity ".concat(i),style:Y,children:Object(z.jsx)(E.a,{icon:P.g,className:"close_icon close_icon2",onClick:function(){return a(c)}})})};var $=function(){var t=J(),e=t.body,n=t.difficulty,a=t.fields,c=t.start,i=t.stop,o=t.reload,s=t.status,r=t.updateDirection,u=t.updateDifficulty,l=t.soundstatus,b=t.changeSoundStatus,d=t.id1,j=t.id2,f=t.gameoverstatus,p=t.close_popup2,g=t.imgstatus;return Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)(Z,{gameoverstatus:f,status:s,close_popup2:p,imgstatus:g}),Object(z.jsx)(Q,{}),Object(z.jsxs)("header",{className:"header",children:[Object(z.jsxs)("div",{className:"title-container",children:[Object(z.jsx)("h1",{className:"title",children:"Snake Game"}),Object(z.jsx)(L,{soundstatus:l,onChange:b,id1:d,id2:j})]}),Object(z.jsx)(I,{length:e.length,difficulty:n,onChangeDifficulty:u})]}),Object(z.jsx)("main",{className:"main",children:Object(z.jsx)(M,{fields:a})}),Object(z.jsxs)("footer",{className:"footer",children:[Object(z.jsx)(D,{status:s,onStop:i,onStart:c,onRestart:o}),Object(z.jsx)(R,{onChange:r})]})]})},tt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),i(t),o(t)}))};o.a.render(Object(z.jsx)(c.a.StrictMode,{children:Object(z.jsx)($,{})}),document.getElementById("root")),tt()}},[[25,1,2]]]);
//# sourceMappingURL=main.47f6645f.chunk.js.map