import {useState} from 'react'
import Counter from './Counter'
import Count from './handlers/Count'

function App() {
   const [hide,setHide] = useState(true)

  return (
    <div className="App">
   {/* {hide &&  <Counter />}
     <button
     onClick = { () => setHide(false)}
     >click me</button> */}
     <p className="mt-5"></p>
    <Count />
    </div>
  )
}

export default App
