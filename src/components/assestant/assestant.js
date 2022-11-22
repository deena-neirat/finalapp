import React from "react";
import { Card, Container, Row ,Col} from "react-bootstrap";
import img3 from "../imges/img3.png";
import img15 from "../imges/img15.png";
import img16 from "../imges/img16.png";
import img17 from "../imges/img17.png";
import img18 from "../imges/img18.png";
import img19 from "../imges/img19.png";
import img20 from "../imges/img20.png";
import asstentStyle from "../assestant/assistent.css";
import { Routes,Route,Outlet ,Link} from 'react-router-dom';



function Dental () {
    return(

        <Container className="mt-3" id='assistent'>
                <Card className="m-4 p-4 shadow" >
                    <Card.Header className="p-3 my-3" >
                        <h4 className='assi2' >personal information</h4>
                    </Card.Header>
                    <Card.Body className='shadow p-4'>
                        <div className="row m-2 ">
                            <div className="col-3 assi">
                                 <p>Assistent Name :</p>
                                 <p>College Name :</p>
                               <p>Identification Number :</p> 
                            </div>
                            
                            <div className="col-4 assi">
                                 <p>Donia Waleed Nairat</p>
                                 <p>Faculty of Dentistry</p>
                                 <p>201810566</p>
                                      
                            </div>
                            <div className="col-4">
                            <img src={img3} alt="error" width='50%' height='100%'/>
                            </div>
                        </div>
                    </Card.Body>
                   </Card>
            

            <Card className="m-4 p-4 shadow">
              <Card.Header className="p-3" >
                <h4 className="assi2" >Medical Clinics</h4>
               </Card.Header>
            <div className="servic-row row container mt-4 mx-1">

            

                <div className="servic-col col-md-4 shadow pt-2 ">
                <button style={{border:'none'}}>
                    <div className="servcover">

                    <Link to='/Paedodontics'>
                        <img src={img15} alt="error"/>
                          <h4>Paedodontics</h4>
                        <p>Examination and treatment of all dental problems for children</p>
                    </Link> 

                    </div>  
                </button>
                </div>
                
                
                <a href='#Endodontics' className="servic-col col-md-4 shadow pt-2 ">
                <button style={{border:'none'}}>
                <div>
                    <div className="servcover">

                    <Link to='/Endodontics'>
                        <a><img src={img16} alt="error"/></a>
                        <h4>Endodontics</h4>
                        <p>Treating the roots of the teeth by pulling the nerves</p>
                    </Link> 

                </div>
                </div>
                </button>
                </a>
                

                <a href='#Conservative' className="servic-col col-md-4 shadow pt-2 ">
                <button style={{border:'none'}}>
                <div>
                    <div className="servcover">

                    <Link to='/conservative'>
                        <img src={img17} alt="error"/>
                        <h4>Conservative</h4>
                        <p>Conservative dental treatments with dental fillings</p>
                    </Link>    
                    </div>
                </div>
                </button>
                </a>
                

                <a href='#Surgery' className="servic-col col-md-4 shadow pt-2 ">
                <button style={{border:'none'}}>
                <div>
                    <div className="servcover">

                    <Link to='/surgery'>
                        <img src={img18} alt="error"/>
                        <h4>Surgery</h4>
                        <p>Doing all dental surgical treatments to solve all problems</p>
                    </Link>    

                    </div>
                </div>
                </button>
                </a>
                

                <a href='#Perodontics' className="servic-col col-md-4 shadow pt-2 ">
                <button style={{border:'none'}}>
                <div>
                    <div className="servcover">
                    <Link to='/perodontics'>
                        <img src={img19} alt="error"/>
                        <h4>Perodontics</h4>
                        <p>Cleaning the gums from lime and dirt and treating the gums</p>
                    </Link>    
                    </div>
                </div>
                </button>
                </a>
               

                <a href='#Prosthodontics' className="servic-col col-md-4 shadow pt-2 ">
                <button style={{border:'none'}}>
                 <div>
                     <div className="servcover">
                     <Link to='/prosthodontics'>
                           <img src={img20} alt="error"/>
                            <h4>Prosthodontics</h4>  
                            <p>Replacing missing teeth through dental implants and dentures</p>
                     </Link>
                    </div>
                </div>
              </button>
              </a>         
            </div>
            </Card>
            <Outlet/>
        </Container>


    )
}

export default Dental;