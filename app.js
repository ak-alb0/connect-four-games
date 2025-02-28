const menu = document.getElementById("menu");
const body = document.body;
const secMenu = document.querySelector(".secMenu");
const dialogPause = document.querySelector(".dialogPause");
const opacity = document.querySelector(".opacity");
const timerPara = document.querySelector(".chronoPointPlayer");
const divFooter = document.querySelector(".divFooter");
const imgCursor = document.querySelector(".imgCursor");
const spanPlayerTurn = document.querySelector(".spanPlayerTurn");
const divChrono = document.querySelector(".chronometre");
const joueur = document.querySelector(".chronoPlayerH2");
const divImgCursor = document.querySelector(".divImgCursor");
let scoreOne = document.querySelector(".scoreOne");
let scoreTwo = document.querySelector(".scoreTwo");
let scorePlayerOne = 0;
let scorePlayerTwo = 0;
let currentPlayer = 0;
let chronomètre = 15;
let namePlayer;
let timer;

function startChrono() {
    clearInterval(timer);
    chronomètre = 15;
    timerPara.textContent = `${chronomètre}s`;

    timer = setInterval(() => {
        if (chronomètre > 0) {
            chronomètre--;
            timerPara.textContent = `${chronomètre}s`;
        } else {
            startChrono();
            if (currentPlayer % 2 == 0) {
                imgCursor.src = "./assets/cursorYellow.svg";
                timerPara.style.color = "var(--black)";
                spanPlayerTurn.style.color = "var(--black)";
                divChrono.style.backgroundColor = "var(--player-two)";
                joueur.style.color = "var(--black)";

            } else {
                imgCursor.src = "./assets/cursorRed.svg";
                timerPara.style.color = "var(--white)";
                spanPlayerTurn.style.color = "var(--white)";
                divChrono.style.backgroundColor = "var(--player-one)";
                joueur.style.color = "var(--white)";
            }
            currentPlayer++;
        }
    }, 1000);
}

function createContainer(classContainer = "", idContainer = "", type) {
	const element = document.createElement(type);

	if (classContainer) element.classList.add(classContainer);
	if (idContainer) element.id = idContainer;
	return element;
}

function createText(classText = "", idText = "", texte = "", type) {
	const element = document.createElement(type);
	if (classText) element.classList.add(classText);
	if (idText) element.id = idText;
	element.textContent = texte;

	return element;
}

function createImg(classImg = "", idImg = "", src, alt) {
	const img = document.createElement("img");

	if (classImg) img.classList.add(classImg);
	if (idImg) img.id = idImg;
	img.src = src;
	img.alt = alt;

	return img;
}

function secPause() {
	const dialog = createContainer("dialogPause", "", "dialog");

	const h2 = createText("pauseH2", "", "PAUSE", "h2");
	dialog.appendChild(h2);

	const divBtnPause = createContainer("divBtnPause", "", "div");
	dialog.appendChild(divBtnPause);

	const btnContinue = createText("btnContinue", "", "CONTINUE GAME", "button");
	divBtnPause.appendChild(btnContinue);

	const btnRestart = createText("btnRestart", "", "RESTART", "button");
	divBtnPause.appendChild(btnRestart);

	const btnQuit = createText("btnQuit", "", "QUIT GAME", "button");
	divBtnPause.appendChild(btnQuit);

	body.appendChild(dialog);
}

function secRule() {
	const secRule = createContainer("secRule", "", "section");
	const cardRules = createContainer("cardRules", "", "div");
	const rulesH2 = createText("rulesH2", "", "RULES", "h2");
	cardRules.appendChild(rulesH2);
	const hgroup = createContainer("", "", "hgroup");
	const objectiveH3 = createText("", "", "OBJECTIVE", "h3");
	const pObjectif = createText(
		"pObjectif",
		"",
		"Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).",
		"p"
	);

	hgroup.appendChild(objectiveH3);
	hgroup.appendChild(pObjectif);

	cardRules.appendChild(hgroup);

	const divH3Ol = createContainer("divH3Ol", "", "div");

	const howToPlayH3 = createText("", "", "HOW TO PLAY", "p");

	const ol = createContainer("", "", "ol");

	const steps = [
		"Red goes first in the first game.",
		"Players must alternate turns, and only one disc can be dropped in each turn.",
		"The game ends when there is a 4-in-a-row or a stalemate.",
		"The starter of the previous game goes second on the next game.",
	];

	let index = 1;
	for (const step of steps) {
		const li = document.createElement("li");

		const spanLi = createText("spanLi", "", index, "span");
		spanLi.classList.add("spanLi");
		spanLi.textContent = index;

		li.appendChild(spanLi);
		li.appendChild(document.createTextNode(step));
		ol.appendChild(li);

		index++;
	}

	divH3Ol.appendChild(howToPlayH3);
	divH3Ol.appendChild(ol);

	cardRules.appendChild(divH3Ol);

	const checkButton = createText("check", "", "", "button");

	const checkImg = createImg("", "", "./assets/check.svg", "check");

	checkButton.appendChild(checkImg);

	cardRules.appendChild(checkButton);

	secRule.appendChild(cardRules);

	body.appendChild(secRule);
}

