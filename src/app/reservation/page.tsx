import styles from "../page.module.css";

export default function Reservation() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>ご予約</h1>
                
                <section className={styles.reservationSection}>
                    <h2>お電話でのご予約</h2>
                    <div className={styles.phoneReservation}>
                        <p className={styles.mainContact}>
                            <strong>TEL: {process.env.NEXT_PUBLIC_PHONE || "0238-47-2133"}</strong>
                        </p>
                        <p>営業時間：18:30～23:00</p>
                        <p>定休日：月曜日・日曜日</p>
                        <p className={styles.notice}>
                            ※定休日でもご予約をいただきましたら営業いたします
                        </p>
                    </div>
                </section>

                <section className={styles.reservationSection}>
                    <h2>ご予約の際のお願い</h2>
                    <ul className={styles.requestList}>
                        <li>お名前・お電話番号</li>
                        <li>ご利用日時</li>
                        <li>ご利用人数</li>
                        <li>コース料理をご希望の場合はその旨</li>
                        <li>アレルギーや苦手な食材がございましたらお知らせください</li>
                    </ul>
                </section>

                <section className={styles.reservationSection}>
                    <h2>宿泊をお考えの方</h2>
                    <div className={styles.hotelInfo}>
                        <h3>いとや旅館のご予約</h3>
                        <p>
                            お食事と宿泊をご希望の方は、併設のいとや旅館もご利用いただけます。
                        </p>
                        <a href={process.env.NEXT_PUBLIC_ITOYA_RYOKAN_URL || "https://itoya-ryokan.com/"} target="_blank" rel="noopener noreferrer" className={styles.hotelLink}>
                            {process.env.NEXT_PUBLIC_ITOYA_RYOKAN_NAME || "いとや旅館"}ウェブサイトで予約
                        </a>
                        <p className={styles.note}>
                            宿泊のお客様には、糸蔵でのお夕食もご提供いたします。
                        </p>
                    </div>
                </section>

                <section className={styles.reservationSection}>
                    <h2>キャンセルについて</h2>
                    <div className={styles.cancellation}>
                        <p>
                            やむを得ずキャンセルされる場合は、お早めにお電話にてご連絡ください。
                        </p>
                        <p>
                            コース料理をご予約いただいている場合、当日キャンセルはキャンセル料が発生する場合がございます。
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
