import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function IncomeChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        type: "bar",
        label: "income",
        data: [4000, 5000, 7000, 2500, 4800, 0],
        backgroundColor: "rgba(138,43,226,0.8)", // purple bars
        borderRadius: 5,
        yAxisID: "y",
      },
      {
        type: "line",
        label: "momGrowth",
        data: [20, 40, 45, -30, 60, -100],
        borderColor: "#8B0000", // dark brown line
        backgroundColor: "#8B0000",
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#8B0000",
        tension: 0.3,
        yAxisID: "y1",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // allow custom height
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 12,
          padding: 15,
        },
      },
    },
    scales: {
      y: {
        type: "linear",
        position: "left",
        min: 0,
        max: 8000,
        ticks: {
          callback: (value) => `$${value / 1000}k`,
        },
        grid: {
          color: "#eee",
        },
      },
      y1: {
        type: "linear",
        position: "right",
        min: -100,
        max: 100,
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: (value) => `${value}%`,
        },
      },
    },
  };

  return (
    <div
      className="p-3 bg-white rounded-3 shadow-sm my-3"
      style={{
        border: "1px solid transparent",
        fontFamily: "Roboto, sans-serif",
        width: "100%", // responsive width
        maxWidth: "100%", // prevent overflow
      }}
    >
      <h6
        style={{
          fontWeight: 800, // medium/bold
          color: "gray",
          fontFamily: "Roboto, sans-serif",
          marginBottom: "15px",
        }}
      >
        Income Trend
      </h6>
      <p
        style={{
          color: "gray",
          fontSize: "14px",
          marginTop: "-5px",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        Your monthly income and growth for the last 6 <br /> months.
      </p>
      {/* Responsive chart container */}
      <div style={{ width: "100%", height: "380px" }}>
        <Chart type="bar" data={data} options={options} />
      </div>
    </div>
  );
}
