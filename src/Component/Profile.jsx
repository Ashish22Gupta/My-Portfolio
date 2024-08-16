import React from "react";

const Profile = ({ textColor, bg }) => {
  function PDF() {
    window.location.href = "./Ashish Gupta.pdf";
  }

  return (
    <div className={`${bg} ${textColor} shadow-lg shadow-white-500/50 rounded-sm mt-3 ml-3 text-black flex items-center flex-col text-center max-xl:mr-3`}>
      <img
        src="My Photo.jpg"
        className="rounded-full h-40 w-40 border-solid border-[3px] border-blue-900 mt-5 max-xl:h-72 max-xl:w-72 transition-transform transform hover:scale-110"
        alt="Ashish Gupta"
      />
      <div className="mt-3">
        <p className="max-xl:text-6xl max-xl:font-semibold">Ashish Gupta</p>
      </div>
      <div className="max-xl:text-4xl max-xl:mt-2">
        <p>
          ⚡ Junior Software Engineer | Open Source Enthusiast | JAVA | .NET | React ⚡
        </p>
        <button
          className="duration-500 transition-all outline-none mr-1 border border-solid border-gray-300 px-5 py-2 bg-transparent font-bold text-gray-300 uppercase focus:outline-none active:bg-gray-700 hover:bg-gray-300 hover:text-black mt-2 text-xs h-8 mb-4 max-xl:text-3xl max-xl:h-fit max-xl:w-fit max-xl:mt-5"
          onClick={PDF}
        >
          See My Resume
        </button>
      </div>
    </div>
  );
};

export default Profile;