import $ from 'jquery';



var form = $(".form");




function grabForm (event) {

	var info = $.ajax({
		url: `https://json-data.herokuapp.com/forms`,
		success: addForm,

	});
return info;
};
console.log(grabForm())





function addForm (data){
	var formHTML = formTemplate(data);
	form.append(formHTML);
}





function formTemplate (input) {
	return `

	Test test test test

	`
}