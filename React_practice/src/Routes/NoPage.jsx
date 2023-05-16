import { Link } from "react-router-dom";

const NoPage = () => {
    return (<><h1>404</h1>
    <button><Link to="/">Retry</Link></button></>);
  };
  
  export default NoPage;