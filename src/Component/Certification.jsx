import React from 'react'

const Certification = ({textColor,bg,main,rightbg}) => {
    return (
        <div className={`${bg} ${textColor} shadow-lg shadow-white-500/50 rounded-sm mt-3 ml-3 text-center max-xl:mr-3`}>
            <div className='text-xl font-medium flex'>
                <p className='ml-3 mt-3 max-xl:text-6xl max-xl:font-semibold'>Certification</p>
            </div>
            <div className='w-auto flex flex-wrap justify-center p-3 font-semibold'>
                <ul className='w-full list-disc list-inside'>
                    <li className='flex flex-col justify-between px-5'>
                        <span className='flex bg-transparent'>
                        <p className={`${main} text-xs max-xl:text-3xl`}>Mar 2024</p>
                        </span>
                        <span className='flex bg-transparent'>
                        <p className='text-sm max-xl:text-4xl'>Web Development</p>
                        </span>
                        <span className='flex bg-transparent'>
                        <p className={`${main} text-base max-xl:text-4xl`}>I-Tech Computer Classes</p>
                        </span>
                    </li>
                    <li className='flex flex-col justify-between px-5 mt-3'>
                        <span className='flex bg-transparent'>
                        <p className={`${main} text-xs max-xl:text-3xl`}>Jan 2024</p>
                        </span>
                        <span className='flex bg-transparent'>
                        <p className='text-sm max-xl:text-4xl'>C/C++</p>
                        </span>
                        <span className='flex bg-transparent'>
                        <p className={`${main} text-base max-xl:text-4xl`}>I-Tech Computer Classes</p>
                        </span>
                    </li>
                    <li className='flex flex-col justify-between px-5 mt-3'>
                        <span className='flex bg-transparent'>
                        <p className={`${main} text-xs max-xl:text-3xl`}>Mar 2024</p>
                        </span>
                        <span className='flex bg-transparent'>
                        <p className='text-sm max-xl:text-4xl'>Web Development</p>
                        </span>
                        <span className='flex bg-transparent'>
                        <p className={`${main} text-base max-xl:text-4xl`}>Courseera</p>
                        </span>
                    </li>
                    <li className='flex flex-col justify-between px-5 mt-3'>
                        <span className='flex bg-transparent'>
                        <p className={`${main} text-xs max-xl:text-3xl`}>Mar 2024</p>
                        </span>
                        <span className='flex bg-transparent'>
                        <p className='text-sm max-xl:text-4xl'>Enhancing Soft Skill</p>
                        </span>
                        <span className='flex bg-transparent'>
                        <p className={`${main} text-base max-xl:text-4xl`}>NPTEL</p>
                        </span>
                    </li>
                    <li className='flex flex-col justify-between px-5 mt-3'>
                        <span className='flex bg-transparent'>
                        <p className={`${main} text-xs max-xl:text-3xl`}>Mar 2024</p>
                        </span>
                        <span className='flex bg-transparent'>
                        <p className='text-sm max-xl:text-4xl'>Soft Skill Development</p>
                        </span>
                        <span className='flex bg-transparent'>
                        <p className={`${main} text-base max-xl:text-4xl`}>NPTEL</p>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Certification