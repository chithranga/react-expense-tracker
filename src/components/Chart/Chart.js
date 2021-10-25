import ChartBar from "./ChartBar"
import "./Chart.css";


const Chart = props =>{
    const dataPontArray = props.dataPoints.map(dataPoint => dataPoint.value)  
    const totelMaxValue = Math.max(...dataPontArray);

return(
    <div className="chart">
        {
            props.dataPoints.map((dataPoint) =>(
                <ChartBar
                key={dataPoint.lable}
                value={dataPoint.value}
                maxValue={totelMaxValue}
                lable = {dataPoint.lable}
                />
            )
            )
}
    </div>
)
}


export default Chart;