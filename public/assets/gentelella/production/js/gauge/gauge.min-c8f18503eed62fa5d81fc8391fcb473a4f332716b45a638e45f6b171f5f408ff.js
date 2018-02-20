(function(){var t,i,e,o,n,s,a,r,h,l,p,u,c,d,g={}.hasOwnProperty,f=function(t,i){function e(){this.constructor=t}for(var o in i)g.call(i,o)&&(t[o]=i[o]);return e.prototype=i.prototype,t.prototype=new e,t.__super__=i.prototype,t};!function(){var t,i,e,o,n,s,a;for(e=0,n=(a=["ms","moz","webkit","o"]).length;n>e&&(s=a[e],!window.requestAnimationFrame);e++)window.requestAnimationFrame=window[s+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];t=null,o=0,i={},requestAnimationFrame?window.cancelAnimationFrame||(t=window.requestAnimationFrame,window.requestAnimationFrame=function(e,n){var s;return s=++o,t(function(){return i[s]?void 0:e()},n),s},window.cancelAnimationFrame=function(t){return i[t]=!0}):(window.requestAnimationFrame=function(t){var i,e,o,n;return i=(new Date).getTime(),n=Math.max(0,16-(i-o)),e=window.setTimeout(function(){return t(i+n)},n),o=i+n,e},window.cancelAnimationFrame=function(t){return clearTimeout(t)})}(),String.prototype.hashCode=function(){var t,i,e,o;if(t=0,0===this.length)return t;for(i=e=0,o=this.length;o>=0?o>e:e>o;i=o>=0?++e:--e)t=(t<<5)-t+this.charCodeAt(i),t&=t;return t},c=function(t){var i,e;for(t-=3600*(i=Math.floor(t/3600))+60*(e=Math.floor((t-3600*i)/60)),t+="",e+="";e.length<2;)e="0"+e;for(;t.length<2;)t="0"+t;return(i=i?i+":":"")+e+":"+t},p=function(t){return h(t.toFixed(0))},d=function(t,i){var e,o;for(e in i)g.call(i,e)&&(o=i[e],t[e]=o);return t},u=function(t,i){var e,o,n;for(e in o={},t)g.call(t,e)&&(n=t[e],o[e]=n);for(e in i)g.call(i,e)&&(n=i[e],o[e]=n);return o},h=function(t){var i,e,o,n;for(o=(e=(t+="").split("."))[0],n="",e.length>1&&(n="."+e[1]),i=/(\d+)(\d{3})/;i.test(o);)o=o.replace(i,"$1,$2");return o+n},l=function(t){return"#"===t.charAt(0)?t.substring(1,7):t},r=function(){function t(t,i){null==t&&(t=!0),this.clear=null==i||i,t&&AnimationUpdater.add(this)}return t.prototype.animationSpeed=32,t.prototype.update=function(t){var i;return null==t&&(t=!1),!(!t&&this.displayedValue===this.value)&&(this.ctx&&this.clear&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),i=this.value-this.displayedValue,Math.abs(i/this.animationSpeed)<=.001?this.displayedValue=this.value:this.displayedValue=this.displayedValue+i/this.animationSpeed,this.render(),!0)},t}(),e=function(){function t(){return t.__super__.constructor.apply(this,arguments)}return f(t,r),t.prototype.displayScale=1,t.prototype.setTextField=function(t){return this.textField=t instanceof a?t:new a(t)},t.prototype.setMinValue=function(t,i){var e,o,n,s,a;if(this.minValue=t,null==i&&(i=!0),i){for(this.displayedValue=this.minValue,a=[],o=0,n=(s=this.gp||[]).length;n>o;o++)e=s[o],a.push(e.displayedValue=this.minValue);return a}},t.prototype.setOptions=function(t){return null==t&&(t=null),this.options=u(this.options,t),this.textField&&(this.textField.el.style.fontSize=t.fontSize+"px"),this.options.angle>.5&&(this.gauge.options.angle=.5),this.configDisplayScale(),this},t.prototype.configDisplayScale=function(){var t,i,e,o,n;return o=this.displayScale,!1===this.options.highDpiSupport?delete this.displayScale:(i=window.devicePixelRatio||1,t=this.ctx.webkitBackingStorePixelRatio||this.ctx.mozBackingStorePixelRatio||this.ctx.msBackingStorePixelRatio||this.ctx.oBackingStorePixelRatio||this.ctx.backingStorePixelRatio||1,this.displayScale=i/t),this.displayScale!==o&&(n=this.canvas.G__width||this.canvas.width,e=this.canvas.G__height||this.canvas.height,this.canvas.width=n*this.displayScale,this.canvas.height=e*this.displayScale,this.canvas.style.width=n+"px",this.canvas.style.height=e+"px",this.canvas.G__width=n,this.canvas.G__height=e),this},t}(),a=function(){function t(t){this.el=t}return t.prototype.render=function(t){return this.el.innerHTML=p(t.displayedValue)},t}(),t=function(){function t(t,i){this.elem=t,this.text=null!=i&&i,this.value=1*this.elem.innerHTML,this.text&&(this.value=0)}return f(t,r),t.prototype.displayedValue=0,t.prototype.value=0,t.prototype.setVal=function(t){return this.value=1*t},t.prototype.render=function(){var t;return t=this.text?c(this.displayedValue.toFixed(0)):h(p(this.displayedValue)),this.elem.innerHTML=t},t}(),s=function(){function t(i){this.gauge=i,this.ctx=this.gauge.ctx,this.canvas=this.gauge.canvas,t.__super__.constructor.call(this,!1,!1),this.setOptions()}return f(t,r),t.prototype.displayedValue=0,t.prototype.value=0,t.prototype.options={strokeWidth:.035,length:.1,color:"#000000"},t.prototype.setOptions=function(t){return null==t&&(t=null),d(this.options,t),this.length=this.canvas.height*this.options.length,this.strokeWidth=this.canvas.height*this.options.strokeWidth,this.maxValue=this.gauge.maxValue,this.minValue=this.gauge.minValue,this.displayedValue=this.gauge.minValue,this.animationSpeed=this.gauge.animationSpeed,this.options.angle=this.gauge.options.angle},t.prototype.render=function(){var t,i,e,o,n,s,a,r,h;return t=this.gauge.getAngle.call(this,this.displayedValue),i=this.canvas.width/2,e=.9*this.canvas.height,r=Math.round(i+this.length*Math.cos(t)),h=Math.round(e+this.length*Math.sin(t)),s=Math.round(i+this.strokeWidth*Math.cos(t-Math.PI/2)),a=Math.round(e+this.strokeWidth*Math.sin(t-Math.PI/2)),o=Math.round(i+this.strokeWidth*Math.cos(t+Math.PI/2)),n=Math.round(e+this.strokeWidth*Math.sin(t+Math.PI/2)),this.ctx.fillStyle=this.options.color,this.ctx.beginPath(),this.ctx.arc(i,e,this.strokeWidth,0,2*Math.PI,!0),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(s,a),this.ctx.lineTo(r,h),this.ctx.lineTo(o,n),this.ctx.fill()},t}(),function(){function t(t){this.elem=t}t.prototype.updateValues=function(t){return this.value=t[0],this.maxValue=t[1],this.avgValue=t[2],this.render()},t.prototype.render=function(){var t,i;return this.textField&&this.textField.text(p(this.value)),0===this.maxValue&&(this.maxValue=2*this.avgValue),i=this.value/this.maxValue*100,t=this.avgValue/this.maxValue*100,$(".bar-value",this.elem).css({width:i+"%"}),$(".typical-value",this.elem).css({width:t+"%"})}}(),n=function(){function t(i){this.canvas=i,t.__super__.constructor.call(this),this.percentColors=null,"undefined"!=typeof G_vmlCanvasManager&&(this.canvas=window.G_vmlCanvasManager.initElement(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.gp=[new s(this)],this.setOptions(),this.render()}return f(t,e),t.prototype.elem=null,t.prototype.value=[20],t.prototype.maxValue=80,t.prototype.minValue=0,t.prototype.displayedAngle=0,t.prototype.displayedValue=0,t.prototype.lineWidth=40,t.prototype.paddingBottom=.1,t.prototype.percentColors=null,t.prototype.options={colorStart:"#6fadcf",colorStop:void 0,gradientType:0,strokeColor:"#e0e0e0",pointer:{length:.8,strokeWidth:.035},angle:.15,lineWidth:.44,fontSize:40,limitMax:!1},t.prototype.setOptions=function(i){var e,o,n,s;for(null==i&&(i=null),t.__super__.setOptions.call(this,i),this.configPercentColors(),this.lineWidth=this.canvas.height*(1-this.paddingBottom)*this.options.lineWidth,this.radius=this.canvas.height*(1-this.paddingBottom)-this.lineWidth,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.render(),o=0,n=(s=this.gp).length;n>o;o++)(e=s[o]).setOptions(this.options.pointer),e.render();return this},t.prototype.configPercentColors=function(){var t,i,e,o,n,s,a;if(this.percentColors=null,void 0!==this.options.percentColors){for(this.percentColors=new Array,s=[],e=o=0,n=this.options.percentColors.length-1;n>=0?n>=o:o>=n;e=n>=0?++o:--o)a=parseInt(l(this.options.percentColors[e][1]).substring(0,2),16),i=parseInt(l(this.options.percentColors[e][1]).substring(2,4),16),t=parseInt(l(this.options.percentColors[e][1]).substring(4,6),16),s.push(this.percentColors[e]={pct:this.options.percentColors[e][0],color:{r:a,g:i,b:t}});return s}},t.prototype.set=function(t){var i,e,o,n,a,r,h;if(this.displayedValue=this.minValue,t instanceof Array||(t=[t]),t.length>this.gp.length)for(i=e=0,r=t.length-this.gp.length;r>=0?r>e:e>r;i=r>=0?++e:--e)this.gp.push(new s(this));for(i=0,a=!1,o=0,n=t.length;n>o;o++)(h=t[o])>this.maxValue&&(this.maxValue=1.1*this.value,a=!0),this.gp[i].value=h,this.gp[i++].setOptions({maxValue:this.maxValue,angle:this.options.angle});return this.value=t[t.length-1],a&&this.options.limitMax?void 0:AnimationUpdater.run()},t.prototype.getAngle=function(t){return(1+this.options.angle)*Math.PI+(t-this.minValue)/(this.maxValue-this.minValue)*(1-2*this.options.angle)*Math.PI},t.prototype.getColorForPercentage=function(t,i){var e,o,n,s,a,r,h;if(0===t)e=this.percentColors[0].color;else for(e=this.percentColors[this.percentColors.length-1].color,n=s=0,r=this.percentColors.length-1;r>=0?r>=s:s>=r;n=r>=0?++s:--s)if(t<=this.percentColors[n].pct){!0===i?(h=this.percentColors[n-1],o=this.percentColors[n],a=(t-h.pct)/(o.pct-h.pct),e={r:Math.floor(h.color.r*(1-a)+o.color.r*a),g:Math.floor(h.color.g*(1-a)+o.color.g*a),b:Math.floor(h.color.b*(1-a)+o.color.b*a)}):e=this.percentColors[n].color;break}return"rgb("+[e.r,e.g,e.b].join(",")+")"},t.prototype.getColorForValue=function(t,i){var e;return e=(t-this.minValue)/(this.maxValue-this.minValue),this.getColorForPercentage(e,i)},t.prototype.render=function(){var t,i,e,o,n,s,a,r,h;for(h=this.canvas.width/2,o=this.canvas.height*(1-this.paddingBottom),t=this.getAngle(this.displayedValue),this.textField&&this.textField.render(this),this.ctx.lineCap="butt",void 0!==this.options.customFillStyle?i=this.options.customFillStyle(this):null!==this.percentColors?i=this.getColorForValue(this.displayedValue,!0):void 0!==this.options.colorStop?((i=0===this.options.gradientType?this.ctx.createRadialGradient(h,o,9,h,o,70):this.ctx.createLinearGradient(0,0,h,0)).addColorStop(0,this.options.colorStart),i.addColorStop(1,this.options.colorStop)):i=this.options.colorStart,this.ctx.strokeStyle=i,this.ctx.beginPath(),this.ctx.arc(h,o,this.radius,(1+this.options.angle)*Math.PI,t,!1),this.ctx.lineWidth=this.lineWidth,this.ctx.stroke(),this.ctx.strokeStyle=this.options.strokeColor,this.ctx.beginPath(),this.ctx.arc(h,o,this.radius,t,(2-this.options.angle)*Math.PI,!1),this.ctx.stroke(),r=[],n=0,s=(a=this.gp).length;s>n;n++)e=a[n],r.push(e.update(!0));return r},t}(),i=function(){function t(i){this.canvas=i,t.__super__.constructor.call(this),"undefined"!=typeof G_vmlCanvasManager&&(this.canvas=window.G_vmlCanvasManager.initElement(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.setOptions(),this.render()}return f(t,e),t.prototype.lineWidth=15,t.prototype.displayedValue=0,t.prototype.value=33,t.prototype.maxValue=80,t.prototype.minValue=0,t.prototype.options={lineWidth:.1,colorStart:"#6f6ea0",colorStop:"#c0c0db",strokeColor:"#eeeeee",shadowColor:"#d5d5d5",angle:.35},t.prototype.getAngle=function(t){return(1-this.options.angle)*Math.PI+(t-this.minValue)/(this.maxValue-this.minValue)*(2+this.options.angle-(1-this.options.angle))*Math.PI},t.prototype.setOptions=function(i){return null==i&&(i=null),t.__super__.setOptions.call(this,i),this.lineWidth=this.canvas.height*this.options.lineWidth,this.radius=this.canvas.height/2-this.lineWidth/2,this},t.prototype.set=function(t){return this.value=t,this.value>this.maxValue&&(this.maxValue=1.1*this.value),AnimationUpdater.run()},t.prototype.render=function(){var t,i,e,o;return t=this.getAngle(this.displayedValue),o=this.canvas.width/2,e=this.canvas.height/2,this.textField&&this.textField.render(this),(i=this.ctx.createRadialGradient(o,e,39,o,e,70)).addColorStop(0,this.options.colorStart),i.addColorStop(1,this.options.colorStop),this.radius-this.lineWidth/2,this.radius+this.lineWidth/2,this.ctx.strokeStyle=this.options.strokeColor,this.ctx.beginPath(),this.ctx.arc(o,e,this.radius,(1-this.options.angle)*Math.PI,(2+this.options.angle)*Math.PI,!1),this.ctx.lineWidth=this.lineWidth,this.ctx.lineCap="round",this.ctx.stroke(),this.ctx.strokeStyle=i,this.ctx.beginPath(),this.ctx.arc(o,e,this.radius,(1-this.options.angle)*Math.PI,t,!1),this.ctx.stroke()},t}(),o=function(){function t(){return t.__super__.constructor.apply(this,arguments)}return f(t,i),t.prototype.strokeGradient=function(t,i,e,o){var n;return(n=this.ctx.createRadialGradient(t,i,e,t,i,o)).addColorStop(0,this.options.shadowColor),n.addColorStop(.12,this.options._orgStrokeColor),n.addColorStop(.88,this.options._orgStrokeColor),n.addColorStop(1,this.options.shadowColor),n},t.prototype.setOptions=function(i){var e,o,n,s;return null==i&&(i=null),t.__super__.setOptions.call(this,i),s=this.canvas.width/2,e=this.canvas.height/2,o=this.radius-this.lineWidth/2,n=this.radius+this.lineWidth/2,this.options._orgStrokeColor=this.options.strokeColor,this.options.strokeColor=this.strokeGradient(s,e,o,n),this},t}(),window.AnimationUpdater={elements:[],animId:null,addAll:function(t){var i,e,o,n;for(n=[],e=0,o=t.length;o>e;e++)i=t[e],n.push(AnimationUpdater.elements.push(i));return n},add:function(t){return AnimationUpdater.elements.push(t)},run:function(){var t,i,e,o;for(t=!0,i=0,e=(o=AnimationUpdater.elements).length;e>i;i++)o[i].update()&&(t=!1);return t?cancelAnimationFrame(AnimationUpdater.animId):AnimationUpdater.animId=requestAnimationFrame(AnimationUpdater.run)}},"function"==typeof window.define&&null!=window.define.amd?define(function(){return{Gauge:n,Donut:o,BaseDonut:i,TextRenderer:a}}):"undefined"!=typeof module&&null!=module.exports?module.exports={Gauge:n,Donut:o,BaseDonut:i,TextRenderer:a}:(window.Gauge=n,window.Donut=o,window.BaseDonut=i,window.TextRenderer=a)}).call(this);