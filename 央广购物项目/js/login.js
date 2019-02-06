window.onload=function(){
	


$(".tabs-nav li").click(function(){
 	$(this).addClass("active")
 	       .siblings()
 	       .removeClass("active")
 
  var index=$(this).index()
 /* console.log(index)
   $(".nc-login-layout form").eq(index).addClass("shower")
                             .siblings()
                             .removeClass("shower")
*/
/*$(".active").parent().parent().find("form").eq(index).addClass("shower")
                                    .siblings()
                             .removeClass("shower")*/
                            
$(".a").eq(index).addClass("shower")
                             .siblings()
                             .removeClass("shower")
 })


//登录
 function Denglu(){
 	var str=document.cookie;
 	var cname= getCookie("username");
 	var cpwd=getCookie("password");

    $id("loginSubmit").onclick=function(){
//console.log($id("loginName").value,$id("loginPwd").value )
    	console.log( cname,cpwd )
    	if( check() ){
			var now = new Date();
		    now.setDate( now.getDate() + 7 );				
			document.cookie = `uname=${$id("loginName").value};expires=${now}`;
			document.cookie = `upwd=${$id("loginPwd").value};expires=${now}`;
		}
    	if(cname==$id("loginName").value&&cpwd==$id("loginPwd").value){
    		alert("登录成功")
    		location.href="homepage.html";
    	}else{
    		alert("用户名或密码错误")
    	}
    	
    }
    
 
 }
Denglu()
//
  $id("autologin").onclick=function(){
  	if(check()){
  		$id("no").style.display="inline-block";
  	}else{
  		$id("no").style.display="none";
  		
  	}
  }

	function check() {
		if($id("autologin").checked) {
			return true;
		} else {
			return false;
		}
	}
	
		var str = document.cookie;
		 console.log( str )
		if( str ){ 
			$id("loginName").value = getCookie("uname");
			$id("loginPwd").value = getCookie("upwd");
		}
}