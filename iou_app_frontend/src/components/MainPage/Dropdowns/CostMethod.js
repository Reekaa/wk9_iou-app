import React, {useRef} from 'react'

const CostMethod = (props) => {

  const inputRef = useRef(null);

  const costHours = () => {
    return (
      <li>
        <div id='dropdown-option' onClick={() => {handleCostDropdown('Hours')}}>Hours</div>
      </li>
    )
  }
  const costPounds = () => {
    return (
      <li>
        <div id='dropdown-option' onClick={() => {handleCostDropdown('Pounds')}}>Pounds</div>
      </li>
    )
  }

  const handleCostDropdown = (evt) => {
    props.object.costMethod(evt)
    inputRef.current.textContent = evt
    props.object.changeConfirm(false)
  }

  return(
    <>
      <button id="costDropdown" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" ref={inputRef}>
        Select Cost
        <span id="caret" className="caret"></span>
      </button>
      <ul className="dropdown-menu">
        {costHours()}
        {costPounds()}
      </ul>
    </>
  )
}

export default CostMethod
