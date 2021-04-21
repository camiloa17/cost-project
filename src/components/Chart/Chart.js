import './Chart.css';
import ChartBar from './ChartBar/ChartBar';

export default function Chart(props) {
    const dataPointsValues = props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues);
    console.log(totalMaximum)
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
}
