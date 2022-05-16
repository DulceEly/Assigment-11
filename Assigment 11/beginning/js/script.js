// CREATE AN ARRAY OF EMPLOYEES

////



// GET DOM ELEMENTS
let empTable    = document.querySelector('#employees');
let empCount    = document.querySelector('#empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
// buildGrid(arrEmployees);
// buildGrid();

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex;
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex);
        }
    }
});




// BUILD THE EMPLOYEES GRID


// export default async function buildGrid() {

async function buildGrid() {
    try {
        const response  = await fetch('../data/employees.json'); 

        const employees = await response.json();
           


    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    // empTable.lastElementChild.remove();


    // REBUILD THE TBODY FROM SCRATCH

    let tbody = document.createElement('tbody');



    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    
    // REBUILDING THE ROW STRUCTURE

   
    
    for (let employee of employees) {
        tbody.innerHTML += 
        `
        <tr>
            <td>${employee.empId}</td>
            <td>${employee.empFullName}</td>
            <td>${employee.ext}</td>
            <td><a href="mailto:${employee.email}">${employee.email}</a></td>
            <td>${employee.department}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `
        }
    

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody);

    // // UPDATE EMPLOYEE COUNT
    // empCount.value = `(${arrEmployees.length})`;

    } catch (error) {
        console.error(error);
    }
    
}
buildGrid() ;