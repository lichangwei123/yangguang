window.onload = function() {
	//验证码
	function Rand() {
		var num = 0;
		var str = "";
		var str1 = "0123456789zxcvbnmasdfghjklqwertyuiopZXCBNMASDFGHJKLQWERTYUIOP";
		for(var i = 0; i < 6; i++) {
			num = Math.round(Math.random() * (str1.length - 1));
			str += str1[num];
		}
		$id("code").innerHTML = str;
	}
	Rand();
	$id("code-pic").onclick = function() {
		Rand();
	}

	//注册协议	
	$("#agreMent").click(function() {
		$(".shade").fadeIn(1000)
		$(".agreement").fadeIn(500)
	})
	$(".close").click(function() {
		$(".agreement").fadeOut(500);
		$(".shade").css("display", "none")
	})

	//下一步按钮点击

	//注册
	//输入手机号
	var flagTel = null;
	$id("mobile").onblur = function() {
		var reg = /^1[358]\d{9}$/;
		var str = this.value;
		if(str.length == 0) {
			$id("s1").style.display = "block";
			$id("s1").innerHTML = "<i></i>手机号不能为空";
			flagTel = false;
		} else if(str.length != 0 && !reg.test(str)) {
			$id("s1").style.display = "block";
			$id("s1").innerHTML = "<i></i>输入正确手机号";
			flagTel = false;
		} else if(reg.test(str)) {
			flagTel = true;
			$id("s1").style.display = "none";
		}
	}
	// 验证码
	var flagCode = null;
	$id("coder").onblur = function() {
		if(this.value == $id("code").innerHTML) {
			flagCode = true;
			$id("error").style.opacity = "0";

		} else {
			flagCode = true;
			$id("error").style.opacity = "1";
		}
	}
	//注册协议
	function check() {
		if($id("mobileAgreeClause").checked) {

			return true;
		} else {
			return false;
		}
	}
	
	//下一步
	$("#mobileSubmitFirst").click(function() {
		if(flagTel && flagCode && check()) {
			$("#mobileFormFirst").css("display", "none");
			$("#mobileFormSecond").css("display", "block")
		}
	})
	
	
	    //用户名
    var flagname=null;
    $id("pW").onblur=function(){
    	var reg=/^[\w-]{6,20}$/;
    	if(reg.test(this.value)){
    		$id("s2").style.display="none";
    		flagname=true;
    	}else{
    		$id("s2").style.display="block";
    		$id("s2").innerHTML="<i></i>请输入正确用户名";
    		flagname=false;
    	}
    }
//密码
   var flagPas=null;
   $id("password").onblur=function(){
   	 var reg=/^\w{6,}$/;
   	 	if(reg.test(this.value)){
   	 		$id("s3").style.display="none";
    		flagPas=true;	 		
   	 	}else{
   	 		$id("s3").style.display="block";
    		$id("s3").innerHTML="<i></i>请重新输入密码";
    		flagPas=false;
   	 	}
   }
//确认密码
   var qrflagPas=null;
   $id("qrpassword").onblur=function(){
   	  if(this.value==$id("password").value){
   	  	$id("s4").style.display="none";
    		qrflagPas=true;	
   	  }else{
   	  	$id("s4").style.display="block";
    		$id("s4").innerHTML="<i></i>请重新输入密码";
    		qrflagPas=false;
   	  }
   }
   
 //立即注册
  $id("mobileUbmitSecond").onclick=function(){
  	if(flagname&&flagPas&&qrflagPas){
  		var strName=$id("pW").value;
  		var strPwd=$id("password").value;
  		document.cookie=`username=${strName}`;
  		document.cookie=`password=${strPwd}`;
  		alert("注册成功"+document.cookie);
  		location.href="login.html";
  	}
  }

}
