import React from 'react';
import './DashboardContent.css';

const DashboardContent = () => {
    return (
        <div className="dashboard-content">
            <div className="cards">
                <div className="card">
                    <h4>Community Spotlight</h4>
                    <p>Behind the scenes with NolanAI community filmmaker Damarus Grant</p>
                    <button>Read the Interview →</button>
                </div>
                <div className="card">
                    <h4>Join us on Discord!</h4>
                    <p>Check out our Discord page to be a part of the NolanAI community</p>
                    <button>Join group →</button>
                </div>
            </div>
            <div className="project-start">
                <h3>Start Your First Project</h3>
                <p>Every great story begins with a first scene. Start your project and set the stage—your work in progress will appear here.</p>
                <button>+ Start New Project</button>
            </div>
        </div>
    );
};

export default DashboardContent;
