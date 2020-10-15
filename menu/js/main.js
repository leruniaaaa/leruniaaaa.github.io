
function products(){
	$.getJSON('products.json', productsOut);
};
function productsOut(data){
	var out = '';
	var productsGrout = ''; 
	for( var key in data){
		out =`<input class="checkbox" type="checkbox" name="${data[key].type}" value="${data[key].name}">` + `<span>${data[key].name}</span>` +'<br>';
		productsGrout = '.' + data[key].type + '__inner';
		$(productsGrout).append(out);
	};
	$('.checkbox').on('click', addToProductsChecked);
};
var productsChecked = [];
function addToProductsChecked(){
	if($(this).is(':checked')){
		productsChecked.push($(this).val());
		
	} else{
		productsChecked.pop($(this).val());
	};
	localStorage.setItem('productsChecked', JSON.stringify(productsChecked));

};
$(document).ready(function(){
	products();
});