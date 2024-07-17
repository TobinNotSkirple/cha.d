function checkAnswer() {
    const answer = document.getElementById('answer').value;
    if (answer.toLowerCase() === 'correctanswer') {
        document.getElementById('result').innerHTML = 'Correct! Go to <a href="puzzle2.html">Puzzle 2</a>';
    } else {
        document.getElementById('result').innerHTML = 'Incorrect. Try again.';
    }
}
