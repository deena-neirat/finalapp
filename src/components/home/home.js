import React from "react";
import About from "../about/about";
import Treatment from "../treatment/treatment";
import Footer from "../footer/footer";
import homeStyle from '../home/home.module.css';


function Home(){
    return(
     <section id='home'>
        <div className={homeStyle.header}>
            <div className="container">
                <div className="row">
                    <div className="text-white">
                        <h1 className={homeStyle.h1head}>Healthy Teeth With AAUP</h1>
                    </div>
                </div>
            </div>
        </div>  
        <About/>
        <Treatment/>
        <Footer/>

        {/* <Outlet/> */}
     </section>
    )
}

export default Home;