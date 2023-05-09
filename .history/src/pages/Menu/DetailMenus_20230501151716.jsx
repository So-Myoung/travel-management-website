import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function DetailMenus(props) {

    return (
      <div className="container">
        <div className="row">
          {props.shoes.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <img src={item.src} width="80%" />
                <h4>{item.title}</h4>
                <p>{item.content}</p>
                <p>{item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
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