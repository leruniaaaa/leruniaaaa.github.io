$(function(){
	$('.box--checked').on('click', function(){
		$(this).siblings('.box__dropdown').toggleClass('box__dropdown--show');
	});
	let element;
	$('.box__option').on('click', function(){
		element = $(this);
		dropdown();
		shift();
		priceShift();
		summ();
		console.log(price, quantityInput);

	});
	$('#quantity').on('keyup', function(){
		shift();
		summ();
	});
// ----------------model----------------
let sm=$('#model').attr('data-sm'),
	md=$('#model').attr('data-md'),
	lg=$('#model').attr('data-lg'),
	sz=$('#size').attr('data-size'),
	price=md;
function priceShift(){
	let nameClass = element.parents('.box').siblings('input').attr('id');
	if(nameClass == 'model'){
		sm=element.attr('data-sm');
		md=element.attr('data-md');
		lg=element.attr('data-lg');
		$('#model').attr({'data-sm':sm, 'data-md':md, 'data-lg':lg});
		price=md;
	}
	if(nameClass == 'size'){
		sz=element.attr('data-size');
		if(sz == 'sm'){
			price=sm;
		}
		if(sz == 'md'){
			price=md;
		}
		if(sz == 'lg'){
			price=lg;
		}
	}
}
// $('.model__inner .box__option').on('click', function(){
// 		console.log('ok');
// 	})
let cost;

function summ(){
	cost = +price * +quantityInput;
	$('.cost').text(cost);
}














	let modelInput = $('#model').val(),
		sizeInput = $('#size').val(),
		quantityInput = $('#quantity').val();
// ---------change input----------------------
	function shift(){
		modelInput = $('#model').val(),
		sizeInput = $('#size').val(),
		quantityInput = $('#quantity').val();
	}
	let value;
	// -----------------dropdown---------------
	function dropdown(){
		value = element.attr('data-value');
		element.parent().siblings('.box--checked').text(value);
		element.parent().toggleClass('box__dropdown--show');
		element.parents('.box').siblings('.input').val(value);
	};


	// ------------form-------------------------
	let	text;
	$('.form__btn').on('click', function(){
		let model, 
		size, 
		quantity;
		model = $('#model').val();
		size = $('#size').val();
		quantity= $('#quantity').val();
		let str1 = 'Вы хотите заказать ';
		let str2 = ' коробку в ';
		let str3 = ' размере  в количестве ';
		let str4 = ' шт.';
		text = str1 + model + str2 + size + str3 + quantity + str4;
		$('.zakaz').addClass('zakaz--show');
		$('.zakaz__text').text(text);
	});
	$('.zakaz__btn').on('click', function(){
		$('#textarea').text(text);
	});
	$('.zakaz__btn').magnificPopup({
		type: 'inline',
		preloader: false
	});

});