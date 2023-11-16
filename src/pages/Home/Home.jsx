import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Courses from "./CourseCard";
import Footer from "../Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import Sat from "../sat-table/sat";
// import CourseDetails from "../courseDetails/CourseDetails";

const Home = () => {

    const courses = useLoaderData();
    console.log(courses)

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                {
                    courses?.map(course => <Courses
                        key={course.id}
                        courses={course}
                    >
                    </Courses>)
                }
            </div>
            <Sat></Sat>
            <Footer></Footer>
        </div>
    );
};

export default Home;