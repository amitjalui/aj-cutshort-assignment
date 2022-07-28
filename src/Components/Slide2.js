import SlideHeader from "./SlideHeader";
import { useNavigate } from "react-router-dom"

const Slide2 = ({ image }) => {
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
                    <h1 style={{fontSize: "1.9rem", fontWeight: "bold"}}>Let's set up a home for all your work</h1>
                    <p className="form-text" style={{fontSize: "1rem"}}> You can always create another workspace later. </p>
                </div>

                
                {/* 
                    @form 
                       - workspaceName
                       - url_field
                       - button
                */}

                <div className="col-12 d-flex justify-content-center">
                    <form style={{width: "25rem", margin: "2.3rem 0 0 0"}}>

                        <div className="mb-3">
                            <label htmlFor="workspaceName" className="form-label">
                                Workspace Name
                            </label>
                            <input 
                                type="text" 
                                id="workspaceName" 
                                placeholder="Eden" 
                                className="form-control" 
                                style={{height: "3.2rem"}}
                            />
                        </div>

                        <label htmlFor="basic-url" className="form-label">    
                            Workspace URL <span id="basic-url" className="form-text"> (optional) </span>
                        </label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon3">www.eden.com/</span>
                            <input 
                                type="text" 
                                id="basic-url" 
                                aria-describedby="basic-addon3" 
                                placeholder="Example" 
                                className="form-control" 
                                style={{height: "3.2rem"}} 
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            style={{width: "100%", height: "3.2rem" ,margin: "1rem 0 0 0"}} 
                            onClick={() => navigate('/slide3')} 
                        >
                            Create Workspace
                        </button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Slide2;