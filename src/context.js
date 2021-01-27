import Axios from "axios";
import { createContext, useState, useEffect } from "react"


const questionsContext = createContext()

const ContextProvider = (props) => {

    const categoryCodeTable = {
        sports: 21,
        history: 23,
        politics: 24,
    }

    const [selectionFilter, setSelectionFilter] = useState({ numberOfQuestions: 10, category: "all" })
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false)
    const [questionIndex, setQuestionIndex] = useState(0);
    const [error, setError] = useState(false);


    useEffect(() => {
        fetchQuestions()
    }, [selectionFilter])

    const fetchQuestions = (url) => {
        setLoading(true);
        Axios.get(url).then(response => {
            setQuestions(() => response.data.results)
            setLoading(() => false)
        })
    }

    const handleChange = e => {
        setSelectionFilter(() => ({ ...selectionFilter, [e.target.name]: e.target.value }))
        if (selectionFilter.numberOfQuestions < 1) setError(true)
    }


    const handleSubmit = () => {

        let apiURL = `https://opentdb.com/api.php?amount=${selectionFilter.numberOfQuestions}&type=multiple`
        if (selectionFilter.category !== "all") { apiURL = `https://opentdb.com/api.php?amount=${selectionFilter.numberOfQuestions}&category=${categoryCodeTable[selectionFilter.category]}&type=multiple` }
        fetchQuestions(apiURL);

    }
    const handleNext = () => {
        setQuestionIndex(questionIndex => questionIndex + 1)
    }

    const handleExit = () => {
        window.location.reload()
    }
    return <questionsContext.Provider value={{ selectionFilter, questions, loading, questionIndex, error, handleSubmit, handleChange, handleNext, handleExit }}>{props.children}</questionsContext.Provider>
}

export { questionsContext, ContextProvider }