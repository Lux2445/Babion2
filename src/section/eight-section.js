import React, { Component } from 'react'
import Email from '../image/email.png'

export default class eightSection extends Component {
  render() {
    return (
        <div className='eight_section'>
            <div className='eight_section_wrapper'>
              <div className='eight_section_wrapper_text'>
              <h1 className='eight_section_wrapper_paragraph'>Почта на домене</h1>
                <p className='eight_section_wrapper_title'>Создавайте 	&#171;красивые&#187; именные электронные адреса сотрудникам</p>
                <a href='' className='eight_section_wrapper_link'>Подробнее &#8594;</a>
              </div>
                <img src={Email} alt='' className='eight_section_wrapper_image'/>
            </div>
        </div>
    )
  }
}
