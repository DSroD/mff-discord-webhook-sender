(this["webpackJsonpmff-discord-webhook-sender"]=this["webpackJsonpmff-discord-webhook-sender"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(18),r=a.n(s),o=(a(28),a(29),a(30),a(22)),d=a(19),i=a(20),l=a(10),m=a(23),b=a(21),u=a(7),j=a(11),f=a(13),h=a(16),p=a(5),O=function(e){var t=e.embId,a=e.delFunc,c=Object(n.useState)(""),s=Object(f.a)(c,2),r=(s[0],s[1]),o=Object(n.useState)(""),d=Object(f.a)(o,2),i=(d[0],d[1]),l=Object(n.useState)(""),m=Object(f.a)(l,2),b=(m[0],m[1]);return Object(p.jsx)(u.a.Group,{controlId:"mff-discord-webhook.Embed."+t,children:Object(p.jsxs)("div",{className:"embed",children:[Object(p.jsx)(j.a,{className:"embed-close",variant:"outline-dark",onClick:function(){a(t)},children:"x"}),Object(p.jsx)(h.a,{className:"embed-card",children:Object(p.jsxs)(h.a.Body,{children:[Object(p.jsx)(u.a.Control,{onChange:function(e){return r(e.target.value)},className:"msg-form-input",type:"text",placeholder:"Author name"}),Object(p.jsx)(u.a.Control,{onChange:function(e){return i(e.target.value)},className:"msg-form-input",type:"text",placeholder:"Embed title"}),Object(p.jsx)(u.a.Control,{onChange:function(e){return b(e.target.value)},className:"msg-form-input",type:"text",placeholder:"Embed description"})]})})]})})},g=a.p+"static/media/addimg.677cedfc.svg",x=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={embeds:[],nextId:0,username:"",message:"",avatarURL:""},n.deleteEmbed=function(e){n.setState({embeds:n.state.embeds.filter((function(t){return t.props.embId!=e}))})},n.addEmbed=function(){n.setState({embeds:[].concat(Object(o.a)(n.state.embeds),[Object(p.jsx)(O,{embId:n.state.nextId,delFunc:n.deleteEmbed})]),nextId:n.state.nextId+1})},n.setAvatarURL=function(e){var t=prompt("Image URL (leave blank to clear image):",n.url);e.style.backgroundImage=t?'url("'.concat(encodeURI(t||g),'")'):null,n.setState({avatarURL:t})},n.deleteEmbed=n.deleteEmbed.bind(Object(l.a)(n)),n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:function(t){return e.setAvatarURL(t.target)},id:"avatar",className:"avatar-main",title:"Set avatar URL"}),Object(p.jsxs)(u.a.Group,{className:"main-message",controlId:"mff-discord-webhook.Message",children:[Object(p.jsx)(u.a.Control,{onChange:function(t){return e.setState({username:t.target.value})},className:"msg-form-input",type:"text",placeholder:"Username"}),Object(p.jsx)(u.a.Control,{onChange:function(t){return e.setState({message:t.target.value})},className:"msg-form-input",as:"textarea",rows:2,placeholder:"Message (max 2000 characters)"})]}),this.state.embeds,Object(p.jsx)(j.a,{variant:"primary",onClick:function(t){return e.addEmbed()},children:"Add Embed"})]})}}]),a}(c.a.Component);var v=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("main",{className:"App-main",children:[Object(p.jsx)("p",{children:"MFF Discord webhook stuff"}),Object(p.jsx)("div",{children:Object(p.jsx)(x,{})})]})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),C()}},[[35,1,2]]]);
//# sourceMappingURL=main.2fc5ceaa.chunk.js.map