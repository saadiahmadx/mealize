import { Route, Routes } from 'react-router-dom'

import Login from './pages/login'
import Meals from './pages/meals'
import TargetMacroForm from './pages/target-macro-form'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/first-login' element={<TargetMacroForm/>} />
      <Route path='/meals' element={<Meals/>} />
    </Routes>
  )
}

export default App
