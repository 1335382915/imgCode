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

</pre><br/>
<h3>�����б�˵����</h3><br/>
<pre style='font-size: 16px;'>
numberSize  //������֤��λ����Ĭ��4λ<br/>
textStyle  //��֤�����ʽ ֵΪ("fillText","strokeText"),Ĭ�� "fillText"<br/>
textColor  //��֤����ɫ Ĭ�� "#ffffff"<br/>
shadowBlur  //��Ӱֵ Ĭ��"0"<br/>
shadowColor  //��Ӱ��ɫ Ĭ��null<br/>
gradient  //�����Ƿ񽥱� Ĭ��"false"<br/>
gradientColor  //������ɫ���� Ĭ��"['red','green','blue']" Ҳ������ʮ��������ɫֵ�磺"gradientColor:['#E33127','#FE4735','#FFB37F']"<br/>
mix   //�Ƿ��������ֺ���ĸ���� Ĭ��"true"<br/>
mixNumber  //����Բ������� Ĭ��"100"<br/>
mixLine  //�����ߵ����� Ĭ��"10"<br/>
isCodeString  //��֤���Ƿ�Ĵ���ĸ Ĭ��"false" ������mix֮����Ч<br/>
isCodeNumber  //��֤���Ƿ�Ĵ����� Ĭ��"false" ������mix֮����Ч<br/>
canvasOption:{  //��֤��ͼƬ�Ŀ��<br/>
	width:130,  //Ĭ�� 130
	height:40	//Ĭ�� 40
}<br/>
callback(n) //�ص����� ���� "n" ��֤���ַ��� (һ��������ִ��ajax����,����֤�뷢�͸���̨)

</pre><br/>
<h3>Ԥ��Ч��</h3><br/>
<img src="4.png" id="app"><br/>
<img src="2.png" id="app"><br/>
<img src="3.png" id="app"><br/>

