import { head } from 'lodash'
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'

const defaultUrl =
  'https://cdn5.vectorstock.com/i/thumb-large/77/94/your-logo-here-placeholder-symbol-vector-25817794.jpg'

export interface PreviewerProps {
  url?: string
}

type UploadedFile = File & {
  src: string
}

// todo: rename this component
export const Previewer: React.FC<PreviewerProps> = React.memo(({ url }) => {
  const [uploadedImage, setUploadedImage] = useState<UploadedFile | null>(null)
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },

    onDrop: (acceptedFiles: File[]) => {
      const uploadedImage = head(acceptedFiles) as File
      setUploadedImage({
        ...uploadedImage,
        src: URL.createObjectURL(uploadedImage),
      })
    },
  })

  const fileSrc = url || uploadedImage?.src || defaultUrl

  return (
    <div className={styles.container}>
      <img src={fileSrc} className={styles.image} />

      <div {...getRootProps()} className={styles.uploadContainer}>
        <input {...getInputProps()} />
        <FontAwesomeIcon icon={'folder-closed'} className={styles.uploadIcon} />
        <p className={styles.uploadLabel}>Upload the club logo here</p>
      </div>
    </div>
  )
})
