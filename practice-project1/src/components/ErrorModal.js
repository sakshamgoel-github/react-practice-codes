import "./ErrorModal.css"
const ErrorModal = (props) => {
    const errorButtonHandler = ()=>{
        props.dismissError();
    }
  return (
    <div className="error-modal-div">
      <h1 className="error-modal-heading">{props.error.title}</h1>
      <h3>{props.error.message}</h3>
      <button style={{marginBottom:"6px"}} className="btn btn-danger" onClick={errorButtonHandler}>Okay</button>
    </div>
  );
};

export default ErrorModal;
