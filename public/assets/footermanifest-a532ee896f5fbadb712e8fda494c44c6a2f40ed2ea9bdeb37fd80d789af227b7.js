function countChecked(){"check_all"==check_state&&$(".bulk_action input[name='table_records']").iCheck("check"),"uncheck_all"==check_state&&$(".bulk_action input[name='table_records']").iCheck("uncheck");var t=$(".bulk_action input[name='table_records']:checked").length;t>0?($(".column-title").hide(),$(".bulk-actions").show(),$(".action-cnt").html(t+" Records Selected")):($(".column-title").show(),$(".bulk-actions").hide())}var URL=window.location,$BODY=$("body"),$MENU_TOGGLE=$("#menu_toggle"),$SIDEBAR_MENU=$("#sidebar-menu"),$SIDEBAR_FOOTER=$(".sidebar-footer"),$LEFT_COL=$(".left_col"),$RIGHT_COL=$(".right_col"),$NAV_MENU=$(".nav_menu"),$FOOTER=$("footer");if($(function(){var t=function(){$RIGHT_COL.css("min-height",$(window).height());var t=$BODY.height(),e=$LEFT_COL.eq(1).height()+$SIDEBAR_FOOTER.height(),n=t<e?e:t;n-=$NAV_MENU.height()+$FOOTER.height(),$RIGHT_COL.css("min-height",n)};$SIDEBAR_MENU.find("a").on("click",function(){var e=$(this).parent();e.is(".active")?(e.removeClass("active"),$("ul:first",e).slideUp(function(){t()})):(e.parent().is(".child_menu")||($SIDEBAR_MENU.find("li").removeClass("active"),$SIDEBAR_MENU.find("li ul").slideUp()),e.addClass("active"),$("ul:first",e).slideDown(function(){t()}))}),$MENU_TOGGLE.on("click",function(){$BODY.hasClass("nav-md")?($BODY.removeClass("nav-md").addClass("nav-sm"),$LEFT_COL.removeClass("scroll-view").removeAttr("style"),$SIDEBAR_MENU.find("li").hasClass("active")&&$SIDEBAR_MENU.find("li.active").addClass("active-sm").removeClass("active")):($BODY.removeClass("nav-sm").addClass("nav-md"),$SIDEBAR_MENU.find("li").hasClass("active-sm")&&$SIDEBAR_MENU.find("li.active-sm").addClass("active").removeClass("active-sm")),t()}),$SIDEBAR_MENU.find('a[href="'+URL+'"]').parent("li").addClass("current-page"),$SIDEBAR_MENU.find("a").filter(function(){return this.href==URL}).parent("li").addClass("current-page").parents("ul").slideDown(function(){t()}).parent().addClass("active"),$(window).smartresize(function(){t()})}),$(function(){$(".collapse-link").on("click",function(){var t=$(this).closest(".x_panel"),e=$(this).find("i"),n=t.find(".x_content");t.attr("style")?n.slideToggle(200,function(){t.removeAttr("style")}):(n.slideToggle(200),t.css("height","auto")),e.toggleClass("fa-chevron-up fa-chevron-down")}),$(".close-link").click(function(){$(this).closest(".x_panel").remove()})}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),$(".progress .progress-bar")[0]&&$(".progress .progress-bar").progressbar(),$(".js-switch")[0]){var elems=Array.prototype.slice.call(document.querySelectorAll(".js-switch"));elems.forEach(function(t){new Switchery(t,{color:"#26B99A"})})}$("input.flat")[0]&&$(document).ready(function(){$("input.flat").iCheck({checkboxClass:"icheckbox_flat-green",radioClass:"iradio_flat-green"})});var __slice=[].slice;!function(t){var e;e=function(){function e(e,n){var i,s,a=this;for(i in this.options=t.extend({},this.defaults,n),this.$el=e,s=this.defaults)s[i],null!==this.$el.data(i)&&(this.options[i]=this.$el.data(i));this.createStars(),this.syncRating(),this.$el.on("mouseover.starrr","span",function(t){return a.syncRating(a.$el.find("span").index(t.currentTarget)+1)}),this.$el.on("mouseout.starrr",function(){return a.syncRating()}),this.$el.on("click.starrr","span",function(t){return a.setRating(a.$el.find("span").index(t.currentTarget)+1)}),this.$el.on("starrr:change",this.options.change)}return e.prototype.defaults={rating:void 0,numStars:5,change:function(){}},e.prototype.createStars=function(){var t,e,n;for(n=[],t=1,e=this.options.numStars;1<=e?t<=e:t>=e;1<=e?t++:t--)n.push(this.$el.append("<span class='glyphicon .glyphicon-star-empty'></span>"));return n},e.prototype.setRating=function(t){return this.options.rating===t&&(t=void 0),this.options.rating=t,this.syncRating(),this.$el.trigger("starrr:change",t)},e.prototype.syncRating=function(t){var e,n,i,s;if(t||(t=this.options.rating),t)for(e=n=0,s=t-1;0<=s?n<=s:n>=s;e=0<=s?++n:--n)this.$el.find("span").eq(e).removeClass("glyphicon-star-empty").addClass("glyphicon-star");if(t&&t<5)for(e=i=t;t<=4?i<=4:i>=4;e=t<=4?++i:--i)this.$el.find("span").eq(e).removeClass("glyphicon-star").addClass("glyphicon-star-empty");if(!t)return this.$el.find("span").removeClass("glyphicon-star").addClass("glyphicon-star-empty")},e}(),t.fn.extend({starrr:function(){var n,i;return i=arguments[0],n=2<=arguments.length?__slice.call(arguments,1):[],this.each(function(){var s;if((s=t(this).data("star-rating"))||t(this).data("star-rating",s=new e(t(this),i)),"string"==typeof i)return s[i].apply(s,n)})}})}(window.jQuery,window),$(function(){return $(".starrr").starrr()}),$(document).ready(function(){$("#stars").on("starrr:change",function(t,e){$("#count").html(e)}),$("#stars-existing").on("starrr:change",function(t,e){$("#count-existing").html(e)})}),$("table input").on("ifChecked",function(){check_state="",$(this).parent().parent().parent().addClass("selected"),countChecked()}),$("table input").on("ifUnchecked",function(){check_state="",$(this).parent().parent().parent().removeClass("selected"),countChecked()});var check_state="";$(".bulk_action input").on("ifChecked",function(){check_state="",$(this).parent().parent().parent().addClass("selected"),countChecked()}),$(".bulk_action input").on("ifUnchecked",function(){check_state="",$(this).parent().parent().parent().removeClass("selected"),countChecked()}),$(".bulk_action input#check-all").on("ifChecked",function(){check_state="check_all",countChecked()}),$(".bulk_action input#check-all").on("ifUnchecked",function(){check_state="uncheck_all",countChecked()}),$(function(){$(".expand").on("click",function(){$(this).next().slideToggle(200),$expand=$(this).find(">:first-child"),"+"==$expand.text()?$expand.text("-"):$expand.text("+")})}),"undefined"!=typeof NProgress&&($(document).ready(function(){NProgress.start()}),$(window).load(function(){NProgress.done()})),function(t,e){var n=function(t,e,n){var i;return function(){function s(){n||t.apply(a,c),i=null}var a=this,c=arguments;i?clearTimeout(i):n&&t.apply(a,c),i=setTimeout(s,e||100)}};jQuery.fn[e]=function(t){return t?this.bind("resize",n(t)):this.trigger(e)}}(jQuery,"smartresize");