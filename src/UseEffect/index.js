import React, { useEffect, useState } from 'react'
const UseEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count >= 1) {
            document.title = `Message (${count})`
        }
        else {
            document.title = `Message`
        }
    }, [count])
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <button className='bg-blue-500 p-2' onClick={() => setCount(count + 1)}>
                Message
            </button>

        </div>
    )
}

export default UseEffect