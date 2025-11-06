import React from 'react'
import { Badge, Button, Card } from 'antd';
import { motion } from 'motion/react';
import { useState, useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import Ribbon from 'antd/es/badge/Ribbon';


function ProjectCard(props) {
    const [showOverlay, setShowOverlay] = useState(false);
    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <>
        <motion.div
        initial={{y:100, filter:"blur(5px)"}}
        whileInView={{y:0, filter:"blur(0px)"}}
        transition={{duration:0.3}}
        className='relative inline-block'
        >
            
            <Card hoverable className={`bg-gray-100! ${isDarkMode?"bg-gray-700!":""}`}>
                <img src={props.img} alt="ProjectImg" className='rounded-md bg-linear-to-br from-indigo-400 to-green-400 via-pink-400 mastShadow'/>
                <div className='flex justify-between'>
                    <h1 className={`mt-2 font-medium text-neutral-400 ${isDarkMode?"text-white":""}`}>{props.title}</h1>
                    <h1 className={`mt-2 font-medium text-neutral-400 ${isDarkMode?"text-white":""}`}>{props.dt}</h1>
                </div>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:showOverlay? 1: 0}}
                whileHover={{opacity:1}}
                onClick={()=> setShowOverlay((prev=>!prev))}
                transition={{duration:0.3}}
                className='bg-black/30 backdrop-blur-2xl absolute top-0 left-0 w-full h-full rounded-lg flex flex-col justify-center items-start text-white p-5'>
                    <h1 className='text-2xl font-medium mb-2'>{props.title}</h1>
                    <p className='text-neutral-100 font-medium'>{props.des}</p>
                    <div className='w-full lg:mt-7 mt-5 flex gap-3'>
                        {
                            props.Stack.map((item, index)=>(
                                <Button key={index} size='small' className='bg-white/30! backdrop-blur-2xl! text-white! rounded-full! font-medium! lg:px-4!'>{item}</Button>
                            ))
                        }

                    </div>
                    <div className='w-full flex justify-center items-center gap-3 lg:mt-7 mt-5'>
                        <a target='_blank' href={props.SUrl} className='w-6/12'>
                            <button className='w-full border border-white/30 text-white font-medium py-1 rounded-full hover:bg-indigo-600 bg-indigo-400'>Source Code</button>
                        </a>
                        <a target='_blank' href={props.PUrl} className='w-6/12'>
                            <button className='w-full border text-white font-medium border-white/30 py-1 rounded-full hover:bg-indigo-600 bg-indigo-400'>Live Preview</button>
                        </a>
                    </div>
                </motion.div>
            </Card>
            

        </motion.div>
        </>
    )
}

export default ProjectCard
