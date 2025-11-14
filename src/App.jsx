
import './App.css'
import Navbar from './components/Navbar.jsx'
import Manager from './components/Manager.jsx'
import Footer from './components/footer.jsx'


function App() {

  return (
    <>
   <div className="fixed top-0 left-0 z-[-2] w-full min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>


      <Navbar />
        <Manager />
      <Footer />

    </>
  )
}

export default App
