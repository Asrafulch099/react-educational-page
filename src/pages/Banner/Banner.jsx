import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div className="mt-6 mb-6">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/sWQCGnn/abstract-plexus-blue-geometrical-shapes-connection-ai-generated-image.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <Marquee>
                            <h1 className="mb-5 text-5xl font-bold">
                                Welcome To <span className="text-red-500">Tech World </span>
                            </h1>
                        </Marquee>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/login'><button className="btn btn-primary">Let`s Go</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;