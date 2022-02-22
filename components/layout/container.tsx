import styles from '../../styles/container.module.scss';

const SiteContainer = ({ children }:{children: React.ReactNode}) => (
  <div className={styles.container}>
    <div className={styles.content}>
      {children}
    </div>
  </div>
);

export default SiteContainer;
