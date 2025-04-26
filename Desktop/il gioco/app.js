console.log("Ciao, mondo!");

// Gestione della Tappa 1
const input = document.getElementById('risposta');
const button = document.getElementById('verifica');
const risultato = document.getElementById('risultato');
const congratulazioniDiv = document.getElementById('congratulazioni');

button.addEventListener('click', () => {
  const risposta = input.value.trim().toLowerCase();

  if (risposta === "piazza santa croce") {
    risultato.textContent = "Risposta corretta!";
    risultato.style.color = "lightgreen";
    congratulazioniDiv.style.display = "block";
  } else {
    risultato.textContent = "Riprova!";
    risultato.style.color = "crimson";
    congratulazioniDiv.style.display = "none";
  }
});

// Gestione della risposta per la Tappa 1
document.getElementById('startGame').addEventListener('click', function () {
  document.getElementById('audioSection').style.display = 'block';
  document.getElementById('audioTappa').play();
});

// Gestione risposta Tappa 1 con più risposte valide
document.getElementById('submitAnswer').addEventListener('click', function () {
  const userInput = document.getElementById('userInput').value.trim().toLowerCase();

  const validAnswers = [
      'piazza santa croce',
      'santa croce',
      'basilica di santa croce'
  ];

  if (validAnswers.includes(userInput)) {
      document.getElementById('correctFeedback').style.display = 'block';
      document.getElementById('incorrectFeedback').style.display = 'none';
      document.getElementById('image').style.display = 'block';
      document.getElementById('congratulazioni').style.display = 'block';
  } else {
      document.getElementById('incorrectFeedback').style.display = 'block';
      document.getElementById('correctFeedback').style.display = 'none';
      document.getElementById('image').style.display = 'none';
  }
});

// Passaggio alla Tappa 2
document.getElementById('nextTappa').addEventListener('click', function () {
  document.getElementById('congratulazioni').style.display = 'none';
  document.getElementById('tappa2Section').style.display = 'block';
  document.getElementById('audioSectionTappa2').style.display = 'block';
  document.getElementById('audioTappa2').play();
});

  // Gestisce la risposta della Tappa 2
  document.getElementById('submitAnswerTappa2').addEventListener('click', function () {
  const userInputTappa2 = document.getElementById('userInputTappa2').value.trim().toLowerCase();

  const validAnswersTappa2 = [
      'piazza della signoria',
      'palazzo vecchio',
      'piazzale della signoria'
  ];

  if (validAnswersTappa2.includes(userInputTappa2)) {
      document.getElementById('correctFeedbackTappa2').style.display = 'block';
      document.getElementById('incorrectFeedbackTappa2').style.display = 'none';
      document.getElementById('imageTappa2').style.display = 'block';
      document.getElementById('nextTappa2').style.display = 'block';
  } else {
      document.getElementById('incorrectFeedbackTappa2').style.display = 'block';
      document.getElementById('correctFeedbackTappa2').style.display = 'none';
      document.getElementById('imageTappa2').style.display = 'none';
  }
});

// Vai alla Tappa 3 dopo la risposta corretta della Tappa 2
document.getElementById('nextTappa2').addEventListener('click', function () {
  document.getElementById('tappa2Section').style.display = 'block'; // Tappa 2 resta visibile
  document.getElementById('tappa3Section').style.display = 'block';
  document.getElementById('audioSectionTappa3').style.display = 'block';
  document.getElementById('audioTappa3').play();
});

document.getElementById('submitAnswerTappa3').addEventListener('click', function () {
  const userInputTappa3 = document.getElementById('userInputTappa3').value.trim().toLowerCase();

  const validAnswersTappa3 = [
      'duomo di firenze',
      'duomo',
      'basilica di santa maria del fiore'
  ];

  if (validAnswersTappa3.includes(userInputTappa3)) {
      document.getElementById('correctFeedbackTappa3').style.display = 'block';
      document.getElementById('incorrectFeedbackTappa3').style.display = 'none';
      document.getElementById('imageTappa3').style.display = 'block';
      document.getElementById('nextTappa3').style.display = 'block';
  } else {
      document.getElementById('incorrectFeedbackTappa3').style.display = 'block';
      document.getElementById('correctFeedbackTappa3').style.display = 'none';
      document.getElementById('imageTappa3').style.display = 'none';
  }
});

// Vai alla Tappa 4 dopo la risposta corretta della Tappa 3
document.getElementById('nextTappa3').addEventListener('click', function () {
  document.getElementById('tappa3Section').style.display = 'block';
  document.getElementById('tappa4Section').style.display = 'block';
  document.getElementById('audioSectionTappa4').style.display = 'block';
  document.getElementById('audioTappa4').play();
});

