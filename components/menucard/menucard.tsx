import styles from '@/styles/MenuCard.module.css';

interface MenuCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const MenuCard = ({ title, description, imageSrc }: MenuCardProps) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className={styles.card__button}> Comprar</button>
    </div>
  );
};

export default MenuCard;
