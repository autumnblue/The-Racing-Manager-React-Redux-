
import React, { Component } from 'react'

import { connect } from 'react-redux'

import TextButton from 'components/buttons/TextButton'

import FormSubmissionEdit from 'components/manageredit/FormSubmissionEdit'

import EditButton from 'components/manageredit/EditButton'

import TextEditContainer from 'containers/ManagerEdit/TextEditContainer'

import SyndicateBenefits from 'components/syndicate/SyndicateBenefits'

import SortSelect, { Option } from 'components/searchandfilter/SortSelect'

import {submitSyndicateData} from 'actions/syndicate'

import PropTypes from 'prop-types'

import {
  registerColoursTitle,
  registerColoursDescription
} from 'data/syndicate'

class RegisterSyndicateColoursContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showEdit: false,
      value: ''
    }

  }

  render () {
    const coloursData = {
      description: registerColoursDescription,
      featuredImage: '',
      logo: ''
    }
    return (
      <div className="row register-syndicate-colours-content">
        <div className="col-xs-8 left">
          <div className="col-xs-12 colours-description">
            <TextEditContainer
              title='Edit benefits'
              data={coloursData}
              editLabel='update benefits'
              dataKey='benefits'
              maxLength={2000}
              submitAction={submitSyndicateData}>
              {
                ({ value }) => {
                  return (
                    <SyndicateBenefits title={registerColoursTitle} titleModifier="h2" description={registerColoursDescription} />
                  )
                }
              }
            </TextEditContainer>
          </div>
          <div className="col-xs-12 colours-content">
            <div className="col-xs-4 col-sm-3 colours-selects">
              <div className="body-colours section">
                <div className="title">
                  <h2>BODY</h2>
                </div>
                <SortSelect
                  // onChange={onSelectUpdate}
                  defaultValue={`BLUE`}
                  // value={sortValue}
                  // title={sortTitle}
                  >
                    <Option key="Blue" value="Blue">Blue</Option>
                    <Option key="White" value="White">White</Option>
                    <Option key="Red" value="Red">Red</Option>
                </SortSelect>
                <SortSelect
                  // onChange={onSelectUpdate}
                  defaultValue={`STRIPES`}
                  // value={sortValue}
                  // title={sortTitle}
                >
                  <Option key="Stripes" value="Strips">Strips</Option>
                  <Option key="White" value="White">White</Option>
                  <Option key="Red" value="Red">Red</Option>
                </SortSelect>
                <SortSelect
                  // onChange={onSelectUpdate}
                  defaultValue={`BLACK`}
                  // value={sortValue}
                  // title={sortTitle}
                >
                  <Option key="Black" value="Black">Black</Option>
                  <Option key="White" value="White">White</Option>
                  <Option key="Red" value="Red">Red</Option>
                </SortSelect>
              </div>
              <div className="sleeves-colours section">
                <div className="title">
                  <h2>SLEEVES</h2>
                </div>
                <SortSelect
                  // onChange={onSelectUpdate}
                  defaultValue={`BLUE`}
                  // value={sortValue}
                  // title={sortTitle}
                >
                  <Option key="Blue" value="Blue">Blue</Option>
                  <Option key="White" value="White">White</Option>
                  <Option key="Red" value="Red">Red</Option>
                </SortSelect>
                <SortSelect
                  // onChange={onSelectUpdate}
                  defaultValue={`STRIPES`}
                  // value={sortValue}
                  // title={sortTitle}
                >
                  <Option key="Stripes" value="Strips">Strips</Option>
                  <Option key="White" value="White">White</Option>
                  <Option key="Red" value="Red">Red</Option>
                </SortSelect>
              </div>
              <div className="cap-colours section">
                <div className="title">
                  <h2>CAP</h2>
                </div>
                <SortSelect
                  // onChange={onSelectUpdate}
                  defaultValue={`BLUE`}
                  // value={sortValue}
                  // title={sortTitle}
                >
                  <Option key="Blue" value="Blue">Blue</Option>
                  <Option key="White" value="White">White</Option>
                  <Option key="Red" value="Red">Red</Option>
                </SortSelect>
                <SortSelect
                  // onChange={onSelectUpdate}
                  defaultValue={`STRIPES`}
                  // value={sortValue}
                  // title={sortTitle}
                >
                  <Option key="Stripes" value="Strips">Strips</Option>
                  <Option key="White" value="White">White</Option>
                  <Option key="Red" value="Red">Red</Option>
                </SortSelect>
              </div>
            </div>
            <div className="col-xs-8 col-sm-9 horse-image">

            </div>
          </div>
        </div>
        <div className="col-xs-4 right">
          <div className="step-content">

          </div>
        </div>
        <div className="col-xs-12 colours-footer">
          <div className="colours-submit-button">
            <div className="comment">
              <span>This button will become active one you have selected an available name</span>
            </div>
            <TextButton
              onClick={() => {  }}
              modifier={['fluid']}
              isDisabled={false}
              text='proceed to step 2' />
            <h6 className="btn-comment">SAVE AND CONTINUE LATER</h6>
          </div>
          <div className="footer-image">
            <span>Powered by the </span>
            <img src="/assets/images/BHA_Logo1.jpg" />
          </div>
        </div>
      </div>
    )
  }
}

RegisterSyndicateColoursContainer.propTypes = {
  children: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterSyndicateColoursContainer)
