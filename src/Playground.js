

//const Playground = () => {
    /*const [count, setCount] = useState(25)
    return(
     <div>
      {count}
     </div>
    )
}

const Playground = () => {
    const [user, setUser] = useState ("stuart")

    return (
        <div>
            <Person user={user} setUser={setUser}/>
        </div>
    )
}

const Person = ({user, setUser}) => {
    return <h2 onClick={ () => setUser ("ken")}>{user}</h2>
}

export default Playground*/

/*import { useState } from "react"
import DisplayCounter from "/.DisplayCounter"

const Playground = () => {
    const [count, setCount] = useState(0)

    return (
      <div>
        <button onClick={ () => setCount( count + 1)}>plus one</button> 
        <DisplayCounter count={count} />
        <button onClick={ () => setCount( count - 1)}>decrement one</button> 
      </div>
    )
}

export default Playground*/


import { useState } from "react"

const Playground = () => {
    const [numbers, setNumbers] = ([1, 2, 3, 4, 5])

    //const addHandler = () => {
    //    let storedNums = [...numbers]
    //    storedNums.push(storedNums[storedNums.length -1] + 1)
    //    setNumbers(storedNums)
    //}

    const removeHandler = (index) => {
        let storedNums = [...numbers]
        storedNums.splice(index, 1)
        setNumbers(storedNums)
    }

    return (
        <div>
            {numbers.map((num, index) => {
                return (
                    <h1 key ={index} onClick={() => removeHandler(index)}>{num}</h1>

                )
            })}
        </div>
    )
}
export default Playground