"use client";

import { Download } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components/index.js";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Set up PDF.js worker - use jsdelivr CDN with HTTPS and correct version
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
const RESUME_PATH = "/files/resume-Goodarzi.pdf";

function Resume() {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href={RESUME_PATH}
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <div
        style={{
          height: "640px",
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        <Document file={RESUME_PATH} loading={<div>Loading PDF...</div>}>
          <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
        </Document>
      </div>
    </>
  );
}

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
