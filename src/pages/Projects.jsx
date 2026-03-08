import React, { useContext, useState } from 'react';
import { Container } from '../components/Container';
import ProjectCard from '../components/ProjectCard';
import { DarkModeContext } from '../context/DarkModeContext';
import { Button } from 'antd';
import {ProjectDetails} from '../data/ProjectDetails'
import BigProjectCard from '../components/BigProjectCard';

function Projects() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [visibleCount, setVisibleCount] = useState(4); 
  const allLoaded = visibleCount >= ProjectDetails.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <Container>
      <div className='w-full pt-25 flex flex-col justify-center items-center gap-4'>

        {/* Optional header section */}
        <h1 className={`text-2xl font-medium text-start lg:w-[95%] lg:mt-3 w-[90%] ${isDarkMode && "text-white"}`}>All Projects</h1>

        <div className=" w-[95%]">
          <div className="grid lg:grid-cols-1 lg:grid-rows-1 gap-10 py-3">
            {ProjectDetails.slice(0, visibleCount).map((item) => (
              <BigProjectCard
                key={item.id}
                title={item.title}
                img={item.imgUrl}
                des={item.description}
                SUrl={item.source}
                PUrl={item.URL}
                Stack={item.teck}
                dt={item.date}
              />
            ))}
          </div>
        </div>

        <div className="text-center my-10">
          {!allLoaded ? (
            <Button onClick={handleLoadMore}>Load More</Button>
          ) : (
            <p className='underline text-neutral-400 italic lg:px-0 px-10'>
              No more projects. Even I need a break. But next time you visit, something nasty might greet you. 🖤
            </p>
          )}
        </div>

      </div>
    </Container>
  );
}

export default Projects;