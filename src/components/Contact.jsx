import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import assets from '../assets/assets'
import Title from './Title'
import { motion } from "motion/react"

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", import.meta.env.VITE_WEB3FORM_API);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                setResult("")
                toast.success('Thank you for your submission! ')

                event.target.reset();
            } else {
                toast.error(data.message)
                setResult("")
            }

        } catch (error) {
            toast.error(error.message)

        }
    }



    return (
        <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{staggerChildren: 0.2}}
            className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white ' id='contact-us'>

            <Title title='Reach out to us' desc='Ready to grow your brand? Let’s connect and build something exceptional together.' />

            <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:0.4 }}
            viewport={{ once: true }}
            onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full' >

                <div>
                    <p className='mb-2 text-sm font-medium'>Your Name</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.person_icon} alt="person icon" />
                        <input type="text"
                            name='name'
                            placeholder='Enter your name'
                            className=' w-full p-2 text-sm outline-none'
                            required
                        />
                    </div>
                </div>

                <div>
                    <p className='mb-2 text-sm font-medium'>Your Email</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.email_icon} alt="email icon" />
                        <input type="email"
                            name='email'
                            placeholder='Enter your email'
                            className=' w-full p-2 text-sm outline-none'
                            required
                        />
                    </div>
                </div>

                <div className='sm:col-span-2'>
                    <p className='mb-2 text-sm font-medium'>Message</p>
                    <textarea
                        rows={8}
                        name='message'
                        placeholder='Enter your Message'
                        className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600'
                        required
                    />
                </div>

                <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-100'>

                    {result ? (
                        result
                    ) : (
                        <>
                            Submit <img src={assets.arrow_icon} width={14} alt="arrow icon" />
                        </>
                    )}
                </button>

            </motion.form>
        </motion.div>
    )
}

export default Contact