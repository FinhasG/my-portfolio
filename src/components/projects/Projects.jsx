import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-7 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        <ProjectsCard
          title="Movie Website"
          des="On this user-friendly movie website, users can search for any kind of film.
          I used React.js javascript framework and bootstrap CSS framework to create this movie's frontend, and I collected the data from an online api."
          src={projectOne}
        />
        <ProjectsCard
          title="Blog Website"
          des="This user-friendly, modern blog platform allows users to post and read blogs, as well as edit and update their own content and account.
          For the front end, I used React.js and bootstrap frameworks, and for the back end, Node.js and express.js. MongoDB was the database I used."
          src={projectTwo}
        />
        <ProjectsCard
          title="Book Store Website"
          des="This modern, user-friendly book store website lets users browse and save books in addition to editing and updating their own content and accounts.
          For the front end, I used React.js, and for the back end, Node.js and express.js. MongoDB was the database I used."
          src={projectThree}
        />
        <ProjectsCard
          title="Real Estate Marketplace"
          des="This advanced, user-friendly Real Estate Marketplace website lets users purchase and sell homes.
          For the front end, I used React.js and Tailwind css, and for the back end, Node.js and express.js. MongoDB was the database I used. "
          src={projectFour}
        />
      </div>
    </section>
  );
}

export default Projects