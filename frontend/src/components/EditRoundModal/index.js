import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import UpdateRoundForm from "../UpdateRoundForm";

function EditRoundModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="editRoundBtn" onClick={() => setShowModal(true)}>
        Edit Round
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateRoundForm />
        </Modal>
      )}
    </>
  );
}

export default EditRoundModal;