import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "White", value: 400 },
  { name: "Asian", value: 300 },
  { name: "Africains", value: 300 },
  { name: "Arabs", value: 300 },
  { name: "Latinos", value: 300 },
];

const genderData = [
  { name: "Male", value: 40 },
  { name: "Female", value: 60 },
];
const COLORS = ["#68b3f8", "pink", "#FFBB28", "#FF8042", "gray"];

export const Chart = () => {
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={genderData}
        cx={40}
        cy={40}
        innerRadius={25}
        outerRadius={40}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export const CustomPieChart = ({ customData }: any) => {
  return (
    <PieChart width={200} height={130}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={customData || data}
        cx={75}
        cy="10px"
        outerRadius={32}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};
