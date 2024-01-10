import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Main/MainPage.jsx'
import PlaylistTemplate from './Main/PlaylistTemplate.jsx'
import ArtworkMain from './components/ArtworkMain.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <main>
    <Routes>
      <Route path='/podrumg' element={<MainPage/>}/>
      <Route path='/podrumg/template' element={<PlaylistTemplate/>}/>
      <Route path='/podrumg/artworks' element={<ArtworkMain/>}/>

    </Routes>
  </main>
  </BrowserRouter>
  </React.StrictMode>,
)
