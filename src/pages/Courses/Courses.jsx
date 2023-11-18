import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import CourseDetailsCard from "./CourseDetailsCard";


const Courses = () => {

   
    const [detail, setDetail] = useState({});

    const { id } = useParams();
    console.log(id);

    const details = useLoaderData();
    console.log(details);

    useEffect(() => {
        console.log("id:", id);
    
        const findDetail = details?.find((detail) => detail.id === parseInt(id, 9));
        console.log("findDetail:", findDetail);
    
        setDetail(findDetail);
    
    }, [id, details]);    

    console.log("detail:", detail);

         

    return (
   <div>
        <CourseDetailsCard detail={detail}></CourseDetailsCard>
   </div>
    );
};

export default Courses;