import Profile from "./Profile";
import Skills from "./Skills";
import TechStack from "./TechStack/TechStack";

export default function Main() {
    
    return(
        <main className="site-main">
            <Profile />
            <Skills />
            <TechStack />
        </main>
    )
}