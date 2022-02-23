import styles from './weather.module.css';
import { getCorrectedArchive, getLatestDay } from './api/update';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

 ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
 );

export default function Weather({ weather }) {

    const options = {
        responsive: true,
        maintainAspectRatio: false
      };
      
      const labels = weather.value.map((v) => new Date(v.date).toLocaleString());
      const data = {
        labels,
        datasets: [
          {
            label: weather.parameter.name + " (" + weather.parameter.unit + ")",
            data: weather.value.map((v) => v.value ),
            backgroundColor: '#0A9396',
            fill: true,
            borderColor: "#F8F8F8",
            pointBackgroundColor: "#FF0000",
            pointBorderColor: "#FFFFFF"
          }
        ],
        options
      };

    return (
        <div className={styles.wrapper}>
            <h1>{ weather.station.name }</h1>
            <p>Latest update: { new Date(weather.updated).toLocaleString() }</p>
            <div className={ styles.weather }>
                <Line data={ data } />
            </div>
        </div>
    )
}

export async function getServerSideProps(): any {
    const res = await getLatestDay();
    return {
        props: { weather: res }
    }
}
  
