import { Person } from '../components/Models/Person'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
    return (
        <div className='backgroundColor'>
            <Navbar />
             <img
                src="/images/eli.jpg"
                alt="Project Image"
                width={800}
                height={650}
                className="rounded-lg m-auto"
            />

            <br /> <br/>
            <hr className="text-white" />
            <h3 className='text-3xl text-gray-950  text-center font-bold mt-5 mb-5'>Learn more about me</h3>
            <hr className="text-white" />
            <p className='text-justify text-white leading-10 m-30' dir='ltr'>
                Passionate front-end developer focused on building responsive, accessible interfaces with modern web technologies. Proficient in HTML, CSS, JavaScript, React, and Next.js. Committed to writing clean, maintainable code and continuously adopting new tools to improve performance and UX. Experienced in collaborating with design, product, and engineering teams to deliver high-quality features on time and in alignment with product goals.
                I specialize in turning complex design ideas into smooth, user-friendly interfaces that work for everyone on any device. Whether it's building reusable component libraries, optimizing page load speeds, or ensuring compliance, I care about the details that make a real difference in how people experience the web. I'm always learning, always experimenting, and I genuinely enjoy the process of making something both functional and beautiful.
                I believe great front-end development is a mix of craft, empathy, and curiosity — and I bring that mindset to every project I work on.
            </p>
            <Footer />
        </div>
    )
}

export default About