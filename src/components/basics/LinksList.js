import React from 'react'
import styles from './LinksList.module.css'

export default(props)=>{
  return (
    <div className={styles.list}>
      <h1>Links List.</h1>
      <ul>
        {
          props.links.map((link, index) => {
            return(<li className={styles["list-element"]} key={index}>link to {link.text}</li>)
          })
        }
      </ul>
    </div>
  )
}
