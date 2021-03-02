import React from "react";
import Chart from 'chart.js'
import "chartjs-plugin-zoom";

class ForexChart extends React.Component {
   
    componentDidUpdate() {
        this.populateChart();
    }

    createLine(data) {
        let line = [];
        data.map((d) => (line.push({x: d.time, y: d.value})));
        
        return line;
    }

    createDataset() {
        const data = this.props.data;
        let dataset = [];

        for (let i = 0; i < data.length; i++) {
            
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);
            
            dataset.push({
                label: data[i].interazione,
                data: this.createLine(data[i].valuesAndTime),
                showLine: false,
                fill: false,
                borderColor: `rgb(${r}, ${g}, ${b})`
            })
        }
        console.log(dataset)
        return dataset;
    }


    populateChart() {
        
        let ctx = document.getElementById('chart')
        // eslint-disable-next-line no-unused-vars
        let chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [
                ''
                ],
                datasets: this.createDataset()
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                            min: 1.38,
                            max: 1.56,
                        }
                    }],
                    xAxes: [{
                        type: 'time',
                        ticks: {
                            unit: 'day',
                            min:'2016',
                        },
                    }],
                },
                legend: {
                    labels: {
                        usePointStyle: true
                    },
                    display: true
                },
                plugins: {
                    zoom: {
                        pan: {
                            enabled: true,
                            mode: 'xy'
                        },
                        zoom: {
                            enabled: true,
                            mode: 'xy',
                        }
                    }
				}
            }
        })
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <canvas /* style={{backgroundColor: '#273338'}} */ className="my-4" id="chart" width="100%" height="40%"></canvas>
                </div>
            </>
        );
    }
}
export default ForexChart;
