import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditGroupForm from "../EditGroupForm";

function EditFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="editBtn" onClick={() => setShowModal(true)}>
        Edit Group
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditGroupForm />
        </Modal>
      )}
    </>
  );
}

export default EditFormModal;
