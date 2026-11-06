# 🧬 IBCM27 — International Biological Conference in Mongolia

**Website:** https://amyzolboo.github.io/IBCM27/  ·  **Монгол:** https://amyzolboo.github.io/IBCM27/mn/

Organized by the Institute of Biology, Mongolian Academy of Sciences.

---

## 👋 First time here? Start with this

You **don't need to know coding** to update the website. Almost everything is plain text in these places:

| I want to change… | Open this |
|---|---|
| 📅 Dates, countdown, email, phone, registration form link, map, background photo | [`_config.yml`](_config.yml) |
| ✏️ Any **English** text on the home page | [`_data/en/`](_data/en) |
| ✏️ Any **Mongolian** text on the home page | [`_data/mn/`](_data/mn) |
| 📋 Top menu | `_data/en/menu.yml` and `_data/mn/menu.yml` |
| 📄 Guidelines page | [`guidelines.md`](guidelines.md) and [`mn/guidelines.md`](mn/guidelines.md) |
| 📰 Add a news post | [`_posts/`](_posts) (English) and [`mn/_posts/`](mn/_posts) (Mongolian) |
| 👋 Welcome message (Director / Chair) | `_data/en/03-welcome.yml` and `_data/mn/03-welcome.yml` |
| 🤝 GB34 section | `_data/en/04-gb34.yml` and `_data/mn/04-gb34.yml` |
| 🖼 Speaker photos | [`assets/images/speakers/`](assets/images/speakers) |

The text files in `_data/en/` and `_data/mn/` are **numbered in the same order as the home page**:
`01-top-banner` → `02-about` → `03-welcome` → `04-gb34` → `05-sessions` → `06-important-dates` → `07-news` → `08-speakers` → `09-committees` → `10-registration-and-fees` → `11-venue` → `12-contact` → `13-footer`

🔍 Tip: search for **EDIT** in a file to find the placeholders that still need real information.

---

## ✏️ How to edit a file (on github.com)

1. Click the file name.
2. Click the ✏️ **pencil** icon (top right of the file).
3. Change the text.
4. Click **Commit changes…** → **Commit changes**.
5. Wait 1–2 minutes, then refresh the website (Ctrl + Shift + R).

To check that the update worked, open the **Actions** tab: 🟡 = building, ✅ = done, ❌ = there is a mistake (click it to see which file and line).

---

## ⚠️ Rules for the `.yml` text files

```yaml
title: Title to be announced      ← change only the text AFTER the colon
```

- Keep the **spaces at the start of lines** exactly as they are (use spaces, not Tab).
- If your text contains a colon `:`, put it in quotes → `photo_credit: "Photo: IBCM25"`
- Lists start with `- ` (dash + space). To add an item, copy a whole item and change it.
- Always change **both languages**: same file name in `_data/en/` and `_data/mn/`.

---

## 🗂 What every folder is

| Folder / file | What it is | Do I edit it? |
|---|---|---|
| `_config.yml` | Main settings (dates, email, links) | ✅ Yes |
| `_data/` | All home-page text and menus | ✅ Yes — most edits are here |
| `_posts/`, `mn/_posts/` | News posts | ✅ Yes — to add news |
| `guidelines.md`, `mn/guidelines.md` | Guidelines page | ✅ Yes |
| `assets/images/` | Logos and photos | Only to add/replace images |
| `mn/` | Mongolian pages | Only `guidelines.md` and `_posts/` |
| `index.md`, `news.md`, `404.md` | Pages that only load templates | ❌ No |
| `_layouts/` | Page templates | ❌ No (except `home.html` to hide/reorder sections) |
| `_includes/` | Building blocks of the page | ❌ No |
| `assets/css/`, `assets/js/` | Design and small scripts | ❌ No |

Every folder has its own short README — open the folder to read it.

---

## 🙋 Common tasks

<details>
<summary><b>Session names are decided</b></summary>

Open `_data/en/05-sessions.yml` → change each `title:`. Do the same in `_data/mn/05-sessions.yml`.
</details>

<details>
<summary><b>Conference dates are fixed</b></summary>

1. `_data/en/01-top-banner.yml` and `_data/mn/01-top-banner.yml` → change `dates:`
2. `_data/en/06-important-dates.yml` and `_data/mn/06-important-dates.yml` → change each `date:`
3. `_config.yml` → `start: "2027-09-16T09:00"` to show the countdown
</details>

<details>
<summary><b>Add a speaker</b></summary>

Upload the photo to `assets/images/speakers/`, then in `_data/en/08-speakers.yml` (and `mn`) add:

```yaml
- name: Prof. Jane Smith
  affiliation: University of Tokyo, Japan
  photo: smith.jpg
```
</details>

<details>
<summary><b>Registration form is ready</b></summary>

Paste the link in `_config.yml` → `registration_form: "https://forms.gle/..."`. The button turns on automatically.
</details>

<details>
<summary><b>Add a news post</b></summary>

See the instructions in the [`_posts`](_posts) folder.
</details>

<details>
<summary><b>Add a new page (e.g. Accommodation)</b></summary>

1. Copy `guidelines.md` → name it `accommodation.md`. Change `title:`, `ref: accommodation` and `permalink: /accommodation/`.
2. Copy `mn/guidelines.md` → `mn/accommodation.md` with the same `ref:` and `permalink: /mn/accommodation/`.
3. Add the page to `_data/en/menu.yml` and `_data/mn/menu.yml`.
</details>

<details>
<summary><b>Use a custom domain (e.g. ibcm.ac.mn)</b></summary>

Settings → Pages → Custom domain. Then in `_config.yml` set `url: "https://ibcm.ac.mn"` and `baseurl: ""`.
</details>

---

<sub>Built with Jekyll and hosted free on GitHub Pages. GitHub rebuilds the site automatically after every change.</sub>
