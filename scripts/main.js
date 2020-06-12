// let  var

let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

/** 
 * 数据类型：String Number Boolean Array Object
 */
var age = 30;
var marra = true;
var children = ["hanhan", "qiangqiang"];
let name = "xiaoyi";
var firstName = "wang";

// myHeading.textContent = children[0];

/**
 * 运算符
 * 加
 * 减/乘/除
 * ===
 * !==
 * 取非 ! 
 */
let name2 = "xiaoyi";

myHeading.textContent = name2 == name

/**
 * 条件语句
 * if else
 */
if (marra) {
	// alert("congratulation");
} else {
	alert("congratulation2");
}


/**
 * 函数，复用代码
 */
function plusName(fn, second) {
	return (fn + second);
}
// alert(plusName("wang", "huayi"))


/**
 * 事件，交互能力
 */
document.querySelector('html').onclick = function() {
	// alert("别碰我")
}

let myImage = document.querySelector('img');
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	// alert(mySrc.size())
	if (mySrc === './images/img-1.png') {
		myImage.setAttribute('src', './images/img-2.png')
	} else {
		myImage.setAttribute('src', './images/img-1.png')
	}
}


let myButton = document.querySelector('button')

function setUserName() {
	let myName = prompt('请输入你的名字。');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
	setUserName()
}
