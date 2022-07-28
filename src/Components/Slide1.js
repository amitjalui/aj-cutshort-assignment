import SlideHeader from "./SlideHeader";
import { useNavigate } from "react-router-dom";

const Slide1 = ({ image }) => {
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
                    <h1 style={{fontSize: "1.9rem", fontWeight: "bold"}}>Welcome! First things first.</h1>
                    <p className="form-text" style={{fontSize: "1rem"}}>You can always change them later.</p>
                </div>
                

                {/* 
                    @form 
                       - fullName
                       - displayName
                       - button
                */}

                <div className="col-12 d-flex justify-content-center">
                    <form style={{width: "25rem", margin: "2.3rem 0 0 0"}}>

                        <div className="mb-3">  
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input 
                                type="email" 
                                id="fullName" 
                                placeholder="Steve Jobs"
                                className="form-control" 
                            />
                        </div>

                        <div className="mb-3"> 
                            <label htmlFor="displayName" className="form-label">Display Name</label>
                            <input type="text" className="form-control" id="displayName" placeholder="Steve" />
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            style={{width: "100%", height: "3.2rem" ,margin: "1rem 0 0 0"}} 
                            onClick={() => navigate('/slide2')} 
                        >
                            Create Workspace
                        </button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Slide1;