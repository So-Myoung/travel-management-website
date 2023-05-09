import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import data from '../Menu/data';
import { useParams } from 'react-router-dom';
import Button from '../Menu/Button';
import  {Container,Row,Col}  from 'react-bootstrap';
export default function DetailMenus(props) {
  let { id } = useParams(); 
  let matchedItem = props.items.find(function(item){
      return item.id == id;
  });
  const imgUrl = "../images/shoes"+ props.item.id +".jpg"
    return (
      <> 
        <div>
        <img src={ imgUrl } width="100%" /> width="100%" />
        </div>
        <Button text='장바구니에 추가'></Button>
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