import React, { useEffect } from "react";
import Iframe from "react-iframe";

// no need actually
interface PropsType {}

export const App: React.SFC<PropsType> = () => {
  const HOST_URL = "http://localhost:3000";
  const defaultIframeHeight = 250;

  const getIframe = (selector: string): HTMLIFrameElement =>
    document.getElementById(selector) as HTMLIFrameElement;

  const getInput = (
    targetDocument: Document,
    selector: string
  ): HTMLInputElement => targetDocument.getElementById(selector) as HTMLInputElement;

  const handleIframeTask = (e: EventListenerOrEventListenerObject | any): void => {
    if (typeof e.data === "string" && e.origin === HOST_URL) {
      let noteDisplayFrame = getIframe("notesList");
      noteDisplayFrame.contentWindow.document.write(`
        <input
          type="text"
          id="${e.data}"
          value="${e.data}"
        />
        <button id="edit__${e.data}">Save</button>
      `);
      let targetFrameDOM = noteDisplayFrame.contentWindow.document;
      let btnEdit = targetFrameDOM.getElementById(`edit__${e.data}`);
      let input = getInput(targetFrameDOM, e.data);
      let noteInputFrame = getIframe("noteInput");
      if (targetFrameDOM.body.scrollHeight > defaultIframeHeight) {
        noteDisplayFrame.height = `${targetFrameDOM.body.scrollHeight}px`;
        noteInputFrame.height = `${targetFrameDOM.body.scrollHeight}px`;
      }
      btnEdit.addEventListener("click", () => {
        if (input) {
          handleNoteEdit(input.value);
        }
      });
    }
  };
  const handleNoteEdit = (value: string) => {
    let inputIframe = getIframe("noteInput");
    let targetDOM = inputIframe.contentWindow.document;
    let input = getInput(targetDOM, "noteName");
    input.value = value;
  };
  useEffect(() => window.addEventListener("message", handleIframeTask), []);
  return (
    <div className="main-wrapper">
      <Iframe
        url=""
        src="./input.html"
        width="250px"
        height={defaultIframeHeight + "px"}
        id="noteInput"
        display="inline"
        className="iframe"
      />
      <Iframe
        url=""
        src="./display.html"
        width="250px"
        height={defaultIframeHeight + "px"}
        id="notesList"
        className="iframe"
        display="inline"
      />
    </div>
  );
};
