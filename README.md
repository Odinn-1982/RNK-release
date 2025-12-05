# Unhallowed Metropolis for Foundry VTT

![Foundry v13](https://img.shields.io/badge/Foundry-v13-informational)
![Version](https://img.shields.io/badge/Version-0.3.12-blue)
![License](https://img.shields.io/badge/License-MIT-green)

> *"The dead walk, and the living hide behind walls of brass and steel."*

A comprehensive Foundry VTT system for **Unhallowed Metropolis** — a gas-mask chic roleplaying game set in a Neo-Victorian world overrun by the risen dead.

---

## 📖 Table of Contents

- [Features](#-features)
- [Screenshots](#-screenshots)
- [Installation](#-installation)
- [Quick Start Guide](#-quick-start-guide)
- [Character Creation](#-character-creation)
- [Game Mechanics](#-game-mechanics)
- [Compendium Packs](#-compendium-packs)
- [GM Tools](#-gm-tools)
- [System Settings](#-system-settings)
- [Compatibility](#-compatibility)
- [Support & Contributing](#-support--contributing)
- [Credits](#-credits)
- [License](#-license)

---

## ✨ Features

### Character Management
- **Full Character Sheets** — Beautiful, thematic character sheets with all attributes, skills, and derived statistics
- **Dot-Based Attribute System** — Click-to-fill attribute and skill dots (1-5 scale)
- **Automatic Calculations** — Derived stats (Health, Mental Health, Initiative, Actions, Movement) auto-calculate
- **Social Class System** — Track your character's place in Neo-Victorian society
- **Calling Support** — All official callings including Aristocrat, Criminal, Deathwatch Soldier, Dhampir, Doctor, Medium, Mourner, Promethean, Undertaker, and more

### Combat System
- **Weapon Management** — Full support for melee, ranged, and thrown weapons
- **Armor Tracking** — Location-based armor with coverage tracking
- **Hit Location System** — Head, Torso, Arms, and Legs with individual tracking
- **Damage Types** — Bashing, Lethal, and Aggravated damage
- **Initiative Tracking** — Automatic initiative calculation and combat order

### Corruption & Mental Health
- **Dual Corruption Tracking** — Physical and Mental corruption meters
- **Affliction System** — Minor, Moderate, and Severe afflictions
- **Disorder Tracking** — Mental disorders with severity levels
- **Corruption Threshold Warnings** — Automatic alerts when thresholds are exceeded
- **Desire & Drive** — Track character motivations

### Psychic Powers
- **Full Devotion Support** — Empathy, Magnetism, Necromancy, Clairvoyance, Psychokinesis, Telepathy
- **Power Levels** — Track power progression
- **Instability Costs** — Automatic instability tracking
- **Trigger Types** — Passive, Instant, Maintained, and Ritual powers

### Rolling System
- **Integrated Dice Roller** — Click attributes and skills to roll
- **Target Number Selection** — Easy difficulty selection (Very Easy to Extreme)
- **Degrees of Success** — Automatic calculation of success/failure degrees
- **Critical Results** — Critical success and failure detection
- **Specialization Support** — Apply skill specializations to rolls

### Actor Types
- **Characters** — Full player character sheets
- **NPCs** — Streamlined NPC sheets for quick reference
- **Creatures** — Special sheets for animates, vampires, and other horrors

### GM Tools
- **GM Hub** — Centralized game master control panel
- **PC Hub** — Quick access to player character management
- **Combat Hub** — Manage encounters efficiently
- **Corruption Hub** — Track party corruption levels
- **Wealth Hub** — Neo-Victorian currency management (Pounds, Shillings, Pence)
- **Psychic Hub** — Manage psychic characters and their powers

---

## 📸 Screenshots

> **Note:** Add your screenshots to the `assets/screenshots/` folder and update the paths below.

### Character Sheet
The main character sheet features a dark, Neo-Victorian aesthetic with easy-to-read sections for all character data.

```
📁 assets/screenshots/character-sheet.png
```

<!-- ![Character Sheet](assets/screenshots/character-sheet.png) -->

### Skills Tab
Organized by governing attribute, skills are displayed with clickable dots and roll buttons.

```
📁 assets/screenshots/skills-tab.png
```

<!-- ![Skills Tab](assets/screenshots/skills-tab.png) -->

### Combat Tab
Manage weapons and armor with detailed statistics and quick-roll buttons.

```
📁 assets/screenshots/combat-tab.png
```

<!-- ![Combat Tab](assets/screenshots/combat-tab.png) -->

### Corruption Tab
Track the slow descent into darkness with physical and mental corruption meters.

```
📁 assets/screenshots/corruption-tab.png
```

<!-- ![Corruption Tab](assets/screenshots/corruption-tab.png) -->

### GM Hub
The Game Master's command center for managing the entire game.

```
📁 assets/screenshots/gm-hub.png
```

<!-- ![GM Hub](assets/screenshots/gm-hub.png) -->

### Roll Dialog
Intuitive roll dialog with modifier support and target number selection.

```
📁 assets/screenshots/roll-dialog.png
```

<!-- ![Roll Dialog](assets/screenshots/roll-dialog.png) -->

---

## 📥 Installation

### Method 1: Foundry VTT Package Manager (Recommended)

1. Open Foundry VTT
2. Navigate to **Game Systems** tab
3. Click **Install System**
4. Search for "**Unhallowed Metropolis**"
5. Click **Install**

### Method 2: Manifest URL

1. Open Foundry VTT
2. Navigate to **Game Systems** tab
3. Click **Install System**
4. Paste the following URL in the **Manifest URL** field:
   ```
   https://raw.githubusercontent.com/Odinn-1982/RNK-release/main/system.json
   ```
5. Click **Install**

### Method 3: Manual Installation

1. Download the latest release from the [Releases](https://github.com/Odinn-1982/RNK-release/releases) page
2. Extract the zip file
3. Place the extracted folder in your Foundry VTT `Data/systems/` directory
4. Restart Foundry VTT

---

## 🚀 Quick Start Guide

### Creating Your First World

1. Launch Foundry VTT
2. Click **Create World**
3. Select **Unhallowed Metropolis** as the Game System
4. Name your world and click **Create World**
5. Launch the world

### Your First Session

1. **Import Compendiums** — Right-click on compendium packs to import weapons, armor, callings, and more
2. **Create Characters** — Click the Actors tab and create new characters
3. **Assign Callings** — Drag callings from the compendium to character sheets
4. **Equip Gear** — Drag weapons and armor to the Combat tab
5. **Start Playing!**

---

## 👤 Character Creation

### Step 1: Basic Information
- Enter character name
- Select a **Calling** (profession/archetype)
- Choose **Social Class** (Gutter to Aristocracy)

### Step 2: Attributes
Set your six core attributes (1-5 dots each):
| Attribute | Abbr | Description |
|-----------|------|-------------|
| **Vitality** | VIT | Physical health and resilience |
| **Coordination** | CRD | Agility, reflexes, and fine motor control |
| **Wit** | WIT | Perception and quick thinking |
| **Intellect** | INT | Knowledge and reasoning |
| **Will** | WIL | Mental fortitude and determination |
| **Charm** | CHM | Social presence and persuasiveness |

### Step 3: Skills
Distribute points among skills, organized by governing attribute:
- **Vitality Skills:** Athletics, Brawl, Endurance
- **Coordination Skills:** Drive, Firearms, Larceny, Melee, Stealth
- **Wit Skills:** Animal Handling, Awareness, Empathy, Gambling
- **Intellect Skills:** Academics, Bureaucracy, Criminology, Demolitions, Engineering, Medicine, Occult, Politics, Science, Survival
- **Will Skills:** Concentration, Intimidation, Meditation
- **Charm Skills:** Artistry, Etiquette, Expression, Leadership, Negotiation, Seduction, Streetwise, Subterfuge

### Step 4: Derived Statistics
These calculate automatically:
- **Health** = Vitality × 2
- **Mental Health** = Will × 2
- **Initiative** = Wit + Coordination
- **Actions** = Based on Coordination
- **Movement** = Based on Vitality
- **Corruption Threshold** = Will-based

### Step 5: Equipment & Background
- Add weapons, armor, and equipment from compendiums
- Fill in biography details (age, gender, birthplace, appearance, background)
- Set Desire and Drive for corruption tracking

---

## 🎲 Game Mechanics

### Making Rolls
1. **Click** any attribute or skill to initiate a roll
2. **Select** the target number (difficulty)
3. **Apply** any modifiers
4. **Roll!**

### Target Numbers
| Difficulty | Target Number |
|------------|---------------|
| Very Easy | 3 |
| Easy | 5 |
| Average | 7 |
| Challenging | 9 |
| Difficult | 11 |
| Extreme | 13 |

### Success & Failure
- **Success:** Roll ≥ Target Number
- **Failure:** Roll < Target Number
- **Exceptional Success:** Exceed target by 5+
- **Critical Success:** Natural maximum (based on dice pool)
- **Critical Failure:** Natural 1s

### Damage Types
| Type | Description |
|------|-------------|
| **Bashing** | Non-lethal damage (fists, clubs) |
| **Lethal** | Killing damage (blades, bullets) |
| **Aggravated** | Supernatural damage (fire, vampire bites) |

### Hit Locations
Combat can target specific body locations:
- Head
- Torso
- Right/Left Arm
- Right/Left Leg

---

## 📚 Compendium Packs

The system includes extensive compendium content:

### Items
| Pack | Contents |
|------|----------|
| **Weapons** | Melee, ranged, and thrown weapons |
| **Armor** | Protective gear with location coverage |
| **Equipment & Gear** | General adventuring equipment |
| **Callings** | Character professions and archetypes |
| **Qualities** | Positive character traits |
| **Impediments** | Negative character traits |
| **Afflictions & Disorders** | Corruption effects |
| **Psychic Powers & Devotions** | Supernatural abilities |
| **Skills** | Reference for all skills |
| **Exorcist Features** | Exorcist calling abilities |
| **Medium Stunts** | Medium calling abilities |
| **Psychic Stunts** | Psychic abilities |
| **Basic Items** | Common starting items |

### Actors
| Pack | Contents |
|------|----------|
| **Creatures & NPCs** | Zombies, vampires, and other threats |
| **Named NPCs (Rogues Gallery)** | Pre-built named characters |
| **NPC Templates (Nameless Masses)** | Generic NPC templates |

### Other
| Pack | Contents |
|------|----------|
| **UM Macros** | Useful macros for common actions |
| **World Lore & Setting** | Journal entries with setting information |
| **Homebrew Content** | Custom community content |

---

## 🎮 GM Tools

### GM Hub
Access the GM Hub via the scene controls or keybinding. Features include:
- Party overview
- Quick NPC spawning
- Corruption tracking
- Combat management

### Keybindings
Configure keybindings in Foundry's settings:
- **Open GM Hub** — Quick access to GM controls

### Context Menu
Right-click on tokens for quick access to:
- PC Hub for player characters
- Quick stat adjustments
- Corruption modifications

---

## ⚙️ System Settings

Access via **Game Settings → Configure Settings → System Settings**

| Setting | Description |
|---------|-------------|
| **Automatic Corruption Tracking** | Warns when corruption thresholds are exceeded |
| **Calculate Degrees of Success** | Automatically shows success/failure margins |

---

## 🔧 Compatibility

- **Foundry VTT:** Version 13.0.0+ (Verified: 13.0.0)
- **Browsers:** Chrome, Firefox, Edge (latest versions)

### Recommended Modules
While the system works standalone, these modules enhance the experience:
- **Dice So Nice!** — 3D dice rolling
- **PopOut!** — Pop character sheets into separate windows
- **Token Action HUD** — Quick action buttons on tokens

---

## 🤝 Support & Contributing

### Getting Help
- **Issues:** Report bugs on the [GitHub Issues](https://github.com/Odinn-1982/RNK/issues) page
- **Discussions:** Join the conversation on GitHub Discussions

### Contributing
We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Repository
The main development repository is at: https://github.com/Odinn-1982/RNK

This repository (`RNK-release`) contains only release builds.

---

## 🙏 Credits

### System Development
- **Odinn** — Lead Developer

### Unhallowed Metropolis
Unhallowed Metropolis is a tabletop roleplaying game published by Atomic Overmind Press. This Foundry VTT system is an unofficial, fan-made implementation.

- **Game Design:** Jason Soles, Nicole Vega
- **Publisher:** Atomic Overmind Press

### Special Thanks
- The Foundry VTT community
- All contributors and testers
- The Unhallowed Metropolis fan community

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

### Important Notice
This is an unofficial fan project. Unhallowed Metropolis and all related intellectual property belong to their respective owners. This system requires ownership of the Unhallowed Metropolis rulebooks to play.

---

<div align="center">

**[⬆ Back to Top](#unhallowed-metropolis-for-foundry-vtt)**

*Welcome to Neo-Victorian London. Mind the corpses.*

</div>
