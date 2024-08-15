import React from 'react'

const Tech_Stack = ({textColor,bg}) => {
  return (
    <div className={`${textColor} ${bg} shadow-lg shadow-white-500/50 rounded-sm mt-3 ml-3 text-center max-xl:mr-3`}>
      <div className='text-xl font-medium flex'>
        <p className='ml-3 mt-3 max-xl:text-6xl'>Tech Stack</p>
      </div>
      <div className='w-auto flex flex-wrap justify-center p-3 font-semibold'>
        <span className='text-xs bg-indigo-500 rounded-lg text-white m-1 px-2 max-xl:text-4xl'>HTML5</span>
        <span className='text-xs bg-indigo-500 rounded-lg text-white m-1 px-2 max-xl:text-4xl'>CSS3</span>
        <span className='text-xs bg-indigo-500 rounded-lg text-white m-1 px-2 max-xl:text-4xl'>Bootstrap5</span>
        <span className='text-xs bg-indigo-500 rounded-lg text-white m-1 px-2 max-xl:text-4xl'>Tailwind CSS</span>
        <span className='text-xs bg-indigo-500 rounded-lg text-white m-1 px-2 max-xl:text-4xl'>JavaScript</span>
        <span className='text-xs bg-indigo-500 rounded-lg text-white m-1 px-2 max-xl:text-4xl'>React</span>
        <span className='text-xs bg-indigo-500 rounded-lg text-white m-1 px-2 max-xl:text-4xl'>JAVA</span>
        <span className='text-xs bg-indigo-500 rounded-lg text-white m-1 px-2 max-xl:text-4xl'>.NET</span>
        <span className='text-xs bg-indigo-500 rounded-lg text-white m-1 px-2 max-xl:text-4xl'>MySQL</span>
        <span className='text-xs bg-indigo-500 rounded-lg text-white m-1 px-2 max-xl:text-4xl'>SQL</span>
        <span className='text-xs bg-indigo-500 rounded-lg text-white m-1 px-2 max-xl:text-4xl'>PL/SQL</span>
        <span className='text-xs bg-indigo-500 rounded-lg text-white m-1 px-2 max-xl:text-4xl'>MongoDB</span>
        <span className='text-xs bg-indigo-500 rounded-lg text-white m-1 px-2 max-xl:text-4xl'>C/C++</span>
      </div>
    </div>
  )
}

export default Tech_Stack