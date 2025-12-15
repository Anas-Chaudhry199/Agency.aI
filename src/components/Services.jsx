import React from 'react'
import assets, { servicesData } from '../assets/assets'
import ServiceCard from './ServiceCard'
import Title from './Title'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white' id='services'>

      <img className=' absolute -top-110 -left-70 -z-1 dark:hidden' src={assets.bgImage2} alt="bgimg2" />

      <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

      <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index) => {
          return <ServiceCard key={index} service={service} />
        })}
      </div>
    </motion.div>
  )
}

export default Services
