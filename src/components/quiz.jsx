
import { Link } from "react-router-dom"
import { useContext } from "react";
import { questionsContext } from "../context"
import Header from "./header";
import { useHistory } from 'react-router-dom';

const Quiz = () => {
    const { selectionFilter, handleChange, handleSubmit } = useContext(questionsContext);
    const { numberOfQuestions, category } = selectionFilter;
    const history = useHistory();
    const handleStart = (e) => {
        e.preventDefault();
        history.push("/single-question")
        handleSubmit()
    }
    return <>
        <Header />
        <div className="quiz-container">
            <div className="selection-filter"><label>Number of Questions : </label>

                <input type="number" name="numberOfQuestions" value={numberOfQuestions} onChange={handleChange} min={1} max={20}></input></div>
            <div className="selection-filter"><label>Category : </label>
                <select value={category} name="category" onChange={handleChange}>
                    <option value="all">All</option>
                    <option value="sports">Sports</option>
                    <option value="history">History</option>
                    <option value="politics">Politics</option>
                </select></div>

            {(numberOfQuestions < 1 || numberOfQuestions > 20) && <p className="error">Please select the number of questions within range 1 to 20</p>}
            <button type="submit" className="button" onClick={handleStart} disabled={(numberOfQuestions < 1 || numberOfQuestions > 20)}>Start </button>
            {/* <Link to={ (numberOfQuestions < 1 || numberOfQuestions > 20)? "/quiz" : "/single-question"}>Start</Link> */}

        </div >
    </>
}

export default Quiz