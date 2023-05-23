import './App.scss'
import './productpage.scss'
import NavBar from './assets/elements/navbar/navbar'
import {useEffect, useRef, useState} from 'react'
import useAnimationHook from './hook/animhook'
import LineSeperator from './assets/elements/line-seperate/line-seperate'
import Footer from './assets/elements/footer/footer'


export const ProductSection = () => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        useAnimationHook({
            className: '_A',
            ignoreclassName: '_B',
            threshold: windowSize.current[0] > 820 ? .5 : .4
        });
    }, [])

    return (
        <section className='gg-product-page'
            style={
                {minHeight: '40vh'}
        }>
            <div className='gg-product-section-page-container'>
                <div className='gg-product-page-image _A'>
                    <img src='/images/example-sup-picture.png' alt='Icon'/>
                    <span>$65.99*</span>
                </div>
                <div className='gg-product-page-content'>
                    <div className='gg-product-page-title'>
                        <h2>
                            <ggred>GRAPPLE GUY’S</ggred> CUTTING MIX
                            <span>2nd Revision</span>
                        </h2>
                        <div className='gg-product-red-bar _B'/>
                    </div>
                    <p className='_B'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut velit ut justo commodo rutrum. Phasellus ultrices facilisis arcu, in dignissim mauris rhoncus ac. Praesent at justo massa. Quisque quis sapien ac diam pulvinar egestas ac at arcu. Nam iaculis arcu nec nisi scelerisque, ullamcorper fringilla justo dapibus. Proin id tellus vel tortor sagittis rutrum at eu orci. Duis est metus, laoreet sit amet lectus vel, porta consectetur magna. Pellentesque lobortis scelerisque arcu quis pulvinar. Aenean feugiat pellentesque quam, non mollis ipsum viverra ut. Suspendisse sed nunc sapien.
                    </p>
                </div>

            </div>
            <div className='gg-product-purchase'
                draggable={false}>
                <img src='/images/arrow.svg' alt='arrow'
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
                    <img src="/images/supfacts.png" alt='Nutrition Facts'/>
                </div>
                <div className='gg-product-body'>
                    <span className='gg-body _B'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut velit ut justo commodo rutrum. Phasellus ultrices facilisis arcu, in dignissim mauris rhoncus ac. Praesent at justo massa. Quisque quis sapien ac diam pulvinar egestas ac at arcu. Nam iaculis arcu nec nisi scelerisque, ullamcorper fringilla justo dapibus. Proin id tellus vel tortor sagittis rutrum at eu orci. Nam iaculis arcu nec nisi scelerisque, ullamcorper fringilla justo dapibus. Proin id tellus vel tortor sagittis rutrum at eu orci. Nam iaculis arcu nec nisi scelerisque</span>
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
                            <Bullet text='Lorem Ipsum'/>
                            <Bullet text='Lorem Ipsum'/>
                            <Bullet text='Lorem Ipsum'/>
                            <Bullet text='Lorem Ipsum'/>
                            <Bullet text='Lorem Ipsum'/>
                            <Bullet text='Lorem Ipsum'/>
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
            <div className='gg-product-about-title'>
                <h2>About
                    <ggred>GG</ggred>
                </h2>
            </div>
            <div className='gg-product-about-container'>
                <div className='gg-product-about-image-frame _B'>
                    <img src='/images/graappleguy_man.svg' alt="grappleguy" className='main-gg'/>
                    <img src='/images/grappleguy_alt.svg' alt="grappleguy" className='alt-gg left'/>
                    <img src='/images/grappleguy_alt.svg' alt="grappleguy" className='alt-gg right'/>

                </div>
                <div className='gg-product-about-body'>
                    <h2>
                        Our Brand
                        <div className='gg-product-about-accentline'/>
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut velit ut justo commodo rutrum. Phasellus ultrices facilisis arcu, in dignissim mauris rhoncus ac. Praesent at justo massa. Quisque quis sapien ac diam pulvinar egestas ac at arcu. Nam iaculis arcu nec nisi scelerisque, ullamcorper fringilla justo dapibus.
                    </p>
                    <div className='gg-prdouct-about-accentline-body'/>

                    <div className='gg-product-about-bullet-container'>
                        <div className='gg-product-about-bullets'>
                            <Bullet text='Lorem ipsum dolor sit amet'/>
                            <Bullet text='Lorem ipsum dolor sit amet'/>
                            <Bullet text='Lorem ipsum dolor sit amet'/>
                            <Bullet text='Lorem ipsum dolor sit amet'/>
                            <Bullet text='Lorem ipsum dolor sit amet'/>
                            <Bullet text='Lorem ipsum dolor sit amet'/>
                            <Bullet text='Lorem ipsum dolor sit amet'/>
                            <Bullet text='Lorem ipsum dolor sit amet'/>

                        </div>
                        <div className='gg-product-purchase'>
                            <img src='/images/arrow.svg' alt='arrow'
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
            <div className='gg-product-more-title'>
                <h2>More <ggred>GG</ggred></h2>
                <span>We offer more options ranging from Rash guards to workout plans.</span>
            </div>
            <div className='gg-product-content'>
                <div className='gg-product-card'>
                    <img src='/images/dummy1.png' alt='arrow'/>
                    <div className='gg-product-card-body'>
                        <h2>Our Rash guards</h2>
                        <span className='gg-pc-span'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut velit ut justo commodo rutrum. Phasellus ultrices facilisis arcu, in dignissim mauris rhoncus ac. Praesent at justo massa. Quisque quis sapien ac diam pulvinar egestas ac at arcu.</span>
                        <div className='gg-product-purchase'>
                            <img src='/images/arrow.svg' alt='arrow'
                                draggable={false}/>
                            <span>Check It Out</span>
                        </div>
                    </div>
                </div>
                <div className='gg-product-card'>
                    <img src='/images/dummy2.png' alt='arrow'/>
                    <div className='gg-product-card-body'>
                        <h2><ggred>GG</ggred>&apos;s Workout Plan</h2>
                        <span className='gg-pc-span'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut velit ut justo commodo rutrum. Phasellus ultrices facilisis arcu, in dignissim mauris rhoncus ac. Praesent at justo massa. Quisque quis sapien ac diam pulvinar egestas ac at arcu.</span>
                        <div className='gg-product-purchase'>
                            <img src='/images/arrow.svg' alt='arrow'
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
