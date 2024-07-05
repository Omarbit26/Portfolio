import React, { useState } from 'react';
import ImagenSetsi from '../components/ImagenSetsi';
import CardSkill from '../components/CardSkill';
import javascriptImage from "../assets/javascript.svg"
import pythonImage from "../assets/python.svg";
import postgresImage from "../assets/postgresql.svg"
import reactImage from "../assets/react.svg"
import postmanImage from "../assets/postman.svg"
import gitImage from "../assets/git.svg"
import reduxImage from "../assets/redux.svg"
import boostrapImage from "../assets/bootstrap.svg"
import taiwilindImage from "../assets/taiwilind.svg"
import jestImage from "../assets/jest.svg"


const Skills = () => {
    
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };


    return (
        <div id="skills" className="bg-[#001f54] text-[#fefcfb] px-40" >
            <section className="py-20">
                <h2 className="text-6xl font-bold mb-8 text-center">About Me</h2>
                <div className='text-left max-w-full'>
                    <div className='px-30 text-3xl'>
                        <p >Specialized in solving intricate challenges through innovative solutions. 
                            My expertise can assist your company in reaching its objectives, offering scalable solutions 
                            tailored to Data Science and Web Development.
                        </p>
                        {
                            isExpanded && (
                                <div>
                                    <p>
                                        <br />
                                        Graduated in Mechatronics Engineering with one year of experience in digital 
                                        transformation in mining industry passionate about new technology and software 
                                        development. Enthusiastic and troubleshooting IT professional 
                                        with strong skills in programming. I’m proficient in the English language. 
                                        Looking for opportunities to develop practical skills to contribute 
                                        to the success of large projects
                                    </p>
                                    <div className='w-1/3 pt-10'>
                                        {/**<ImagenSetsi/> */}
                                    </div>
                                </div>
                                )
                        }
                        
                            

                        <button
                            onClick={toggleReadMore}
                            className="mt-4 bg-[#1282a2] text-xl px-4 py-2 rounded hover:bg-[#086375]" >
                            {isExpanded ? 'Read less' : 'Read more'}
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-20 text-start">
                <h2 className="text-4xl text-center font-bold mb-8 ">Skills</h2>
                <ImagenSetsi/>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CardSkill name={"JavaScript"} imagen={javascriptImage}/>
                    <CardSkill name={"Python"} imagen={pythonImage}/>
                    <CardSkill name={"PostreSQL"} imagen={postgresImage}/>
                    <CardSkill name={"React"} imagen={reactImage}/>
                    <CardSkill name={"Postman"} imagen={postmanImage}/>
                    <CardSkill name={"Git"} imagen={gitImage}/>
                    <CardSkill name={"Jest"} imagen={jestImage}/>
                    <CardSkill name={"Redux"} imagen={reduxImage}/>
                    <CardSkill name={"Tailwind"} imagen={taiwilindImage}/>
                    <CardSkill name={"BootStrap"} imagen={boostrapImage}/>                
                </div>
            </section>
        </div>
        )
}

export default Skills;