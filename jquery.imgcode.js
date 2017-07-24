(function ($) {
	$.fn.imgcode=function(options){
		var defaults={						
			numberSize:4,
   			textStyle:"fillText",
   			textColor:"#ffffff",
   			shadowBlur:0,
   			shadowColor:null,
   			gradient:false,
   			gradientColor:['red','green','blue'],
   			mix:true,
   			mixNumber:100,
   			mixLine:10,
   			isCodeString:false,
   			isCodeNumber:false,
   			canvasOption:{
				width:130,
				height:40
			},
			callback:function(s){return s}
		};
		var options = $.extend(defaults, options);
		
		var source=$(this);
		var myCanvas=renderCanvas(options.canvasOption.width,options.canvasOption.height);
		source.on("click",function(){
			var code=randomNumber(options.mix)();
			var ctx=myCanvas.getContext('2d');
			
			//设置阴影
			ctx.shadowBlur=options.shadowBlur;
			ctx.shadowColor=options.shadowColor;

			bgGradient(ctx); //阴影背景
			
			ctx.fillRect(0,0,options.canvasOption.width,options.canvasOption.height);
			
			fillText(ctx,code);//文字
			ctx.globalAlpha=0.7;
			if(options.mixLine){
				ctx.moveTo(0+Math.floor(Math.random()),20+Math.floor(Math.random()));
				ctx.lineWidth=1;
				var cParam=bezierCurveTo(); //曲线
				ctx.bezierCurveTo(cParam.cp1x,cParam.cp1y,cParam.cp2x,cParam.cp2y,cParam.x,cParam.y);
				ctx.stroke();
				line(ctx) //细线 
			}
			if(options.mixNumber){
				circle(ctx); //圆点
			}
			
			$(this).attr("src",myCanvas.toDataURL('image/png'));
			var param={code:options.callback(code)}
			
		});
		source.trigger("click");
		

  	 //生成画布函数
   	function renderCanvas(width,height,ctx){
   		var canvas=$("<canvas width="+width+" height="+height+" style='display:none;'></canvas>");
   		source.parent().append(canvas);
   		return canvas[0];
   	}

	//生成随机数函数	
	function randomNumber(mix){
		return $._imgcode_rand=function(){
			var str="23456789abcdefghijkmnpqrstuvwxyz";
			if(!mix){
				if(options.isCodeString&&!options.isCodeNumber){
				 str=str.substring(8);
				}else{
				 str=str.substring(0,8);
				}
			}
			var arr=str.split(""),validate="",ranNum;
			for(var i=0;i<options.numberSize;i++){
				ranNum=Math.floor(Math.random()*str.length); //随机数在[0,35]之间
				validate+=arr[ranNum];
			}
			return validate;
		}
	}
	//画干扰线
	function bezierCurveTo(ctx){
		return {
			cp1x:32+Math.floor(Math.random()),
			cp1y:70+Math.floor(Math.random()),
			cp2x:97+Math.floor(Math.random()),
			cp2y:-20+Math.floor(Math.random()),
			x:options.canvasOption.width+Math.floor(Math.random()),
			y:options.canvasOption.height/2+Math.floor(Math.random())
		};
	}
	//填充验证码
	function fillText(ctx,code){
		ctx.beginPath();
		var size=options.canvasOption.width/3.6;
		if(size>options.canvasOption.height){
			size=options.canvasOption.height
		}
		ctx.fillStyle=options.textColor;
		ctx.strokeStyle = options.textColor;
		ctx.font=size+'px Arial';
		ctx.textAlign="center"; 
		ctx.textBaseline="middle";  
		var txt=code.split('').join(" ");

		if(options.textStyle==="strokeText"){

			ctx.strokeText(txt,options.canvasOption.width/2,options.canvasOption.height/2,options.canvasOption.width);
		}else{
			ctx.fillText(txt,options.canvasOption.width/2,options.canvasOption.height/2,options.canvasOption.width);
		}
	}
	//是否背景渐变
	function bgGradient(ctx){
		if(options.gradient){
			var my_gradient=ctx.createLinearGradient(0,0,options.canvasOption.width,options.canvasOption.height);
			my_gradient.addColorStop(0,options.gradientColor[0]);
			my_gradient.addColorStop(0.5,options.gradientColor[1]);
			my_gradient.addColorStop(1,options.gradientColor[2]);
			ctx.fillStyle=my_gradient;
		}else{
			ctx.fillStyle=options.fillColor;
		}		
	}

	//背景图片
	/*
	function drwImg(ctx,img){
		if(img){
			elImg=new Image();
			elImg.src=img;
			elImg.onload=function(){
				ctx.drawImage(elImg,0,0,options.canvasOption.width,options.canvasOption.height);
			}
			
		}
	}
	*/

	//干扰小圆点
	function circle(ctx){	
		var arr=new Array(options.mixNumber).fill(1);
		$.each(arr,function(){
			ctx.fillStyle=options.textColor;
			ctx.beginPath();
			ctx.arc(Math.random()*options.canvasOption.width,Math.random()*options.canvasOption.height,1,0,2*Math.PI);
			ctx.fill();
		})
		
	}
	//干扰细线
	function line(ctx){
		var arr=new Array(options.mixLine).fill(1);
		$.each(arr,function(){
			ctx.strokeStyle=options.textColor;
			ctx.beginPath(); 
			ctx.moveTo(Math.random()*options.canvasOption.width,Math.random()*options.canvasOption.height);
			ctx.lineTo(Math.random()*options.canvasOption.width,Math.random()*options.canvasOption.height);
			ctx.lineWidth=1;
			ctx.closePath();
			ctx.stroke();
		})		
	}

 }
})(jQuery);