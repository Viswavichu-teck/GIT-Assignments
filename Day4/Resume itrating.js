let resumeData = {
  "name": "Viswa Prasath A",
  "contact": {
    "email": "viswaniti@gmail.com",
    "phone": "6281535706",
    "address": "517001 Chittoor, India",
    "birthdate": "19/07/2001",
    "linkedin": "www.linkedin.com/in/viswa-prasath-a-b0755b1b5"
  },
  "education": [
    {
      "institution": "Saveetha Engineering College",
      "degree": "B.E Electronics and Communication Engineering",
      "location": "Chennai, India",
      "duration": "2018 – Present",
      "cgpa": "8.02"
    },
    {
      "institution": "Sri Chaitanya Jr College",
      "degree": "Intermediate",
      "location": "Chittoor, India",
      "year": 2016,
      "percentage": "91.4%"
    },
    {
      "institution": "Camford English High School",
      "degree": "SSC 10th",
      "location": "Chittoor, India",
      "percentage": "92%"
    }
  ],
  "languages": ["English", "Tamil", "Telugu", "Kannada", "Hindi"],
  "profile": "A passionate youngster looking for an opportunity to enhance and explore my knowledge and skills, eager to get into a work environment to put my communication and technical skills to good use for me and the firm's success, always looking forward to facing challenging situations to be a better version of myself.",
  "soft_skills": [
    "Effective Communication",
    "Leadership Skills",
    "Out of Box Thinking",
    "Stress Handling",
    "Time Management"
  ],
  "professional_experience": [
    {
      "company": "HCL Tech",
      "position": "Analyst",
      "location": "Chennai, India",
      "duration": "2022 – Present",
      "responsibilities": [
        "Handling Huddle calls to get updates on all pending incidents and requests.",
        "Validating all the RCA provided and presenting to the client during meetings.",
        "Verifying all change requests thoroughly and approving for implementation.",
        "Auditing changes and incidents every day to ensure everything is done by the book."
      ]
    }
  ],
  "additional_certificates": [
    "Business English Certificate",
    "Preliminary Cambridge English Entry Level Certificate in ESOL International",
    "AWS Cloud Practitioner",
    "Microsoft Certified: Azure Fundamentals"
  ],
  "programming_languages_tools": [
    "C",
    "C++",
    "Javascript",
    "ServiceNow"
  ],
  "achievements_accolades": [
    "Awarded the Best Performer Award from DU head within 4 months of joining."
  ],
  "references": [
    {
      "name": "Dr. K. Indumathi",
      "designation": "Associate Professor",
      "institution": "Saveetha Engineering College",
      "email": "indhumathik@saveetha.ac.in",
      "phone": "99404 53582"
    }
  ],
  "declaration": "I hereby solemnly declare that the above furnished details are absolute and true to the best of my knowledge and belief."
};
// Iterate through the keys
var keys = Object.keys(resumeData);
for (var i = 0; i < keys.length; i++) {
    var mainKey = keys[i];
    console.log(`${mainKey}:`);

    // Check if the value is an object
    if (typeof resumeData[mainKey] === 'object' && resumeData[mainKey] !== null) {
        // Iterate through the object
        var subKeys = Object.keys(resumeData[mainKey]);
        for (var j = 0; j < subKeys.length; j++) {
            var subKey = subKeys[j];
            console.log(`  ${subKey}: ${resumeData[mainKey][subKey]}`);
        }
    }
    // Check if the value is an array
    else if (Array.isArray(resumeData[mainKey])) {
        // Iterate through the array
        for (var k = 0; k < resumeData[mainKey].length; k++) {
            console.log("  -");

            // Check if the array element is an object
            if (typeof resumeData[mainKey][k] === 'object' && resumeData[mainKey][k] !== null) {
                // Iterate through the object in the array
                var subKeysInArray = Object.keys(resumeData[mainKey][k]);
                for (var l = 0; l < subKeysInArray.length; l++) {
                    var subKeyInArray = subKeysInArray[l];
                    console.log(`    ${subKeyInArray}: ${resumeData[mainKey][k][subKeyInArray]}`);
                }
            } else {
                console.log(`    ${resumeData[mainKey][k]}`);
            }
        }
    }
    // Otherwise, it's a simple value
    else {
        console.log(`  ${resumeData[mainKey]}`);
    }

    console.log("\n");
}
// Using for...in for objects
console.log("Using for...in for objects:");
for (let key in resumeData) {
  console.log(`${key}: ${JSON.stringify(resumeData[key])}`);
}

// Using for...of for arrays (e.g., education)
console.log("\nUsing for...of for arrays (e.g., education):");
for (let educationItem of resumeData.education) {
  console.log("Institution:", educationItem.institution);
  console.log("Degree:", educationItem.degree);
  // ... (print other details as needed)
}

// Using forEach for arrays (e.g., languages)
console.log("\nUsing forEach for arrays (e.g., languages):");
resumeData.languages.forEach((language, index) => {
  console.log(`Language ${index + 1}: ${language}`);
});

// Using forEach for arrays (e.g., soft_skills)
console.log("\nUsing forEach for arrays (e.g., soft_skills):");
resumeData.soft_skills.forEach((skill, index) => {
  console.log(`Skill ${index + 1}: ${skill}`);
});

// Using forEach for arrays (e.g., professional_experience)
console.log("\nUsing forEach for arrays (e.g., professional_experience):");
resumeData.professional_experience.forEach((experience, index) => {
  console.log(`Experience ${index + 1}:`);
  console.log("Company:", experience.company);
  console.log("Position:", experience.position);
  // ... (print other details and responsibilities as needed)
});

// Using forEach for arrays (e.g., additional_certificates)
console.log("\nUsing forEach for arrays (e.g., additional_certificates):");
resumeData.additional_certificates.forEach((certificate, index) => {
  console.log(`Certificate ${index + 1}: ${certificate}`);
});
