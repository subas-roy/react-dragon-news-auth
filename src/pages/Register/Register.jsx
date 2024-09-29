import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.form.get('name');
    const email = e.form.get('email');
    const password = e.form.get('password');
    console.log(name,email,password)
  }

  return (
    <div>
      <Navbar/>
      <div>
        <h2 className="text-4xl font-semibold text-center my-10">Register here</h2>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input type="text" name="photoUrl" placeholder="Photo Url" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>Already have an account? Please <Link className="text-blue-600 font-bold mt-4" to={"/login"}>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;