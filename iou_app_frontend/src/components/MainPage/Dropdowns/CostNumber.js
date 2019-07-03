import React from 'react'

const CostNumber = (props) => {

  return(
    <>
      <label>How long did it take you?
        <div
          id='cost-select'
          className="col-10"
        >
          <input
            className="form-control"
            type="number"
            placeholder='0'
            id="example-number-input"
            value={props.state.duration}
            onChange={(evt)=>{props.updateDuration(evt.target.value)}}
          />
        </div>
        <span> hours</span>
      </label>
    </>
  )
}

export default CostNumber
