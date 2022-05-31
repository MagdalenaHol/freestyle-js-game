const cards = document.querySelectorAll('.game-card');
const boards = document.querySelectorAll('.game-board');

let hasFlipped = false;
let blockBoard = false;
let firstCard, secondCard;
let level = None;



// function setLevel(level) {
//     if (level === easy) {
//         boards.remove('.game-board-medium');
//         boards.remove(".game-board-hard");
//     } else  if (level === medium) {
//         boards.remove(".game-board-easy");
//         boards.remove(".game-board-hard");
//     } else {
//         boards.remove(".game-board-easy");
//         boards.remove(".game-board-medium");
//     }

// }

function flipCard() {
    if (blockBoard) return;
    if (this===firstCard) return;

    this.classList.toggle('flip');

    if (!hasFlipped) {
        hasFlipped = true;
        firstCard = this;
    } else {
        secondCard = this;

        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            firstCard.removeEventListener('click',flipCard);
            secondCard.removeEventListener('click',flipCard);
            resetBoard();
        } else {
            blockBoard = true;
            setTimeout(() => {
                firstCard.classList.remove('flip')
                secondCard.classList.remove('flip')
                resetBoard();
            }, 1200)
        }
    }
    function resetBoard() {
        [hasFlipped, blockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

}


cards.forEach(card => card.addEventListener('click', flipCard));



// initGame();
//
// function initGame() {
//
//     Your game can start here, but define separate functions, don't write everything in here :)
//
// }
