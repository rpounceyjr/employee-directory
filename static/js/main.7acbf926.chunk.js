(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Michael Scott","position":"Regional Manager","department":"Administration"},{"id":2,"name":"Dwight K. Schrute","position":"Assistant (to the) Regional Manager","department":"Sales"},{"id":3,"name":"Jim Halpert","position":"Co-Manager","department":"Administration"},{"id":4,"name":"Pam Halpert","position":"Office Administrator","department":"Administration"},{"id":5,"name":"Toby Flenderson","position":"Human Resources Representative","department":"Human Resources"},{"id":6,"name":"Stanely Hudson","position":"Salesperson","department":"Sales"},{"id":7,"name":"Andrew Bernard","position":"Regional Director in Charge of Sales","department":"Sales"},{"id":8,"name":"Creed Bratton","position":"Quality Assurance Representative","department":"Quality Assurance"},{"id":9,"name":"Oscar Martinez","position":"Accountant","department":"Accounting"}]')},,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=(a(14),a(2)),c=a(5),l=a(6),m=a(8),p=a(7),u=(a(15),a(1));a(16);var d=function(e){return r.a.createElement("h1",{className:"title"},e.children)};a(17);var h=function(e){return r.a.createElement("form",{className:"search-form"},r.a.createElement("div",{className:"search-div"},r.a.createElement("label",null,"Search by Name"),r.a.createElement("input",{className:"search-input",value:e.search,onChange:function(t){return e.updateSearch(t.target.value)}}),r.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-secondary mt-3"},"Search")))};a(18);var y=function(e){return r.a.createElement("div",{className:"sort-div"},r.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:e.sortByPosition},"Sort By Position (A-Z)"),r.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:e.sortByDepartment},"Sort By Department (A-Z)"))};var f=function(e){return r.a.createElement("div",null,r.a.createElement("table",{className:"container"},e.children))};a(19);var E=function(e){return r.a.createElement("tr",{className:"employee-row"},r.a.createElement("td",{className:"name-col employee-name-col"},e.name),r.a.createElement("td",{className:"position-col employee-position-col"},e.position),r.a.createElement("td",{className:"department-col employee-department-col"},e.department))};a(20);var v=function(e){var t=e.employees;return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"name-col header"},"Employee Name"),r.a.createElement("td",{className:"position-col header"},"Position"),r.a.createElement("td",{className:"department-col header"},"Department")),t.map((function(e){return r.a.createElement(E,{key:e.id,name:e.name,position:e.position,department:e.department})})))},b=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={employees:u,search:"",sortDirection:{departmentDirection:"asc",positionDirection:"asc"}},e.updateSearch=function(t){e.setState({search:t,employees:u})},e.handleFormSubmit=function(t){t.preventDefault(),e.filterEmployeesByName(e.state.search)},e.filterEmployeesByName=function(t){var a=e.state.employees.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));e.setState({employees:a,search:""})},e.sortByPosition=function(){console.log("clicked");var t=Object(s.a)(e.state.employees).sort((function(e,t){return e.position>t.position?1:e.position<t.position?-1:0}));e.setState({employees:t})},e.sortByDepartment=function(){console.log("clicked");var t=Object(s.a)(e.state.employees).sort((function(e,t){return e.department>t.department?1:e.department<t.department?-1:0}));e.setState({employees:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return console.log(this.state.employees),r.a.createElement("div",{className:"container"},r.a.createElement(d,null,"Employee Directory"),r.a.createElement(h,{className:"search",updateSearch:this.updateSearch,handleFormSubmit:this.handleFormSubmit,search:this.state.search}),r.a.createElement(y,{className:"sort",sortByPosition:this.sortByPosition,sortByDepartment:this.sortByDepartment}),r.a.createElement("hr",null),r.a.createElement("div",{className:"table-container"},r.a.createElement(f,null,r.a.createElement(v,{employees:this.state.employees}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.7acbf926.chunk.js.map