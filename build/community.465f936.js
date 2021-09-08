webpackJsonp([0],{0:function(e,t){e.exports=React},3:function(e,t){e.exports=ReactDOM},69:function(e,t,n){e.exports=n(70)},70:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=n(0),c=i(u),s=n(3),f=i(s),g=n(7),m=i(g),d=n(9),h=i(d),p=n(10),b=i(p),y=n(17),v=i(y),E=n(71),k=i(E),_=n(73),w=i(_),j=n(74),C=i(j),O=n(75),M=i(O),S=n(76),q=i(S),x=n(77),N=i(x);n(78);var z=function(e){function t(){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),a(t,[{key:"render",value:function(){var e=this.getLanguage(),t=N.default[e];return c.default.createElement("div",{className:"community-page"},c.default.createElement(h.default,{currentKey:"community",type:"normal",logo:"/img/dubbo_colorful.png",language:e,onLanguageChange:this.onLanguageChange}),c.default.createElement(v.default,{img:"/img/system/community.png",text:t.barText}),c.default.createElement("section",{className:"events-section"},c.default.createElement("h3",null,t.events.title),c.default.createElement(k.default,null,t.events.list.map(function(e,t){return c.default.createElement(w.default,{event:e,key:t})}))),c.default.createElement("section",{className:"eco-section"},c.default.createElement("h3",null,t.ecos.title),c.default.createElement("div",{className:"eco-lists"},t.ecos.list.map(function(e,t){return c.default.createElement(q.default,{eco:e,key:t})}))),c.default.createElement("section",{className:"contact-section"},c.default.createElement("h3",null,t.contacts.title),c.default.createElement("p",null,t.contacts.desc),c.default.createElement("div",{className:"contact-list"},t.contacts.list.map(function(e,t){return c.default.createElement(C.default,{contact:e,key:t})}))),c.default.createElement("section",{className:"contributor-section"},c.default.createElement("h3",null,t.contributorGuide.title),c.default.createElement("p",null,t.contributorGuide.desc),c.default.createElement("div",{className:"contributor-list"},t.contributorGuide.list.map(function(e,t){return c.default.createElement(M.default,{contributor:e,key:t})}))),c.default.createElement(b.default,{logo:"/img/dubbo_gray.png",language:e}))}}]),t}(m.default);document.getElementById("root")&&f.default.render(c.default.createElement(z,null),document.getElementById("root")),t.default=z},71:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=n(0),s=i(c),f=n(3),g=i(f),m=n(5),d=n(6),h=i(d),p=n(2);n(72);var b=(0,m.autobind)(a=function(e){function t(e){l(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.container=null,n.state={screenIndex:0,visibleNum:1},n}return o(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;this.throttleAdjust=(0,p.throttle)(function(){e.setState({visibleNum:e.getVisibleNum()})},200),window.addEventListener("resize",this.throttleAdjust),this.setState({visibleNum:this.getVisibleNum()})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.throttleAdjust)}},{key:"getVisibleNum",value:function(){var e=1,t=this.container.getBoundingClientRect().width,n=this.sliderItemChild0.getBoundingClientRect?this.sliderItemChild0.getBoundingClientRect().width:g.default.findDOMNode(this.sliderItemChild0).getBoundingClientRect().width;return t&&n&&(e=Math.floor(t/n)),e||1}},{key:"getListWidth",value:function(){var e=0,t=this.props.children,n=this.state.visibleNum,i=s.default.Children.count(t),l=Math.ceil(i/n);if(this.container){e=this.container.getBoundingClientRect().width*l}return e}},{key:"changeScreen",value:function(e){e!==this.state.screenIndex&&this.setState({screenIndex:e})}},{key:"renderSliderList",value:function(){for(var e=this,t=this.props.children,n=this.state,i=n.screenIndex,l=n.visibleNum,r=[],o=s.default.Children.count(t),a=Math.ceil(o/l),u=0;u<a;u++)r.push(Array.from(t).slice(u*l,(u+1)*l));return s.default.createElement("div",{className:"slider-list",style:{transform:"translateX(-"+i*(this.container&&this.container.getBoundingClientRect().width||0)+"px)",transition:"transform 500ms ease",width:this.getListWidth()}},r.map(function(t,n){return s.default.createElement("div",{className:"slider-screen",style:{width:e.container&&e.container.getBoundingClientRect().width||0},key:n,ref:function(t){e["sliderScreen"+n]=t}},t.map(function(t,i){return s.default.createElement("div",{className:"slider-item",key:i},s.default.cloneElement(t,{ref:function(t){e["sliderItemChild"+(n*l+i)]=t}}))}))}))}},{key:"renderControl",value:function(){for(var e=this.props.children,t=this.state,n=t.screenIndex,i=t.visibleNum,l=s.default.Children.count(e),r=Math.ceil(l/i),o=[],a=0;a<r;a++)o.push(s.default.createElement("span",{key:a,className:(0,h.default)({"slider-control-item":!0,"slider-control-item-active":a===n}),onClick:this.changeScreen.bind(this,a)}));return s.default.createElement("div",{className:"slider-control"},o)}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"slider",ref:function(t){e.container=t}},this.renderSliderList(),this.renderControl())}}]),t}(s.default.Component))||a;t.default=b},72:function(e,t){},73:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(a),c=n(2),s=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),o(t,[{key:"render",value:function(){var e=this.props.event;return u.default.createElement("div",{className:"event-card"},u.default.createElement("a",{href:(0,c.getLink)(e.link),target:e.target||"_self"},u.default.createElement("img",{src:(0,c.getLink)(e.img)})),u.default.createElement("div",{className:"event-introduction"},u.default.createElement("h4",null,e.title),u.default.createElement("p",null,e.content),u.default.createElement("a",{href:(0,c.getLink)(e.link),target:e.target||"_self"},e.dateStr,u.default.createElement("img",{className:"arrow",src:(0,c.getLink)("/img/system/arrow_right.png")}))))}}]),t}(u.default.Component);t.default=s},74:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=n(0),c=function(e){return e&&e.__esModule?e:{default:e}}(u),s=n(5),f=n(2),g=(0,s.autobind)(o=function(e){function t(e){i(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={img:e.contact.img},n}return r(t,e),a(t,[{key:"onMouseOver",value:function(){this.setState({img:this.props.contact.imgHover})}},{key:"onMouseOut",value:function(){this.setState({img:this.props.contact.img})}},{key:"render",value:function(){var e=this.props.contact,t=this.state.img;return c.default.createElement("a",{className:"contact-item",href:(0,f.getLink)(e.link),target:e.target||"_self",onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut},c.default.createElement("img",{src:(0,f.getLink)(t)}),c.default.createElement("div",null,e.title))}}]),t}(c.default.Component))||o;t.default=g},75:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),r=n(2),o=function(e){var t=e.contributor,n=t.img,i=t.title,o=t.content;return l.default.createElement("div",{className:"contributor-item"},l.default.createElement("img",{src:(0,r.getLink)(n)}),l.default.createElement("div",null,i),l.default.createElement("p",null,o))};t.default=o},76:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),r=n(2),o=function(e){var t=e.eco;return l.default.createElement("div",{className:"eco-item"},l.default.createElement("h4",null,t.title),l.default.createElement("p",null,t.content),l.default.createElement("div",{className:"tags"},t.tags.map(function(e,t){return l.default.createElement("a",{key:t,href:(0,r.getLink)(e.link),target:e.target||"_self",style:{background:e.bgColor}},e.text)})))};t.default=o},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default={"en-us":{barText:"Community",events:{title:"Events & News",list:[{img:"/img/brhtqqzh.jpeg",title:"this is the title",content:"this is the content",dateStr:"May 12nd，2018",link:"/en-us/blog/blog1.html"},{img:"/img/brhtqqzh.jpeg",title:"this is the title",content:"this is the content",dateStr:"May 12nd，2018",link:"/en-us/blog/blog2.html"},{img:"/img/brhtqqzh.jpeg",title:"this is the title",content:"this is the content",dateStr:"May 12nd，2018",link:"/en-us/blog/blog3.html"},{img:"/img/brhtqqzh.jpeg",title:"this is the title",content:"this is the content",dateStr:"May 12nd，2018",link:"/en-us/blog/blog4.html"},{img:"/img/brhtqqzh.jpeg",title:"this is the title",content:"this is the content",dateStr:"May 12nd，2018",link:"/en-us/blog/blog5.html"},{img:"/img/brhtqqzh.jpeg",title:"this is the title",content:"this is the content",dateStr:"May 12nd，2018",link:"/en-us/blog/blog6.html"},{img:"/img/brhtqqzh.jpeg",title:"this is the title",content:"this is the content",dateStr:"May 12nd，2018",link:"/en-us/blog/blog7.html"}]},contacts:{title:"Talk To Us",desc:"Feel free to contact us via the following channel.",list:[{img:"/img/mailinglist.png",imgHover:"/img/mailinglist_hover.png",title:"Mailing List",link:""},{img:"/img/alibaba.png",imgHover:"/img/alibaba_hover.png",title:"gitter",link:""},{img:"/img/segmentfault.png",imgHover:"/img/segmentfault_hover.png",title:"Segment Fault",link:""},{img:"/img/weibo.png",imgHover:"/img/weibo_hover.png",title:"weibo",link:""}]},contributorGuide:{title:"Contributor Guide",desc:"some description",list:[{img:"/img/mailinglist.png",title:"Mailing List",content:l.default.createElement("span",null,"this is the content")},{img:"/img/issue.png",title:"Issue",content:l.default.createElement("span",null,"this is the content")},{img:"/img/documents.png",title:"Documents",content:l.default.createElement("span",null,"this is the content")},{img:"/img/pullrequest.png",title:"Pull Request",content:l.default.createElement("span",null,"this is the content")}]},ecos:{title:"Eco System",list:[{title:"Eco1",content:l.default.createElement("span",null,"Eco System1"),tags:[{text:"tag1",link:"",bgColor:"#7A63FC"},{text:"tag2",link:"",bgColor:"#00D0D9"},{text:"tag3",link:"",bgColor:"#00D0D9"}]},{title:"Eco2",content:l.default.createElement("span",null,"Eco System2"),tags:[{text:"tag1",link:"",bgColor:"#7A63FC"},{text:"tag2",link:"",bgColor:"#00D0D9"},{text:"tag3",link:"/en-us/docs/demo1.html",bgColor:"#00D0D9"},{text:"tag4",link:"",bgColor:"#00D0D9"}]}]}},"zh-cn":{barText:"社区",events:{title:"事件 & 新闻",list:[{img:"/img/brhtqqzh.jpeg",title:"这是标题",content:"这是内容",dateStr:"May 12nd，2018",link:"/zh-cn/blog/blog1.html"},{img:"/img/brhtqqzh.jpeg",title:"这是标题",content:"这是内容",dateStr:"May 12nd，2018",link:"/zh-cn/blog/blog2.html"},{img:"/img/brhtqqzh.jpeg",title:"这是标题",content:"这是内容",dateStr:"May 12nd，2018",link:"/zh-cn/blog/blog3.html"},{img:"/img/brhtqqzh.jpeg",title:"这是标题",content:"这是内容",dateStr:"May 12nd，2018",link:"/zh-cn/blog/blog4.html"},{img:"/img/brhtqqzh.jpeg",title:"这是标题",content:"这是内容",dateStr:"May 12nd，2018",link:"/zh-cn/blog/blog5.html"},{img:"/img/brhtqqzh.jpeg",title:"这是标题",content:"这是内容",dateStr:"May 12nd，2018",link:"/zh-cn/blog/blog6.html"},{img:"/img/brhtqqzh.jpeg",title:"这是标题",content:"这是内容",dateStr:"May 12nd，2018",link:"/zh-cn/blog/blog7.html"}]},contacts:{title:"联系我们",desc:"有问题需要反馈？请通过一下方式联系我们。",list:[{img:"/img/mailinglist.png",imgHover:"/img/mailinglist_hover.png",title:"邮件列表",link:""},{img:"/img/alibaba.png",imgHover:"/img/alibaba_hover.png",title:"gitter",link:""},{img:"/img/segmentfault.png",imgHover:"/img/segmentfault_hover.png",title:"Segment Fault",link:""},{img:"/img/weibo.png",imgHover:"/img/weibo_hover.png",title:"微博",link:""}]},contributorGuide:{title:"贡献指南",desc:"一些描述",list:[{img:"/img/mailinglist.png",title:"邮件列表",content:l.default.createElement("span",null,"这是描述")},{img:"/img/issue.png",title:"报告缺陷",content:l.default.createElement("span",null,"这是描述")},{img:"/img/documents.png",title:"文档",content:l.default.createElement("span",null,"这是描述")},{img:"/img/pullrequest.png",title:"Pull Request",content:l.default.createElement("span",null,"这是描述")}]},ecos:{title:"生态系统",list:[{title:"生态系统1",content:l.default.createElement("span",null,"生态系统1"),tags:[{text:"标签1",link:"",bgColor:"#7A63FC"},{text:"标签2",link:"",bgColor:"#00D0D9"},{text:"标签3",link:"",bgColor:"#00D0D9"}]},{title:"生态系统2",content:l.default.createElement("span",null,"生态系统2"),tags:[{text:"标签1",link:"",bgColor:"#7A63FC"},{text:"标签2",link:"",bgColor:"#00D0D9"},{text:"标签3",link:"/zh-cn/docs/demo1.html",bgColor:"#00D0D9"},{text:"标签4",link:"",bgColor:"#00D0D9"}]}]}}}},78:function(e,t){}},[69]);