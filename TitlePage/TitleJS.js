let isLoggedIn=false;

function redirectToDeckBrowser() {
	if (isLoggedIn){
		window.location.href = "./DeckBrowser/DeckBrowser.html";
	}
	else {
		redirectToLogin();
	}
}

function redirectToDeckCreator() {
	if (isLoggedIn)
	{
		window.location.href = "./DeckCreator/DeckCreator.html";
	}
	else {
		redirectToLogin();
	}
}

function redirectToLibraryBrowser() {
	if(isLoggedIn) {
		window.location.href = "./LibraryBrowser/LibraryBrowser.html";
	}
	else {
		redirectToLogin();
	}	
}

function setLoggedIn() {
	isLoggedIn = true;
}

function redirectToRegister() {
	window.location.href='#top-anchor';
	document.getElementById(`login-form`).classList.add('hidden');
	document.getElementById(`register-form`).classList.remove('hidden');
}

function redirectToLogin() {
	window.location.href='#top-anchor';
	document.getElementById(`register-form`).classList.add('hidden');
	document.getElementById(`login-form`).classList.remove('hidden');
}

function placeholder() {
	window.alert("This function has yet to be implemented / tested");
}

function openNav1() {
	document.getElementById("SideNav1").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}
  
  function closeNav1() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
}

function openNav2() {
	document.getElementById("SideNav1").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}
  
  function closeNav2() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
}

function openNav3() {
	document.getElementById("SideNav1").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}
  
  function closeNav3() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
}
function showFeaturePopup(message) {
	const popup = document.getElementById("feature-popup");
	const msg = document.getElementById("feature-popup-message");
	msg.textContent = message;
	popup.style.display = "flex";
  }
  
  function closeFeaturePopup() {
	document.getElementById("feature-popup").style.display = "none";
  }
  
  // Optional: close when clicking outside the popup
  window.addEventListener("click", function (e) {
	const popup = document.getElementById("feature-popup");
	const content = document.querySelector(".popup-content");
	if (e.target === popup) {
	  closeFeaturePopup();
	}
  });
  
