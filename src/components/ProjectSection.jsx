import {useState, useEffect} from 'react';
import axios from "axios";
import Data from "./Data.json";




const ProjectSection = () => {
    const [project, setProject] = useState([]);
    useEffect(() => {
        const fetchData = async () => {

            try {
                const res = await axios.get(Data)
                // console.table(res.config.url)
                setProject(res.config.url)
            }catch (error) {
                console.log(error)
            }
        }

        fetchData(Data)
    }, []);

    return (
        <div className="flex flex-wrap gap-5 justify-center items-center m-10" dir="ltr">
            {project.map((items, index) => {
                return (
                    <div className="relative flex flex-col gap-6 mt-6 text-gray-700 bg-white shadow-md rounded-xl w-96 mb-5 clip-border" key={index}>
                        <div className="relative  mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl ">
                            <img src={items.mainImg} alt="" className="w-90 h-55" />
                        </div>
                        <div className="p-6 line-clamp-4">
                            <h5 className="block mb-2 ml-4 text-xl font-semibold leading-snug tracking-normal text-blue-950">
                                {items.title}
                            </h5>
                            <p className="block text-base font-light leading-relaxed text-inherit ml-2">{items.properties}</p>
                        </div>
                        {/*<div className="p-6 pt-0">*/}
                        {/*    <button className="text-center outline-dotted p-3 rounded-lg shadow-md">ادامه</button>*/}
                        {/*</div>*/}

                    </div>
                )
            })}


        </div>
    )
}
export default ProjectSection;