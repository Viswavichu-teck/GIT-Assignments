class Person {
    constructor(name, age, gender, contact, position, Degree, studies, hobbies, address, email) {
      this.name = name;
      this.age = age;
      if(gender.length>0)
      {
      this.gender =gender;
      }
    else
    {
    this.gender ="Not wish to disclose";
    }
      this.contact = contact;
      this.position = position;
      this.studies = studies;
      this.hobbies = hobbies; 
      this.address = address;
      this.email = email;
    }
  
    displayDetails() {
      console.log(`
          Name: ${this.name}
          Age: ${this.age}
          Gender: ${this.gender}
          Contact: ${this.contact}
          Position: ${this.position}
          Studies: ${this.studies}
          Hobbies: ${this.hobbies}
          Address: ${this.address}
          Email: ${this.email}`);
    }
  }
  
  const person = new Person('Vichu', 22,"Male", 6281535706, 'Analyst', 'Bachelor of Engineering', 'electronics and communication', ['Chess', 'Coding', 'gaming'], '123 Main Street, City', 'vichu@example.com');
  person.displayDetails();
  