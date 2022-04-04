import React from 'react';
import useCharts from '../../hooks/useCharts/useCharts';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, AreaChart, Area, BarChart, Bar, PieChart, Pie } from 'recharts';
import './Dashboard.css';


const Dashboard = () => {
    const [chartsData, setChartsData] = useCharts([]);
    const data = chartsData;
    const data02 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    return (
        <div className='charts-container'>
            <div>
                <h3 className='chart-title'>Month Wise Sell :</h3>
                <LineChart width={500} height={400} data={data}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={50} />
                </LineChart>
            </div>
            <div>
                <h3 className='chart-title'>Investment vs Revenue :</h3>
                <AreaChart width={500} height={400} data={data}>
                    <Area type="monotone" dataKey="investment" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={50} />
                </AreaChart>
            </div>
            <div>
                <h3 className='chart-title'>Investment vs Revenue :</h3>
                <BarChart width={500} height={400} data={data} >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>
            <div>
                <h3 className='chart-title'>Investment vs Revenue :</h3>
                <PieChart width={400} height={400}>
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;