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

    const hardSkills = [];
    document.querySelectorAll('.h-skills').forEach(input => {

      if (input.value.trim() !== "") {
        hardSkills.push(input.value.trim());
      }
    });
    console.log(hardSkills);
    

    const softSkills = [];
    document.querySelectorAll('.s-skills').forEach(input => {
      if (input.value.trim() !== "") {
        softSkills.push(input.value.trim());
      }
    });

    const languages = [];
    document.querySelectorAll('.lang').forEach((input, index) => {
      const language = input.value.trim();
      const level = document.querySelectorAll('.level')[index]?.value.trim();
      if (language && level) {
        languages.push({ language, level });
      }
      console.log(languages);
    });
      console.log(languages);
      
      const hobbies = [];
      document.querySelectorAll('.hobbies').forEach(input => {
        if (input.value.trim() !== "") {
          hobbies.push(input.value.trim());
        }
      });
      
      const education = [];
      document.querySelectorAll('.degree').forEach((input, index) => {
        const degree = input.value.trim();
        const university = document.querySelectorAll('.university')[index]?.value.trim();
        if (degree && university) {
          education.push({ degree, university });
          console.log(education);
      }
    });
      const experiences = [];
      document.querySelectorAll('.job').forEach((input, index) => {
        const job = input.value.trim();
        const company = document.querySelectorAll('.company')[index]?.value.trim();
        if (job && company) {
          experiences.push({ job, company });
          
      }
    });
    
    
    const certifications = [];
    document.querySelectorAll('.certificate').forEach((input, index) => {
      const certicate = input.value.trim();
      const link = document.querySelectorAll('.certif-link')[index]?.value.trim();
      if (certicate && link) {
        certifications.push({ certicate, link });
        
    }
  });


    

    doc.setFont("helvetica");
    doc.setFontSize(16);
    doc.text('Curriculum Vitae', 105, 20, null, null, 'center');

    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Personal Information', 20, 30);
    doc.setLineWidth(0.5);
    doc.line(20, 33, 190, 33);
    doc.setFont('helvetica', 'normal');
    doc.text(`Name: ${name}`, 20, 40);
    doc.text(`Email: ${email}`, 20, 50);
    doc.text(`Phone: ${phone}`, 20, 60);
    doc.text(`Address: ${address}`, 20, 70);
    doc.text(`LinkedIn: ${linkedin}`, 20, 80);
    doc.text(`GitHub: ${github}`, 20, 90);
    doc.text(`Portfolio: ${portfolio}`, 20, 100);

    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Profile & Job Title', 20, 110);
    doc.setLineWidth(0.5);
    doc.line(20, 113, 190, 113);
    doc.setFont('helvetica', 'normal');
    doc.text(`Job Title: ${jobTitle}`, 20, 120);
    doc.text(`Profile Description: ${profileDescription}`, 20, 130);






  
    if (experiences.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Work Experience', 105, 110);
      doc.setLineWidth(0.5);
      doc.line(105, 113, 190, 113);
      doc.setFont('helvetica', 'normal');
      experiences.forEach((exp, index) => {
        doc.text(`${exp.job} - ${exp.company}`, 105, 120 + index * 10);
      });
    }
    
    if (hardSkills.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Technical Skills', 20, 150);
      doc.setLineWidth(0.5);
      doc.line(20, 153, 190, 153);
      doc.setFont('helvetica', 'normal');
      doc.text(hardSkills.join(', '), 20, 160);
    }

    
    if (softSkills.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Soft Skills', 20, 170);
      doc.setLineWidth(0.5);
      doc.line(20, 173, 190, 173);
      doc.setFont('helvetica', 'normal');
      doc.text(softSkills.join(', '), 20, 180);
    }
    
    if (certifications.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Certifications', 105, 190);
      doc.setLineWidth(0.5);
      doc.line(105, 193, 190, 193);
      doc.setFont('helvetica', 'normal');
      certifications.forEach((cert, index) => {
        doc.text(`${cert.certicate} - ${cert.link}`, 105, 200 + index * 10);
      });
    }
    
    if (languages.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Languages', 20, 190);
      doc.setLineWidth(0.5);
      doc.line(20, 193, 190, 193);
      doc.setFont('helvetica', 'normal');
      languages.forEach((edu, index) => {
        doc.text(`${edu.language} - ${edu.level}`, 20, 200 + index * 10);
      });
    }

   
    if (hobbies.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Hobbies', 20, 230);
      doc.setLineWidth(0.5);
      doc.line(20, 233, 190, 233);
      doc.setFont('helvetica', 'normal');
      doc.text(hobbies.join(', '), 20, 240)
    }

    

    
    if (education.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Education', 105, 30);
      doc.setLineWidth(0.5);
      doc.line(105, 33, 190, 33);
      doc.setFont('helvetica', 'normal');
      education.forEach((edu, index) => {
        doc.text(`${edu.degree} - ${edu.university}`, 105, 40 + index * 10);
      });
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
  const totalSteps = steps.length;

  steps.forEach(element => {
    element.classList.add('d-none');
  });
  document.getElementById('step' + stepNum).classList.remove('d-none');

  updateProgressBar(stepNum, totalSteps);
  // validation(event);

}

