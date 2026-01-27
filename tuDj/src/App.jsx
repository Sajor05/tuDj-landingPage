import './App.css'
import { Home } from './home/Home.jsx'
import { Header } from './components/header/Header.jsx'
import { Footer } from './components/footer/Footer.jsx'
import { FabButton } from './components/fabButton/FabButton.jsx'

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <FabButton/>
      <Footer/>
    </>
  )
}

export default App
