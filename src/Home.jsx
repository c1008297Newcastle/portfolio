import Header from "./Header";

function Home(){
    return (
        <>
            <Header shadow={false}/>
            <div id="body-content" style={{alignItems: 'center', justifyContent: 'center'}}>
                <div id="hero">
                    <img src="../img/hero.jpg" alt="Graduation hero image" style={{width: '100%'}}></img>
                </div>
                <div id="introduction"
                    style={{paddingLeft: '75px', paddingRight: '75px', paddingTop: '75px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div>
                        <h3>Elliot Hurley</h3>
                        <p>Having recently graduated from an MSc in Advanced Computer Science, I am now open to full-time
                            software development positions. If you are a recruiter, please contact me at:
                            hello@example.com.</p>
                        <p>My mission is to provide high-quality, well-documented, secure, and extensible code to power the
                            future. I have vast experience working as an individual, and as a team-member on several
                            successful high-impact projects. To see more details, view my portfolio.</p>
                        <p>My primary areas of expertise and interest are cybersecurity, data analytics, cloud
                            technologies, and full-stack development.</p>
                        <p>During my time at university, I have also contributed towards multiple state-of-the-art research
                            publications.</p>
                    </div>
                    <img src="../img/profile.jpg" alt="Profile image" style={{width: '17.8%', marginLeft: '75px'}}></img>
                </div>
            </div>
        </>
    )
}

export default Home;