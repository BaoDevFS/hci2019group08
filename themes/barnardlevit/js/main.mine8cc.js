$(document).ready(function(){$(".carousel").carousel({interval:7500,pause:"hover"});$(".carousel-thumbs, .carousel-buttons").slideshowPagination();$(".carousel-inner .item").length===1&&$(".carousel-control").hide();$("#hero-slideshow").exists(function(){$(".carousel-inner .item").each(function(){if($(this).children("a").attr("href")===""){$(this).addClass("no-href");$("a",this).click(function(e){e.preventDefault()})}})});$(".fancybox").fancybox({padding:0,helpers:{title:{type:"inside"}}});$(".captionImage").each(function(){$(this).removeAttr("style")})});