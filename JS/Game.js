const firebaseConfig = {
  apiKey: "AIzaSyAf7HDmlnl8F50XRn2i6KHvCdgd66ziEew",
  authDomain: "csci-225-final.firebaseapp.com",
  projectId: "csci-225-final",
  storageBucket: "csci-225-final.appspot.com",
  messagingSenderId: "476638522914",
  appId: "1:476638522914:web:0587b2a354f5f3c26fe47b",
  measurementId: "G-HSNP6N4LCN"
};

firebase.initializeApp(firebaseConfig);

// save the data

$("#button").click(function (e) {
  e.preventDefault();

  var score = $('#score').text();
  console.log(score);
  var name = $('#name').val();

  // made the data
  var data = {
    Name: name,
    Score: score
  };

  firebase.firestore().collection("Leaderboard").add(data);

  // clear the entry //
  $('form')[0].reset();
});

const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score');

let score = 0;

const jeaopardyCategories = [
  {
    genre: "Anime",
    questions:[
      {
        question: 'Who is narutos dad?(F)',
        correct: 'Minato',
        level: '100'
      },
      {
        question: 'Who is Kiritos girlfriend?(F)',
        correct: 'Asuna',
        level: '200'
      },
      {
        question: 'How many kids does Goku and Chi Chi have?',
        correct: '2',
        level: '300'
      },
      {
        question: 'What is Gokus favorite move?',
        correct: 'Kamehameha',
        level: '400'
      },
      {
        question: 'What was Kirito called in Season 1?',
        correct: 'Beater',
        level: '500'
      },
      {
        question: 'Who was Narutos first kiss?(F)',
        correct: 'Sasuke',
        level: '600'
      },
      {
        question: 'Who had the fourth Dragon Ball(F)?',
        correct: 'Gohan',
        level: '700'
      },
      {
        question: 'Vegeta killd who before fighting Goku?(F)',
        correct: 'Nappa',
        level: '800'
      },
      {
        question: 'Alucard backwards spells what?',
        correct: 'Dracula',
        level: '900'
      },
      {
        question: 'What is the number of copies did Alucard have to kill in order to be himself?',
        correct: '3,424,867',
        level: '1000'
      }
    ]
  },
  {
    genre: "Music",
    questions:[
      {
        question: 'Who is in the music group Silk Sonic?',
        correct: 'Anderson .Paak And Bruno Mars',
        level: '100'
      },
      {
        question: 'Who made the song Bad?',
        correct: 'Michael Jackson',
        level: '200'
      },
      {
        question: 'What album did JID make this year?',
        correct: 'The Forever Story',
        level: '300'
      },
      {
        question: 'Who made the soundtrack for One Piece Film Red?',
        correct: 'Ado',
        level: '400'
      },
      {
        question: 'What MJ album came out in 1979?',
        correct: 'Off The Wall',
        level: '500'
      },
      {
        question: 'Metro Boomin came out with what new album?',
        correct: 'Heroes And Villians',
        level: '600'
      },
      {
        question: 'Countryd look Good on you by Frank Ray came out in what year?',
        correct: '2021',
        level: '700'
      },
      {
        question: 'The new japanese song Shinunoga E-Wa who?',
        correct: 'Fujii Kaze',
        level: '800'
      },
      {
        question: 'What song did Rihanna make for Black Panther?',
        correct: 'Lift Me Up',
        level: '900'
      },
      {
        question: 'Fetty Wap made what song for Thanksgiving',
        correct: 'Sweet Yamz',
        level: '1000'
      }
    ]
  },
  {
    genre: "Games",
    questions:[
      {
        question: 'What game is Kratos from?',
        correct: 'God Of War',
        level: '100'
      },
      {
        question: 'What game is Captain Price from?',
        correct: 'Call Of Duty',
        level: '200'
      },
      {
        question: 'When you make a character it is called?',
        correct: 'Create A Character',
        level: '300'
      },
      {
        question: 'The place you put your pokemon is called?',
        correct: 'PC',
        level: '400'
      },
      {
        question: 'What do you do after hitting level 55 in Call of Duty?',
        correct: 'Prestige',
        level: '500'
      },
      {
        question: 'What game does Freddy Frazbear come from?',
        correct: "Five Nights At Freddy's",
        level: '600'
      },
      {
        question: 'How many Call of Duty games are there?',
        correct: '42',
        level: '700'
      },
      {
        question: 'What animal is knuckles?',
        correct: 'Echidna',
        level: '800'
      },
      {
        question: 'What group is the Overwatch character Reaper from?',
        correct: 'Blackwatch',
        level: '900'
      },
      {
        question: 'How many games has both Sonic and Mario been in?',
        correct: '15',
        level: '1000'
      }
    ]
  },
  {
    genre: "Math",
    questions:[
      {
        question: 'What is 1+1?',
        correct: '2',
        level: '100'
      },
      {
        question: 'What is 2*4?',
        correct: '8',
        level: '200'
      },
      {
        question: 'What is 8+5?',
        correct: '13',
        level: '300'
      },
      {
        question: 'What is 6*7?',
        correct: '42',
        level: '400'
      },
      {
        question: 'What is 5*10+8?',
        correct: '58',
        level: '500'
      },
      {
        question: 'What is 5*5*8?',
        correct: '200',
        level: '600'
      },
      {
        question: 'What is 2+4?',
        correct: '6',
        level: '700'
      },
      {
        question: 'What is 6*7+5?',
        correct: '47',
        level: '800'
      },
      {
        question: 'What is 10*0+85?',
        correct: '85',
        level: '900'
      },
      {
        question: 'What is 1*0?',
        correct: '0',
        level: '1000'
      }
    ]
  },
  {
    genre: "Star Wars",
    questions:[
      {
        question: 'What color is the Mandalorian armor at the start of the show?',
        correct: 'Red',
        level: '100'
      },
      {
        question: 'What color is Boba Fetts armor?',
        correct: 'Green',
        level: '200'
      },
      {
        question: 'What color is the Dark Saber?',
        correct: 'Black',
        level: '300'
      },
      {
        question: 'What color is Mace Windus lightsaber?',
        correct: 'Purple',
        level: '400'
      },
      {
        question: 'Who uses lightning as a weapon?',
        correct: 'Emperor Palpatine',
        level: '500'
      },
      {
        question: 'What bloodline is Rey from',
        correct: 'Palpatine',
        level: '600'
      },
      {
        question: 'Who also uses Reys lightsaber?',
        correct: 'Finn',
        level: '700'
      },
      {
        question: 'Who plays Lando Calrissian in Solo?',
        correct: 'Donald Glover',
        level: '800'
      },
      {
        question: 'What color are Ashokas lightsaber?',
        correct: 'White',
        level: '900'
      },
      {
        question: 'Who uses lightning as a weapon?',
        correct: 'Emperor Palpatine',
        level: '1000'
      }
    ]
  },
  {
    genre: "Cars",
    questions:[
      {
        question: 'W)',
        correct: 'Minato',
        level: '100'
      },
      {
        question: 'Who is Kiritos girlfriend?(F)',
        correct: 'Asuna',
        level: '200'
      },
      {
        question: 'How many kids does Goku and Chi Chi have?',
        correct: '2',
        level: '300'
      },
      {
        question: 'What is Gokus favorite move?',
        correct: 'Kamehameha',
        level: '400'
      },
      {
        question: 'What was Kirito called in Season 1?',
        correct: 'Beater',
        level: '500'
      },
      {
        question: 'Who was Narutos first kiss?(F)',
        correct: 'Sasuke',
        level: '600'
      },
      {
        question: 'Who had the fourth Dragon Ball(F)?',
        correct: 'Gohan',
        level: '700'
      },
      {
        question: 'Vegeta killd who before fighting Goku?(F)',
        correct: 'Nappa',
        level: '800'
      },
      {
        question: 'Alucard backwards spells what?',
        correct: 'Dracula',
        level: '900'
      },
      {
        question: 'What is the number of copies did Alucard have to kill in order to be himself?',
        correct: '3,424,867',
        level: '1000'
      }
    ]
  },
  {
    genre: "Music",
    questions:[
      {
        question: 'Who is in the music group Silk Sonic?',
        correct: 'Anderson .Paak And Bruno Mars',
        level: '100'
      },
      {
        question: 'Who made the song Bad?',
        correct: 'Michael Jackson',
        level: '200'
      },
      {
        question: 'What album did JID make this year?',
        correct: 'The Forever Story',
        level: '300'
      },
      {
        question: 'Who made the soundtrack for One Piece Film Red?',
        correct: 'Ado',
        level: '400'
      },
      {
        question: 'What MJ album came out in 1979?',
        correct: 'Off The Wall',
        level: '500'
      },
      {
        question: 'Metro Boomin came out with what new album?',
        correct: 'Heroes And Villians',
        level: '600'
      },
      {
        question: 'Countryd look Good on you by Frank Ray came out in what year?',
        correct: '2021',
        level: '700'
      },
      {
        question: 'The new japanese song Shinunoga E-Wa who?',
        correct: 'Fujii Kaze',
        level: '800'
      },
      {
        question: 'What song did Rihanna make for Black Panther?',
        correct: 'Lift Me Up',
        level: '900'
      },
      {
        question: 'Fetty Wap made what song for Thanksgiving',
        correct: 'Sweet Yamz',
        level: '1000'
      }
    ]
  },
  {
    genre: "Games",
    questions:[
      {
        question: 'What game is Kratos from?',
        correct: 'God Of War',
        level: '100'
      },
      {
        question: 'What game is Captain Price from?',
        correct: 'Call Of Duty',
        level: '200'
      },
      {
        question: 'When you make a character it is called?',
        correct: 'Create A Character',
        level: '300'
      },
      {
        question: 'The place you put your pokemon is called?',
        correct: 'PC',
        level: '400'
      },
      {
        question: 'What do you do after hitting level 55 in Call of Duty?',
        correct: 'Prestige',
        level: '500'
      },
      {
        question: 'What game does Freddy Frazbear come from?',
        correct: "Five Nights At Freddy's",
        level: '600'
      },
      {
        question: 'How many Call of Duty games are there?',
        correct: '42',
        level: '700'
      },
      {
        question: 'What animal is knuckles?',
        correct: 'Echidna',
        level: '800'
      },
      {
        question: 'What group is the Overwatch character Reaper from?',
        correct: 'Blackwatch',
        level: '900'
      },
      {
        question: 'How many games has both Sonic and Mario been in?',
        correct: '15',
        level: '1000'
      }
    ]
  },
  {
    genre: "Math",
    questions:[
      {
        question: 'What is 1+1?',
        correct: '2',
        level: '100'
      },
      {
        question: 'What is 2*4?',
        correct: '8',
        level: '200'
      },
      {
        question: 'What is 8+5?',
        correct: '13',
        level: '300'
      },
      {
        question: 'What is 6*7?',
        correct: '42',
        level: '400'
      },
      {
        question: 'What is 5*10+8?',
        correct: '58',
        level: '500'
      },
      {
        question: 'What is 5*5*8?',
        correct: '200',
        level: '600'
      },
      {
        question: 'What is 2+4?',
        correct: '6',
        level: '700'
      },
      {
        question: 'What is 6*7+5?',
        correct: '47',
        level: '800'
      },
      {
        question: 'What is 10*0+85?',
        correct: '85',
        level: '900'
      },
      {
        question: 'What is 1*0?',
        correct: '0',
        level: '1000'
      }
    ]
  },
  {
    genre: "Star Wars",
    questions:[
      {
        question: 'What color is the Mandalorian armor at the start of the show?',
        correct: 'Red',
        level: '100'
      },
      {
        question: 'What color is Boba Fetts armor?',
        correct: 'Green',
        level: '200'
      },
      {
        question: 'What color is the Dark Saber?',
        correct: 'Black',
        level: '300'
      },
      {
        question: 'What color is Mace Windus lightsaber?',
        correct: 'Purple',
        level: '400'
      },
      {
        question: 'Who uses lightning as a weapon?',
        correct: 'Emperor Palpatine',
        level: '500'
      },
      {
        question: 'What bloodline is Rey from',
        correct: 'Palpatine',
        level: '600'
      },
      {
        question: 'Who also uses Reys lightsaber?',
        correct: 'Finn',
        level: '700'
      },
      {
        question: 'Who plays Lando Calrissian in Solo?',
        correct: 'Donald Glover',
        level: '800'
      },
      {
        question: 'What color are Ashokas lightsaber?',
        correct: 'White',
        level: '900'
      },
      {
        question: 'Who uses lightning as a weapon?',
        correct: 'Emperor Palpatine',
        level: '1000'
      }
    ]
  }
];

