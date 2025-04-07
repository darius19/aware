import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import "../css/main.css";

function NewEvent() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="add-event button primary"
        onClick={() => setIsOpen(true)}
      >
        <i class="fa-solid fa-plus"></i>
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="new-event"
      >
        <Description></Description>
        <div className="dialog-content">
          <form action="">
            <DialogPanel className="dialog-box">
              <DialogTitle className="">Adaugă eveniment</DialogTitle>
              <div class="input-container">
                <label>Imagine eveniment:</label>
                <div className="input-file">
                  <input type="file" />
                  <i class="fa-solid fa-plus"></i>
                  <div className="image"></div>
                </div>
              </div>
              <div className="grid-3">
                <div className="input-container">
                  <label>Nume eveniment:</label>
                  <input type="text" />
                </div>
                <div className="input-container">
                  <label>Oră eveniment:</label>
                  <input type="number" />
                </div>
                <div className="input-container">
                  <label>Dată eveniment:</label>
                  <input type="date" />
                </div>
              </div>
              <div className="input-container">
                <label>Descriere Eveniment</label>
                <textarea rows={8}></textarea>
              </div>
              <div className="submit-button">
                <input
                  type="submit"
                  className="button primary"
                  value="ADAUGĂ"
                />
              </div>
              <div className="close-dialog">
                <button onClick={() => setIsOpen(false)}>
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            </DialogPanel>
          </form>
        </div>
      </Dialog>
    </div>
  );
}
export default NewEvent;
