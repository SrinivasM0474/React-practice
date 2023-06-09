import React from "react";
import Fallback from "./Fallback";
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
        
      // You can also log the error to an error reporting service
      this.logErrorToMyService(error, errorInfo);
      //console.log(errorInfo)
    }
    logErrorToMyService = (error, info) =>{

        console.log('error' , error, 'info', info)
        
       }
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <Fallback/>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;