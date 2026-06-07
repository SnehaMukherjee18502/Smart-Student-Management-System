const { useState } = React;

function App() {

  const [studentData, setStudentData] = useState([]);

  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [marks, setMarks] = useState("");

  const [msg, setMsg] = useState("");
  const [showStudents, setShowStudents] = useState(true);



  function clearForm() {
    setName("");
    setRoll("");
    setMarks("");
  }



  function grade(m) {

    if (m >= 90) return "A+";
    else if (m >= 80) return "A";
    else if (m >= 70) return "B";
    else if (m >= 60) return "C";
    else if (m >= 40) return "D";
    else return "Fail";
  }




  function addStudent() {

    if (name === "" || roll === "" || marks === "") {
      setMsg("Please fill all fields");
      return;
    }

    for (let i = 0; i < studentData.length; i++) {

      if (studentData[i].roll === roll) {
        setMsg("Roll number already exists");
        return;
      }
    }

    const student = {
      name: name,
      roll: roll,
      marks: Number(marks)
    };

    setStudentData([...studentData, student]);

    setMsg("Student added successfully");

    clearForm();
  }




  function searchStudent() {

    for (let i = 0; i < studentData.length; i++) {

      if (studentData[i].roll === roll) {

        setMsg(
          "Found -> " +
          studentData[i].name +
          " | Marks: " +
          studentData[i].marks +
          " | Grade: " +
          grade(studentData[i].marks)
        );

        return;
      }
    }

    setMsg("Student not found");
  }




  function updateMarks() {

    let found = false;

    const updated = studentData.map((item) => {

      if (item.roll === roll) {
        found = true;

        return {
          ...item,
          marks: Number(marks)
        };
      }

      return item;
    });

    setStudentData(updated);

    if (found) {
      setMsg("Marks updated");
    } else {
      setMsg("Student not found");
    }

    clearForm();
  }




  function deleteStudent() {

    const newList = studentData.filter(
      (item) => item.roll !== roll
    );

    setStudentData(newList);

    setMsg("Student deleted");

    clearForm();
  }




  function findTopper() {

    if (studentData.length === 0) {
      setMsg("No students available");
      return;
    }

    let top = studentData[0];

    for (let i = 1; i < studentData.length; i++) {

      if (studentData[i].marks > top.marks) {
        top = studentData[i];
      }
    }

    setMsg(
      "Topper: " +
      top.name +
      " | Marks: " +
      top.marks
    );
  }




  function averageMarks() {

    if (studentData.length === 0) {
      setMsg("No students available");
      return;
    }

    let total = 0;

    for (let i = 0; i < studentData.length; i++) {
      total += studentData[i].marks;
    }

    let avg = total / studentData.length;

    setMsg("Average Marks: " + avg.toFixed(2));
  }




  function passFailCount() {

    let pass = 0;
    let fail = 0;

    for (let i = 0; i < studentData.length; i++) {

      if (studentData[i].marks >= 40) pass++;
      else fail++;
    }

    setMsg(
      "Pass: " + pass +
      " | Fail: " + fail
    );
  }
  
  function toggleStudents() {

  if (showStudents === true) {
    setShowStudents(false);
  }
  else {
    setShowStudents(true);
  }

  }

  function clearAllStudents() {

  let answer = window.confirm(
    "Do you want to delete all student records?"
  );

  if (answer === true) {

    setStudentData([]);

    setMsg("All student records deleted");
  }

}



  return (

    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h2>Smart Student Management System</h2>

      <input
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Characters Typed: {name.length}</p>

      <br /><br />

      <input
        placeholder="Roll Number"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />

      <br /><br />

      <button onClick={addStudent}>Add Student</button>
      <button onClick={searchStudent}>Search</button>
      <button onClick={updateMarks}>Update Marks</button>
      <button onClick={deleteStudent}>Delete</button>
      <button onClick={findTopper}>Find Topper</button>
      <button onClick={averageMarks}>Average</button>
      <button onClick={passFailCount}>Pass/Fail</button>
      <button onClick={toggleStudents}>{showStudents ? "Hide Students" : "Show Students"}</button>
      <button onClick={clearAllStudents}>Clear All Students</button>

      <h3>{msg}</h3>

      <hr />

      <h3>Total Number of Students: {studentData.length}</h3>

      <h3>Student List</h3>

      {
  showStudents && (

    <div>

      {
        studentData.length === 0 ?

          <p>No student records available.</p>

          :

          studentData.map((item, index) => (

            <div key={index}>

              {item.name} |
              Roll: {item.roll} |
              Marks: {item.marks} |
              Grade: {grade(item.marks)}

            </div>

          ))

      }

    </div>

  )
}

    </div>
  );
}



const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<App />);