import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news;
  return (
    <div className="card bg-base-100 w-full shadow-xl mb-6">
      <figure>
        <img
          src={image_url}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {
          details.length > 200
            ?
            <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="btn btn-link font-bold text-blue-600">Read More...</Link></p>
            :
            <p>{details}</p>
        }
      </div>
    </div>
  );
};

export default NewsCard;