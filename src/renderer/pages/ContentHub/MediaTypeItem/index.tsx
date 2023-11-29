import React, { useState } from 'react';
import styles from '../styles.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CloseIcon from '@mui/icons-material/Close';

export interface ContentHub {
  userId: string;
  createorId: string;
  timeStamp: Date;
  s3url: string;
  signedUrl: string;
  fileName: string;
  mimeType: string;
  imageKey: string;
  presignUrl: string;
  s3Key: string;
  bucketName: string;
  folderId: string;
  folderName: string;
}

interface ImageProps {
  image: ContentHub;
  handleDeleteImage: (image: string) => void;
  handleSelectImage: (image: string) => void;
  handleDownloadImage: (image: string) => void;
  isSelected: boolean;
}

export default function MediaTypeItem({
  image,
  handleDeleteImage,
  handleSelectImage,
  handleDownloadImage,
  isSelected,
}: ImageProps) {
  const [hovered, setHovered] = useState(false);
  const [isZoomed, setZoomed] = useState(false);

  const toggleZoom = () => {
    setZoomed(!isZoomed);
  };
  return (
    <div>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`${styles.imageContainer} ${
          isSelected ? styles.selected : ''
        }`}
      >
        <div
          className={styles.CheckIcon}
          onClick={() => handleSelectImage(image.imageKey)}
        >
          {isSelected ? (
            <CheckCircleOutlinedIcon className={styles.Icon} />
          ) : (
            <CircleOutlinedIcon className={styles.Icon} />
          )}
        </div>
        <img src={image.presignUrl} alt="Image" className={styles.imageitem} />
        {hovered && (
          <div className={styles.actions}>
            <div
              className={styles.icon}
              onClick={() => handleDeleteImage(image.imageKey)}
            >
              <DeleteIcon />
            </div>
            <div className={styles.icon} onClick={toggleZoom}>
              <ZoomInIcon />
            </div>

            <div
              className={styles.icon}
              onClick={() => handleDownloadImage(image.presignUrl)}
            >
              <FileDownloadOutlinedIcon />
            </div>
          </div>
        )}
      </div>
      <div>
        {isZoomed && (
          <div className={styles.zoomedImageContainer} onClick={toggleZoom}>
            <img
              src={image.presignUrl}
              alt="Zoomed Image"
              className={styles.zoomedImage}
            />
            <div className={styles.closeIcon} onClick={toggleZoom}>
              <CloseIcon />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
