(this.webpackJsonpsnake_game=this.webpackJsonpsnake_game||[]).push([[0],{18:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),c=n(13),o=n.n(c),s=(n(18),function(t,e){for(var n=function(){var n=Math.floor(Math.random()*(t-1-1))+1,i=Math.floor(Math.random()*(t-1-1))+1;if(!e.some((function(t){return t.x===n&&t.y===i})))return{v:{x:n,y:i}}};;){var i=n();if("object"===typeof i)return i.v}}),r=function(t){return{x:Math.floor(Math.random()*(t-1-1))+1,y:Math.floor(Math.random()*(t-1-1))+1}},u=function(t,e){for(var n=[],i=0;i<t;i++){var a=new Array(t).fill("");n.push(a)}n[e.y][e.x]="snake";var c=s(t,[e]);return n[c.y][c.x]="food",n},l=r(35),d=u(35,l),f=[1e3,500,100,50,10],b=Object.freeze({init:"init",playing:"playing",suspended:"suspended",gameover:"gameover"}),j=Object.freeze({up:"up",right:"right",left:"left",down:"down"}),p=Object.freeze({up:"up",right:"right",left:"left",down:"down"}),m=Object.freeze({up:{x:0,y:-1},right:{x:1,y:0},left:{x:-1,y:0},down:{x:0,y:1}}),h=Object.freeze({37:j.left,38:j.up,39:j.right,40:j.down}),v=Object.freeze({on:"on",off:"off"}),O=n(0),g=function(t){var e=t.length,n=t.difficulty,i=void 0===n?3:n,a=t.onChangeDifficulty,c=i<f.length?"":"is-hidden",o=i>1?"":"is-hidden";return Object(O.jsxs)("div",{className:"navigation",children:[Object(O.jsxs)("div",{className:"navigation-item",children:[Object(O.jsx)("span",{className:"navigation-label",children:"Length: "}),Object(O.jsx)("div",{className:"navigation-item-number-container",children:Object(O.jsx)("div",{className:"num-board",children:e})})]}),Object(O.jsxs)("div",{className:"navigation-item",children:[Object(O.jsx)("span",{className:"navigation-label",children:"Difficulty: "}),Object(O.jsxs)("div",{className:"navigation-item-number-container",children:[Object(O.jsx)("span",{className:"num-board",children:i}),Object(O.jsxs)("div",{className:"difficulty-button-container",children:[Object(O.jsx)("div",{className:"difficulty-button difficulty-up ".concat(c),onClick:function(){return a(i+1)}}),Object(O.jsx)("div",{className:"difficulty-button difficulty-down ".concat(o),onClick:function(){return a(i-1)}})]})]})]})]})},x=function(t){var e=t.fields;return Object(O.jsx)("div",{className:"field",children:e.map((function(t){return t.map((function(t,e){return Object(O.jsx)("div",{className:"dots ".concat(t)},e)}))}))})},y=function(t){var e=t.status,n=t.onStart,i=t.onStop,a=t.onRestart;return Object(O.jsxs)("div",{className:"button",children:[e===b.gameover&&Object(O.jsx)("button",{className:"btn btn-gameover",onClick:a,children:"gameover"}),e===b.playing&&Object(O.jsx)("button",{className:"btn btn-playing",onClick:i,children:"stop"}),e===b.init&&Object(O.jsx)("button",{className:"btn btn-init",onClick:n,children:"start"}),e===b.suspended&&Object(O.jsx)("button",{className:"btn btn-suspended",onClick:n,children:"start"})]})},N=n(5),k=n(4),w=function(t){var e=t.onChange;return Object(O.jsxs)("div",{className:"manipulation-panel",children:[Object(O.jsx)("button",{className:"manipulation-btn btn btn-left",onClick:function(){return e(j.left)},children:Object(O.jsx)(N.a,{icon:k.b})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"manipulation-btn btn btn-up",onClick:function(){return e(j.up)},children:Object(O.jsx)(N.a,{icon:k.d})}),Object(O.jsx)("button",{className:"manipulation-btn btn btn-down",onClick:function(){return e(j.down)},children:Object(O.jsx)(N.a,{icon:k.a})})]}),Object(O.jsx)("button",{className:"manipulation-btn btn btn-right",onClick:function(){return e(j.right)},children:Object(O.jsx)(N.a,{icon:k.c})})]})},C=function(t){var e=t.soundstatus,n=t.onChange,i=t.id1,a=t.id2,c="on"===e?k.f:k.e,o="on"===e?"music-btn btn sound-btn":"music-btn-mute btn sound-btn";return Object(O.jsx)("button",{className:o,onClick:function(){return n(e,i,a)},children:Object(O.jsx)(N.a,{icon:c})})},S=n(12),M=n(3),D=n(10),E=n.p+"static/media/grume.fca7230a.mp3",z=n.p+"static/media/retoro.6524bdeb.mp3",I=n.p+"static/media/gameover.f15b9471.mp3",L=void 0,F=function(){L&&clearInterval(L)},H=new D.Howl({src:I,loop:!0,volume:.6,sprite:{beginning:[0,3e4]}}),A=H.play("beginning");H.stop(A);var B=new D.Howl({src:E,loop:!0,volume:.4,sprite:{between:[0,7e4]}}),J=B.play("between");B.stop(J);var P=new D.Howl({src:z,loop:!1,volume:.4}),R=P.play();P.stop(R);var T=function(){var t=Object(i.useState)(d),e=Object(M.a)(t,2),n=e[0],a=e[1],c=Object(i.useState)([]),o=Object(M.a)(c,2),O=o[0],g=o[1],x=Object(i.useState)(b.init),y=Object(M.a)(x,2),N=y[0],k=y[1],w=Object(i.useState)(0),C=Object(M.a)(w,2),D=C[0],E=C[1],z=Object(i.useState)(j.up),I=Object(M.a)(z,2),T=I[0],_=I[1],G=Object(i.useState)(3),q=Object(M.a)(G,2),K=q[0],Q=q[1],U=Object(i.useState)(l),V=Object(M.a)(U,2),W=V[0],X=V[1],Y=Object(i.useState)("on"),Z=Object(M.a)(Y,2),$=Z[0],tt=Z[1];Object(i.useEffect)((function(){return N===b.init?(g([W]),L=setInterval((function(){E((function(t){return t+1}))}),f[K-1]),F):N===b.suspended?(L=setInterval((function(){E((function(t){return t+1}))}),f[K-1]),F):void 0}),[K],N,W),Object(i.useEffect)((function(){0!==!O.length&&N===b.playing&&(et()||(F(),$!==v.off&&P.play(R),k(b.gameover)))}),[D]),Object(i.useEffect)((function(){$!==v.off&&N===b.gameover&&(1==B.playing(J)&&B.stop(J),H.play(A))}),[N]);var et=function(){var t=O[0],e=t.x,i=t.y,c=m[T],o={x:e+c.x,y:i+c.y};if(function(t,e){return e.y<0||e.x<0||e.y>t-1||e.x>t-1}(n.length,o)||function(t,e){return"snake"===t[e.y][e.x]}(n,o))return F(),!1;var r=Object(S.a)(O);if("food"!==n[o.y][o.x]){var u=r.pop();n[u.y][u.x]=""}else{var l=s(n.length,[].concat(Object(S.a)(r),[o]));n[l.y][l.x]="food"}return n[o.y][o.x]="snake",r.unshift(o),g(r),a(n),!0},nt=Object(i.useCallback)((function(t){return N!==b.playing||"up"===p[T]&&"down"===t||"down"===p[T]&&"up"===t||"left"===p[T]&&"right"===t||"right"===p[T]&&"left"===t?T:void(p[T]!==t&&_(t))}),[T,N]),it=Object(i.useCallback)((function(t){if(N===b.suspended){if(t<1||t>t.length)return;Q(t)}N===b.init&&(t<1||t>t.length||Q(t))}),[N,K]);Object(i.useEffect)((function(){var t=function(t){var e=h[t.keyCode];e&&nt(e)};return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[nt]);var at=Object(i.useCallback)((function(t,e,n){if(t===v.on){if(t=v.off,tt(t),B.playing(n))return B.stop(n);if(H.playing(e))return H.stop(e)}else{if(t=v.on,tt(t),!1===B.playing(n)&&N!==b.gameover)return B.play(n);if(!1===H.playing(e))return H.play(e)}}),[$]);return{body:O,difficulty:K,fields:n,status:N,start:function(){k(b.playing),$!==v.off&&!1===B.playing(J)&&B.play(J)},stop:function(){k(b.suspended),B.playing(J)&&B.stop(J)},reload:function(){L=setInterval((function(){E((function(t){return t+1}))}),100),k(b.init);var t=r(n.length);X(t),_(j.up),a(u(n.length,t)),g([t]),Q(3),H.stop(A)},updateDirection:nt,updateDifficulty:it,soundstatus:$,changeSoundStatus:at,id1:A,id2:J}};var _=function(){var t=T(),e=t.body,n=t.difficulty,i=t.fields,a=t.start,c=t.stop,o=t.reload,s=t.status,r=t.updateDirection,u=t.updateDifficulty,l=t.soundstatus,d=t.changeSoundStatus,f=t.id1,b=t.id2;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("header",{className:"header",children:[Object(O.jsxs)("div",{className:"title-container",children:[Object(O.jsx)("h1",{className:"title",children:"Snake Game"}),Object(O.jsx)(C,{soundstatus:l,onChange:d,id1:f,id2:b})]}),Object(O.jsx)(g,{length:e.length,difficulty:n,onChangeDifficulty:u})]}),Object(O.jsx)("main",{className:"main",children:Object(O.jsx)(x,{fields:i})}),Object(O.jsxs)("footer",{className:"footer",children:[Object(O.jsx)(y,{status:s,onStop:c,onStart:a,onRestart:o}),Object(O.jsx)(w,{onChange:r})]})]})},G=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),i(t),a(t),c(t),o(t)}))};o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(_,{})}),document.getElementById("root")),G()}},[[25,1,2]]]);
//# sourceMappingURL=main.e525d9ca.chunk.js.map