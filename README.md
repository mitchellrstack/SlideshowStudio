# SlideshowStudio
An electron webapp for creating, editing, and exporting slideshows in many forms like source code, PowerPoint, and PDF.

## Important Dependent Information
- ElectronJS (Application Window)
- ReactJS (Dashboard UI)
- Drag and Drop library (shopify/Draggable)
- Electron-react-start (Boilerplate)/Or Custom Implementation
- Electron-builder (Autoupdating [See electron guides])
- RevealJS (Slideshow Framework)
- SuperStruct (For data schema/validation)

## Wireframe

## Important notes/features
- Saves slideshows locally as JSON files
- Editing a slide is based on its selected type metadata
  - Folder containing all types as their own modules
- Local server for hosting and refreshing source files on change
- Live preview window showing resulting slideshow
- All choice of themes from RevealJS as well as custom themes
  - Folder containing all themes
- Export source code for easy uploading to website
- Export slideshow as PowerPoint
- Export slideshow as PDF