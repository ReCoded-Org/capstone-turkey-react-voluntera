import React from 'react'
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import "../components/ProjectCard/ProjectCard.css";

export default function Home() {
    const exampleData = [
        {
            "projectName": "Project Name 1",
            "field": "Field 1",
            "deadline": "Deadline 12/05/2022"
        },
        {
            "projectName": "Project Name 2",
            "field": "Field 2",
            "deadline": "Deadline 13/05/2022"
        },
        {
            "projectName": "Project Name 3",
            "field": "Field 3",
            
        },
        {
            "projectName": "Project Name 4",
            "field": "Field 4",
            "deadline": "Deadline 14/05/2022"
        }
    ];
    return (
        <div>
            <div className="AvailableProjectsH1">
                <h1>Available Projects</h1>
            </div>
            <div className="FilterButtons">
                <button type="button">
                    All Projects
                </button>
                <button>
                    Recent Projects
                </button>
                <button>
                    Social Events
                </button>
                <button>
                    some filter
                </button>
                <button>
                    some filter
                </button>
            </div>
            <div id="ProjectSection" className='flex flex-row   justify-center flex-wrap'>
                {exampleData.map((data,index) => (
                    <ProjectCard key={index} projectName={data.projectName} field={data.field} deadline={data.deadline} />
                ))}
            </div>
        </div>
    )
}
