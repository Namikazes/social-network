"use strict";(self.webpackChunkreact_1=self.webpackChunkreact_1||[]).push([[249],{5249:function(e,t,s){s.r(t),s.d(t,{default:function(){return V}});var r=s(5671),n=s(3144),o=s(136),i=s(516),a=s(8683),l=s(2791),u=s(2335),c={content:"MyPost_content__EMtiJ"},d="Post_item__bsvkk",f=s(184);var p=function(e){return(0,f.jsxs)("div",{className:d,children:[(0,f.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabrl2VTWfpp7MbwZp6gVKWPv5C_3Xkx-VlQ&usqp=CAU"}),e.message,";",(0,f.jsx)("div",{children:(0,f.jsxs)("span",{children:["like ",e.value]})})]})},h=s(6139),x=s(704),j=s(3079),m=s(8323),v=l.memo((function(e){var t=e.posts.map((function(e){return(0,f.jsx)(p,{message:e.text,value:e.likeCount})}));return(0,f.jsxs)("div",{className:c.content,children:["My posts",(0,f.jsx)(b,{onSubmit:function(t){e.addPosts(t.addPostText)}}),(0,f.jsx)("div",{className:c.posts,children:t})]})})),b=(0,x.Z)({form:"post"})((function(e){return(0,f.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,f.jsx)("div",{children:(0,f.jsx)(h.Z,{component:m.g,name:"addPostText",validate:[j.C,(0,j.h)(10)]})}),(0,f.jsx)("div",{children:(0,f.jsx)("button",{children:"Add Post"})})]})})),g=v,P=s(8687),_=(0,P.$j)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPosts:function(t){e((0,u.HM)(t))}}}))(g),Z=s(9439),k={pho:"ProfileInfo_pho__ozroY",item:"ProfileInfo_item__CN+N+",userAva:"ProfileInfo_userAva__2KLqa",status:"ProfileInfo_status__IDyPF",contact:"ProfileInfo_contact__PoDDW"},C=s(7588),N=function(e){var t=(0,l.useState)(!1),s=(0,Z.Z)(t,2),r=s[0],n=s[1],o=(0,l.useState)(e.status),i=(0,Z.Z)(o,2),a=i[0],u=i[1];(0,l.useEffect)((function(){u(e.status)}),[e.status]);return(0,f.jsxs)("div",{className:k.style,children:[!r&&(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Status:"})," ",(0,f.jsx)("span",{onDoubleClick:function(){n(!0)},children:e.status||"----"})]}),r&&(0,f.jsx)("div",{children:(0,f.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),e.updateStatus(a)},value:a})})]})},y=s(1090),S=(0,x.Z)({form:"edit-profile"})((function(e){return(0,f.jsx)("form",{onSubmit:e.handleSubmit,children:(0,f.jsxs)("div",{className:k.status,children:[(0,f.jsx)("div",{children:(0,f.jsx)("button",{onClick:function(){},children:"save"})}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Full Name:"})," ",(0,f.jsx)(h.Z,{placeholder:"fullName",name:"fullName",component:m.I})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Locking for a job:"})," ",(0,f.jsx)(h.Z,{name:"lookingForAJob",component:m.I,type:"checkbox"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"My professional skills:"})," ",(0,f.jsx)(h.Z,{placeholder:"My professional skills",name:"lookingForAJobDescription",component:m.g})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"About me:"})," ",(0,f.jsx)(h.Z,{placeholder:"About me",name:"aboutMe",component:m.g})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Contacts:"})," ",Object.keys(e.profile.contacts).map((function(e){return(0,f.jsx)("div",{className:k.contact,children:(0,f.jsxs)("b",{children:[e," : ",(0,f.jsx)(h.Z,{placeholder:"key",name:"contacts."+e,component:m.I})]})},e)}))]})]})})})),A=function(e){return(0,f.jsxs)("div",{className:k.status,children:[e.isOwner&&(0,f.jsx)("div",{children:(0,f.jsx)("button",{onClick:e.goToEditMode,children:"edit"})}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Full Name:"})," ",e.profile.fullName]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Locking for a job:"})," ",e.profile.lookingForAJob?"yes":"no"]}),e.profile.lookingForAJob&&(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"My professional skills:"})," ",e.profile.lookingForAJobDescription]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"About me:"})," ",e.profile.aboutMe]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Contacts:"})," ",Object.keys(e.profile.contacts).map((function(t){return(0,f.jsx)(I,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))]})]})},I=function(e){var t=e.contactTitle,s=e.contactValue;return(0,f.jsxs)("div",{className:k.contact,children:[(0,f.jsx)("b",{children:t}),": ",s]})},M=function(e){var t=(0,l.useState)(!1),s=(0,Z.Z)(t,2),r=s[0],n=s[1];if(!e.profile)return(0,f.jsx)(C.Z,{});return(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("img",{className:k.pho,src:"https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg"}),(0,f.jsx)("div",{className:k.userAva,children:(0,f.jsx)("img",{src:null!=e.profile.photos.large?e.profile.photos.large:y})})]}),e.isOwner&&(0,f.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}),r?(0,f.jsx)(S,{initialValues:e.profile.fullName,profile:e.profile,onSubmit:function(t){e.saveProfile(t),n(!1)}}):(0,f.jsx)(A,{profile:e.profile,isOwner:e.isOwner,goToEditMode:function(){n(!0)}}),(0,f.jsx)("div",{className:k.item,children:(0,f.jsx)(N,{status:e.status,updateStatus:e.updateStatus})})]})},w="Profile_content__G7gsM",F=function(e){return(0,f.jsxs)("div",{className:w,children:[(0,f.jsx)(M,{saveProfile:e.saveProfile,savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),(0,f.jsx)(_,{})]})},T=s(7689),O=s(2863),D=s(7781);var J=function(e){(0,o.Z)(s,e);var t=(0,i.Z)(s);function s(){return(0,r.Z)(this,s),t.apply(this,arguments)}return(0,n.Z)(s,[{key:"refreshProfile",value:function(){var e=this.props.router.params.userId;e||(e=this.props.auraizUserId),e||this.props.history.push("/login"),this.props.getProfileThunk(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.router.params.userId!=e.router.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,f.jsx)(F,(0,a.Z)((0,a.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.router.params.userId,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),s}(l.Component),V=(0,D.qC)((0,P.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,auraizUserId:e.auth.id}}),{setUserProfile:u.$l,getProfileThunk:u.VB,getStatus:u.lR,updateStatus:u.Nf,savePhoto:u.Ju,saveProfile:u.Ii}),(function(e){return function(t){var s=(0,T.TH)(),r=(0,T.s0)(),n=(0,T.UO)();return(0,f.jsx)(e,(0,a.Z)((0,a.Z)({},t),{},{router:{location:s,navigate:r,params:n}}))}}),O._)(J)},8323:function(e,t,s){s.d(t,{I:function(){return c},g:function(){return u}});var r=s(8683),n=s(5987),o=(s(2791),s(9058)),i=s(184),a=["input","meta"],l=["input","meta"],u=function(e){var t=e.input,s=e.meta,l=(0,n.Z)(e,a),u=s.touched&&s.error;return(0,i.jsxs)("div",{className:o.Z.formControl+" "+(u?o.Z.error:""),children:[(0,i.jsx)("div",{children:(0,i.jsx)("textarea",(0,r.Z)((0,r.Z)({},t),l))}),u&&(0,i.jsx)("span",{children:s.error})]})},c=function(e){var t=e.input,s=e.meta,a=(0,n.Z)(e,l),u=s.touched&&s.error;return(0,i.jsxs)("div",{className:o.Z.formControl+" "+(u?o.Z.error:""),children:[(0,i.jsx)("div",{children:(0,i.jsx)("input",(0,r.Z)((0,r.Z)({},t),a))}),(0,i.jsx)("span",{children:u&&s.error})]})}},2863:function(e,t,s){s.d(t,{_:function(){return p}});var r=s(8683),n=s(5671),o=s(3144),i=s(136),a=s(516),l=s(2791),u=s(8687),c=s(7689),d=s(184),f=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){(0,i.Z)(l,t);var s=(0,a.Z)(l);function l(){return(0,n.Z)(this,l),s.apply(this,arguments)}return(0,o.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(e,(0,r.Z)({},this.props)):(0,d.jsx)(c.Fg,{to:"/login"})}}]),l}(l.Component);return(0,u.$j)(f)(t)}},3079:function(e,t,s){s.d(t,{C:function(){return r},h:function(){return n}});var r=function(e){if(!e)return"Field is required"},n=function(e){return function(t){if(t.length>e)return"Max lenght is ".concat(e," symbols")}}},9058:function(e,t){t.Z={formControl:"FormControls_formControl__8zY++",error:"FormControls_error__WAIPk",formErorr:"FormControls_formErorr__-y6pN"}}}]);
//# sourceMappingURL=249.85686f55.chunk.js.map