import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className='grid justify-items-center flex top-0 left-5 bg-brand text-white py-2 px-4 rounded-sm hover:brightness-110'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
