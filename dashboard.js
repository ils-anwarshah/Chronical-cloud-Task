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
    let profileDropdown = document.getElementById('profile-dropdown');
    if(profileDropdown.style.display === "block"){
        profileDropdown.style.display = "none";
    }
    else{
        profileDropdown.style.display = "block"
    }
    })
let DrawerIcon = document.getElementById('drawer-icon');

function OpenNav(){
    let profileDropdown = document.getElementById('profile-dropdown');
    let SidebarContainer = document.getElementById('sidebar-container')
    SidebarContainer.style.left = "0px";
    profileDropdown.style.display = "none";
}
    
function closeNav(){
    let SidebarContainer = document.getElementById('sidebar-container');
    let profileDropdown = document.getElementById('profile-dropdown');
    SidebarContainer.style.left = "-300px"
    profileDropdown.style.display = "none";

}
    
function hideAll() {

     closeNav();
     let profileDropdown = document.getElementById('profile-dropdown');
     profileDropdown.style.display = "none";
    
}