import Link from 'next/link';
import styles from '../styles/listcard.module.scss';

export interface ListCardProps {
  title: string;
  buttonText: string;
  link: string;
  children: React.ReactNode;
}

const ListCard = ({ title, buttonText, link, children }: ListCardProps) => (
  <div className={styles.listcard}>
    <div className={styles.listcard_header}>
      <p className={styles.listcard_header_title}>{ title }</p>
    </div>
    <div className={styles.listcard_body}>
      { children }
    </div>
    <div className={styles.listcard_footer}>
      <Link href={link} passHref>
        <button className={styles.listcard_footer_button}>{ buttonText }</button>
      </Link>
    </div>
  </div>
);

export default ListCard;