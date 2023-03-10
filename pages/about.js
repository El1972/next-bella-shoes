import styles from '../styles/Home.module.css'
import { FaChevronDown } from 'react-icons/fa';
import SewingNeedle from '../components/SewingNeedle';




const About = () => {
    return (
        <div>
            <div className={styles['main-header-wrapper']}>
                <div className={styles['inner-main-header-wrapper']}>
                    <div className={styles['header-container']}>
                        <h1 className={styles['about-header']}>About Us</h1>
                    </div>
                </div>
                <div className={styles['sub-header-container']}>
                    <p className={styles['sub-header-itself']}>
                        Home<FaChevronDown className={styles['chevron-right']} />
                        Quality Leather</p>
                </div>
            </div>

            <div className={styles['about-container']}>
                <div className={styles['about-inner-container']}>

                    <div className={`${styles['first-wrapper']} ${styles['clearfix']}`}>
                        <div className={styles['first-section-image-container']}>
                            <div className={styles['first-section-image']}>
                                <picture>
                                    <img src="./../images/6335ab70a0a8d1.74631122.jpeg"
                                        alt="" className={styles['first-image']} />
                                </picture>
                            </div>
                        </div>
                        <div className={styles['first-section-text-container']}>
                            <div className={styles['first-section-text']}>

                                <div className={styles['first-text']}>
                                    <h1 className={styles['about-heading-one']}>BELLA: CREATED ESPECIALLY FOR YOU!</h1>
                                    <h4 className={styles['imagine-heading']}>Imagine the perfect shoes ...</h4>
                                    <p className={styles['about-first-paragraph']}>Handmade from luxurious leather, with a stunning design in the exact
                                        color with ideal height and size that fits you perfectly ...
                                        Now imagine that in order to have them, there is no need to spend
                                        hours wandering the shops, nor to pay more than you want ...
                                        You no longer have to fantasize! Turn your shoes dream into reality
                                        with Bella - shoes that conform to your every wish!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles['middle-statement-container']}>
                        <div className={styles['middle-statement-properties']}>
                            <div className={styles['sewing-wrapper']}>
                                <div className={styles['sewing-container']}>
                                    <div className={styles['inner-sewing-container']}>
                                        <SewingNeedle className={styles['sewing-needle']} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles['statement-container']}>
                                <p className={styles['middle-statement-one']}>
                                    We were united by the idea that shoes should <br />
                                    reflect the personality of its owner...
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['second-wrapper']} ${styles['clearfix']}`}>
                        <div className={styles['second-section-image-container']}>
                            <div className={styles['second-section-image']}>
                                <picture>
                                    <img src="./../images/6335abfda9db11.54886465.jpeg"
                                        alt="" className={styles['second-image']} />
                                </picture>
                            </div>
                        </div>
                        <div className={styles['second-section-text-container']}>
                            <div className={styles['second-section-text']}>
                                <div className={styles['second-text']}>
                                    <h1 className={styles['about-heading-two']}>THE STORY</h1>
                                    <p className={styles['about-second-paragraph']}>Our fashion story began at the end of last century,
                                        when as young entrepreneurs we decided to turn one
                                        of the most beloved Italian crafts - manufacture of
                                        shoes in our specialty. We were united by the idea
                                        that shoes should reflect the personality of its owner,
                                        and should be created especially for him/her.
                                        So we started manufacturing handmade women&apos;s and men&apos;s
                                        custom shoes.
                                        We started with a modest equity, but with much enthusiasm,
                                        inspiration and effort. This is what helped us over the
                                        years of endless hard work to win loyal customers and to
                                        turn our modest workshop into a modern factory, equipped
                                        according to the highest technological standards in the
                                        industry. Of course we did not abandon the concept to
                                        manufacture handmade unique models, so much of our
                                        investments were deposited in attracting and developing
                                        the best and most experienced master shoemakers and most
                                        talented designers
                                        With the advent of 3D technology we recognized a chance
                                        to derive the accumulated experience and skills to a new
                                        level by allowing customers to quickly and easily
                                        visualize their ideas and requirements. Captivated by
                                        the almost limitless possibilities of online shopping,
                                        we set ourselves the task of creating the perfect online
                                        store in which we can transfer our individual approach
                                        and allow everyone to find exactly what they want.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['third-wrapper']} ${styles['clearfix']}`}>
                        <div className={styles['inner-wrapper']}>
                            <div className={styles['third-section-text-container']}>
                                <div className={styles['third-section-text']}>
                                    <div className={styles['third-text']}>
                                        <h1 className={styles['about-heading-three']}>THE PHILOSOPHY</h1>
                                        <p className={styles['about-third-paragraph']}>OUR PHILOSOPHY IS TO BE UNIQUE - ONE AND ONLY...</p>
                                        <br />
                                        <p className={styles['philosophy-sub-text']}>And here is how we achieve it:</p>
                                        <ul className={styles['dotted-list']}>
                                            <li>
                                                We rely on the rich Italian tradition of manufacturing luxury shoes and the unmatched
                                                style from the Mecca of fashion.
                                            </li>
                                            <li>Our models are unique, made by hand, exclusively for you.</li>
                                            <li>Our design always corresponds exactly to your wishes, to the smallest detail.</li>
                                            <li>Quality is always our best and strictly controlled at every stage of shoe production.</li>
                                            <li>We work only with specially selected first-class leather and materials safe for health and
                                                the environment.</li>
                                            <li>  We offer the most affordable custom shoes on
                                                the market - with prices twice lower than the
                                                average for the segment, furthermore - with
                                                some of the shortest deadlines for
                                                production and delivery.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['third-section-image-container']}>
                                <div className={styles['third-section-image']}>
                                    <picture>
                                        <img src="./../images/6335ac1b5b0470.11256588.jpeg"
                                            alt="" className={styles['third-image']} />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About