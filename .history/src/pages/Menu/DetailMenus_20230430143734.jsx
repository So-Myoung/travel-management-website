import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function DetailMenus(props) {
  let {id} = useParams();
  
    return(
    <div className="container">
    <div className="row">
        <div className="col-md-6">
          <img src={process.env.PUBLIC_URL + `/shoe${id}.png`} width="100%" />
        </div>
        <div className="col-md-6">
        <h4 className="pt-5">상품명 : {props.shoes[id].title}</h4>
        <p>상품설명 : {props.shoes[id].content}</p>
        <p>가격 : {props.shoes[id].price}</p>
        <button className="btn btn-danger">주문하기</button> 
        </div>
    </div>
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