import $ from 'jquery';



var form = $(".form");






var info = $.ajax({
	url: `https://json-data.herokuapp.com/forms`,
	success: addForm,
});






function addForm (data){
	for (var i = 0; i < data.length; i++){ 
		var formHTML = formTemplate(i, data);
		form.append(formHTML);
	}
}





function formTemplate (index, array) {

	if (array[index].type === "select"){
		var HTML = `
		<select class="selectBar" name="selectB">
		<option>Select language...</option>`;
		for (var i=0; i<array[index].options.length; i++){
			var optionHTML = `


			<option>${array[index].options[i].label}</option>`;
			HTML = HTML+optionHTML;
		}
		HTML=HTML+`</select>`;
		return HTML;
	} 


 else if (array[index].label === "Your Comment"){
		var HTML = `
		
		<i class="fa ${array[index].icon}  kewl"></i>
		<textarea class="yourComment test" type="${array[index].type}" placeholder="${array[index].label}"></textarea>`;

		return HTML;
}





 else if (array[index].label === "Mobil Number"){
		var HTML = `
		
		<i class="fa ${array[index].icon}  mobil"></i>
		<input class="inputBar" type="${array[index].type}" placeholder="${array[index].label}">`;

		return HTML;
}



	else {
		var HTML = `
		
		<i class="fa ${array[index].icon}"></i>
		<input class="inputBar" type="${array[index].type}" placeholder="${array[index].label}">

		` ;
		return HTML;
	}
}