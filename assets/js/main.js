//Contact form script

window.addEventListener('DOMContentLoaded',function () {
	var form = document.getElementById("my-form");
	var status = document.getElementById("status");

	function success() {
		form.reset();
		status.classList.add('success');
		status.innerHTML = "Thank You! Your form is submitted.";
	}
	function error(){
		status.innerHTML = "Oops! We encounterred an issue.";
		status.classList.add('error');
	}
	form.addEventListener("submit", function (ev) {
		ev.preventDefault();
		var data = new FormData(form);
		ajax(form.method, form.action, data , success, error);
	});
});

function ajax(method, url, data, success, error) {
var xhr = new XMLHttpRequest();
xhr.open(method, url);
xhr.setRequestHeader("Accept", "application/json");
xhr.onreadystatechange = function() {
	if(xhr.readyState !== XMLHttpRequest.DONE) return;
	if(xhr.status === 200) {
		success(xhr.response, xhr.responseType);
	}else{
		error(xhr.status, xhr.response, xhr.responseText);
	}
};
xhr.send(data);
}