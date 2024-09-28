import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <h2 className="text-3xl font-poppins font-bold">This is home</h2>
    </div>
  );
};

export default Home;