function addCategory(category){
  const column = document.createElement('div');
  column.classList.add('genre-column');

  const genreTitle = document.createElement('div');
  genreTitle.classList.add('genre-title');
  genreTitle.innerText = category.genre;

  column.appendChild(genreTitle);
  game.append(column);

  category.questions.forEach(question =>{
    const card = document.createElement('div');
    card.classList.add('card');
    column.append(card);

    if(question.level === '100'){
      card.innerText = 100;
    }
    if(question.level === '200'){
      card.innerText = 200;
    }
    if(question.level === '300'){
      card.innerText = 300;
    }
    if(question.level === '400'){
      card.innerText = 400;
    }
    if(question.level === '500'){
      card.innerText = 500;
    }
    if(question.level === '600'){
      card.innerText = 600;
    }
    if(question.level === '700'){
      card.innerText = 700;
    }
    if(question.level === '800'){
      card.innerText = 800;
    }
    if(question.level === '900'){
      card.innerText = 900;
    }
    if(question.level === '1000'){
      card.innerText = 1000;
    }

    card.setAttribute('data-question', question.question);
    card.setAttribute('data-correct', question.correct);
    card.setAttribute('data-value', card.getInnerHTML());

    card.addEventListener('click', flipCard);

  });

}

jeaopardyCategories.forEach(category => addCategory(category));

