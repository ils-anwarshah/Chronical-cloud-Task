var label_values = ["school_1","school_2","school_3","school_4"];
var active_data1 = [176,225,364,284];
var inactive_data1 =[50, 90, 50, 60];
var barColors = "#F9AC32";
var active_data2 = [122,275,232,212];
var inactive_data2 =[40, 22, 40, 10];


  
new Chart('bar-chart-roster', {
  type: "bar",
  data: {
    labels: label_values,
    datasets: [{
      label: "Active",
      backgroundColor: barColors,
      data: active_data1,
      barThickness: 18
    }, {
      label: "Inactive",
      backgroundColor: "#EEEEEE",
      data: inactive_data1,
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

  
new Chart('bar-chart-teacher', {
  type: "bar",
  data: {
    labels: label_values,
    datasets: [{
      label: "Active",
      backgroundColor: barColors,
      data: active_data2,
      barThickness: 18
    }, {
      label: "Inactive",
      backgroundColor: "#EEEEEE",
      data: inactive_data2,
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
// barChart('teacher',active_data2,inactive_data2);