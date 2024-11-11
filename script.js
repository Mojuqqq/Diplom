new Splide( '#mySlider',{
  perPage: 3,
  arrows: false,
  gap: 50,
  breakpoints: {
		1024: {
			perPage: 2,
      arrows: true,
		},
    400: {
      perPage: 1,
      arrows: false,
    }
}
 }).mount();

function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById("nav-list_none").classList.toggle("nav-list_flex");
}