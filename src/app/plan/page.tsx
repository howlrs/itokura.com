import styles from "../page.module.css";

export default function Plan() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>コース・プラン</h1>
                
                <section className={styles.planSection}>
                    <h2>お食事コース</h2>
                    <p className={styles.description}>
                        糸蔵では、お客様のご要望に応じてコース料理をご用意いたします。
                        事前にご相談ください。
                    </p>
                    
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h3>おまかせコース</h3>
                            <p>季節の食材を使った料理長おすすめのコースです。</p>
                            <p className={styles.price}>料金：お一人様 3,000円～</p>
                            <p className={styles.note}>※2名様より承ります</p>
                        </div>
                        
                        <div className={styles.card}>
                            <h3>宴会コース</h3>
                            <p>歓送迎会や各種ご宴会に最適なコースです。</p>
                            <p className={styles.price}>料金：お一人様 4,000円～</p>
                            <p className={styles.note}>※4名様より承ります</p>
                        </div>
                    </div>
                </section>

                <section className={styles.planSection}>
                    <h2>いとや旅館宿泊者様限定</h2>
                    <div className={styles.hotelGuest}>
                        <h3>お夕食プラン</h3>
                        <p>
                            いとや旅館にご宿泊のお客様には、糸蔵でのお夕食をご提供いたします。
                            地元の新鮮な食材を使った郷土料理をお楽しみください。
                        </p>
                        <ul className={styles.featureList}>
                            <li>山形県産の旬の食材を使用</li>
                            <li>地酒「東の麓」とのペアリング</li>
                            <li>アットホームな雰囲気でのお食事</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.planSection}>
                    <h2>ご予約・お問い合わせ</h2>
                    <div className={styles.contact}>
                        <p>コースやプランをご希望の方は、事前にお電話にてご相談ください。</p>
                        <div className={styles.contactInfo}>
                            <p><strong>お電話：</strong>{process.env.NEXT_PUBLIC_PHONE || "0238-47-2133"}</p>
                            <p><strong>営業時間：</strong>18:30～23:00</p>
                            <p className={styles.notice}>
                                ※定休日（月曜日・日曜日）でもご予約をいただきましたら営業いたします
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
