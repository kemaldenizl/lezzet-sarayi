import { Line } from "react-chartjs-2"
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, plugins} from "chart.js"
import { lineChartData } from "./data/FAKE_DATA.JS"
import "../../../styles/admin/graph.css"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

function LineGraph() {

    const labelDay = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
    
    const options = {
        responsive : true,
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                display : true,
                text: "Çalışanların 1 haftada günlük ne kadar çalışıyor"
            }
        }
    }

    const data = {
        labels: labelDay,
        datasets: [
        {
            label: "Ahmet",
            data: [8, 6, 4, 8, 10, 0, 9],
            borderColor: "rgb(75, 192, 192)"
        },
        {
            label: "Mehmet",
            data: [5, 5, 10, 6, 8, 4, 6],
            borderColor: "red"
        }
    ]
    }

  return (
    <Line className="lineGraph" options={options} data={data} />
  )
}

export default LineGraph