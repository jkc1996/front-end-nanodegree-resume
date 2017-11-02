    var bio = {
        "name": "Jaykumar Chaudhary",
        "role": "Web Developer",
        "contacts": {
            "mobile": "+91-9619242211",
            "email": "jaykumarchaudhary.nmims@gmail.com",
            "github": "jkc1996",
            "location": "Palanpur"
        },
        "welcomeMessage": "My career objective is to utilize my theoretical store of knowledge and apply the same to all practical situations by constantly challenging myself with a view to transcend new horizons.",
        "skills": ["Love to code", "Delivering things", "Hardworking"],
        "biopic": "images/me.jpg"
    };

    var work = {
        "jobs": [{
            "employer": "Alcatel Lucent",
            "title": "Intern",
            "url": "https://networks.nokia.com/",
            "dates": "18 May 2016 – 18 June 2016",
            "location": "Andheri East,Mumbai",
            "description": "ATCA RNC lab integration for CDMA/EVDO Wireless REVB 3G Wireless Network. Learn how the Alcatel Lucent router works and to be integrated in 3G Network."
        }, {
            "employer": "BSNL",
            "title": "Trainee",
            "url": "www.maharashtra.bsnl.co.in/ssa/RTTCPune/",
            "dates": "14 December 2015 – 22 January 2016",
            "location": "Chinchwad,Pune",
            "description": "Learn about Transmission, Broadband & DSL Technologies, GSM & CDMA Technologies, WIFI & WIMAX."
        }]
    };

    var education = {
        "schools": [{
                "name": "Vividhlakshi Vidyamandir,Palanpur",
                "url": "https://www.vidyamandir.org",
                "degree": "S.S.C",
                "dates": "March 2011",
                "location": "Palanpur",
                "majors": ["N/A"],
                "persentage": "91.8%"
            }, {
                "name": "Vividhlakshi Vidyamandir,Palanpur",
                "url": "http://www.vidyamandir.org/",
                "degree": "H.S.C",
                "dates": "March 2013",
                "location": "Palanpur",
                "majors": ["Science (Mathematics)"],
                "persentage": "79.91%"
            }, {
                "name": "MPSTME,NMIMS",
                "url": "http://engineering.nmims.edu/",
                "degree": "B.TECH",
                "dates": "2013-2017",
                "location": "Vile Parle west,Mumbai",
                "majors": ["Electronics & Telecommunications"],
                "persentage": "3.65/4.0"
            }

        ],
        "onlineCourses": [{
            "title": "Front End Web Developement",
            "school": "Udacity",
            "dates": "In progress",
            "url": "Link for the course"
        }]
    };

    var projects = {
        "projects": [{
            "title": "My Portfolio",
            "url": "https://github.com/jkc1996/",
            "dates": "July 2017",
            "images": ["images/project-1.jpg"],
            "description": "Created the web development portfolio consist of home page,project gallery,contact and about page using skills of HTML,CSS and JavaScript."
        }, {
            "title": "Favourite Animal Web Page",
            "url": "https://github.com/jkc1996/",
            "dates": "July 2017",
            "images": ["images/project-2.jpg", "images/project-2_1.jpg"],
            "description": "Created my favourite animal web page using HTML and CSS skills."
        }, {
            "title": "A Multi-Modal Biometric Access Automobile System",
            "url": "https://github.com/jkc1996/",
            "dates": "July 2016",
            "images": ["images/project-3.jpg"],
            "description": "Idea of project is to implement security system using speech and image processing and combine them using fusion algorithms."
        }, {
            "title": "Web Password Based Door Lock Security Server",
            "url": "https://github.com/jkc1996/",
            "dates": "Jan 2016 - April 2016",
            "images": ["images/project-4.jpg", "images/project-4_1.jpg"],
            "description": "HTML web page provide user interface to enter the password and send the signal on raspberry pi.Raspberry pi receive the signal and on correct password it will open the door and on wrong password it will alert the person."
        }]
    };

    var research = {
        "research": [{
            "title": "Word Recognition and Speaker Recognition using MFCC and Correlation coefficient",
            "publication": "IJSRD Journal",
            "url": "http://www.ijsrd.com",
            "dates": "January 2016",
            "location": "Mumbai",
            "issnno": "2321-0613",
            "description": "Speech signals have enormous capacity of carrying information. The human speech contains numerous discriminative features that can be used to identify speakers. Speech contains significant energy from zero frequency up to around 5 kHz. The property of speech signal changes markedly as a function of time. Speech and speaker recognition is based on an individual’s speech characteristics that cannot be stolen, forgotten or lost, thus allowing for a secure method of authenticating speakers."
        }, {
            "title": "Application Based Multimodal Biometric System for Speech Controlled Device",
            "publication": "IJRASET Journal",
            "url": "http://www.ijraset.com/",
            "dates": "Volume 5 Issue IV, April 2017",
            "location": "Mumbai",
            "issnno": "2321-9653",
            "description": "A Biometric system is an identification system based on the use of different biometric features of individuals by the analysis of physiological characteristics, such as fingerprints, eye retinas and irises, voice patterns, facial patterns and hand measurements for authentication purposes or behavioural characteristics."
        }, {
            "title": "A Multimodal Biometric Authentication for Speech Controlled Automobile System",
            "publication": "IJRET Journal",
            "url": "https://www.ijret.org",
            "dates": "Volume 4 Issue IV, April 2017",
            "location": "Mumbai",
            "issnno": "2395-0056",
            "description": "Biometric face, fingerprint and voice recognition are particularly attractive biometric approaches, since these three focuses on the same identifier that humans use primarily to distinguish one person from another: their “faces” and fingerprint is also around in criminal investigation since late 19th century."
        }]
    };

    $("#myTopnav").append(HTMLnavHome);
    $("#myTopnav").append(HTMLnavWork);
    $("#myTopnav").append(HTMLnavProject);
    $("#myTopnav").append(HTMLnavEducation);
    $("#myTopnav").append(HTMLnavResearch);
    $("#myTopnav").append(HTMLnavMap);
    $("#myTopnav").append(HTMLnavIcon);

    bio.display = function() {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedmobile);
        $("#footerContacts").append(formattedmobile);
        var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedemail);
        $("#footerContacts").append(formattedemail);
        var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedgithub);
        $("#footerContacts").append(formattedgithub);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);
        var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedImage);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(skill) {
                var formattedSkills = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkills);
            });
        }
    };

    work.display = function() {

        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", (job.employer + " - " + job.title).link(job.link));
            $(".work-entry:last").append(formattedEmployer);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedDates);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedDescription);
        });
    };

    projects.display = function() {

        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedDescription);

            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        });
    };

    education.display = function() {

        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", (school.name + " -- " + school.degree).link(school.url));
            $(".education-entry:last").append(formattedName);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedDates);
            school.majors.forEach(function(major) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(formattedMajor + school.persentage);
            });
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedLocation);
        });
        $("#education:last").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(online) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", (online.title + " -- " + online.school).link('https://in.udacity.com/'));
            $(".education-entry:last").append(formattedTitle);
            var formattedDates = HTMLonlineDates.replace("%data%", online.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedURL = HTMLonlineURL.replace("%data%", online.url.link('https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001/?'));
            $(".education-entry:last").append(formattedURL);
        });
    };

    research.display = function() {

        research.research.forEach(function(paper) {
            $("#research").append(HTMLresearchStart);
            var formattedTitle = HTMLresearchTitle.replace("%data%", (paper.title + " - " + paper.publication).link(paper.url));
            $(".research-entry:last").append(formattedTitle);
            var formattedDates = HTMLresearchDates.replace("%data%", paper.dates);
            $(".research-entry:last").append(formattedDates);
            var formattedLocation = HTMLresearchLocation.replace("%data%", paper.location);
            $(".research-entry:last").append(formattedLocation);
            var formattedIssnNo = HTMLresearchISSNNo.replace("%data%", paper.issnno);
            $(".research-entry:last").append(formattedIssnNo);
            var formattedDescription = HTMLresearchDescription.replace("%data%", paper.description);
            $(".research-entry:last").append(formattedDescription);
        });
    };

    $("#mapDiv").append(googleMap);

    function inName(name) {

        name = name.trim().split(" ");
        name[1] = name[1].toUpperCase();
        name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
        name = name.join(" ");

        return name;
    }

    $("#main").append(internationalizeButton);

    bio.display();
    work.display();
    projects.display();
    education.display();
    research.display();