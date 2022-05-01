import React from 'react'

function Contact() {
  return (
     <div className="container">
            <form>
                <fieldset>
                    <legend>INFO</legend>
                    <div className="mb-3">
                        <label htmlFor="f-name" className="form-label">First Name</label>
                        <input type="text" className="form-control"/>
                        
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Last Name</label>
                        <input type="text" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label  className="form-label">Age</label>
                        <input type="number" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Tel</label>
                        <input type="tel" className="form-control"/>
                    </div>
                </fieldset>

                 <fieldset>
                     <legend>Choose a gender</legend>

                      <div className="mb-3">
                            <input className="form-radio" type="radio" name="male"/>
                            <label htmlFor="male">male</label>
                            
                            <input className="form-radio" type="radio" name="female"/>
                            <label htmlFor="female">Female</label>

                            <input className="form-radio" type="radio" name="other"/>
                            <label htmlFor="other">Gender Neutral</label>
                            <br/>
                        </div>

                 </fieldset>

                  <fieldset className="id">
                        <legend>Id </legend>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="id">Choose id Type</label>
                            <select className="form-select" id="id" name="id type">
                                <option value="Ecowas card"><i>Ecowas card</i></option>
                                <option value="Voter's ID"><i>Voter's ID</i></option>
                                <option value="Passport"><i>Passport</i></option>
                                <option value="NHIS"><i>NHIS</i></option>
                            </select> <br/>
                            <label htmlFor="i-num">Input Id number</label>
                            <input type="text" name="i-num"/>
                        </div>
                        
                    </fieldset>

                    <fieldset className="add-info">
                        <legend>Additional info</legend>
                        <div className="mb-3">
                            <textarea name="add"></textarea><br/>
                            
                        </div>
                       
                    </fieldset>
                    
                    
                    <button type="submit" className="btn btn-primary my-2">Submit</button>
               
                
            </form>

       
        </div>
  )
}

export default Contact