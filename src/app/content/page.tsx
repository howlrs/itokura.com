import styles from "../page.module.css";

export default function Content() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>お品書き</h1>
                
                <section className={styles.menuSection}>
                    <h2>お料理</h2>
                    
                    <div className={styles.menuCategory}>
                        <h3>おつまみ</h3>
                        <div className={styles.menuGrid}>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>とりかわチップス</span>
                                <span className={styles.itemPrice}>580円</span>
                            </div>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>鶏肝煮</span>
                                <span className={styles.itemPrice}>580円</span>
                            </div>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>もろきゅう</span>
                                <span className={styles.itemPrice}>550円</span>
                            </div>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>冷やっこ</span>
                                <span className={styles.itemPrice}>500円</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.menuCategory}>
                        <h3>揚げ物</h3>
                        <div className={styles.menuGrid}>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>とり唐</span>
                                <span className={styles.itemPrice}>780円</span>
                            </div>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>たこ唐</span>
                                <span className={styles.itemPrice}>780円</span>
                            </div>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>いか下足</span>
                                <span className={styles.itemPrice}>680円</span>
                            </div>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>フライドポテト</span>
                                <span className={styles.itemPrice}>580円</span>
                            </div>
                        </div>
                        <p className={styles.note}>とり唐の味付け：しょうゆおろしポン酢、東醤、名古屋味噌</p>
                    </div>

                    <div className={styles.menuCategory}>
                        <h3>焼き物</h3>
                        <div className={styles.menuGrid}>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>だし巻き玉子</span>
                                <span className={styles.itemPrice}>650円</span>
                            </div>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>ほっけ</span>
                                <span className={styles.itemPrice}>580円</span>
                            </div>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>烏賊味</span>
                                <span className={styles.itemPrice}>780円</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.menuCategory}>
                        <h3>〆の一品</h3>
                        <div className={styles.menuGrid}>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>お茶漬け</span>
                                <span className={styles.itemPrice}>550円</span>
                            </div>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>ぶっかけ蕎麦（冷）</span>
                                <span className={styles.itemPrice}>700円</span>
                            </div>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>ぶっかけうどん</span>
                                <span className={styles.itemPrice}>700円</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.menuSection}>
                    <h2>お飲み物</h2>
                    
                    <div className={styles.menuCategory}>
                        <h3>ビール</h3>
                        <div className={styles.menuGrid}>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>生ビール（小）</span>
                                <span className={styles.itemPrice}>450円</span>
                            </div>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>生ビール（中）</span>
                                <span className={styles.itemPrice}>680円</span>
                            </div>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>生ビール（大）</span>
                                <span className={styles.itemPrice}>980円</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.menuCategory}>
                        <h3>日本酒</h3>
                        <div className={styles.menuGrid}>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>東の麓（小）</span>
                                <span className={styles.itemPrice}>450円</span>
                            </div>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>東の麓（大）</span>
                                <span className={styles.itemPrice}>850円</span>
                            </div>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>こだわり日本酒</span>
                                <span className={styles.itemPrice}>450円～</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.menuCategory}>
                        <h3>サワー</h3>
                        <div className={styles.menuGrid}>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>生レモン</span>
                                <span className={styles.itemPrice}>650円</span>
                            </div>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>生グレープフルーツ</span>
                                <span className={styles.itemPrice}>650円</span>
                            </div>
                            <div className={styles.menuItem}>
                                <span className={styles.itemName}>生オレンジ</span>
                                <span className={styles.itemPrice}>650円</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
