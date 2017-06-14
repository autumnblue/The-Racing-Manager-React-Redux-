/**
 *  @module React
 */
import React, { Component } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module OverviewCard
 */
import OverviewCard from 'components/cards/OverviewCard'

/**
 *  @module CarouselArrow
 */
import CarouselArrow from 'components/buttons/CarouselArrow'

/**
 *  @module Carousel
 */
import Carousel from 'components/carousel'

/**
 * dummy fn
 */
const noop = () => {}

/**
 *  swiperOpts
 *  @type {Object}
 */
const swiperOpts = {
  spaceBetween: 30,
  slidesPerView: 'auto',
  grabCursor: true,
  slideToClickedSlide: true
}

/**
 *  @class
 *  @name HeaderSection
 *  @extends {Component}
 */
class HeaderSection extends Component {
  /**
   *  @constructor
   */
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      modifier,
      title,
      headerButtonText,
      data
    } = this.props

    /**
     *  Class names for the container
     *  @type {String}
     */
    const modifiedClassNames = classNames('dashboard-header', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <div className='dashboard-header__heading row-no-margin dashboard-header__section'>
          <div className='col-xs-6 align-middle'>
            <h1>
              {title}
            </h1>
          </div>
          <div className='col-xs-6 align-middle'>
            <TextButton
              className='dashboard-header__header-button'
              onClick={noop}
              modifier='md'
              text={headerButtonText}/>
          </div>
        </div>
        <div className='dashboard-header__items-carousel dashboard-header__section'>
          <Carousel
            ref='swiperName'
            slideClassName='dashboard-header__slide'
            prevArrow={
              <CarouselArrow
                className='dashboard-header__arrow'
                modifier={['left', 'nobg', 'white']}
                iconModifier={['leftarrow']}
                onClick={() => { this.refs.swiperName.prev() }}
              />
            }
            nextArrow={
              <CarouselArrow
                className='dashboard-header__arrow'
                modifier={['right', 'nobg', 'white']}
                iconModifier={['rightarrow']}
                onClick={() => { this.refs.swiperName.next() }}
              />
            }
            {...swiperOpts}>
            {
              data.map((child, index) => {
                return (
                  <h2 key={index}>The quays horse</h2>
                )
              })
            }
          </Carousel>
        </div>
        <div className='dashboard-header__items-list dashboard-header__section wave-bg-blue'>
          <Carousel
            slideClassName='dashboard-header__slide'
            ref='swiperHorse'
            prevArrow={
              <CarouselArrow
                className='dashboard-header__arrow'
                modifier={['left', 'nobg', 'white', 'bottom']}
                iconModifier={['leftarrow']}
                onClick={() => { this.refs.swiperHorse.prev() }}
              />
            }
            nextArrow={
              <CarouselArrow
                className='dashboard-header__arrow'
                modifier={['right', 'nobg', 'white', 'bottom']}
                iconModifier={['rightarrow']}
                onClick={() => { this.refs.swiperHorse.next() }}
              />
            }
            {...swiperOpts}>
            {
              data.map((child, index) => {
                return (
                  <OverviewCard
                    key={index}
                    className='dashboard-header__slide-item' />
                )
              })
            }
          </Carousel>
        </div>
      </div>
    )
  }
}

/**
 *  propTypes
 *  @type {Object}
 */
HeaderSection.propTypes = {
  title: PropTypes.string,
  headerButtonText: PropTypes.string,
  data: PropTypes.array
}

/**
 *  defaultProps
 *  @type {Object}
 */
HeaderSection.defaultProps = {
  title: 'your horses',
  headerButtonText: '+ add another horse',
  data: []
}

/**
 *  @module HeaderSection
 */
export default HeaderSection
