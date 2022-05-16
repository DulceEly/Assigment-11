


// import buildGrid from './script.js';
// import jsonEmployees from './data/employees.json' data {type:"json"};

// console.log (jsonEmployees);

// async function loadJson (){
//     const {default:jsonEmployees2}= await import('./data/employees.json', {
//         data:{
//             type:'json'
//         }
//     });
//     console.log(jsonEmployees2);
// }
// loadJson();


//////////////////////////////////


// // BUILD THE EMPLOYEES GRID


// // export default async function buildGrid() {

//     async function buildGrid() {
//         try {
//             const response  = await fetch('../data/employees.json'); 
    
//             const employees = await response.json();
               
    
    
//         // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
//         // empTable.lastElementChild.remove();
    
    
//         // REBUILD THE TBODY FROM SCRATCH
    
//         let tbody = document.createElement('tbody');
    
    
    
//         // LOOP THROUGH THE ARRAY OF EMPLOYEES
        
//         // REBUILDING THE ROW STRUCTURE
    
       
        
//         for (let employee of employees) {
//             tbody.innerHTML += 
//             `
//             <tr>
//                 <td>${employee.empId}</td>
//                 <td>${employee.empFullName}</td>
//                 <td>${employee.ext}</td>
//                 <td><a href="mailto:${employee.email}">${employee.email}</a></td>
//                 <td>${employee.department}</td>
//                 <td><button class="btn btn-sm btn-danger delete">X</button></td>
//             </tr>
//             `
//             }
        
    
//         // BIND THE TBODY TO THE EMPLOYEE TABLE
//         empTable.appendChild(tbody);
    
//         // // UPDATE EMPLOYEE COUNT
//         // empCount.value = `(${arrEmployees.length})`;
    
//         } catch (error) {
//             console.error(error);
//         }
        
//     }
//     buildGrid() ;








//////////////////////////////////////////


// async function loadJson(){
//     const response=await fetch('../data/employees.json');
//     const data = await response.json();
//     console.log(data);
// }
// loadJson();


//////////////////////////////////////

// const xhr = new XMLHttpRequest();
// xhr.responseType = 'json';
// xhr.open('GET', '../data/employees.json');
// xhr.addEventListener('readystatechange', () => {
// 	if (xhr.readyState === 4 && xhr.status === 200) {
// 		let employees = xhr.response;
// 		for (let employee of employees) {
// 			document.body.innerHTML += 
//             `
//             <tr>
//                 <td>${employee.empId}</td>
//                 <td>${employee.empFullName}</td>
//                 <td>${employee.ext}</td>
//                 <td><a href="mailto:${employee.email}">${employee.email}</a></td>
//                 <td>${employee.department}</td>
//                 <td><button class="btn btn-sm btn-danger delete">X</button></td>
//             </tr>
//             `
//             ;
// 		}
// 	}
// });
// xhr.onerror = (e) => {console.error(e.message)};
// xhr.send();



