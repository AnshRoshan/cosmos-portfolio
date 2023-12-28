import React from 'react';
import ProjectCard from '../sub/ProjectCard';
import { Projects_db } from '@/constants';

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20' id='projects'>
      <h1 className=' text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>
      <div className=' flex  items-center h-full w-full flex-col lg:flex-row flex-wrap gap-10 px-20 lg:px-10 '>
        {Projects_db.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              src={project.src}
              title={project.title}
              description={project.description}
              link={project.link}
              github={project.github}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
