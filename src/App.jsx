import { Navbar, Hero, News } from "./component"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>    
      <div>
        <Navbar />
        <Hero />
        
        <News />
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
