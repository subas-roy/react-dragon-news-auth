import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news)
  return (
    <div>
      <Header/>
      <BreakingNews/>
      <Navbar/>
      <div className="grid md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav/>
        </div>
        {/* news card container */}
        <div className="md:col-span-2">
          {
            news.map(aNews => <NewsCard key={aNews._id} news={aNews} />)
          }
        </div>
        <div>
          <RightSideNav/>
        </div>
      </div>
    </div>
  );
};

export default Home;