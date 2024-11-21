import React from 'react';
import './SidebarDash.css';

const SidebarDash = () => {
    return (
        <aside className="sidebar-dash">
            <div className="sidebar-item active">My Projects</div>
            <div className="sidebar-item">Shared with me</div>
        </aside>
    );
};

export default SidebarDash;
