import React from 'react'
import cn from 'classnames'
import styles from './photo.module.css'

function Photo({
  src = 'https://pbs.twimg.com/profile_images/1147287093682589696/f3NBbffV_400x400.jpg',
  alt
}) {
  return (
    <div className={cn([styles.photo])}>
      <img className={styles.img} src={src} alt={alt}></img>
    </div>
  )
}

export default Photo
