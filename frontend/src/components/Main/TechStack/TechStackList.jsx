import TechStackItem from "./TechStackItem";
import techStackData from './data.js';


export default function TechStackList() {
    
    return(
        <div className="list-container">
            {/* <TechStackItem img={techStackData[0].imageUrl} name={techStackData[0].name} /> */}
            
            {techStackData.map((tech) => (<TechStackItem key={tech.name} img={tech.imageUrl} name={tech.name} />))}
        </div>
    )
}