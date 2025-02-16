"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Link from "next/link";
// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const timeRangeMap = {
  short_term: "Last 4 Weeks",
  medium_term: "Last 6 Months",
  long_term: "All Time",
};

const dataTypeMap = {
  tracks: "Top Tracks",
  artists: "Top Artists",
};

const DashboardPage = () => {
  const [data, setData] = useState([]);
  const [timeRange, setTimeRange] = useState("medium_term");
  const [dataType, setDataType] = useState("tracks");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/top-${dataType}?time_range=${timeRange}`);
        const responseData = await res.json();

        if (responseData.error) {
          setError(responseData.error);
          return;
        }

        setData(responseData);
      } catch (error) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [timeRange, dataType]);

  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: "Plays",
        data: data.map((item) => item.popularity),
        backgroundColor: "#1DB954",
        borderColor: "#1DB954",
        borderWidth: 1,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: "#9CA3AF",
          font: { size: 14 },
          callback: (value) => `${value} Plays`,
        },
        grid: { display: false },
        border: { display: false },
      },
      y: {
        ticks: {
          color: "#E5E7EB",
          font: {
            size: 14,
          },
          mirror: false, // Fix text glitching
          align: "start", // Adjust text positioning
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(17, 24, 39, 0.9)",
        titleColor: "#1DB954",
        bodyColor: "#E5E7EB",
        borderColor: "#374151",
        borderWidth: 1,
        padding: 12,
      },
    },
    animation: { duration: 800 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gradient-to-br from-gray-800 to-gray-950 min-h-screen text-white flex flex-col items-center"
    >
      <section>
        
        <div className="max-w-6xl w-full">
          
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
          >
         
         <h1 className="text-3xl zoom-effect md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              {dataTypeMap[dataType]}
            </h1>
            <div className="flex gap-2">
              {Object.entries(dataTypeMap).map(([key, label]) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDataType(key)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${dataType === key
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                    }`}
                >
                  {label}
                </motion.button>
              ))}
            </div>

            <div className="flex gap-2">
              {Object.entries(timeRangeMap).map(([key, label]) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setTimeRange(key)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${timeRange === key
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                    }`}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {error ? (
            <motion.div className="p-4 bg-red-900/30 rounded-lg text-red-400 text-center border border-red-800">
              {error}
            </motion.div>
          ) : isLoading ? (
            <div className="h-[400px] w-full bg-gray-800 rounded-xl animate-pulse" />
          ) : data.length > 0 ? (
            <motion.div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/30 shadow-2xl">
              <div className="relative w-full h-[400px]">
                <Bar data={chartData} options={options}  className=""/>
              </div>
            </motion.div>
          ) : (
            <motion.div className="p-8 bg-gray-800/50 rounded-xl text-center border border-gray-700">
              <p className="text-gray-400 zoom-effect text-xl">No data found.</p>
            </motion.div>
          )}
        </div>
      </section>



    </motion.div>
  );
};

export default DashboardPage;
