import styles from "../page.module.css";

export default function About() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>糸蔵について</h1>
                
                <section className={styles.aboutSection}>
                    <h2>ごあいさつ</h2>
                    <p>
                        山形県南陽市宮内、熊野大社の麓にあるいとや旅館に併設された居酒屋「味登古品 糸蔵」です。
                        地元の新鮮な食材と山形の地酒を心を込めてご提供いたします。
                    </p>
                </section>

                <section className={styles.aboutSection}>
                    <h2>店舗概要</h2>
                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <dt>正式名称</dt>
                            <dd>味登古品 糸蔵</dd>
                        </div>
                        <div className={styles.infoItem}>
                            <dt>所在地</dt>
                            <dd>{process.env.NEXT_PUBLIC_ADDRESS || "山形県南陽市宮内"}</dd>
                        </div>
                        <div className={styles.infoItem}>
                            <dt>業態</dt>
                            <dd>居酒屋・お食事処</dd>
                        </div>
                        <div className={styles.infoItem}>
                            <dt>営業時間</dt>
                            <dd>18:30～23:00<br />（ラストオーダー：お食事22:00、お飲み物22:30）</dd>
                        </div>
                        <div className={styles.infoItem}>
                            <dt>定休日</dt>
                            <dd>月曜日・日曜日<br />※予約をいただきましたら営業いたします</dd>
                        </div>
                        <div className={styles.infoItem}>
                            <dt>お電話</dt>
                            <dd>{process.env.NEXT_PUBLIC_PHONE || "0238-47-2133"}</dd>
                        </div>
                    </div>
                </section>

                <section className={styles.aboutSection}>
                    <h2>こだわり</h2>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h3>地産地消</h3>
                            <p>山形県産の新鮮な食材を使用し、季節の味覚をお楽しみいただけます。</p>
                        </div>
                        <div className={styles.card}>
                            <h3>地酒</h3>
                            <p>山形の地酒「東の麓」をはじめ、厳選した日本酒を取り揃えております。</p>
                        </div>
                        <div className={styles.card}>
                            <h3>おもてなし</h3>
                            <p>いとや旅館併設ならではの、温かで心のこもったおもてなしでお迎えいたします。</p>
                        </div>
                    </div>
                </section>

                <section className={styles.aboutSection}>
                    <h2>関連店舗</h2>
                    <div className={styles.relatedStore}>
                        <h3>いとや旅館</h3>
                        <p>正式名称：熊野大社の麓 地酒と肴で「緑」を繋ぐ宿 いとや旅館</p>
                        <p>糸蔵は、いとや旅館に併設された居酒屋として、宿泊のお客様にもお食事をご提供しております。</p>
                        <a href={process.env.NEXT_PUBLIC_ITOYA_RYOKAN_URL || "https://itoya-ryokan.com/"} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            {process.env.NEXT_PUBLIC_ITOYA_RYOKAN_NAME || "いとや旅館"}ウェブサイト
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
