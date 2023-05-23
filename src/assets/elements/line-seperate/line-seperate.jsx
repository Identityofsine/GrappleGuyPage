import React from 'react'
import "./lineseperate.scss"


function LineSeperator({text = "", right = false, animated = {animate:false, onetimeonly:false}, onTransitionEnd = () => {}}) {
  return (
    <div className={`gg-line-container ${animated.animate ? animated.onetimeonly ? '_B' : '_A' : ''}`} onTransitionEnd={onTransitionEnd}>
        <div className='gg-text' style={{textAlign:right ? 'right' : 'left'}}>
            <span>{text}</span>
        </div>
        <div className='gg-line'/>
    </div>
  )
}

export default LineSeperator