// create a school object with classA and classB(Array)
let school = {
  // classsA Array(list of students)
  classes: [
    // create information os Teacher and classA and Students.
    {
      Name: "Class A",
      Teacher: "Mr.khateri",
      TA:"Mr.Heydari",
      students: [
        {
          Name: "Alex",
          Age: 18,
          Address: "bu/85",
          Phone: "8658740567",
          Score: 18,
          termReview: [
            {
              TermNumber: "1",
              TermGrade: 17,
              teacherReview: [
                {
                  teacherName: "Mr khateri",
                  Review: "Good",
                  grade: 16.9,
                },
                {
                  teacherName: "MR HEYDARI",
                  Review: "Nice",
                  grade: 17,
                },
              ],
            },
            {
              TermNumber: "2",
              TermGrade: 19,
              teacherReview: [
                {
                  teacherName: "Mr khateri",
                  Review: "Excellent",
                  grade: 18.5,
                },
                {
                  teacherName: "MR HEYDARI",
                  Review: "amazing",
                  grade: 19,
                },
              ],
            },
          ],
        },
        {
          Name: "Amer",
          Age: 20,
          Address: "bu/67",
          Phone: "94879048",
          Score: 20,
          termReview: [
            {
              TermNumber: 1,
              TermGrade: 15,
              teacherReview: [
                {
                  teacherName: "Mr khateri",
                  Review: "soso",
                  grade: 14,
                },
                {
                  teacherName: "Mr heydari",
                  Review: "acceptable",
                  grade: 15,
                },
              ],
            },
            {
              TermNumber: 2,
              TermGrade: 19,
              teacherReview: [
                {
                  teacherName: "Mr Khateri",
                  Review: "Nice",
                  grade: 18.75,
                },
                {
                  teacherName: "Mr heydari",
                  Review: "Very good",
                  grade: 19,
                },
              ],
            },
          ],
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
