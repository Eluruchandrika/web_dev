function welcome(){
    let studentName = document.getElementById('name');
    let nameSpan = document.getElementById('nameSpan');
    nameSpan.innerText = studentName.value;
    studentName.value = ""
}