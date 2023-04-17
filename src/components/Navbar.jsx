import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAirbnb } from "react-icons/fa";
import { login, logout, onUserStateChange } from '../api/firebase';

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);
  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogout = () => {
    logout().then(setUser);
  };
  return (
    <header className='flex justify-between border-b border-gray-300 p-2 bg-blue-200'>
      <Link to='/' className='flex items-center text-4xl text-sky-900 font-sans font-extrabold'>
      <FaAirbnb />
        <h1>TravelTip</h1>
      </Link>
      <nav className='flex items-center gap-8 font-semibold text-white'>
        <Link to='/products'>menu1</Link>
        <Link to='/products'>menu2</Link>
        <Link to='/products'>menu3</Link>
        <Link to='/products'>menu4</Link>
        <Link to='/products'>menu5</Link>
        <Link to='/carts'>menu6</Link>
        {/* <Link to='/products/new' className='text-2xl'>
          <BsFillPencilFill />
        </Link> */}
        {!user && <button onClick={handleLogin}>
          <p className='font-bold text-stone-900'>Login</p>
          </button>}
        {user && <button onClick={handleLogout}>
        <p className='font-bold text-stone-900'>Logout</p>
          </button>}
      </nav>
    </header>
  );
}
