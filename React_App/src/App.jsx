

//import Rending_con from './Component/Props/Conditionals';



function App() {

  let hello = "Hello"

  let user = {

    name:"Abhishek kumar",
    Position:"SDE",
    DOB:"29/09/2000",
    age: 22

  }

   const users = [

  {

    
    name: "Abhishek Kumar",
    position: "Full Stack Developer",
    DOB: "2001-03-12",
    age: 24
  },
  {
    
    name: "Priya Sharma",
    position: "UI/UX Designer",
    DOB: "1999-08-25",
    age: 26
  },
  {
    name: "Rohit Mehta",
    position: "Backend Engineer",
    DOB: "1998-11-14",
    age: 27
  },
  {
    name: "Sneha Gupta",
    position: "Frontend Developer",
    DOB: "2000-02-19",
    age: 25
  },
  {
    name: "Arjun Patel",
    position: "Data Analyst",
    DOB: "1997-06-10",
    age: 28
  }
];


  return (
    <>

    <PassingData txt="This is a text prop" hello={hello} myuser={user} user={users}/>

    
    </>
  )
}

export default App
 import { PassingData } from './Props/Props';