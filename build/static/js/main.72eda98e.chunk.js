(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),o=n(12),i=n.n(o),s=(n(101),n(8)),l=n.n(s),u=n(13),d=n(10);n(103).config();var m={authenticate:function(e,t,n){return Object(u.a)(l.a.mark((function a(){var c,r,o,i;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={username:t,password:n},r=JSON.stringify(c),console.log("logging in..."),o="",a.next=6,fetch("/login",{method:"POST",body:r,headers:{"Content-Type":"application/json;charset=UTF-8"}}).then((function(e){return 400===e.status||401===e.status?(o="Wrong credentials",e):e})).then((function(e){return e.json()})).catch((function(e){o=e}));case 6:if(!(i=a.sent)||!0!==i.login){a.next=17;break}return a.prev=8,localStorage.setItem("jwtToken","".concat(i.accessToken)),e(!0),a.abrupt("return");case 14:a.prev=14,a.t0=a.catch(8),e(!1,"Cannot set Token");case 17:e(!1,o);case 18:case"end":return a.stop()}}),a,null,[[8,14]])})))()}},j=n(14),b=n(164),p=n(161),f=n(176),h=n(133),O=n(63),y=Object(p.a)({root:{margin:"20px 5px 20px 5px"}});var x=function(){var e=y(),t=Object(c.useState)(""),n=Object(d.a)(t,2),r=n[0],o=n[1],i=Object(c.useState)(""),s=Object(d.a)(i,2),p=s[0],x=s[1],g=Object(c.useState)(!1),v=Object(d.a)(g,2),w=v[0],S=v[1],N=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{m.authenticate((function(e,t){try{e?S(!0):alert(t)}catch(n){alert(n)}}),r,p)}catch(n){alert("Sorry, currently we cannot authenticate you")}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return!0===w?Object(a.jsx)(j.a,{to:"/ready"}):Object(a.jsxs)("div",{children:[Object(a.jsx)(b.a,{container:!0,item:!0,justify:"center",children:Object(a.jsx)(O.a,{variant:"h4",component:"h2",children:"Login"})}),Object(a.jsx)(b.a,{container:!0,item:!0,children:Object(a.jsxs)("form",{onSubmit:N,children:[Object(a.jsx)(b.a,{item:!0,container:!0,className:e.root,children:Object(a.jsx)(f.a,{id:"standard-name",variant:"filled",type:"text",name:"email",label:"Email",value:r,required:!0,onChange:function(e){o(e.target.value),window.$name=e.target.value}})}),Object(a.jsx)(b.a,{item:!0,container:!0,className:e.root,children:Object(a.jsx)(f.a,{id:"standard-name",variant:"filled",type:"password",name:"password",label:"Password",value:p,required:!0,onChange:function(e){x(e.target.value)}})}),Object(a.jsx)(b.a,{item:!0,className:e.root,children:Object(a.jsxs)(h.a,{color:"primary",variant:"contained",onClick:N,children:[" ","Submit"," "]})})]})})]})},g=Object(p.a)({root:{margin:"20px 5px 20px 5px"}});var v=function(){var e=g(),t=Object(c.useState)(""),n=Object(d.a)(t,2),r=n[0],o=n[1],i=Object(c.useState)(""),s=Object(d.a)(i,2),m=s[0],j=s[1],p=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={username:r,password:m},a=JSON.stringify(n),e.next=6,fetch("/register",{method:"POST",body:a,headers:{"Content-Type":"application/json;charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return alert("Sorry, Cannot Register")}));case 6:(c=e.sent)&&(c.Registered?alert("Registration Complete."):alert(c.msg)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),alert("Sorry, cannot Register");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsx)(b.a,{container:!0,item:!0,justify:"center",children:Object(a.jsx)(O.a,{variant:"h4",component:"h2",children:"Register"})}),Object(a.jsx)(b.a,{cotainer:!0,item:!0,children:Object(a.jsxs)("form",{onSubmit:p,children:[Object(a.jsx)(b.a,{item:!0,container:!0,className:e.root,children:Object(a.jsx)(f.a,{id:"standard-name",variant:"filled",type:"text",name:"email",label:"Email",value:r,required:!0,onChange:function(e){o(e.target.value)}})}),Object(a.jsx)(b.a,{item:!0,container:!0,className:e.root,children:Object(a.jsx)(f.a,{id:"standard-name",variant:"filled",type:"text",name:"password",label:"Password",value:m,required:!0,onChange:function(e){j(e.target.value)}})}),Object(a.jsx)(b.a,{item:!0,className:e.root,children:Object(a.jsxs)(h.a,{color:"primary",variant:"contained",onClick:p,children:[" ","Submit"," "]})})]})})]})},w=Object(p.a)({root:{margin:"20px 10px 0px 100px"}});var S,N,k,I,T,C,E,B,$=function(){var e=w();return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(b.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(a.jsx)(b.a,{item:!0,container:!0,xs:8}),Object(a.jsxs)(b.a,{item:!0,container:!0,xs:4,children:[Object(a.jsx)(b.a,{item:!0,container:!0,xs:12,className:e.root,children:Object(a.jsx)(x,{})}),Object(a.jsx)(b.a,{item:!0,container:!0,xs:12,className:e.root,children:Object(a.jsx)(v,{})})]})]})})},q=n(20),R="ws://codingduel.herokuapp.com",_=new WebSocket(R),D=!1,J=!1,P=!1,A=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/check",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwtToken"))}}).then((function(e){return e.json()})).catch((function(e){return alert("Cannot check...login or not server is not running")}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function M(){return console.log("getting roomName.."),document.getElementById("room-name").value}function L(e){(_=new WebSocket(e)).onclose=function(){setTimeout((function(){L(e)}),5e3)}}function V(e){console.log("sending.."),e.username=E,e.from="sender",_.send(JSON.stringify(e))}function W(e){try{e.username=E,e.from="receiver",_.send(JSON.stringify(e))}catch(t){alert("try again")}}_.onmessage=function(e){!function(e){console.log(e);try{switch(console.log(e),e.type){case"answer":document.getElementById("call").style.display="inline";try{C.setRemoteDescription(e.answer).then((function(){})).catch((function(e){alert("refresh and try again.")}))}catch(t){alert("refresh page and try again.")}break;case"offer":document.getElementById("call").style.display="inline",B.setRemoteDescription(e.offer).then((function(){B.createAnswer((function(e){B.setLocalDescription(e),W({type:"send_answer",answer:e})}),(function(e){alert("cannot connect with opponent, Refresh page and try again.")}))})).catch((function(e){alert("refresh page and try again.")}));break;case"candidate":try{"receiver"==e.from?C.addIceCandidate(e.candidate).catch((function(e){1!=P&&(alert("someone try to join, refresh page and try again."),P=!0)})):B.addIceCandidate(e.candidate).catch((function(e){1!=P&&(alert("someone try to join, refresh page and try again."),P=!0)}))}catch(t){alert("someone try to join, refresh page and try again.")}}}catch(t){alert("Please refresh page and try again.")}}(JSON.parse(e.data))},_.onclose=function(){setTimeout((function(){L(R)}),5e3)};var F=!0,Y=document.getElementById("audio-btn");k=function(){T&&(F=!F,T.getAudioTracks()[0].enabled=F,Y.textContent=1==F?"Mute yourself":"Unmute yourself")},Y.addEventListener("click",k);var H=!0,U=document.getElementById("video-btn");N=function(){T&&(H=!H,T.getVideoTracks()[0].enabled=H,U.textContent=1==H?"Mute Your video":"Unmute Your video")},U.addEventListener("click",N);var z={goToVideoCall:function(e,t){console.log("starting call"),document.querySelector("p").style.display="inline",console.log("he"),E=M(),V({type:"store_user"}),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(t){T=t;C=new RTCPeerConnection({iceServers:[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302"]},{urls:["turn:numb.viagenie.ca"],username:"webrtc@live.com",credential:"muazkh"}]}),T.getTracks().forEach((function(e){C.addTrack(e,T)})),C.onconnectionstatechange=function(e){if("disconnected"==C.connectionState||"failed"==C.connectionState){T&&(T.getVideoTracks()[0].stop(),T.getAudioTracks()[0].stop()),C?C.close():B&&B.close();var t=document.querySelector("video");t.pause(),t.srcObject=null;var n=document.getElementById("ready-btn");n.removeEventListener("click",S),n.innerText="Ready?",document.getElementById("audio-btn").innerText="Mute yourself",document.getElementById("opponent-status").innerText="Opponent is not ready",document.getElementById("video-btn").innerText="Mute Your Video",document.getElementById("status").style.display="inline",document.getElementById("call").style.display="none",J=!1,D=!1,F=!0,H=!0,alert("Not available")}};(I=C.createDataChannel("myDataChannel",{reliable:!0})).onopen=function(e){document.getElementById("call").style.display="inline"},I.onerror=function(e){};try{I.onmessage=function(t){var n=JSON.parse(t.data);D=n.ready,document.getElementById("opponent-status").innerText=D?"Opponent is Ready":"Opponent Not Ready",D&&J&&(document.getElementById("status").style.display="none",e(!0))}}catch(n){alert("Not connected to opponent.")}try{C.ontrack=function(e){document.getElementById("call").style.display="inline";var t=e.streams[0];if(t){var n=document.querySelector("video");n.srcObject=t,C.addEventListener("track",function(){var e=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.addTrack(n.track,t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.playsInline=!0,n.autoplay=!0}else alert("cannot add video, proceed without video or refresh page and try again.")}}catch(n){alert("cannot add video, refresh and try again.")}try{C.onicecandidate=function(e){null!=e.candidate&&V({type:"store_candidate",candidate:e.candidate})}}catch(n){alert("Refresh and try again.")}C.createOffer().then((function(e){C.setLocalDescription(e),V({type:"store_offer",offer:e})})).catch((function(e){alert("cnnot connect with opponent, refresh and try again.")}))}),(function(e){alert("Cannot get video")}));var n=document.getElementById("ready-btn");try{S=function(){J=!J;try{C?I.send(JSON.stringify({ready:J})):B&&B.dataChannel.send(JSON.stringify({ready:J}))}catch(t){alert("Not connected to Opponent")}n.innerText=J?"Not Ready?":"Ready?",D&&J&&(document.getElementById("status").style.display="none",e(!0))},n.addEventListener("click",S)}catch(a){alert("Not connected to Opponent.")}},joinVideoCall:function(e,t){document.querySelector("p").style.display="inline",E=M(),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(t){T=t;B=new RTCPeerConnection({iceServers:[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302"]},{urls:["turn:numb.viagenie.ca"],username:"webrtc@live.com",credential:"muazkh"}]}),T.getTracks().forEach((function(e){B.addTrack(e,T)})),B.onconnectionstatechange=function(e){if("failed"==B.connectionState||"disconnected"==B.connectionState){T&&(T.getVideoTracks()[0].stop(),T.getAudioTracks()[0].stop()),C?C.close():B&&B.close();var t=document.querySelector("video");t.pause(),t.srcObject=null;var n=document.getElementById("ready-btn");n.removeEventListener("click",S),n.innerText="Ready?",document.getElementById("audio-btn").innerText="Mute yourself",document.getElementById("opponent-status").innerText="Opponent is not ready",document.getElementById("video-btn").innerText="Mute Your Video",document.getElementById("status").style.display="inline",document.getElementById("call").style.display="none",J=!1,D=!1,F=!0,H=!0,alert("Not Available.")}};B.ondatachannel=function(t){B.dataChannel=t.channel,B.dataChannel.onmessage=function(t){var n=JSON.parse(t.data);D=n.ready,document.getElementById("opponent-status").innerText=D?"Opponent is Ready":"Opponent Not Ready",D&&J&&(document.getElementById("status").style.display="none",e(!0))},B.dataChannel.onopen=function(e){console.log("connection opened")}};try{B.ontrack=function(e){document.getElementById("call").style.display="inline";var t=e.streams[0],n=document.querySelector("video");n.srcObject=t,B.addEventListener("track",function(){var e=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.addTrack(n.track,t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.playsInline=!0,n.autoplay=!0}}catch(n){alert("cannot add video, proceed or refresh page and try again.")}B.onicecandidate=function(e){null!=e.candidate&&W({type:"send_candidate",candidate:e.candidate})},W({type:"join_call"})}),(function(e){alert("cannot get video.")}));try{var n=document.getElementById("ready-btn");S=function(){J=!J,console.log("self : ",J);try{C?I.send(JSON.stringify({ready:J})):B&&B.dataChannel.send(JSON.stringify({ready:J}))}catch(t){alert("Not connected to Opponent")}n.innerText=J?"Not Ready?":"Ready?",D&&J&&(document.getElementById("status").style.display="none",e(!0))},n.addEventListener("click",S)}catch(a){alert("Not connected with opponent")}},check:A,videoStop:function(){T&&(T.getVideoTracks()[0].stop(),T.getAudioTracks()[0].stop()),C?C.close():B&&B.close();var e=document.querySelector("video");e.pause(),e.srcObject=null;var t=document.getElementById("ready-btn");t.removeEventListener("click",S),t.innerText="Ready?",document.getElementById("audio-btn").innerText="Mute yourself",document.getElementById("opponent-status").innerText="Opponent is not ready",document.getElementById("video-btn").innerText="Mute Your Video",document.getElementById("status").style.display="inline",document.getElementById("call").style.display="none",J=!1,D=!1,F=!0,H=!0}};var Q,K=function(e){var t=Object(c.useState)(800),n=Object(d.a)(t,2),r=n[0],o=n[1],i=Object(c.useState)(3500),s=Object(d.a)(i,2),l=s[0],u=s[1],m=Object(c.useState)("A"),j=Object(d.a)(m,2),p=j[0],y=j[1],x=Object(c.useState)("F"),g=Object(d.a)(x,2),v=g[0],w=g[1],S=Object(c.useState)(4),N=Object(d.a)(S,2),k=N[0],I=N[1],T=Object(c.useState)("10"),C=Object(d.a)(T,2),E=C[0],B=C[1];return Object(a.jsxs)(b.a,{item:!0,container:!0,spacing:2,children:[Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)(O.a,{variant:"h4",children:"Filter"})}),Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)(f.a,{name:"time",label:"Time (min)",value:E,onChange:function(e){B(e.target.value)}})}),Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)(f.a,{name:"minDiff",label:"Min difficulty",value:r,onChange:function(e){o(e.target.value)}})}),Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)(f.a,{name:"maxDiff",label:"Max difficulty",value:l,onChange:function(e){u(e.target.value)}})}),Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)(f.a,{name:"minIndex",label:"Min Index",value:p,onChange:function(e){y(e.target.value)}})}),Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)(f.a,{name:"maxIndex",label:"Max Index",value:v,onChange:function(e){w(e.target.value)}})}),Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)(f.a,{name:"numProblems",label:"No. of Problems",value:k,onChange:function(e){I(e.target.value)}})}),Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)(h.a,{onClick:function(t){t.preventDefault(),window.$time=E;var n={minDiff:r,maxDiff:l,minIndex:p,maxIndex:v,numProblems:k};e.handleData(n)},variant:"contained",color:"primary",children:"Apply"})})]})},X="ws://codingduel.herokuapp.com",G=Object(p.a)({root:{maxWidth:345},media:{height:140}});var Z=function(){G();var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(),i=Object(d.a)(o,2),s=i[0],m=i[1],p=Object(c.useState)(!1),y=Object(d.a)(p,2),x=y[0],g=y[1];function v(e){console.log("attempting to reconnect..."),(Q=new WebSocket(e)).onclose=function(){setTimeout((function(){v(e)}),3e3)}}function w(e){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.$filters=t;try{document.getElementById("ready-btn").disabled=!0}catch(n){console.log(n)}Q.send(JSON.stringify({type:"Apply_filter",roomName:window.$roomName,filters:window.$filters,time:window.$time})),Q.onmessage=function(e){if("Applied!"==e.data){alert("Applied!");try{document.getElementById("ready-btn").disabled=!1}catch(n){console.log(n)}}};case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){return console.log("changed refferrer : ",n)}),[n]),Object(c.useEffect)((function(){try{(Q=new WebSocket(X)).onopen=function(){console.log("open")},Q.onclose=function(){setTimeout((function(){v(X)}),3e3)}}catch(e){alert("Cannot connect to server")}}),[]),!0===n?Object(a.jsx)(j.a,{to:"contest"}):Object(a.jsxs)(b.a,{container:!0,direction:"column",children:[Object(a.jsxs)(b.a,{item:!0,container:!0,children:[Object(a.jsx)(b.a,{item:!0,sm:4}),Object(a.jsx)(b.a,{item:!0,container:!0,sm:4,children:Object(a.jsxs)(b.a,{container:!0,children:[Object(a.jsx)(b.a,{item:!0,sm:8,children:Object(a.jsx)(f.a,{id:"room-name",label:"Room Name",onChange:function(e){m(e.target.value)},required:!0})}),Object(a.jsx)(b.a,{item:!0,sm:2,children:Object(a.jsx)(h.a,{variant:"contained",color:"primary",name:"startBtn",type:"submit",onClick:function(){window.$roomName=s,window.$time=10,g(!0),window.$roomName=s;try{z.goToVideoCall((function(e){window.$roomName=s,1==e&&r(!0)}),s),Q.send(JSON.stringify({type:"create_room",roomName:window.$roomName,name:window.$name,filters:window.hasOwnProperty("$filters")?window.$filters:null,time:window.$time})),w({minDiff:800,maxDiff:3500,minIndex:"A",maxIndex:"F",numProblems:4})}catch(e){alert("Please refresh and try again.")}},children:"Start"})}),Object(a.jsx)(b.a,{item:!0,sm:2,children:Object(a.jsx)(h.a,{variant:"contained",color:"primary",name:"joinBtn",onClick:function(){window.$roomName=s;try{z.joinVideoCall((function(e){1==e&&r(!0)}),s),Q.send(JSON.stringify({type:"create_room",roomName:window.$roomName,name:window.$name,filters:window.hasOwnProperty("$filters")?window.$filters:null,time:window.$time}))}catch(e){alert("Please refresh and try again")}},children:"Join"})})]})}),Object(a.jsxs)(b.a,{item:!0,sm:4,children:[Object(a.jsx)(b.a,{item:!0,sm:6,children:Object(a.jsx)(O.a,{className:"wait",children:"Waiting for opponent.."})}),Object(a.jsx)(b.a,{item:!0,sm:6,children:Object(a.jsx)(q.b,{to:"/",children:Object(a.jsx)(h.a,{id:"logout-btn",variant:"contained",onClick:function(){z.videoStop(),localStorage.removeItem("jwtToken")},children:"Logout"})})})]})]}),Object(a.jsxs)(b.a,{item:!0,container:!0,children:[Object(a.jsx)(b.a,{item:!0,container:!0,sm:6}),Object(a.jsx)(b.a,{item:!0,container:!0,sm:6,children:x&&Object(a.jsx)(K,{handleData:w})})]})]})};var ee=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("br",{}),Object(a.jsx)(Z,{})]})},te=n(68),ne=(n(114),n(115),n(83)),ae=n.n(ne),ce=(n(121),n(122),n(123),n(124),n(125),n(175)),re=n(169),oe=n(170);function ie(){return(ie=Object(u.a)(l.a.mark((function e(t,n,a,c,r){var o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t&&void 0!=t){e.next=4;break}alert("NO program found."),e.next=9;break;case 4:return o={code:t,stdin:n,language:a,roomName:c,username:r},e.next=7,fetch("/compile",{method:"POST",body:JSON.stringify(o)}).then((function(e){return e.text()})).catch((function(e){return alert("Cannot run,try again")}));case 7:return i=e.sent,e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(){return(se=Object(u.a)(l.a.mark((function e(t,n,a,c,r){var o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t&&void 0!=t){e.next=4;break}alert("NO program found."),e.next=9;break;case 4:return o={userCode:t,problemCode:n,language:a,roomName:c,username:r},e.next=7,fetch("/submit",{method:"POST",body:JSON.stringify(o)}).then((function(e){return e.text()})).catch((function(e){return alert("Cannot submit,try again")}));case 7:return i=e.sent,e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var le,ue={runCode:function(e,t,n,a,c){return ie.apply(this,arguments)},submitCode:function(e,t,n,a,c){return se.apply(this,arguments)}},de=0,me=0,je="ws://codingduel.herokuapp.com";var be=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useRef)(),o=Object(c.useState)("cpp"),i=Object(d.a)(o,2),s=i[0],m=i[1];function j(){return(j=Object(u.a)(l.a.mark((function a(){var c,r,o;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=e.current.editor.getValue(),r=t.current.value,a.next=4,ue.runCode(c,r,s,window.$roomName,window.$name);case 4:o=a.sent,n.current.value=o;case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function p(){return(p=Object(u.a)(l.a.mark((function t(){var a,c,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.current.editor.getValue(),c=r.current.value,t.next=4,ue.submitCode(a,c,s,window.$roomName,window.$name);case 4:o=t.sent,"OK"==(o=JSON.parse(o)).verdict&&(de+=o.points,document.getElementById("yourPoints").innerText=de+" |",le.send(JSON.stringify({type:"store_score",roomName:window.$roomName,name:window.$name,score:de}))),n.current.value=o.verdict;case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){function e(t){console.log("attempting to recnnect..."),(le=new WebSocket(t)).onclose=function(){setTimeout((function(){e(t)}),3e3)}}(le=new WebSocket(je)).onopen=function(){le.send(JSON.stringify({type:"get_score",roomName:window.$roomName,name:window.$name})),le.onclose=function(){setTimeout((function(){e(je)}),3e3)}},le.onmessage=function(e){var t=JSON.parse(e.data);"score"==t.type?(de=t.score.your,me=t.score.opponent):"got_score"==t.type&&(window.$name==t.name?de=t.score:me=t.score);try{document.getElementById("yourPoints").innerText=de+" |",document.getElementById("opponentPoints").innerText="| "+me}catch(n){alert("cannot set points, try again")}}}),[]),Object(a.jsxs)(b.a,{container:!0,item:!0,spacing:3,children:[Object(a.jsx)(b.a,{item:!0,xs:12,children:Object(a.jsx)(ae.a,{height:"600px",width:"1000px",ref:e,mode:"c_cpp",theme:"dracula",name:"UNIQUE_ID_OF_DIV",editorProps:{$blockScrolling:!0},setOptions:{fontSize:"16pt",enableBasicAutocompletion:!0,enableLiveAutocompletion:!0}})}),Object(a.jsxs)(b.a,{item:!0,xs:12,direction:"row",justify:"center",alignItems:"center",children:[Object(a.jsxs)(ce.a,{name:"language",id:"languageSelector",className:"language_selector",value:s,onChange:function(e){m(e.target.value)},children:[Object(a.jsx)(re.a,{value:"cpp",children:"c++"}),Object(a.jsx)(re.a,{value:"java",children:"java"}),Object(a.jsx)(re.a,{value:"python3",children:"python3"})]}),Object(a.jsxs)(oe.a,{children:[Object(a.jsxs)(h.a,{color:"primary",variant:"contained",onClick:function(){return j.apply(this,arguments)},children:[" ","Run"," "]}),Object(a.jsxs)(h.a,{color:"primary",variant:"contained",onClick:function(){return p.apply(this,arguments)},children:[" ","Submit"," "]})]})]}),Object(a.jsx)(b.a,{item:!0,xs:12,children:Object(a.jsx)("textarea",{placeholder:"Problem Code",ref:r,name:"problemCode",className:"problem_code",cols:"7",rows:"7"})}),Object(a.jsxs)(b.a,{item:!0,xs:12,children:[Object(a.jsx)("textarea",{placeholder:"Input",ref:t,name:"inputArea",className:"editor_console",cols:"10",rows:"10"}),Object(a.jsx)("textarea",{placeholder:"Output",ref:n,name:"outputArea",className:"editor_console",cols:"10",rows:"10"})]})]})},pe=n(134),fe=n(168),he=n(171),Oe=n(135),ye=Object(Oe.a)((function(e){return{scrollMenu:{overflowY:"auto",height:"200px",width:"auto",border:"2px solid black",margin:"1rem",borderRadius:"1rem"}}}));var xe=function(e){console.log("Activity : ",e);var t=ye();return Object(a.jsx)("div",{children:Object(a.jsxs)(fe.a,{className:t.scrollMenu,children:[Object(a.jsx)(pe.a,{alignItems:"flex-start",children:Object(a.jsx)(he.a,{primary:"sent a message last "})}),e.messages&&e.messages.map((function(e){return t=e,Object(a.jsx)(pe.a,{children:t});var t}))]})})};var ge=function(){return Object(a.jsx)("h1",{id:"timer"})};var ve,we=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{style:{display:"inline-block"},id:"yourPoints",children:"Your Points |"}),Object(a.jsxs)("p",{style:{display:"inline-block"},id:"opponentPoints",children:[" ","| opponent Points"]})]})},Se=window.MathJax,Ne="ws://codingduel.herokuapp.com",ke=1,Ie=Object(Oe.a)((function(){return{logoutbtn:{position:"absolute",right:"2rem",marginTop:"1rem"},textStyle:{textAlign:"left"}}}));var Te=function(e){var t=Object(c.useState)(),n=Object(d.a)(t,2),r=n[0],o=n[1],i=Object(c.useState)(),s=Object(d.a)(i,2),l=s[0],u=s[1],m=Object(c.useState)([]),j=Object(d.a)(m,2),p=j[0],y=j[1];function x(e){(ve=new WebSocket(e)).onclose=function(){setTimeout((function(){x(e)}),3e3)}}function g(e){ke=1;var t=e.target.textContent,n=r.filter((function(e){return e.questionBody.questionName===t}));document.querySelector("textarea[name=problemCode").value=n[0].questionDetails.contestId+n[0].questionDetails.index,u(n[0].questionBody);var a=n[0].questionBody.questionSampleTestCases[0].input;a=a.replace(/<br\s*[\/]?>/gi,"\n"),document.querySelector('textarea[name="inputArea"]').value=a}Object(c.useEffect)((function(){(ve=new WebSocket(Ne)).onopen=function(){ve.send(JSON.stringify({type:"get_Question",roomName:window.$roomName}))},ve.onclose=function(){setTimeout((function(){x(Ne)}),3e3)},ve.onmessage=function(e){var t=JSON.parse(e.data);if(void 0!=t.type&&"activity"==t.type){var n=t,a="",c=new Date,r=c.getHours()+":"+c.getMinutes()+":"+c.getSeconds();a=window.$name===n.username?"submit"==n.runOrSubmit?"You submitted your code at ".concat(r):"You ran your code on a sample input at ".concat(r):"submit"==n.runOrSubmit?"".concat(n.username," submitted his code at ").concat(r):"".concat(n.username," ran his code on a sample input at ").concat(r),y((function(e){return[].concat(Object(te.a)(e),[a])}))}else if(void 0!=t.type&&"message"==t.type)console.log(t.msg),y((function(e){return[].concat(Object(te.a)(e),["".concat(t.name," : ").concat(t.msg)])}));else if("got_score"==t.type){if(window.$name!=t.name){var i=t.score;try{document.getElementById("opponentPoints").innerText="| "+i}catch(l){alert("cannot set points")}}}else{var s=t.problems;o(s),u(s[0].questionBody),function(e){var t,n,a,c=document.getElementById("timer"),r=Date.now();function o(){t=e-((Date.now()-r)/1e3|0),n=(n=t/60|0)<10?"0"+n:n,a=(a=t%60|0)<10?"0"+a:a;try{c.textContent=n+":"+a}catch(l){return void alert("cannot start timer, try again")}if(t<=0)return clearInterval(o),void alert("Contest Ends")}o();var o=setInterval(o,1e3)}(60*t.time)}}}),[]),Object(c.useEffect)((function(){console.log("RAN ATHJAX");try{Se.typeset()}catch(e){alert("Cannot render problem correctly, try again.")}}),[l]);var v=Ie();return Object(a.jsx)("div",{children:Object(a.jsxs)(b.a,{container:!0,children:[Object(a.jsxs)(b.a,{item:!0,sm:4,children:[Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)(ge,{})}),Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)(we,{})}),r&&r.map((function(e,t){return Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)(h.a,{variant:"contained",onClick:g,value:e.questionBody.questionName,children:Object(a.jsx)(O.a,{children:e.questionBody.questionName})})})})),Object(a.jsx)(b.a,{item:!0,xs:12,children:Object(a.jsx)(xe,{messages:p})}),Object(a.jsx)(b.a,{item:!0,xs:12,children:Object(a.jsx)(f.a,{id:"message",label:"message"})}),Object(a.jsx)(b.a,{item:!0,xs:12,children:Object(a.jsx)(h.a,{variant:"contained",onClick:function(){ve.send(JSON.stringify({type:"message",name:window.$name,roomName:window.$roomName,msg:document.getElementById("message").value}))},children:Object(a.jsx)(O.a,{children:"Send"})})})]}),Object(a.jsxs)(b.a,{item:!0,sm:8,children:[Object(a.jsx)(q.b,{to:"/",children:Object(a.jsx)(h.a,{id:"logout-btn",variant:"contained",onClick:function(){z.videoStop(),localStorage.removeItem("jwtToken")},className:v.logoutbtn,children:"Logout"})}),Object(a.jsx)("div",{children:l&&Object(a.jsxs)("div",{children:[Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)(O.a,{variant:"h3",children:l.questionName})}),Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)("br",{})}),Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)("div",{className:v.textStyle,dangerouslySetInnerHTML:{__html:l.questionDiv}})}),Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)("br",{})}),Object(a.jsx)(O.a,{variant:"h5",className:v.textStyle,children:"Input Format"}),Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)("div",{className:v.textStyle,dangerouslySetInnerHTML:{__html:l.questionInputTypeDiv}})}),Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)("br",{})}),Object(a.jsx)(O.a,{variant:"h5",className:v.textStyle,children:"Output Format"}),Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)("div",{className:v.textStyle,dangerouslySetInnerHTML:{__html:l.questionOutputTypeDiv}})}),Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)("br",{})}),Object(a.jsx)(O.a,{variant:"h5",className:v.textStyle,children:"Sample Test Cases"}),l.questionSampleTestCases&&l.questionSampleTestCases.map((function(e){return Object(a.jsxs)(b.a,{item:!0,container:!0,className:v.textStyle,children:[Object(a.jsxs)(b.a,{item:!0,sm:6,children:[Object(a.jsxs)(O.a,{variant:"h6",className:v.textStyle,children:["Input ",ke,":"]}),Object(a.jsx)("div",{dangerouslySetInnerHTML:{__html:e.input}})]}),Object(a.jsxs)(b.a,{item:!0,sm:6,children:[Object(a.jsxs)(O.a,{variant:"h6",className:v.textStyle,children:["Output ",ke++,":"]}),Object(a.jsx)("div",{dangerouslySetInnerHTML:{__html:e.output}})]}),Object(a.jsx)(b.a,{item:!0,sm:12,children:Object(a.jsx)("br",{})})]})}))]})}),Object(a.jsx)(b.a,{container:!0,item:!0,direction:"row",justify:"flex-end",alignItems:"center",children:Object(a.jsx)(be,{})})]})]})})},Ce=n(33),Ee=n(62),Be=Object(p.a)({style:{marginTop:"2rem"}});var $e=function(){var e=Be();return Object(a.jsx)(q.b,{to:"/",children:Object(a.jsx)(h.a,{variant:"contained",color:"primary",className:e.style,children:"Login"})})};var qe=function(e){var t=e.component,n=Object(Ee.a)(e,["component"]),r=Object(c.useState)(!1),o=Object(d.a)(r,2),i=o[0],s=o[1];return Object(c.useEffect)(Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.check();case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]),Object(a.jsx)(j.b,Object(Ce.a)(Object(Ce.a)({},n),{},{render:function(e){return 1==i?Object(a.jsx)(t,Object(Ce.a)({},e)):Object(a.jsx)($e,{})}}))};var Re=function(e){var t=e.component,n=Object(Ee.a)(e,["component"]),r=Object(c.useState)(!1),o=Object(d.a)(r,2),i=o[0],s=o[1];return Object(c.useEffect)(Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.check().catch((function(e){alert("Cannot check...login or not server is not running")}));case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]),Object(a.jsx)(j.b,Object(Ce.a)(Object(Ce.a)({},n),{},{render:function(e){return 1==i?Object(a.jsx)(j.a,{to:"/ready"}):Object(a.jsx)(t,Object(Ce.a)({},e))}}))};var _e=function(e){return console.log("in Navigator : ",e),Object(a.jsx)(q.a,{children:Object(a.jsxs)(j.d,{children:[Object(a.jsx)(Re,{path:"/",exact:!0,component:$}),Object(a.jsx)(qe,{path:"/ready",exact:!0,component:ee}),Object(a.jsx)(qe,{path:"/contest",exact:!0,component:Te})]})})},De=n(172),Je=n(173),Pe=n(84),Ae=n.n(Pe),Me=Object(Oe.a)((function(){return{aboutbtn:{marginLeft:"auto",marginRight:"2rem"}}}));var Le=function(){var e=Me();return Object(a.jsx)(De.a,{position:"static",children:Object(a.jsxs)(Je.a,{children:[Object(a.jsx)(O.a,{variant:"h2",children:"CodingDuel"}),Object(a.jsx)(Ae.a,{className:e.aboutbtn})]})})},Ve=n(85),We=n(174);var Fe=function(){var e=Object(Ve.a)({typography:{fontFamily:["Nunito","Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(",")}});return Object(a.jsx)(We.a,{theme:e,children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(Le,{}),Object(a.jsx)(_e,{})]})})};window.$name="",i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Fe,{})}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.72eda98e.chunk.js.map