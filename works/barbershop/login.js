var link = document.querySelector(".login");
var pop = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var form = pop.querySelector("form");
var login = pop.querySelector("[name=login]");
var password = pop.querySelector("[name=password]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
	event.preventDefault();
	pop.classList.add("modal-content-show");
	if (storage) {
		login.value = storage;
		password.focus();
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	pop.classList.remove("modal-content-show");
});

form.addEventListener("submit", function(event) {
	if(!(login.value && password.value)) {
		event.preventDefault();
		pop.classList.remove("modal-error");
		pop.classList.add("modal-error");
	} else {
		localStorage.setItem("login", login.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode == 27) {
		if (pop.classList.contains("modal-content-show")) {
			pop.classList.remove("modal-content-show");
		}
	}
});

