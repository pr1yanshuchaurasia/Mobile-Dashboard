import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function IncomeChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Income",
        data: [50, 75, 100, 60, 90, 120],
        borderColor: "#6f42c1",
        backgroundColor: "rgba(111,66,193,0.2)",
        tension: 0.3,
      },
      {
        label: "Money In/Out",
        data: [40, 90, 70, 110, 80, 100],
        borderColor: "#d63384",
        backgroundColor: "rgba(214,51,132,0.2)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="p-3 bg-white rounded-3 shadow-sm my-3">
      <h6 className="mb-3">Income Trend</h6>
      <Line data={data} />
    </div>
  );
}
