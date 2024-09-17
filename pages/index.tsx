import Navbar from '@/components/navbar/navbar';
import MenuCard from '@/components/menucard/menucard';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="banner" className={styles.section}>
          <div className={styles.banner__container}>
            <img src='banner.jpg' className={styles.banner__container__img}/>
            <h2 className={styles.title}> Monstruosamente Delicioso</h2>
          </div>
      </section>

      <section id="nossa-historia" className={styles.section}>
        <div className={styles.history__container}>
        
          <div className={styles.history__text__container}>
            <h2 className={styles.title}>Nossa História </h2>
            <p className={styles.paragraph}>
              A Monster Burguer nasceu em 2010 de uma ideia simples: criar hambúrgueres que fossem mais do que uma refeição, mas uma experiência inesquecível. Tudo começou com uma pequena loja no coração do Rio de Janeiro, onde nossos fundadores, apaixonados por gastronomia e inovação, decidiram que era hora de revolucionar o mundo dos hambúrgueres.
            </p>
            <p className={styles.paragraph}>
              Inspirados por ingredientes de qualidade monstruosa e técnicas artesanais, eles começaram a criar receitas que combinavam sabores intensos com tamanhos impressionantes. Desde o início, nosso foco sempre foi proporcionar uma explosão de sabor em cada mordida, algo que fizesse cada cliente sair não apenas satisfeito, mas impressionado.
            </p>
            <p className={styles.paragraph}>
              Com o tempo, a paixão pela criação de hambúrgueres monstruosamente deliciosos atraiu uma legião de fãs. Hoje, expandimos para São Paulo, levando nosso compromisso com a excelência para além dos limites do Rio. O que começou como um sonho humilde cresceu para se tornar uma referência em hambúrgueres artesanais, onde cada prato é uma verdadeira aventura gastronômica.
            </p>
            <div className={styles.history__fans__container}>
              <img className={styles.history__fans__container__left} src='/burger-hand.png'/>
              <img className={styles.history__fans__container__right} src='/zombie-hands.png'/>
            </div>
            <p className={styles.paragraph}>
              Nosso objetivo nunca foi apenas alimentar, mas provocar emoções, despertar sorrisos e, claro, fazer sua mente explodir com sabores únicos. Seja em uma noite com amigos ou em um almoço rápido, cada visita à Monster Burguer é uma nova descoberta. Estamos apenas começando nossa jornada, e o melhor ainda está por vir.
            </p>
          </div>
          
        </div>
      </section>

      <section id="cardapio" className={styles.section}>
        <div className={styles.menu__container}>
          <div className={styles.menu__container__contents}>
            <h2 className={styles.title}>Cardápio</h2>
            <div className={styles.grid}>
              <MenuCard
                title="Monster Bacon"
                description="Dois Hambúrgueres MONSTRUOSOS de 200g, queijo americano derretido, muito bacon crocante e maionese de alho negro."
                imageSrc="/monster-burguer.jpg"
              />
              <MenuCard
                title="Cheddar Supreme"
                description="Dois Hambúrgueres de 120g, bastante cheddar cremoso, cebola caramelizada, picles crocante e molho barbecue."
                imageSrc="/supreme-cheddar.jpg"
              />
              <MenuCard
                title="Tripple Monster"
                description="Três Hambúrguer de 120g, queijo, alface, tomate e molho especial da casa."
                imageSrc="/tripple-monster.jpg"
              />
              <MenuCard
                title="Double Cluck"
                description="Dois frangos SUPER crocantes de 150g, queijo duplo e o nosso delicioso molho tártaro caseiro."
                imageSrc="/double-cluck.jpg"
              />
            </div>

          </div>
        </div>
      </section>
      <div className={styles.logo__background__container}>
            <img
              src="/logo-dark.png"
              alt="Hambúrguer"
              className={styles.logo__background__container__img}
            />
          </div>
      <section id="nossas-unidades" className={styles.section}>
        <div className={styles.shops__container}>
          <h2 className={styles.title}>Nossas Unidades</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Rio de Janeiro - Rua dos Burgers, 666</li>
            <li className={styles.listItem}>São Paulo - Avenida Paulista, 999</li>
          </ul>

        </div>
      </section>
      <footer className={styles.footer__container}>
        <section>

        <h3 className={styles.subtitle}>
          Institucional
        </h3>
        <ul className={styles.menu}>
          <li><Link href="#nossa-historia">Nossa História</Link></li>
          <li><Link href="#cardapio">Cardápio</Link></li>
          <li><Link href="#nossas-unidades">Nossas Unidades</Link></li>
        </ul> 
        </section>
        <section>

        <h3  className={styles.subtitle}>
          Redes Sociais
        </h3>
        <ul className={styles.menu}>
          <li><Link href="https://www.instagram.com/" target='_blank'>Instagram</Link></li>
          <li><Link href="https://www.facebook.com/" target='_blank'>Facebook</Link></li>
          <li><Link href="https://www.tiktok.com/" target='_blank'>Tiktok</Link></li>
        </ul> 
        </section>
      </footer>
    </>
  );
};

export default Home;
