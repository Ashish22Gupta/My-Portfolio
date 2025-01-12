import React from "react";
import Theme from "./Theme";
import Profile from "./Profile";
import SocialMedia from "./SocialMedia";
import TechStack from "./TechStack";
import Certification from "./Certification";
import Education from "./Education";
import Publication from "./Projects/Publication";
import Projects from "./Projects/Projects";
import Ongoingproject from "./Projects/Ongoingproject";
import { Calculator , Dumbbell, FileLock, Landmark, Monitor, MonitorCheck, RectangleEllipsis, Clock, Worm, Timer, Construction} from 'lucide-react';
import Copyright from "./Projects/Copyright";
import { useState } from "react";
const Card = () => {
  const [theme, setTheme] = useState('Light');

  const backgroundColor = theme === 'Dark' ? 'bg-white' : 'bg-black';
  const textColor = theme === 'Dark' ? 'text-white' : 'text-black';
  const bg = theme === 'Dark' ? 'bg-black' : 'bg-white';
  const main = theme === 'Dark' ? 'text-gray-300' : 'text-gray-500';
  const rightbg = theme === 'Dark' ? 'bg-[#333333]' : 'bg-[#e8e8e8]';
  const border = theme === 'Dark' ? 'border-white' : 'border-black';
  return (
    <div className={`${backgroundColor} ${textColor} w-full h-full cursor-default text-black flex flex-col xl:flex-row rounded-sm`}>
      <div className="w-full xl:w-1/4 mb-3">
        <Theme theme={theme} setTheme={setTheme} textColor={textColor} bg={bg}/>
        <Profile textColor={textColor} bg={bg} border={border}/>
        <SocialMedia textColor={textColor} bg={bg} main={main}/>
        <TechStack  textColor={textColor} bg={bg}/>
        <Certification textColor={textColor} bg={bg} main={main} rightbg={rightbg}/>
        <Education textColor={textColor} bg={bg} main={main}/>
      </div>
      <div className="w-full xl:w-3/4 shadow-lg shadow-white-500/50 rounded-sm mt-3 mb-3 mr-3 xl:ml-3 font-bold">
        <div className={`${rightbg} flex flex-col rounded-sm max-xl:ml-3 max-xl:mr-3 max-xl:-mt-3`}>
          <div className="flex">
            <span className={`${textColor} ml-3 mt-3 text-2xl font-medium max-xl:text-6xl max-xl:font-semibold`}>
              Github Projects
            </span>
            <span className="ml-auto font-light mr-3 mt-3">
              <a className="hover:underline hover:font-normal max-xl:text-3xl" href="https://github.com/Ashish22Gupta">
                See All
              </a>
            </span>
          </div>
          <div className="flex flex-wrap items-stretch">
            <div className="w-full xl:w-1/2">
            <a href="https://github.com/Ashish22Gupta/Bank-Management-System">
              <Projects
                title="Bank Management System"
                description="In this project there is 3 panels Admin, Employee, Customer the Admin, Employee can perform CURD operation on Customer record."
                technology="Java(swing), SQL"
                logo={<Landmark size={15} className='max-xl:h-9 max-xl:w-9'/>}
                textColor={textColor} bg={bg} main={main}
              />
              </a>
            </div>
            <div className="w-full xl:w-1/2">
            <a href="https://github.com/Ashish22Gupta/Product-Management-System"><Projects textColor={textColor} bg={bg} main={main}/></a>
            </div>
          </div>
          <div className="flex flex-wrap items-stretch">
            <div className="w-full xl:w-1/2">
            <a href="https://ashish22gupta.github.io/Snake-Game/">
              <Projects
                title="Snake Game"
                description="This platform-independent Snake Game lets users control a snake, collect food, and track their score while aiming for the highest points."
                technology="HTML5, CSS3, JQuery"
                logo={<Worm size={15} className='max-xl:h-9 max-xl:w-9'/>}
                textColor={textColor} bg={bg} main={main}
              />
              </a>
            </div>
            <div className="w-full xl:w-1/2">
            <a href="https://ashish22gupta.github.io/Basic_Arithmatic_Calculator/">
              <Projects
                title="Arithmatic Calculator"
                description="In this calculator the user can perform basic arithmatic operations, This project is platform-independent which runs on any types of devices."
                technology="HTML5, CSS3, Javascript"
                logo={<Calculator size={15} className='max-xl:h-9 max-xl:w-9'/>}
                textColor={textColor} bg={bg} main={main}
              />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-stretch">
            <div className="w-full xl:w-1/2">
            <a href="https://ashish22gupta.github.io/Random_password_Generator/">
              <Projects
                title="Random Password Generator"
                description="In this project the user can generate twelve digit unique secured password evey time when they click on Generate Password button."
                technology="HTML5, CSS3, Javascript"
                logo={<RectangleEllipsis size={15} className='max-xl:h-9 max-xl:w-9'/>}
                textColor={textColor} bg={bg} main={main}
              />
              </a>
            </div>
            <div className="w-full xl:w-1/2">
            <a href="https://ashish22gupta.github.io/Password_Strength_Checker/">
              <Projects
                title="Password Strength Checker"
                description="In this project the user can check the strength of their entered password, if all conditions are match then the Password is submitted."
                technology="HTML5, CSS3, Javascript"
                logo={<FileLock size={15} className='max-xl:h-9 max-xl:w-9'/>}
                textColor={textColor} bg={bg} main={main}
              />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-stretch">
            <div className="w-full xl:w-1/2">
            <a href="https://ashish22gupta.github.io/BMI_Calculator/">
              <Projects
                title="BMI Calculator"
                description="In this Project the user can enter their weigth(in KG) and Height(in CM) according to that, it will give user their BMI and their Body Condition."
                technology="HTML5, CSS3,Javascript"
                logo={<Dumbbell size={15} className='max-xl:h-9 max-xl:w-9'/>}
                textColor={textColor} bg={bg} main={main}
              />
              </a>
            </div>
            <div className="w-full xl:w-1/2">
            <a href="https://ashish22gupta.github.io/Analog-Clock/">
              <Projects
                title="Analog Clock"
                description="In this Project, I had made a Analog Clock in which user can view the current time. in this time is fetched with device. it is simple to view in all the devices."
                technology="HTML5, CSS3, Javascript"
                logo={<Clock size={15} className='max-xl:h-9 max-xl:w-9'/>}
                textColor={textColor} bg={bg} main={main}
              />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-stretch">
            <div className="w-full xl:w-1/2">
            <a href="https://github.com/Ashish22Gupta/ATM-interface">
              <Projects
                title="ATM Interface"
                description="In this project the user can deposite amount, withdraw amount, add new account, change PIN number check their current balance."
                technology="C++"
                logo={<Monitor size={15} className='max-xl:h-9 max-xl:w-9'/>}
                textColor={textColor} bg={bg} main={main}
              />
              </a>
            </div>
            <div className="w-full xl:w-1/2">
            <a href="https://github.com/Ashish22Gupta/Basic_General_knowledge_question">
              <Projects
                title="Basic General Knowledge Question Answer"
                description="In this project the user can Login/Register and continue their exam and if all answers are right, then at the end they can get the message"
                technology="Java(swing)"
                logo={<MonitorCheck size={15} className='max-xl:h-9 max-xl:w-9'/>}
                textColor={textColor} bg={bg} main={main}
              />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-stretch">
            <div className="w-full xl:w-1/2">
            <a href="https://ashish22gupta.github.io/Stopwatch/">
              <Projects
                title="Stop Watch"
                description="In this project, users can start, stop, and reset a stopwatch to measure elapsed time accurately, with a clean and responsive interface."
                technology="HTML5, CSS3,Javascript"
                logo={<Timer size={15} className='max-xl:h-9 max-xl:w-9'/>}
                textColor={textColor} bg={bg} main={main}
              />
              </a>
            </div>
            <div className="w-full xl:w-1/2">
            <a href="https://ashish22gupta.github.io/Digital-Clock/">
              <Projects
                title="Digital Clock"
                description="In this project, I developed a real-time digital clock using HTML, CSS, and JavaScript, which dynamically displays the current time with an intuitive interface."
                technology="HTML5, CSS3, Javascript"
                logo={<Construction size={15} className='max-xl:h-9 max-xl:w-9'/>}
                textColor={textColor} bg={bg} main={main}
              />
              </a>
            </div>
          </div>
        </div>
        <div className={`${rightbg} flex flex-col mt-3 rounded-sm max-xl:ml-3 max-xl:mr-3`}>
          <div className="mt-3 ml-3">
            <Publication textColor={textColor} bg={bg} main={main}/>
          </div>
        </div>
        <div className={`${rightbg} flex flex-col mt-3 rounded-sm max-xl:ml-3 max-xl:mr-3`}>
          <div className="mt-3 ml-3">
            <Ongoingproject textColor={textColor} bg={bg} main={main}/>
          </div>
        </div>
        <div className="flex mt-3 bg-transparent rounded-sm">
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default Card;