import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import DetailMenus from '../pages/DetailMenus'

export default function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  // /kimchis/:id 경로로 들어오면 description 페이지로 자동 이동
  useEffect(() => {
    if (currentPath === `/detailmenu/` || currentPath === `/detailmenu`) {
      navigate(`/detailmenu/description`);
    }
  }, [id, currentPath, navigate]);

  return (
    <>
      <div style={containerStyle}>
        {<>}
        <div>
          {/* 메뉴 바 */}
          <DetailMenus />
          <div style={divStyle}>
            {/* 메뉴 바 밑에 보여줄 페이지 */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

const containerStyle = {
  margin: '1.5rem',
};

const divStyle = {
  width: '100%',
  textAlign: 'center',
};