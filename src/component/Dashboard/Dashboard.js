import React from 'react';
import './Dashboard.css';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyBarChart from '../MyBarChart/MyBarChart';

const Dashboard = () => {
    return (       
            <div className="chart">
                <div className="line-chart">
                  <h3>Monthly Investment</h3>
                  <MyLineChart></MyLineChart>
                </div>
                <div className="bar-chart">
                <h3>Monthly selling</h3>
                  <MyBarChart></MyBarChart>
                </div>
            </div>      
    );
};

export default Dashboard;