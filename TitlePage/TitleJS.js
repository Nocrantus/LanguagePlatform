function redirectToDeckBrowser() {
	if (isLoggedIn) {
	window.location.href = "./DeckBrowser/DeckBrowser.html";
	} else {
		placeholder();
	}
}

function redirectToDeckCreator() {
	if (isLoggedIn) {
		window.location.href = "./DeckCreator/DeckCreator.html";
		} else {
			placeholder();
		}
}

function redirectToLibraryBrowser() {
	if (isLoggedIn) {
		window.location.href = "./LibraryBrowser/LibraryBrowser.html";
		} else {
			placeholder();
		}
}

function redirectToLogin() {
	window.location.href = "./login.html";
}

function placeholder(event){
	window.alert("This function has yet to be implemented / tested");
}