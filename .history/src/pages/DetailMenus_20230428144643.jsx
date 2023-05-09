import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import description from './Description';
export default function DetailMenus() {
  const { id } = useParams();

  return (
    <ul style={menuStyle}>
      <li style={listStyle}>
        <NavLink
          to={`/kimchis/{decri}`}
          style={({ isActive }) =>
            isActive ? activeLinkStyle : inactiveLinkStyle
          }
        >
          상품설명
        </NavLink>
      </li>
      <li style={listStyle}>
        <NavLink
          to={`/kimchis/${id}/recipe`}
          style={({ isActive }) =>
            isActive ? activeLinkStyle : inactiveLinkStyle
          }
        >
          레시피
        </NavLink>
      </li>
      <li style={listStyle}>
        <NavLink
          to={`/kimchis/${id}/review`}
          style={({ isActive }) =>
            isActive ? activeLinkStyle : inactiveLinkStyle
          }
        >
          후기
        </NavLink>
      </li>
    </ul>
  );
}

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