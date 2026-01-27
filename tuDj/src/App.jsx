import './App.css'
import { Home } from './home/home'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { FabButton } from './components/fabButton/FabButton'

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
