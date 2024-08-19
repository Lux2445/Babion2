import React, { Component } from 'react';
import Icon1 from '../image/icon_first_section.png';
import '../style/style.css';

export default class FirstSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredIndex: null
    };
  }

  handleMouseEnter = (index) => {
    this.setState({ hoveredIndex: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredIndex: null });
  };

  render() {
    const { hoveredIndex } = this.state;
    const items = [
      { title: 'Безлимитный Интернет', subtitle: 'для вашего бизнеса' },
      { title: 'Беспроводной LTE', subtitle: 'Беспроводной интернет' },
      { title: 'VPS сервера', subtitle: 'Lorem Ipsum is simply' },
      { title: 'WiFi Роутер', subtitle: 'Топ роутердля бизнеса' }
    ];

    return (
      <div className='first_section'>
        <div className='first_section_wrapper'>
                 <div className='first_section_wrapper_items1'>
                <div className='first_section_items'>
                    <h1 className='first_section_items_text'>Интернет для Бизнеса по Оптике</h1>
                </div>
                <img src={Icon1} alt='' className='first_section_wrapper_image'/>
            </div>
            <div className='active-hover-items'>
          {items.map((item, index) => (
            <div key={index} className='first_section_wrapper_items2'>
              <div
                className={`hover-container ${hoveredIndex === index ? 'hovered' : ''}`}
                onMouseEnter={() => this.handleMouseEnter(index)}
                onMouseLeave={this.handleMouseLeave} 
              >
                
                <div className={`circle ${hoveredIndex === index ? 'hovered' : ''}`}>
                  {hoveredIndex === index ? '✔' : `0${index + 1}`} 
                </div>
                <div className="text-container">
                  <p className="title">{item.title}</p>
                  <p className="subtitle">{item.subtitle}</p>
                </div>
              </div>
              <hr className={`hr-1 ${hoveredIndex === index ? 'hovered' : ''}`} />
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
}
