import React from 'react'

const Education = ({textColor,bg,main}) => {
  return (
    <div className={`${bg} ${textColor} shadow-lg shadow-white-500/50 rounded-sm mt-3 ml-3 text-center max-xl:mr-3`}>
            <div className='text-xl font-medium flex'>
                <p className='ml-3 mt-3 max-xl:text-6xl max-xl:font-semibold'>Education</p>
            </div>
            <div className='w-auto flex flex-wrap justify-center p-3 font-semibold'>
                <ul className='w-full list-disc list-inside'>
                    <li className='flex flex-col justify-between px-5'>
                        <span className='flex bg-transparent'>
                        <p className={`${main} text-xs max-xl:text-3xl`}>2022 - 2024</p>
                        </span>
                        <span className='flex bg-transparent'>
                        <p className='text-sm max-xl:text-4xl'>MCA</p>
                        </span>
                        <span className='flex bg-transparent'>
                        <p className={`${main} text-base max-xl:text-4xl`}>Viva Institute of Technology</p>
                        </span>
                    </li>
                    <li className='flex flex-col justify-between px-5 mt-3'>
                        <span className='flex bg-transparent'>
                        <p className={`${main} text-xs max-xl:text-3xl`}>2018 - 2021</p>
                        </span>
                        <span className='flex bg-transparent'>
                        <p className='text-sm max-xl:text-4xl'>B.Com</p>
                        </span>
                        <span className='flex bg-transparent'>
                        <p className={`${main} text-base max-xl:text-4xl`}>Viva College of Commerce</p>
                        </span>
                    </li>
                    <li className='flex flex-col justify-between px-5 mt-3'>
                        <span className='flex bg-transparent'>
                        <p className={`${main} text-xs max-xl:text-3xl`}>2016 - 2018</p>
                        </span>
                        <span className='flex bg-transparent'>
                        <p className='text-sm max-xl:text-4xl'>HSC</p>
                        </span>
                        <span className='flex bg-transparent'>
                        <p className={`${main} text-base max-xl:text-4xl`}>Utkarsh Vidyalaya</p>
                        </span>
                    </li>
                    <li className='flex flex-col justify-between px-5 mt-3'>
                        <span className='flex bg-transparent'>
                        <p className={`${main} text-xs max-xl:text-3xl`}>2015 - 2016</p>
                        </span>
                        <span className='flex bg-transparent'>
                        <p className='text-sm max-xl:text-4xl'>SSC</p>
                        </span>
                        <span className='flex bg-transparent'>
                        <p className={`${main} text-base max-xl:text-4xl`}>Lokmanya Hindi High School</p>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default Education