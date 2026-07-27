export const portfolioData = {
  personal: {
    name: "Nitin Tiwari",
    title: "Senior DevOps Engineer | GitOps, FinOps & DevSecOps Specialist",
    tagline: "Specializing in GitOps Architecture, Cloud Cost Optimization & DevSecOps",
    bio: "Senior DevOps Engineer with ~7 years of experience specializing in GitOps Architecture, Cloud Cost Optimization (FinOps), and Security (DevSecOps). CKA & CKAD certified Kubernetes Administrator and Application Developer with deep proficiency across AWS, Terraform, ArgoCD, Istio, and AI-assisted delivery.",
    location: "Pune, India 🇮🇳",
    email: "nitin.tiwari6@outlook.com",
    phone: "+91-765-205-8171",
    avatar: "/profile.jpg",
    resumeLink: "/Nitin_Tiwari_CV.pdf",
    web3formsAccessKey: "0756233b-62dd-4ac1-b9ae-53ad34edea80", // Replace with your key from https://web3forms.com (delivered to nitin.tiwari6@outlook.com)
    socials: {
      github: "https://github.com/tiwarinitin",
      linkedin: "https://linkedin.com/in/nitin-tiwari6",
      instagram: "https://instagram.com/nitin.tiwari6",
      website: "https://tiwarinitin.github.io"
    },
    status: "Senior DevOps Engineer • Open for Consulting & Keynotes"
  },

  stats: [
    { label: "Years Experience", value: "7+" },
    { label: "Kubernetes Certs", value: "CKA & CKAD" },
    { label: "Cloud Cost Savings", value: "24%" },
    { label: "Deployment Velocity", value: "60% Faster" }
  ],

  pillars: [
    {
      id: "gitops-iac",
      title: "GitOps & Infrastructure as Code",
      icon: "Cloud",
      description: "Designing audit-ready, automated infrastructure with Terraform IaC modules, ArgoCD, GitHub Actions, and Jenkins to drive zero-downtime continuous delivery.",
      techs: ["Terraform", "ArgoCD", "Kubernetes", "AWS EKS", "GitHub Actions", "Helm", "Jenkins"]
    },
    {
      id: "finops-cost",
      title: "Cloud Cost Optimization (FinOps)",
      icon: "TrendingDown",
      description: "Redesigning cloud architecture and resource utilization leading to proven 24% annual cost reductions across enterprise AWS services (EKS, RDS, S3, Lambda).",
      techs: ["AWS Cost Optimization", "Resource Auto-scaling", "FinOps Architecture", "Terraform Import"]
    },
    {
      id: "devsecops-security",
      title: "DevSecOps & Cloud Security",
      icon: "ShieldCheck",
      description: "Integrating Wiz risk prioritization, OIDC authentication mechanisms, Istio service mesh, RBAC, and automated security controls into compliant cloud workflows.",
      techs: ["Wiz Security", "OIDC Auth", "Istio Mesh", "DevSecOps", "Compliance", "Access Control"]
    }
  ],

  skillsCategory: [
    {
      name: "Cloud Provider & IaC",
      icon: "Server",
      description: "Cloud infrastructure automation and cost optimization",
      skills: [
        "AWS (EKS, Lambda, S3, RDS, Glue, VPC, IAM, ECR)",
        "Terraform (IaC & Internal Registry Modules)",
        "CloudFormation",
        "CodeCommit",
        "FinOps & Cloud Cost Optimization",
        "Ansible Configuration"
      ]
    },
    {
      name: "Containerization & Orchestration",
      icon: "Cpu",
      description: "Production container platforms and deployment workflows",
      skills: [
        "Kubernetes (CKA & CKAD Certified)",
        "RedHat OpenShift",
        "Docker & Docker Compose",
        "ArgoCD & GitOps Workflows",
        "GitHub Actions",
        "Jenkins CI/CD",
        "Helm & Kustomize"
      ]
    },
    {
      name: "Security, Service Mesh & Observability",
      icon: "ShieldCheck",
      description: "Zero-trust security, service mesh, and telemetry",
      skills: [
        "Wiz Security Risk Remediation",
        "DevSecOps Architecture",
        "Istio Service Mesh",
        "OIDC Authentication",
        "Prometheus",
        "Grafana Dashboards",
        "CloudWatch Monitoring"
      ]
    },
    {
      name: "Tools, Languages & Delivery",
      icon: "Code",
      description: "Programming languages, version control, and AI tools",
      skills: [
        "Golang",
        "Python Scripting",
        "AI-Assisted CI/CD & Delivery",
        "GitHub & Version Control",
        "Linux System Administration",
        "YAML Manifest Architecture"
      ]
    }
  ],

  experiences: [
    {
      period: "Oct 2024 – Present",
      role: "Senior DevOps Engineer",
      company: "Cognizant Technology Solutions",
      location: "Pune, India",
      description: "Managing end-to-end deployment, infrastructure, and service operations for a major life sciences client in compliance-driven environments.",
      highlights: [
        "Automated repetitive operational tasks using scripts and IaC tools, reducing manual effort by >50%.",
        "Optimized cloud resource utilization and implemented cost-saving measures, achieving a 24% reduction in yearly cloud spend (FinOps).",
        "Authored Terraform modules for infrastructure management and published an internal Terraform registry module for cross-team reuse.",
        "Leveraged Wiz security for visibility, risk prioritization, and remediation guidance, enabling developers to ship faster and more securely.",
        "Simplified authentication mechanism by implementing OpenID Connect (OIDC) across projects.",
        "Enhanced AWS services (Lambda, Glue, RDS, S3) to improve performance, reliability, and extended support compliance.",
        "Utilized AI tools to streamline delivery workflows and enhance deployment reliability."
      ],
      skills: ["AWS", "Terraform", "FinOps", "Wiz Security", "OIDC", "GitOps", "Kubernetes", "DevSecOps", "Golang"]
    },
    {
      period: "Aug 2022 – Oct 2024",
      role: "DevOps Engineer",
      company: "Tech Mahindra Limited",
      location: "Noida, India",
      description: "Managed end-to-end product deployment lifecycles and automated CI/CD pipelines to minimize human error.",
      highlights: [
        "Introduced Jenkins, ArgoCD, and Helm to establish comprehensive CI/CD pipelines, accelerating delivery cycles.",
        "Implemented microservices deployment (React, Python, etc.), achieving a 60% reduction in deployment time.",
        "Managed AWS infrastructure (VPC, EKS, IAM, ECR, CodeCommit, Lambda, API Gateway, S3, EC2) with auto-scaling and load balancing.",
        "Designed and implemented infrastructure using Terraform and Ansible for safe, versioned IaC management."
      ],
      skills: ["Kubernetes", "Docker", "Jenkins", "ArgoCD", "Helm", "AWS EKS", "Terraform", "Ansible"]
    },
    {
      period: "Jul 2019 – Aug 2022",
      role: "DevOps Engineer",
      company: "Wipro Limited",
      location: "Bangalore, India",
      description: "Managed and administrated Kubernetes and RedHat OpenShift clusters and containerized applications.",
      highlights: [
        "Successfully created and deployed EKS Kubernetes clusters on AWS.",
        "Implemented AWS features including Lambda, CodeCommit, CloudFormation, CloudFront, API Gateway, SQS/SNS, S3, CloudWatch, and EC2.",
        "Deployed staff-facing applications on the internet with private access using CloudFront and IP whitelisting.",
        "Configured Helm to deploy microservices across diverse environments with private access controls."
      ],
      skills: ["Kubernetes", "RedHat OpenShift", "Docker", "Helm", "AWS", "CloudFormation", "CloudFront"]
    }
  ],

  education: [
    {
      degree: "Bachelors in Computer Application (BCA)",
      institution: "Kanpur University (CSJM University)",
      location: "Kanpur, India",
      duration: "Jun 2016 – Jul 2019",
      description: "Core computer science fundamentals, software engineering, systems design, and application development."
    }
  ],

  projects: [
    {
      id: "gitops-finops-aws",
      title: "Enterprise GitOps & FinOps Automation",
      category: "DevOps",
      description: "Production-ready Infrastructure-as-Code with Terraform registry modules, ArgoCD GitOps pipelines, and cost-optimization scripts yielding 24% cloud cost reduction.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=800&auto=format&fit=crop",
      tags: ["Terraform", "ArgoCD", "AWS", "FinOps", "GitOps"],
      featured: true
    },
    {
      id: "wiz-devsecops-oidc",
      title: "DevSecOps & OIDC Auth Architecture",
      category: "Security",
      description: "Zero-trust cloud architecture integrating Wiz vulnerability scanning, OIDC federated authentication, and audit-ready compliance controls.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
      tags: ["Wiz", "OIDC", "DevSecOps", "AWS EKS", "Security"],
      featured: true
    },
    {
      id: "ai-assisted-delivery",
      title: "AI-Assisted CI/CD Pipeline & Delivery",
      category: "AI/ML",
      description: "Leveraging generative AI and intelligent operational automation to streamline deployment workflows and error remediation.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      tags: ["AI Operations", "CI/CD", "Jenkins", "GitHub Actions", "Golang", "Python"],
      featured: true
    }
  ],

  recognition: [
    {
      id: "claude",
      title: "Claude Certified Architect",
      issuer: "Anthropic",
      date: "Certified",
      description: "Certified architectural expertise in AI systems integration, prompt engineering, and LLM-assisted software development.",
      badgeUrl: "/certs/claude.png",
      badge: "AI Architect"
    },
    {
      id: "ckad",
      title: "Certified Kubernetes Application Developer (CKAD)",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      date: "Certified",
      description: "Validated skill in designing, building, configuring, and exposing cloud-native applications for Kubernetes.",
      badgeUrl: "/certs/ckad.png",
      badge: "CKAD"
    },
    {
      id: "cka",
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      date: "Certified",
      description: "Demonstrated competence in Kubernetes installation, cluster administration, networking, security, and troubleshooting.",
      badgeUrl: "/certs/cka.png",
      badge: "CKA"
    },
    {
      id: "aws",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Certified",
      description: "Certified overall understanding of AWS Cloud platform, core services, security, architecture, and cloud economics.",
      badgeUrl: "/certs/aws.png",
      badge: "AWS"
    },
    {
      id: "terraform",
      title: "Certified HashiCorp: Terraform Associate",
      issuer: "HashiCorp",
      date: "Certified",
      description: "Validated expertise in Infrastructure as Code (IaC) concepts, Terraform CLI, modules, state management, and workflow automation.",
      badgeUrl: "/certs/terraform.png",
      badge: "Terraform"
    }
  ],

  aiTwinKnowledge: {
    welcomeMessage: "Hi there! I'm Nitin's AI Assistant twin. Ask me anything about Nitin's ~7 years of DevOps experience, CKA/CKAD certifications, Cognizant projects, FinOps, DevSecOps, or Golang!",
    suggestedQuestions: [
      "What is Nitin's experience at Cognizant & Tech Mahindra?",
      "Which certifications does Nitin hold (Claude, CKAD, CKA, AWS, Terraform)?",
      "How did Nitin achieve a 24% cloud cost reduction (FinOps)?",
      "How can I contact Nitin for Senior DevOps roles or consulting?"
    ],
    faqs: {
      experience: "Nitin is a Senior DevOps Engineer with ~7 years of experience. He currently works at Cognizant Technology Solutions managing life sciences cloud infrastructure. Previously, he worked at Tech Mahindra (Noida) and Wipro (Bangalore).",
      certs: "Nitin holds premier industry certifications ordered by domain: Claude Certified Architect, Certified Kubernetes Application Developer (CKAD), Certified Kubernetes Administrator (CKA), AWS Certified Cloud Practitioner, and Certified HashiCorp Terraform Associate.",
      skills: "Nitin specializes in AWS, Terraform, Kubernetes, Docker, ArgoCD, GitHub Actions, Jenkins, Golang, Python, DevSecOps (Wiz, OIDC), FinOps (24% cost optimization), and AI-assisted delivery.",
      contact: "You can reach Nitin directly via email at nitin.tiwari6@outlook.com or phone +91-765-205-8171. Connect on Instagram @nitin.tiwari6 and LinkedIn at linkedin.com/in/nitin-tiwari6."
    }
  }
};
