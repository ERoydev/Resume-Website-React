import TechStackList from "./TechStackList";

export default function TechStack() {

    return(
        <div className="techstack">
            <div className="list-items">
                <div className="container">
                    <div className="container-header">
                        <h1>My skills</h1>
                        <p>- Current tech that i use -</p>
                    </div>

                    <TechStackList />
                </div>
            </div>
        </div>

    );
}