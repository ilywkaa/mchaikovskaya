import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Contacts = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'contacts section center-content-mobile reveal-from-bottom center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'contacts-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'contacts-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses} >
          <div className="container-sm">
            <div className="contacts-wrap">

                <div className="contacts-item m-8" >
                <a
                  href="https://www.instagram.com/ritkaaauuu/"
                >
                  <Image 
                    src={require('./../../assets/images/insta.png')}
                    alt="instagram"
                    width={35}
                    height={35} />
                </a>
              </div>

              <div className="contacts-item m-8" >
                <a
                    href="https://t.me/ritkaaauuu"
                  >
                <Image
                      src={require('./../../assets/images/tele.png')}
                      alt="telegram"
                      width={35}
                      height={35} 
                      hre/>
                </a>
              </div>  

            </div>                    
          </div>
        </div>
      </div>
    </section>
  );
}

Contacts.propTypes = propTypes;
Contacts.defaultProps = defaultProps;

export default Contacts;