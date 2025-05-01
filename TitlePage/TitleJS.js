function redirectToDeckBrowser() {
	window.location.href = "./DeckBrowser/DeckBrowser.html";
}

function redirectToDeckCreator() {
	window.location.href = "./DeckCreator/DeckCreator.html";
}

function redirectToLibraryBrowser() {
	window.location.href = "./LibraryBrowser/LibraryBrowser.html";
}

function redirectToLogin() {
	window.location.href = "./login.html";
}

function redirectToRegister() {
	window.location.href='#title';
	document.getElementById(`login-form`).classList.add('hidden');
	document.getElementById(`register-form`).classList.remove('hidden');
}

function placeholder() {
	window.alert("This function has yet to be implemented / tested");
}