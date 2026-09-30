// src/data/services.js
//
// ONE list of services for the whole site.
//
//   short — the one-liner used on the homepage
//   long  — the fuller description used on /surveying and /engineering
//   when  — the "when you need it" line, service pages only
//
// Change a service here and every page that shows it updates.
// Before this file existed the same fifteen services were written out
// twice, and they had already drifted apart in six places.

export const surveyingServices = [
  {
    name: "Land and Boundary Surveys",
    short: "Improvement survey, title survey, legal description, partition survey — documented and defensible.",
    long: "Where your property actually ends, established from the deed, the record, and what's on the ground — then monumented and documented so it holds up.",
    when: "Buying or selling, splitting a tract, settling a fence line, or before you build anything near a line.",
  },
  {
    name: "Oil and Gas Surveys",
    short: "Well locations, pad sites, pipeline routes, and lease boundaries.",
    long: "Well locations, pad sites, pipeline routes, unit boundaries, and lease work for operators across North Texas.",
    when: "Permitting a well, laying pipe, or proving up a unit.",
  },
  {
    name: "Platting",
    short: "Subdivision plats prepared to city and county standards.",
    long: "Subdivision plats prepared to the standards of the city or county reviewing them, with the engineering behind them done in the same office.",
    when: "Dividing land into lots, or any time a municipality requires a recorded plat.",
  },
  {
    name: "Right-of-Way Determination",
    short: "Easements and ROW research for roads, utilities, and pipelines.",
    long: "Easement and ROW research for roads, utilities, and pipelines — including the deed and record work behind it.",
    when: "Acquiring an easement, or figuring out what one you inherited actually covers.",
  },
  {
    name: "Construction Staking",
    short: "Grade, offset, and layout staking so crews build to the plan.",
    long: "Grade, offset, and layout staking so the crew builds what the plan says.",
    when: "Once the design is approved and the dirt work starts.",
  },
  {
    name: "Mapping",
    short: "Topographic and planimetric mapping built for the work that follows.",
    long: "Topographic and planimetric mapping produced for the design work that follows, not as a standalone deliverable nobody uses.",
    when: "Before site design, drainage studies, or roadway layout.",
  },
  {
    name: "GPS Surveying",
    short: "RTK and static control for large tracts and remote sites.",
    long: "RTK and static GPS control for large tracts, remote sites, and anywhere running a traverse would take a week.",
    when: "Big acreage, rough country, or work that needs to tie to a known coordinate system.",
  },
];

export const engineeringServices = [
  {
    name: "Site Development",
    short: "Grading, layout, and utilities from raw land to a finished construction.",
    long: "Construction plans for grading, layout, and utilities that turn raw land into finished construction — working your plan on your site work.",
    when: "Any commercial build, storage facility, or subdivision starting from the ground up.",
  },
  {
    name: "Drainage Design",
    short: "Detention, culverts, and drainage studies for proposed development.",
    long: "Detention, culverts, and drainage studies built to survive the storm.",
    when: "When the city won't approve a plat until somebody proves how much water there is and where it goes.",
  },
  {
    name: "Roadway Design",
    short: "County roads, subdivision streets, and access and TxDOT drives.",
    long: "County roads, subdivision streets, and access and TxDOT drives.",
    when: "New streets in a development, or a county road that needs rebuilding.",
  },
  {
    name: "Water and Sewer Design",
    short: "Distribution, collection, and lift stations.",
    long: "Distribution mains, collection systems, and lift stations sized to the demand you'll actually have.",
    when: "Extending service to a new development or fixing a system that's outgrown itself.",
  },
  {
    // TODO — Swaim wants this rewritten; waiting on his copy.
    // Remove `pendingCopy: true` (and the .needs-copy CSS in index.astro)
    // once the new wording lands. Do NOT go live with it set.
    name: "Feasibility Studies",
    short: "Find out what a site will cost you before you own the problem.",
    long: "What a site will cost to develop, found out before you own the problem instead of after.",
    when: "Before you close on a tract, or before the board votes on it.",
    pendingCopy: true,
  },
  {
    name: "Construction Management",
    short: "Our eyes on site and boots on the ground making sure what's in the plans gets built.",
    long: "Somebody watching the build who read the plans first — and who can answer a contractor's question without a three-day delay.",
    when: "Once construction starts and the questions begin.",
  },
  {
    name: "Park and Trail Design",
    short: "Public space design for cities and civic projects.",
    long: "Public space design for cities and civic projects, from layout through construction documents.",
    when: "Municipal park improvements, trail connections, and grant-funded civic work.",
  },
  {
    name: "Special Services and Scanning",
    short: "Document scanning, exhibits, and large format printing.",
    long: "Document scanning, exhibits, and the one-off technical work that doesn't fit a category.",
    when: "When you need something drawn, sealed, or digitized and nobody else will touch it.",
  },
];