"""Generate a consolidated master CV PDF for Mubasir Halidu."""

from fpdf import FPDF

class CV(FPDF):
    MARGIN = 18
    PAGE_W = 210 - 2 * 18  # A4 width minus margins

    def __init__(self):
        super().__init__()
        self.set_auto_page_break(auto=True, margin=18)
        self.set_margins(self.MARGIN, 15, self.MARGIN)

    # ── helpers ──────────────────────────────────────────────────

    def _color(self, r, g, b):
        self.set_text_color(r, g, b)

    def _black(self):
        self._color(20, 20, 20)

    def _gray(self):
        self._color(80, 80, 80)

    def _accent(self):
        self._color(40, 40, 40)

    def section_title(self, title):
        self.ln(5)
        self._black()
        self.set_font("Helvetica", "B", 11)
        self.cell(0, 7, title.upper(), new_x="LMARGIN", new_y="NEXT")
        # line
        self.set_draw_color(60, 60, 60)
        self.set_line_width(0.4)
        y = self.get_y()
        self.line(self.MARGIN, y, 210 - self.MARGIN, y)
        self.ln(3)

    def entry_header(self, left, right, bold_left=True):
        self._black()
        self.set_font("Helvetica", "B" if bold_left else "", 10)
        w_right = self.get_string_width(right) + 2
        self.cell(self.PAGE_W - w_right, 5, left, new_x="RIGHT")
        self.set_font("Helvetica", "I", 9)
        self._gray()
        self.cell(w_right, 5, right, new_x="LMARGIN", new_y="NEXT", align="R")

    def entry_subtitle(self, left, right=""):
        self._accent()
        self.set_font("Helvetica", "I", 9.5)
        if right:
            w_right = self.get_string_width(right) + 2
            self.cell(self.PAGE_W - w_right, 5, left, new_x="RIGHT")
            self.set_font("Helvetica", "", 9)
            self._gray()
            self.cell(w_right, 5, right, new_x="LMARGIN", new_y="NEXT", align="R")
        else:
            self.cell(0, 5, left, new_x="LMARGIN", new_y="NEXT")

    def bullet(self, text):
        self._gray()
        self.set_font("Helvetica", "", 9)
        x = self.get_x()
        self.cell(5, 4.5, "-", new_x="RIGHT")
        self.multi_cell(self.PAGE_W - 5, 4.5, text, new_x="LMARGIN", new_y="NEXT")
        self.ln(0.8)

    def skill_row(self, category, items):
        self._black()
        self.set_font("Helvetica", "B", 9)
        cat_w = 48
        self.cell(cat_w, 4.5, category + ":", new_x="RIGHT")
        self._gray()
        self.set_font("Helvetica", "", 9)
        self.multi_cell(self.PAGE_W - cat_w, 4.5, items, new_x="LMARGIN", new_y="NEXT")
        self.ln(1)

    def cert_row(self, name, date):
        self._gray()
        self.set_font("Helvetica", "", 9)
        w_right = self.get_string_width(date) + 2
        self.cell(5, 4.5, "-", new_x="RIGHT")
        self.cell(self.PAGE_W - 5 - w_right, 4.5, name, new_x="RIGHT")
        self.set_font("Helvetica", "", 8.5)
        self.cell(w_right, 4.5, date, new_x="LMARGIN", new_y="NEXT", align="R")
        self.ln(0.5)

    def award_row(self, name, date):
        self.cert_row(name, date)


