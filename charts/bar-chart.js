import BarData from '../json/barchartData.json' assert {type:'json'}


function BarChartData(){
  for (let i=0;i<BarData.barChartData.length;i++){

  
    new Chart(`bar-chart-${BarData.barChartData[i].id}`, {
      type: "bar",
      data: {
        labels: BarData.barChartData[i].label_values,
        datasets: [{
          label: "Active",
          backgroundColor: BarData.barChartData[i].barColors,
          data: BarData.barChartData[i].activeData,
          barThickness: 18
        }, {
          label: "Inactive",
          backgroundColor: "#EEEEEE",
          data: BarData.barChartData[i].inActiveData,
          barThickness: 18
        }]
      },
      options: {
        plugins: {
          datalabels: {
            display: false,
          },
          legend: {
            display: true,
            position: 'right',
            align: "start",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              fontColor: '#444B48',
              boxWidth: 6,
              boxHeight: 6,
              borderRadius: "50",
            }
          },
        },
    
        scales: {
          x: {
            stacked: true,
            grid: { display: false },
          },
    
          y: {
            stacked: true,
            border: {
              display: false
            },
            ticks: {
              stepSize: 100, 
              min: 0,
              max: 400
            },
          },
        },
        responsive: true,
        aspectRatio: 2
    }
    });
    
  }
}

BarChartData();
// barChart('teacher',active_data2,inactive_data2);