function addHardSkills() {
  let thirdStep = document.getElementById('input-field');



  let newField = document.createElement('input');
  newField.setAttribute('type', 'text');
  newField.setAttribute('id', 'hard-skills');
  newField.setAttribute('class', 'h-skills');
  newField.setAttribute('siz', 50);
  newField.setAttribute('placeholder', 'Compétences Techniques');
  thirdStep.appendChild(newField);


}
function addSoftSkills() {
  let thirdStep = document.getElementById('input-field4');



  let newField = document.createElement('input');
  newField.setAttribute('type', 'text');
  newField.setAttribute('id', 'soft-skills');
  newField.setAttribute('class', 's-skills');
  newField.setAttribute('siz', 50);
  newField.setAttribute('placeholder', 'Compétences Transversales');
  thirdStep.appendChild(newField);


}

function addLanguages() {
  let thirdStep = document.getElementById('input-field5');

  // Here I am supposed to create element(div) and put the inputs inside with append child if the data doesn't get send 

  let newField = document.createElement('input');
  newField.setAttribute('type', 'text');
  newField.setAttribute('id', 'language');
  newField.setAttribute('class', 'lang');
  newField.setAttribute('siz', 50);
  newField.setAttribute('placeholder', 'Langue');
  thirdStep.appendChild(newField);



  let newLevel = document.createElement('input');
  newLevel.setAttribute('type', 'text');
  newLevel.setAttribute('id', 'language-level');
  newLevel.setAttribute('class', 'level');
  newLevel.setAttribute('siz', 50);
  newLevel.setAttribute('placeholder', 'Niveau');
  thirdStep.appendChild(newLevel);


}
function addHobbies() {
  let thirdStep = document.getElementById('input-field6');



  let newField = document.createElement('input');
  newField.setAttribute('type', 'text');
  newField.setAttribute('id', 'hobbies');
  newField.setAttribute('class', 'hobbies');
  newField.setAttribute('siz', 50);
  newField.setAttribute('placeholder', 'Loisir / Interet');
  thirdStep.appendChild(newField);


}

function addDiplomes() {
  let thirdStep = document.getElementById('input-field7');



  let newField = document.createElement('input');
  newField.setAttribute('type', 'text');
  newField.setAttribute('id', 'degree');
  newField.setAttribute('class', 'degree');
  newField.setAttribute('siz', 50);
  newField.setAttribute('placeholder', 'Diplome');
  thirdStep.appendChild(newField);

  let newLevel = document.createElement('input');
  newLevel.setAttribute('type', 'text');
  newLevel.setAttribute('id', 'university');
  newLevel.setAttribute('class', 'university');
  newLevel.setAttribute('siz', 50);
  newLevel.setAttribute('placeholder', 'Etablissement');
  thirdStep.appendChild(newLevel);


}

