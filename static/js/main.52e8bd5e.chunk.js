(this.webpackJsonpsnake_game=this.webpackJsonpsnake_game||[]).push([[0],{18:function(t,n,e){},25:function(t,n,e){"use strict";e.r(n);var i=e(2),a=e.n(i),c=e(13),o=e.n(c),s=(e(18),function(t,n){for(var e=function(){var e=Math.floor(Math.random()*(t-1-1))+1,i=Math.floor(Math.random()*(t-1-1))+1;if(!n.some((function(t){return t.x===e&&t.y===i})))return{v:{x:e,y:i}}};;){var i=e();if("object"===typeof i)return i.v}}),r=function(t){return{x:Math.floor(Math.random()*(t-1-1))+1,y:Math.floor(Math.random()*(t-1-1))+1}},u=function(t,n){for(var e=[],i=0;i<t;i++){var a=new Array(t).fill("");e.push(a)}e[n.y][n.x]="snake";var c=s(t,[n]);return e[c.y][c.x]="food",e},l=r(35),d=u(35,l),f=[1e3,500,100,50,10],b=Object.freeze({init:"init",playing:"playing",suspended:"suspended",gameover:"gameover"}),j=Object.freeze({up:"up",right:"right",left:"left",down:"down"}),p=Object.freeze({up:"up",right:"right",left:"left",down:"down"}),m=Object.freeze({up:{x:0,y:-1},right:{x:1,y:0},left:{x:-1,y:0},down:{x:0,y:1}}),h=Object.freeze({37:j.left,38:j.up,39:j.right,40:j.down}),g=Object.freeze({on:"on",off:"off"}),v=e(0),O=function(t){var n=t.length,e=t.difficulty,i=void 0===e?3:e,a=t.onChangeDifficulty,c=i<f.length?"":"is-hidden",o=i>1?"":"is-hidden";return Object(v.jsxs)("div",{className:"navigation",children:[Object(v.jsxs)("div",{className:"navigation-item",children:[Object(v.jsx)("span",{className:"navigation-label",children:"Length: "}),Object(v.jsx)("div",{className:"navigation-item-number-container",children:Object(v.jsx)("div",{className:"num-board",children:n})})]}),Object(v.jsxs)("div",{className:"navigation-item",children:[Object(v.jsx)("span",{className:"navigation-label",children:"Difficulty: "}),Object(v.jsxs)("div",{className:"navigation-item-number-container",children:[Object(v.jsx)("span",{className:"num-board",children:i}),Object(v.jsxs)("div",{className:"difficulty-button-container",children:[Object(v.jsx)("div",{className:"difficulty-button difficulty-up ".concat(c),onClick:function(){return a(i+1)}}),Object(v.jsx)("div",{className:"difficulty-button difficulty-down ".concat(o),onClick:function(){return a(i-1)}})]})]})]})]})},x=function(t){var n=t.fields;return Object(v.jsx)("div",{className:"field",children:n.map((function(t){return t.map((function(t,n){return Object(v.jsx)("div",{className:"dots ".concat(t)},n)}))}))})},y=function(t){var n=t.status,e=t.onStart,i=t.onStop,a=t.onRestart;return Object(v.jsxs)("div",{className:"button",children:[n===b.gameover&&Object(v.jsx)("button",{className:"btn btn-gameover",onClick:a,children:"gameover"}),n===b.playing&&Object(v.jsx)("button",{className:"btn btn-playing",onClick:i,children:"stop"}),n===b.init&&Object(v.jsx)("button",{className:"btn btn-init",onClick:e,children:"start"}),n===b.suspended&&Object(v.jsx)("button",{className:"btn btn-suspended",onClick:e,children:"start"})]})},N=e(5),k=e(4),w=function(t){var n=t.onChange;return Object(v.jsxs)("div",{className:"manipulation-panel",children:[Object(v.jsx)("button",{className:"manipulation-btn btn btn-left",onClick:function(){return n(j.left)},children:Object(v.jsx)(N.a,{icon:k.b})}),Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{className:"manipulation-btn btn btn-up",onClick:function(){return n(j.up)},children:Object(v.jsx)(N.a,{icon:k.d})}),Object(v.jsx)("button",{className:"manipulation-btn btn btn-down",onClick:function(){return n(j.down)},children:Object(v.jsx)(N.a,{icon:k.a})})]}),Object(v.jsx)("button",{className:"manipulation-btn btn btn-right",onClick:function(){return n(j.right)},children:Object(v.jsx)(N.a,{icon:k.c})})]})},C=function(t){var n=t.soundstatus,e=t.onChange,i=t.id1,a=t.id2,c="on"===n?k.f:k.e,o="on"===n?"music-btn btn sound-btn":"music-btn-mute btn sound-btn";return Object(v.jsx)("button",{className:o,onClick:function(){return e(n,i,a)},children:Object(v.jsx)(N.a,{icon:c})})},S=e(12),M=e(3),D=e(10),z=e.p+"static/media/grume.fca7230a.mp3",E=e.p+"static/media/retoro.6524bdeb.mp3",I=e.p+"static/media/gameover.f15b9471.mp3",L=void 0,F=function(){L&&clearInterval(L)},H=new D.Howl({src:I,loop:!0,volume:.6,sprite:{beginning:[0,3e4]}}),A=H.play("beginning");console.log(A),H.stop(A);var B=new D.Howl({src:z,loop:!0,volume:.4,sprite:{between:[0,7e4]}}),J=B.play("between");console.log(J),B.stop(J);var P=new D.Howl({src:E,loop:!1,volume:.4}),R=P.play();console.log(R),P.stop(R);var T=function(){var t=Object(i.useState)(d),n=Object(M.a)(t,2),e=n[0],a=n[1],c=Object(i.useState)([]),o=Object(M.a)(c,2),v=o[0],O=o[1],x=Object(i.useState)(b.init),y=Object(M.a)(x,2),N=y[0],k=y[1],w=Object(i.useState)(0),C=Object(M.a)(w,2),D=C[0],z=C[1],E=Object(i.useState)(j.up),I=Object(M.a)(E,2),T=I[0],_=I[1],G=Object(i.useState)(3),q=Object(M.a)(G,2),K=q[0],Q=q[1],U=Object(i.useState)(l),V=Object(M.a)(U,2),W=V[0],X=V[1],Y=Object(i.useState)("on"),Z=Object(M.a)(Y,2),$=Z[0],tt=Z[1];Object(i.useEffect)((function(){return N===b.init?(O([W]),L=setInterval((function(){z((function(t){return t+1}))}),f[K-1]),F):N===b.suspended?(L=setInterval((function(){z((function(t){return t+1}))}),f[K-1]),F):void 0}),[K],N,W),Object(i.useEffect)((function(){0!==!v.length&&N===b.playing&&(nt()||(F(),$!==g.off&&(console.log(B.playing(J)),1==B.playing(J)&&B.stop(J),P.play(R),H.play(A)),k(b.gameover)))}),[D]);var nt=function(){var t=v[0],n=t.x,i=t.y,c=m[T],o={x:n+c.x,y:i+c.y};if(function(t,n){return n.y<0||n.x<0||n.y>t-1||n.x>t-1}(e.length,o)||function(t,n){return"snake"===t[n.y][n.x]}(e,o))return F(),!1;var r=Object(S.a)(v);if("food"!==e[o.y][o.x]){var u=r.pop();e[u.y][u.x]=""}else{var l=s(e.length,[].concat(Object(S.a)(r),[o]));e[l.y][l.x]="food"}return e[o.y][o.x]="snake",r.unshift(o),O(r),a(e),!0},et=Object(i.useCallback)((function(t){return N!==b.playing||"up"===p[T]&&"down"===t||"down"===p[T]&&"up"===t||"left"===p[T]&&"right"===t||"right"===p[T]&&"left"===t?T:void(p[T]!==t&&_(t))}),[T,N]),it=Object(i.useCallback)((function(t){if(N===b.suspended){if(t<1||t>t.length)return;Q(t)}N===b.init&&(t<1||t>t.length||Q(t))}),[N,K]);Object(i.useEffect)((function(){var t=function(t){var n=h[t.keyCode];n&&et(n)};return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[et]);var at=Object(i.useCallback)((function(t,n,e){if(t===g.on){if(t=g.off,tt(t),B.playing(e))return B.stop(e);if(H.playing(n))return H.stop(n)}else{if(t=g.on,tt(t),!1===B.playing(e)&&N!==b.gameover)return B.play(e);if(!1===H.playing(n))return H.play(n)}}),[$]);return{body:v,difficulty:K,fields:e,status:N,start:function(){k(b.playing),$!==g.off&&!1===B.playing(J)&&B.play(J)},stop:function(){k(b.suspended)},reload:function(){L=setInterval((function(){z((function(t){return t+1}))}),100),k(b.init);var t=r(e.length);X(t),_(j.up),a(u(e.length,t)),O([t]),Q(3),H.stop(A)},updateDirection:et,updateDifficulty:it,soundstatus:$,changeSoundStatus:at,id1:A,id2:J}};var _=function(){var t=T(),n=t.body,e=t.difficulty,i=t.fields,a=t.start,c=t.stop,o=t.reload,s=t.status,r=t.updateDirection,u=t.updateDifficulty,l=t.soundstatus,d=t.changeSoundStatus,f=t.id1,b=t.id2;return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)("header",{className:"header",children:[Object(v.jsxs)("div",{className:"title-container",children:[Object(v.jsx)("h1",{className:"title",children:"Snake Game"}),Object(v.jsx)(C,{soundstatus:l,onChange:d,id1:f,id2:b})]}),Object(v.jsx)(O,{length:n.length,difficulty:e,onChangeDifficulty:u})]}),Object(v.jsx)("main",{className:"main",children:Object(v.jsx)(x,{fields:i})}),Object(v.jsxs)("footer",{className:"footer",children:[Object(v.jsx)(y,{status:s,onStop:c,onStart:a,onRestart:o}),Object(v.jsx)(w,{onChange:r})]})]})},G=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,26)).then((function(n){var e=n.getCLS,i=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;e(t),i(t),a(t),c(t),o(t)}))};o.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(_,{})}),document.getElementById("root")),G()}},[[25,1,2]]]);
//# sourceMappingURL=main.52e8bd5e.chunk.js.map