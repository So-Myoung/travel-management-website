import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import data from '../Menu/data';
import { useState } from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
export default function DetailMenus(props) {
  let [shoes] = useState(data);
    return (
      <> 
        <ul>
            {shoes && 
              shoes.map(
                (a,i) =>(
              <Product img ={shoes[i].img}  />
            ))}
        </ul>
        <div>
          
        </div>
    </>
    );
}

function Product(props){
  console.log(props.img);
  const navigate = useNavigate();
  return (
    <Col>
        <img src ={props.img} width="200px"/>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <p>{props.price}</p>
    </Col>
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