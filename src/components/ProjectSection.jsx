import Data from "./Data.json";

const ProjectSection = () => {
    const project = Data;

    return (
        <div className="flex flex-wrap gap-5 justify-center items-center m-10" dir="ltr">
            {project.map((items, index) => (
                <div
                    key={index}
                    className="relative flex flex-col gap-6 mt-6 text-gray-700 bg-white shadow-md rounded-xl w-96 mb-5 clip-border"
                >
                    <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl">
                        <img
                            src={items["mainImg"]}
                            alt={items.title}
                            className="w-90 h-55"
                        />
                    </div>

                    <div className="p-6 line-clamp-4">
                        <h5 className="mb-2 text-xl font-semibold text-blue-950">
                            {items.title}
                        </h5>

                        <p>{items.properties}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectSection;