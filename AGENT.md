# 🤖 Agent Guide & Technical Architecture Context

> **Authoritative Context & Workflow Guide for AI Agents and Developers**  
> This file documents the complete architectural history, data schemas, design constraints, and deployment procedures for **Nitin Tiwari's Portfolio Website** (`https://tiwarinitin.github.io/`).

---

## 👨‍💻 Owner Profile & Data Context

- **Name**: Nitin Tiwari
- **Title**: Senior DevOps Engineer & Cloud-Native Architect (~7 years IT experience)
- **Specializations**: GitOps Architecture, Cloud Cost Optimization (FinOps), DevSecOps & Security, Infrastructure as Code (IaC)
- **Key Achievements**: 24% annual cloud cost savings (FinOps), >50% task automation, 60% faster deployment velocity
- **Certifications**: CKA, CKAD, Claude Certified Architect, AWS Certified Cloud Practitioner, HashiCorp Terraform Associate
- **Location**: Pune, India 🇮🇳
- **Contact Email**: `nitin.tiwari6@outlook.com`
- **Phone**: `+91-765-205-8171`
- **Social Links**:
  - GitHub: `https://github.com/tiwarinitin`
  - LinkedIn: `https://linkedin.com/in/nitin-tiwari6`
  - Instagram: `https://instagram.com/nitin.tiwari6`
  - Portfolio Website: `https://tiwarinitin.github.io`

---

## 🎨 UI/UX & Design System Guidelines

1. **Aesthetics & Theme**:
   - Modern Glassmorphism dark theme (`data-theme="dark"`).
   - Glass cards with `backdrop-filter: blur(12px)`, `var(--border-color)` subtle borders, and HSL gradient accents.
   - Dynamic HTML5 Canvas particle constellation background ([BackgroundCanvas.jsx](file:///mnt/eDrive/building/portfolio/src/components/BackgroundCanvas.jsx)).

2. **Responsive Layout Rules**:
   - Must render flawlessly on **Mobile (< 600px)**, **Tablet (600px - 1024px)**, and **Desktop (> 1024px)**.
   - Cards in grid layouts MUST auto-fit using CSS Grid: `grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr))`.
   - In [Contact.jsx](file:///mnt/eDrive/building/portfolio/src/components/Contact.jsx), the **Contact Information Deck** and **Send Direct Message Form** MUST maintain matching equal heights (`align-items: stretch`).

3. **User Content & Layout Directives**:
   - **Hero Tags**: `AI Enthusiast`, `Platform Engineer`, `CKA & CKAD Certified`. (Do NOT call Nitin GDE / Google Developer Expert).
   - **Hero Profile Photo**: Large profile photo (`/profile.jpg`) without unnecessary background box text.
   - **Resume Download**: One-click opening of `/Nitin_Tiwari_CV.pdf` in a new browser tab.
   - **Tools Deck**: Compact tabbed card deck ([SkillsMatrix.jsx](file:///mnt/eDrive/building/portfolio/src/components/SkillsMatrix.jsx)) featuring **Golang**, AWS, Kubernetes, Terraform, ArgoCD, Helm, Wiz, OIDC, Prometheus without percentages or count numbers.
   - **Projects Section**: Project cards show architecture tags and descriptions without source code or live preview buttons.

---

## 📜 Certification Badge Order & Assets

In [Recognition.jsx](file:///mnt/eDrive/building/portfolio/src/components/Recognition.jsx), certification cards MUST follow this strict order using official badge graphics located in `/public/certs/`:

1. **Claude Certified Architect** → Image: `/certs/claude.png` *(Anthropic)*
2. **Certified Kubernetes Application Developer (CKAD)** → Image: `/certs/ckad.png` *(CNCF)*
3. **Certified Kubernetes Administrator (CKA)** → Image: `/certs/cka.png` *(CNCF)*
4. **AWS Certified Cloud Practitioner** → Image: `/certs/aws.png` *(Amazon Web Services)*
5. **Certified HashiCorp: Terraform Associate** → Image: `/certs/terraform.png` *(HashiCorp)*

---

## 📬 Web3Forms API & Anti-Spam Integration

- **Contact Form Target**: Submits JSON payloads to `https://api.web3forms.com/submit`.
- **Web3Forms Access Key**: Defined in `portfolioData.personal.web3formsAccessKey` (`0756233b-62dd-4ac1-b9ae-53ad34edea80`).
- **Honeypot Anti-Spam**: Includes hidden `botcheck` input (`display: 'none'`). If filled by automated bots, submission is silently rejected.
- **UI Indicators**: Features `Spam Protected` shield badge and real-time `Transmitting via Web3Forms...` button spinner.

---

## 🚀 Deployment & GitHub Pages Workflow

### Critical Deployment Architecture
- **Target URL**: `https://tiwarinitin.github.io/` (User Site).
- GitHub Pages serves `tiwarinitin.github.io` directly from the **`main` branch**.
- `vite.config.js` uses `base: './'` for relative asset resolution.
- `package.json` deploy script publishes the pre-built `dist/` bundle directly to `main`:
  ```json
  "deploy": "gh-pages -d dist -r https://github.com/tiwarinitin/tiwarinitin.github.io.git -b main"
  ```

### How to Make Changes and Deploy

Whenever a future agent or developer modifies code in this project, execute the following standard workflow:

```bash
# 1. Verify production build locally
npm run build

# 2. Stage and commit changes to local Git repository
git add .
git commit -m "describe the feature or fix"

# 3. Push source code and deploy live production site
npm run deploy
```

*(Running `npm run deploy` builds `dist/` and publishes production assets directly to `https://tiwarinitin.github.io/` via `gh-pages` on branch `main`.)*
