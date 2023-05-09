import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function DetailMenus(props) {
    return (
      <> 
        <ul className='grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4'>
            {shoes && 
              shoes.map(
                (product) =>(
              <shoes key={shoes[i].id} shoes={product} />
            ))}
        </ul>
    </>
    );
}

/*
const menuStyle = {
  width: '100%',
  padding: '10px',
  boxSizing: 'border-box',
  display: 'flex',
  margin: '30px 0',
};

const listStyle = {
  border: '1px solid #c2c2c2',
  textAlign: 'center',
  flex: '1 1 auto',
};

const activeLinkStyle = {
  display: 'block',
  padding: '20px 0',
  textDecoration: 'none',
  color: 'black',
  fontSize: '16px',
};

const inactiveLinkStyle = {
  backgroundColor: '#eeeeee',
  display: 'block',
  padding: '20px 0',
  textDecoration: 'none',
  color: 'black',
  fontSize: '16px',
};
*/