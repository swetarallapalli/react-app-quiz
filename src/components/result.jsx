import { Link } from "react-router-dom"
import { questionsContext } from "../context"
import { useContext } from "react";
const Result = ({ correctAnswersCount }) => {
    const { handleExit, questions } = useContext(questionsContext)
    return <div className="result">
        <h1>Quiz Complete !</h1>
        <h4>You Score : {correctAnswersCount} / {questions.length}</h4>
        <div onClick={handleExit}>  <Link to="/quiz">Play again</Link></div>
    </div>
}

export default Result;