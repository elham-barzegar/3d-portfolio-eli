import React from 'react'

const Forms = () => {
    return (
        <div className="ml-10">
            <div className="text-white">
                <h1 className="text-3xl mt-5 mb-5 font-bold">I'm Elham Barzeghar</h1>
                <h3 className='text-center text-xl mt-10 mb-5'> React developer || Front-end Developer </h3>
                <p className='text-justify leading-10 text-sm'>Passionate front-end developer focused on building responsive, accessible interfaces with modern web technologies. Proficient in HTML, CSS, JavaScript, React, and Next.js.</p>
                <br/> <br/> <br/>
                <span className="text-center mb-3 mt-10 text-lg">Stay in touch with me : </span>
                <br/> <br/>
            </div>
            <form>
                <div className=" flex flex-wrap gap-3">
                    <input type="text" className="w-full h-10 border-2 outline-none bg-white border-red-200 rounded-lg mt-5" placeholder="Name & lastName" />
                    <input type="text" className="w-full h-10 border-2 outline-none bg-white border-red-200 rounded-lg mt-5" placeholder="Phone Number" />
                    <input type="text" className="w-full h-10 border-2 outline-none bg-white border-red-200 rounded-lg mt-5" placeholder="Email" />
                    <textarea cols="60" rows={10} className="w-full h-10 border-2 outline-none bg-white border-red-200 rounded-lg mt-5" placeholder="Your Massage" />
                    <button type="submit" className="bg-white w-30 h-10 border-2 border-red-200 rounded-lg mt-5 mx-auto text-center leading-6"> Send </button>
                </div>
            </form>

        </div>

    )
}
export default Forms;