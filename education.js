function displayEducationMessage() {
    const educationLevel = document.getElementById("education-level").value;
    const messageElement = document.getElementById("education-message");

    let message;
    switch (educationLevel) {
        case "highSchool":
            message = "You've completed high school. Great start!";
            break;
        case "associate":
            message = "You've earned an Associate's Degree. Nice achievement!";
            break;
        case "bachelor":
            message = "You have a Bachelor's Degree. Well done!";
            break;
        case "master":
            message = "You hold a Master's Degree. Impressive!";
            break;
        case "doctorate":
            message = "You've achieved a Doctorate. Outstanding accomplishment!";
            break;
        default:
            message = "";
    }

    messageElement.textContent = message;
}
