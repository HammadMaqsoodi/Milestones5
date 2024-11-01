var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable');
var shareableLinkElement = document.getElementById('shareable-Link');
var downloadPdfButton = document.getElementById('downolad');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var Username = document.getElementById('Username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(Username, JSON.stringify(resumeData));
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Username:</b> <span contenteditable=\"true\">".concat(Username, "</span></p>\n    <p><b>Name:</b> <span contenteditable=\"true\">").concat(name, "</span></p>\n     <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n      <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n      <h3>Education</h3>\n      <p contenteditable=\"true\">").concat(education, "</p>\n\n         <h3>Experience</h3>\n      <p contenteditable=\"true\">").concat(experience, "</p>\n\n         <h3>Skills</h3>\n      <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display is Missing');
    }
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?Username=").concat(encodeURIComponent(Username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var Username = urlParams.get('Username');
    if (Username) {
        var savedResumeData = localStorage.getItem(Username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('Username').value =
                Username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
