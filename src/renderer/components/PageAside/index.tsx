import { ReactNode } from 'react';
import styles from './styles.module.css';

interface $Props {
  children: ReactNode | ReactNode[];
}

export default function PageAside({ children }: $Props) {
  return <aside className={styles.aside}>{children}</aside>;
}
