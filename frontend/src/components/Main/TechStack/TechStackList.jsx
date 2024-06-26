import TechStackItem from "./TechStackItem";
import techStackData from './data.js';


export default function TechStackList() {
    
    return(
        <div className="list-container">            
            {techStackData.length > 0 && techStackData.map((tech) => (<TechStackItem key={tech.name} img={tech.imageUrl} name={tech.name} />))}
        </div>
    );
}