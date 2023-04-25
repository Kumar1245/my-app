import React, { useEffect, useState } from "react";

const BackgroundChange = () => {
    const [color, setColor] = useState('white')
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        setCount(count + 1)
    }
    const handleSub = () => {
        setCount(count - 1)
    }

    useEffect(() => {
        setTimeout(() => setCount(count + 1), 5000)
    })


    return (<>
        <div style={{ backgroundColor: color }} className="flex h-[50vh] gap-3 justify-center p-5">
            <button className="p-2 px-4 h-fit rounded" style={{ backgroundColor: 'blue' }} onClick={() => setColor('blue')}>Blue</button>
            <button className="p-2 px-4 h-fit rounded" style={{ backgroundColor: 'green' }} onClick={() => setColor('green')}>Green</button>
            <button className="p-2 px-4 h-fit rounded" style={{ backgroundColor: 'red' }} onClick={() => setColor('red')}>
                Red
            </button>
            <button className="p-2 px-4 h-fit rounded" style={{ backgroundColor: 'yellow' }} onClick={() => setColor('yellow')}>
                Yellow
            </button>
        </div>
        <div className="flex gap-5 items-center p-5">
            <button className="p-2 px-4 h-fit rounded bg-gray-400" onClick={handleSub}>
                ---
            </button> <p>
                {count}
            </p>
            <button className="p-2 px-4 h-fit rounded bg-gray-400 " onClick={handleAdd}>
                +++
            </button>
        </div>
    </>

    )
}
export default BackgroundChange