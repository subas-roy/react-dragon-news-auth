import { useParams } from 'react-router-dom';
import Header from '../../pages/Shared/Header/Header';
import Navbar from '../../pages/Shared/Navbar/Navbar';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';

const News = () => {
  const {id} = useParams();
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className='grid grid-cols-4'>
        <div className='col-span-3'>
          <h2 className='text-3xl'>news detail</h2>
          <p>{id}</p>
        </div>
        <div>
          <RightSideNav/>
        </div>
      </div>
      
    </div>
  );
};

export default News;