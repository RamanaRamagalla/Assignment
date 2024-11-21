import React from 'react';
import NavbarDash from '../../components/navbar-dash/NavbarDash'
import SidebarDash from '../../components/sidebar-dash/SidebarDash';
import DashboardContent from '../../components/dash-content/DashboardContent';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <NavbarDash />
            <div className="dashboard-body">
                <SidebarDash />
                <DashboardContent />
            </div>
        </div>
    );
};

export default Dashboard;
