// Element constants
const navMobileButton = document.getElementById("nav-mobile-button");
const navbar = document.getElementById("navbar");
const navList = document.getElementById("nav-list");
const viewWorkButton = document.getElementById("view-work-button");

// ----------------------------------------------
// Toggle mobile menu on hamburger click
// ----------------------------------------------
navMobileButton.onclick = () => {
  navbar.classList.toggle("border-b", "border-white");
  navList.classList.toggle("hidden");
}

// ----------------------------------------------
// view-work-button onclick handling
// ----------------------------------------------
viewWorkButton.onclick = () => {
  document.getElementById('work').scrollIntoView();
}


// ----------------------------------------------
// .nav-dot visual handling
// ----------------------------------------------

// Generates an array of titles, sorted by their current distance from the top of the page
// The first element in this list, i.e. titles[0] is will hence be the section closest to the top
// of the window, i.e. the current section viewed by the user.
// The topmost section will then have the "selected-circle" css class applied to it's nav-dot element.
// this method is initially called, then contatantly updated as as the user scrolls due to the scroll event listener.
function updateList() {
  // make a list of title elements, sorted by closest to the top of the client rectangle.
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

  // remove "selected-circle" from all nav-dot elements it's been applied to (essentially resetting the style here)
	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
  // then get the title element closest to the top (titles[0]) and apply the 'selected-circle' 
  // style class to it's corresponding .nav-dot element.
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}


// ----------------------------------------------
// main
// ----------------------------------------------

// initial call on page load, selects the home section 
// and highlights circle by default as closest to client top bounds.
updateList();

// updateList on scroll changes, causing next highest section to have its circle highlighted.
// this also works when clicking on the .nav-dot elements, due to scroll-behaviour:smooth set
// in index.css custom stylesheets
window.addEventListener('scroll', () => {
    updateList();
})
