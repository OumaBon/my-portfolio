const HomePage = () =>{
    return(<main>
        <section className="introduction">
            <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
                <img className="rounded-circle shadow-lg" src="./assets/images/profile.jfif" alt="logo"/>
                <p className="pt-5 fw-bold fs-2 ">Hello, I am Boniface</p>
                <p className="fw-light fs-5 text-danger text-center">Web Application Developer</p>
                <p className="text-center max-650">I'm a backend developer specializing in Python (Django). I also have a solid grasp of frontend technologies like JavaScript (React).</p>
                <p className="text-center max-650"> I focus on creating scalable, efficient backend systems and delivering seamless user experiences with robust, maintainable code.</p>
                <button type="button" className="btn btn-danger">Connect With Me</button>
            </div>

            <div>
                <p className="text-center fs-4 fw-bold">Sample Projects</p>

            </div>

        </section>
    </main>)
}

export default HomePage