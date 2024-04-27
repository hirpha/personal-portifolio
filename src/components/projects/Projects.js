import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="KABBA KIDS"
          url="https://play.google.com/store/apps/details?id=com.vintechplc.kabba.parent"
          des=" The project aims to develop a mobile app for carpooling in Addis Ababa, serving schools and the general public. Key features include registration for parents and children, easy payment handling, real-time driver tracking, and a chat function for communication between parents and drivers. The app aims to revolutionize carpooling in the city."
          src={projectOne}
        />
        <ProjectsCard
          title="EDL DRIVER"
          url='https://play.google.com/store/apps/details?id=com.edl.driver'
          des=" Edl is a versatile app for ride-hailing and delivery services, offering trip creation, real-time tracking, wallet management, various payment options, ratings, notifications, user profiles, and more. Available on Play Store and App Store, it provides a convenient and user-friendly experience."
          src={projectTwo}
        />
        <ProjectsCard
          title="EDL PASSENGER"
          url='https://play.google.com/store/apps/details?id=com.edl.customer'
          des=" Edl is a versatile app for ride-hailing and delivery services, offering trip creation, real-time tracking, wallet management, various payment options, ratings, notifications, user profiles, and more. Available on Play Store and App Store, it provides a convenient and user-friendly experience.!"
          src={projectThree}
        />
        <ProjectsCard
          url='https://play.google.com/store/apps/details?id=com.vintechplc.kabba.passenger'
          title="KABBA PASSENGER"
          des=" Kabba Passenger is an innovative mobile app by Kabba Transport Organization, addressing transportation issues in Addis Ababa. Key features include user registration, trip booking, wallet integration, real-time driver tracking, and route search. The app revolutionizes transportation in the city by providing a user-friendly solution for residents' diverse needs."
          src={projectFour}
        />
        <ProjectsCard
           url ='https://www.youtube.com/watch?v=KwvWQqCtAy0'
          title="DRUMMROLL YOUTH"
          des=" Drumm Roll is a transportation app by Drumm Farm Center for Children, providing safe and convenient transportation for young adults experiencing homelessness. The user-friendly app allows independent booking of essential appointments, empowering youth with responsibility. Volunteer drivers ensure reliable 
          and cost-effective transportation for school, medical appointments, and more."
          src={projectFive}
        />
        <ProjectsCard
          url ='https://www.youtube.com/watch?v=lI2LvVpRB_M&t=23s'
          title="DRUMMROLL VOLUNTEER"
          des=" Drumm Roll is a transportation app by Drumm Farm Center for Children, providing safe and convenient transportation for young adults experiencing homelessness. The user-friendly app allows independent booking of essential appointments, empowering youth with responsibility. Volunteer drivers ensure reliable 
          and cost-effective transportation for school, medical appointments, and more.!"
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects