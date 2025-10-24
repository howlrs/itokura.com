import styles from "../page.module.css";

export default function Contact() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>お問い合わせ</h1>

                <section className={styles.contactSection}>
                    <h2>店舗情報</h2>
                    <div className={styles.storeInfo}>
                        <h3>味登古品 糸蔵</h3>
                        <div className={styles.infoGrid}>
                            <div className={styles.infoItem}>
                                <dt>所在地</dt>
                                <dd>{process.env.NEXT_PUBLIC_ADDRESS || "山形県南陽市宮内1024"}</dd>
                            </div>
                            <div className={styles.infoItem}>
                                <dt>お電話</dt>
                                <dd>{process.env.NEXT_PUBLIC_PHONE || "0238-47-2133"}</dd>
                            </div>
                            <div className={styles.infoItem}>
                                <dt>営業時間</dt>
                                <dd>18:30～23:00<br />（ラストオーダー：お食事22:00、お飲み物22:30）</dd>
                            </div>
                            <div className={styles.infoItem}>
                                <dt>定休日</dt>
                                <dd>月曜日・日曜日<br />※予約をいただきましたら営業いたします</dd>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.contactSection}>
                    <h2>お問い合わせについて</h2>
                    <p>
                        メニューの詳細、アレルギー対応、団体利用など、ご不明な点がございましたら
                        お気軽にお電話にてお問い合わせください。
                    </p>

                    <div className={styles.contactMethods}>
                        <div className={styles.contactMethod}>
                            <h3>お電話</h3>
                            <p className={styles.phone}>{process.env.NEXT_PUBLIC_PHONE || "0238-47-2133"}</p>
                            <p>営業時間内にお電話いただければ、すぐにお答えいたします。</p>
                        </div>
                    </div>
                </section>

                <section className={styles.contactSection}>
                    <h2>よくあるお問い合わせ</h2>
                    <div className={styles.faq}>
                        <div className={styles.faqItem}>
                            <h3>Q. 席の予約は必要ですか？</h3>
                            <p>A. 確実にお席をご用意するため、事前のご予約をおすすめしております。</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Q. 定休日でも営業していますか？</h3>
                            <p>A. 月曜日・日曜日が定休日ですが、ご予約をいただきましたら営業いたします。</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Q. アレルギー対応はできますか？</h3>
                            <p>A. はい、対応いたします。事前にお知らせください。</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Q. 駐車場はありますか？</h3>
                            <p>A. 一般車に関しては、いとや旅館の駐車場をご利用いただけます。大型車は対応できかねる場合がございます、事前にご確認ください。</p>
                        </div>
                    </div>
                </section>

                <section className={styles.contactSection}>
                    <h2>いとや旅館について</h2>
                    <p>
                        糸蔵は、いとや旅館に併設された居酒屋です。
                        ご宿泊については、じゃらんからご予約いただけます。
                    </p>
                    <a href="https://www.jalan.net/yad380300/" target="_blank" rel="noopener noreferrer" className={styles.hotelLink}>
                        いとや旅館のご予約（じゃらん）
                    </a>
                </section>
            </main>
        </div>
    );
}
