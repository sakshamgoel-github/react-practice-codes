import { useRef, useState } from "react";
import ErrorModal from "./ErrorModal";

const UserForm = (props) => {
    
    const [error,setError] = useState();

    const inputUsernameRef = useRef();
    const inputAgeRef = useRef();


    const formSubmitHandler = event => {
        event.preventDefault();
       
        if(!inputUsernameRef.current.value.trim().length || !inputAgeRef.current.value.trim().length){
          setError({title:"Invalid Input",message:"Please enter non empty values."})
          return;
        }
        if(+inputAgeRef.current.value < 1){
          setError({title:"Invalid Age",message:"Please enter (age > 0)."})
          return;
        }
        const formData = {
            username:inputUsernameRef.current.value,
            age:inputAgeRef.current.value
        }
        formData.id = Math.floor(Math.random()*89999 + 10000);
        props.getData(formData);
        inputUsernameRef.current.value = "";
        inputAgeRef.current.value = "";
    }
    const dismissError = () => {
      setError(null);
    }
  return (
    <div className="container">
     {error && <ErrorModal error={error} dismissError={dismissError}/>}
      <form onSubmit={formSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input type="text" id="username" className="form-control" ref={inputUsernameRef}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age (in Years)
          </label>
          <input type="text" id="age" className="form-control" ref={inputAgeRef}></input>
        </div>
        <div className="mb-3">
            <button className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
