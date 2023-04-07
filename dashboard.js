const rosterID = document.getElementById('roster-id');
const teacherID = document.getElementById('teacher-id');

function toggleStepTeacher(){
    teacherID.classList.add("active");
    rosterID.classList.remove("active")
}
function toggleStepRoster(){
    rosterID.classList.add("active");
    teacherID.classList.remove("active")
}

toggleStepRoster()


let dropdownArrow = document.getElementById('dropdown-arrow');

dropdownArrow.addEventListener("click",(e)=>{
    console.log("GG")
})
