import React from 'react';
import DetailMenus from './pages/DetailMenus';
import { Outlet } from 'react-router-dom';

export default function Description() {
    return (
        <div>
            <Outlet/>
        </div>
    );
}

