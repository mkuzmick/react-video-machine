import React from 'react';
import styles from './Controls.module.css'

const tags = ["good take", "bad take"]

export default function (props) {
  return (
    <div className={styles.controls}>
      <div className={styles.button} onClick={() => props.play()}>play</div>
      <div className={styles.button} onClick={() => props.pause()}>pause</div>
      <div className={styles.button} onClick={() => props.like()}>like</div>
      {tags.map((tag, index)=>{
        return(
          <div
            key={index}
            className={styles.button}
            onClick={
              ()=>{
                props.tag().then(seconds=>{
                  console.log(`${tag} at ${seconds} seconds.`);
                })
              }
            }
          >
            {tag}
          </div>
        )
      })}
    </div>
  )
}