function sectionMenu() {
	const secMenu = createContainer("secMenu", "", "section");

	const divTotalMenu = createContainer("divTotalMenu", "", "div");

	const imgLogoBase = createImg(
		"imgLogoBase",
		"",
		"./assets/logoBase.svg",
		"logo de base"
	);

	divTotalMenu.appendChild(imgLogoBase);

	const divBtnMenu = createContainer("divBtnMenu", "", "div");

	const btnPlay = createText("btnPlay", "", "PLAY VS PLAYER", "button");

	const imgPlay = createImg(
		"",
		"",
		"./assets/player-vs-player.svg",
		"player vs player"
	);

	btnPlay.appendChild(imgPlay);

	divBtnMenu.appendChild(btnPlay);

	const btnRules = createText("btnRules", "", "GAME RULES", "button");

	divBtnMenu.appendChild(btnRules);

	divTotalMenu.appendChild(divBtnMenu);

	secMenu.appendChild(divTotalMenu);

	body.appendChild(secMenu);
}

function createVictoryBanner(nomDuJoueur) {
    const winPlayer = createContainer("winPlayer", "", "div");

    const winH2 = createText("winH2", "", "PLAYER ", "h2")
    winPlayer.appendChild(winH2)

    const spanWinPlayer = createText("spanWinPlayer", "", `${nomDuJoueur}`, "span")
    winH2.appendChild(spanWinPlayer)

    const winP = createText("winP", "", "WINS", "p");
    winPlayer.appendChild(winP)

    const btnReplay = createText("btnReplay", "", "PLAY AGAIN", "button")
    winPlayer.appendChild(btnReplay)

    body.appendChild(winPlayer)

    btnReplay.addEventListener("click", () => {
        clearInterval(timer);
        chronomètre = 15;
        divChrono.style.display = "flex";
        winPlayer.style.display = "none";
        for (const row of grille) {
            row.fill("");
        }
        const pionsImgs = document.querySelectorAll(".imgBtnGrid");
        for (const pion of pionsImgs) {
            pion.src = "";
            pion.alt = "";
        }
        y = 0;
        imgCursor.style.left = y + "%";
        divImgCursor.style.display = "block";
        gameOver = true;
        currentPlayer = 0;
        console.log(currentPlayer)
        let lastWin = null;
        if (lastWin == 1) {
            currentPlayer = 1;
        }else if (lastWin == 2) {
            currentPlayer = 0;
        }
        startChrono();
    });
}

sectionMenu()

function startGame() {
    startChrono()
    scorePlayerOne = 0;
    scorePlayerTwo = 0;
    currentPlayer = 0;
    chronomètre = 15;
    colonneSelec = null;
    let grille = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ];
    let verifSecMenu = document.querySelector(".secMenu");

	verifSecMenu.style.display = "none";

    divFooter.style.display = "flex";
}

const btnRules = document.querySelector(".btnRules");
const btnPlay = document.querySelector(".btnPlay");

btnRules.addEventListener("click", () => {
	let verifSecRules = document.querySelector(".secRule");

	if (!verifSecRules) {
		secRule();
	} else {
		verifSecRules.style.display = "flex";
	}

	document.querySelector(".secMenu").style.display = "none";

	const btnCheck = document.querySelector(".check");

	btnCheck.addEventListener("click", () => {
		document.querySelector(".secRule").style.display = "none";
		document.querySelector(".secMenu").style.display = "flex";
	});
});

menu.addEventListener("click", () => {
    clearInterval(timer)
	let verifSecPause = document.querySelector(".dialogPause");

	if (!verifSecPause) {
		opacity.style.display = "flex";
		secPause();
	} else {
		verifSecPause.style.display = "flex";
		opacity.style.display = "flex";
	}
	const btnContinue = document.querySelector(".btnContinue");


	btnContinue.addEventListener("click", () => {
		document.querySelector(".dialogPause").remove();
		document.querySelector(".opacity").style.display = "none";
        timer = setInterval(() => {
            if (chronomètre > 0) {
                chronomètre--;
                timerPara.textContent = `${chronomètre}s`;
            } else {
                clearInterval(timer);
            }
        }, 1000);
	});
});

const grille = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
];

const grilleAvecGagnant1 = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["X", "X", "X", "X", "", "", ""],
];

const grilleAvecGagnant2 = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
];

const grilleAvecGagnant3 = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "X", "", "", ""],
	["", "", "X", "", "", "", ""],
	["", "X", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
];

const grilleAvecGagnant4 = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "X", "", "", ""],
	["", "", "X", "O", "", "", ""],
	["", "O", "O", "O", "", "", ""],
	["X", "O", "O", "O", "O", "", ""],
];

const grilleSansGagnant = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "X", "", "", ""],
	["", "", "X", "O", "", "", ""],
	["", "O", "O", "O", "", "", ""],
	["X", "O", "O", "X", "O", "", ""],
];

