
window.onload=function(){

	$.ajax({
		type:"get",
		url:"shoplist.json?"+new Date().getTime(),
		async:true,
		success:function(json){
			var con="";
			for(var i=0;i<json.list.length;i++){
				var pro=json.list[i];
				con+=`<li class="item">
       	  	 	<div class="good-pic">
       	  	 		<a href="xiangqingye.html">
       	  	 			<img src="${pro.src}" alt="">
       	  	 		</a>
       	  	 	</div>
       	  	 	<div class="good-price-offer">
       	  	 		<span class="yuan">￥</span>
       	  	 		<span class="integer">${pro.price}</span>
       	  	 	</div>
       	  	 	<div class="p-name">
       	  	 		<a href="#">
       	  	 			<em>
       	  	 				${pro.name}
       	  	 			</em>
       	  	 		</a>
       	  	 	</div>
       	  	 	<div class="p-commit">
       	  	 		<strong class="m-r-20">
       	  	 			<a href="#" class="num">0</a>
       	  	 			笔成交
       	  	 		</strong>
       	  	 		<strong class="m-r-10">
       	  	 			<a href="#" class="num">0</a>
       	  	 			条评论
       	  	 		</strong>
       	  	 	</div>
       	  	 	<div class="p-shop">
       	  	 		<a href="#">官方商铺</a>
       	  	 	</div>
       	  	 	<div class="p-icon">
       	  	 		<i class="goods-icons">自营</i>
       	  	 	</div>
       	  	 	<div class="p-operate">
       	  	 		<div class="focus">收藏</div>
       	  	 		<button class="addcart" id="${pro.id}" src="${pro.src}" name="${pro.name}" price="${pro.price}" articalnum="${pro.articalnum}">加入购物车</button>
       	  	 	</div>
       	  	 </li>
				        `;
			}
			$(".list-pic").html(con)
		}
	});
	
	var arr=[];
    $(".list-pic").on("click","button",function(){

		var json={
			id:$(this).attr("id"),
			articalnum:$(this).attr("articalnum"),
			src:$(this).attr("src"),
			price:$(this).attr("price"),
			count:1
		};
		if(getCookie("shoplist").length!=0){
			arr=JSON.parse(getCookie("shoplist"));		
		}
		var flag=true;
		if(arr.length!=0){
			for(var i=0;i<arr.length;i++){
				if(json.id==arr[i].id){
					arr[i].count++;
					flag=false;
					break;
				}
			}
		}
		if(flag){
			arr.push(json);
		}
		setCookie("shoplist",JSON.stringify(arr));
		console.log(document.cookie);
		if(!confirm("确定-继续购物， 取消-去购物车结算")){
		location.href="shopcar.html"	
		}
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


//头部下拉菜单
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

}
