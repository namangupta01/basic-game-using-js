var ball=document.getElementById("ball");
var box=document.getElementById("box");
var scoreBox=document.getElementById("score");
var score=1;
var pause=true;
/*var start = false;
document.addEventListener()*/
var upperLimit	=	parseInt(getComputedStyle(box).top.substr(0,getComputedStyle(box).top.length-2));
var leftLimit 	= 	parseInt(getComputedStyle(box).left.substr(0,getComputedStyle(box).left.length-2));
var boxHeight 	= 	parseInt(getComputedStyle(box).height.substr(0,getComputedStyle(box).height.length-2));
var boxWidth 	= 	parseInt(getComputedStyle(box).width.substr(0,getComputedStyle(box).width.length-2));
var ballWidth	=	parseInt(getComputedStyle(ball).width.substr(0,getComputedStyle(ball).width.length-2));
var ballHeight	=	parseInt(getComputedStyle(ball).height.substr(0,getComputedStyle(ball).height.length-2));
var ballY 		= 	parseInt(getComputedStyle(ball).top.substr(0,getComputedStyle(ball).top.length-2));
var ballX 		= 	parseInt(getComputedStyle(ball).left.substr(0,getComputedStyle(ball).left.length-2));
/*var bottomLimit = 	upperLimit; 
var rightLimit 	= 	leftLimit;*/
console.log(upperLimit)
		console.log(ballY)
function func(e){
	if(!pause){
		if (e.which == '38'){
			ballY = ballY - 10 ;
			ball.style.top = ballY ; 
			console.log("up");
		}
		else if (e.which == '40'){
			ballY = ballY + 10;
			ball.style.top = ballY ; 
			console.log("down");
		}
		else if (e.which == '37'){
			ballX = ballX - 10;
			ball.style.left = ballX;
			console.log("left");
		}
		else if (e.which == '39'){
			ballX = ballX + 10;
			ball.style.left = ballX + "px";
			console.log("right");  
		}
		else if(e.which == '32'){
			pause=!pause;
		}
	}
	else if(e.which == '32'){
			pause=!pause;
		}
}
document.addEventListener("keydown",func);
/*document.addEventListener("keyup",func);
document.addEventListener("keydown",func);
document.addEventListener("keydown",func);*/
function ballRandomMove() {
	if(ballX>0 && ballY>0 && ballY+ballHeight<boxHeight && ballX<(boxWidth+ballWidth)/2){
		if(!pause){
		randomNumber=Math.floor((Math.random()*4)+1);
		randomNumber=randomNumber+36;
		if (randomNumber == '38'){
			ballY = ballY - 30 ;
			ball.style.top = ballY ; 
		}
		else if (randomNumber == '40'){
			ballY = ballY + 30;
			ball.style.top = ballY ; 
		}
		else if (randomNumber == '37'){
			ballX = ballX - 30;
			ball.style.left = ballX;
		}
		else if (randomNumber == '39'){
			ballX = ballX + 30;
			ball.style.left = ballX + "px";
		}
		score=score+1;
		scoreBox.innerText = "Score : " + score;
	}
	}
	else{
		alert("Your Score is :" + score);
		location.reload();
		pause=!pause
	}
}
window.onload=setInterval(ballRandomMove,200);