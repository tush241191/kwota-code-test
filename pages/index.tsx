import { useEffect, useState } from 'react';
import Project from '../components/cards/project/Project';
import HeaderLayout from '../components/layouts/header/HeaderLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { ProjectRepository } from '../services';
import { IProject } from '../types';
import { NextPageWithLayout } from './page';

const projectRepository = new ProjectRepository();

const Home: NextPageWithLayout = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    projectRepository.findAll().then((res) => {
      setProjects(res);
    });
  }, []);

  return (
    <div className='bg-white'>
      <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12'>
          <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
              Offset projects
            </h2>
          </div>
          <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
            {projects?.map((project) => (
              <Project key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <HeaderLayout />
      {page}
    </PrimaryLayout>
  );
};
