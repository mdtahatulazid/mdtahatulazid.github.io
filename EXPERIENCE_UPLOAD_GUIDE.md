# Tahatul Azid Portfolio — October 2026 Corrections

For the existing GitHub Pages repository:
https://github.com/mdtahatulazid/mdtahatulazid.github.io

## What changed
- index.html — removed both homepage buttons and shortened the subtitle.
- homepage.css — desktop subtitle fits on a single line; smaller screens wrap.
- app.js — returning Home no longer launches the intro. The intro remains
  available via the explicit Watch Again control. Experience gets its marquee.
- experience.html — two solo portrait images in the hero and a document viewer.
- experience-redesign.css and experience-redesign.js — updated story navigation,
  visual fixes and expanded photo chapters.
- assets/experience — 35 B&F photographs, 19 NZC photographs, the new Intelis
  Jeremy Davis meeting photograph and three new Eptisa GIS photographs, plus
  four safely redacted, visually identifiable contract-cover excerpts.
- Archived WAVE and Eptisa photographs supplied in the earlier website remain
  accessible in the experience stories.

The page also uses files already in the existing website: assets/claude and assets/brands.

## Option 1 — update your current GitHub website
Use the Update_Only ZIP. Extract it. Copy ALL contents into the repository
root, keeping the assets/experience subfolder. **Replace all files in the
update ZIP**, including `index.html`, `homepage.css` and `app.js`.

With GitHub Desktop or a terminal, commit the copied files to the branch
serving GitHub Pages:

    git add index.html homepage.css app.js experience.html experience-redesign.css experience-redesign.js assets/experience
    git commit -m "Fix navigation and expand verified experience archive"
    git push

## Option 2 — full website package
Use the Full_Site ZIP. It contains the existing static website files and all
new Experience assets. Upload the extracted contents to your repository root.
Do not upload the ZIP itself as a single GitHub Pages page.

## Public privacy and evidence safeguards
- Complete private employment contracts and appointment letters are **NOT**
  included. The gallery shows explicitly labeled *selected cover excerpts*;
  these are JPEG images with the original contract body removed at the pixel
  level and a public verification panel added. They are **not complete PDFs**.
- Financial figures, service duration, private clauses and contact details are
  absent from the published evidence excerpts, not hidden through CSS.
- Business cards and a government meeting notice are strongly obscured in
  archive images to avoid revealing phone numbers or unrelated contact details.
- Financial data on one project board was permanently obscured in the photo.
- The final KORA waste-sorting photo retains its full original aspect ratio,
  resolving the earlier strip-like crop in a tall modal frame.
- A proposal, project discussion or IFC meeting is not represented as confirmed
  investment, completed construction or an awarded contract.
- Review third-party permissions before wider public sharing.

## Checks and requirements
No npm installation or build system is needed. Escape closes the detail modal.
Left/right keyboard arrows browse story moments. Category tabs support keyboard
navigation. All included image links should resolve locally. Check visually
after deploying, especially on desktop and mobile screen sizes.
