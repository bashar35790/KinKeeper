import { useContext, useState } from "react";
import { FriendsContext } from "../../../context/FriendsContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Sector,
} from "recharts";

const InteractionPieChart = () => {
  const { textFriend, callFriend, videoFriend } = useContext(FriendsContext);
  const [activeIndex, setActiveIndex] = useState(0);

  console.log("Context Data:", { textFriend, callFriend, videoFriend });
  // Data structure for 3 interaction types: Text, Call, Video
  const interactionData = [
    { name: "Text", value: textFriend.length, color: "#7E35E1", icon: "💬" },
    { name: "Call", value: callFriend.length, color: "#244D3F", icon: "📞" },
    { name: "Video", value: videoFriend.length, color: "#37A163", icon: "📹" },
  ];

  const totalInteractions = interactionData.reduce(
    (sum, entry) => sum + entry.value,
    0,
  );

  // Custom active shape with modern rounded corners & elegant connector line
  const renderActiveShape = (props) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
      midAngle,
    } = props;
    const sin = Math.sin((-midAngle * Math.PI) / 180);
    const cos = Math.cos((-midAngle * Math.PI) / 180);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 25) * cos;
    const my = cy + (outerRadius + 25) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 18;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        {/* Outer glow effect */}
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 6}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          opacity={0.2}
          style={{ filter: "blur(4px)" }}
        />
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          stroke="#ffffff"
          strokeWidth={2.5}
        />
        {/* Connector line & label */}
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
          strokeWidth="2"
        />
        <circle
          cx={ex}
          cy={ey}
          r={4}
          fill={fill}
          stroke="white"
          strokeWidth="2"
        />
        <text
          x={ex + (cos >= 0 ? 8 : -8)}
          y={ey}
          dy={-6}
          textAnchor={textAnchor}
          fill="#1f2b38"
          fontWeight="600"
          fontSize="13"
        >
          {payload.name}
        </text>
        <text
          x={ex + (cos >= 0 ? 8 : -8)}
          y={ey}
          dy={8}
          textAnchor={textAnchor}
          fill="#4b6a7c"
          fontSize="12"
          fontWeight="500"
        >
          {value} ({(percent * 100).toFixed(1)}%)
        </text>
      </g>
    );
  };

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className=" w-full">
      <div className=" p-5 md:p-6 w-full">
        {/* Pie Chart Container */}
        {totalInteractions === 0 && (
          <div className="flex flex-col items-center justify-center h-80 text-center">
            <p className="text-lg text-gray-500 mb-4">No interactions yet.</p>
            <p>Start connecting with your friends!</p>
          </div>
        )}

        <div className="w-full h-85 md:h-95 mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={interactionData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={110}
                dataKey="value"
                nameKey="name"
                paddingAngle={4}
                onMouseEnter={onPieEnter}
                stroke="none"
                cornerRadius={12}
              >
                {interactionData.map((entry, idx) => (
                  <Cell
                    key={`cell-${idx}`}
                    fill={entry.color}
                    stroke="#ffffff"
                    strokeWidth={3}
                    className="cursor-pointer transition-all duration-200 hover:opacity-90"
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => {
                  const percent = ((value / totalInteractions) * 100).toFixed(
                    1,
                  );
                  return [
                    `${value.toLocaleString()} interactions (${percent}%)`,
                    name,
                  ];
                }}
                contentStyle={{
                  borderRadius: "20px",
                  border: "none",
                  background: "rgba(20, 30, 45, 0.92)",
                  color: "white",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                }}
                itemStyle={{ color: "#eef2ff", fontWeight: 500 }}
                labelStyle={{ fontWeight: "bold", color: "#fff" }}
                cursor={{
                  stroke: "#fff",
                  strokeWidth: 2,
                  fill: "rgba(255,255,200,0.08)",
                }}
              />
              <Legend
                verticalAlign="bottom"
                align="center"
                iconType="circle"
                iconSize={10}
                wrapperStyle={{
                  paddingTop: "20px",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
                formatter={(value, entry, index) => {
                  const item = interactionData[index];
                  const percentVal = (
                    (item.value / totalInteractions) *
                    100
                  ).toFixed(1);
                  return (
                    <span className="text-base-content/80 inline-flex items-center gap-1.5 mr-4">
                      {value}{" "}
                      <span className="text-xs font-semibold text-heading">
                        {item.value ? percentVal : 0}%
                      </span>
                    </span>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default InteractionPieChart;
