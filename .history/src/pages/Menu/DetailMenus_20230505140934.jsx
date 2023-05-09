import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import data from '../Menu/data';
import { useState } from 'react';
import Button from '../Menu/Button';
import  {Container,Row,Col}  from 'react-bootstrap';

export default function DetailMenus(props) {
  let [items, itemsFunc] = useState(data);
    return (
      <> 
        <div className='col-md-6'>
          <img src={"../images/shoes"+ (props.i + 1) +".png"}></img>
          <Item item= {items[0]}/>
        </div>
        <button className="grid justify-items-center  bg-brand text-white py-2 px-4 rounded-sm hover:brightness-110'">장바구니</button>
        
    </>
    );
}

function Item(props){
  return (
    <div className="">

      <h3 className="">{ props.item.title }</h3> 
      <h3 className=''>{ props.item.content }</h3>
      <p className=''>{ props.item.price } won</p>
    </div>
    
  )
  
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