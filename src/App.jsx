import React, {useEffect, useState} from 'react'
import QuoteBox from './Components/QuoteBox'

const App = () => {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    const res = await fetch("https://dummyjson.com/quotes")
    const data = await res.json()
    setQuotes(data.quotes)
    setLoading(false)
    return data
  }


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark text-light" style={{ width: "100vw", height: "100vh" }}>
      <QuoteBox quotes={quotes} loading={loading} />
    </div>
  )
}

export default App