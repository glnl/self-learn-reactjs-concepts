(this["webpackJsonpwebapp-playground"]=this["webpackJsonpwebapp-playground"]||[]).push([[0],{24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(3),r=a(5),c=a(4),i=a(6),o=a(0),s=a.n(o),u=a(20),m=a.n(u),h=a(10),d=a(11),p=(a(29),s.a.createElement("b",null,"This is just any string tbh")),E=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<500;t+=1)e.push(s.a.createElement("p",{key:t},"This will repeat so the screen overflows line: ",t));return s.a.createElement("div",null,p,s.a.createElement("hr",null),e)}}]),t}(s.a.Component),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={date:new Date},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return s.a.createElement("div",null,"It is ",this.state.date.toLocaleString(),"!")}}]),t}(s.a.Component),v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={valueBool:!0,valueInteger:0},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){this.setState((function(e){return{valueBool:!e.valueBool,valueInteger:e.valueInteger+1}}))}},{key:"resetValues",value:function(){this.setState((function(e){return{valueInteger:0}}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,"On/Off switch: ",s.a.createElement("b",null,this.state.valueBool?"On":"Off"),s.a.createElement("br",null),"Number increment: ",s.a.createElement("b",null,this.state.valueInteger),s.a.createElement("br",null),s.a.createElement("button",{onClick:function(t){return e.handleClick(t)}},"Trigger"),s.a.createElement("button",{onClick:function(t){return e.resetValues(t)}},"Reset"))}}]),t}(s.a.Component),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e)))._isMounted=!1,a.state={isLoaded:!1,error:null,limit:a.props.limit,data:[]},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,fetch("https://safebooru.donmai.us/posts.json?tags=scenery&limit="+this.state.limit).then((function(e){return e.json()})).then((function(t){e._isMounted&&e.setState({isLoaded:!0,data:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.data;return t?s.a.createElement("div",{className:"_errorHandle"},s.a.createElement("b",null,t)):a?s.a.createElement("div",{className:"imageGallery"},"Loaded ",n.length," images",s.a.createElement("br",null),s.a.createElement("div",null,n.map((function(e){return s.a.createElement("img",{src:e.preview_file_url,alt:e.id,key:e.id,className:"thumbnails"})})))):s.a.createElement("div",{className:"_loadingHandle"},"Loading thumbnails....")}}]),t}(s.a.Component),y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={defaultLimit:10,limit:10},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"buttonClick",value:function(){this.setState({limit:document.getElementById("limitInput").value})}},{key:"render",value:function(){var e=this,t=s.a.createElement("div",{className:"_inputHolder"},"Limit: (max 200)",s.a.createElement("input",{type:"text",placeholder:"enter how many images to load",defaultValue:"10",id:"limitInput"}),s.a.createElement("button",{onClick:function(t){return e.buttonClick(t)}},"Change limit"));return s.a.createElement("div",{className:"text-center"},t,s.a.createElement(f,{limit:this.state.limit,key:this.state.limit}))}}]),t}(s.a.Component),k=a(21),g=a(14),O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e)))._isMounted=!1,a.state={key:0,search:"",type:"repositories",sort:"stars"},a.handleSubmit=a.handleSubmit.bind(Object(g.a)(a)),a.handleOnChange=a.handleOnChange.bind(Object(g.a)(a)),a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({key:this.state.key+1})}},{key:"handleOnChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(k.a)({},n,a))}},{key:"render",value:function(){var e=this.state;return s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.handleSubmit},"Look for:",s.a.createElement("input",{type:"text",name:"search",onChange:this.handleOnChange}),"which is a:",s.a.createElement("select",{name:"type",onChange:this.handleOnChange},s.a.createElement("option",{value:"repositories"},"Repository"),s.a.createElement("option",{value:"users"},"User")),"sort by:",s.a.createElement("select",{name:"sort",onChange:this.handleOnChange},s.a.createElement(C,{type:this.state.type})),s.a.createElement("input",{type:"submit",value:"Do Query"})),s.a.createElement(j,{search:e.search,type:e.type,sort:e.sort,key:e.key}))}}]),t}(s.a.Component),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e)))._isMounted=!1,a.state={search:"",type:"repo",sort:"stars",isLoaded:!1,resultCount:null,isResultsIncomplete:null,data:[],error:null},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;this._isMounted=!0,""!==e.search&&this.setState({search:e.search.split(" ").join("+"),type:e.type,sort:e.sort},this.setStateComplete)}},{key:"setStateComplete",value:function(){var e=this,t=this.state,a="https://api.github.com/search/".concat(t.type,"?q=").concat(t.search,"&sort=").concat(t.sort);this._isMounted&&fetch(a).then((function(e){return e.json()})).then((function(t){var a={};a=t.message?{error:t.message,isLoaded:!0}:{resultCount:t.total_count,isResultsIncomplete:t.incomplete_results,data:t.items,isLoaded:!0},e.setState(a)}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state,t=e.type,a=null,n={margin:"5px",height:"100px",border:"1px solid black"};if("repositories"===t){a=e.data.map((function(e){return s.a.createElement("div",{key:e.id,style:n},s.a.createElement("div",{style:{float:"left"}},s.a.createElement("img",{src:e.owner.avatar_url,alt:e.owner.id,width:"75px"})),s.a.createElement("div",null,s.a.createElement("b",null,e.full_name),s.a.createElement("a",{href:e.html_url,target:"_new"},"=>"),s.a.createElement("br",null),s.a.createElement("small",null,null===e.description?"":e.description.length>300?e.description.substring(0,297)+"...":e.description),s.a.createElement("br",null),s.a.createElement("small",null,"stars: ",e.stargazers_count," - watchers: ",e.watchers_count," - forks: ",e.forks_count," - open issues: ",e.open_issues)))}))}else a="users"===t?e.data.map((function(e){return s.a.createElement("div",{key:e.id,style:n},s.a.createElement("div",{style:{float:"left"}},s.a.createElement("img",{src:e.avatar_url,alt:e.id,width:"75px"})),s.a.createElement("div",{style:{padding:"10px"}},s.a.createElement("p",null,e.login,s.a.createElement("a",{href:e.html_url,target:"_new"},"=>"))))})):s.a.createElement("i",null,"Try searching something...");return s.a.createElement("div",null,a)}}]),t}(s.a.Component);function C(e){var t=e.type,a=[];return"repositories"===t?a.push(s.a.createElement("option",{value:"stars",key:"stars"},"Stars"),s.a.createElement("option",{value:"forks",key:"forks"},"Forks"),s.a.createElement("option",{value:"help-wanted-issues",key:"help-wanted-issues"},"Issues"),s.a.createElement("option",{value:"updated",key:"updated"},"Updated")):"users"===t&&a.push(s.a.createElement("option",{value:"followers",key:"followers"},"Followers"),s.a.createElement("option",{value:"repositories",key:"repositories"},"Repositories"),s.a.createElement("option",{value:"joined",key:"joined"},"Joined")),a}var w=O,_=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"main-div"},s.a.createElement(h.a,null,s.a.createElement("div",{className:"topNav"},s.a.createElement(h.b,{to:"/app"},"App"),s.a.createElement(h.b,{to:"/about"},"About")),s.a.createElement("div",{className:"base-div"},s.a.createElement(d.c,null,s.a.createElement(d.a,{path:"/app"},s.a.createElement(S,null)),s.a.createElement(d.a,{path:"/about"},s.a.createElement(N,null)),s.a.createElement(d.a,{path:"/"},s.a.createElement(I,null))))))}}]),t}(s.a.Component);function S(){var e=Object(d.f)();return console.log(e),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"column side"},s.a.createElement("b",null,"Static Outputs"),s.a.createElement("ol",null,s.a.createElement("li",null,s.a.createElement(h.b,{to:"".concat(e.url,"/hello")},"String output")),s.a.createElement("li",null,s.a.createElement(h.b,{to:"".concat(e.url,"/clock")},"Ticking Clock"))),s.a.createElement("b",null,"On Events"),s.a.createElement("ol",null,s.a.createElement("li",null,s.a.createElement(h.b,{to:"".concat(e.url,"/toggle")},"Toggle button"))),s.a.createElement("b",null,"API Requests"),s.a.createElement("ol",null,s.a.createElement("li",null,s.a.createElement(h.b,{to:"".concat(e.url,"/safebooru")},"Safebooru")),s.a.createElement("li",null,s.a.createElement(h.b,{to:"".concat(e.url,"/github")},"GitHub")))),s.a.createElement("div",{className:"column middle"},s.a.createElement(d.c,null,s.a.createElement(d.a,{path:"".concat(e.path,"/hello")},s.a.createElement(E,null)),s.a.createElement(d.a,{path:"".concat(e.path,"/clock")},s.a.createElement(b,null)),s.a.createElement(d.a,{path:"".concat(e.path,"/toggle")},s.a.createElement(v,null)),s.a.createElement(d.a,{path:"".concat(e.path,"/safebooru")},s.a.createElement(y,null)),s.a.createElement(d.a,{path:"".concat(e.path,"/github")},s.a.createElement(w,null)),s.a.createElement(d.a,{path:e.path},s.a.createElement(I,null)))))}function N(){return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"column side"},s.a.createElement("b",null,"List Header"),s.a.createElement("ol",null,s.a.createElement("li",null,"there are no links here :]"))),s.a.createElement("div",{className:"column middle"},"A ReactJS web app that was made by me to practice ReactJS."))}function I(){return s.a.createElement("div",null,"Select something by clicking on the texts :)")}m.a.render(s.a.createElement(_,null),document.getElementById("ReactApp"))}},[[24,1,2]]]);
//# sourceMappingURL=main.7a4a2a23.chunk.js.map