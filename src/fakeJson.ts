import { register } from "./serviceWorker";

const projects = [{
  title: "Cool Project",
  status: "Testing",
  progress: 90,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempiquip ex ea commodo consequat. Dutate velit esse cillum dolore eu fugiat nulla pariatur.",
  workers: ["Aayush Shrestha"],
  link: "aayushh.com",
  startedOn: "2019",
  completedOn: ""
},
{
  title: "New Project",
  status: "Waiting for Apporval",
  progress: 100,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempiquip ex ea commodo consequat. Dutate velit esse cillum dolore eu fugiat nulla pariatur.",
  workers: ["Nick Salter"],
  link: "",
  startedOn: "2019",
  completedOn: ""
},
{
  title: "Exciting Project",
  status: "Designing",
  progress: 30,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempiquip ex ea commodo consequat. Dutate velit esse cillum dolore eu fugiat nulla pariatur.",
  workers: ["Sonam Gurung"],
  link: "",
  startedOn: "2019",
  completedOn: ""
}
];


const employees = [
  {
    uniqueID: "sadfS12F1t",
    firstName: "Zach",
    lastName: "Poole",
    username: "Zachizpro",
    email: "zachpoolework@gmail.com",
    currentProjects: 3,
    finishedProjects: 10
  },
  {
    uniqueID: "!FFG@H#$hjj2",
    firstName: "Sonam",
    lastName: "Gurung",
    username: "SonamTheMom",
    email: "gurungamar25@gmail.com",
    currentProjects: 2,
    finishedProjects: 15
  },
  {
    uniqueID: "!FFG@H#$hjj2",
    firstName: "Sonam",
    lastName: "Gurung",
    username: "SonamTheMom",
    email: "gurungamar25@gmail.com",
    currentProjects: 2,
    finishedProjects: 15
  },
  {
    uniqueID: "!FFG@H#$hjj2",
    firstName: "Sonam",
    lastName: "Gurung",
    username: "SonamTheMom",
    email: "gurungamar25@gmail.com",
    currentProjects: 2,
    finishedProjects: 15
  },
  {
    uniqueID: "!FFG@H#$hjj2",
    firstName: "Sonam",
    lastName: "Gurung",
    username: "SonamTheMom",
    email: "gurungamar25@gmail.com",
    currentProjects: 2,
    finishedProjects: 15
  }
];



/*
classCode = ({
  id: String,
  code: String,
  school: String,
  className: String,
  studentsSignedUp: Number,
  createdOn: Date
});


user = ({
  id: String,
  firstName: String,
  lastName:  String,
  userName: String,
  email: { type: String, unique: true },
  password: String,
  gender: Boolean,
  joinedOn: Date,
  teacher: Boolean,
  grade: String
});

*/

const classes = [
  {
    id: 'lkjlkijlkj',
    instructorId: '555ttt',
    classCode: 'ff55ts',
    className: 'Mrs. Bridges 7th Period Class',
    requests: [''],
    registered: [''],
    completed: [''],
    createdOn: '07/07/19'
  }
];


const users = [
  {
    username: 'JessieB',
    accountId: '555ttt',
    firstName: 'Jessica',
    lastName: 'Bridges',
    accountType: 'teacher',
    classes: ['lkjlkijlkj','bubsubdub']
  },
  {
    username: 'BJones',
    accountId: 'ffsdff',
    firstName: 'Billy',
    lastName: 'Jones',
    accountType: 'student',
    classes: ['lkjlkijlkj']
  }
];



export {projects, employees, users, classes};
