//JSON for bio, education, work, projects.

var bio = {
    "name" : "Neeraja Krishnamurthy",
    "role" : "HR - executive and Web developer",
    "contacts" : {
        "mobile" : "91-9492931810",
        "email" : "neerajakrishnamurthy@gmail.com",
        "github" : "neerajakrishnamurthy",
        "twitter" : "@swaneer",
        "location" : "New Jersey"
    },
    "welcomeMessage" : "Welcome to my profile!",
    "skills" : ["Competency Management", "Recruitment Management", "HTML", "CSS", "JavaScript", "SQL"],
    "biopic" : "images/Test5.jpg",
    display : function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedTwitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        if (bio.skills.length>0) {
            $("#header").append(HTMLskillsStart);
            var formattedskills = HTMLskills.replace("%data%", bio.skills[0]);
            $("#header").append(formattedskills);
            var formattedskills = HTMLskills.replace("%data%", bio.skills[1]);
            $("#header").append(formattedskills);
            var formattedskills = HTMLskills.replace("%data%", bio.skills[2]);
            $("#header").append(formattedskills);
            var formattedskills = HTMLskills.replace("%data%", bio.skills[3]);
            $("#header").append(formattedskills);
            var formattedskills = HTMLskills.replace("%data%", bio.skills[4]);
            $("#header").append(formattedskills);
            var formattedskills = HTMLskills.replace("%data%", bio.skills[5]);
            $("#header").append(formattedskills);
        }
    }

}


var education = {
    "schools" : [
     {
        "name" : "Anna University",
        "location" : "Chennai, India",
        "degree" : "Bachelor of Engineering",
        "majors" : ["Electronics", "Communication systems"],
        "dates" : 2005
     },
     {
        "name" : "Sri Sankara Metriculation Senior Sec School",
        "location" : "Delhi, India",
        "degree" : "Academic",
        "majors" : ["Physics", "Chemistry", "Math", "Biology"],
        "dates" : 2001
     }
    ],
    "onlineCourses" : [
     {
        "title" : "Front end Nanodegree",
        "school" : "Udacity",
        "date" : 2015,
        "url" : "https://www.udacity.com"
     },
     {
        "title" : "Fullstack Nanodegree",
        "school" : "Udacity",
        "date" : 2016,
        "url" : "https://www.udacity.com"
     }
    ],
    display : function() {
        if (education.schools.length>0) {
            $("#education").append(HTMLschoolStart);

            for (school in education.schools) {
                 var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
                 var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                 var formattedSchoolDegree = formattedName + formattedDegree;
                 $(".education-entry:last").append(formattedSchoolDegree);
                 var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                 $(".education-entry:last").append(formattedDates);
                 var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
                 $(".education-entry:last").append(formattedMajors);
                 var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                 $(".education-entry:last").append(formattedLocation);
            }
        }


        if (education.onlineCourses.length>0) {
            $(".education-entry").append(HTMLonlineClasses);

            for (onlinecourse in education.onlineCourses) {
                 var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlinecourse].title);
                 var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlinecourse].school);
                 var formattedTitleSchool = formattedTitle + formattedSchool;
                 $(".education-entry:last").append(formattedTitleSchool);
                 var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlinecourse].date);
                 $(".education-entry:last").append(formattedDate);
                 var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlinecourse].url);
                 $(".education-entry:last").append(formattedUrl);
            }

        }

    }
}

var work = {
    "jobs" : [
    {
        "employer" : "Tata Consultancy Services",
        "title" : "HR-Learning executive",
        "location" : "Chicago, USA",
        "dates" : "2006 - December 12, 2012",
        "description" : "Plan and execute trainings."
    },
    {
        "employer" : "Vaac Consultancy",
        "title" : "HR-Recruitment executive",
        "location" : "Iowa, USA",
        "dates" : "2013 - December 15, 2014",
        "description" : "Plan and execute recruitment drive"
    }
    ],
    display : function() {
        for (job in work.jobs) {
             $("#workExperience").append(HTMLworkStart);
             var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
             var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
             var formattedEmployerTitle = formattedworkEmployer + formattedTitle;
             $(".work-entry:last").append(formattedEmployerTitle);
             var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
             $(".work-entry:last").append(formattedDates);
             var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
             $(".work-entry:last").append(formattedLocation);
             var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
             $(".work-entry:last").append(formattedDescription);
        }
    }
}

var projects = {
    "projects" : [
    {
        "title" : "Training and Competency development",
        "dates" : "2006 - 2012",
        "description" : "Designed and handled the learning and professional development of an organisation's workforce.",
        "images" : [
        "images/programplanning.png",
        "images/images.jpg"
        ]
    },
    {
        "title" : "VAAC Inc Recruitment drive - 2013",
        "dates" : "2014",
        "description" : "Designed and handled the recruitment process of a small organisation.",
        "images" : [
        "images/13a0577ed82a459c494fb87ab1a0deb0.jpg",
        "images/mqdefault.jpg"
        ]
    }
    ],
    display : function() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);
            if (projects.projects[project].images.length>0) {
                for (image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }

            }

        }
    }
}



bio.display();
work.display();
projects.display();
education.display();


/*function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+ name[1];
}*/


//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);