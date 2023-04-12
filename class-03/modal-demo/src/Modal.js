function Modal({ handleModal }) {
  return (
    <div className="modal">
      <p onClick={handleModal}>X</p>
      <p>Hello there!</p>
      <p>General Kenobi!</p>
    </div>
  );
}

export default Modal;
