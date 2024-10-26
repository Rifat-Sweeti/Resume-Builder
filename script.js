function generatePreview() {
    // Capture input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const school = document.getElementById("school").value;
    const degree = document.getElementById("degree").value;
    const graduationYear = document.getElementById("graduationYear").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    // Populate resume preview content
    document.getElementById("resumeContent").innerHTML = `
        <div class="contact-info">
            <h3>${name}</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
        </div>
        <div class="section">
            <div class="section-title">Education</div>
            <p><strong>School:</strong> ${school}</p>
            <p><strong>Degree:</strong> ${degree} (${graduationYear})</p>
        </div>
        <div class="section experience">
            <div class="section-title">Experience</div>
            <p>${experience}</p>
        </div>
        <div class="section skills">
            <div class="section-title">Skills</div>
            <p>${skills}</p>
        </div>
    `;
}

function downloadResume() {
    const element = document.createElement('a');
    const resumeContent = document.getElementById('resumeContent').innerText;
    const file = new Blob([resumeContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}