import React from 'react'
import PropTypes from 'prop-types'

const SaveBar = ({onDiscardAction,open,onSaveAction}) => (
    open ?
        <div className="SaveBar">
          <span>Seems like you modified something, want to save it ?</span>
          <button onClick={onDiscardAction}>DISCARD</button>
          <button onClick={onSaveAction}>SAVE</button>
        </div>
        :
        null
  );

SaveBar.propTypes = {
    onDiscardAction : PropTypes.func,
    open: PropTypes.bool.isRequired,
    onSaveAction : PropTypes.func
}

SaveBar.defaultProps = {
    onDiscardAction : ()=>{console.log('discard action')},
    onSaveAction : ()=>{console.log('save button')}
}

export default SaveBar