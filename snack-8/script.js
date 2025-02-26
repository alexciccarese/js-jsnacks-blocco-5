const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'


// first solution
const classEL = students[0].class
console.log(classEL);



// second solution
const findStudent = students.find((student) => {
  return student.name === 'Marco Lanci'
})
console.log(findStudent);

const classEl = findStudent.class
console.log(classEL);



