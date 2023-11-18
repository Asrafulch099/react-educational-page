// import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import Courses from "./Courses";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const CourseDetailsCard = ({detail}) => {
    console.log(detail)

   

    const { name, image, short_description, price, button } = detail || {};


    return (
        <div>
            
            <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="card lg:card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{short_description}</p>
                    <div className="card-actions justify-between ">
                            <a className="font-OpenSans text-lg font-medium">$$ {price}</a>
                            <Link to='/login'>
                                <button className="btn btn-primary">{button}</button>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CourseDetailsCard;

 // const [detail, setDetail] = useState({});

    // const { id } = useParams();
    // console.log(id);

    // const details = useLoaderData();
    // console.log(details);

    // useEffect(() => {
    //     const findDetail = details?.find((detail) => detail.id == id);
    //     console.log(findDetail);

    //     setDetail(findDetail);

    // }, [id, details]);

    // console.log(detail);