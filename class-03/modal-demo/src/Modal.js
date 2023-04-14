function Modal({ handleModal, modalContents }) {
  return (
    <div className="modal">
      <p onClick={handleModal}>X</p>
      <p>{modalContents}</p>
    </div>
  );
}

export default Modal;