document.getElementById('submitAnswerTappa4').addEventListener('click', function () {
  const userInputTappa4 = document.getElementById('userInputTappa4').value.trim().toLowerCase();

  const validAnswersTappa4 = [
      'il porcellino',
      'porcellino',
      'statua del porcellino'
  ];

  if (validAnswersTappa4.includes(userInputTappa4)) {
      document.getElementById('correctFeedbackTappa4').style.display = 'block';
      document.getElementById('incorrectFeedbackTappa4').style.display = 'none';
      document.getElementById('imageTappa4').style.display = 'block';
      document.getElementById('nextTappa4').style.display = 'block';
  } else {
      document.getElementById('incorrectFeedbackTappa4').style.display = 'block';
      document.getElementById('correctFeedbackTappa4').style.display = 'none';
      document.getElementById('imageTappa4').style.display = 'none';
  }
});

// Vai alla Tappa 5 dopo la risposta corretta della Tappa 4
document.getElementById('nextTappa4').addEventListener('click', function () {
  document.getElementById('tappa4Section').style.display = 'block';
  document.getElementById('tappa5Section').style.display = 'block';
  document.getElementById('audioSectionTappa5').style.display = 'block';
  document.getElementById('audioTappa5').play();
});

  document.getElementById('submitAnswerTappa5').addEventListener('click', function() {
const userInputTappa5 = document.getElementById('userInputTappa5').value.trim().toLowerCase();
const correctAnswerTappa5 = 'Ponte vecchio';

if (userInputTappa5 === correctAnswerTappa5.toLowerCase()) {
  document.getElementById('correctFeedbackTappa5').style.display = 'block';
  document.getElementById('incorrectFeedbackTappa5').style.display = 'none';
  document.getElementById('imageTappa5').style.display = 'block';
  document.getElementById('nextTappa5').style.display = 'block';
} else {
  document.getElementById('incorrectFeedbackTappa5').style.display = 'block';
  document.getElementById('correctFeedbackTappa5').style.display = 'none';
  document.getElementById('imageTappa5').style.display = 'none';
}
});


  document.getElementById('nextTappa5').addEventListener('click', function() {
      document.getElementById('tappa5Section').style.display = 'block';  // Tappa 2 non nasconde più
      document.getElementById('tappa6Section').style.display = 'block';
      document.getElementById('audioSectionTappa6').style.display = 'block';
      document.getElementById('audioTappa6').play();
  });

  document.getElementById('submitAnswerTappa6').addEventListener('click', function () {
  const userInputTappa6 = document.getElementById('userInputTappa6').value.trim().toLowerCase();

  const validAnswersTappa6 = [
      'piazzale pitti',
      'palazzo pitti',
      'pitti'
  ];

  if (validAnswersTappa6.includes(userInputTappa6)) {
      document.getElementById('correctFeedbackTappa6').style.display = 'block';
      document.getElementById('incorrectFeedbackTappa6').style.display = 'none';
      document.getElementById('imageTappa6').style.display = 'block';
      document.getElementById('nextTappa6').style.display = 'block';
  } else {
      document.getElementById('incorrectFeedbackTappa6').style.display = 'block';
      document.getElementById('correctFeedbackTappa6').style.display = 'none';
      document.getElementById('imageTappa6').style.display = 'none';
  }
});

// Vai alla Tappa 7 dopo la risposta corretta della Tappa 6
document.getElementById('nextTappa6').addEventListener('click', function () {
  document.getElementById('tappa6Section').style.display = 'block';
  document.getElementById('tappa7Section').style.display = 'block';
  document.getElementById('audioSectionTappa7').style.display = 'block';
  document.getElementById('audioTappa7').play();
});

  document.getElementById('submitAnswerTappa7').addEventListener('click', function() {
const userInputTappa7 = document.getElementById('userInputTappa7').value.trim().toLowerCase();
const correctAnswerTappa7 = 'Piazzale Michelangelo';

if (userInputTappa7 === correctAnswerTappa7.toLowerCase()) {
  document.getElementById('correctFeedbackTappa7').style.display = 'block';
  document.getElementById('incorrectFeedbackTappa7').style.display = 'none';
  document.getElementById('imageTappa7').style.display = 'block';
  document.getElementById('nextTappa7').style.display = 'block';
} else {
  document.getElementById('incorrectFeedbackTappa7').style.display = 'block';
  document.getElementById('correctFeedbackTappa7').style.display = 'none';
  document.getElementById('imageTappa7').style.display = 'none';
}
});

