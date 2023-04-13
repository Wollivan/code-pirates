function Modal({ modalData, handleModal }) {
  return (
    <div className="modal" onClick={handleModal}>
      <h2>{modalData.title}</h2>
      <img src={modalData.image_url} alt={modalData.title} />
    </div>
  );
}

export default Modal;
