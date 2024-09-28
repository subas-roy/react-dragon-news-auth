import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      {/* login with */}
      <div className="space-y-3 mb-6">
        <h2 className="text-3xl">Login with</h2>
        <button className="btn btn-outline w-full"><FaGoogle/>Login with Google</button>
        <button className="btn btn-outline w-full"><FaGithub/>Login with GitHub</button>
      </div>
      {/* find us on */}
      <div className="mb-6 p-4">
        <h2 className="text-3xl mb-3">Find Us on</h2>
        <a className="flex items-center text-lg text-center border p-4 rounded-t-lg" href=""><FaFacebook className="mr-2"/><span>Facebook</span></a>
        <a className="flex items-center text-lg text-center p-4 border-x-2" href=""><FaTwitter className="mr-2"/><span>Twitter</span></a>
        <a className="flex items-center text-lg text-center border p-4 rounded-b-lg" href=""><FaInstagram className="mr-2"/><span>Instagram</span></a>
      </div>
      {/* Q-Zone */}
      <div className="space-y-3 mb-6">
        <h2 className="text-3xl">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;