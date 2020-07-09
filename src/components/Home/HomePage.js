import React, { useState } from 'react';
import { signup, login } from '../../services/auth';
import { useHistory } from 'react-router-dom';
import { useHandleSetUser } from '../hooks/Provider';

export const HomePage = () => {
  const [usernameSignUp, setUsernameSignUp] = useState('');
  const [passwordSignUp, setPasswordSignUp] = useState('');
  const [usernameLogin, setUsernameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const setUser = useHandleSetUser();
  const history = useHistory();

  const handleChange = ({ target }) => {
    if(target.name === 'usernameSignUp') setUsernameSignUp(target.value);
    if(target.name === 'passwordSignUp') setPasswordSignUp(target.value);
    if(target.name === 'usernameLogin') setUsernameLogin(target.value);
    if(target.name === 'passwordLogin') setPasswordLogin(target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    signup({ username: usernameSignUp, password: passwordSignUp  })
      .then(user => setUser(user));
    // .then(() => history.push('/dashboard'));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login({ username: usernameLogin, password: passwordLogin })
      .then(user => setUser(user));
    // .then(() => history.push('/dashboard'));
  };

  return (
    <div>
      <div>
        <h2>Sign Up</h2>
        <form
          onSubmit={(e) => handleSignUp(e)}>
          <input
            type="text"
            value={usernameSignUp}
            name="usernameSignUp"
            onChange={handleChange}
            placeholder="Enter Username"
          />
          <input
            type="password"
            value={passwordSignUp}
            name="passwordSignUp"
            onChange={handleChange}
            placeholder="Enter Password"
          />
          <button>Submit</button>
        </form>
      </div>

      <div>
        <h2>Login</h2>
        <form
          onSubmit={(e) => handleLogin(e)}>
          <input
            type="text"
            value={usernameLogin}
            name="usernameLogin"
            onChange={handleChange}
            placeholder="Enter Username"
          />
          <input
            type="password"
            value={passwordLogin}
            name="passwordLogin"
            onChange={handleChange}
            placeholder="Enter Password"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};




// export default function HomePage() {
//   return (
//     <div>
//       <SignUp />
//       <Login />
//     </div>
//   );
// }

// const withAuthForm = (title, authService) => {
//   return function AuthFormHOC() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const setUser = useHandleSetUser();
//     const history = useHistory();

// const handleSubmit = (e) => {
//   e.preventDefault();
//   authService({ username, password })
//     .then(user => setUser(user))
//     .then(() => history.push('/dashboard'));
// };

// const handleChange = ({ target }) => {
//   if(target.name === 'username') setUsername(target.value);
//   if(target.name === 'password') setPassword(target.value);
// };

//     return (
//       <div>
//         <h2>{title}</h2>
//         <form
//           onSubmit={(e) => handleSubmit(e)}>
//           <input
//             type="text"
//             value={username}
//             name="username"
//             onChange={handleChange}
//             placeholder="Enter Username"
//           />
//           <input
//             type="password"
//             value={password}
//             name="password"
//             onChange={handleChange}
//             placeholder="Enter Password"
//           />
//           <button>{title}</button>
//         </form>
//       </div>
//     );
//   };
// };

// export const SignUp = withAuthForm('Sign Up', signup);
// export const Login = withAuthForm('Login', login);
