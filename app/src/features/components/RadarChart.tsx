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
import { ChartOptions } from 'chart.js';
import { SkillCategory } from '../../../types/skills';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RadarChartProps {
  category: SkillCategory;
};

const options: ChartOptions<'radar'> = {
  scales: {
    r: {
      min: 0,
      max: 5,
      ticks: {
        stepSize: 1,
        color: '#e0e0e0',  
        font: {
          size: 14  
        },
        backdropColor: 'transparent',  
        showLabelBackdrop: false      
      },
      grid: {
        color: '#404040aa'  
      },
      angleLines: {
        color: '#404040aa'  
      },
      pointLabels: {
        color: '#e0e0e0',  
        font: {
          size: 16,  
          weight: 'bold' as const  
        }
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

export default function RadarChart({ category }: RadarChartProps): JSX.Element {

  var chartData = {
    labels: category.skills.map(skill => skill.label),
    datasets: [
      {
        data: category.skills.map(skill => skill.value),
        backgroundColor: '#4a9eff1a',  
        borderColor: '#4a9eff',  
        borderWidth: 2,  
        pointBackgroundColor: '#4a9eff',  
        pointBorderColor: '#ffffff',  
        pointBorderWidth: 2,  
        pointRadius: 4,  
      },
    ],
  };

  return <Radar className='radar' data={chartData} options={options} />
}