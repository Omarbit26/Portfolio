
const Skills = () => {

    return (
        <div id="skills" className="bg-[#071739] text-white" >
            <section className="py-20 text-center">
                <h2 className="text-4xl font-bold mb-8">About Me</h2>
                <p className="max-w-2xl mx-auto">I specialize in solving intricate challenges through innovative solutions. My expertise can assist your company in reaching its objectives, offering scalable solutions tailored to Data Science and Web Development.</p>
            </section>

            <section className="py-20 text-center">
                <h2 className="text-4xl font-bold mb-8">Skills</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-200 p-8 rounded-lg">Skill 1</div>
                <div className="bg-gray-200 p-8 rounded-lg">Skill 2</div>
                <div className="bg-gray-200 p-8 rounded-lg">Skill 3</div>
                </div>
            </section>
        </div>
        )
}

export default Skills;