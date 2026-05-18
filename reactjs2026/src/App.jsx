import Card from "./components/Card"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="card">
     <Navbar user='kaif'/>
     <Card user='kaif'/>
      <h1>App</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
      <button>Click Me</button>
  
    </div>
     
  )
}

export default App
