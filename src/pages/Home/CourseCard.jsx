import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CourseCard = ({ courses }) => {
    console.log(courses)

    // eslint-disable-next-line react/prop-types
    const { name, id, image, short_description, price, button } = courses || {}

    return (
        <div className="">
            <div className="p-10">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="wp11970103-4k-cyber-wallpapers" border="0" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {name}
                            <div className="badge badge-accent">Trending</div>
                        </h2>

                        {
                            short_description?.length > 10
                                ? <p>{short_description.slice(0, 10)}
                                    <Link to={`/courses/${id}`}
                                        className="text-blue-600 font-bold"
                                    >See More....</Link>
                                </p>
                                : <p>{short_description}</p>
                        }
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

export default CourseCard;