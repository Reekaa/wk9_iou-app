import React from 'react'

const CostMethod = (props) => {

  const handleCostDropdown = (evt) => {
    if (evt === 'Time') {
      props.updateCostMethod('How many hours did the task take?')
    } else {
      props.updateCostMethod('How much did the task cost (£s)?')
    }
    props.object.costMethod(evt)
    props.updateCostButton(evt)
    props.object.changeConfirm(false)
  }

  const costHours = () => {
    return (
      <li>
        <div id='dropdown-option' onClick={() => {handleCostDropdown('Time')}}>Time</div>
      </li>
    )
  }
  const costPounds = () => {
    return (
      <li>
        <div id='dropdown-option' onClick={() => {handleCostDropdown('Money')}}>Money</div>
      </li>
    )
  }

  return(
    <>
      <label>Did the task take time or money?</label>
        <div>
          <button id="costDropdown" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
            {props.state.costButton}
            <span id="caret" className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            {costHours()}
            {costPounds()}
          </ul>
        </div>
    </>
  )
}

export default CostMethod
