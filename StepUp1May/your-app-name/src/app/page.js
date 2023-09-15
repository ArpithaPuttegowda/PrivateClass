import React from "react"
import { Menu } from "./Menu"
import styles from  "./page.module.css"

const App=()=>{
  return <h1 className={`${styles.menu} ${styles.fs}`}>
    <Menu/>
  </h1>
}
export default App
