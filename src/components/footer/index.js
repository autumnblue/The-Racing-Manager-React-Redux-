/**
 * @module react
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module Image
 */
import Image from 'components/image'

/**
 *  @module footerLogo
 */
import { footerLogo } from 'assets/images'

/**
 * Footer component
 * @param { Object } props
 * @returns { React.Component }
 * @constructor
 */
const Footer = props => {
  return (
    <footer className='footer'>
      <div className='row'>
        <div className='col-xs-12 col-sm-4 col-md-6 footer__left'>
          <Image
            className='footer__logo'
            imageSrc={footerLogo} />
        </div>
        <div className='col-xs-12 col-sm-8 col-md-6 footer__right'>
          <div className='footer__content col-sm-4 footer--text-center'>
            <h3>Policies</h3>
            <span className='footer__break'></span>
            <ul className='footer__list'>
              <li className='footer__listitem'>
                <a className='link--no-color'>
                  <span>cookies</span>
                </a>
              </li>
              <li className='footer__listitem'>
                <a className='link--no-color'>
                  <span>terms of use</span>
                </a>
              </li>
              <li className='footer__listitem'>
                <a className='link--no-color'>
                  <span>privacy</span>
                </a>
              </li>
              <li className='footer__listitem'>
                <a className='link--no-color'>
                  <span>legal</span>
                </a>
              </li>
            </ul>
          </div>
          <div className='footer__content col-sm-4 footer--text-center'>
            <h3>The racing manager</h3>
            <span className='footer__break'></span>
            <ul className='footer__list'>
              <li className='footer__listitem'>
                <a className='link--no-color'>
                  <span>about us</span>
                </a>
              </li>
              <li className='footer__listitem'>
                <a className='link--no-color'>
                  <span>blog</span>
                </a>
              </li>
              <li className='footer__listitem'>
                <a className='link--no-color'>
                  <span>contact</span>
                </a>
              </li>
              <li className='footer__listitem'>
                <a className='link--no-color'>
                  <span>publicity</span>
                </a>
              </li>
            </ul>
          </div>
          <div className='footer__content col-sm-4 footer--text-center'>
            <h3>Follow us</h3>
            <span className='footer__break'></span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/**
 * Component prop types
 * @type { Object }
 */
Footer.propTypes = {
  test: PropTypes.string
}

/**
 * Component default props
 * @type { Object }
 */
Footer.defaultProps = {}

export default Footer
