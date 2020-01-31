import React from 'react'
import styles from './Data.module.css'

export default (props)=>{
  return (
    <div className={styles.data}>
      DATA:
      {props.data.map(datum=>{
        return(
          <div className={styles.datum}>{datum}</div>
        )
      })}
    </div>
  )
}
