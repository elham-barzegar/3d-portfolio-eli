import React from 'react'
import { AboutModels } from './Models/AboutModels'

const About = () => {
  return (
    <div dir='rtl'>
      <div className='grid grid-rows-1 lg:grid-cols-2 gap-6 mt-10'>
          <div>
              <AboutModels />
          </div>

          <div className="ml-10">
            <h3 className='text-white m-5 text-3xl font-bold text-center'>Learn more about me</h3>
            <p className='text-justify m-5 leading-10 text-red-100' dir="ltr">Passionate front-end developer focused on building responsive, accessible interfaces. Committed to writing clean, maintainable code and continuously adopting new tools to improve performance. Experienced in collaborating with design, product, and engineering teams to deliver high-quality features on time and in alignment with product goals</p>

            <a href="/about" className='p-2 rounded-2xl text-white  bg-red-400 mx-auto block text-center w-32 h-9 leading-9'>Know more</a>
        </div>

      </div>
    </div>
  )
}

export default About