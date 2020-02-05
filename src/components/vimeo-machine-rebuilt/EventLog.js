import React from 'react'
import styles from './EventLog.module.css'

export default ({ events }) => {
  return (
    <div className={styles.eventLog}>
      {
        events.map(event=>{
          return(
            <div
              className={styles.event}
            >
              {JSON.stringify(event)}
            </div>
          )
        })
      }
    </div>
  );
}
