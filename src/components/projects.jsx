import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/Languagecontext';
import projectsData from '../data/projectsData';
import githubLogo from '../assets/github_logo.webp';
import websiteLogo from '../assets/website_icon.webp';
import '../scss/components/_projects.scss';
import '../scss/style.scss';


function Projects() {
    const { language } = useContext(LanguageContext);
    const [filter, setFilter] = useState('tous');

    const currentProjects = projectsData[language].filter(project => {
        if (filter === 'tous') return true;
        if (Array.isArray(project.type)) {
            return project.type.includes(filter);
        }
        return project.type === filter;
    });

    return (
        <section id="projects">
            <h2 className="projects-title"> Projets </h2>

            

            <div className="projects-container">
                {currentProjects.map((project) => (
                    <div key={project.id} className="project-item">
                        <h3 className="project-item-title">{project.title}</h3>
                        <div className="image-container">
                            <img src={project.image} alt={project.title} className="project-image" loading="lazy"/>
                        </div>
                        <p className="project-description">{project.description}</p>
                        <div className="project-skills">
                            {project.skills.map((skill, index) => (
                                <span key={index} className="skill-button">{skill}</span>
                            ))}
                        </div>
                        <div className="projects-links">
                            {/* 
                              */}

                            {/* <a href="" className="project-link-viewmore">
                                {language === 'fr' ? 'Voir +' : 'See +'}
                            </a> */}
                            <a target="_blank" href={project.githublink}>
                                <img src={githubLogo} alt="GitHub" aria-label="Lien Github" className="projects-link-github" />
                            </a>
                            <a target="_blank" href={project.link}>
                                <img src={websiteLogo} alt="Website" aria-label="Lien vers le site" className="projects-link-github" />
                            </a>
                            <Link to={`/project/${project.id}`} className="view-details-link">Voir +</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;