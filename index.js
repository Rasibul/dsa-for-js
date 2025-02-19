const studentDatabase = ['John', 'Jane', 'Jack', 'Jill', 'James'];

const findStudent = (allStudent, studentName) => {
  for (let i = 0; i <allStudent.length; i++) {
    if(allStudent[i] === studentName) {
      console.log(`found ${studentName} `);
    }
  }
}


findStudent(studentDatabase, 'Jack'); 



// O(n) - Linear Time Complexity
const groceries = ['apple', 'banana', 'orange', 'grape', 'mango'];


const searchForItem = (item) =>{
    for (let i = 0; i < groceries.length; i++){
        if(groceries[i] === item){
            console.log(`found ${item}`);
        }
    }

    for (let j = 0; j < groceries.length; j++){
        if(groceries[j] !== item){
            console.log(`found ${item}`);
        }
    }
}

searchForItem('orange');