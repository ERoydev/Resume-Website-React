import TechStackItem from "./TechStackItem";

import pythonImg from '../../../assets/styles/images/technologies/python.svg';
import javascriptImg from '../../../assets/styles/images/technologies/javascript.svg';
import htmlImg from '../../../assets/styles/images/technologies/html.svg';
import cssImg from '../../../assets/styles/images/technologies/css.svg';
import reactImg from '../../../assets/styles/images/technologies/react.svg';
import djangoImg from '../../../assets/styles/images/technologies/django.svg';
import postgreImg from '../../../assets/styles/images/technologies/postgresql.svg';
import nodejsImg from '../../../assets/styles/images/technologies/nodejs.svg';
import githubImg from '../../../assets/styles/images/technologies/github.svg';
import linuxImg from '../../../assets/styles/images/technologies/linux.svg';
import dockerImg from '../../../assets/styles/images/technologies/docker.svg';
import photoshopImg from '../../../assets/styles/images/technologies/photoshop.svg';
import figmaImg from '../../../assets/styles/images/technologies/figma.svg';

export default function TechStackList() {

    return(
        <div className="list-container">
            <TechStackItem img={pythonImg} name={"Python"} />

            <TechStackItem img={javascriptImg} name={"JavaScript"} />

            <TechStackItem img={htmlImg} name={"HTML"} />

            <TechStackItem img={cssImg} name={"CSS"} />

            <TechStackItem img={reactImg} name={"ReactJS"} />

            <TechStackItem img={djangoImg} name={"Django"} />

            <TechStackItem img={postgreImg} name={"PostgreSQL"} />

            <TechStackItem img={nodejsImg} name={"NodeJS"} />

            <TechStackItem img={githubImg} name={"Github"} />

            <TechStackItem img={linuxImg} name={"Linux"} />

            <TechStackItem img={dockerImg} name={"Docker"} />

            <TechStackItem img={photoshopImg} name={"Photoshop"} />

            <TechStackItem img={figmaImg} name={"Figma"} />

        </div>
    )
}