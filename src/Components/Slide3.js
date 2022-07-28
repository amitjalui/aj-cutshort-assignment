import SlideHeader from "./SlideHeader";
import { useNavigate } from "react-router-dom";
import myself from "../accessories/mySelf.png"
import team from "../accessories/team.png"

const Slide3 = ({ image }) => {
    const navigate = useNavigate();
    
    return (
        <div className="container">
            <div className="row">

                {/* slide header */}
                <div className="col-12 mb-4">
                    <SlideHeader image={image} />
                </div>
                
                {/* headline */}
                <div className="col-12 text-center">
                    <h1 style={{fontSize: "1.9rem", fontWeight: "bold"}}>How are you planning to use Eden?</h1>
                    <p className="form-text" style={{fontSize: "1rem"}}>We'll streamline your setup experiance accordingly.</p>
                </div>


                {/* 
                    @form 
                       - myself_or_team
                            -myself
                            -team
                       - button
                */}
                
                <div className="col-12 d-flex justify-content-center">
                    <form className="" style={{width: "25rem", margin: "2.3rem 0 0 0"}}>

                        <div className="d-flex justify-content-around">
                            <div className="border p-3 m-1 myself" >
                                <img 
                                    src={myself} 
                                    alt="myself"
                                    style={{width: "1.5rem", margin:"0 0 0.5rem 0"}} 
                                />
                                <p style={{fontWeight: "bold"}}>For myself</p>
                                <p>
                                    Write better. Think more clearly. Stay organized.
                                </p>
                            </div>

                            <div className="border p-3 m-1 team" >
                                <img
                                    src={team} 
                                    alt="team" 
                                    style={{width: "1.5rem", margin:"0 0 0.5rem 0"}} 
                                />
                                <p style={{fontWeight: "bold"}}>With my team</p>
                                <p>
                                    Wikis, docs, tasks & projects, all in one place.
                                </p>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            style={{width: "100%", height: "3.2rem" ,margin: "1rem 0 0 0"}} 
                            onClick={() => navigate('/slide4')} 
                        >
                            Create Workspace
                        </button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Slide3;