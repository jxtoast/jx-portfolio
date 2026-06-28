import { useState } from "react";
import videos from "../data/videos_info";

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const video = videos[currentIndex];

    return (
        <section className="pt-4" id="projects-section">
            <h1 className="custom-h1">Projects</h1>

            <div className="mt-4">
                <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-8 items-center lg:items-start">

                    {/* Left Side: Video */}
                    <div className="flex-1 w-full lg:w-1/2">
                        {video.type === "local" ? (
                            <video
                                key={video.id}
                                controls
                                className="w-full aspect-video rounded-lg shadow-xl"
                                src={video.src}
                            >
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <iframe
                                key={video.id}
                                className="w-full aspect-video rounded-lg shadow-xl"
                                src={video.src}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        )}
                    </div>

                    <div className="lg:hidden w-3/4 border-b border-gray-300 my-4"></div>
                    <div className="hidden lg:block h-auto border-l border-gray-300 mx-4"></div>

                    {/* Right Side */}
                    <div className="flex-1 w-full lg:w-1/2">

                        <h1 className="custom-h2">{video.title}</h1>

                        <p className="text-base text-zinc-600 dark:text-zinc-400">
                            {video.description}
                        </p>

                        {video.languages && (
                            <div className="mt-4">
                                <h4 className="custom-h3">Languages:</h4>
                                <p>{video.languages.join(", ")}</p>
                            </div>
                        )}

                        {video.technologies && (
                            <div className="mt-4">
                                <h4 className="custom-h3">Technologies:</h4>
                                <p>{video.technologies.join(", ")}</p>
                            </div>
                        )}

                        {video.database && (
                            <div className="mt-4">
                                <h4 className="custom-h3">Database:</h4>
                                <p>{video.database}</p>
                            </div>
                        )}

                    </div>

                </div>
            </div>

            {/* Navigation */}
            <div className="flex w-full justify-center gap-2 py-6">
                {videos.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={() => setCurrentIndex(index)}
                        className={`btn btn-xs ${
                            index === currentIndex
                                ? "btn-primary"
                                : "btn-outline"
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Projects;