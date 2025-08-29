import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import Navbar from './pages/Navbar'
import { WatchListProvider } from './context/WatchListContext'

function App() {

  return (
    <WatchListProvider>   
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/watchlist' element={<Watchlist />} />
      </Routes>
    </BrowserRouter>
    </WatchListProvider>
  )
}

export default App
