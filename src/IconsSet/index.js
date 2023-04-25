import React from 'react'

const Icons = () => {
    return (
        <>
            <div className='flex float-left justify-center'>
                <h1 className='text-clor red'>NetFliX</h1>
                <ul className='text-blue-500'>
                    <li className=''>
                        <a className='' href='#'>Movies </a>
                    </li>
                    <li>
                        <a href='#'>Bollywood</a>
                    </li>
                    <li>
                        <a href='#'>Song </a>
                    </li>
                    <li>
                        <a href='#'>SeriesS </a>
                    </li>
                </ul>

            </div>
            <div className='flex justify-end'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[#F9D949]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            </div>


        </>
    )

}

export default Icons