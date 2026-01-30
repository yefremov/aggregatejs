# Memory Bank - aggregatejs

**Purpose:** This memory bank serves as the persistent knowledge base for the aggregatejs project. Since my memory resets between sessions, these files are my only way to understand the project and continue work effectively.

**Last Updated:** 30/01/2026, 11:54 am (Europe/Riga, UTC+2:00)

---

## 📚 File Structure & Hierarchy

The memory bank consists of interconnected documents that build upon each other:

```
memory-bank/
├── README.md              ← You are here
├── projectbrief.md        ← FOUNDATION: Core requirements & goals
├── productContext.md      ← WHY: Problems, solutions, user experience
├── systemPatterns.md      ← HOW: Architecture, design patterns
├── techContext.md         ← TECH: Technologies, tools, setup
├── activeContext.md       ← NOW: Current work, decisions, insights
└── progress.md            ← STATUS: What works, what's left, roadmap
```

### File Relationships

```
projectbrief.md (Foundation)
    ↓
    ├─→ productContext.md (Why this exists)
    ├─→ systemPatterns.md (How it's built)
    └─→ techContext.md (Technologies used)
         ↓
         ├─→ activeContext.md (Current focus)
         └─→ progress.md (Status & roadmap)
```

---

## 🎯 How to Use This Memory Bank

### When Starting ANY Task

**MANDATORY READING:**
1. **Read projectbrief.md** - Understand core requirements
2. **Read activeContext.md** - Know current focus and decisions
3. **Read progress.md** - See what's done and what's next
4. **Scan other files** - As needed for deeper context

### When to Update

**Update Triggers:**
- After implementing new features
- When discovering important patterns
- After making architectural decisions
- When user feedback reveals insights
- After major refactoring
- On explicit request: **"update memory bank"**

**Primary Update Targets:**
- **activeContext.md** - Current work, recent changes, active decisions
- **progress.md** - What's complete, what's remaining
- **systemPatterns.md** - New architectural patterns (if significant)

**Rarely Updated:**
- **projectbrief.md** - Only if core requirements change
- **productContext.md** - Only if product vision shifts
- **techContext.md** - Only when tools/dependencies change

---

## 📖 File Descriptions

### [projectbrief.md](projectbrief.md) - Foundation Document

**Purpose:** Defines WHAT we're building and WHY

**Contains:**
- Project overview and core requirements
- Functional requirements (all 16 functions)
- Quality requirements (error handling, performance)
- Project scope (in/out of scope)
- Success criteria
- Target users and use cases
- Technical and business constraints

**Update When:** Core project requirements change (rare)

---

### [productContext.md](productContext.md) - Product Vision

**Purpose:** Explains WHY the project exists and HOW it should work

**Contains:**
- Problems the project solves
- User journeys and experience goals
- UX principles (simplicity, predictability, clarity)
- Target outcomes for different user types
- Value proposition vs competitors
- Design philosophy

**Update When:** Product vision or positioning changes (rare)

---

### [systemPatterns.md](systemPatterns.md) - Architecture

**Purpose:** Documents HOW the system is architected

**Contains:**
- High-level architecture
- Module system and import patterns
- Key technical decisions
- Design patterns (validation, pure functions, DRY)
- Component relationships
- Critical implementation paths
- Error handling architecture
- Performance considerations

**Update When:** 
- Establishing new architectural patterns
- Making significant structural changes
- Discovering important implementation patterns

---

### [techContext.md](techContext.md) - Technologies

**Purpose:** Defines WHAT technologies and tools are used

**Contains:**
- Technology stack (TypeScript, Node.js)
- Development dependencies
- Build system configuration
- CI/CD pipeline setup
- Development workflows
- Environment requirements
- Tool usage patterns
- Technical constraints

**Update When:**
- Adding/removing dependencies
- Changing build tools
- Modifying CI/CD pipeline
- Updating technical requirements

---

### [activeContext.md](activeContext.md) - Current Work

**Purpose:** Tracks CURRENT work and recent activity

