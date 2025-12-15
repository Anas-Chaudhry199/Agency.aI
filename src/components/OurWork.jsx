import React from 'react'
import { workData } from '../assets/assets'
import Title from './Title'
import { motion } from "motion/react"

const OurWork = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white ' id='our-work'>

            <Title title='Our latest work' desc='Browse our portfolio of innovative digital projects that showcase creativity, performance, and results.' />

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl dark:bg-[#09072b]'>
                {
                    workData.map((work, index) => {
                        return <motion.div 
                        initial={{opacity:0, y: 20}}
                        whileInView={{opacity:1, y: 0}}
                        transition={{duration: 0.5, delay: index * 0.2}}
                        viewport={{once: true}}
                        key={index}
                        className='hover:scale-102 duration-500 transition-all cursor-pointer '>
                            <img className='w-full rounded-xl' src={work.image} alt="works images" />
                            <h3 className='mt-3 mb-2 text-lg font-bold'>{work.title}</h3>
                            <p className='text-sm opacity-60 w-5/6'>{work.description}</p>

                        </motion.div>
                    })
                }
            </div>
        </motion.div>

    )
}

export default OurWork