let radioLogin = document.getElementById("login-section");
let radioRegister = document.getElementById("register-section");
let container  = document.querySelectorAll(".container");
let loginTitle = document.getElementById("log");
let registerTitle = document.getElementById("reg");
let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");
let registerLink = document.getElementById("register-link");
let loginLink = document.getElementById("login-link");

radioLogin.addEventListener("change", () => {
	if (this.checked) {

	} else {
		console.log("Login is Checked");
		signIn.classList.add("select-animation");
		signIn.classList.remove("deselect-animation");
		signUp.classList.add("deselect-animation");
		signUp.classList.remove("select-animation");
	}
});

radioRegister.addEventListener("change", () => {
	if (this.checked) {
	
	
	} else {
		console.log("Register is Checked");
		signUp.classList.add("select-animation");
		signUp.classList.remove("deselect-animation");
		signIn.classList.add("deselect-animation");
		signIn.classList.remove("select-animation");
	}
})

registerLink.addEventListener("click", (e) => {
	e.preventDefault();
	signUp.classList.add("select-animation");
	signUp.classList.remove("deselect-animation");
	signIn.classList.add("deselect-animation");
	signIn.classList.remove("select-animation");
	registerTitle.classList.add("enlarge-right");
	registerTitle.classList.remove("blur");
	loginTitle.classList.add("blur");
	loginTitle.classList.remove("enlarge-left");
});

loginLink.addEventListener("click", (e) => {
	e.preventDefault();
	signIn.classList.add("select-animation");
	signIn.classList.remove("deselect-animation");
	signUp.classList.add("deselect-animation");
	signUp.classList.remove("select-animation");
	loginTitle.classList.add("enlarge-left");
	loginTitle.classList.remove("blur");
	registerTitle.classList.add("blur");
	registerTitle.classList.remove("enlarge-right");

});

loginTitle.addEventListener("click" , (e)=> {
	e.preventDefault();
	loginTitle.classList.add("enlarge-left");
	loginTitle.classList.remove("blur");
	registerTitle.classList.add("blur");
	registerTitle.classList.remove("enlarge-right");
	signIn.classList.add("select-animation");
	signIn.classList.remove("deselect-animation");
	signUp.classList.add("deselect-animation");
	signUp.classList.remove("select-animation");
});

registerTitle.addEventListener("click",(e) => {
	e.preventDefault();
	registerTitle.classList.add("enlarge-right");
	registerTitle.classList.remove("blur");
	loginTitle.classList.add("blur");
	loginTitle.classList.remove("enlarge-left");
	signUp.classList.add("select-animation");
	signUp.classList.remove("deselect-animation");
	signIn.classList.add("deselect-animation");
	signIn.classList.remove("select-animation");

})