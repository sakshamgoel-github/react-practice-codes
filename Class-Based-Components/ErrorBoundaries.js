import { Component } from "react";

class ErrorBoundary extends Component{

    constructor(){
        super();
        this.state={hasError:false};
    }

    componentDidCatch(err){
        this.setState({hasError:true});
    }
    render(){
        if(this.state.hasError){
            return <p>Somethig Went Wrong!</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;