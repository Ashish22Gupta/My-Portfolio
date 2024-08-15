import React from 'react'
const Publication = ({textColor,bg,main}) => {
  return (
    <div className={`flex flex-col`}>
    <h1 className={`${textColor} text-2xl font-medium max-xl:text-6xl max-xl:font-semibold`}>Publication</h1>
    <ul className={`${bg} ${textColor} text-center shadow-lg shadow-white-500/50 mt-3 pt-3 pb-3 mb-3 mr-3 rounded-sm font-light`} >
    <a href=''> 
      <p className='font-medium max-xl:text-4xl max-xl:mt-2'>DATA WAREHOUSE AND DATA MINING FOR BUSINESS INTELLIGENCE</p>
      <p className='max-xl:text-3xl max-xl:mt-2'>NCRENB 2024</p>
      <p className='max-xl:text-3xl max-xl:mt-2'>Author: Ashish Gupta</p>
      <p className={`${main} text-justify ml-5 mr-5 font-serif max-xl:text-3xl max-xl:mt-2`}>This paper presents a comprehensive exploration of the integration of data warehouse and data mining technologies to enhance business intelligence capabilities. Beginning with an overview of data warehouse architecture and its significance in centralizing and analyzing data, the paper categorizes data mining techniques into supervised, unsupervised, and semi- supervised learning, elucidating their roles in predictive analytics, customer segmentation, and market analysis.</p>
    </a>  
    <div className='mt-3'>
    <button className='bg-indigo-500 text-white font-semibold rounded-lg px-2 max-xl:text-3xl max-xl:mt-2'><a href='./Research Paper.pdf'>View Publication</a></button>
    </div>
    </ul>
    </div>
  )
}
export default Publication