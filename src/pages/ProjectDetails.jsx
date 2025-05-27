import { useParams } from 'react-router-dom';

import Footer from '../components/footer';
import projectsData from '../data/projectsData';
import { useContext } from 'react';
import  { LanguageContext } from '../context/Languagecontext';
import '../scss/pages/_projectdetails.scss'
import Header2 from '../components/header2';

function ProjectDetails() {
    const { id } = useParams();
    const { language } = useContext(LanguageContext);
    const project = projectsData[language].find(project => project.id === parseInt(id));
    
    
    
    if (!project) {
        return <div>Projet non trouvé</div>;
    }
    
    return (
        <div className="project">
             <Header2/>
            <div className="maincontainer">
            <div className="imagecontainer">
            <img src={project.imagedetail} alt="jpg detaillé" />
            </div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Compétences : {project.skills.join(', ')}</p>
            <div className="githublink-container">
            <a target="_blank"  className="githublink" href={project.githublink}>Lien vers le repo Github</a>
            {project.link != ""  &&
                <a target="_blank"  className="githublink" href={project.link} >Lien vers la page Github-pages </a>
            }
            
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProjectDetails;