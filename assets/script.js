document.addEventListener('DOMContentLoaded', function () {
  const { jsPDF } = window.jspdf;

  
  function downloadPDF() {
    
    const doc = new jsPDF();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const linkedin = document.getElementById('linkd-in').value;
    const github = document.getElementById('github').value;
    const portfolio = document.getElementById('portfolio').value;
    const jobTitle = document.getElementById('job-title').value;
    const profileDescription = document.getElementById('profile-description').value;
    const hardSkills = document.getElementById('hard-skills').value;
    const softSkills = document.getElementById('soft-skills') ? document.getElementById('soft-skills').value : '';  
    const language = document.getElementById('language').value;
    const languageLevel = document.getElementById('language-level').value;
    const hobbies = document.getElementById('hobbies').value;
    const degree = document.getElementById('degree').value;
    const university = document.getElementById('university').value;
    const job = document.getElementById('job').value;
    const company = document.getElementById('company').value;
    const certificationName = document.getElementById('certification-name').value;
    const certificationLink = document.getElementById('certification-link').value;

    
    doc.setFontSize(14)
    doc.text("Curriculum Vitae", 100, 20);
    doc.setFontSize(10);

    
    doc.text(`Name: ${name}`, 100, 40,);
    doc.text(`Email: ${email}`, 20, 50);
    doc.text(`Phone: ${phone}`, 20, 60);
    doc.text(`Address: ${address}`, 20, 70);
    doc.text(`LinkedIn: ${linkedin}`, 20, 80);
    doc.text(`GitHub: ${github}`, 20, 90);
    doc.text(`Portfolio: ${portfolio}`, 20, 100);

    
    doc.text(`Job Title: ${jobTitle}`, 20, 120);
    doc.text(`Profile Description: ${profileDescription}`, 20, 130);

    
    doc.text(`Technical Skills: ${hardSkills}`, 20, 150);
    if (softSkills) {
      doc.text(`Soft Skills: ${softSkills}`, 20, 160);
    }

    
    if (language && languageLevel) {
      doc.text(`Language: ${language} - Level: ${languageLevel}`, 20, 180);
    }

    
    if (hobbies) {
      doc.text(`Hobbies: ${hobbies}`, 20, 190);
    }

    
    if (degree && university) {
      doc.text(`Degree: ${degree}`, 20, 210);
      doc.text(`University: ${university}`, 20, 220);
    }

    
    if (job && company) {
      doc.text(`Job Title: ${job} at ${company}`, 20, 240);
    }

    
    if (certificationName && certificationLink) {
      doc.text(`Certification: ${certificationName} - Link: ${certificationLink}`, 20, 250);
    }

    
    doc.save("cv.pdf");
  }

  
  const saveButton = document.querySelector('.btn-imp'); 
  if (saveButton) {
    saveButton.addEventListener('click', function (event) {
      event.preventDefault(); 
      downloadPDF(); 
    });
  }
});


function switchSteps(stepNum) {
  const steps = document.querySelectorAll(".step")
  steps.forEach(element => {
      element.classList.add('d-none');
  });
  document.getElementById('step' + stepNum).classList.remove('d-none');
}

function addHardSkills() {
  let thirdStep = document.getElementById('input-field');
  

  
    let newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('id', 'hard-skills');
    newField.setAttribute('siz', 50);
    newField.setAttribute('placeholder', 'Compétences Techniques');
    thirdStep.appendChild(newField);
  

}
function addSoftSkills() {
  let thirdStep = document.getElementById('input-field4');
  

  
    let newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('id', 'soft-skills');
    newField.setAttribute('siz', 50);
    newField.setAttribute('placeholder', 'Compétences Transversales');
    thirdStep.appendChild(newField);
  

}

function addLanguages() {
  let thirdStep = document.getElementById('input-field5');
  

  
    let newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('id', 'language');
    newField.setAttribute('siz', 50);
    newField.setAttribute('placeholder', 'Langue');
    thirdStep.appendChild(newField);

    let newLevel = document.createElement('input');
    newLevel.setAttribute('type', 'text');
    newLevel.setAttribute('id', 'language-level');
    newLevel.setAttribute('siz', 50);
    newLevel.setAttribute('placeholder', 'Niveau');
    thirdStep.appendChild(newLevel);
  

}
function addHobbies() {
  let thirdStep = document.getElementById('input-field6');
  
  
  
  let newField = document.createElement('input');
  newField.setAttribute('type', 'text');
  newField.setAttribute('id', 'hobbies');
  newField.setAttribute('siz', 50);
  newField.setAttribute('placeholder', 'Loisir / Interet');
  thirdStep.appendChild(newField);
  
  
}

function addDiplomes() {
  let thirdStep = document.getElementById('input-field7');
  

  
    let newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('id', 'degree');
    newField.setAttribute('siz', 50);
    newField.setAttribute('placeholder', 'Diplome');
    thirdStep.appendChild(newField);

    let newLevel = document.createElement('input');
    newLevel.setAttribute('type', 'text');
    newLevel.setAttribute('id', 'university');
    newLevel.setAttribute('siz', 50);
    newLevel.setAttribute('placeholder', 'Etablissement');
    thirdStep.appendChild(newLevel);
  

}

function addExperiences() {
  let thirdStep = document.getElementById('input-field8');
  

  
    let newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('id', 'job');
    newField.setAttribute('siz', 50);
    newField.setAttribute('placeholder', 'Poste occupé');
    thirdStep.appendChild(newField);

    let newLevel = document.createElement('input');
    newLevel.setAttribute('type', 'text');
    newLevel.setAttribute('id', 'company');
    newLevel.setAttribute('siz', 50);
    newLevel.setAttribute('placeholder', 'Entreprise');
    thirdStep.appendChild(newLevel);
  

}

function addCertificate() {
  let thirdStep = document.getElementById('input-field9');
  

  
    let newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('id', 'certification-name');
    newField.setAttribute('siz', 50);
    newField.setAttribute('placeholder', 'Nom de la certification');
    thirdStep.appendChild(newField);

    let newLevel = document.createElement('input');
    newLevel.setAttribute('type', 'url');
    newLevel.setAttribute('id', 'certification-url');
    newLevel.setAttribute('siz', 50);
    newLevel.setAttribute('placeholder', 'Lien de la certification');
    thirdStep.appendChild(newLevel);
  

}