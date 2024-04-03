import { useState } from 'react'
import puppyList from "./data";
import './App.css'

function App() {
const [puppies,setPuppies] = useState(puppyList)
const [featPupId, setFeatPupId] = useState(null)
console.log(puppies)

const handleClick = (puppy) => {
  console.log("puppy id:" , puppy.id)
  setFeatPupId(puppy.id)
}

const featuredPup = puppies.find((pup)=> pup.id === featPupId)
console.log(featuredPup)
return (
  <>
    <div id='puplist'>
      {puppies.map((puppy) => (
        <p onClick={() => handleClick(puppy)} key={puppy.id}>{puppy.name}</p>
      ))}
    </div>
    {featPupId && featuredPup && (
      <div id='pupinfo'>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>{featuredPup.age}</li>
          <li>{featuredPup.email}</li>
        </ul>
      </div>
    )}
  </>
);
    }


export default App