function checkWinner(grille) {
	for (let i = 0; i < grille.length; i++) {
		for (let j = 0; j < grille[i].length; j++) {
			if (j <= grille[i].length - 4) {
				if (
					grille[i][j] !== "" &&
					grille[i][j] == "X" &&
					grille[i][j + 1] == "X" &&
					grille[i][j + 2] == "X" &&
					grille[i][j + 3] == "X"
				) {
					return "X";
				} else if (
					grille[i][j] !== "" &&
					grille[i][j] == "O" &&
					grille[i][j + 1] == "O" &&
					grille[i][j + 2] == "O" &&
					grille[i][j + 3] == "O"
				) {
					return "O";
				}
			}
		}
	}
    for (let i = 0; i < grille.length; i++) {
		for (let j = 0; j < grille[i].length; j++) {
			if (i <= grille[i].length - 4) {
				if (
					grille[i][j] !== "" &&
					grille[i][j] == "X" &&
					grille[i + 1][j] == "X" &&
					grille[i + 2][j] == "X" &&
					grille[i + 3][j] == "X"
				) {
					return "X";
				} else if (
					grille[i][j] !== "" &&
					grille[i][j] == "O" &&
					grille[i + 1][j] == "O" &&
					grille[i + 2][j] == "O" &&
					grille[i + 3][j] == "O"
				) {
					return "O";
				}
			}
		}
	}
for (let i = 3; i < grille.length; i++) {
    for (let j = 0; j < grille[i].length - 3; j++) {
        if (grille[i][j] !== "") {
            if (
                grille[i][j] !== "" &&
                grille[i][j] === "X" &&
                grille[i - 1][j + 1] === "X" &&
                grille[i - 2][j + 2] === "X" &&
                grille[i - 3][j + 3] === "X"
            ) {
                return "X";
            } else if (
                grille[i][j] !== "" &&
                grille[i][j] === "O" &&
                grille[i - 1][j + 1] === "O" &&
                grille[i - 2][j + 2] === "O" &&
                grille[i - 3][j + 3] === "O"
            ) {
                return "O";
            }
        }
    }
}

for (let i = 0; i < grille.length - 3; i++) {
    for (let j = 0; j < grille[i].length - 3; j++) {
        if (i <= grille.length - 4 && j >= 3) {
            if (
                grille[i][j] !== "" &&
                grille[i][j] === "X" &&
                grille[i + 1][j + 1] === "X" &&
                grille[i + 2][j + 2] === "X" &&
                grille[i + 3][j + 3] === "X"
            ) {
                return "X";
            } else if (
                grille[i][j] !== "" &&
                grille[i][j] === "O" &&
                grille[i + 1][j + 1] === "O" &&
                grille[i + 2][j + 2] === "O" &&
                grille[i + 3][j + 3] === "O"
            ) {
                return "O";
            }
        }
    }
}
	return "null";
}

btnPlay.addEventListener("click", startGame)

const parent = divImgCursor;
const divGridColumn = document.querySelectorAll(".divGridColumn");
let y = 0;
const parentWidth = parent.offsetWidth;
const cursorWidth = imgCursor.offsetWidth;
const parentWidthInPercent = parentWidth / 100;
let gameOver = true;

body.addEventListener("keydown", (e) => {
     if (e.key == "ArrowLeft") {
        y -= 15;
        if (y < 0) {
            y = 0;
        }
    } else if (e.key == "ArrowRight") {
        y += 15;
        if (y > 100 - (cursorWidth / parentWidthInPercent)) {
            y = 100 - (cursorWidth / parentWidthInPercent);
        }
    }
    if (gameOver == true) {
        if (e.code == "Space") {
        e.preventDefault();
        const colIndex = Math.floor((y / 100) * divGridColumn.length);
        let column = divGridColumn[colIndex].querySelectorAll('.imgBtnGrid');
        for (let i = column.length - 1; i >= 0; i--) {

            if (column[i].src && column[i].alt == "") {
                if (currentPlayer % 2 == 0) {
                    column[i].src = "./assets/counter-red-large.svg";
                    column[i].alt = "pion rouge";
                    imgCursor.src = "./assets/cursorYellow.svg";
                    spanPlayerTurn.textContent = "2"
                    divChrono.style.color = "var(--black)";
                    spanPlayerTurn.style.color = "var(--black)";
                    divChrono.style.backgroundColor = "var(--player-two)";
                    joueur.style.color = "var(--black)";
                    startChrono()
                    grille[i][colIndex] = "X"
                    
                } else {
                    column[i].src = "./assets/counter-yellow-large.svg";
                    column[i].alt = "pion jaune";
                    imgCursor.src = "./assets/cursorRed.svg";
                    spanPlayerTurn.textContent = "1"
                    divChrono.style.color = "var(--white)";
                    spanPlayerTurn.style.color = "var(--white)";
                    divChrono.style.backgroundColor = "var(--player-one)";
                    joueur.style.color = "var(--white)";
                    startChrono()
                    grille[i][colIndex] = "O"
                }
                currentPlayer++;

                break;
            }
        }
    }
}
    imgCursor.style.left = y + "%";
});