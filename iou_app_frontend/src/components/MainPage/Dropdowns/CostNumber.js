import React from 'react'

const CostNumber = (props) => {

  const handleNumber = (evt) => {
    console.log(evt);
    props.object.selectCost(evt.target.value)
    props.object.changeConfirm(false)
  }

  return(
    <>
      <label className="col-2 col-form-label">Cost: </label>
      <div id='cost-select' className="col-10">
        <input className="form-control" type="number" placeholder='0' id="example-number-input" onChange={(evt)=>{handleNumber(evt)}}/>
      </div>
    </>
  )
}

export default CostNumber
