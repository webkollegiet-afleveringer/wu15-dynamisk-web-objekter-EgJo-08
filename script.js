let students = [
    { name: "sofie", age: 25, course: "Webudvikler" },
    { name: "Lukas", age: 22, course: "Mediegrafiker" },
    { name: "Emil", age: 28, course: "Teknisk Designer" }
]

let studentListDiv = document.querySelector(".tom")

students.forEach(student => {
    let studentDiv = document.createElement('div');
    studentDiv.classList.add('student');

    let studentHeadline = document.createElement('h2');
    studentHeadline.textContent = student.name;

    let studentInfo = document.createElement('p');
    studentInfo.textContent = `Alder: ${student.age}, Uddannelse: ${student.course}`;

    studentDiv.append(studentHeadline, studentInfo);
    studentListDiv.appendChild(studentDiv);
});

