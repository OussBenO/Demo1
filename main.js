import './style.css';
import { PDFViewer } from './components/PDFViewer';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Git Cheatsheet</h1>
    <div id="pdf-container"></div>
  </div>
`;

const pdfContainer = document.querySelector('#pdf-container');
PDFViewer(pdfContainer);