function flipCard(){
  this.innerText = "";
  this.style.fontSize = "15px";
  this.style.lineHeight = "30px";
  const textDisplay = document.createElement('div');
  textDisplay.classList.add('card-text');
  textDisplay.innerText = this.getAttribute('data-question')
  const textBox = document.createElement('input');
  textBox.setAttribute('type', 'text');
  textBox.setAttribute('id', 'box');
  textBox.classList.add('text-box');
  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.classList.add('submit-button');
  submit.innerText = 'Submit';
  submit.addEventListener('click', getResult);
  this.append(textDisplay, textBox, submit);

  const allCards = Array.from(document.querySelectorAll('.card'));
  allCards.forEach(card => card.removeEventListener('click', flipCard));
}

function getResult(){
  const answer = document.getElementById("box").value;

  const allCards = Array.from(document.querySelectorAll('.card'));
  allCards.forEach(card => card.addEventListener('click', flipCard));

  const cardOfButton = this.parentElement;

  console.log(answer);

  console.log(cardOfButton);

  if(cardOfButton.getAttribute('data-correct') == answer){
    score = score + parseInt(cardOfButton.getAttribute('data-value'));
    scoreDisplay.innerText = score;
    setTimeout(() => {
      while(cardOfButton.firstChild){
        cardOfButton.removeChild(cardOfButton.lastChild);
      }
      cardOfButton.innerText = cardOfButton.getAttribute('data-value');
    }, 100);
  } else {
    setTimeout(() => {
      while(cardOfButton.firstChild){
        cardOfButton.removeChild(cardOfButton.lastChild);
      }
      cardOfButton.innerText = 0;
    }, 100);
  }
  cardOfButton.removeEventListener('click', flipCard);
}
