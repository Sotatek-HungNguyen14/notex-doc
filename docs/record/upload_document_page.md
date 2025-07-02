---
sidebar_position: 3
---

# Upload Document

---

## 1. Overview

The **Upload Document** feature allows users to upload text-based files from their device so the system can analyze, summarize, or automatically generate notes using AI.

This feature is ideal for scenarios such as meeting notes, reports, research papers, policy documents, and more—especially when users want to quickly understand the key content or extract important information from long texts.

### Key Benefits:

- **Supports multiple common document formats**
- **AI-powered content processing**: summarization, key point extraction, note creation
- **Customizable summary tone and writing style**
- **Simple upload process with fast processing time**

---

## 2. UI/UX Specification

<p align="center">
 <img src="https://pub-661d733d32f14d8684c7617d2f2e3372.r2.dev/docs/create_document.png"/>
 <br/>
 <em>UI specification create document screen</em>
</p>

### How to access the Upload Document interface

From the home screen, select the **Document** section to open the upload screen.

### Screen Components

| Component               | Type          | Description                                                               |
| ----------------------- | ------------- | ------------------------------------------------------------------------- |
| Upload screen button    | Button / Tab  | Opens the interface for uploading document files from the device          |
| File picker button      | Button        | Opens the file selector to choose from local storage                      |
| File name display       | Text          | Shows the selected file name when valid                                   |
| Error message           | System Notice | Displays an error if the file format is unsupported or exceeds size limit |
| Summary Style           | Dropdown      | Select summary length: Short, Balanced, or Full                           |
| Writing Style           | Dropdown      | Choose tone: Friendly, Neutral, or Professional                           |
| Additional Instructions | Text Input    | (Optional) Provide specific AI handling instructions                      |

---

## 3. How to Use

### Step 1: Open the Upload Document interface

From the home screen, tap the **Document** tab to open the upload screen.

### Step 2: Choose a document file

Tap the file upload button to open the file selector.  
Choose a valid document from your device's local storage.

> **Supported formats**: `.pdf`, `.doc`, `.docx`, `.txt`, `.md`, `.json`  
> **Maximum file size**: `10MB`

> ⚠️ If the file exceeds the limit, the system will display:  
> **“The file exceeds 10MB. Please select a smaller file.”**

### Step 3: Confirm and process

- If the file is valid, the system will **automatically begin processing**
- If not, you'll be asked to choose another file

---

## 4. After Uploading

Once uploaded, the document will be processed similarly to other content types:

- You can choose a **Summary Style**: Short, Balanced, or Full
- Adjust the **Writing Style**: Friendly, Neutral, or Professional
- _(Optional)_ Add **Additional Instructions** to guide AI processing  
  e.g., `"Summarize only the policy section"` or `"Convert content into bullet points"`

---

## 5. Notes & Tips

- Only supports **files stored locally on your device** — cloud sources like Google Drive, iCloud, Dropbox must be downloaded first
- Only **one document can be uploaded at a time**
- Files larger than 10MB will be rejected — please split or compress if needed
- Use **Additional Instructions** to guide the AI to focus on specific sections or output styles

---

## 6. Frequently Asked Questions (FAQ)

### What document formats are supported?

`.pdf`, `.doc`, `.docx`, `.txt`, `.md`, `.json`

---

### What if my file exceeds 10MB?

It will be rejected with this message:  
**“The file exceeds 10MB. Please select a smaller file.”**  
Please compress or split the document before uploading again.

---

### Can I upload multiple documents at once?

No. Only **one document per upload** is supported.

---

### Can I select documents from Google Drive or iCloud?

Not directly. You need to **download the file to your device** first before selecting it in the app.

---
