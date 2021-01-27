import { useContext, useEffect, useState } from "react";
import { questionsContext } from "../context"
import { Link } from "react-router-dom"
import Result from "./result";

const SingleQuestion = () => {
    const { questions, loading, questionIndex, handleNext, handleExit } = useContext(questionsContext)

    const [correctAnswersCount, setCorrectAnswersCount] = useState(0)
    if (loading) return <div className="loader"><img src="http://superstorefinder.net/support/wp-content/uploads/2018/01/green_style.gif" /><h1>Loading questions.....</h1></div>

    if (questionIndex >= questions.length) return <Result correctAnswersCount={correctAnswersCount} />

    const { incorrect_answers, correct_answer, question } = questions[questionIndex];
    let answerChoices = [...incorrect_answers];
    const tempIndex = Math.floor(Math.random() * 4)
    answerChoices.splice(tempIndex, 0, correct_answer)
    console.log(answerChoices)

    const checkAnswer = (value) => {
        if (value == correct_answer) setCorrectAnswersCount(correctAnswersCount => correctAnswersCount + 1)
        handleNext();
    }
    return (
        questionIndex < questions.length &&
        <div className="question-container">
            <div className="exit-btn" onClick={handleExit}><Link to="/" >Exit</Link></div>
            <div className="question" >
                <p><span>{questionIndex + 1}. </span><span dangerouslySetInnerHTML={{ __html: question }}></span></p>
            </div>
            <div className="answers">
                {answerChoices.map(a => <button onClick={() => checkAnswer(a)} dangerouslySetInnerHTML={{ __html: a }}></button>)}
            </div>
            <div className="correct-answers-count"><p>Correct Answers: {correctAnswersCount}/{questions.length}</p></div>
            <div className="next-btn" onClick={handleNext}><button>Next Question</button></div>
        </div>

    )

}

export default SingleQuestion;