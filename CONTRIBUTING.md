# Contributing to Unhallowed Metropolis for Foundry VTT

Thank you for your interest in contributing to the Unhallowed Metropolis system! This document provides guidelines and information for contributors.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Repository Structure](#repository-structure)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Submitting Changes](#submitting-changes)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Questions?](#questions)

---

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment. Please:

- Be respectful and constructive in discussions
- Welcome newcomers and help them get started
- Focus on what is best for the community
- Show empathy towards other community members

---

## Repository Structure

This project uses two repositories:

### Development Repository
**https://github.com/Odinn-1982/RNK**

This is where all development happens. Submit pull requests and issues here.

### Release Repository
**https://github.com/Odinn-1982/RNK-release** (You are here)

This repository contains only release builds. Do not submit pull requests to this repository.

---

## How to Contribute

### Reporting Bugs

1. **Check existing issues** — Search the [Issues](https://github.com/Odinn-1982/RNK/issues) page to see if the bug has been reported
2. **Create a new issue** — If not found, create a new issue with:
   - Clear, descriptive title
   - Foundry VTT version
   - System version
   - Browser and version
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Console errors (press F12)
   - Screenshots if applicable

### Suggesting Features

1. **Check existing suggestions** — Search issues for similar feature requests
2. **Create a feature request** — Include:
   - Clear description of the feature
   - Use case / why it's needed
   - Possible implementation approach
   - Any mockups or examples

### Submitting Code

1. **Fork the development repository** (RNK, not RNK-release)
2. **Create a feature branch** from `main`
3. **Make your changes** following our coding standards
4. **Test thoroughly** in Foundry VTT
5. **Submit a pull request** with a clear description

### Compendium Contributions

Want to add content to the compendiums?

- **Official Content** — Must match the published Unhallowed Metropolis books exactly
- **Homebrew Content** — Goes in the Homebrew Content pack, clearly marked as unofficial

---

## Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- [Foundry VTT](https://foundryvtt.com/) (licensed copy)
- A code editor (VS Code recommended)

### Getting Started

1. **Fork the repository**
   ```bash
   # Fork https://github.com/Odinn-1982/RNK on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/RNK.git
   cd RNK
   ```

3. **Link to Foundry VTT**
   
   Create a symbolic link from the project folder to your Foundry VTT systems folder:
   
   **Windows (PowerShell as Admin):**
   ```powershell
   New-Item -ItemType SymbolicLink -Path "C:\Users\YOUR_USER\AppData\Local\FoundryVTT\Data\systems\unhallowed-metropolis" -Target "C:\path\to\RNK"
   ```
   
   **macOS/Linux:**
   ```bash
   ln -s /path/to/RNK ~/foundrydata/Data/systems/unhallowed-metropolis
   ```

4. **Start developing**
   - Launch Foundry VTT
   - Create a test world with the system
   - Make changes and refresh Foundry to see them

### Project Structure

```
RNK/
├── actors/           # Actor document classes
├── apps/             # Application windows (hubs, dialogs)
├── assets/           # Images, textures, icons
├── combat/           # Combat system extensions
├── dialogs/          # Dialog classes
├── items/            # Item document classes
├── lang/             # Localization files
├── packs/            # Compendium data (LevelDB)
├── systems/          # Sub-systems (corruption, wealth, etc.)
├── templates/        # Handlebars templates
│   ├── actors/       # Actor sheet templates
│   ├── apps/         # Application templates
│   ├── chat/         # Chat card templates
│   ├── dialogs/      # Dialog templates
│   └── items/        # Item sheet templates
├── system.json       # System manifest
├── template.json     # Data model definitions
├── unhallowed-metropolis.js    # Main entry point
└── unhallowed-metropolis.css   # Styles
```

---

## Submitting Changes

### Pull Request Process

1. **Update documentation** if your change affects usage
2. **Update the changelog** with your changes
3. **Ensure no lint errors** in your code
4. **Test in Foundry VTT** with a fresh world
5. **Write a clear PR description** explaining:
   - What the change does
   - Why it's needed
   - How to test it

### Commit Messages

Use clear, descriptive commit messages:

```
feat: Add ammunition tracking to weapon sheets
fix: Correct initiative calculation for NPCs
docs: Update installation instructions
style: Format character sheet CSS
refactor: Simplify roll dialog logic
```

Prefixes:
- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation only
- `style:` — Formatting, no code change
- `refactor:` — Code restructuring
- `test:` — Adding tests
- `chore:` — Maintenance tasks

---

## Coding Standards

### JavaScript

- Use ES6+ features (classes, arrow functions, template literals)
- Use meaningful variable and function names
- Add JSDoc comments for functions
- Keep functions small and focused

```javascript
/**
 * Calculate the character's corruption threshold.
 * @param {Actor} actor - The actor document
 * @returns {number} The corruption threshold value
 */
function calculateCorruptionThreshold(actor) {
  const will = actor.system.attributes.will.value;
  return will * 2;
}
```

### CSS

- Use the `um-` prefix for all class names
- Follow BEM naming convention where appropriate
- Group related styles together
- Add comments for complex selectors

```css
/* Character Sheet - Header Section */
.um-character-sheet .sheet-header {
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
}

.um-character-sheet .profile-img {
  width: 100px;
  height: 100px;
  border: 2px solid var(--um-border-color);
}
```

### Handlebars Templates

- Use proper indentation (2 spaces)
- Add comments for complex sections
- Use localization for all user-visible text

```handlebars
{{!-- Attributes Section --}}
<div class="attributes-grid">
  {{#each attributes as |attr|}}
    <div class="attribute-row">
      <span class="label">{{localize attr.label}}</span>
      <span class="value">{{attr.value}}</span>
    </div>
  {{/each}}
</div>
```

---

## Testing

### Manual Testing Checklist

Before submitting a PR, test the following:

- [ ] Create a new character and fill all fields
- [ ] Create an NPC and creature
- [ ] Make attribute and skill rolls
- [ ] Add items from compendiums
- [ ] Test corruption tracking
- [ ] Test combat functionality
- [ ] Check all tabs on character sheet
- [ ] Verify localization strings display correctly
- [ ] Test in a fresh world with no modules

### Browser Testing

Test in at least:
- Chrome (latest)
- Firefox (latest)

---

## Documentation

When adding new features, please update:

1. **README.md** — If it affects installation or basic usage
2. **CHANGELOG.md** — Add entry under "Unreleased" section
3. **Code comments** — JSDoc for functions, inline for complex logic
4. **lang/en.json** — Add any new localization strings

---

## Questions?

- **Development questions** — Open a Discussion on GitHub
- **Bug reports** — Open an Issue
- **Feature requests** — Open an Issue with the "enhancement" label

---

## Recognition

Contributors will be recognized in:
- The project README
- Release notes when their changes are included

Thank you for helping improve Unhallowed Metropolis for Foundry VTT!

---

*"In the shadow of the plague walls, we build something new."*
