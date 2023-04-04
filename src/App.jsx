import { useState } from 'react'
import Navbar from "./components/Navbar"


import './App.css'
import BookList from './components/BookList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <BookList />
    </div>
  )
}

export default App
