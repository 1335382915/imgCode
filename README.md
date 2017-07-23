<h2>jQuery.imgCode.js一个基于JQUERY实现的图形验证码插件<br/></h2>
核心功能是HTML5的canvas画布的画图功能<br/>

<h3>使用js验证码的场景：</h3><br/>
1、为了减少http请求、提升性能<br/>
2、浏览器必须支持canvas标签<br/>

<h3>使用说明：</h3><br/>
1、首先必须引入JQuery <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script><br/>
2、必须挂载在一个img标签上面 <br/>

<h3>基本用法：</h3><br/>
<pre>
img src="" id="app"<br/>
$("#app").imgcode();<br/>
</pre><br/>

2行代码这样就搞定一个基本的验证码功能<br/>
<h3>预览效果</h3><br/>
<img src="1.png" id="app"><br/>
<h3>参数列表：</h3><br/>
<pre>
numberSize:4,
textStyle:"fillText",
textColor:"#ffffff",
shadowBlur:0,
shadowColor:null,
gradient:false,
mix:true,
mixNumber:100,
mixLine:10,
isCodeString:false,
isCodeNumber:false,
canvasOption:{
	width:130,
	height:40
},
</pre><br/>
<h3>参数说明：</h3><br/>
<pre>
numberSize  //设置验证码位数，默认4位<br/>
textStyle  //验证码的样式 值为("fillText","strokeText"),默认 "fillText"<br/>
textColor  //验证码颜色 默认 "#ffffff"<br/>
shadowBlur  //阴影值 默认"0"<br/>
shadowColor  //阴影颜色 默认null<br/>
gradient  //背景是否渐变 默认"false"<br/>
mix   //是否启用数字和字母混淆 默认"true"<br/>
mixNumber  //干扰圆点的数量 默认"100"<br/>
mixLine  //干扰线的数量 默认"10"<br/>
isCodeString  //验证码是否的纯字母 默认"false" 开启了mix之后无效<br/>
isCodeNumber  //验证码是否的纯数字 默认"false" 开启了mix之后无效<br/>
canvasOption:{  //验证码图片的宽高<br/>
	width:130,  //默认 130
	height:40	//默认 40
},
</pre><br/>
