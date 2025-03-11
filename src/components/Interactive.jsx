import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Interactive.css";

function Interactive() {
  const [currentSection, setCurrentSection] = useState("intro");
  const [guessWhoAnswers, setGuessWhoAnswers] = useState({
    question1: "",
    question2: "",
    question3: ""
  });
  const [leadershipTraits, setLeadershipTraits] = useState([]);
  const [showGuessWhoResults, setShowGuessWhoResults] = useState(false);
  const [showLeadershipResults, setShowLeadershipResults] = useState(false);
  const [leadershipScore, setLeadershipScore] = useState(0);

  const handleGuessWhoAnswer = (question, answer) => {
    setGuessWhoAnswers({
      ...guessWhoAnswers,
      [question]: answer
    });
  };

  const handleTraitSelection = (trait) => {
    if (leadershipTraits.includes(trait)) {
      setLeadershipTraits(leadershipTraits.filter(t => t !== trait));
    } else if (leadershipTraits.length < 5) {
      setLeadershipTraits([...leadershipTraits, trait]);
    }
  };

  const calculateLeadershipScore = () => {
    const idealTraits = ["communication", "integrity", "empathy", "decisiveness", "vision"];
    const score = leadershipTraits.reduce((total, trait) => {
      return idealTraits.includes(trait.toLowerCase()) ? total + 20 : total + 0;
    }, 0);
    setLeadershipScore(score);
  };

  const getLeadershipInsight = () => {
    if (leadershipScore >= 90) {
      return "Exceptional! You know everything a perfect leader should have!";
    } else if (leadershipScore >= 70) {
      return "Amazing! You know everything a good leader should have!";
    } else if (leadershipScore >= 50) {
      return "Not bad! You know the minimum qualities a leader should have";
    } else if (leadershipScore >= 20) {
      return "Nice try! Although your score is low, you can guess some qualities a leader should have.";
    } else {
      return "Try again! Think of what really matters!";
    }
  };

  const handleLeadershipSubmit = () => {
    calculateLeadershipScore();
    setShowLeadershipResults(true);
  };

  const handleGuessWhoSubmit = () => {
    setShowGuessWhoResults(true);
  };

  const resetGuessWhoQuiz = () => {
    setGuessWhoAnswers({
      question1: "",
      question2: "",
      question3: ""
    });
    setShowGuessWhoResults(false);
  };

  const resetLeadershipPoll = () => {
    setLeadershipTraits([]);
    setShowLeadershipResults(false);
  };

  return (
      <div className="interactive-container">
        {currentSection === "intro" && (
            <motion.div
                className="interactive-intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
              <h1>Interactive Challenges</h1>
              <p>Just a fun little activity we added</p>

              <div className="challenge-cards">
                <motion.div
                    className="challenge-card"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setCurrentSection("guessWho")}
                >
                  <h2>Guess Who?</h2>
                  <p>Identify our party members with given hints</p>
                  <button className="challenge-button">Start Challenge</button>
                </motion.div>

                <motion.div
                    className="challenge-card"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setCurrentSection("leadershipPoll")}
                >
                  <h2>Leadership Poll</h2>
                  <p>Traits for a good leader</p>
                  <button className="challenge-button">Take Poll</button>
                </motion.div>
              </div>
            </motion.div>
        )}

        {currentSection === "guessWho" && !showGuessWhoResults && (
            <motion.div
                className="guess-who-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
              <h1>Guess Who?</h1>
              <p className="section-description">Read the clues and guess our members!</p>

              <div className="question-container">
                <div className="question">
                  <h3>Question 1</h3>
                  <p>I am a goofy ahh little kid that's 15 years old currently</p>

                  <div className="options">
                    <button
                        className={`option-button ${guessWhoAnswers.question1 === "Denial" ? "selected" : ""}`}
                        onClick={() => handleGuessWhoAnswer("question1", "Denial")}
                    >
                      Denial
                    </button>
                    <button
                        className={`option-button ${guessWhoAnswers.question1 === "Pyae zone" ? "selected" : ""}`}
                        onClick={() => handleGuessWhoAnswer("question1", "Pyae zone")}
                    >
                      Pyae zone
                    </button>
                    <button
                        className={`option-button ${guessWhoAnswers.question1 === "Ivy" ? "selected" : ""}`}
                        onClick={() => handleGuessWhoAnswer("question1", "Ivy")}
                    >
                      Ivy
                    </button>
                  </div>
                </div>

                <div className="question">
                  <h3>Question 2</h3>
                  <p>I'm one of the oldest people in class and have ties with FAME</p>

                  <div className="options">
                    <button
                        className={`option-button ${guessWhoAnswers.question2 === "Aye su" ? "selected" : ""}`}
                        onClick={() => handleGuessWhoAnswer("question2", "Aye su")}
                    >
                      Aye su
                    </button>
                    <button
                        className={`option-button ${guessWhoAnswers.question2 === "Grace" ? "selected" : ""}`}
                        onClick={() => handleGuessWhoAnswer("question2", "Grace")}
                    >
                      Grace
                    </button>
                    <button
                        className={`option-button ${guessWhoAnswers.question2 === "Anna" ? "selected" : ""}`}
                        onClick={() => handleGuessWhoAnswer("question2", "Anna")}
                    >
                      Anna
                    </button>
                  </div>
                </div>

                <div className="question">
                  <h3>Question 3</h3>
                  <p>I already took the IELTS test  before and got an impressive 7.5!</p>

                  <div className="options">
                    <button
                        className={`option-button ${guessWhoAnswers.question3 === "Heather" ? "selected" : ""}`}
                        onClick={() => handleGuessWhoAnswer("question3", "Heather")}
                    >
                      Heather
                    </button>
                    <button
                        className={`option-button ${guessWhoAnswers.question3 === "Aye su" ? "selected" : ""}`}
                        onClick={() => handleGuessWhoAnswer("question3", "Aye su")}
                    >
                      Aye su
                    </button>
                    <button
                        className={`option-button ${guessWhoAnswers.question3 === "Pyae sone" ? "selected" : ""}`}
                        onClick={() => handleGuessWhoAnswer("question3", "Pyae sone")}
                    >
                      Pyae sone
                    </button>
                  </div>
                </div>
              </div>

              <div className="navigation-buttons">
                <button className="nav-button" onClick={() => setCurrentSection("intro")}>Back</button>
                <button
                    className="nav-button submit-button"
                    onClick={handleGuessWhoSubmit}
                    disabled={!guessWhoAnswers.question1 || !guessWhoAnswers.question2 || !guessWhoAnswers.question3}
                >
                  Submit Answers
                </button>
              </div>
            </motion.div>
        )}

        {currentSection === "guessWho" && showGuessWhoResults && (
            <motion.div
                className="results-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
              <h1>Your Results</h1>

              <div className="results-container">
                <div className="result-item">
                  <h3>Question 1: I am a goofy ahh little kid that's 15 years old currently</h3>
                  <p>Your answer: <span className="user-answer">{guessWhoAnswers.question1}</span></p>
                  <p>Correct answer: <span className="correct-answer">Pyae zone</span></p>
                  {guessWhoAnswers.question1 === "Pyae zone" ? (
                      <p className="correct-message">✓ Correct! You should already know this</p>
                  ) : (
                      <p className="incorrect-message">✗ Incorrect. Pyae sone is def the goofiest person on the list. Take that fact to the grave.</p>
                  )}
                </div>

                <div className="result-item">
                  <h3>Question 2: I'm one of the oldest people in class and have ties with FAME</h3>
                  <p>Your answer: <span className="user-answer">{guessWhoAnswers.question2}</span></p>
                  <p>Correct answer: <span className="correct-answer">Aye su</span></p>
                  {guessWhoAnswers.question2 === "Aye su" ? (
                      <p className="correct-message">✓ Correct! Aye su is planning to take us there too!</p>
                  ) : (
                      <p className="incorrect-message">✗ Incorrect. Only Aye su has connections to Fame.</p>
                  )}
                </div>

                <div className="result-item">
                  <h3>Question 3: I already took the IELTS test before and got an impressive 7.5!</h3>
                  <p>Your answer: <span className="user-answer">{guessWhoAnswers.question3}</span></p>
                  <p>Correct answer: <span className="correct-answer">Heather</span></p>
                  {guessWhoAnswers.question3 === "Heather" ? (
                      <p className="correct-message">✓ Correct! Heather is the only one in the class that have done IELTS before. Nice memory!</p>
                  ) : (
                      <p className="incorrect-message">✗ Incorrect. Heather is the only one in the class that have done IELTS before.</p>
                  )}
                </div>
              </div>

              <div className="navigation-buttons">
                <button className="nav-button" onClick={() => {
                  resetGuessWhoQuiz();
                }}>Try Again</button>
                <button className="nav-button" onClick={() => setCurrentSection("intro")}>Home</button>
              </div>
            </motion.div>
        )}

        {currentSection === "leadershipPoll" && !showLeadershipResults && (
            <motion.div
                className="leadership-poll-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
              <h1>Leadership Poll</h1>
              <p className="section-description">Select up to 5 traits that you believe are qualities a leader should have:</p>

              <div className="traits-container">
                {[
                  "Empathy",
                  "Convincing Speaker",
                  "Integrity",
                  "Wavering",
                  "Cunning",
                  "Vision",
                  "Impulsive",
                  "Communication",
                  "Daring",
                  "Decisiveness",
                  "People Fluent",
                  "Adaptability",
                  "Confidence",
                  "Humility",
                  "Resilience"
                ].map((trait) => (
                    <button
                        key={trait}
                        className={`trait-button ${leadershipTraits.includes(trait) ? "selected" : ""}`}
                        onClick={() => handleTraitSelection(trait)}
                    >
                      {trait}
                    </button>
                ))}
              </div>

              <div className="selection-count">
                {leadershipTraits.length} of 5 traits selected
              </div>

              <div className="navigation-buttons">
                <button className="nav-button" onClick={() => setCurrentSection("intro")}>Back</button>
                <button
                    className="nav-button submit-button"
                    onClick={handleLeadershipSubmit}
                    disabled={leadershipTraits.length === 0}
                >
                  Submit Traits
                </button>
              </div>
            </motion.div>
        )}

        {currentSection === "leadershipPoll" && showLeadershipResults && (
            <motion.div
                className="results-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
              <h1>Your Leadership Score</h1>

              <div className="results-container">
                <div className="leadership-score">
                  <h2>Score: {leadershipScore}%</h2>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${leadershipScore}%` }}></div>
                  </div>
                </div>

                <div className="traits-analysis">
                  <h3>Your Selected Leadership Traits:</h3>
                  <ul className="selected-traits">
                    {leadershipTraits.map((trait, index) => (
                        <li key={index}>{trait}</li>
                    ))}
                  </ul>
                </div>

                <div className="leadership-insight">
                  <h3>Leadership Insight</h3>
                  <p>{getLeadershipInsight()}</p>
                </div>
              </div>

              <div className="navigation-buttons">
                <button className="nav-button" onClick={() => {
                  resetLeadershipPoll();
                }}>Try Again</button>
                <button className="nav-button" onClick={() => setCurrentSection("intro")}>Home</button>
              </div>
            </motion.div>
        )}
      </div>
  );
}

export default Interactive;