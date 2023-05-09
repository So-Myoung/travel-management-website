import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import {useState} from 'react';
import data from '../Menu/data'
import Nav from 'react-bootstrap/Nav';

export default function Menu() {
  let [shoes] = useState(data);
  <div className="container">
        <div className="row">
          {shoes.map((item, i) => {
            return <Shoes shoes={shoes[i]} idx={i} />;
          })}
        </div>
      </div>
}

  

function Shoes({ shoes, idx }) {
  return (
    <div className="col-md-4">

      <h4>{shoes.title}</h4>
      <p>{shoes.content}</p>
    </div>
  );
}