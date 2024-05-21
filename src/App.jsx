import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'


function App() {
  const [count, setCount] = useState(0)
  const actors = ['Sakib', 'Jasim', 'Raj', 'Tamim']
  const singers = [
    {id: 1, name: ' Dr. Mahfuzur Rahman', age:30},
    {id: 2, name: ' Eva Rahman', age:35},
    {id: 3,name: ' Subro Dev', age:40},
  ]

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        {
          singers.map(singer => <Singer singer={singer}></Singer>)
        }
      </div>
      <h1>Vite + React</h1>
      <Actor name = "Bappa Raj"></Actor>
      {
        actors.map (actor => <Actor name={actor}></Actor>)
      }
      <Person></Person>
      <Student></Student> 
      <Student1></Student1>
      <Student2 grade="2" score= "97" ></Student2>
      <Developer></Developer>
      <Device name = "laptop" price = "55"></Device>
      <Device name = "Mobile" price = "17"></Device>
      <Device name = "PC" price = "77"></Device>
      <Todo task="Learn-React" isDone={true}></Todo>
      <Todo task="Explore More Concepts"  isDone={true} ></Todo>
      <Todo task="Try JSX" isDone={false}></Todo>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

// Practice Coding In JSX Tutorial 
function Device (props){
  console.log(props);
  return <h2> This Device : {props.name} price: {props.price} </h2>
}
function Person (){
  const age = 20;
  const money = 22;
  const person = {name:'Rakib', Age:12}
  return <h3> I am {person.name} With Age {age} </h3>
}

function Student (){
  return <div className='student'>
    <h2>This is student </h2>
    <p>Name: </p>
    <p>Age : </p>
  </div>
}
function Student1 (){
  return (
   <div>
    <h2>This is student </h2>
    <p>Name: </p>
    <p>Age : </p>
  </div>)
}
function Student2 ({grade,score}){
  return (
   <div>
    <h2>This is student Result </h2>
    <p>Grade:{grade} </p>
    <p>Score :{score} </p>
  </div>)
}

// Style Using System1 In JSX 
function Developer (){
  const developerStyle = {
    margin : '20px',
    padding : '20px',
    border : '2px solid purple',
    borderRadius : '10px',
  }
  return (
  <div style={developerStyle}>
    <h5> Professional Developer </h5>
    <p> Skill : Mern Stack Developer </p>
  </div>
  )
}
export default App
