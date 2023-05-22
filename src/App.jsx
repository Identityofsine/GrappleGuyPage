import './App.scss'
import './productpage.scss'
import NavBar from './assets/elements/navbar/navbar'
import {useEffect, useRef} from 'react'
import useAnimationHook from './hook/animhook'
import LineSeperator from './assets/elements/line-seperate/line-seperate'


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
            <div className='gg-product-page-image'>
                <img src='/images/example-sup-picture.png' alt='Icon'/>
                <span>$65.99*</span>
            </div>
            <div className='gg-product-page-title'>
                <h2>
                    <ggred>GRAPPLE GUY’S</ggred>
                    CUTTING MIX
                    <span>2nd Revision</span>
                </h2>
                <div className='gg-product-red-bar _B'/>
            </div>
            <p className='_B'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut velit ut justo commodo rutrum. Phasellus ultrices facilisis arcu, in dignissim mauris rhoncus ac. Praesent at justo massa. Quisque quis sapien ac diam pulvinar egestas ac at arcu. Nam iaculis arcu nec nisi scelerisque, ullamcorper fringilla justo dapibus. Proin id tellus vel tortor sagittis rutrum at eu orci. Duis est metus, laoreet sit amet lectus vel, porta consectetur magna. Pellentesque lobortis scelerisque arcu quis pulvinar. Aenean feugiat pellentesque quam, non mollis ipsum viverra ut. Suspendisse sed nunc sapien.
            </p>
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

    return (
        <section className='gg-product-ingredients'>
            <h2>INGREDIENTS</h2>
            <div className='gg-product-container'>
                <div className='gg-product-image-container'>
                    <img src="/images/supfacts.png" alt='Nutrition Facts'/>
                </div>
                <div className='gg-product-body'>
                    <span className='gg-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut velit ut justo commodo rutrum. Phasellus ultrices facilisis arcu, in dignissim mauris rhoncus ac. Praesent at justo massa. Quisque quis sapien ac diam pulvinar egestas ac at arcu. Nam iaculis arcu nec nisi scelerisque, ullamcorper fringilla justo dapibus. Proin id tellus vel tortor sagittis rutrum at eu orci. Nam iaculis arcu nec nisi scelerisque, ullamcorper fringilla justo dapibus. Proin id tellus vel tortor sagittis rutrum at eu orci. Nam iaculis arcu nec nisi scelerisque</span>
                    <div className='gg-product-body-bullet-container'>
                        <LineSeperator text='SUMMED UP'/>
                        <div className='gg-product-body-bullets'>
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
                <div className='gg-product-about-image'>
                    <img src='/images/GG_LOGO.svg' alt="grappleguy"/>
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
                        <div className='gg-product-about-bullets'></div>
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
        </div>
    )
}

export default App
