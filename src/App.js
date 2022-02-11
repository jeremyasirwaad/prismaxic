import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Landing from './Landing';
import PropagateLoader from "react-spinners/PropagateLoader";
function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  
  }, []);
  return (
    <div className={ loading ? ("App loader") : ("App")}>
      { loading ? (
        <PropagateLoader color={"#FF0000"} loading={loading}  size={25} />
      ) : (
        <>
        <Navbar />
        <Landing />
        <Footer />
        </>
      )}
    </div>
  );
}

export default App;
