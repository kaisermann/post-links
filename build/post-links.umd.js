!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.PostLinks=t()}(this,function(){var e,t=!1,n=function(e,t){void 0===t&&(t={});var n=document.createElement(e.toUpperCase());return Object.keys(t).forEach(function(e){n[e]=t[e]}),n},o=function(e){e.preventDefault(),i(this.href,this.dataset,this.getAttribute("target")||"")},i=function(o,i,a){void 0===a&&(a=""),t||d(),e.action=o,e.target=a;var r=Object.keys(i),s=e.childNodes;for(r.forEach(function(t,o){var d=s[o];d||(d=n("input",{type:"hidden"}),e.appendChild(d)),d.name=t,d.value=i[t]});s[r.length];)e.removeChild(s[r.length]);e.submit()},d=function(){t=!0,e=n("form",{method:"post",name:"post-links",style:"display: none;"}),document.body.appendChild(e)};return{seek:function(){for(var e=document.getElementsByTagName("a"),t=e.length;t--;){var n=e[t];"post"!==n.getAttribute("method")||n.postLink||(n.postLink=1,n.addEventListener("click",o))}},open:i}});
//# sourceMappingURL=post-links.umd.js.map
