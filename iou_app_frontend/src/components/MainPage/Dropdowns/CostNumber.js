import React from 'react'

const CostNumber = (props) => {

  const handleNumber = (evt) => {
    props.object.selectCost(evt.target.value)
    props.object.changeConfirm(false)
  }


  return(
    <>
      <label>How long did it take you?
        <div id='cost-select' className="col-10">
          <input className="form-control" type="number" placeholder='0' id="example-number-input" onChange={(evt)=>{handleNumber(evt)}}/>
        </div>
        <span> hours</span>
      </label>
    </>
  )
}

export default CostNumber
