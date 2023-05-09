import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import data from '../Menu/data';
import { useState } from 'react';
import Button from '../Menu/Button';
import  {Container,Row,Col}  from 'react-bootstrap';
export default function DetailMenus(props) {
  const [shoes] = useState(data);
    return (
      <> 
        <ul>  
        {
              shoes.map(function( item, i ){
                return (
                  <Products shoes={ shoes[i] } i={i} key={i} />
                )
              })
            }   
        </ul>
        <Button text='장바구니에 추가'></Button>
    </>
    );
}

function Products(props){
  console.log(props.img);
  const navigate = useNavigate();
  return (
    <Col>
        <div class="m-auto items-center mx-3">
          <img src={"images/img"+ (props.i + 1) +".jpg"} width="100%" />
        </div>
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