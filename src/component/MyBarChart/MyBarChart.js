import React from 'react';
import './MyBarChart.css'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MyBarChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 90000,
            "sell": 241,
            "revenue": 666
        },
        {
            "month": "Apr",
            "investment": 60000,
            "sell": 423,
            "revenue": 250
        },
        {
            "month": "May",
            "investment": 70000,
            "sell": 726,
            "revenue": 460
        },
        {
            "month": "Jun",
            "investment": 50000,
            "sell": 529,
            "revenue": 775
        },
        {
            "month": "Jul",
            "investment": 60000,
            "sell": 601,
            "revenue": 509
        },
        {
            "month": "Aug",
            "investment": 107000,
            "sell": 670,
            "revenue": 790
        }
    ];
    return (
        <div className='myBar-chart'>
            <BarChart
          width={800}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey='sell'/>
          <Tooltip />
          <Legend />
          <Bar dataKey="sell" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
        </div>
    );
};

export default MyBarChart;