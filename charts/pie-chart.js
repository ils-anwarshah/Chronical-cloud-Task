// import PieChartData from '../json/piechartData.json' assert {type:'json'}
const PieChartData ={
  "pieData":[
      {
          "labels":["Multimedia", "Audio Notes", "Notes", "Free Space"],
          "Values":[23, 43, 65, 23],
          "barColor": [
              "#386CB5",
              "#7DB0F7",
              "#286BCB",
              "#CCCCCC"
            ]
      },
      {
          "labels":["Multimedia", "Audio Notes", "Notes", "Free Space"],
          "Values":[39, 25, 27, 13],
          "barColor": [
              "#386CB5",
              "#7DB0F7",
              "#286BCB",
              "#CCCCCC"
            ]
      },
      {
          "labels":["Multimedia", "Audio Notes", "Notes", "Free Space"],
          "Values":[49, 23, 17, 11],
          "barColor": [
              "#386CB5",
              "#7DB0F7",
              "#286BCB",
              "#CCCCCC"
            ]
      },
      {
          "labels":["Multimedia", "Audio Notes", "Notes", "Free Space"],
          "Values":[87, 23, 15, 65],
          "barColor": [
              "#386CB5",
              "#7DB0F7",
              "#286BCB",
              "#CCCCCC"
            ]
      }
  ]
}
function pieChart(){
  for(let i=0;i<PieChartData.pieData.length;i++){
    new Chart(`school_pie-${i+1}`, {
      type: "pie",
      data: {
        labels: PieChartData.pieData[i].labels,
        datasets: [{
          backgroundColor:PieChartData.pieData[i].barColor,
          data: PieChartData.pieData[i].Values
        }]
      },
      options: {
        plugins: {
          datalabels: {
              formatter: (value) => {
                let sum = 0;
                let dataArr = PieChartData.pieData[i].Values;
                dataArr.map(data => {
                  sum += data;
                });
                let percentage = (value * 100 / sum).toFixed(0) + "%";
                return percentage;
              },
              color: '#fff',
    
            },
          labels: {
            render: (ctx) => {
              return ctx.value + " mb ";
            },
            position: "outside",
            fontColor: PieChartData.pieData[i].barColor
          },
          legend: {
            display: true,
            position: 'left',
            align: 'end',
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              fontColor: '#333',
              boxWidth: 8,
              boxHeight: 8,
            }
          },
  
        },
        layout: {
              padding:5
          },
        responsive: true,
        aspectRatio: 2,
        rotation: 210,
        borderAlign: "inner",
      },
      plugins:[ChartDataLabels]
    });
  }

}

pieChart();


function ShowPiechart(index){
  let pie_chart_div = document.getElementById('pie-chart-div');
  let canvas_elements = pie_chart_div.getElementsByTagName('canvas');
  // console.log(canvas_elements.length);
  for (let i=0; i<canvas_elements.length;i++){
    canvas_elements[i].style.display="none";
  }
  canvas_elements[index-1].style.display="block";
}

function CheckPieIndex(){
  let dropdown_id = document.getElementById('school-dropdown');
  if (dropdown_id.value === 'school_1'){
    ShowPiechart(1);
  }
  else if (dropdown_id.value === 'school_2'){
    ShowPiechart(2);
  }
  else if (dropdown_id.value === 'school_3'){
    ShowPiechart(3);
  }
  else {
    ShowPiechart(4);
  }
}

ShowPiechart(3);