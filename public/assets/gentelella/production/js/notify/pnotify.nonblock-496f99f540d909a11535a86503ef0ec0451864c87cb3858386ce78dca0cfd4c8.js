!function(o){"function"==typeof define&&define.amd?define("pnotify.nonblock",["jquery","pnotify"],o):o(jQuery,PNotify)}(function(o,n){var e,t=/^on/,i=/^(dbl)?click$|^mouse(move|down|up|over|out|enter|leave)$|^contextmenu$/,c=/^(focus|blur|select|change|reset)$|^key(press|down|up)$/,s=/^(scroll|resize|(un)?load|abort|error)$/,l=function(n,e){var l;if(n=n.toLowerCase(),document.createEvent&&this.dispatchEvent){if((n=n.replace(t,"")).match(i)?(o(this).offset(),(l=document.createEvent("MouseEvents")).initMouseEvent(n,e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget)):n.match(c)?(l=document.createEvent("UIEvents")).initUIEvent(n,e.bubbles,e.cancelable,e.view,e.detail):n.match(s)&&(l=document.createEvent("HTMLEvents")).initEvent(n,e.bubbles,e.cancelable),!l)return;this.dispatchEvent(l)}else n.match(t)||(n="on"+n),l=document.createEventObject(e),this.fireEvent(n,l)},a=function(n,t,i){n.elem.css("display","none");var c=document.elementFromPoint(t.clientX,t.clientY);n.elem.css("display","block");var s=o(c),a=s.css("cursor");n.elem.css("cursor","auto"!==a?a:"default"),e&&e.get(0)==c||(e&&(l.call(e.get(0),"mouseleave",t.originalEvent),l.call(e.get(0),"mouseout",t.originalEvent)),l.call(c,"mouseenter",t.originalEvent),l.call(c,"mouseover",t.originalEvent)),l.call(c,i,t.originalEvent),e=s};n.prototype.options.nonblock={nonblock:!1,nonblock_opacity:.2},n.prototype.modules.nonblock={myOptions:null,init:function(o,n){var t=this;this.myOptions=n,o.elem.on({mouseenter:function(n){t.myOptions.nonblock&&n.stopPropagation(),t.myOptions.nonblock&&o.elem.stop().animate({opacity:t.myOptions.nonblock_opacity},"fast")},mouseleave:function(n){t.myOptions.nonblock&&n.stopPropagation(),e=null,o.elem.css("cursor","auto"),t.myOptions.nonblock&&"out"!==o.animating&&o.elem.stop().animate({opacity:o.options.opacity},"fast")},mouseover:function(o){t.myOptions.nonblock&&o.stopPropagation()},mouseout:function(o){t.myOptions.nonblock&&o.stopPropagation()},mousemove:function(n){t.myOptions.nonblock&&(n.stopPropagation(),a(o,n,"onmousemove"))},mousedown:function(n){t.myOptions.nonblock&&(n.stopPropagation(),n.preventDefault(),a(o,n,"onmousedown"))},mouseup:function(n){t.myOptions.nonblock&&(n.stopPropagation(),n.preventDefault(),a(o,n,"onmouseup"))},click:function(n){t.myOptions.nonblock&&(n.stopPropagation(),a(o,n,"onclick"))},dblclick:function(n){t.myOptions.nonblock&&(n.stopPropagation(),a(o,n,"ondblclick"))}})},update:function(o,n){this.myOptions=n}}});