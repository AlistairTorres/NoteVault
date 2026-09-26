# Notes Workspace Prototype

NoteVault is a browser workspace for capturing short notes and keeping them available between visits.

## Highlights

- Capture notes quickly with a focused form
- Keep the newest note at the top of the workspace
- Persist notes in local browser storage
- Remove individual notes without reloading the page
- Use semantic controls and readable empty states

## Technical approach

Notes are represented as small records with stable identifiers. The interface validates stored data before rendering it and updates the view after each change.

## Privacy boundary

Notes remain in the current browser's local storage. They are not encrypted, synchronised or suitable for secrets. This deliberate boundary keeps the project clear and easy to understand.

## Run locally

Open noteVault.html in a modern browser. No build step is required.
