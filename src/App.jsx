import react from 'react'
import { Routes, Route } from 'react-router-dom'
import HomepPage from './pages/HomepPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

import bgImage from './assets/bgImage.svg'

const App = () => {
  return (
    <div className="bg-contain, bg-no-repeat, h-screen w-full"  style={{ backgroundImage: `url(${bgImage})` }}
    >

      
      <Routes>
        <Route path='/' element={<HomepPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>

    </div>
  )
}

export default App

