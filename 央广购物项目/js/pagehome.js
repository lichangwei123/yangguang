//top二级导航
window.onload=function(){

  $(".nav").mouseenter(function() {

	var Height = $(this).find("ul").height();
	$(this).find("dd").animate({
		"opacity": 1,
		"height": Height
	}, 100);
}).mouseleave(function() {
	$(this).find("dd").animate({
		"opacity": 1,
		"height": 0
	}, 50, function() {
		$(this).animate({
			"opacity": 0
		}, 0)
	});
})

//轮播图
var timer = null;
var $ulist = $("#box li");
var $olist = $("#uu li");
var $Pre = $(".bg .prev");
var $Nex = $(".bg .next")
var index = 0;
timer = setInterval(function() {
	index++;
	autoPlay()
}, 2000);

function autoPlay() {
	if(index == $olist.size()) { //size() 获取jq中元素的个数
		index = 0;
	}
	$ulist.eq(index).fadeIn(1500).siblings().fadeOut(1500);
	$olist.eq(index).addClass("current").siblings().removeClass("current");
}

$Pre.mouseenter(function() {
	$(".bg span").css({
		"display": "block"
	})
})
$Nex.mouseenter(function() {
	$(".bg span").css({
		"display": "block"
	})
})
$olist.mouseout(function() {
	timer = setInterval(autoPlay, 2000);
})
$(".bg").mouseenter(function() {
	clearInterval(timer);
	$(".bg span").css({
			"display": "block"
		})
		.stop()
		.animate({
			"opacity": 0.3
		}, 500)
}).mouseleave(function() {
	timer = setInterval(function() {
		index++;
		autoPlay()
	}, 2000);
	$(".bg span").animate({
		"opacity": 0
	}, 500, function() {
		$(this).css({
			"display": "none"
		})
	})
})
$Pre.click(function() {
	index--;
	if(index == -1) {
		index = $olist.size() - 1;
	};
	autoPlay();
})

$Nex.click(function() {
	index++;
	autoPlay();
})

/*8888*********楼梯轮播1*******************/
var oUl = document.getElementById("sider-main");
var oUlb = document.getElementById("banner-nav-list");
var oPrev = document.getElementById("bx-prev");
var oNext = document.getElementById("bx-next");
var bigNav = document.getElementById("bigNav");
var aa = document.getElementsByClassName("main-side")[0]
var flag=true;
var indexer = 0;
var timerer = null;

function autoPlayer() {
	if(indexer == 4) {
		indexer = 1;
		oUl.style.left = 0;
	}
	for(var i = 0; i < oUlb.children.length; i++) {
		oUlb.children[i].className = "bx-pager-item";
	}
	oUlb.children[indexer == 3 ? 0 : indexer].className = "bx-pager-item sp";
	startMove(oUl, {
		left: -indexer * oUl.children[0].offsetWidth
	},function(){
		flag=true;
	})
}
timerer = setInterval(function() {
	indexer++;
	autoPlayer()
}, 2000)


oPrev.onclick = function() {
 if(flag){
	flag=false;
	indexer--;
	/*     console.log(indexer)*/
	if(indexer <= -1) {
		indexer = 2;
		oUl.style.left = -3*oUl.children[0].offsetWidth+"px";
		
	}
	autoPlayer()
	}
}
oNext.onclick = function() {
  if(flag){
  	flag=false;
	indexer++;
	autoPlayer()
  }
	
}
aa.onmouseover = function() {
	clearInterval(timerer)
}
aa.onmouseout = function() {
	timerer = setInterval(function() {
		indexer++;
		autoPlayer()
	}, 2000)
}

/*bigNav.onmouseover = function() {
	clearInterval(timerer)
}
bigNav.onmouseout = function() {
	timerer = setInterval(function() {
		indexer++;
		autoPlayer()
	}, 2000)
}*/
for(let i = 0; i < oUlb.children.length; i++) {
	oUlb.children[i].onclick = function() {
		console.log(indexer)
		clearInterval(timerer);
		indexer = i;
		autoPlayer()
	}
      /*oUlb.children[i].onmouseout = function() {
		timerer = setInterval(function() {
			indexer++;
			autoPlayer()
		}, 2000)
	}*/
}

/************楼梯选项卡**********/

var $tabItem=$(".tab-item");
console.log($tabItem.size())

$tabItem.mouseenter(function(){
$(this).addClass("active")
	    .siblings()
	    .removeClass("active")
	var indexa=$(this).index();
	console.log(indexa)
	$(this).parent().parent().parent().find(".mainnav").eq(indexa).addClass("show")
	                  .siblings()
	                  .removeClass("show")
})
/************楼梯选项卡     鼠标移入移出淡入淡出**********/

$(".g-list li").mouseenter(function(){

	$(this).stop()
	       .animate({"opacity":0.9},200)
	         .siblings()
	         .stop()
	         .animate({"opacity":0.25},200)
})
$(".g-list").mouseleave(function(){
	$(".g-list li").animate({"opacity":1},100)
})

/****************楼梯侧导航栏***************/


//鼠标移入移出
$(".side-ul li").mouseenter(function(){
	$(this).find(".line-div")
	       .addClass("currenter")
	       .end()
	       .siblings()
	       .find(".line-div")
	       .removeClass("currenter")
})
//返回顶部
$(".line-gotop").click(function(){
	flag2=false;
	$("body,html").animate({"scrollTop":0},1000,function(){
		flag2=true;
	})
})
$(".tab-top").click(function(){
	flag2=false;
	$("body,html").animate({"scrollTop":0},1000,function(){
		flag2=true;
	})
})

//点击左侧楼梯号
var flag2=true;
$(".side-ul li").click(function(){
   flag2=false;
	$(this).find("div")
	       .addClass("currenter")
	       .end()
	       .siblings()
	       .find("div")
	       .removeClass("currenter")
	       
	
 var topHeight=$(".floor").eq($(this).index()).offset().top;
  $("body,html").stop().animate({"scrollTop":topHeight},1000,function(){
  	flag2=true;
  })
})

//操作滚动条
 $(window).scroll(function(){
 	if($(window).scrollTop()>=$("#floor1").offset().top-$(window).innerHeight()/2){
		$(".side-navigation")./*fadeIn(500);*/css("display","block")
	}else{
		$(".side-navigation")./*fadeOut(500)*/css("display","none");
	}
  if(flag2){
 	var sTop=$(document).scrollTop();
 	var $floor=$(".floor").filter(function(){
 		//console.log($(this).offset().top , sTop , $(this).height()+$(this).offset().top)
 		if(/*$(this).offset().top<=sTop && sTop<$(this).height()+$(this).offset().top*/
 		Math.abs($(this).offset().top-sTop)<$(this).height()/2	){
 			// 			console.log($(this).index())
 			var str = $(this).find('h2').html();
 			$(".side-ul li").filter(function(){
 				console.log( str.indexOf($(this).find('a').html()) )
 				
 				if(str.indexOf($(this).find('a').html()) != -1){
// 				console.log(str , $(this).find('a').html())
 					$(this).find(".line-div").addClass("currenter")
						 	.end()
						 	.siblings()
						 	.find(".line-div")
						 	.removeClass("currenter")	
 				}
 			})
   			
 		}
 	})
 	
}
 })
 
 
 
//会员专享区域动态请求ajax
 var ajax=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
  ajax.open("get","w.json?t="+new Date().getTime());
  ajax.send();
  ajax.onreadystatechange=function(){
  	if(ajax.readyState==4&&ajax.status==200){
  		var arr=JSON.parse(ajax.responseText);
  		var str="";
  		for(var i=0;i<arr.length;i++){
  			str+=`
  			            <li>
        					<div class="vip-img">
        						<a href="#">
        							<img src="../img1/${arr[i].src}" alt="">
        						</a>
        					</div>
        					<div class="vip-name">
        						${arr[i].describe}
        					</div>
        				</li>
  			`;
  		}
  		$id("vip").innerHTML=str;
  	}
  }
 
}


