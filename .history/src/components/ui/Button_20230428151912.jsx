import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className='absolute bottom-3 right-6 bg-brand text-white 
      py-2 px-4 rounded-sm hover:brightness-110 '
      onClick={onClick}
    >
      {text}
    </button>
  );
}
