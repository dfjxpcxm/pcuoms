/*
var radius = 180;
var dtr = Math.PI/180;
var d=200;

var mcList = [];
var active = false;
var lasta = 1;
var lastb = 1;
var distr = true;
var tspeed=10;
var size=250;

var mouseX=0;
var mouseY=0;

var howElliptical=1;

var aA=null;
var oDiv=null;

window.onload=function ()
{
	var i=0;
	var oTag=null;
	
	oDiv=document.getElementById('tagbox');
	
	aA=oDiv.getElementsByTagName('a');
	
	for(i=0;i<aA.length;i++)
	{
		oTag={};
		
		oTag.offsetWidth=aA[i].offsetWidth;
		oTag.offsetHeight=aA[i].offsetHeight;
		
		mcList.push(oTag);
	}
	
	sineCosine( 0,0,0 );
	
	positionAll();
	
	oDiv.onmouseover=function ()
	{
		active=true;
	};
	
	oDiv.onmouseout=function ()
	{
		active=false;
	};
	
	oDiv.onmousemove=function (ev)
	{
		var oEvent=window.event || ev;
		
		mouseX=oEvent.clientX-(oDiv.offsetLeft+oDiv.offsetWidth/2);
		mouseY=oEvent.clientY-(oDiv.offsetTop+oDiv.offsetHeight/2);
		
		mouseX/=5;
		mouseY/=5;
	};
	
	setInterval(update, 30);
};

function update()
{
	var a;
	var b;
	
	if(active)
	{
		a = (-Math.min( Math.max( -mouseY, -size ), size ) / radius ) * tspeed;
		b = (Math.min( Math.max( -mouseX, -size ), size ) / radius ) * tspeed;
	}
	else
	{
		a = lasta * 0.98;
		b = lastb * 0.98;
	}
	
	lasta=a;
	lastb=b;
	
	if(Math.abs(a)<=0.01 && Math.abs(b)<=0.01)
	{
		return;
	}
	
	var c=0;
	sineCosine(a,b,c);
	for(var j=0;j<mcList.length;j++)
	{
		var rx1=mcList[j].cx;
		var ry1=mcList[j].cy*ca+mcList[j].cz*(-sa);
		var rz1=mcList[j].cy*sa+mcList[j].cz*ca;
		
		var rx2=rx1*cb+rz1*sb;
		var ry2=ry1;
		var rz2=rx1*(-sb)+rz1*cb;
		
		var rx3=rx2*cc+ry2*(-sc);
		var ry3=rx2*sc+ry2*cc;
		var rz3=rz2;
		
		mcList[j].cx=rx3;
		mcList[j].cy=ry3;
		mcList[j].cz=rz3;
		
		per=d/(d+rz3);
		
		mcList[j].x=(howElliptical*rx3*per)-(howElliptical*2);
		mcList[j].y=ry3*per;
		mcList[j].scale=per;
		mcList[j].alpha=per;
		
		mcList[j].alpha=(mcList[j].alpha-0.6)*(10/6);
	}
	
	doPosition();
	depthSort();
}

function depthSort()
{
	var i=0;
	var aTmp=[];
	
	for(i=0;i<aA.length;i++)
	{
		aTmp.push(aA[i]);
	}
	
	aTmp.sort
	(
		function (vItem1, vItem2)
		{
			if(vItem1.cz>vItem2.cz)
			{
				return -1;
			}
			else if(vItem1.cz<vItem2.cz)
			{
				return 1;
			}
			else
			{
				return 0;
			}
		}
	);
	
	for(i=0;i<aTmp.length;i++)
	{
		aTmp[i].style.zIndex=i;
	}
}

function positionAll()
{
	var phi=0;
	var theta=0;
	var max=mcList.length;
	var i=0;
	
	var aTmp=[];
	var oFragment=document.createDocumentFragment();
	
	//�������
	for(i=0;i<aA.length;i++)
	{
		aTmp.push(aA[i]);
	}
	
	aTmp.sort
	(
		function ()
		{
			return Math.random()<0.5?1:-1;
		}
	);
	
	for(i=0;i<aTmp.length;i++)
	{
		oFragment.appendChild(aTmp[i]);
	}
	
	oDiv.appendChild(oFragment);
	
	for( var i=1; i<max+1; i++){
		if( distr )
		{
			phi = Math.acos(-1+(2*i-1)/max);
			theta = Math.sqrt(max*Math.PI)*phi;
		}
		else
		{
			phi = Math.random()*(Math.PI);
			theta = Math.random()*(2*Math.PI);
		}
		//����任
		mcList[i-1].cx = radius * Math.cos(theta)*Math.sin(phi);
		mcList[i-1].cy = radius * Math.sin(theta)*Math.sin(phi);
		mcList[i-1].cz = radius * Math.cos(phi);
		
		aA[i-1].style.left=mcList[i-1].cx+oDiv.offsetWidth/2-mcList[i-1].offsetWidth/2+'px';
		aA[i-1].style.top=mcList[i-1].cy+oDiv.offsetHeight/2-mcList[i-1].offsetHeight/2+'px';
	}
}

function doPosition()
{
	var l=oDiv.offsetWidth/2;
	var t=oDiv.offsetHeight/2;
	for(var i=0;i<mcList.length;i++)
	{
		aA[i].style.left=mcList[i].cx+l-mcList[i].offsetWidth/2+'px';
		aA[i].style.top=mcList[i].cy+t-mcList[i].offsetHeight/2+'px';
		
		aA[i].style.fontSize=Math.ceil(12*mcList[i].scale/2)+8+'px';
		
		aA[i].style.filter="alpha(opacity="+100*mcList[i].alpha+")";
		aA[i].style.opacity=mcList[i].alpha;
	}
}

function sineCosine( a, b, c)
{
	sa = Math.sin(a * dtr);
	ca = Math.cos(a * dtr);
	sb = Math.sin(b * dtr);
	cb = Math.cos(b * dtr);
	sc = Math.sin(c * dtr);
	cc = Math.cos(c * dtr);
}*/
var tagEle = "querySelectorAll" in document ? document.querySelectorAll(".tag") : getClass("tag"),
	paper = "querySelectorAll" in document ? document.querySelector(".tagBall") : getClass("tagBall")[0];
