import edenLogo from "../accessories/edenLogo.png";

const SlideHeader = ({ image }) => {
    return (
        <>
            <div className="row justify-content-center">
                <img className="mb-2" src={edenLogo} alt="edenLogo" style={{width: "10rem", padding:"0.8rem"}}/>
                <div></div>
                <img className="" src={image} alt="slideNumber" style={{width: "25rem", padding:"0.1rem"}}/>
                
            </div>
        </>
    )
}

export default SlideHeader;