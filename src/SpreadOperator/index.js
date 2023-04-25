import React from 'react'
const SpreadOperator = () => {
    const arr = [1, 2, 3, 4, 5]
    const arr2 = [6, 7, 8, 9]

    const arr4 = [{
        name: 'pankaj',
        id: 1
    }, {
        name: 'sushma',
        id: 2
    }]
    const arr5 = [{
        id: 3,
        name: 'Mani'
    }]

    const arr3 = [...arr, ...arr2]
    const arr6 = [...arr4, ...arr5]
    return (
        <>
            <div className='flex justify-center gap-5'>
                {arr3.map((i) => {
                    return <p>{i}</p>

                })}
            </div>
            <div className='flex justify-center gap-5 p-4'>
                {arr6.map((i) => {
                    return <p>{i.name}</p>
                })}
            </div>

        </>
    )
}

export default SpreadOperator