import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee speed={100} pauseOnHover>
        <Link to={"/"} className="mr-12">I can be a React component, multiple React components, or just some text.</Link>
        <Link to={"/"} className="mr-12">I can be a React component, multiple React components, or just some text.</Link>
        <Link to={"/"} className="mr-12">I can be a React component, multiple React components, or just some text.</Link>
        <Link to={"/"} className="mr-12">I can be a React component, multiple React components, or just some text.</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;