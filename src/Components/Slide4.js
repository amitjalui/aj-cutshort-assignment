import SlideHeader from "./SlideHeader";
import completed from "../accessories/completed.png";

const Slide4 = ({ image }) => {
    
    return (
        <div className="container">
            <div className="row justify-content-center">

                {/* slide header */}
                <div className="col-12 mb-4">
                    <SlideHeader image={image} />
                </div>

                {/* done_img_symbol */}
                <img src={completed} alt="completed" style={{width: "7rem", margin: "0 0 3rem 0"}} />
                
                {/* Congratulations header */}
                <div className="col-12 text-center">
                    <h1 style={{fontSize: "1.9rem", fontWeight: "bold"}}>Congratulations, Eren!</h1>
                    <p className="form-text" style={{fontSize: "1rem"}}>
                        You have completed onboarding, you can start using the Eden!
                    </p>
                </div>
             
                <div style={{width: "25rem"}}>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        style={{width: "100%", height: "3.2rem" ,margin: "1rem 0 0 0"}} 
                    >
                        Launch Eden
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Slide4;