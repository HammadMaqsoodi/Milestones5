const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable') as HTMLDivElement;
    
    const shareableLinkElement = document.getElementById('shareable-Link') as
    HTMLAnchorElement;
    const downloadPdfButton = document.getElementById('downolad') as
    HTMLButtonElement;


form.addEventListener('submit',(event: Event) => {
    event.preventDefault();


    const Username=(document.getElementById('Username') as HTMLInputElement).value
    const name=(document.getElementById('name') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const phone=(document.getElementById('phone') as HTMLInputElement).value
    const education=(document.getElementById('education') as HTMLInputElement).value
    const experience=(document.getElementById('experience') as HTMLInputElement).value
    const skills=(document.getElementById('skills') as HTMLInputElement).value

    const resumeData = {
        name,
        email,
        phone,
        education,
        experience,
        skills
        };
        localStorage.setItem(Username, JSON.stringify(resumeData));

    const resumeHTML= `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Username:</b> <span contenteditable="true">${Username}</span></p>
    <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
     <p><b>Email:</b><span contenteditable="true">${email}</span></p>
      <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

      <h3>Education</h3>
      <p contenteditable="true">${education}</p>

         <h3>Experience</h3>
      <p contenteditable="true">${experience}</p>

         <h3>Skills</h3>
      <p contenteditable="true">${skills}</p>
    `;

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML=resumeHTML;
    }else{
        console.error('The Resume Display is Missing')
    }
    resumeDisplayElement.innerHTML = resumeHTML;
// Generate a shareable URL with the username only
const shareableURL =
`${window.location.origin}?Username=${encodeURIComponent(Username)}`;
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to save
});
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const Username = urlParams.get('Username');
    if (Username) {const savedResumeData = localStorage.getItem(Username);
        if (savedResumeData) {
        const resumeData = JSON.parse(savedResumeData);
        (document.getElementById('Username') as HTMLInputElement).value =
        Username;
        (document.getElementById('name') as HTMLInputElement).value =
        resumeData.name;
        (document.getElementById('email') as HTMLInputElement).value =
        resumeData.email;
        (document.getElementById('phone') as HTMLInputElement).value =
        resumeData.phone;
        (document.getElementById('education') as HTMLTextAreaElement).value =
        resumeData.education;
        (document.getElementById('experience') as HTMLTextAreaElement).value
        = resumeData.experience;
        (document.getElementById('skills') as HTMLTextAreaElement).value =
        resumeData.skills;
        }
        }
        });

