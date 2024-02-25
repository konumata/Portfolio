'use client'
import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export type Props = { // ①
    label?: string
    labels?: string[];
    radarData?: number[];
};

export const options = {
    scales: {
      r: {
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

export default function RadarChart({label = 'test', labels = ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'], radarData = [2, 2, 3, 4, 5, 5]}: Props): JSX.Element {

    var data = {
        labels: labels,
        datasets: [
          {
            label: label,
            data: radarData,
            backgroundColor: 'rgba(192,192,192, 0.2)',
            borderColor: 'rgba(192,192,192, 1)',
            borderWidth: 2,
          },
        ],
    };

    return <Radar className='radar' data={data} options={options} />
}