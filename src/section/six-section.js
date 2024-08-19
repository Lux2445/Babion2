import React, { Component } from 'react'
import First from '../image/1121.png'
import Second from '../image/2212.png'

export default class sixSection extends Component {
  render() {
    return (
        <div className='six_section'>
        <h1 className='six_section_wrapper_title'>Домин и хостинг для сайта</h1>
      <div className='six_section_wrapper'>
        <div className='six_section_wrapper_card'>
          <div className='six_section_wrapper_card_wrapper'>
          <h1 className='six_section_wrapper_card_paragraph'>Домин</h1>
          <p className='six_section_wrapper_card_title'>Размещайте сайты на быстром хостинге с удобной панелью управления</p>
          <div className='button_box'>
          <button className='six_section_wrapper_card_button1'>Подробное</button>
          <button className='six_section_wrapper_card_button2'>Оформить</button>
          </div>
            <img src={First} className='six_section_wrapper_card_img1' alt="description of image"/>
          </div>
        </div>
        <div className='six_section_wrapper_card'>
          <div className='six_section_wrapper_card_wrapper'>
          <h1 className='six_section_wrapper_card_paragraph'>Хостинг</h1>
            <p className='six_section_wrapper_card_title'>Размещайте сайты на быстром хостинге с удобной панелью управления</p> 
            <div className='button_box'>
            <button className='six_section_wrapper_card_button1'>Подробное</button>
            <button className='six_section_wrapper_card_button2'>Подключить</button>
            </div>
            <img src={Second} className='six_section_wrapper_card_img1' alt="description of image"/>
            </div>  
        </div>
        </div>
      </div>
    )
  }
}





















