let students = [
    { name: "sofie", age: 25, course: "Webudvikler" },
    { name: "Lukas", age: 22, course: "Mediegrafiker" },
    { name: "Emil", age: 28, course: "Teknisk Designer" }
]

let studentListDiv = document.querySelector(".tom")

students.forEach(function (student) {
    let studentdiv = document.createElement("div")
    studentdiv.classList.add("student")
    studentdiv.textContent = student.name + ', alder' + student.age + ', Uddanelse' + student.course
    studentListDiv.appendChild(studentdiv)
})

