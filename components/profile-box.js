import React from 'react'
import cn from 'classnames'
import styles from './profile-box.module.css'

import Photo from './photo'
import { ArrowBottom } from './icons'
import Button from './button'
import TextBody from './text-body'

function ProfileBox({ slug = 'ArdaKaya', name = 'Arda Kaya' }) {
  return (
    <Button className={cn([styles.box])}>
      <Photo></Photo>
      <div className={styles.body}>
        <TextBody bold>{name}</TextBody>
        <TextBody className={styles.slug}>@{slug}</TextBody>
      </div>
      <ArrowBottom className={styles.icon}></ArrowBottom>
    </Button>
  )
}

export default ProfileBox