function addExperiences() {
  let thirdStep = document.getElementById('input-field8');



  let newField = document.createElement('input');
  newField.setAttribute('type', 'text');
  newField.setAttribute('id', 'job');
  newField.setAttribute('class', 'job');
  newField.setAttribute('siz', 50);
  newField.setAttribute('placeholder', 'Poste occupé');
  thirdStep.appendChild(newField);

  let newLevel = document.createElement('input');
  newLevel.setAttribute('type', 'text');
  newLevel.setAttribute('id', 'company');
  newLevel.setAttribute('class', 'company');
  newLevel.setAttribute('siz', 50);
  newLevel.setAttribute('placeholder', 'Entreprise');
  thirdStep.appendChild(newLevel);


}

function addCertificate() {
  let thirdStep = document.getElementById('input-field9');



  let newField = document.createElement('input');
  newField.setAttribute('type', 'text');
  newField.setAttribute('id', 'certification-name');
  newField.setAttribute('class', 'certificate');
  newField.setAttribute('siz', 50);
  newField.setAttribute('placeholder', 'Nom de la certification');
  thirdStep.appendChild(newField);

  let newLevel = document.createElement('input');
  newLevel.setAttribute('type', 'url');
  newLevel.setAttribute('id', 'certification-url');
  newLevel.setAttribute('class', 'certif-link');
  newLevel.setAttribute('siz', 50);
  newLevel.setAttribute('placeholder', 'Lien de la certification');
  thirdStep.appendChild(newLevel);


}

function updateProgressBar(currentStep, totalSteps) {

  const progressBar = document.getElementById('progress-bar');
  const progress = (currentStep - 1) / (totalSteps - 1) * 100;

  progressBar.style.width = progress + '%';

}





document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cv-form");
  const downloadBtn = document.getElementById("load-pdf");


  function validateForm() {
    let isValid = true;



    const name = document.getElementById('name');
    if (!name.value) {
      isValid = false;

    }



    const email = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.value || !emailPattern.test(email.value)) {
      isValid = false;

    }



    const phone = document.getElementById('phone');
    const phonePattern = /^\d{10}$/;
    if (!phone.value || !phonePattern.test(phone.value)) {
      isValid = false;
    }
    
    
    
    const address = document.getElementById('address');
    if (!address.value) {
      isValid = false;
      // suivantBtn.disabled = !isValid;

    }
    
    
    
    
    const jobTitle = document.getElementById('job-title');
    if (!jobTitle.value) {
      isValid = false;
    }
    
    
    
    const profileDescription = document.getElementById('profile-description');
    if (!profileDescription.value) {
      isValid = false;
    }
    
    
    
    
    const hardSkills = document.getElementById('hard-skills');
    if (!hardSkills.value) {
      isValid = false;
    }
    
    // suivantBtn.disabled = !isValid;
    
    
    
    const softSkills = document.getElementById('soft-skills');
    if (!softSkills.value) {
      isValid = false;
    }
    
    // suivantBtn.disabled = !isValid;
    
    
    
    const language = document.getElementById('language');
    const languageLevel = document.getElementById('language-level');
    if (!language.value || !languageLevel.value ) {
      isValid = false;
    }
    
    // suivantBtn.disabled = !isValid;



    const degree = document.getElementById('degree');
    const university = document.getElementById('university');
    if (!degree.value || !university.value) {
      isValid = false;
    }

    // suivantBtn.disabled = !isValid;



    const job = document.getElementById('job');
    const company = document.getElementById('company');
    if (!job.value || !company.value) {
      isValid = false;
    }



    const certificationName = document.getElementById('certification-name');
    const certificationLink = document.getElementById('certification-link');
    if (!certificationName.value || !certificationLink.value) {
      isValid = false;
    }

    downloadBtn.disabled = !isValid;

  }



  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('input', validateForm);
  });


  validateForm();
});

