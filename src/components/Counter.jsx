import React, {useState} from 'react'

const Counter = ({limit}) => {
    const [counter, setCounter] = useState(0)

    const restar = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    const sumar = () => {
        if (counter < limit) {
            setCounter(counter + 1)
        }
    }

    return (
        <div>
            <h2>Contador</h2>
            <button onClick={restar} disabled={counter === 0}>
                -
            </button>
            <h4>0</h4>
            <button onClick={sumar} disabled={counter == 0}>
                +
            </button>
        </div>
    )
}

export default Counter