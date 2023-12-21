
//Скрол і різні примінення до нього!


// const down = document.getElementById(`down`);
// const up = document.getElementById(`up`);
//
// down.addEventListener('click', () =>{
// 	document.querySelector('.second-box').scrollIntoView({behavior: 'smooth'});
// })
//
// up.addEventListener('click', () =>{
// 	document.querySelector('.first-box').scrollIntoView({behavior: 'smooth'});
// })
//
// const imageWar = document.getElementById(`image_war`);
// const text = document.querySelector(`.text`);
// let line = document.querySelector(`.line`);
//
// window.addEventListener(`scroll`, function (event) {
// 	 if (window.scrollY >= 0 && window.scrollY <= 900) {
// 		 line.style.width = `${140 + window.scrollY / 4}px`
// 		 line.style.left = `${window.scrollY / 10}px`
// 		 down.style.fontSize = `${30 + window.scrollY / 42}px`
// 		 imageWar.style.right = `${window.scrollY / 6}px`
// 		 text.style.left = `${window.scrollY / 10}px`
// 	 }
// })
//
// window.addEventListener('scroll', function () {
// 	up.style.fontSize = `${Math.max(80 - (window.scrollY/ 28), 30)}px`;
// });



//Створення чекбоксів за допомоги JS та перенесення на інше поле!!

function addCheckbox() {
	const form1 = document.forms["formOne"];
	const form2 = document.forms["formTwo"];
	let newText = form2.text.value;
	let inputButton = form2.button;
	let checkError = document.getElementById(`check_error`);

	if (newText === '') {
		checkError.style.display = `block`;
		checkError.addEventListener(`click`, () => {
			checkError.style.display = 'none';
		});
	return;
	}

	let checkbox = document.createElement(`input`);

	checkbox.type = 'checkbox';
	checkbox.id = 'checkbox_' + Date.now();

	const label = document.createElement('label');

	label.htmlFor = checkbox.id;
	label.appendChild(document.createTextNode(newText));

	const checkboxRow = document.createElement('div');

	checkboxRow.appendChild(checkbox);
	checkboxRow.appendChild(label);

		form1.appendChild(checkboxRow);
		form2.reset();

	let checkError2 = document.getElementById(`check_error2`);

	checkError2.addEventListener(`click`, () => {
		checkError2.style.display = 'none';
		checkbox.checked = false;
	})

	form1.addEventListener('click', () => {
			if (event.target.type === 'checkbox' || event.target.tagName === 'LABEL') {
				let checkboxes = form1.querySelectorAll('input[type="checkbox"]');
				if (checkboxes.length > 1) {
					event.target.parentNode.remove();
				}
				else {
					checkError2.style.display = 'block';
				}
			}
		})
}