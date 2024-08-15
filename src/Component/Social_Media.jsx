import React from 'react'
import { Github, Globe, LucideLinkedin, Mail, MapPin, PhoneCall} from 'lucide-react';
const Social_Media = ({textColor,bg,main}) => {
  return (
    <div className={`${bg} ${textColor}shadow-lg shadow-white-500/50 rounded-sm mt-3 ml-3 flex flex-col text-center max-xl:mr-3`}>
      <ul className='w-full'>
        <li className='flex justify-between px-5 mt-5'>
          <span className={`flex font-medium text-sm bg-transparent max-xl:text-4xl ${main}`}><MapPin size={20} className='mr-2 max-xl:h-9 max-xl:w-9'/>Based in:</span>
          <span className={`${textColor}text-sm max-xl:text-4xl`}>India</span>
        </li>
        <li className='flex justify-between px-5 mt-5'>
          <span className={`flex font-medium text-sm bg-transparent max-xl:text-4xl ${main}`}><Github size={20} className='mr-2 max-xl:h-9 max-xl:w-9'/>Github:</span>
          <span className={`${textColor}text-sm max-xl:text-4xl`}>Ashish22Gupta</span>
        </li>
        <li className='flex justify-between px-5 mt-5'>
          <span className={`flex font-medium text-sm bg-transparent max-xl:text-4xl ${main}`}><LucideLinkedin size={20} className='mr-2 max-xl:h-9 max-xl:w-9'/>LinkedIn:</span>
          <span className={`${textColor}text-sm max-xl:text-4xl`}>guptaashish-agm22</span>
        </li>
        <li className='flex justify-between px-5 mt-5'>
          <span className={`flex font-medium text-sm bg-transparent max-xl:text-4xl ${main}`}><Globe size={20} className='mr-2 max-xl:h-9 max-xl:w-9'/>Website:</span>
          <span className={`${textColor}text-sm max-xl:text-4xl`}>https://rb.gy/dl67ny</span>
        </li>
        <li className='flex justify-between px-5 mt-5 mb-5'>
          <span className={`flex font-medium text-sm bg-transparent max-xl:text-4xl ${main}`}><Mail size={20} className='mr-2 max-xl:h-9 max-xl:w-9'/>Gmail:</span>
          <span className={`${textColor}text-xs max-xl:text-4xl`}>gupta.ashish.connect</span>
        </li>
        <li className='flex justify-between px-5 mt-5 mb-5'>
          <span className={`flex font-medium text-sm bg-transparent max-xl:text-4xl ${main}`}><PhoneCall size={20} className='mr-2 max-xl:h-9 max-xl:w-9'/>Phone Number:</span>
          <span className={`${textColor}text-sm max-xl:text-4xl`}>+917709139927</span>
        </li>
      </ul>
    </div>
  )
}

export default Social_Media