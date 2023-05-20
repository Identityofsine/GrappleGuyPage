import './App.scss'
import './productpage.scss'
import NavBar from './assets/elements/navbar/navbar'
import { useEffect, useRef } from 'react'
import useAnimationHook from './hook/animhook'
import LineSeperator from './assets/elements/line-seperate/line-seperate'


export const ProductSection = () => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    useEffect(() => {
      useAnimationHook({className:'_A', ignoreclassName:'_B', threshold:  windowSize.current[0] > 820 ? .5 : .4});
    }, [])

    return (
        <section className='gg-product-page' style={{minHeight:'92vh'}}>
            <div className='gg-product-page-image'>
                <img src='/images/example-sup-picture.png' alt='Icon'/>
                <span>$65.99*</span>
            </div>
            <div className='gg-product-page-title'>
                <h2>
                  <ggred>GRAPPLE GUY’S</ggred> CUTTING MIX
                  <span>2nd Revision</span>
                </h2>
                <div className='gg-product-red-bar _B'/>
            </div>
            <p className='_A'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut velit ut justo commodo rutrum. Phasellus ultrices facilisis arcu, in dignissim mauris rhoncus ac. Praesent at justo massa. Quisque quis sapien ac diam pulvinar egestas ac at arcu. Nam iaculis arcu nec nisi scelerisque, ullamcorper fringilla justo dapibus. Proin id tellus vel tortor sagittis rutrum at eu orci. Duis est metus, laoreet sit amet lectus vel, porta consectetur magna. Pellentesque lobortis scelerisque arcu quis pulvinar. Aenean feugiat pellentesque quam, non mollis ipsum viverra ut. Suspendisse sed nunc sapien. Maecenas hendrerit enim in erat lacinia, non lacinia arcu interdum. Ut rutrum dolor vitae purus convallis, non dictum neque posuere. Integer laoreet eros a sem finibus, vitae volutpat arcu lobortis. Donec fringilla risus est, ut accumsan nisi ornare nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut velit ut justo commodo rutrum. Phasellus ultrices facilisis arcu, in dignissim mauris rhoncus ac. Praesent at justo massa. Quisque quis sapien ac diam pulvinar egestas ac at arcu. Aenean feugiat pellentesque quam, non mollis ipsum viverra ut. Suspendisse sed nunc sapien. Maecenas hendrerit enim in erat lacinia, non lacinia arcu interdum. Mauris a leo nisl. Donec ut dapibus enim, et vestibulum enim. Ut id libero egestas, accumsan lorem a, lacinia mauris. Nulla facilisi. Integer sollicitudin quam nec turpis pharetra, ut euismod nunc consectetur. Vestibulum sagittis eros quis lectus imperdiet, eget tempor urna volutpat. Vestibulum quis mauris eu enim sollicitudin sagittis mattis id ligula. 
            </p>
            <div className='gg-product-purchase' draggable={false}>
                <img src='/images/arrow.svg' alt='arrow' draggable={false}/>
                <span>Purchase</span>
            </div>
        </section>
    )
}


function App() {

    return (
        <div className='wrapper'>
            <NavBar/>
            <ProductSection/>
            <LineSeperator text='CUTTING MIX' right={false}/>
        </div>
    )
}

export default App
