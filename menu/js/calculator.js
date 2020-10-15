var sex = $('.sex:checked').val();
var height, weight, age;
var activity = $('.activity').val();
var target = $('.target').val();
var sexСoefficient, calories;
var proteins, fats, carbohydrates;
var proteinsСoefficient, fatsСoefficient, carbohydratesСoefficient;
var breakfastСalories, snack1Сalories, dinnerСalories, snack2Сalories, supperСalories, snack3Сalories;
function calculator(){
		sex = $('.sex:checked').val();
		height = $('.height').val();
		weight = $('.weight').val();
		age = $('.age').val();
		activity = $('.activity').val();
		target = $('.target').val();
		// коэффициент относительно пола
		if( sex == 'male'){
			sexСoefficient = 5;
		} else{
			sexСoefficient = -161;
		};
		// суточная норма
		formula = ((10 * +(weight)) + (6.25 * +(height)) - (5 * +(age)) + sexСoefficient) * activity;
		// коэффициент бжу
		proteinsСoefficient = formula / 4;
		fatsСoefficient = formula / 9;
		carbohydratesСoefficient = formula / 4;
		// суточная норма относительно цели
		if( target != 'norm'){
			if( target == 'minus'){
				calories = Math.floor(formula * 0.8);
				proteins = Math.floor(proteinsСoefficient * 0.35);
				fats = Math.floor(fatsСoefficient * 0.3);
				carbohydrates = Math.floor(carbohydratesСoefficient * 0.2);
			} else{
			 	calories = Math.floor(formula * 1.2);
			 	proteins = Math.floor(proteinsСoefficient * 0.3);
				fats = Math.floor(fatsСoefficient * 0.2);
				carbohydrates = Math.floor(carbohydratesСoefficient * 0.5);
			}
		} else{
			calories = Math.floor(formula);
			proteins = Math.floor(proteinsСoefficient * 0.3);
			fats = Math.floor(fatsСoefficient * 0.3);
			carbohydrates = Math.floor(carbohydratesСoefficient * 0.4);
		};
		// норма калорий относительно приемов пищи
		breakfastСalories = Math.floor(calories * 0.25);
		snack1Сalories = Math.floor(calories * 0.1);
		dinnerСalories = Math.floor(calories * 0.3);
		snack2Сalories = Math.floor(calories * 0.1);
		supperСalories = Math.floor(calories * 0.2);
		snack3Сalories = Math.floor(calories * 0.05);
		// console.log(Math.floor(snack1Сalories), snack1Сalories);
		// console.log(breakfastСalories, snack1Сalories, dinnerСalories, snack2Сalories, supperСalories, snack3Сalories);
		// console.log(formula, calories);
		var out = '';
		out += 'sex: ' + sex + '<br>';
		out += 'height: ' + height + '<br>';
		out += 'weight: ' + weight + '<br>';
		out += 'age: ' + age + '<br>';
		out += 'activity: ' + activity + '<br>';
		out += 'calories: ' + calories + '<br>';
		out += 'proteins: ' + proteins + '<br>';
		out += 'fats: ' + fats + '<br>';
		out += 'carbohydrates: ' + carbohydrates + '<br>';
		$('.result').html(out);
		var cpfc = [{'calories': calories, 'proteins': proteins, 'fats': fats, 'carbohydrates': carbohydrates}];
		localStorage.setItem('cpfc', JSON.stringify(cpfc));

};

$(document).ready(function(){
	$('.btn').on('click', calculator);
	
	
	
});
