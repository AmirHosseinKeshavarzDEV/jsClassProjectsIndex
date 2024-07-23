// create a school object with classA and classB(Array)
let school = {
  // classsA Array(list of students)
  classes: [
    // create information os Teacher and classA and Students.
    {
      Name: "Class A",
      Teacher: "Mr.khateri",
      students: [
        {
          Name: "Alex",
          Age: 18,
          Address: "bu/85",
          Phone: "8658740567",
          Score: 18,
        },
        {
          Name: "Amer",
          Age: 20,
          Address: "bu/67",
          Phone: "94879048",
          Score: 20,
        },
      ],
    },
    // create information os Teacher and classA and Students.
    {
      Name: "Class B",
      Teacher: "Mr.Heydari",
      students: [
        {
          Name: "Mahsa",
          Age: 17,
          Address: "bu/09",
          Phone: "767856564",
          Score: 19,
        },
        {
          Name: "Misha",
          Age: 18,
          Address: "bu/03",
          Phone: "767856564",
          Score: 17,
        },
      ],
    },
  ],
};

// show classes students name and informations
console.log(school.classes);
