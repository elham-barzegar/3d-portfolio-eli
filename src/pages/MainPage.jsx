import React from 'react'
import Navbar from "../components/Navbar";
import {HeroSection} from "../components/Models/Hero";
import Forms from "../components/Forms";
import Skills from "../components/Skills";
import About from "../components/About.jsx";
import ProjectSection from "../components/ProjectSection";
import Footer from "../components/Footer.jsx";

const MainPage = () => {
    return (
        <div className="backgroundColor" dir="ltr">
            <Navbar />
            <br/>
            <div className="flex flex-wrap gap-5">

                {/*form*/}
                <div className="w-[27%]">
                    <Forms />
                </div>
                {/*form*/}


                {/*model*/}
                <div className="w-[65%]">
                    <HeroSection />
                </div>
                {/*model*/}

            </div>
            <br/> <br/> <hr className="text-white"/>
            <Skills />
            <br/> <hr className="text-white"/>
            <About />
               <br/><br/><hr className="text-white"/>
            <ProjectSection />
            <br/>
            <Footer />

        </div>
    )
}
export default MainPage;