import React, { Component } from 'react'
import Icon1 from '../image/basket ball.png'
import Icon2 from '../image/monitor.png'
import Icon3 from '../image/user-circle.png'
import Icon4 from '../image/filter 01.png'

export default class secondSection extends Component {
  render() {
    return (
      <div className='second_section'>
            <h1 className='second_section_wrapper_title'>Преимущества</h1>
        <div className='second_section_wrapper'>
            <div className='second_section_wrapper_card'>
                <img src={Icon1} alt='' className='second_section_wrapper_card_img1'/>
                <h1 className='second_section_wrapper_card_title'>Высокая скорость</h1>
                <p className='second_section_wrapper_card_text1'>Безлимитный Интернет для бизнеса на скорости до 
                1 Гбит/с.</p>
                <a href='#!' className='second_section_wrapper_card_link'>Подключить</a>
            </div>
            <div className='second_section_wrapper_card'>
                <img src={Icon2} alt='' className='second_section_wrapper_card_img2'/>
                <h1 className='second_section_wrapper_card_title'>Мониторинга</h1>
                <p className='second_section_wrapper_card_text2'>Автоматическая диаг-ностика предотвращает технические сбои</p>
            </div>
            <div className='second_section_wrapper_card'>
                <img src={Icon3} alt='' className='second_section_wrapper_card_img3'/>
                <h1 className='second_section_wrapper_card_title'>Личный кабинет</h1>
                <p className='second_section_wrapper_card_text3'>Узнавайте и попол-няйте баланс, получай-те счета, меняйте настройки, смотрите статистику.</p>
            </div>
            <div className='second_section_wrapper_card'>
                <img src={Icon4} alt='' className='second_section_wrapper_card_img4'/>
                <h1 className='second_section_wrapper_card_title'>Техподдержка</h1>
                <p className='second_section_wrapper_card_text4'>24/7 Горячая линия или ваш персональ-ный менеджер ответят на все вопросы </p>
            </div>
        </div>
      </div>
    )
  }
}
