# How to Upload and Convert Projects

This guide explains how to add new projects to your portfolio, including how to automatically convert Jupyter Notebooks (`.ipynb`) into dynamic MDX pages.

---

## Option 1: Convert a Jupyter Notebook (`.ipynb`) Automatically

We have a custom conversion script inside `scripts/convert-notebook-to-mdx.py` that will automatically:
1. Parse your `.ipynb` file.
2. Extract all charts/plots and save them to `public/thumbnails/projects/[slug]/`.
3. Generate the MDX file with the required frontmatter metadata.
4. Auto-embed the charts and console outputs into the `.mdx` body.

### Run the Command
In the root directory of your project, run:
```bash
python scripts/convert-notebook-to-mdx.py "path/to/your/notebook.ipynb" "project-slug" "Project Title" "A brief, compelling description."
```

#### Example:
```bash
python scripts/convert-notebook-to-mdx.py "D:\D\Portafolio\content\projects\AIRBNB listings analysis.ipynb" "airbnb-analysis" "Airbnb Listing Analysis" "An end-to-end data analysis of Airbnb listings using Python."
```

---

## Option 2: Add a Project Manually

If your project is not a Jupyter Notebook, you can create it manually:

### 1. Create the MDX File
Create a new file under `content/projects/[project-slug].mdx` (e.g. `my-project.mdx`) and add the frontmatter schema:

```yaml
---
title: "My Project Title"
description: "A short summary of what the project does."
category: "Data" # e.g. Data, Web, Automation
status: "Completed" # WIP or Completed
github: "https://github.com/danielvertex/my-project"
date: "2026-07-17"
thumbnail: "/thumbnails/projects/my-project.png"
images: []
tags: ["Python", "Pandas", "Analysis"]
featured: false # Set to true to highlight it
---

## Introduction
Write your project case study or markdown documentation here...
```

### 2. Put the Thumbnail Image
Place your card thumbnail image file here:
`public/thumbnails/projects/[project-slug].png`

---

## How to Deploy Your Changes Live

Once you have added or converted your project:

1. **Commit and push** the source code:
   ```bash
   git add .
   git commit -m "Add new project: [project-name]"
   git push origin main
   ```

2. **Generate the static production build**:
   ```bash
   npm run build
   ```

3. **Deploy** the generated `out/` folder to your website hosting (Vercel, Netlify, or by pushing to your `danielvertex.github.io` repository).