def build():
    pdf = CV()
    pdf.add_page()

    # ── HEADER ───────────────────────────────────────────────────
    pdf._black()
    pdf.set_font("Helvetica", "B", 22)
    pdf.cell(0, 10, "MUBASIR HALIDU", new_x="LMARGIN", new_y="NEXT", align="C")

    pdf._gray()
    pdf.set_font("Helvetica", "", 9)
    pdf.cell(0, 5, "Accra, Ghana  |  +233 549 790 023", new_x="LMARGIN", new_y="NEXT", align="C")
    pdf.cell(0, 5,
             "halidumubashir@gmail.com  |  linkedin.com/in/halidu-mubasir-44077b204  |  github.com/Halidu-Mubasir",
             new_x="LMARGIN", new_y="NEXT", align="C")
    pdf.ln(2)

    # ── PROFESSIONAL SUMMARY ─────────────────────────────────────
    pdf.section_title("Professional Summary")
    pdf._gray()
    pdf.set_font("Helvetica", "", 9.5)
    pdf.multi_cell(0, 5,
        "Full-Stack Engineer, Cloud Architect, and DevOps practitioner with 3+ years of experience "
        "building and shipping production-grade web applications across the entire software lifecycle. "
        "Proficient in React/Next.js frontends, Django and Node.js backends, and REST API design, with "
        "deep expertise in deploying applications through CI/CD pipelines, containerized environments, "
        "and cloud infrastructure on AWS and Azure. Experienced building AI-integrated platforms, "
        "multi-sided marketplaces, and Learning Management Systems. Strong background in cloud security, "
        "ISO 27001 compliance, Linux administration, and Kubernetes orchestration. AWS Certified DevOps "
        "Engineer Professional and Azure Developer Associate certified.",
        new_x="LMARGIN", new_y="NEXT")

    # ── EDUCATION ────────────────────────────────────────────────
    pdf.section_title("Education")

    pdf.entry_header("American University of Beirut", "Beirut, Lebanon")
    pdf.entry_subtitle("MA in Computing in Education", "Sep 2025 - May 2027 (Expected)")
    pdf.ln(2)

    pdf.entry_header("Ashesi University", "Eastern Region, Ghana")
    pdf.entry_subtitle("BSc. Computer Science  |  GPA: 3.75/4.00  |  Magna Cum Laude", "Jan 2021 - Aug 2024")

    # ── CERTIFICATIONS & AWARDS ──────────────────────────────────
    pdf.section_title("Certifications & Awards")

    pdf._black()
    pdf.set_font("Helvetica", "B", 9.5)
    pdf.cell(0, 5, "Certifications", new_x="LMARGIN", new_y="NEXT")
    pdf.cert_row("AWS Certified DevOps Engineer - Professional", "Aug 2025 - Aug 2028")
    pdf.cert_row("Azure Developer Associate (AZ-204)", "Jan 2025 - Jan 2027")
    pdf.cert_row("AWS Certified Developer - Associate", "Oct 2024 - Aug 2028")
    pdf.ln(1)

    pdf._black()
    pdf.set_font("Helvetica", "B", 9.5)
    pdf.cell(0, 5, "Awards", new_x="LMARGIN", new_y="NEXT")
    pdf.award_row("Magna Cum Laude Honors, Ashesi University", "Aug 2024")
    pdf.award_row("The MasterCard Foundation Scholarship, Scholars", "Dec 2020 - Aug 2024")
    pdf.award_row("Dean's List (GPA 3.5+)", "Oct 2021 - Aug 2024")

    # ── WORK EXPERIENCE ──────────────────────────────────────────
    pdf.section_title("Work Experience")

    pdf.entry_header("CloudFruition", "Remote, Ghana")
    pdf.entry_subtitle("Full-Stack Engineer, Cloud & DevOps Engineer", "Sep 2024 - Present")
    pdf.ln(1)

    bullets_cf = [
        "Architected and developed AutoRollback, a full-stack CI/CD automation platform for Azure deployments "
        "with a Next.js dashboard and Django REST Framework backend, enabling teams to configure deployments, "
        "trigger automated rollbacks, and monitor release health - reducing failed deployment recovery time by 40%.",

        "Led ISO 27001 compliance assessment for PayInc's Azure environment, documenting control implementation "
        "status across 114 controls, identifying gaps in access management, encryption, and logging practices.",

        "Executed Azure RBAC remediation project, removing 50+ deprecated classic administrator roles and "
        "remediating elevated User Access Administrator privileges, reducing privileged access attack surface by 40%.",

        "Developed OAuth 2.0 multi-tenant authentication flows with tenant-specific token management and cascading "
        "Azure/GitHub resource selectors in React, enabling cross-tenant Azure resource access.",

        "Designed secure REST APIs with Swagger documentation, JWT authentication, input validation, and role-based "
        "access control, consumed by both internal dashboards and external client integrations.",

        "Built and maintained CI/CD pipelines in Azure DevOps and GitHub Actions covering automated testing, "
        "security scanning, and multi-environment deployment workflows across multiple client codebases.",

        "Automated infrastructure provisioning using Terraform modules and Python scripts across AWS and Azure, "
        "cutting manual deployment time by 60% and enforcing environment consistency across dev, staging, and production.",

        "Implemented comprehensive monitoring with Azure Monitor, Log Analytics, and custom KQL queries, surfacing "
        "metrics into real-time operational dashboards and reducing MTTR by 35%.",

        "Managed AKS clusters for microservices workloads, implementing auto-scaling, health probes, and image "
        "optimization - reducing container build times by 30%.",

        "Designed and deployed an automated mass email delivery solution on AWS using SES, Lambda, and CloudWatch, "
        "handling high-volume communications at 99.9% reliability.",

        "Administered Linux-based systems (Ubuntu, RHEL) across cloud environments, managing user access, system "
        "updates, performance tuning, and troubleshooting production issues.",

        "Mentored team members in cloud and DevOps practices, achieving 100% pass rate across AWS Cloud Practitioner "
        "and AWS Developer Associate certification exams.",
    ]
    for b in bullets_cf:
        pdf.bullet(b)

    pdf.ln(1)
    pdf.entry_header("GhanaNLP", "Remote, Ghana")
    pdf.entry_subtitle("Machine Learning Engineer Intern", "Jun 2023 - Aug 2023")
    pdf.ln(1)

    bullets_nlp = [
        "Built an interactive Gradio web frontend for an Automatic Speech Recognition model serving low-resource "
        "African languages, improving accessibility for researchers and non-technical end-users.",
        "Contributed to QA testing pipelines for speech recognition, text-to-speech, and translation models, "
        "implementing automated validation procedures prior to production deployment.",
        "Supported data collection and preprocessing by creating, annotating, and cleaning a large-scale dataset "
        "for the Dagbani language, strengthening the foundation for low-resource NLP research.",
    ]
    for b in bullets_nlp:
        pdf.bullet(b)

    # ── PROJECTS ─────────────────────────────────────────────────
    pdf.section_title("Projects")

    # AutoRollback already covered in work experience

    # Inspired Minds
    pdf.entry_header("Inspired Minds - Full-Stack LMS & Agency Website", "2025 - Present")
    pdf.entry_subtitle("TypeScript, Next.js, React, Node.js, PostgreSQL")
    pdf.ln(1)
    for b in [
        "Built a dual-product platform for Ghana's premier home tutoring agency: a public-facing marketing website "
        "and a full LMS with separate teacher and student portals.",
        "Implemented core LMS features including quiz creation and auto-grading, assignment submission and marking, "
        "lesson note sharing, and real-time in-app messaging between paired teachers and students.",
        "Designed a multi-role authentication system and database schema supporting teacher-student pairings, course "
        "management, and graded activity records across Nursery to University levels.",
    ]:
        pdf.bullet(b)
    pdf.ln(1)

    # DASA Connect
    pdf.entry_header("DASA Connect - Student Governance Platform", "Nov 2025 - Jan 2026")
    pdf.entry_subtitle("TypeScript, Next.js, Django REST Framework, Docker, Recharts")
    pdf.ln(1)
    for b in [
        "Architected and delivered a full-stack platform for the Dagomba Student Association (KNUST) using Next.js "
        "and Django REST Framework, centralizing governance and resources for 500+ students.",
        "Engineered a secure Election System featuring a wizard-style voting booth with secret ballot logic and "
        "real-time data visualization via Recharts, ensuring 100% voter integrity.",
        "Developed a Headless Admin Dashboard with RBAC to manage users, content moderation, and digital membership "
        "verification. Deployed via Docker multi-container architecture with GitHub Actions CI/CD.",
    ]:
        pdf.bullet(b)
    pdf.ln(1)

    # Hifdh App
    pdf.entry_header("Hifdh App - Cross-Platform Quran Memorization Tool", "Jun 2025 - Jan 2026")
    pdf.entry_subtitle("React Native, Expo, Supabase, Gemini AI, SQLite")
    pdf.ln(1)
    for b in [
        "Built a cross-platform mobile application using React Native and Expo to help users practice Quran "
        "memorization through randomized verse trials across 8 category types.",
        "Implemented an offline-first architecture using SQLite for local data persistence and expo-file-system "
        "for audio caching, enabling full functionality without internet connectivity.",
        "Developed a sophisticated trial generation system using the Gemini AI API with configurable session "
        "lengths and performance tracking.",
    ]:
        pdf.bullet(b)
    pdf.ln(1)

    # Conversational Simulations
    pdf.entry_header("Conversational Simulations - AI Historical Figures Chat", "2025")
    pdf.entry_subtitle("TypeScript, Next.js, React, AI/LLM APIs")
    pdf.ln(1)
    for b in [
        "Developed an AI-powered platform where users hold contextually rich conversations with persona-accurate "
        "simulations of historical figures, powered by LLM APIs with custom persona prompting.",
        "Designed the frontend with dynamic persona selection, conversation history management, and a chat interface "
        "optimized for educational engagement.",
    ]:
        pdf.bullet(b)
    pdf.ln(1)

    # Fixit Ghana
    pdf.entry_header("Fixit Ghana - On-Demand Service Marketplace", "2025")
    pdf.entry_subtitle("TypeScript, Next.js, React, Google Maps API")
    pdf.ln(1)
    for b in [
        "Built a two-sided marketplace connecting Ghanaian service vendors with customers, integrating Google Maps "
        "API for location-based proximity search and vendor discovery.",
    ]:
        pdf.bullet(b)
    pdf.ln(1)

    # Thesis
    pdf.entry_header("AI-Based Predictive Model for Diabetes Complications", "Jan 2024 - Aug 2024")
    pdf.entry_subtitle("Undergraduate Thesis, Ashesi University  |  Python, React Native, ML")
    pdf.ln(1)
    for b in [
        "Developed machine learning models to predict diabetes-related cardiovascular heart disease and nephropathy "
        "using real patient data. Applied SMOTE, PCA, and LDA, improving model performance by 20%.",
        "Built a cross-platform mobile app using React Native, integrated with Python-based ML models via REST APIs, "
        "enabling real-time predictions for patients and healthcare providers.",
    ]:
        pdf.bullet(b)
    pdf.ln(1)

    # EV3
    pdf.entry_header("EV3 AutoDrive - Autonomous Robot Prototype", "Aug 2023 - Dec 2023")
    pdf.entry_subtitle("Ashesi University  |  Lego EV3, Computer Vision, MQTT, ROS 2")
    pdf.ln(1)
    pdf.bullet(
        "Built autonomous robotic car with computer vision integration, implementing MQTT for real-time "
        "communication and hybrid navigation architecture for obstacle avoidance and path planning."
    )
    pdf.ln(1)

    # Campus Connect
    pdf.entry_header("Campus Connect Web Application", "Jan 2023 - May 2023")
    pdf.entry_subtitle("React, Express.js, MongoDB, Google OAuth")
    pdf.ln(1)
    for b in [
        "Developed full-stack web application with CI/CD pipeline serving 1000+ student users. Integrated Google "
        "OAuth and WebPurify for content filtering. Served as Agile lead, reducing feature turnaround time by 25%.",
    ]:
        pdf.bullet(b)
    pdf.ln(1)

    # Election REST API
    pdf.entry_header("Election REST API - Campus Voting Backend", "2023")
    pdf.entry_subtitle("Python, Flask, REST API")
    pdf.ln(1)
    pdf.bullet(
        "Designed and built a RESTful backend for a campus electronic voting system, implementing voter "
        "authentication, candidate management, and real-time vote tallying with double-vote prevention."
    )

    # ── TECHNICAL SKILLS ─────────────────────────────────────────
    pdf.section_title("Technical Skills")

    pdf.skill_row("Languages",
        "TypeScript, Python, JavaScript, Java, C++, R, PHP")
    pdf.skill_row("Frontend",
        "React.js, Next.js, React Native, Tailwind CSS, HTML5, CSS3, Framer Motion, OAuth 2.0")
    pdf.skill_row("Backend",
        "Django, Django REST Framework, Flask, Node.js, Express.js, REST API Design, JWT, Swagger/OpenAPI")
    pdf.skill_row("Cloud Platforms",
        "AWS (EC2, Lambda, SES, CodePipeline, CloudWatch, ALB/NLB, S3, IAM, DynamoDB), "
        "Azure (VMs, App Services, AKS, Azure DevOps, Azure Monitor, Log Analytics)")
    pdf.skill_row("DevOps & CI/CD",
        "Azure DevOps, GitHub Actions, Jenkins, Docker, Kubernetes (AKS), Terraform, Ansible, Git, Linux (Ubuntu, RHEL)")
    pdf.skill_row("Databases",
        "PostgreSQL, MongoDB, MySQL, Redis, SQLite")
    pdf.skill_row("Monitoring",
        "Azure Monitor, Log Analytics, KQL, CloudWatch, Prometheus, Grafana")
    pdf.skill_row("AI Integration",
        "LLM API Integration, Prompt Engineering, Machine Learning, NLP, Gemini AI")
    pdf.skill_row("Other",
        "ROS 2, MQTT, Infrastructure-as-Code (IaC), PowerShell, Bash, Shell Scripting")

    # ── OUTPUT ───────────────────────────────────────────────────
    output_path = "public/Mubasir_Halidu_CV.pdf"
    pdf.output(output_path)
    print(f"CV generated: {output_path}")


if __name__ == "__main__":
    build()
