import React from 'react'

const QuoteBox = ({ quotes, loading }) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]


    return (
        <div id="quote-box" className="w-50 h-50 border rounded d-flex flex-column justify-content-center align-items-center px-5 py-2" style={{ boxShadow: "0px 0px 5px #fff" }}>
            {loading ? <h5>Loading...</h5> : <p id="text" style={{ textShadow: "0px 0px 2px #fff" }}><i className="fa-sharp fa-solid fa-quote-left"></i>&nbsp;{randomQuote?.quote}</p>}
            {!loading && <p id="author" className="align-self-end fw-bold">-{randomQuote?.author}</p>}

            <div className="d-flex justify-content-center w-100 align-items-center mt-4 container">
                <a id="tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${randomQuote?.quote}`} className='btn btn-info text-light'><i className="fa-brands fa-twitter"></i></a>
                <button title="New quote" id="new-quote" className='btn btn-danger mx-2' onClick={() => window.location.reload()}><i className="fas fa-plus"></i></button>
            </div>
        </div>
    )
}

export default QuoteBox