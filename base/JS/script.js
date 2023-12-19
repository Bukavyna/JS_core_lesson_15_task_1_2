
const down = document.getElementById(`down`);
const up = document.getElementById(`up`);

down.addEventListener('click', () =>{
	document.querySelector('.second-box').scrollIntoView({behavior: 'smooth'});
})

up.addEventListener('click', () =>{
	document.querySelector('.first-box').scrollIntoView({behavior: 'smooth'});
})

const imageWar = document.getElementById(`image_war`);
const text = document.querySelector(`.text`);
let line = document.querySelector(`.line`);

window.addEventListener(`scroll`, function (event) {
	 if (window.scrollY >= 0 && window.scrollY <= 900) {
		 line.style.width = `${140 + window.scrollY / 4}px`
		 line.style.left = `${window.scrollY / 10}px`
		 down.style.fontSize = `${30 + window.scrollY / 42}px`
		 imageWar.style.right = `${window.scrollY / 6}px`
		 text.style.left = `${window.scrollY / 10}px`
	 }
})

window.addEventListener('scroll', function () {
	up.style.fontSize = `${Math.max(80 - (window.scrollY/ 28), 30)}px`;
});

