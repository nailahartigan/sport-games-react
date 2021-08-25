import sport1 from "./Images/sport1.png"
import sport2 from "./Images/sport2.jpeg"
import sport3 from "./Images/sport3.jpeg"
import sport4 from "./Images/sport4.jpeg"
import "./App.css"

const App = () => {
  return (
  <div className="App">
    <MainCard image={sport1} title="LETS PLAY" />
    <SmallCard image={sport2} title="play games"/>
    <SmallCard image={sport3} title="play more"/>
    <SmallCard image={sport4} title="and more"/>
  </div>
  )
}


const MainCard =(props) => {
  return (
  <div>
   <img className="photo" src={props.image} />
   <p>{props.title}</p>
  </div>
  )
}

const SmallCard = (props) => {
  return (
  <div>
    <img src={props.image} />
    <p>{props.title}</p>
  </div>
    )
}

export default App