const students = ['Henk', 'Piet', 'Klaas', 'Fred'];

//For-loop:

// for (let i = 0; i < students.length; i++) {
//     students[i] = students[i] + 'je';
// }
//
// console.log(students);

const outcome = students.map((student) => {
    console.log(student);
    return student + 'je';
});

console.log(outcome);