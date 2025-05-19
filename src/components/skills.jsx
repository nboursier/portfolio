import { useContext } from 'react';

import SkillsTranslations from '../translation/SkillsTranslation';


import '../scss/components/_skills.scss';
import '../scss/style.scss';
import { LanguageContext } from '../context/Languagecontext';
import { designerSkills, developerSkills } from '../data/skillsData';

function Skills() {
    const { language } = useContext(LanguageContext);

    

    return (
        <section className="skills" id="skills">
        <div className="skills-container">
            <div className="skills-title">
                <h2 className="skills-title-text">{SkillsTranslations[language].skills.title || "Compétences"}</h2>
            </div>
            <div className="skills-list-container">

                <div className="skills-list">
                            <ul className="skills-list-dev">
                                {developerSkills.map((skill, index) => (
                                    <li className="skills-list-item" key={index}>
                                        <img src={skill.icon} className="skills-list-item-icon"
                                        alt={skill.alt} loading="lazy"/>
                                        <p className="skills-list-item-name">{skill.name}</p>
                                    </li>
                                ))}
                            </ul>

                        <div className="skills-list">
                            <ul className="skills-list-design">
                                {designerSkills.map((skill, index) => (
                                    <li className="skills-list-item" key={index}>
                                        <img src={skill.icon} className="skills-list-item-icon"
                                        alt={skill.alt} loading="lazy" />
                                        <p className="skills-list-item-name">{skill.name}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;