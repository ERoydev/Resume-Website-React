export default function Header() {

    return (
        <header className="site-header">
            <div className="wrapper">
                <div className="site-title">
                    <p>
                        <a href="index.html">E.Roydev</a>
                    </p>
                </div>

                <nav className="main-nav">
                    <ul>
                        <li>
                        <a href="index.html">Home</a>
                        </li>
                        <li>
                        <a href="education.html">Education</a>
                        </li>
                        <li>
                        <a href="projects.html">Projects</a>
                        </li>
                        <li>
                        <a href="contact.html">Contact me</a>
                        </li>
                    </ul>
                    
                    <div className="nav-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>
                    </div>
                </nav>
            </div>
        </header>
    );
}