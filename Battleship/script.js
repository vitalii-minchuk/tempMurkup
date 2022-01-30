
let view = {
  displayMessage: function(msg) {
    let messageWindow = document.getElementById('message-window');
    messageWindow.innerHTML = msg;
  },
  displayHit: function(location) {
    let cell = document.getElementById(location);
    cell.classList.add ('hit')
  },
  displayMiss: function(location) {
    let cell = document.getElementById(location);
    cell.classList.add ('miss')
  }
};

let model = {
  boardSize: 7,
  numShips: 3,
  shopLength: 3,
  shipsSunk: 0,
  ships: [
    { locations: [0, 0, 0], hits: ['', '', '']},
    { locations: [0, 0, 0], hits: ['', '', '']},
    { locations: [0, 0, 0], hits: ['', '', '']},
  ],
  fire: function (guess) {
    for (let i = 0; i < this.shopLength; i++) {

      let ship = this.ships[i];
      let index = ship.locations.indexOf(guess);
      
      if (index >= 0) {
        ship.hits[index] = 'hit';
        view.displayHit(guess);
        view.displayMessage('HIT!!!');

        if (this.isSunk(ship)) {
          view.displayMessage('You sank my battleship!');
          this.shipsSunk++
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage('You missed');
    return false;
  },
  isSunk: function(ship) {
    for (let i = 0; i < ship.hits.length; i++) {
      if (ship.hits[i] !== 'hit') {
        return false;
      }
    }
    return true;
  },
  generateShipLocatuins: function() {
    let locations;

    for (let i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
  },
  generateShip: function() {
    let direction = Math.floor(Math.random() * 2);
    let row, col;

    if (direction === 1) {
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - this.shopLength));
    } else {
      row = Math.floor(Math.random() * (this.boardSize - this.shopLength));
      col = Math.floor(Math.random() * this.boardSize);
    }

    let newShipLocations = [];

    for (let i = 0; i < this.shopLength; i++) {
      if (direction === 1) {
        newShipLocations.push(row + '' + (col + i));
      } else {
        newShipLocations.push((row + i) + '' + col);
      }
    }
    return newShipLocations;
  },
  collision: function(locations) {
    for (let i = 0; i < this.numShips; i++) {
      let ship = model.ships[i];

      for (let j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false;
  },
};

let controller = {
  guesses: 0,
  processGuess: function(guess) {
    let location = parseGuess(guess);

    if (location) {
      this.guesses++;
      let hit = model.fire(location);

      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage(`You sank all my battleships,
         in ${this.guesses} guesses`);
      }
    }
  }
}

function parseGuess(guess) {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  if (guess === null || guess.length !==2) {
    alert('Please enter a letter and a number on the board');
  } else {
    firstChar = guess.charAt(0);
    let row = alphabet.indexOf(firstChar);
    let column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert('Oops, that isn\'t on the board.');
    } else if (row < 0 || row >= model.boardSize || 
      column < 0 || column >= model.boardSize) {
      alert('Oops, that\'s off the board!');
    } else {
      return row + column;
    }
  }
  return null;
}

function init() {
  const fireButton = document.getElementById('fire-button');
  fireButton.onclick = handleFireButton;
  model.generateShipLocatuins();
}

window.onload = init;

function handleFireButton() {
  const guessInput = document.getElementById('guess-input');
  let guess = guessInput.value;
  controller.processGuess(guess);
  guessInput.value = '';
}
