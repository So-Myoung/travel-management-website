import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className='grid justify-items-center hover:brightness-110'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
