import { useState } from "react";

const SimpleInput = (props) => {
 
  const [inputName,setInputName] = useState("");
  const [inputNameTouched,setInputNameTouched ] = useState(false);

  const inputNameIsValid = inputName.trim() !== "";
  const inputNameIsNotValid = !inputNameIsValid && inputNameTouched

  let formIsValid = false;
  if(inputNameIsValid){
    formIsValid = true;
  }

  const inputNameHandler = event => {
    setInputName(event.target.value);
    
  }

  const inputNameBlurHandler = event => {
    setInputNameTouched(true);
  }

  const formSubmitHandler = event =>{
    event.preventDefault();
    setInputNameTouched(true);  
    if(!inputNameIsValid)
    return;
    setInputName("");
    setInputNameTouched(false);
    console.log(inputName);
  } 
  const nameInputClasses = !inputNameIsNotValid ? "form-control" : "form-control invalid";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={inputNameHandler} value={inputName} onBlur={inputNameBlurHandler}/>
        {inputNameIsNotValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;