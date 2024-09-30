import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log('location in the login page: ', location)

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password)
    signIn(email, password)
      .then(result => {
        console.log(result.user);

        // navigate after login
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        console.error(error);
      })
  }

  return (
    <div>
      <Navbar />
      <div>
        <h2 className="text-4xl font-semibold text-center my-10">Login your account</h2>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>Don't have an account? Please <Link className="text-blue-600 font-bold mt-4" to={"/register"}>Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;