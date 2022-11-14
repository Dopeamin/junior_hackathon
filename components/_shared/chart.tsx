import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
];
const COLORS = ["pink", "#68b3f8", "#FFBB28", "#FF8042"];

export const Chart = () => {
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
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
    </PieChart>
  );
};
