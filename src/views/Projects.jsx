const Projects = () => {

    return (
        <section id="projects" className="py-20 bg-[#034078] text-center text-[#fefcfb]">
            <h2 className="text-4xl font-bold mb-8">Projects</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Añadir proyectos aquí */}
                <div className="bg-gray-200 p-8 rounded-lg">Project 1</div>
                <div className="bg-gray-200 p-8 rounded-lg">Project 2</div>
                <div className="bg-gray-200 p-8 rounded-lg">Project 3</div>
            </div>
        </section>
    )
}

export default Projects