export const siteConfig = {
  name: "Santiago Alvarado",
  title: "Aspiring Software Engineer",
  description: "Personal portfolio of Santiago Alvarado",
  accentColor: "#1d4ed8",
  social: {
    email: "salvarado3377@icloud.com",
    linkedin: "https://www.linkedin.com/in/santiago-alvarado-475287307/",
    github: "https://github.com/salvarado33",
  },
  aboutMe:
    "I'm Santiago Alvarado, a Computer Science student at California State University, Sacramento, graduating May 2027, with a GPA of 3.5/4.0. I have experience at Symbotic, World Relief, and the Disney College Program, where I worked on robotics diagnostics, inventory management systems, AI-driven tools, and large-scale transportation operations. I'm passionate about backend development, system design, and AI applications, and I'm seeking internship opportunities to continue growing as a developer.",
  skills: [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "SQL",
    "Flask",
    "Django",
    "HTML/CSS",
    "Git",
    "Linux",
    "Azure",
    "AI-Driven Program Development"
  ],
  projects: [
    {
      name: "AI-Powered Resume Screener",
      description:
        "Developed an NLP-based resume parsing tool using BERT and spaCy, achieving 93% accuracy in candidate ranking. Designed a scalable REST API using Flask and deployed on AWS with auto-scaling. Integrated an AI-driven bias detection module to ensure fair hiring practices.",
      link: "#", // Replace with GitHub/project link if you have it
      skills: ["Python", "Flask", "AWS", "BERT", "spaCy"]
    },
    {
      name: "DeepDrive: End-to-End Self-Driving Car Simulator",
      description:
        "Built a computer vision-based lane detection model using OpenCV and TensorFlow, achieving 94% accuracy in simulations. Integrated a reinforcement learning model (DQN) for steering control, reducing lane deviations by 50%. Deployed the system on AWS Lambda and EC2 for real-time simulation and inference.",
      link: "#", // Replace with GitHub/project link if you have it
      skills: ["Python", "OpenCV", "TensorFlow", "AWS", "Reinforcement Learning"]
    }
  ],
  experience: [
    {
      company: "Disney College Program",
      title: "Monorails Intern",
      dateRange: "May 2025 - Aug 2025",
      bullets: [
        "Safely powered on and shut down monorail stations, ensuring operational readiness and security each day.",
        "Delivered exceptional guest service by answering questions and providing directions.",
        "Operated and managed monorail transportation for thousands of guests daily."
      ]
    },
    {
      company: "World Relief",
      title: "IT Intern",
      dateRange: "Oct 2024 - May 2025",
      bullets: [
        "Developed an inventory management system using Python, Flask/Django, Java, and SQL.",
        "Built a web-based frontend with HTML, CSS, and JavaScript for responsive design.",
        "Created a security tool with John the Ripper and Python to improve company password policies."
      ]
    },
    {
      company: "Symbotic",
      title: "Software Engineer Intern",
      dateRange: "May 2023 - Aug 2023",
      bullets: [
        "Developed a location-tracking algorithm in Python to detect robot positions post-power outage, improving recovery time by 25%.",
        "Diagnosed and resolved hardware/software issues including CPUs, GPUs, and PLC monitors.",
        "Reprogrammed PLC logic using ladder logic to ensure proper robotic system operation."
      ]
    }
  ],
  education: [
    {
      school: "California State University, Sacramento",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "Expected May 2027",
      achievements: [
        "GPA: 3.5/4.0",
        "Relevant coursework in AI, backend development, and systems programming"
      ]
    }
  ]
};
