import React, { useState } from 'react';
import t1Image from '../assets/t1.png';
import t2Image from '../assets/t2.png';
import t3Image from '../assets/t3.png';

function TechnicalAnalysis() {
    const [coinCount, setCoinCount] = useState(10); // Starting number of coins

    const checkAnswer = (answer, questionNumber) => {
        // Check answer against the correct answer
        let correctAnswer;
        let result;

        switch (questionNumber) {
            case 1:
                correctAnswer = "up"; // Change this to the correct answer for Question 1
                break;
            case 2:
                correctAnswer = "down"; // Change this to the correct answer for Question 2
                break;
            case 3:
                correctAnswer = "up"; // Change this to the correct answer for Question 3
                break;
            // Add more cases for additional questions
            default:
                correctAnswer = ""; // Set default value for other questions
        }

        if (answer === correctAnswer) {
            result = "Correct!";
            updateCoins(4); // Give 4 coins for correct answer
        } else {
            result = "Incorrect. Try again.";
            updateCoins(-1); // Reduce 1 coin for incorrect answer
        }

        return result;
    };

    const updateCoins = (change) => {
        setCoinCount(prevCoinCount => prevCoinCount + change);
    };

    // Function for navigating to explanation page
    const showExplanation = (questionId) => {
        // Redirect user to the explain page with query parameter for specific question
        // Here, I'm just logging the question ID for demonstration
        console.log("Explanation for question:", questionId);
    };

    return (
        <div>
            <h1>Technical Analysis Practice Section</h1>

            <div id="coinDashboard">
                <p>Coins: <span id="coinCount">{coinCount}</span></p>
            </div>

            {/* Question 1 */}
            <div className="question">
                <img src={t1Image} alt="Image 1" />
                <button onClick={() => checkAnswer('up', 1)} id="upButton1">Up</button>
                <button onClick={() => checkAnswer('down', 1)} id="downButton1">Down</button>
                <p id="result1"></p>
                <button onClick={() => showExplanation('question1')}>Explain</button>
            </div>

            {/* Question 2 */}
            <div className="question">
                <img src={t2Image} alt="Image 2" />
                <button onClick={() => checkAnswer('up', 2)} id="upButton2">Up</button>
                <button onClick={() => checkAnswer('down', 2)} id="downButton2">Down</button>
                <p id="result2"></p>
                <button onClick={() => showExplanation('question2')}>Explain</button>
            </div>

            {/* Question 3 */}
            <div className="question">
                <img src={t3Image} alt="Image 3" />
                <button onClick={() => checkAnswer('up', 3)} id="upButton3">Up</button>
                <button onClick={() => checkAnswer('down', 3)} id="downButton3">Down</button>
                <p id="result3"></p>
                <button onClick={() => showExplanation('question3')}>Explain</button>
            </div>

            {/* Repeat the above div structure for remaining questions */}
        </div>
    );
}

export default TechnicalAnalysis;
