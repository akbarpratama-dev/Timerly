# Timerly - Neo-Brutalist Focus Trainer

> Implementation Roadmap & Task List

## 🛠 Tech Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Motion:** Framer Motion
- **Icons:** Lucide React
- **Data:** LocalStorage API

---

## 🎨 Design System Rules (Strict Enforcement)

These rules must be applied to all components:

1.  **Borders:** 3px solid black (`border-3 border-black`) on containers, inputs, buttons.
2.  **Radius:** 0px everywhere (`rounded-none`). No pill shapes.
3.  **Shadows:** Hard shadow only (`box-shadow: 6px 6px 0px 0px #000000`). No blur.
4.  **Fonts:**
    - Headings: **Sora** (ExtraBold, Uppercase).
    - Body/Numbers: **IBM Plex Mono** (Monospace).
5.  **Colors:**
    - `bg-main`: #F8F9EB (Off-white canvas)
    - `primary`: #FFD84D (Vibrant Yellow)
    - `accent`: #FF4D4D (Red - Error/Overtime)
    - `text`: #000000 (Black)

---

## 📝 Implementation Tasks

### Phase 1: Project Setup & Configuration

- [ ] Initialize Vite project with React + TypeScript.
- [ ] Install dependencies: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
- [ ] Configure **Tailwind CSS (`tailwind.config.js`)**:
  - [ ] Add custom colors (`main`, `primary`, `accent`).
  - [ ] Add custom box-shadow (`neo`: '6px 6px 0px 0px #000000').
  - [ ] Add custom border width (`3`: '3px').
  - [ ] Add font families (Sora & IBM Plex Mono via Google Fonts).
- [ ] Set global body styles (Background `#F8F9EB`, Text `#000000`).

### Phase 2: Core UI Components (The "Neo-Brutal" Kit)

Build these flexible components first to ensure consistency.

- [ ] **`NeoCard` Component:**
  - White background, 3px border, Hard Shadow.
  - Props for full width or centered.
- [ ] **`NeoButton` Component:**
  - Variants: `primary` (Yellow), `danger` (Red), `outline` (White).
  - Interaction: `active:translate-x-[2px] active:translate-y-[2px] active:shadow-none` (Press effect).
- [ ] **`NeoInput` Component:**
  - Rectangle, 3px border.
  - Focus state: Background turns `#FFD84D` (Yellow).
  - Monospace font for input text.

### Phase 3: Logic & State Management

- [ ] Create `useTimerSession` hook or Context:
  - [ ] State: `config` (totalQuestions, durationPerQuestion).
  - [ ] State: `currentQuestionIndex`.
  - [ ] State: `results` (Array of objects: `{ questionId, timeSpent, isOvertime }`).
  - [ ] State: `appState` ('welcome', 'practice', 'summary').
  - [ ] Function: `startSession(config)`.
  - [ ] Function: `recordAnswer(time)` and advance to next.
  - [ ] Function: `finishSession()` and save to LocalStorage.

### Phase 4: Screen Implementation

#### 4.1 Welcome Screen (Configuration)

- [ ] **Hero Section:**
  - Left: Giant "TIMERLY" title (Sora), Subtext, Main CTA.
  - Right: Decorative Neo-Brutalist Illustration placeholder.
- [ ] **Config Form:**
  - Inputs for `Question Count` and `Duration (min)`.
  - Validation: Prevent empty or zero values.
  - Start Button triggers `practice` mode.

#### 4.2 Practice Mode (The Timer Engine)

- [ ] **Layout:** Minimalist, center focus.
- [ ] **Timer Logic:**
  - [ ] Countdown functionality.
  - [ ] **Warning State:** Text turns Orange/Red when < 10s.
  - [ ] **Overtime Logic:** When 00:00 is reached, timer starts counting UP (negative) and turns solid Red (`#FF4D4D`).
  - [ ] Use `tabular-nums` CSS feature to prevent number jitter.
- [ ] **Controls:**
  - "Done/Next" Button.
  - Progress Indicator ("Soal 1 / 10").

#### 4.3 Summary Screen (Dashboard)

- [ ] **Stats Cards:**
  - Total Session Duration.
  - Average Time per Question.
- [ ] **Detail List:**
  - Scrollable list of all questions.
  - Highlight rows that exceeded duration in Red.
- [ ] **Action:** "Start New Session" (Resets state).

### Phase 5: Motion & Polish

- [ ] Add **Page Transitions**:
  - Use `<AnimatePresence>` for switching between Welcome -> Practice -> Summary.
- [ ] Add **Question Transitions**:
  - Slide Out Left / Slide In Right effect when moving between questions.
- [ ] **Responsive Check:**
  - Ensure Hero stacks vertically on mobile.
  - Ensure Touch targets are large enough (min 44px).

---

## ✅ Definition of Done

1. App follows strict Neo-Brutalism (No border-radius, hard shadows).
2. Timer works accurately (Countdown & Overtime).
3. Session data persists in LocalStorage (optional but good for history).
4. No console errors.
5. Lighthouse Accessibility score > 90.
