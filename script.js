const cardContentOne = document.querySelector(".card-content-1");
const cardContentTwo = document.querySelector(".card-content-2");
const btns = document.querySelectorAll(".card__raiting-btn");
const btnSubmit = document.getElementById("btn-submit");
const score = document.querySelector(".score");
let userScore;

btnSubmit.addEventListener("click", submit);
btns.forEach((btn) => {
	btn.addEventListener("click", btnClick);
});

function submit() {
	cardContentOne.classList.add("hide");
	score.textContent = userScore;
	cardContentTwo.classList.remove("hide");
}

function btnClick(event) {
	btns.forEach((btn) => {
		btn.classList.remove("active");
	});

	if (event.target.classList.contains("card__raiting-btn")) {
		event.target.classList.add("active");
	} else {
		event.target.parentElement.classList.add("active");
	}

	userScore = event.target.textContent;
}
