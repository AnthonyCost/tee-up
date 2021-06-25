import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import DeleteGroupPrompt from "../DeleteGroupPrompt";
import "./DeleteGroupModal.css";

function DeleteGroupModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShowModal(true)}>
        Delete Group
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteGroupPrompt />
        </Modal>
      )}
    </>
  );
}

export default DeleteGroupModal;