RADIUS =300,
	fallLength = 500,
	tags=[],
	angleX = Math.PI/500,
	angleY = Math.PI/500,
	CX = paper.offsetWidth/2,
	CY = paper.offsetHeight/2,
	EX = paper.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft,
	EY = paper.offsetTop + document.body.scrollTop + document.documentElement.scrollTop;

function getClass(className){
	var ele = document.getElementsByTagName("*");
	var classEle = [];
	for(var i=0;i<ele.length;i++){
		var cn = ele[i].className;
		if(cn === className){
			classEle.push(ele[i]);
		}
	}
	return classEle;
}

function innit(){
	for(var i=0;i<tagEle.length;i++){
		var a , b;
		var k = (2*(i+1)-1)/tagEle.length - 1;
		var a = Math.acos(k);
		var b = a*Math.sqrt(tagEle.length*Math.PI);
		// var a = Math.random()*2*Math.PI;
		// var b = Math.random()*2*Math.PI;
		var x = RADIUS * Math.sin(a) * Math.cos(b);
		var y = RADIUS * Math.sin(a) * Math.sin(b);
		var z = RADIUS * Math.cos(a);
		var t = new tag(tagEle[i] , x , y , z);
		tagEle[i].style.color = "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
		tags.push(t);
		t.move();
	}
}

Array.prototype.forEach = function(callback){
	for(var i=0;i<this.length;i++){
		callback.call(this[i]);
	}
}

function animate(){
	setInterval(function(){
		rotateX();
		rotateY();
		tags.forEach(function(){
			this.move();
		})
	} , 17)
}

if("addEventListener" in window){
	paper.addEventListener("mousemove" , function(event){
		var x = event.clientX - EX - CX;
		var y = event.clientY - EY - CY;
		// angleY = -x* (Math.sqrt(Math.pow(x , 2) + Math.pow(y , 2)) > RADIUS/4 ? 0.0002 : 0.0001);
		// angleX = -y* (Math.sqrt(Math.pow(x , 2) + Math.pow(y , 2)) > RADIUS/4 ? 0.0002 : 0.0001);
		angleY = x*0.0001;
		angleX = y*0.0001;
	});
}
else {
	paper.attachEvent("onmousemove" , function(event){
		var x = event.clientX - EX - CX;
		var y = event.clientY - EY - CY;
		angleY = x*0.0001;
		angleX = y*0.0001;
	});
}

function rotateX(){
	var cos = Math.cos(angleX);
	var sin = Math.sin(angleX);
	tags.forEach(function(){
		var y1 = this.y * cos - this.z * sin;
		var z1 = this.z * cos + this.y * sin;
		this.y = y1;
		this.z = z1;
	})

}

function rotateY(){
	var cos = Math.cos(angleY);
	var sin = Math.sin(angleY);
	tags.forEach(function(){
		var x1 = this.x * cos - this.z * sin;
		var z1 = this.z * cos + this.x * sin;
		this.x = x1;
		this.z = z1;
	})
}

var tag = function(ele , x , y , z){
	this.ele = ele;
	this.x = x;
	this.y = y;
	this.z = z;
}

tag.prototype = {
	move:function(){
		var scale = fallLength/(fallLength-this.z);
		var alpha = (this.z+RADIUS)/(2*RADIUS);
		this.ele.style.fontSize = 15 * scale + "px";
		this.ele.style.opacity = alpha+0.5;
		this.ele.style.filter = "alpha(opacity = "+(alpha+0.5)*100+")";
		this.ele.style.zIndex = parseInt(scale*100);
		this.ele.style.left = this.x + CX - this.ele.offsetWidth/2 +"px";
		this.ele.style.top = this.y + CY - this.ele.offsetHeight/2 +"px";
	}
}
innit();
animate();
