import { useState } from 'react';
const Login = ({ login, error }) => {
  const [details, SetDetails] = useState({ email: '', password: '' });
  const submitHandler = (e) => {
    e.preventDefault();
    login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <h2>Login</h2>
        {/* ERROR! */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => SetDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            onChange={(e) => SetDetails({ ...details, password: e.target.value })}
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
};

export default Login;
