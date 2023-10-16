import { useEffect } from "react";
import { useState } from "react";

export function MediaQueries5() {
    const [isMobile,setIsMobile]=useState(false)
    const containerStyles = {
      backgroundColor: "red",
      color: "#fff",
      padding: "10px",
    };
  
    const mediaQueryStyles = {
      backgroundColor: "blue",
      color: "#000",
      fontSize: "16px",
    };
    useEffect(()=>{
        setIsMobile(window.innerWidth <= 768)
        window.addEventListener("resize",()=>{
            setIsMobile(window.innerWidth <= 768)
        })
        return ()=>{
            window.removeEventListener("resize",()=>{
                setIsMobile(window.innerWidth<=768)
            })
        }
    }, [])
  
    return (
      <div style={isMobile? mediaQueryStyles : containerStyles}>
        Certainly! You can use media queries in JSX code by embedding inline styles in your React components. Here`s how you can apply media queries using inline styles in JSX:
      </div>
    );
  }
  