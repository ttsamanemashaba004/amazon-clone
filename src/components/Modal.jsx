
//eslint-disable-next-line react/prop-types
function Modal({ setIsOpen }) {
  return (
    <div>
      <div onClick={() => setIsOpen(false)}>
        <div style={modalStyle}>
          <h3>Test Modal</h3>
          <button onClick={() => setIsOpen(false)}>Close</button>
          <p>This is a simple modal</p>
        </div>
      </div>
    </div>
  );
}

const modalStyle = {
  postion: "fixed",
  top: "50%",
  left: "50%",
  tranform: "translate(-50%, -50%)",
  width: 400,
  background: "white",
  borderRadius: "24px",
  padding: "10px",
  textAlign: "center",
};

export default Modal;
