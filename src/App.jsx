import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/home/home'
import Faq from './component/FAQ/faq'
import Aboutus from './component/about/Aboutus'
import Contactus from './component/Contactus/Contactus'
import Properties from './component/properties/properties'
import Header from './layout/header'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Header />}></Route>
          <Route path='/faq' element={<Faq />}></Route>
          <Route path='/about' element={<Aboutus />}></Route>
          <Route path='/contact' element={<Contactus />}></Route>
          <Route path='/properties' element={<Properties />}></Route>
        </Routes>
      </Router>
    </>
  )
}
export default App
