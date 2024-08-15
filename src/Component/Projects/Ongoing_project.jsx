import React from 'react'

const Ongoing_project = ({textColor,bg,main}) => {
  return (
    <div className='flex flex-col'>
    <h1 className={`${textColor} text-2xl font-medium max-xl:text-6xl max-xl:font-semibold`}>Ongoing Project</h1>
    <ul className={`${bg} ${textColor} text-center shadow-lg shadow-white-500/50 mt-3 pt-3 pb-3 mb-3 mr-3 text-slate-700 rounded-sm font-light`}>
    <a href=''> 
      <p className='font-medium max-xl:text-4xl max-xl:mt-2'>LOAN EMI AND CIBIL SCORE MANAGEMENT SYSTEM</p>
      <p className='max-xl:text-3xl max-xl:mt-2'>From: iNeuron</p>
      <p className='max-xl:text-3xl max-xl:mt-2'>Technology: HTML5, CSS3, Javascript, Node.js, Express, MongoDB</p>
      <p className={`${main} text-justify ml-5 mr-5 font-serif max-xl:text-3xl max-xl:mt-2`}>In this ongoing project, my responsibility make a responsive website in which user can easily view their cibil score, past financial behaviours, and other details after the login with their name and PAN number, and Admin can login with their username and password if both are matches then Admin can perform the curd operation </p>
    </a>
    </ul>
    </div>
  )
}
export default Ongoing_project