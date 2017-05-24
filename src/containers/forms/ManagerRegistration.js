/**
 *  @module connect
 */
import { connect } from 'react-redux'

/**
 *  @module NameForm
 */
import ManagerRegistration from 'components/forms/ManagerRegistration'

/**
 *  @module updateUserSignupForm, submitFormData
 */
import { updateUserSignupForm, submitFormData, registerFormError } from 'actions/forms/register'

/**
 *  @module signUpFormValidators
 */
import { signUpFormValidators } from 'utils/validate'

/**
 *  mapStateToProps
 *  @param  {Object} state
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapStateToProps = (state, ownProps) => {
  /**
   *  canProgress
   *  @const
   *  @description If all fields are met, allow user to progress
   *  @type {Boolean}
   */

  let canProgress = true

  for (var key in state.register) {
    if (!state.register[key]) {
      canProgress = false
    }
  }

  for (var key1 in state.register.errors) {
    if (state.register.errors[key1].length > 0) {
      canProgress = false
    }
  }

  return {
    values: state.register,
    errors: state.register.errors,
    validators: signUpFormValidators,
    canProgress
  }
}

/**
 *  mapDispatchToProps
 *  @param  {Function} dispatch
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    update: (name, value) => {
      dispatch(updateUserSignupForm(name, value))
    },
    updateErrors: (errors, name) => {
      dispatch(registerFormError(errors, name))
    },
    submitForm: (values) => {
      /**
       *  @const
       */
      const {
        onSubmitSuccess,
        onSubmitFail
        } = ownProps

      dispatch(submitFormData({
        name: values.firstname,
        surname: values.surname,
        password: values.password,
        email: values.email
      }))
        .then(onSubmitSuccess)
        .catch(onSubmitFail)
    }
  }
}

/**
 *  @module connect
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerRegistration)