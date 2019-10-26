import React, { useState } from 'react';
import Title from './sectionsLayout/Title';
import { FaWineBottle } from 'react-icons/fa';
import { FaUtensils } from 'react-icons/fa';
import { FaAccessibleIcon } from 'react-icons/fa';
import { FaWifi } from 'react-icons/fa';
import { FaTv } from 'react-icons/fa';
import { FaTaxi } from 'react-icons/fa';

const Services = () => {
  const [servicesState] = useState({
    services: [
      {
        id: 1,
        icon: <FaTaxi />,
        title: 'lift shuttles',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos natus quaerat hic, neque ipsam ipsa.'
      },
      {
        id: 2,
        icon: <FaUtensils />,
        icon2: <FaWineBottle />,
        title: 'gourmet meals',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos natus quaerat hic, neque ipsam ipsa.'
      },
      {
        id: 3,
        icon: <FaWifi />,
        icon2: <FaTv />,
        title: 'free wifi / smart tv',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos natus quaerat hic, neque ipsam ipsa.'
      },
      {
        id: 4,
        icon: <FaAccessibleIcon />,
        title: 'differently abled amenities',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos natus quaerat hic, neque ipsam ipsa.'
      }
    ]
  });

  return (
    <section className='bg-secondary section-services'>
      <div className='container'>
        <Title title='services' />
        <div className='grid-sections my-2 text-center text-primary'>
          {servicesState.services.map(item => (
            <article key={item.id} className='service-box p'>
              <span className='services-icons'>
                {item.icon} &nbsp;{item.icon2}
              </span>
              <h5>{item.title}</h5>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
