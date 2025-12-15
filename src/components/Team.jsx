import React from 'react'
import { teamData } from '../assets/assets'
import Title from './Title'
import { motion } from "motion/react"

const Team = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white' id='meet'>

            <Title title='Meet the team ' desc='A passionate team of digital experts dedicated to your brand’s success.' />

            <div className=' p-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    teamData.map((team, index) => {
                        return <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className='border border-gray-100 flex max-sm:flex-col items-center gap-5 p-4 rounded-xl darl:border-gray-700 bg-white dark:bg-[#09072b] shadow-xl shadow-gray-100 dark:shadow-white/50 hover:scale-103 transition-all duration-500'
                            key={index}
                        >
                            <img className='w-12 h-12 rounded-full' src={team.image} alt="teams inage" />
                            <div className='flex-1'>
                                <h3 className='font-bold text-sm'>{team.name}</h3>
                                <p className='text-xs'>{team.title}</p>
                            </div>

                        </motion.div>
                    })
                }
            </div>
        </motion.div>
    )
}

export default Team