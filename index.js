window.onload = function(){
	zoom(1920,1048)
	
	let changeBtn = document.getElementById('change')
	changeBtn.onclick = function(){change()}
	let qqBtn = document.getElementById('qq')
	let weiboBtn = document.getElementById('weibo')
	qqBtn.onclick = function(){share('qq')}
	weiboBtn.onclick = function(){share('weibo')}
}
window.onresize = function(){
	zoom(1920,1048)
};

function zoom(x,y){
	var width = 1920;
	var height = 1048;
	var x = window.innerWidth/width;
	var y = window.innerHeight/height;
	var body = document.getElementsByTagName('body')[0]
	body.style.webkitTransform= 'scale(' + x + ',' + y + ')'
	body.style.msTransform= 'scale(' + x + ',' + y + ')'
	body.style.mozTransform='scale(' + x + ',' + y + ')'
	body.style.oTransform='scale(' + x + ',' + y + ')'
	
}
function change(){
	let contentArr = ["This is XChan's FreeCodeCamp homework.","Hellow World!","Nice to meet you!","I'm XChan!" ]
	let r = Math.floor(Math.random()*256)
	let g = Math.floor(Math.random()*256)
	let b = Math.floor(Math.random()*256)
	let p = document.getElementsByTagName('p')[0]
	let changeBtn = document.getElementById('change')
	let btns = document.getElementsByTagName('button')
	let body = document.getElementsByTagName('body')[0]
	let top = document.getElementsByClassName('top')[0]
	let medium = document.getElementsByClassName('medium')[0]
	top.style.color = 'rgb('+r+','+g+','+b+')'
	medium.style.color = 'rgb('+r+','+g+','+b+')'
	body.style.color = 'rgb('+r+','+g+','+b+')'
	body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
	for(let i = 0;i<btns.length;i++){
		btns[i].style.backgroundColor = 'rgb('+r+','+g+','+b+')'
	}
	p.innerHTML = contentArr[Math.floor(Math.random()*4)]
}
function x(i){
	if(i==0){
		return 1
	}
	return i*x(i-1)
}
function share(type){
	let title = encodeURIComponent("XChan FreeCodeCamp");
	let link = encodeURIComponent('https://codepen.io/XChan/pen/jYjrQy');
	let image = encodeURIComponent('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517462615504&di=2feb80eb25c75754097ee92fdce7d37e&imgtype=jpg&src=http%3A%2F%2Fwww.wanhuajing.com%2Fpic%2F1606%2F1716%2F5843307%2F6_536_74.jpg');
	if(type == 'qq'){
		window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + link + "&title=" + title  + "&pics=" + image);
	}
	if(type == 'weibo'){
		window.open("http://v.t.sina.com.cn/share/share.php?url=" + link + "&title=" + title + "&content=utf8&pic=" + image);
	}
}
/*function textMove(){
	let inputs = document.getElementsByTagName('input')
	let labels = document.getElementsByTagName('label')
	for(let i = 0; i< inputs.length;i++){
		inputs[i].addEventListener('input', function(){
			if(inputs[i].value==''){
				let target = labels[i]
				target.style.fontSize = '30px'
				target.style.top = '44px'
				target.style.color = '#666' 
			}else{
				let target = labels[i]
				target.style.fontSize = '20px'
				target.style.top = '20px'
				target.style.color = '#722872'
			}
		})
	}
	let textAreas = document.getElementsByTagName('textArea')[0]
	textAreas.addEventListener('input', function(){
		if(textAreas.value==''){
			let target = labels[3]
			target.style.fontSize = '30px'
			target.style.top = '44px'
			target.style.color = '#666' 
		}else{
			let target = labels[3]
			target.style.fontSize = '20px'
			target.style.top = '20px'
			target.style.color = '#722872'
		}
	})
}
function BtnCheck(){
	let btns = document.getElementsByClassName('headBtn')
	for(let i = 0;i<btns.length;i++){
		btns[i].onclick = function(){
			let last = document.getElementsByClassName('checked')[0]
			last.classList.remove('checked')
			btns[i].classList.add('checked')
		}
	}
}*/
/*window.onscroll = function(){
	let btns = document.getElementsByClassName('headBtn')
	let t = document.documentElement.scrollTop || document.body.scrollTop;
	let aboutT = document.getElementById('about').offsetTop
	let protofolidT = document.getElementById('products').offsetTop
	let contactT = document.getElementById('contact').offsetTop
	if(t<(protofolidT-10)){
    	let last = document.getElementsByClassName('checked')[0]
			last.classList.remove('checked')
			btns[0].classList.add('checked')
	}
	if(t>(protofolidT-10)&&t<(contactT-10)){
		
		let last = document.getElementsByClassName('checked')[0]
			last.classList.remove('checked')
			btns[1].classList.add('checked')
	}
	if(t>(contactT-10)){
		
		let last = document.getElementsByClassName('checked')[0]
			last.classList.remove('checked')
			btns[2].classList.add('checked')
	}
}*/