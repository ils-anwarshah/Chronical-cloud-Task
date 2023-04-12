import Data from '../json/tableData.json' assert {type:'json'}

function fetchTableData(){
    for(let i=0;i<Data.tableData.length;i++){
        let table_div = document.getElementById(`table-${i+1}`);
        table_div.innerHTML = `<td>
        <img src=${Data.tableData[i].schoolLogo} class="schools-logo" />
      </td>
      <td>${Data.tableData[i].schoolName}</td>
      <td>
        ${Data.tableData[i].schoolContact1}<br />
        ${Data.tableData[i].schoolContact2}
      </td>
      <td>${Data.tableData[i].schoolSizeRoster} / ${Data.tableData[i].schoolSizeTeacher}</td>
      <td><b>${Data.tableData[i].dataUsage}</b>/${Data.tableData[i].totalData} mb</td>
      <td>${Data.tableData[i].status}</td>
      <td>
        <i class="fa-solid fa-eye"></i
        ><a href=${Data.tableData[i].link} class="table-icon-text">View</a>
      </td>`
    }
}
fetchTableData();