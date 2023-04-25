import React from 'react'
import add, { mult, sub } from '../Calc'

const ImportExport = () => {
    const addition = add(2, 3)
    const subtract = sub(4, 3)
    const multiply = mult(3, 4)
    return (
        <div className="flex flex-col">
            <p >
                Add : {addition}
            </p>
            <p >
                sub : {subtract}
            </p>
            <p >
                mult : {multiply}
            </p>

        </div>
    )
}
export default ImportExport