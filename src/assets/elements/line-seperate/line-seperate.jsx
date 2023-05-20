import React from 'react'
import "./lineseperate.scss"


function LineSeperator({text = "", right = false}) {
  return (
    <div className='gg-line-container'>
        <div className='gg-text' style={{textAlign:right ? 'right' : 'left'}}>
            <span>{text}</span>
        </div>
        <div className='gg-line'/>
    </div>
  )
}

export default LineSeperator