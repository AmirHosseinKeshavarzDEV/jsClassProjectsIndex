// create a school object with classA and classB
let school = {
  classA: {
    student1: {
      Name: "John",
      Age: 10,
      phoneNumber: "091234556677",
      address: "BU/02",
      score: "10",
    },
    student2: {
      Name: "Alex",
      Age: 11,
      phoneNumber: "091234556677",
      address: "BU/05",
      score: "14",
    },
    student3: {
      Name: "Jim",
      Age: 10,
      phoneNumber: "091234556677",
      address: "BU/06",
      score: "20",
    },
  },
  classB: {
    student1: {
      Name: "Martinez",
      Age: 15,
      phoneNumber: "091234556677",
      address: "BU/09",
      score: "13",
    },
    student2: {
      Name: "Jane",
      Age: 16,
      phoneNumber: "091234556677",
      address: "BU/10",
      score: "17",
    },
    student3: {
      Name: "Oscar",
      Age: 15,
      phoneNumber: "091234556677",
      address: "BU/19",
      score: "20",
    },
  },
};
// show class name
console.log("CLASS A:");
console.log(" ");
// show information of student1 ClassA (Name+Age+phoneNumber+address+score)
console.log("Name:" + school.classA.student1.Name);
console.log("Age:" + school.classA.student1.Age);
console.log("phoneNumber:" + school.classA.student1.phoneNumber);
console.log("Addres:" + school.classA.student1.address);
console.log("Score:" + school.classA.student1.score);
console.log(" ");

// show information of student2 ClassA (Name+Age+phoneNumber+address+score)
console.log("Name:" + school.classA.student2.Name);
console.log("Age:" + school.classA.student2.Age);
console.log("phoneNumber:" + school.classA.student2.phoneNumber);
console.log("Addres:" + school.classA.student2.address);
console.log("Score:" + school.classA.student2.score);
console.log(" ");

// show information of student3 ClassA (Name+Age+phoneNumber+address+score)
console.log("Name:" + school.classA.student3.Name);
console.log("Age:" + school.classA.student3.Age);
console.log("phoneNumber:" + school.classA.student3.phoneNumber);
console.log("Addres:" + school.classA.student3.address);
console.log("Score:" + school.classA.student3.score);
console.log(" ");

//   show class name
console.log(" ");
console.log("CLASS B:");
// show information of student1 ClassB (Name+Age+phoneNumber+address+score)
console.log("Name:" + school.classB.student1.Name);
console.log("Age:" + school.classB.student1.Age);
console.log("phoneNumber:" + school.classB.student1.phoneNumber);
console.log("Addres:" + school.classB.student1.address);
console.log("Score:" + school.classB.student1.score);
console.log(" ");

// show information of student2 ClassB (Name+Age+phoneNumber+address+score)
console.log("Name:" + school.classB.student2.Name);
console.log("Age:" + school.classB.student2.Age);
console.log("phoneNumber:" + school.classB.student2.phoneNumber);
console.log("Addres:" + school.classB.student2.address);
console.log("Score:" + school.classB.student2.score);
console.log(" ");

// show information of student3 ClassB (Name+Age+phoneNumber+address+score)
console.log("Name:" + school.classB.student3.Name);
console.log("Age:" + school.classB.student3.Age);
console.log("phoneNumber:" + school.classB.student3.phoneNumber);
console.log("Addres:" + school.classB.student3.address);
console.log("Score:" + school.classB.student3.score);
console.log(" ");
