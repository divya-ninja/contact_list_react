(this["webpackJsonpcontact-list"]=this["webpackJsonpcontact-list"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},46:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var s=n(3),c=n.n(s),a=n(19),i=n.n(a),o=(n(25),n(26),n(6)),d=n(7),l=n(2),h=n(9),r=n(8),j=(n(27),n(20)),u=n.n(j),b=(n(46),n(0)),p=function(t){Object(h.a)(n,t);var e=Object(r.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).handleDeleteContact=s.handleDeleteContact.bind(Object(l.a)(s)),s.handleEditContact=s.handleEditContact.bind(Object(l.a)(s)),s.showMoreDetails=s.showMoreDetails.bind(Object(l.a)(s)),s}return Object(d.a)(n,[{key:"handleDeleteContact",value:function(){fetch("https://jsonplaceholder.typicode.com/posts/".concat(this.props.contact.id),{method:"DELETE"})}},{key:"handleEditContact",value:function(){fetch("https://jsonplaceholder.typicode.com/posts/".concat(this.props.contact.id),{method:"PUT",body:JSON.stringify({id:1,title:"foo",body:"bar",userId:1}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()})).then((function(t){return console.log(t)}))}},{key:"showMoreDetails",value:function(){document.getElementById(this.props.contact.id).classList.toggle("show")}},{key:"render",value:function(){var t=this.props.contact;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{id:"visible-details",children:[t.name,Object(b.jsxs)("div",{id:"edit-delete-icons",children:[Object(b.jsx)("i",{className:"fas fa-user-edit",onClick:this.handleEditContact}),Object(b.jsx)("i",{className:"far fa-trash-alt",onClick:this.handleDeleteContact})]})]}),Object(b.jsx)("i",{id:"more-details",className:"fas fa-chevron-down",onClick:this.showMoreDetails,children:Object(b.jsxs)("div",{id:t.id,className:"show",children:[Object(b.jsxs)("div",{id:"phone",children:[Object(b.jsx)("i",{className:"details-icons fas fa-phone"}),t.phone]}),Object(b.jsxs)("div",{id:"email",children:[Object(b.jsx)("i",{className:"details-icons fas fa-envelope"}),t.email]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("i",{className:"details-icons fas fa-map-marker-alt",children:"Address"}),Object(b.jsxs)("div",{id:"address",children:["street:"," ",t.address.street," ",Object(b.jsx)("br",{}),"suite:"," ",t.address.suite," ",Object(b.jsx)("br",{}),"city:"," ",t.address.city," ",Object(b.jsx)("br",{}),"zipcode:"," ",t.address.zipcode]})]}),Object(b.jsxs)("div",{children:["Website:"," ",t.website]})]})}),Object(b.jsx)("hr",{})]})}}]),n}(s.Component),O=function(t){Object(h.a)(n,t);var e=Object(r.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).state={contacts:[],showContacts:!1},s.handleShowContacts=s.handleShowContacts.bind(Object(l.a)(s)),s.handleAddContact=s.handleAddContact.bind(Object(l.a)(s)),s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;u.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){t.setState({contacts:e.data})}))}},{key:"handleShowContacts",value:function(){this.setState({showContacts:!this.state.showContacts})}},{key:"handleAddContact",value:function(){var t=this,e=document.getElementById("name"),n=document.getElementById("tel");fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({name:e.value,phone:n.value}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()})).then((function(e){return t.setState({newContact:{data:e}})})),e.value="",n.value=""}},{key:"render",value:function(){return Object(b.jsxs)("div",{id:"app-container",children:[Object(b.jsx)("h1",{children:"Contact List"}),Object(b.jsxs)("div",{id:"input",children:[Object(b.jsx)("input",{id:"name",type:"text",placeholder:"Name",required:!0}),Object(b.jsx)("input",{id:"tel",type:"tel",placeholder:"Telephone no.",required:!0}),Object(b.jsx)("button",{type:"submit",onClick:this.handleAddContact,children:"Add Contact"})]}),Object(b.jsx)("button",{id:"show-hide-contacts",onClick:this.handleShowContacts,children:this.state.showContacts?"Hide Contacts":"Show Contacts"}),this.state.showContacts&&Object(b.jsx)("ul",{id:"listOfContacts",children:this.state.contacts.map((function(t){return Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsx)(p,{contact:t})},t.email)}))})]})}}]),n}(s.Component);var f=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(O,{})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),s(t),c(t),a(t),i(t)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),m()}},[[48,1,2]]]);
//# sourceMappingURL=main.35f5a360.chunk.js.map