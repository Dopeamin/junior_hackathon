import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "November",
    recruted: 4000,
  },
  {
    name: "October",
    recruted: 3000,
  },
  {
    name: "September",
    recruted: 2000,
  },
  {
    name: "August",
    recruted: 2780,
  },
  {
    name: "July",
    recruted: 1890,
  },
  {
    name: "June",
    recruted: 2390,
  },
  {
    name: "May",
    recruted: 3490,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="recruted" stroke="#68b3f8" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
