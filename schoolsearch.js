// Add all the programs

let programs = {
    data: [
      {
        programName: "MS in Computer Science",
        school: "georgetownuniversity",
        school1: "Georgetown University",
        location1: "Washington, DC",
        location: "Washington,DC",
        major: "computerscience",
		    website: "https://cs.georgetown.edu/graduate/ms/",
		    semester: "fall&spring",
		    type: "masters",
      },

      {
        programName: "MS in Cybersecurity",
        school: "georgiainstituteoftechnology",
        school1: "Georgia Institute of Technology",
        location1: "Atlanta, GA",
        location: "Atlanta,GA",
        major: "computerscience",
		    website: "https://catalog.gatech.edu/programs/cybersecurity-ms/",
		    semester: "fall",
		    type: "masters",
      },

      {
        programName: "Master's in Public Relations & Corporate Communications",
        school: "georgetownuniversity",
        school1: "Georgetown University",
        location1: "Washington, DC",
        location: "Washington,DC",
        major: "communication",
		    website: "https://scs.georgetown.edu/programs/70/master-of-professional-studies-in-public-relations-and-corporate-communications/",
        semester: "fall",
		    type: "masters",
	  },

      {
        programName: "MA in Professional Communication",
        school: "universityofsanfrancisco",
        school1: "University of San Francisco",
        location1: "San Francisco, CA",
        location: "SanFrancisco,CA",
        major: "communication",
		    website:"https://www.usfca.edu/arts-sciences/programs/graduate/professional-communication",
		    semester: "fall",
		    type: "masters",
      },

      {
        programName: "MS in Computer Science",
        school: "universityofsanfrancisco",
        school1: "University of San Francisco",
        location1: "San Francisco, CA",
        location: "SanFrancisco,CA",
        major: "computerscience",
		    website:"https://www.usfca.edu/arts-sciences/programs/graduate/computer-science",
		    semester: "fall&spring",
		    type: "masters",
      },

      {
        programName: "MA in Psychology",
        school: "pepperdineuniversity",
		    school1: "Pepperdine University",
        location1: "Los Angeles, CA",
        location: "LosAngeles,CA",
        major: "psychology",
		    website: "https://gsep-programs.pepperdine.edu/programs/master-of-arts-in-psychology/?utm_medium=cpc&utm_source=google&utm_campaign=map_search&utm_term=master%20program%20in%20psychology&utm_content=text_ad&utm_vendor=passing_lane&&ag=117364332954&ap=&ci=793498978&dt=c&dm=&ei&fii=&k=master%20program%20in%20psychology&lims=1013962&lpms=9016102&mt=b&n=g&p=&t=&ti=kwd-92794512&rm=Advertising%20(paid)&rs=Search%20Paid%20(PPC)&rsd=PPC&cstag=20-Inquiry&cstat=New&s=GSEP_RT_Landing_Page_Form&gclid=EAIaIQobChMIorv65uKh-wIVr_bjBx2AbgeBEAAYASAAEgJQuvD_BwE",
		    semester: "fall",
		    type: "masters",
      },

	  {
        programName: "MS in Psychology",
        school1: "University of Indianapolis",
        school: "universityofindianapolis",
        location1: "Indianapolis, IN",
        location: "Indianapolis,IN",
        major: "psychology",
		    website: "https://uindy.edu/applied-behavioral-sciences/ms-psychology/",
		    semester: "spring",
		    type: "masters",
      },

      {
        programName: "MA in Public Relations",
        school1: "University of Indianapolis",
        school: "universityofindianapolis",
        location1: "Indianapolis, IN",
        location: "Indianapolis,IN",
        major: "communication",
		    website: "https://uindy.edu/cas/ma-public-relations/",
		    semester: "spring",
		    type: "masters",
      },

      {
        programName: "MA in Educational Transformation",
        school: "georgetownuniversity",
        school1: "Georgetown University",
        location1: "Washington, DC",
        location: "Washington,DC",
        major: "education",
		    website: "https://edtransform.georgetown.edu",
		    semester: "fall&spring",
		    type: "masters",
      },

      {
        programName: "PhD in Computer Science",
        school: "georgetownuniversity",
        school1: "Georgetown University",
        location1: "Washington, DC",
        location: "Washington,DC",
        major: "computerscience",
		    website: "https://cs.georgetown.edu/graduate/phd/",
		    semester: "fall&spring",
		    type: "phd",
      },

      {
        programName: "MA in Organization & Leadership",
        school: "universityofsanfrancisco",
        school1: "University of San Francisco",
        location1: "San Francisco, CA",
        location: "SanFrancisco,CA",
        major: "education",
		    website: "https://www.usfca.edu/education/programs/masters/organization-leadership",
		    semester: "spring",
		    type: "masters",
      },

      {
        programName: "MA in Special Education Leardership & Practice",
        school1: "University of Indianapolis",
        school: "universityofindianapolis",
        location1: "Indianapolis, IN",
        location: "Indianapolis,IN",
        major: "education",
		    website: "https://uindy.edu/education/ma-special-education-leadership-and-practice/",
		    semester: "fall",
		    type: "masters",
      },

	  {
        programName: "MS in Artificial Intelligence",
        school1: "Boston University",
        school: "bostonuniversity",
        location1: "Boston, MA",
        location: "Boston,MA",
        major: "computerscience",
		    website: "https://www.bu.edu/cs/masters/program/ai/",
		    semester: "fall",
		    type: "masters",
      },

      {
        programName: "PhD in Computer Science",
        school1: "Boston University",
        school: "bostonuniversity",
        location1: "Boston, MA",
        location: "Boston,MA",
        major: "computerscience",
		    website: "https://www.bu.edu/cs/phd-program/",
		    semester: "fall&spring",
		    type: "phd",
      },

	  {
        programName: "MA in Psychology",
        school1: "Boston University",
        school: "bostonuniversity",
        location1: "Boston, MA",
        location: "Boston,MA",
        major: "psychology",
		    website: "https://www.bu.edu/academics/grs/programs/psychology/ma/",
		    semester: "fall",
		    type: "masters",
      },

    ],
  };
  for (let i of programs.data) {
    //Create Card
    let card = document.createElement("div");
    //These elements will stay hidden initially
    card.classList.add("card", i.major,"hide");
    card.classList.add("school", i.school,"hide");
    card.classList.add("location", i.location,"hide");
	  card.classList.add("semester", i.semester,"hide");
	  card.classList.add("type", i.type,"hide");

    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //program name
    let programName = document.createElement("h5");
    programName.classList.add("program-name");
    programName.innerText = i.programName.toUpperCase();
    container.appendChild(programName);
    //school
    let school1 = document.createElement("h6");
    school1.classList.add("school1");
    school1.innerText =  i.school1;
    container.appendChild(school1);
    //location
    let location1 = document.createElement("h7");
    location1.classList.add("location1");
    location1.innerText =  i.location1;
    container.appendChild(location1);
	  //website
    let website = document.createElement('button');

    //style the website button
    website.classList.add("website");
    website.innerText =  "Website";
	  website.style.transform = 'scale(1.25)';
	  website.style.borderRadius = '3em';
	  website.style.padding = '1em 2.2em;';
	  website.style.marginBottom = '10px';
	  website.style.marginTop = '20px';
	  website.style.backgroundColor = 'rgba(255,255,255,1)';
	  website.style.color = 'black';
	  website.style.fontFamily = 'Poppins';
	  website.style.cursor = 'pointer';

    // Open the website link when the button is pressed
	  website.addEventListener('click', () => {
        window.open(i.website);
      })
    container.appendChild(website);

    card.appendChild(container);
    document.getElementById("programs").appendChild(card);

  }

  // Filter the programs based on the value of the button.
  function filterProgram(value) {
    
    let buttons = document.querySelectorAll(".button-value");
    
	  buttons.forEach((button) => {
		//Check if value equals innerText. If it does, mark the button as active. If it doesn't, remove active. 
		if (value.replaceAll(" ", "").toUpperCase() == button.innerText.replaceAll(" ", "").toUpperCase()) 
		{
		  button.classList.add("active");
		} 
		else
		{
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

    //School
    let elements2 = document.querySelectorAll(".school");
    //Loop through all cards
    elements2.forEach((element) => {
      //Display all cards if the button 'all' is pressed
      if (value == "all") {
        element.classList.remove("hide");
      } 
      else 
      {
        //Check if element contains school
        if (element.classList.contains(value)) {
          //Display element based on school
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

	// Semester
	let elements4 = document.querySelectorAll(".semester");
    //Loop through all cards
    elements4.forEach((element) => {
      //Display all cards if the button 'all' is pressed
      if (value == "all") {
        element.classList.remove("hide");
      } 
      else 
      {
        //Check if element contains semester
        if (element.classList.contains(value)) {
          //Display element based on semester
          element.classList.remove("hide");
        } else {
          //Hide other elements
          element.classList.add("hide");
        }
      }
    });

	// Type
	let elements5 = document.querySelectorAll(".type");
    //Loop through all cards
    elements5.forEach((element) => {
      //Display all cards if the button 'all' is pressed
      if (value == "all") {
        element.classList.remove("hide");
      } 
      else 
      {
        //Check if element contains type
        if (element.classList.contains(value)) {
          //Display element based on type
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
    let elements = document.querySelectorAll(".program-name");
    let cards = document.querySelectorAll(".card");
    //Loop through all elements
    elements.forEach((element, index) => {
      //Check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //Display matching card
        cards[index].classList.remove("hide");
      } else {
        //Hide others
        cards[index].classList.add("hide");
      }
    });
  });

  //Initially display all programs
  window.onload = () => {
    filterProgram("all");
  };
