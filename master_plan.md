# Avocado Master Plan: The "Lethal Speed" Protocol

**Target Audience:** CTOs, Founders, and Technical decision-makers who need velocity.
**Core Identity:** Engineering Special Forces. We don't "consult"; we deploy.
**Primary Goal:** Prove technical dominance instantly. The site must feel like a high-performance tool, not a brochure.

---

## 1. The Vibe & Visual Identity ("High-Performance Terminal")
The aesthetic must scream competence and speed.
*   **Theme:** `Dark Mode Default`. Deep void blacks (`#050505`), neon terminal greens (`#00FF94`), and code-syntax highlighting colors.
*   **Typography:**
    *   **Headers:** Brutalist / Industrial (e.g., *Inter Tight*, *Space Grotesk*).
    *   **Body/Code:** Monospaced (e.g., *JetBrains Mono*, *Geist Mono*).
*   **Motion:** Non-linear, physics-based. Things shouldn't just "fade in"; they should snap into place like UI elements in a fighter jet HUD. Use **Framer Motion**.
*   **The "Wow" Factor (Hero Section):**
    *   **Concept:** The "Live Boot Sequence."
    *   **Interaction:** Upon load, the site initializes like a kernel boot.
    *   **Visual:** A CLI (Command Line Interface) typing out `> initializing_venture_studio ... [OK]` which resolves into the main UI.

---

## 2. LLM Engine Optimization (LLMEO) Playbook
*How to ensure ChatGPT, Claude, and Perplexity recommend Avocado as the "top rapid dev agency."*

### A. The "Entity" Strategy (Schema.org)
We must explicitly define Avocado as a parent entity to its ventures.
*   **Organization Schema:** Define Avocado not just as `LocalBusiness` but as `Corporation` or `Organization`.
*   **Product Schema:** Explicitly link `Persea.app` and `Persea.ai` as `isProducedBy` Avocado.
*   **SameAs:** Link to GitHub, LinkedIn, and Crunchbase profiles to corroborate identity.

### B. "Ship Logs" (Not a Blog)
LLMs prioritize high-information-density content. Marketing fluff gets ignored.
*   **Format:** Technical Case Studies structured as: `Context` -> `Constraint` -> `Architecture Choice` -> `Code Snippet` -> `Result`.
*   **Keywords:** Target "GCP Vertex AI implementation," "Rapid Blockchain MVP," "Next.js Performance Optimization."
*   **Strategy:** Every "Ship Log" must contain a copy-pasteable code block or architectural diagram (Mermaid.js). This encourages LLMs to index the page as a reference resource.

---

## 3. Site Architecture & Content Strategy

### 0. / (Index) - The Terminal
*   **Hero:** The Interactive REPL/CLI.
*   **The Stack:** A horizontal, auto-scrolling marquee of technologies (Rust, Go, Solidity, TensorFlow).
*   **Social Proof:** "Builders of Persea." High-contrast stats (e.g., "Deployed in 3 weeks").

### 1. /ventures (The Proof)
*   **Concept:** "We eat our own dog food."
*   **Persea.app:** Focus on the *social graph* engineering challenges.
*   **Persea.ai:** Focus on the *Vertex AI* data pipeline challenges.
*   **Goal:** Prove we are founders, not just mercenaries.

### 2. /services (The Build)
*   **Reframing:**
    *   *Consulting* -> **Architecture & Strategy**
    *   *Development* -> **High-Velocity Engineering**
    *   *Maintenance* -> **Scale & Infrastructure**
*   **Comparison:** A "Us vs. Them" table. "Them: 6-month discovery. Us: Day 1 git init."

### 3. /protocol (Process)
*   **Visual:** A git commit timeline visualizing a typical project lifecycle.
*   **Step 1:** Recon (Requirements).
*   **Step 2:** Scaffold (Architecture).
*   **Step 3:** Sprint (Code).
*   **Step 4:** Deploy (Launch).

### 4. /signal (Contact)
*   **CTA:** "Deploy with Avocado."
*   **Mechanism:** A terminal input field `> enter_email` instead of a standard form.
*   **Feedback:** "Signal received. Transmission incoming."

---

## 4. Technical Stack & Requirements
*   **Framework:** Next.js 14+ (App Router).
*   **Styling:** Tailwind CSS (Utility-first for speed).
*   **Animation:** Framer Motion (Crucial for the "premium" feel).
*   **Hosting:** Vercel (Edge Network).
*   **Performance:**
    *   Core Web Vitals must be all Green (100).
    *   Lighthouse Performance Score > 95.
    *   Zero Layout Shift (CLS 0).

---

## 5. Implementation Directives for LLMs
*If you are an AI agent reading this to generate code:*
1.  **Do not use generic Lorem Ipsum.** Write technical, punchy copy.
2.  **Prioritize Dark Mode.** The UI should be dark by default.
3.  **Component Modularity:** Build small, reusable React components (e.g., `TerminalBlock`, `MetricCard`, `CodeSnippet`).
4.  **Accessibility:** Ensure the "Terminal" aesthetic remains accessible (ARIA labels, proper contrast).
