/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import {
  SiIstio,
  SiHelm,
  SiAnsible,
  SiJenkins,
  SiTerraform,
  SiAmazoneks,
  SiGit,
  SiGithub,
  SiArgo,
  SiRedhatopenshift,
  SiApacheairflow,
  SiMlflow,
  SiAwslambda,
  SiAmazonaws,
  SiDocker,
  SiJavascript,
  SiPython,
  SiNpm,
  SiKubernetes
} from "react-icons/si";

import {
  FaNodeJs
} from "react-icons/fa"
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nitin Tiwari",
  title: "Hi, I'm Nitin",
  subTitle: emoji(
    "Working as a DevOps Engineer 🚀 having experience on several DevOps tools such as Kubernetes, Docker, Jenkins, GIT, ArgoCD, Ansible, Helm, Terraform."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1B66ee1J_M3xjpql8pyhkOZbmdu3b7u2z/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tiwarinitin",
  linkedin: "https://www.linkedin.com/in/nitin-tiwari6",
  gmail: "nitin.tiwari6@outlook.com",
  instagram: "https://instagram.com/nitin.tiwari6",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ENTHUSIASTIC DEVOPS ENGINEER, ALWAYS CURIOUS TO LEARN NEW THINGS",
  skills: [
    emoji(
      "⚡Intoduced Kubernetes and Jenkins with several other tools to implement full-fledged CICD pipeline."),
    emoji("⚡ Utilized Docker for containerization and Kubernetes for container orchestration using EKS to enhance application scalability and manageability."),
    emoji("⚡ Implementing and managing Continuous Integration/Continuous Deployment (CI/CD) pipeline using Jenkins that significantly improves the speed and reliability of deployments."),
    emoji("⚡ Lead DevOps teams to create scalable and reliable infrastructures and applications deployments as per organisations norms. ")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Kubernetes",
      Icon: SiKubernetes
    },
    {
      skillName: "Istio",
      Icon: SiIstio
    },
    {
      skillName: "AWS",
      Icon: SiAmazonaws
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dr. Virendra Swaroop Institute of Computer Studies",
      logo: require("./assets/images/VSICS.png"),
      subHeader: "Bachelor of Computer Studies (BCA)",
      duration: "July 2016 - Augest 2019",
      desc: "Specialization on Computer Applications"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  techSkills: [
    {
      skillName: "Kubernetes",
      Icon: SiKubernetes
    },
    {
      skillName: "Istio",
      Icon: SiIstio
    },
    {
      skillName: "AWS",
      Icon: SiAmazonaws
    },
    {
      skillName: "ArgoCD",
      Icon: SiArgo
    },
    {
      skillName: "Jenkins",
      Icon: SiJenkins
    },
    {
      skillName: "Python",
      Icon: SiPython
    },
    {
      skillName: "Docker",
      Icon: SiDocker
    },
    {
      skillName: "Helm",
      Icon: SiHelm
    },
    {
      skillName: "Ansible",
      Icon: SiAnsible
    },
    {
      skillName: "EKS",
      Icon: SiAmazoneks
    },
    {
      skillName: "Git",
      Icon: SiGit
    },
    {
      skillName: "Terraform",
      Icon: SiTerraform
    },
    {
      skillName: "OpenShift",
      Icon: SiRedhatopenshift
    },
    {
      skillName: "AwS Lambda",
      Icon: SiAwslambda
    },
    {
      skillName: "JavaScript",
      Icon: SiJavascript
    },
    {
      skillName: "GitHub",
      Icon: SiGithub
    },
    {
      skillName: "Nodejs",
      Icon: FaNodeJs
    },
    {
      skillName: "NPM",
      Icon: SiNpm
    },
    {
      skillName: "Airflow",
      Icon: SiApacheairflow
    },
    {
      skillName: "MlFlow",
      Icon: SiMlflow
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer/SRE",
      company: "Tech Mahindra",
      companylogo: require("./assets/images/TECHM.png"),
      date: "Augest 2022 – Present",
      desc: "Worked as DevOps/SRE, responsible for managing end to end deployment lifecycle of the product with the help of several tools to minimize the human error and automate the processes.",
      descBullets: [
        "Expertise in DevOps and has worked in multiple complex DevOps engagements which involved using various tools, platform, environments.",
        "Designed and implemented infrastructure using tools such as Terraform, CloudFormation, or Ansible, resulting in a more reliable and scalable infrastructure."
      ]
    },
    {
      role: "Kubernetes/Openshift Admin",
      company: "Wipro",
      companylogo: require("./assets/images/Wipro.png"),
      date: "July 2019 – Augest 2022",
      desc: "Worked as Platform-As-A-Service (PaaS) Engineer in Kubernetes/RedHat OpenShift environment responsible for managing and administrating clusters and deploying containerized application in Kubernetes/OpenShift.",
      descBullets: [
        "Implemented cloud services IAAS, PAAS, and SaaS which include Kubernetes, Docker and OpenShift",
        "Creating and deploying containerized applications on Kubernetes/OpenShift."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "",
      projectName: "Yantr.ai",
      projectDesc: "An AI/ML-powered BPaaS platform with deep analytical insights, dynamic decision-making support and future-proof planning to optimize your field services operations. Yantr.ai provides end-to-end visibility by bringing together people, data, technology, and innovative systems or processes for intelligent and autonomous execution, thereby improving the customer experience and optimizing the cost of operations",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://yantr.ai/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "",
      projectName: "NC POC",
      projectDesc: "Tech Mahindra BPaaS product which is a cognitive platform enabled by cutting edge process design and machine learning tofurnish actionable insights for enhanced field service.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ncpoc.yantr.app"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Certified Kubernetes Application Developer",
      subtitle:
        "Successfully completed Certified Kubernetes Application Developer Certification (CKAD)",
      image: require("./assets/images/CKAD.png"),
      imageAlt: "Certified Kubernetes Application Developer",
      footerLink: [
        {
          name: "Certification",
          url: "http://training.linuxfoundation.org/certification/verify"
        }
      ]
    },
    {
      title: "HashiCorp: Certified Terraform Associate",
      subtitle: "Successfully completed Hashicorp Terraform Associate Certification",
      image: require("./assets/images/terraform.png"),
      imageAlt: "Terraform",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      subtitle:
        "Successfully completed Certified Kubernetes Administrator Certification",
      image: require("./assets/images/CKA.png"),
      imageAlt: "Certified Kubernetes Administrator ",
      footerLink: [
        {
          name: "Certification",
          url: "http://training.linuxfoundation.org/certification/verify"
        }
      ]
    },

    {
      title: "Microsoft Cloud Week Pro Participant",
      subtitle: "Participated on the Microsoft Cloud Week Pro Event organised by Microsoft",
      image: require("./assets/images/microsoft.png"),
      imageAlt: "Microsoft",
      footerLink: [
        {
          name: "Event",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7652058171",
  email_address: "nitin.tiwari6@outlook.com"
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  workExperiences,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable
};
