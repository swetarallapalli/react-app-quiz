import React from "react"
import { Link } from "react-router-dom"
import Header from "./header"
const Home = () => {
    return (<>
        <Header />
        <div className="home">
            <h4>#quizsquadofficial</h4>
            <p>Ready to test your knowledge and have some fun?</p>
            <Link to="/quiz" >Let's Go</Link>
        </div></>
    )
}

export default Home;