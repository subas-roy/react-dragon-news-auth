import moment from 'moment';
import logo from '../../../assets/logo.png'

const Header = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <p className='text-lg'>Journalism Without Fear or Favour</p>
      <p className='font-medium text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;