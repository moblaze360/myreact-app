(this["webpackJsonpmyreact-app"]=this["webpackJsonpmyreact-app"]||[]).push([[0],{101:function(e,t,n){e.exports=n(379)},106:function(e,t,n){},374:function(e,t,n){},375:function(e,t,n){},376:function(e,t,n){},377:function(e,t,n){},379:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),i=n(47),r=n.n(i),u=(n(106),n(94)),l=n(95),c=n(100),s=n(99),m=n(96),p=n.n(m),f=n(48),w=n.n(f),d=(n(374),function(e){var t=e.imageUrl,n=e.box;return o.a.createElement("div",{className:"center ma"},o.a.createElement("div",{className:"absolute mt2"},o.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),o.a.createElement("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})))}),g=function(){return o.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement("p",{className:"f3 link dim black underline pa3 pointer"},"Sign Out"))},b=n(97),v=n.n(b),y=n(98),h=n.n(y),V=(n(375),function(){return o.a.createElement("div",{className:"ma4 mt0"},o.a.createElement(v.a,{className:"Tilt br shadow-1",options:{max:55},style:{height:250,width:250}},o.a.createElement("div",{className:"Tilt-inner"},o.a.createElement("img",{style:{paddingTop:"70px"},alt:"pfungwa",src:h.a})," ")))}),D=(n(376),function(e){var t=e.onInputChange,n=e.onSubmitButton;return o.a.createElement("div",null,o.a.createElement("p",{className:"f3"},"This brain will detec faces in your picture. Try it out"),o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"form center pa4 br3 shadow-5"},o.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),o.a.createElement("button",{className:"w-30 grow f4 link ph3 pv3 dib white bg-light-purple",onClick:n},"Detect"))))}),O=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"white f3"},"Hi , your current Rank is..."),o.a.createElement("div",{className:"white f1"},"#"))},U=(n(377),new w.a.App({apiKey:"d88703de652f40c48c20740373b9166e"})),C={particles:{number:{value:60,density:{enable:!0,value_area:1500}}}},q=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).calculateFacelocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),o=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*o,rightCol:a-t.right_col*a,bottomRow:o-t.bottom_row*o}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onSubmitButton=function(){e.setState({imageUrl:e.state.input}),U.models.predict(w.a.FACE_DETECT_MODEL,e.state.input).then((function(t){return e.displayFaceBox(e.calculateFacelocation(t))})).catch((function(e){return console.log(e)}))},e.state={input:"",imageUrl:"",box:{}},e}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p.a,{className:"particles",params:C}),o.a.createElement(g,null),o.a.createElement(V,null),o.a.createElement(O,null),o.a.createElement(D,{onInputChange:this.onInputChange,onSubmitButton:this.onSubmitButton}),o.a.createElement(d,{box:this.state.box,imageUrl:this.state.imageUrl}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(378);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,t){e.exports="data:image/png;base64,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"}},[[101,1,2]]]);
//# sourceMappingURL=main.22201fa0.chunk.js.map