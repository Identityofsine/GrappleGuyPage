import './App.scss'
import './productpage.scss'
import './productpage_phone.scss'
import NavBar from './assets/elements/navbar/navbar'
import {useEffect, useRef, useState} from 'react'
import useAnimationHook from './hook/animhook'
import LineSeperator from './assets/elements/line-seperate/line-seperate'
import Footer from './assets/elements/footer/footer'


export const ProductSection = () => {


    return (
        <section className='gg-product-page'
            style={
                {minHeight: '40vh'}
        }>
            <div className='gg-product-section-page-container'>
                <div className='gg-product-page-image _A'>
                    <img src='images/example-sup-picture.png' alt='Icon'/>
                    <span>$65.99*</span>
                </div>
                <div className='gg-product-page-content'>
                    <div className='gg-product-page-title'>
                        <h2>
                            <ggred>GRAPPLE GUY’S</ggred> GRAPPLE GEAR<span>2nd Revision</span>
                        </h2>
                        <div className='gg-product-red-bar _B'/>
                    </div>
                    <p className='_B'>
                        Grapple Gear is the newest game-changer for you or your favorite martial artist. The highest level of athletes does whatever it takes to win. This may mean doing that extra rep in the gym or preparing for competition a certain way. Starting today, it means implementing our formula into your current training regimen.
                    </p>
                </div>

            </div>
            <div className='gg-product-purchase'
                draggable={false}>
                <img src='images/arrow.svg' alt='arrow'
                    draggable={false}/>
                <span>Purchase</span>
            </div>
        </section>
    )
}


export const Bullet = ({
    text = "",
    onClick = () => {}
}) => {
    return (
        <div className='gg-bullet'
            onClick={onClick}>
            <div className='gg-bullet-block'/>
            <span>{text}</span>
        </div>
    )
}


export const Ingredients = () => { // temporarily used, only for pages that contain ingredients, some pages don't contain ingredients such as rashguards...
    const [animateBullets, setAnimateState] = useState(false);
    return (
        <section className='gg-product-ingredients'>
            <h2 className='_A'>INGREDIENTS</h2>
            <div className='gg-product-container'>
                <div className='gg-product-image-container'>
                    <img src="images/supfacts.png" alt='Nutrition Facts'/>
                </div>
                <div className='gg-product-body'>
                    <span className='gg-body _B'>Grapple Gear is more like a nootropic (mental enhancement) than a conventional &quot;pre-workout.&quot; It gives you the ability to be the best version of yourself in training or competition. <br/><i>(bullet points bellow.)</i>
                        
                    
                    &nbsp;<br/><br/>Grapple Gear includes a carefully put-together formula that provides you with energy, focus, and fatigue management. So, if you&apos;re looking to bring your game to the next level, buy our formula today.</span>
                    <div className='gg-product-body-bullet-container'>
                        <LineSeperator text='SUMMED UP'
                            animated={
                                {
                                    animate: true,
                                    onetimeonly: true
                                }
                            }
                            onTransitionEnd={
                                () => {
                                    setAnimateState(true)
                                }
                            }/>
                        <div className={
                            `gg-product-body-bullets ${
                                animateBullets ? 'show' : ''
                            }`
                        }>
                            <Bullet text='L-Theanine (Mental Enhancement)'/>
                            <Bullet text='Beta-Alanine (Endurance & Fatigue Management)'/>
                            <Bullet text='Caffeine (Energy & Energy)'/>
                            <Bullet text='Bacopa (Stress Management*)'/>
                            <Bullet text='L-Tyrosine (Focus)'/>
                            {/* <Bullet text='Lorem Ipsum'/> */}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export const AboutBlock = () => {
    return (
        <section className='gg-product-about'>
            <div className='gg-product-about-title _B'>
                <h2>ABOUT <ggred>GG</ggred>
                </h2>
            </div>
            <div className='gg-product-about-container'>
                <div className='gg-product-about-image-frame _B'>
                    <img src='images/graappleguy_man.svg' alt="grappleguy" className='main-gg'/>
                    <img src='images/grappleguy_alt.svg' alt="grappleguy" className='alt-gg left'/>
                    <img src='images/grappleguy_alt.svg' alt="grappleguy" className='alt-gg right'/>

                </div>
                <div className='gg-product-about-body'>
                    <h2>
                        Our Brand
                        <div className='gg-product-about-accentline'/>
                    </h2>
                    <p className='_B'>Grapple Guy is a brand for martial artists of all kinds. We offer supplements to improve your mental game, a grappler-specific workout plan to enhance your physical game, and some super slick merchandise with our signature logo to elevate your style game! If you&apos;re a serious martial artist dedicated to your craft, we have something for you.
                    </p>
                    <div className='gg-prdouct-about-accentline-body'/>

                    <div className='gg-product-about-bullet-container'>
                        <div className='gg-product-about-bullets'>
                            <Bullet text='Specialized Supplements'/>
                            <Bullet text='Premium Merchandise'/>
                            <Bullet text='High Level Workout Plans'/>
                            <Bullet text='For MMA/Martial Arts Fans'/>
                            <Bullet text='By Martial Artists'/>
                            <Bullet text='For Martial Artists'/>


                        </div>
                        <div className='gg-product-purchase'>
                            <img src='images/arrow.svg' alt='arrow'
                                draggable={false}/>
                            <span>Check It Out</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

const MoreSection = () => {
    return (
        <section className='gg-product-more-section'>
            <div className='gg-product-more-title _B'>
                <h2>MORE <ggred>GG</ggred>
                </h2>
                <span>We offer more options ranging from Rash guards to workout plans.</span>
            </div>
            <div className='gg-product-content'>
                <div className='gg-product-card _B'>
                    <img src='images/dummy1.png' alt='arrow' className='icon'/>
                    <div className='gg-product-card-body'>
                        <h2>Our Rash guards</h2>
                        <span className='gg-pc-span'>Elevate your training experience with our premium rash guards, available in classic white or sleek black, adorned with the iconic Grapple Guy logo. Designed for both style and functionality, these high-quality rash guards are the epitome of performance and durability.</span>
                        <div className='gg-product-purchase'>
                            <img src='images/arrow.svg' alt='arrow'
                                draggable={false}/>
                            <span>Check It Out</span>
                        </div>
                    </div>
                </div>
                <div className='gg-product-card _B'>
                    <img src='images/dummy2.png' alt='arrow' className='icon'/>
                    <div className='gg-product-card-body'>
                        <h2>
                            <ggred>GG</ggred>&apos;s Workout Plan</h2>
                        <span className='gg-pc-span'>Are you an aspiring grappler looking to take your skills to new heights? Our specially crafted workout plan is tailored to meet the unique demands of grapplers at any level, empowering you to unleash your full potential on the mats.</span>
                        <div className='gg-product-purchase'>
                            <img src='images/arrow.svg' alt='arrow'
                                draggable={false}/>
                            <span>Check It Out</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


function App() {

    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        useAnimationHook({
            className: '_A',
            ignoreclassName: '_B',
            threshold: windowSize.current[0] > 960 ? .7 : .15
        });
    }, [])

    return (
        <div className='gg-app-wrapper'>
            <NavBar/>
            <ProductSection/>
            <LineSeperator text='CUTTING MIX'
                right={false}/>
            <Ingredients/>
            <LineSeperator text="INGREDIENTS"
                right={true}/>
            <AboutBlock/>
            <LineSeperator text="GRAPPLEGUY"
                right={false}/>
            <MoreSection/>
            <Footer/>
        </div>
    )
}

export default App
