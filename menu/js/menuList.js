var productsChecked = [];
var cpfc = [];
var ccal;
function products(){
	productsChecked = JSON.parse(localStorage.getItem('productsChecked'));
	cpfc = JSON.parse(localStorage.getItem('cpfc'));
	$.getJSON('products.json', checkList);
};


function checkList(data){
	for(var i=0, j=0; i<data.length; i++){
		if(productsChecked[j]==data[i].name){
			productsChecked[j]=data[i];
			i=0;
			j++;
		};
	};
	menuList();
};
var breakfast = [];
var snack1 = [];
var dinner = [];
var snack2 = [];
var supper = [];
var snack3 = [];
var groats = [];
var fruit = [];
var meat = [];
var vegetables = [];
var fermented = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};
function menuList(){
	var i, c;
	for(var key in productsChecked){
		if(productsChecked[key].type=='groats'){
			groats.push(productsChecked[key]);
		};

		if(productsChecked[key].type=='fruit'){
			fruit.push(productsChecked[key]);
		};
		if(productsChecked[key].type=='meat'){
			meat.push(productsChecked[key]);
		};
		if(productsChecked[key].type=='vegetables'){
			vegetables.push(productsChecked[key]);
		};
		if(productsChecked[key].type=='fermented'){
			fermented.push(productsChecked[key]);
		};
	};
	breakfastList();
	snack1List();
	dinnerList();
	snack2List();
	supperList();
	snack3List();
};
var breakfastСalories, snack1Сalories, dinnerСalories, snack2Сalories, supperСalories, snack3Сalories;

function Calories(){
	ccal=cpfc[0].calories;
	breakfastСalories = Math.floor(ccal * 0.25),
	snack1Сalories = Math.floor(ccal * 0.1),
	dinnerСalories = Math.floor(ccal * 0.3),
	snack2Сalories = Math.floor(ccal * 0.1),
	supperСalories = Math.floor(ccal * 0.2),
	snack3Сalories = Math.floor(ccal * 0.05);
}
function breakfastList(){
	i = getRandomInt(groats.length);
	console.log(groats[i].name);
	c = groats[i].calories;
	c1 = c/20;
	var j, k;
	for(j = c1, k=0; j<breakfastСalories; j= j+c1, ++k){}
	gk=k*5;
	console.log(gk);
	$('.breakfast').append(groats[i].name + '(' + gk +'гр)');
};
function snack1List(){
	i = getRandomInt(fruit.length);
	console.log(fruit[i].name);
	c = fruit[i].calories;
	c1 = c/20;
	var j, k;
	for(j = c1, k=0; j<snack1Сalories; j= j+c1, ++k){}
	gk=k*5;
	console.log(gk);
	$('.snack1').append(fruit[i].name + '(' + gk +'гр)');
};
function dinnerList(){
	i = getRandomInt(meat.length);
	console.log(meat[i].name);
	c = meat[i].calories;
	c1 = c/20;
	var j, k;
	for(j = c1, k=0; j<dinnerСalories; j= j+c1, ++k){}
	gk=k*5;
	console.log(gk);
	$('.dinner').append(meat[i].name + '(' + gk +'гр)');
};
function snack2List(){
	i = getRandomInt(vegetables.length);
	console.log(vegetables[i].name);
	c = vegetables[i].calories;
	c1 = c/20;
	var j, k;
	for(j = c1, k=0; j<snack2Сalories; j= j+c1, ++k){}
	gk=k*5;
	console.log(gk);
	$('.snack2').append(vegetables[i].name + '(' + gk +'гр)');
};
function supperList(){
	i = getRandomInt(meat.length);
	console.log(meat[i].name);
	c = meat[i].calories;
	c1 = c/20;
	var j, k;
	for(j = c1, k=0; j<supperСalories; j= j+c1, ++k){}
	gk=k*5;
	console.log(gk);
	$('.supper').append(meat[i].name + '(' + gk +'гр)');
};
function snack3List(){
	i = getRandomInt(fermented.length);
	console.log(fermented[i].name);
	c = fermented[i].calories;
	c1 = c/20;
	var j, k;
	for(j = c1, k=0; j<snack3Сalories; j= j+c1, ++k){}
	gk=k*5;
	console.log(gk);
	$('.snack3').append(fermented[i].name + '(' + gk +'гр)');
};


$(document).ready(function(){
	products();
	Calories();
	console.log(ccal);
	console.log(breakfastСalories, snack1Сalories, dinnerСalories, snack2Сalories, supperСalories, snack3Сalories);
});