function e(){if(jQuery(".butterBar").length>0){jQuery(".butterBar").remove()}}function t(e){var t=this;t.clearButterbar();jQuery("body").append('<div class="butterBar butterBar--center is-active"><p class="butterBar-message">'+e+"</p></div>");setTimeout("jQuery('.butterBar').remove()",3e3)}jQuery(document).ready(function(e){if(suxingme_url.duang){e(window).on("load",function(){e(".loader").fadeOut();e(".loader-mask").delay(350).fadeOut("slow")})}if(suxingme_url.sideroll){jQuery(".sidebar").theiaStickySidebar({additionalMarginTop:110})}if(suxingme_url.wow){var a=new WOW({boxClass:"wow",animateClass:"animated",offset:100,mobile:true,live:true});a.init()}e("div.navbar-fixed-top").autoHidingNavbar();switch(suxingme_url.slidestyle){case"index_slide_sytle_1":var o=e(".top-slide");o.owlCarousel({items:1,loop:true,animateOut:"fadeOut",autoplay:true,autoplayTimeout:3e3,responsive:{768:{items:1,nav:false}}});break;case"index_slide_sytle_2":var o=e(".top-slide-two");o.owlCarousel({items:1,loop:true,animateOut:"fadeOut",autoplay:true,autoplayTimeout:3e3,nav:true,navText:"",responsive:{768:{items:1,nav:false},992:{nav:true,navText:""}}});break;case"index_slide_sytle_3":var o=e(".top-slide-three");o.owlCarousel({items:1,loop:true,margin:10,autoplay:true,responsive:{768:{items:1,margin:0,nav:false},992:{items:3,margin:0,center:true,autoplayTimeout:5e3,autoWidth:true,nav:true,navText:""}}});break;case"index_slide_sytle_4":var o=e(".top-slide-two");o.owlCarousel({items:1,loop:true,animateOut:"fadeOut",autoplay:true,autoplayTimeout:3e3,nav:true,navText:"",responsive:{768:{items:1,nav:false},992:{nav:true,navText:""}}});break;default:break}$body=window.opera?document.compatMode=="CSS1Compat"?e("html"):e("body"):e("html,body");e(document).on("click","#comments-navi a",function(t){t.preventDefault();e.ajax({type:"GET",url:e(this).attr("href"),beforeSend:function(){e("#comments-navi").remove();e(".commentlist").remove();e("#loading-comments").slideDown()},dataType:"html",success:function(t){result=e(t).find(".commentlist");nextlink=e(t).find("#comments-navi");e("#loading-comments").slideUp(550);e("#loading-comments").after(result.fadeIn(800));e(".commentlist").after(nextlink);e(".commentlist .avatar").lazyload({event:"scrollstop"})}})});e.fn.postLike=function(){if(e(this).hasClass("current")){t("您已经赞过啦:-)");return false}else{e(this).addClass("current");var a=e(this).data("id"),o=e(this).data("action"),i=e(this).children(".count");var n={action:"suxing_like",um_id:a,um_action:o};e.post(suxingme_url.url_ajax,n,function(t){e(i).html(t)});return false}};e(document).on("click","#Addlike",function(){e(this).postLike()});e(".js-toggle-search").on("click",function(){e(".search-form").toggleClass("is-visible");e("html").addClass("overflow-hidden")});e(".close-search").click(function(){e(".search-form").removeClass("is-visible");e("html").removeClass("overflow-hidden")});e("#tooltip-s-weixin").on("click",function(){e(".f-weixin-dropdown").toggleClass("is-visible")});e("#tooltip-f-weixin").on("click",function(){e(".f-weixin-dropdown").toggleClass("is-visible")});e(".close-weixin").on("click",function(){e(".f-weixin-dropdown").removeClass("is-visible")});!function(e){"use strict";e.fn.toTop=function(t){var a=this,o=e(window),i=e("html, body"),n=e.extend({autohide:!0,offset:420,speed:500,position:!0,right:38,bottom:38},t);a.css({cursor:"pointer"}),n.autohide&&a.css("display","none"),n.position&&a.css({position:"fixed",right:n.right,bottom:n.bottom}),a.click(function(){i.animate({scrollTop:0},n.speed)}),o.scroll(function(){var e=o.scrollTop();n.autohide&&(e>n.offset?a.fadeIn(n.speed):a.fadeOut(n.speed))})}}(jQuery);e(function(){e(".to-top").toTop()});e("body").append('<a class="to-top"><i class="icon-up-small"></i></a>');e(".navbar-collapse ul.navbar-nav li:has(>ul)").addClass("has-children");if(e(".navbar-collapse ul.navbar-nav li").hasClass("has-children")){e(".navbar-collapse ul.navbar-nav li.has-children").prepend('<span class="toggle-submenu"></span>')}e(".navbar-collapse ul.navbar-nav li span").click(function(){if(e(this).siblings("ul").hasClass("opened")){e(this).siblings("ul").removeClass("opened").slideUp(200);e(this).closest("li").removeClass("active")}else{e(this).siblings("ul").addClass("opened").slideDown(200);e(this).closest("li").addClass("active")}});e(function(){e(".navbar-toggle").click(function(t){e("html, body").toggleClass("out");e(".navbar-fixed-top").toggleClass("out");e(".body-overlay").toggleClass("show-overlay");e(".navbar-collapse ul.navbar-nav").css({overflow:"hidden",height:document.documentElement.clientHeight});if(e("body").hasClass("out")){e(this).focus()}else{e(this).blur()}});e("body").on({"click touchstart":function(t){if(e("body").hasClass("out")&&!e(t.target).closest(".navbar-collapse, button.navbar-toggle").length){t.preventDefault();e("button.navbar-toggle").trigger("click");e("button.navbar-toggle").blur();e(".body-overlay").removeClass("show-overlay")}},keyup:function(t){if(t.keyCode==27&&e("body").hasClass("out")){e("button.navbar-toggle").trigger("click")}}})});e(".navbar-collapse .navbar-nav").mCustomScrollbar({theme:"minimal-dark",scrollInertia:0});if(suxingme_url.site_loading){e(window).on("load",function(){e("body").addClass("loaded");setTimeout(function(){e("#pageloader").fadeOut("slow")},300)})}});document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".comment-form-smilies");if(!e)return;e.addEventListener("click",function(e){var t,a=e.target.dataset.smilies?e.target:e.target.parentNode,o=" "+a.dataset.smilies+" ";if(document.getElementById("comment")&&document.getElementById("comment").type=="textarea"){t=document.getElementById("comment")}else{return false}if(document.selection){t.focus();sel=document.selection.createRange();sel.text=o;t.focus()}else if(t.selectionStart||t.selectionStart=="0"){var i=t.selectionStart;var n=t.selectionEnd;var s=n;t.value=t.value.substring(0,i)+o+t.value.substring(n,t.value.length);s+=o.length;t.focus();t.selectionStart=s;t.selectionEnd=s}else{t.value+=o;t.focus()}})});jQuery(document).on("click",".facetoggle",function(e){jQuery(".comment-form-smilies").toggle()});jQuery(document).on("click","#fa-loadmore",function(e){var a=jQuery(this),o=jQuery(".posts-con"),i=jQuery("#fa-loadmore"),n=a.data();if(a.hasClass("is-loading")){return false}else{i.html('<i class="icon-spin6 animate-spin"></i> 加载中...');a.addClass("is-loading");jQuery.ajax({url:suxingme_url.url_ajax,data:n,type:"post",dataType:"json",success:function(e){if(e.code==500){i.data("paged",e.next).html("加载更多");t("服务器正在努力找回自我  o(∩_∩)o")}else if(e.code==200){o.append(e.postlist);if(jQuery.isFunction(jQuery.fn.lazyload)){jQuery("img.lazy,img.avatar").lazyload({effect:"fadeIn"})}if(e.next){if(suxingme_url.wow){var n=new WOW({boxClass:"button-more",animateClass:"animated",offset:0,mobile:true,live:true});n.init()}i.data("paged",e.next).html("加载更多")}else{i.hide()}}a.removeClass("is-loading")},error:function(e){console.log(e.responseText);console.log(e)}})}});jQuery(document).on("click",".post-nav span",function(e){var a=jQuery(this),o=jQuery(".posts-con"),i=jQuery("#fa-loadmore"),n=a.data();if(a.hasClass("is-loading")){return false}else{o.html('<div class="wait-tips"><i class="icon-spin6 animate-spin"></i> 加载中...</div>');a.addClass("is-loading");a.addClass("current").siblings().removeClass("current");i.hide();jQuery.ajax({url:suxingme_url.url_ajax,data:n,type:"post",dataType:"json",success:function(e){if(e.code==500){i.data("paged",e.next).html("加载更多");t("服务器正在努力找回自我  o(∩_∩)o")}else if(e.code==200){o.html(e.postlist);if(jQuery.isFunction(jQuery.fn.lazyload)){jQuery("img.lazy,img.avatar").lazyload({effect:"fadeIn"})}if(e.next&&a.data("total")>1){i.show();if(suxingme_url.wow){var n=new WOW({boxClass:"button-more",animateClass:"animated",offset:0,mobile:true,live:true});n.init()}i.data("paged",e.next).html("加载更多");if(a.hasClass("new-post")){i.data("home",true)}else{i.removeAttr("data-home");i.data("category",a.data("category"));i.data("total",a.data("total"))}}else{i.hide()}}a.removeClass("is-loading")},error:function(e){console.log(e.responseText);console.log(e)}})}});jQuery(document).on("click","#contribute-cat li",function(e){jQuery(this).toggleClass("is-visible")});jQuery(document).on("click","#radio2",function(e){jQuery(".copy-meta").hide()});jQuery(document).on("click","#radio1",function(e){jQuery(".copy-meta").show()});jQuery(document).on("click","#nice-check-contribute",function(e){tinyMCE.triggerSave();var a,o=source="",i=jQuery("#contribute-cat .is-visible"),n=jQuery("#title").val(),s=jQuery("#post_content").val(),l=new Array,r=0;i.each(function(e){if(jQuery(this).hasClass("is-visible")){r=1;l[e]=jQuery(this).attr("data-id")}});if(jQuery("#radio1").attr("checked")){a=1;o=jQuery("#name").val();source=jQuery("#source").val()}if(jQuery("#radio2").attr("checked")){a=2;o=source=""}if(!n){t("文章标题不能为空！");return false}if(!s){t("文章内容不能为空！");return false}if(!r){t("至少选择一个分类！");return false}if(a==1&&(o==""||source=="")){t("请填写完整版权说明");return false}jQuery("#mailModal").modal("toggle")});jQuery(document).on("click","#nice-do-contribute-verify-code",function(e){var a=jQuery(this).data("nonce");var o=jQuery("#email").val();var i=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;if(o==""||!i.test(o)){t("请填写正确的邮箱");return false}jQuery.ajax({url:suxingme_url.url_ajax,type:"POST",data:{action:"nice_send_mail_contribute",email:o,nonce:a},dataType:"json",success:function(e){if(e.code==200){t(e.msg);var a=60;var o=setInterval(i,1e3);function i(){jQuery("#nice-do-contribute-verify-code").attr("disabled",true);jQuery("#nice-do-contribute-verify-code").html(a+" 秒重发邮件");if(a==0){jQuery("#nice-do-contribute-verify-code").html("重发邮件").removeAttr("disabled");clearInterval(o)}a--}}else{t(e.msg)}}});return false});jQuery(document).ready(function(){if(jQuery("#upimg").length>0){jQuery("#upimg").wrap("<form id='imgupload' action='"+suxingme_url.url_ajax+"'  method='post' enctype='multipart/form-data'></form>");jQuery("#upimg").change(function(){if(jQuery("#upimg").val()!=""){jQuery("#imgupload").ajaxSubmit({data:{action:"do_upimg",_suxingnonce:jQuery("#nonce").val()},dataType:"json",success:function(e){console.log(e);if(e.status==1){wp.media.editor.insert('<img class="aligncenter size-full" src="'+e.url+'" alt="" />')}else{t(e.info)}},error:function(e){t("网络错误，请稍后再试！")}})}})}});jQuery("#do-contribute").click(function(){tinyMCE.triggerSave();var e,a,o="",i=jQuery("#contribute-cat .is-visible"),n=jQuery("#title").val(),s=jQuery("#post_content").val(),l=jQuery("#nonce").val(),r=jQuery("#email").val(),u=jQuery("#code").val(),c=new Array,d=0;i.each(function(e){if(jQuery(this).hasClass("is-visible")){d=1;c[e]=jQuery(this).attr("data-id")}});if(jQuery("#radio1").attr("checked")){e=1;a=jQuery("#name").val();o=jQuery("#source").val()}if(jQuery("#radio2").attr("checked")){e=2;a=o=""}if(!n){t("文章标题不能为空！");return false}if(!s){t("文章内容不能为空！");return false}if(!d){t("至少选择一个分类！");return false}if(e==1&&(a==""||o=="")){t("请填写完整版权说明");return false}if(r==""){t("请填写邮箱");return false}if(u==""){t("请填写验证码");return false}jQuery.ajax({url:suxingme_url.url_ajax,type:"POST",dataType:"json",data:{action:"do_contribute",cats:c,title:n,post_content:s,type:e,name:a,source:o,email:r,code:u,_suxingnonce:l}}).done(function(e){if(e.status!=0){alert(e.info);location.replace(location.href)}else{t(e.info)}}).fail(function(){console.log("error")})});