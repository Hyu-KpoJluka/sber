// данные

function number() {
	let numer = document.getElementById('phone-number').value
	document.getElementById('money-number').innerHTML = numer;
	document.getElementById('money-number-user').innerHTML = numer;
	document.getElementById('number-phone').innerHTML = numer;
}

function money() {
	let money = document.getElementById('money-phone').value
	document.getElementById('money-confirm').innerHTML = money;
	document.getElementById('place_2').innerHTML = money + ' ₽';
	document.getElementById('amount-money').innerHTML = money + ' ₽';
}

function personal() {
	let personal1 = document.getElementById('fio-memory').value
	let personal3 = document.getElementById('number-cart').value
	document.getElementById('place_1').innerHTML = personal1;
	document.getElementById('fio-name').innerHTML = personal1;
	document.getElementById('date-number').innerHTML = today;
	document.getElementById('cart-number').innerHTML = personal3;
	document.getElementById('document-number').innerHTML = randomNumber;
	document.getElementById('date-document').innerHTML = today;
	document.getElementById('masterMass').innerHTML = randomMoneyRuble + ',' + randomMoneyCop + ' ₽';
}

// клик по кнопке

let clickButton1 = document.getElementById('click-button1');
clickButton1.onclick = function () {
	let sec2 = document.getElementsByClassName('sec2');
	style = sec2[0].style;
	style.zIndex = '10';
}

let clickButton2 = document.getElementById('click-button2');
clickButton2.onclick = function () {
	let sec3 = document.getElementsByClassName('sec3');
	style = sec3[0].style;
	style.zIndex = '15';
}

let clickButton3 = document.getElementById('click-button3');
clickButton3.onclick = function () {
	let sec4 = document.getElementsByClassName('sec4');
	style = sec4[0].style;
	style.zIndex = '20';
}

// шапка

! function (t, e) {
	"function" == typeof define && define.amd ? define([], function () {
		return e()
	}) : "object" == typeof exports ? module.exports = e() : t.Headhesive = e()
}(this, function () {
	"use strict";
	var t = function (e, s) {
			for (var o in s) s.hasOwnProperty(o) && (e[o] = "object" == typeof s[o] ? t(e[o], s[o]) : s[o]);
			return e
		},
		e = function (t, e) {
			var s, o, i, n = Date.now || function () {
					return (new Date).getTime()
				},
				l = null,
				c = 0,
				r = function () {
					c = n(), l = null, i = t.apply(s, o), s = o = null
				};
			return function () {
				var f = n(),
					h = e - (f - c);
				return s = this, o = arguments, 0 >= h ? (clearTimeout(l), l = null, c = f, i = t.apply(s, o), s = o = null) : l || (l = setTimeout(r, h)), i
			}
		},
		s = function () {
			return void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
		},
		o = function (t, e) {
			for (var s = 0, o = t.offsetHeight; t;) s += t.offsetTop, t = t.offsetParent;
			return "bottom" === e && (s += o), s
		},
		i = function (e, s) {
			"querySelector" in document && "addEventListener" in window && (this.visible = !1, this.options = {
				offset: 300,
				offsetSide: "top",
				classes: {
					clone: "headhesive",
					stick: "headhesive--stick",
					unstick: "headhesive--unstick"
				},
				throttle: 250,
				onInit: function () {},
				onStick: function () {},
				onUnstick: function () {},
				onDestroy: function () {}
			}, this.elem = "string" == typeof e ? document.querySelector(e) : e, this.options = t(this.options, s), this.init())
		};
	return i.prototype = {
		constructor: i,
		init: function () {
			if (this.clonedElem = this.elem.cloneNode(!0), this.clonedElem.className += " " + this.options.classes.clone, document.body.insertBefore(this.clonedElem, document.body.firstChild), "number" == typeof this.options.offset) this.scrollOffset = this.options.offset;
			else {
				if ("string" != typeof this.options.offset) throw new Error("Invalid offset: " + this.options.offset);
				this._setScrollOffset()
			}
			this._throttleUpdate = e(this.update.bind(this), this.options.throttle), this._throttleScrollOffset = e(this._setScrollOffset.bind(this), this.options.throttle), window.addEventListener("scroll", this._throttleUpdate, !1), window.addEventListener("resize", this._throttleScrollOffset, !1), this.options.onInit.call(this)
		},
		_setScrollOffset: function () {
			"string" == typeof this.options.offset && (this.scrollOffset = o(document.querySelector(this.options.offset), this.options.offsetSide))
		},
		destroy: function () {
			document.body.removeChild(this.clonedElem), window.removeEventListener("scroll", this._throttleUpdate), window.removeEventListener("resize", this._throttleScrollOffset), this.options.onDestroy.call(this)
		},
		stick: function () {
			this.visible || (this.clonedElem.className = this.clonedElem.className.replace(new RegExp("(^|\\s)*" + this.options.classes.unstick + "(\\s|$)*", "g"), ""), this.clonedElem.className += " " + this.options.classes.stick, this.visible = !0, this.options.onStick.call(this))
		},
		unstick: function () {
			this.visible && (this.clonedElem.className = this.clonedElem.className.replace(new RegExp("(^|\\s)*" + this.options.classes.stick + "(\\s|$)*", "g"), ""), this.clonedElem.className += " " + this.options.classes.unstick, this.visible = !1, this.options.onUnstick.call(this))
		},
		update: function () {
			s() > this.scrollOffset ? this.stick() : this.unstick()
		}
	}, i
});

var options = {
  offset: 0
}
var header = new Headhesive('.header', options);

// операции

let operation = document.getElementById('operation');
operation.onclick = function () {

	let operationImage = document.getElementsByClassName('operation-image');
	style = operationImage[0].style;
	style.visibility = 'visible';
	style.height = '700px';
	style.marginTop = '0px';

	let container = document.getElementsByClassName('container');
	style = container[0].style;
	style.top = 'auto';
}

// затемненье шапки

window.onload = function(){
  setInterval(function(){
	var scroll = $(window).scrollTop();
	if (scroll <= 50 && scroll >= 0) {
		$(".cap-black").animate({backgroundColor: 'rgba(0,0,0,0)'}, 200);
	}
	if (scroll <= 100 && scroll >= 51) {
		$(".cap-black").animate({backgroundColor: 'rgba(0,0,0,0.5)'}, 200);
	}
  }, 400);
}

// параллакс

$(window).scroll(function() {
	var st = $(this).scrollTop();
	$('.content').css({
		'transform' : 'translate(0%, -' + st /10 + '%'
	});
});

// телефон

$(".phone-1").mask("+7 (999) 999-99-99");
$.mask.definitions['h']='[*]';
$("#number-cart").mask("9999 99hh hhhh 9999");
$("#random-document").mask("999999");
$("#date-transaction").mask("99.99.9999");
$("#masterCartMoney").mask("999,99");

// текущая дата

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

// рандомные документ

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let randomNumber = getRandomInt(111111, 999999);

// рандомный MasterCart

function getRandomMoneyRuble(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomMoneyCop(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let randomMoneyRuble = getRandomMoneyRuble(555, 999);
let randomMoneyCop = getRandomMoneyCop(11, 99);
