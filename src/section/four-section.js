import React, { Component } from 'react'
import Icon1 from '../image/image 70.png'
import Icon2 from '../image/mikro.png'
import Icon3 from '../image/share.png'
import Icon4 from '../image/people.png'
import Icon5 from '../image/params.png'
import Icon6 from '../image/call-block.png'
import Icon7 from '../image/users 02.png'


export default class fourSection extends Component {
  render() {
    return (
    <div className='four_section'>
        <div className='four_section_wrapper'>
            <h1 className='four_section_wrapper_text'>IP-телефония для бизнеса</h1>
            <div className='four_section_wrapper_part1'>
                <div className='four_section_wrapper_part1_section1'>
                        <div className='four_section_wrapper_part1_section1_title'>
                            <p className='four_section_wrapper_part1_section1_text'>Городские номера для бизнеса — общайтесь на выгодных условиях с сотрудниками, партнёрами и клиентами по всей Республики Таджикистан и за её пределами</p>
                        </div>
                        <div className='four_section_wrapper_part1_section1_title_button'>
                            <button className='four_section_wrapper_part1_section1_button1'>Подробное</button>
                            <button className='four_section_wrapper_part1_section1_button2'>Заказать</button>                    
                        </div>
                </div>
                <div className='four_section_wrapper_part1_section2'>
                    <img src={Icon1} alt='' className='four_section_wrapper_part1_section2_image'/>
                </div>
            </div>
            <div className='four_section_wrapper_part2'>
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="microphone-container">
                            <img src={Icon2} alt='' className=" microphone-icon"/>
                            <div className="wave wave1"></div>
                            <div className="wave wave2"></div>
                            <div className="wave wave3"></div>
                        </div>
                        <p className='grid-item-text grid-item-text-first1 '>Запись всех звонков.
                        Оценка разговоров клиентами.
                        Аналитика речи.</p> 
                    </div>
                    <div className="grid-item">
                    <div className="microphone-container">
                        <img src={Icon3} alt='' className='grid-item-image2'/>
                        <div className="wave wave1"></div>
                        <div className="wave wave2"></div>
                        <div className="wave wave3"></div>
                    </div>
                        <p className='grid-item-text grid-item-text-second'>Объединить офисы в единую 
                        корпоративную телефонную сеть</p>
                    </div>
                    <div className="grid-item">
                    <div className="microphone-container">
                        <img src={Icon4} alt='' className='grid-item-image2'/>
                        <div className="wave wave1"></div>
                        <div className="wave wave2"></div>
                        <div className="wave wave3"></div>
                    </div>
                        <p className='grid-item-text grid-item-text-third'>Организовать работу колл-центра
                        с многоканальным номером
                        </p>
                    </div>
                    <div className="grid-item">
                    <div className="microphone-container">
                        <img src={Icon5} alt='' className='grid-item-image2'/>
                        <div className="wave wave1"></div>
                        <div className="wave wave2"></div>
                        <div className="wave wave3"></div>
                    </div>
                        <p className='grid-item-text grid-item-text-four'>Обеспечить контроль за звонками 
                        сотрудников и автоматическое 
                        управление вызовами
                        .</p>
                    </div>
                    <div className="grid-item">
                    <div className="microphone-container">
                        <img src={Icon6} alt='' className='grid-item-image2'/>
                        <div className="wave wave1"></div>
                        <div className="wave wave2"></div>
                        <div className="wave wave3"></div>
                    </div>
                        <p className='grid-item-text grid-item-text-fife'>Подключить любое количество
                        городских телефонных номеров
                        </p>
                    </div>
                    <div className="grid-item">
                    <div className="microphone-container">
                        <img src={Icon7} alt='' className='grid-item-image2 image'/>
                        <div className="wave wave1"></div>
                        <div className="wave wave2"></div>
                        <div className="wave wave3"></div>
                    </div>
                        <p className='grid-item-text grid-item-text-six'>Еороткий номер телефона каждому
                            абоненту внутри компании для
                            бесплатных звонков
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