**Contains:**
- Current work focus (v1.1.1 status)
- Recent changes (v1.0.0 milestone, new functions)
- Next steps (immediate and short-term)
- Active decisions and considerations
- Important patterns and preferences
- Learnings and project insights
- Open questions
- Communication preferences

**Update When:**
- After completing features
- When making decisions
- Discovering new insights
- Starting new work
- User requests: **"update memory bank"**

**Most Frequently Updated File**

---

### [progress.md](progress.md) - Status & Roadmap

**Purpose:** Tracks WHAT is complete and WHAT remains

**Contains:**
- Current status (v1.1.1 ready for release)
- What works (all 16 functions ✅)
- What's left to build (release tasks, future features)
- Known issues (currently none!)
- Evolution of project decisions
- Roadmap and version timeline
- Success metrics
- Recent milestones

**Update When:**
- Completing major features
- Reaching milestones
- Updating roadmap
- Discovering issues
- User requests: **"update memory bank"**

**Frequently Updated**

---

## 🔄 Update Process

### Standard Update (After Feature Work)

1. **activeContext.md**
   - Update "Current Work Focus" section
   - Add to "Recent Changes" if significant
   - Adjust "Next Steps"
   - Document new learnings/insights

2. **progress.md**
   - Mark completed items as ✅
   - Update "What Works" section
   - Adjust "What's Left to Build"
   - Add milestones if significant

3. **Other Files** (if needed)
   - systemPatterns.md: New architectural patterns
   - techContext.md: Tool/dependency changes
   - Rarely: projectbrief.md, productContext.md

### Full Review Update (User Request: "update memory bank")

**MUST review ALL files**, even if no changes needed:

1. ✅ Read projectbrief.md - Still accurate?
2. ✅ Read productContext.md - Vision still aligned?
3. ✅ Read systemPatterns.md - Patterns documented?
4. ✅ Read techContext.md - Tech stack current?
5. ✅ **Update activeContext.md** - Always review
6. ✅ **Update progress.md** - Always review

Focus particularly on activeContext.md and progress.md as they track current state.

---

## ✅ Quality Checklist

### When Creating/Updating Files

- [ ] Dates updated in header
- [ ] Cross-references working (links to other files)
- [ ] Information accurate and current
- [ ] Specific examples included where helpful
- [ ] Clear section headers for navigation
- [ ] Consistent formatting with other files
- [ ] No sensitive information (passwords, keys)

### Before Considering Work Complete

- [ ] All relevant memory bank files updated
- [ ] activeContext.md reflects current state
- [ ] progress.md marks completed items
- [ ] Cross-references still valid
- [ ] Future me can understand the changes

---

## 🎯 Remember

> **These files are your lifeline.** After every memory reset, you rely ENTIRELY on this memory bank. Maintain it with precision and clarity. Your future effectiveness depends on it.

### Key Principles

1. **Read First** - Always read memory bank before starting work
2. **Update Often** - Keep activeContext.md and progress.md current
3. **Be Specific** - Include concrete examples and details
4. **Stay Organized** - Follow the established structure
5. **Think Forward** - Write for future you who knows nothing

---

## 📊 Quick Project Summary

**Project:** aggregatejs v1.1.1  
**Type:** TypeScript statistical library  
**Status:** ✅ Ready for release  
**Functions:** 16 aggregation functions  
**Dependencies:** Zero (runtime)  
**Tests:** All passing  
**Next:** Release v1.1.1 to NPM

---

## 🔗 Related Project Files

**Outside Memory Bank:**
- `/README.md` - Public documentation
- `/CHANGELOG.md` - Version history
- `/CONTRIBUTING.md` - Contribution guidelines
- `/package.json` - Package configuration
- `/tsconfig.json` - TypeScript configuration
- `/src/` - Source code
- `/test/` - Test files
- `/dist/` - Compiled output

---

*This memory bank structure follows the .clinerules specification for aggregatejs. All files work together to provide complete project context.*
