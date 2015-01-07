var temp=5,csshelper=void 0,openLeft,openRight,getStyleRuleValue=function(t,e,r){for(var a="undefined"!=typeof r?[r]:document.styleSheets,o=0,i=a.length;i>o;o++)try{var p=a[o],s=p.rules||p.cssRules;if(void 0===p||void 0===s)continue;for(var n=0,l=s.length;l>n;n++){var d=s[n];if(d.selectorText&&-1!==d.selectorText.split(",").indexOf(e))return d.style[t]}}catch(c){if("SecurityError"!==c.name)throw c;return}return null};!function(t){t.fn.extend({beforeAfter:function(e){var r={animateIntro:!1,introDelay:1e3,introDuration:1e3,introPosition:.5,showFullLinks:!0,beforeLinkText:"Show only before",afterLinkText:"Show only after",imagePath:"./js/",handleImagePath:"https://dl.dropboxusercontent.com/u/1035381/ref/js/beforeafter/handle.gif",cursor:"pointer",clickSpeed:600,linkDisplaySpeed:200,dividerColor:"#888",enableKeyboard:!0,keypressAmount:20,onReady:function(){}},e=t.extend(r,e),a=Math.round(1e8*Math.random()),o="10px",i=10;return this.each(function(){function r(){t("#lt-arrow"+a+", #rt-arrow"+a).stop().css("opacity",0);var e=parseFloat(t(this).css("left")),r=parseFloat(F),p=e+r;y.width(p+"px"),t("#lt-arrow"+a).stop().css({"z-index":"20",position:"absolute",top:x/2-t("#lt-arrow"+a).height()/2+"px",opacity:"1",left:parseFloat(t("#dragwrapper"+a).css("left"))-i-o+"px"}),t("#rt-arrow"+a).stop().css({position:"absolute",top:x/2-t("#lt-arrow"+a).height()/2+"px",opacity:"1",left:parseFloat(t("#dragwrapper"+a).css("left"))+parseFloat(v)+i-o+"px"})}function p(){t(n).hover(function(){t("#lt-arrow"+a).stop().css({"z-index":"20",position:"absolute",top:x/2-t("#lt-arrow"+a).height()/2+"px",left:parseFloat(t("#dragwrapper"+a).css("left"))-i+"px"}).animate({opacity:1,left:parseFloat(t("#lt-arrow"+a).css("left"))-o+"px"},200),t("#rt-arrow"+a).stop().css({position:"absolute",top:x/2-t("#lt-arrow"+a).height()/2+"px",left:parseFloat(t("#dragwrapper"+a).css("left"))+parseFloat(v)+i-o+"px"}).animate({opacity:1,left:parseFloat(t("#rt-arrow"+a).css("left"))+o+"px"},200),t("#dragwrapper"+a).animate({opacity:1},200)},function(){t("#lt-arrow"+a).animate({opacity:0,left:parseFloat(t("#lt-arrow"+a).css("left"))-o+"px"},350),t("#rt-arrow"+a).animate({opacity:0,left:parseFloat(t("#rt-arrow"+a).css("left"))+o+"px"},350),t("#dragwrapper"+a).animate({opacity:.25},350)}),t(n).one("mousemove",function(){t("#dragwrapper"+a).stop().animate({opacity:1},500)})}var s=e,n=t(this),l=t("div.before",n),d=t("div.after",n),c=l.width(),h=parseFloat(c),f=.8,w=10,g=(h+h*f-w)/2,u=(h*(1-f)+w)/2,x=l.height();d.height()>x&&(x=d.height()),t(n).width(c).height(x).css({overflow:"hidden",position:"relative",padding:"0"}),l.wrap('<div id="before_container_'+a+'">'),d.wrap('<div id="after_container_'+a+'">');var y=t("div#before_container_"+a,n),m=t("div#after_container_"+a,n);y.width(c);var v=20,F=parseFloat(v)/2+"px",b=12,k=parseFloat(b)/2+"px",P=(h*s.introPosition-parseFloat(k)+"px",h*s.introPosition-parseFloat(F)+"px"),S="45vh";t(n).prepend('<div id="dragwrapper'+a+'"><div id="drag'+a+'"><div id="draghandle'+a+'" class="drag_handle"></div></div></div>'),t("#dragwrapper"+a).css({opacity:.25,position:"fixed",padding:"0",left:P,"z-index":"20"}).width(v).height(x),y.height(x).width(h*s.introPosition).css({position:"absolute",overflow:"hidden",left:"0px","z-index":"10"}),d.height(x).width(h).css({position:"absolute",overflow:"hidden",right:"0px"}),t("#drag"+a).width(2).height(x).css({background:s.dividerColor,position:"absolute",left:F}),y.css({position:"absolute",top:"0px",left:"0px"}),m.css({position:"absolute",top:"0px",right:"0px"}),t("#draghandle"+a).css({"z-index":"100",cursor:s.cursor,position:"relative",top:S,left:"-"+k}),void 0!==s.ltImagePath&&t(n).append('<img src="'+s.ltImagePath+'" class="drag_arrow" id="lt-arrow'+a+'">'),void 0!==s.rtImagePath&&t(n).append('<img src="'+s.rtImagePath+'" class="drag_arrow" id="rt-arrow'+a+'">'),openLeft=function(){y.animate({width:g},s.linkDisplaySpeed),t("#dragwrapper"+a).animate({left:g},s.linkDisplaySpeed)},openRight=function(){y.animate({width:u},s.linkDisplaySpeed),t("#dragwrapper"+a).animate({left:u},s.linkDisplaySpeed)},s.enableKeyboard&&t(document).keydown(function(e){39==e.keyCode&&(parseFloat(t("#dragwrapper"+a).css("left"))+s.keypressAmount<=g?(t("#dragwrapper"+a).css("left",parseFloat(t("#dragwrapper"+a).css("left"))+s.keypressAmount+"px"),y.width(parseFloat(y.width())+s.keypressAmount+"px")):(t("#dragwrapper"+a).css("left",g+"px"),y.width(g+"px"))),37==e.keyCode&&(parseFloat(t("#dragwrapper"+a).css("left"))-s.keypressAmount>=u?(t("#dragwrapper"+a).css("left",parseFloat(t("#dragwrapper"+a).css("left"))-s.keypressAmount+"px"),y.width(parseFloat(y.width())-s.keypressAmount+"px")):(t("#dragwrapper"+a).css("left",u+"px"),y.width(u+"px")))}),t("#dragwrapper"+a).draggable({containment:n,drag:r,stop:r}),s.animateIntro?(t("#dragwrapper"+a).css("left",h-t("#dragwrapper"+a).width()/2+"px"),setTimeout(function(){t("#dragwrapper"+a).css({opacity:1}).animate({left:h*s.introPosition-t("#dragwrapper"+a).width()/2+"px"},s.introDuration,function(){t("#dragwrapper"+a).animate({opacity:.25},1e3)}),y.width(c).animate({width:h*s.introPosition+"px"},s.introDuration,function(){p(),s.onReady.call(this)})},s.introDelay)):(p(),s.onReady.call(this))})}})}(jQuery);