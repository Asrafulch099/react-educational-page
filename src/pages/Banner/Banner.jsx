import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                        <Marquee>
                            <h1 className="mb-5 text-5xl font-bold">
                            Welcome 
                            </h1>
                            </Marquee>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to='/login'><button className="btn btn-primary">Let`s Go</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;