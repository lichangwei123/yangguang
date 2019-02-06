
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

/***************选项卡菜单******************/

$(".title").mouseenter(function() {
	$(".category").css("display", "block")
}).mouseleave(function() {

})
var tiTle = document.getElementsByClassName("title")[0];
var cateGory = document.getElementsByClassName("category")[0];
cateGory.onmouseenter = tiTle.onmouseenter = function() {
	cateGory.style.display = "block";
}
cateGory.onmouseleave = tiTle.onmouseleave = function() {
	cateGory.style.display = "none";
}
/**********放大镜**********/
//鼠标移入小图时
$("#bottom li").mouseover(function() {
	var index = $(this).index();
	$("#small img").eq(index).show().siblings().hide();
	$("#big img").eq(index).show().siblings().hide();
})

//鼠标移出small盒子时  显示或隐藏大图

	$("#bottom li").mouseover(function(){
		var index = $(this).index();
		$("#small img").eq(index).show().siblings(/*"img"*/).hide();
		$("#big img").eq(index).show().siblings().hide();

	})
	//鼠标移入移出small盒子  显示或隐藏大图显示区big  和 mask
	$("#small").on({
		"mouseover":function(){
			$("#big").show();
			$("#mask").show();
		},
		"mouseout":function(){
			$("#big").hide();
			$("#mask").hide();
		},
		"mousemove":function(evt){
			var e = evt || event;
			var x = e.pageX - $("#small").offset().left - $("#mask").width()/2;
			var y = e.pageY - $("#small").offset().top - $("#mask").height()/2;
			
			var mx = $("#small").width()  - $("#mask").width();
			var my = $("#small").height()  - $("#mask").height();
			
			//边界处理
			x = x<=0 ? 0 : x>=mx ? mx : x;
			y = y<=0 ? 0 : y>=my ? my : y;
			
			//大图宽度/小图宽度 = 大图偏移 / mask的偏移
			var bigImageX = -x * $(".bigImage").width() / $("#small").width();
			var bigImageY = -y * $(".bigImage").height() / $("#small").height();
			$("#mask").css({
				"left":x + "px",
				"top":y+"px"
			})
			
			$(".bigImage").css({
				"left" : bigImageX+2+"px",
				"top" : bigImageY+"px"
			})
		}
	})
	

//倒计时
 var start=new Date();
 var end=new Date("2019-2-30 16:30:00");
 //获取时间差t秒
 var t=(end.getTime()-start.getTime())/1000;
 
showTime();
function showTime(){

	if(t<0){
		$id("data").innerHTML="商品下架了";
		return;
	}
	//剩余小时
	var h=parseInt(t/3600);
	//剩余分钟
	var m=parseInt((t-h*3600)/60);
	//剩余秒数
	var s=parseInt(t-h*3600-m*60);
 
 h=h<10?"0"+parseInt(t/3600):parseInt(t/3600);
 m=m<10?"0"+parseInt((t-h*3600)/60):parseInt((t-h*3600)/60);
 s=s<10?"0"+parseInt(t-h*3600-m*60):parseInt(t-h*3600-m*60);


	
	$id("data").innerHTML=` 
	                    <span>距结束</span>
       	        		<span class="d1">${h}</span>	
       	        		<span class="d2">小时</span>
       	        		<span class="d1">${m}</span>
       	        		<span  class="d2">分钟</span>
       	        		<span class="d1">${s}</span>
       	        		<span  class="d2">秒</span>
                       `; 
                      	
}
var timer=setInterval(function(){
	t--;
	if(t<0){
		clearInterval(timer);
		$id("data").innerHTML="商品下架了";
		
	}else{
		showTime();	
	}
},1000)

}