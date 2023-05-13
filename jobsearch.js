// Add all the jobs

let jobs = {
    data: [
      {
        jobName: "Radio Producer",
        company: "vitamint",
        company1: "Vitamin T",
        location1: "Los Angeles, CA",
        location: "LosAngeles,CA",
        major: "communication",
      },

      {
        jobName: "Promotions Coordinator",
        company: "radioone",
        company1: "Radio One",
        location1: "Indianapolis, IN",
        location: "Indianapolis,IN",
        major: "communication",
      },

      {
        jobName: "Marketing Content Coordinator",
        company: "uline",
        company1: "Uline",
        location1: "Chicago, IL",
        location: "Chicago,IL",
        major: "communication",
      },

      {
        jobName: "Associate DevOps Engineer",
        company: "uline",
        company1: "Uline",
        location1: "Chicago, IL",
        location: "Chicago,IL",
        major: "computerscience",
      },

      {
        jobName: "Frontend Developer",
        company: "vitamint",
        company1: "Vitamin T",
        location1: "Los Angeles, CA",
        location: "LosAngeles,CA",
        major: "computerscience",
      },

      {
        jobName: "Software Engineer, Backend",
        company1: "Human Interest",
        company: "humaninterest",
        location1: "San Francisco, CA",
        location: "SanFrancisco,CA",
        major: "computerscience",
      },

      {
        jobName: "Data Engineer",
        company1: "Human Interest",
        company: "humaninterest",
        location1: "San Francisco, CA",
        location: "SanFrancisco,CA",
        major: "computerscience",
      },

      {
        jobName: "Software Engineer",
        company1: "Epic",
        company: "epic",
        location1: "Indianapolis, IN",
        location: "Indianapolis,IN",
        major: "computerscience",
      },

      {
        jobName: "Educator - Entry-Level K-12",
        company1: "Teach For America",
        company: "teachforamerica",
        location1: "Indianapolis, IN",
        location: "Indianapolis,IN",
        major: "education",
      },

      {
        jobName: "Creative Doer: Teacher",
        company1: "Teach For America",
        company: "teachforamerica",
        location1: "Chicago, IL",
        location: "Chicago,IL",
        major: "education",
      },

      {
        jobName: "Manager Of Education",
        company1: "Daniel Murphy Scholarship Fund",
        company: "danielmurphyscholarshipfund",
        location1: "Chicago, IL",
        location: "Chicago,IL",
        major: "education",
      },

    ],
  };
  for (let i of jobs.data) {
    //Create Card
    let card = document.createElement("div");
    //These elements will stay hidden initially
    card.classList.add("card", i.major,"hide");
    card.classList.add("company", i.company,"hide");
    card.classList.add("location", i.location,"hide");

    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //job name
    let jobName = document.createElement("h5");
    jobName.classList.add("job-name");
    jobName.innerText = i.jobName.toUpperCase();
    container.appendChild(jobName);
    //company
    let company1 = document.createElement("h6");
    company1.classList.add("company1");
    company1.innerText =  i.company1;
    container.appendChild(company1);
    //location
    let location1 = document.createElement("h7");
    location1.classList.add("location1");
    location1.innerText =  i.location1;
    container.appendChild(location1);
    

    card.appendChild(container);
    document.getElementById("jobs").appendChild(card);

  }

  // Filter the jobs based on the value of the button.
  function filterJob(value) {
    let buttons = document.querySelectorAll(".button-value");

    buttons.forEach((button) => {
      //Check if value equals innerText. If it does, mark the button as active. If it doesn't, remove active. 
      if (value.replaceAll(" ", "").toUpperCase() == button.innerText.replaceAll(" ", "").toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    //Major
    let elements = document.querySelectorAll(".card");
    //Loop through all cards
    elements.forEach((element) => {
      //Display all cards if the button 'all' is pressed
      if (value == "all") {
        element.classList.remove("hide");
      } 
      else 
      {
        //Check if element contains major
        if (element.classList.contains(value)) {
          //Display element based on major
          element.classList.remove("hide");
        } else {
          //Hide other elements
          element.classList.add("hide");
        }
      }
    });

    //Company
    let elements2 = document.querySelectorAll(".company");
    //Loop through all cards
    elements2.forEach((element) => {
      //Display all cards if the button 'all' is pressed
      if (value == "all") {
        element.classList.remove("hide");
      } 
      else 
      {
        //Check if element contains company 
        if (element.classList.contains(value)) {
          //Display element based on company
          element.classList.remove("hide");
        } else {
          //Hide other elements
          element.classList.add("hide");
        }
      }
    });

    //Location
    let elements3 = document.querySelectorAll(".location");
    //Loop through all cards
    elements3.forEach((element) => {
      //Display all cards if the button 'all' is pressed
      if (value == "all") {
        element.classList.remove("hide");
      } 
      else 
      {
        //Check if element contains location
        if (element.classList.contains(value)) {
          //Display element based on location
          element.classList.remove("hide");
        } else {
          //Hide other elements
          element.classList.add("hide");
        }
      }
    });


  }



  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //Initialize the elements
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".job-name");
    let cards = document.querySelectorAll(".card");
    //Loop through all elements
    elements.forEach((element, index) => {
      //Check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //Display matching cards
        cards[index].classList.remove("hide");
      } else {
        //Hide other cards
        cards[index].classList.add("hide");
      }
    });
  });

  //Initially display all the jobs
  window.onload = () => {
    filterJob("all");
  };