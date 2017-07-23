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
<img src="1.png" id="app">

