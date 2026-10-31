# Experience Page — 2026 Visual Redesign

For the existing GitHub Pages repository:
https://github.com/mdtahatulazid/mdtahatulazid.github.io

## What changed
- experience.html — new page layout and story viewer
- experience-redesign.css — responsive editorial design
- experience-redesign.js — category tabs, 11 experience chapters, photo-story navigation
- assets/experience/ — 26 optimized B&F/NZC photographs

The page also uses files already in the existing website: assets/claude and assets/brands.

## Option 1 — update your current GitHub website
Use the Update_Only ZIP. Extract it. Copy ALL contents into the repository
root, keeping the assets/experience subfolder. Replace experience.html and add
the two new experience-redesign source files.

With GitHub Desktop or a terminal, commit the copied files to the branch
serving GitHub Pages:

    git add experience.html experience-redesign.css experience-redesign.js assets/experience
    git commit -m "Redesign experience page with visual stories"
    git push

## Option 2 — full website package
Use the Full_Site ZIP. It contains the existing static website files and all
new Experience assets. Upload the extracted contents to your repository root.
Do not upload the ZIP itself as a single GitHub Pages page.

## Public privacy and evidence safeguards
- Original employment contracts and appointment letters are NOT published or
  included. Compensation, amounts, appointment duration, contact-rich business
  cards and government notices remain private.
- To display a contract in a future update, create a permanently redacted
  public derivative first; a temporary CSS blur is not secure.
- Financial data on one project board was permanently obscured in the photo
  output. KORA photos were cropped away from identifiable young workers.
- A proposal, project discussion or IFC meeting is not represented as confirmed
  investment, completed construction or an awarded contract.
- Review third-party permissions before wider public sharing.

## Checks and requirements
No npm installation or build system is needed. Escape closes the detail modal.
Left/right keyboard arrows browse story moments. Category tabs support keyboard
navigation. HTML, JS syntax and image links were checked. Live browser visual
verification could not be completed in this environment.
