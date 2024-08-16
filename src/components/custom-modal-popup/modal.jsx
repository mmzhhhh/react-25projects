import { useEffect, useState } from "react";

export default function Modal({ id, header, body, footer, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  function handleClose() {
    setIsClosing(true);
  }

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  return (
    <div
      id={id || "Modal"}
      className={`modal ${isClosing ? "modal-exit" : ""}`}
    >
      <div className="modal-container">
        <div className="header">
          <span className="close-modal-icon" onClick={handleClose}>
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our Modal Body</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
}
