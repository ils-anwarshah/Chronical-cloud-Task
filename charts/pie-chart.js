
function pieChart(id,xValues,yValues,barColors){
  new Chart(id, {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      plugins: {
        datalabels: {
            formatter: (value) => {
              let sum = 0;
              let dataArr = yValues;
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
          fontColor: barColors
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
var xValue = ["Multimedia", "Audio Notes", "Notes", "Free Space"];
var yValue1 = [23, 43, 65, 23];
var yValue2 = [39, 25, 27, 13];
var yValue3 = [49, 23, 17, 11];
var yValue4 = [87, 23, 15, 65];
var barColor = [
    "#386CB5",
    "#7DB0F7",
    "#286BCB",
    "#CCCCCC"
  ];

pieChart("school_pie-1",xValue,yValue1,barColor);
pieChart("school_pie-2",xValue,yValue2,barColor);
pieChart("school_pie-3",xValue,yValue3,barColor);
pieChart("school_pie-4",xValue,yValue4,barColor);

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