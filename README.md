<h2>jQuery.imgCode.jsһ������JQUERYʵ�ֵ�ͼ����֤����<br/></h2>
���Ĺ�����HTML5��canvas�����Ļ�ͼ����<br/>

<h3>ʹ��js��֤��ĳ�����</h3><br/>
1��Ϊ�˼���http������������<br/>
2�����������֧��canvas��ǩ<br/>

<h3>ʹ��˵����</h3><br/>
1�����ȱ�������JQuery <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script><br/>
2�����������һ��img��ǩ���� <br/>

<h3>�����÷���</h3><br/>
<pre>
img src="" id="app"<br/>
$("#app").imgcode();<br/>
</pre><br/>

2�д��������͸㶨һ����������֤�빦��<br/>
<h3>Ԥ��Ч��</h3><br/>
<img src="1.png" id="app"><br/>
<h3>�����б�</h3><br/>
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
<h3>����˵����</h3><br/>
<pre>
numberSize  //������֤��λ����Ĭ��4λ<br/>
textStyle  //��֤�����ʽ ֵΪ("fillText","strokeText"),Ĭ�� "fillText"<br/>
textColor  //��֤����ɫ Ĭ�� "#ffffff"<br/>
shadowBlur  //��Ӱֵ Ĭ��"0"<br/>
shadowColor  //��Ӱ��ɫ Ĭ��null<br/>
gradient  //�����Ƿ񽥱� Ĭ��"false"<br/>
mix   //�Ƿ��������ֺ���ĸ���� Ĭ��"true"<br/>
mixNumber  //����Բ������� Ĭ��"100"<br/>
mixLine  //�����ߵ����� Ĭ��"10"<br/>
isCodeString  //��֤���Ƿ�Ĵ���ĸ Ĭ��"false" ������mix֮����Ч<br/>
isCodeNumber  //��֤���Ƿ�Ĵ����� Ĭ��"false" ������mix֮����Ч<br/>
canvasOption:{  //��֤��ͼƬ�Ŀ��<br/>
	width:130,  //Ĭ�� 130
	height:40	//Ĭ�� 40
},
</pre><br/>
