import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Projects = (props) => {
  const { textColor, bg, main, logo, title, description, technology } = props;

  return (
    <div className={`${bg} shadow-lg shadow-white-500/50 mt-3 pt-3 pb-3 ml-3 mr-3 mb-3 text-slate-700 rounded-sm font-light w-fit h-fit`}>
      <span className={`${main} flex ml-3 font-semibold max-xl:text-4xl`}>
        <span className='mr-3 mt-1'>
          {logo ? logo : <ShoppingBag size={15} className='max-xl:h-9 max-xl:w-9'/>}
        </span>
        {title ? title : "Product Management System"}
      </span>
      <span className={`${textColor} font-normal flex ml-10 mr-10 text-justify max-xl:text-3xl max-xl:ml-16 max-xl:mr-16`}>
        {description ? description : "In this project, the Admin can perform CRUD operations on products and the customer can Login/Register and Order/Add to Cart products."}
      </span>
      <span className={`${main} text-justify flex ml-10 mr-10 font-medium max-xl:text-3xl max-xl:ml-16 max-xl:mr-16`}>
        Technology: {technology ? technology : "HTML5, CSS3, Javascript, JAVA, SQL"}
      </span>
    </div>
  );
};

export default Projects;