import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{process.env.NEXT_PUBLIC_SITE_NAME || '味登古品 糸蔵'}</h1>
        <p className={styles.description}>
          山形県南陽市宮内　いとや旅館併設の居酒屋
        </p>
        
        <section className={styles.hours}>
          <h2>営業時間</h2>
          <p>18:30～23:00（ラストオーダー：お食事22:00、お飲み物22:30）</p>
          <p>定休日：月曜日・日曜日</p>
          <p className={styles.notice}>※予約をいただきましたら営業いたします</p>
        </section>

        <section className={styles.highlights}>
          <h2>おすすめ</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>お料理</h3>
              <p>新鮮な食材を使った自慢の一品料理</p>
            </div>
            <div className={styles.card}>
              <h3>地酒</h3>
              <p>山形の地酒「東の麓」をはじめとした厳選日本酒</p>
            </div>
            <div className={styles.card}>
              <h3>アットホームな雰囲気</h3>
              <p>いとや旅館併設ならではの温かなおもてなし</p>
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <h2>お問い合わせ・ご予約</h2>
          <p>TEL: {process.env.NEXT_PUBLIC_PHONE || "0238-47-2133"}</p>
          <p>{process.env.NEXT_PUBLIC_ADDRESS || "山形県南陽市宮内1024"}</p>
        </section>
      </main>
    </div>
  );
}
