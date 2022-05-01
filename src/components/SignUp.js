import React from 'react'

function SignUp() {
  return (
    <div className="section bg-danger py-4">
        <div className="container">

            <div className="intro">
            <h2>Signup for our newsletter</h2>
            <p>Get the latest news on how your code is doing right in your inbox </p>
        </div>

         <hr className="thick" />
        <hr className="thin"/>

        <form>
             <fieldset className="contact-info">
    
                <legend>Contact Information</legend>
    
                <div className="mb-3">
                    <label className="form-label" for="name">Full Name</label>
                    <input className="form-control" type="text" id="name" name="username" placeholder="Required" required />
                </div>
    
                <div className="mb-3">
                    <label className="form-label" for="email">Email Address</label>
                    <input className="form-control" type="email" id="email" name="user-email" placeholder="Required" required />
                </div>
                
                <div className="mb-3">
                    <label className="form-label" for="number">Phone Number</label>
                    <input className="form-control" type="tel" id="number" name="user-num" />
                </div>
    
                <div className="mb-3">
                    <label className="form-label" for="address">Address</label>
                    <input className="form-control" type="text" id="address" name="user-address" /> 
                </div>
    
                <div className="mb-3">
                    <label className="form-label" for="city">City</label>
                    <input className="form-control" type="text" id="city" name="user-city" />
                </div>
    
                <div className="mb-3">
                    <label className="form-label" for="state">State</label>
                    <select className="form-control" name="states" id="state" required>
                        <option value="" disabled selected hidden>Choose State</option>
                        <option value="NY">New york</option>
                        <option value="OH">Ohio</option>
                        <option value="FL">Florida</option>
                        <option value="NJ">New Jersey</option>
                    </select>
                </div>
    
                <div className="mb-3">
                    <label className="form-label" for="zipcode">zip code</label>
                    <input className="form-control" type="text" id="zipcode" name="user-address" />
                </div>
    
            </fieldset>

            <hr />

            <fieldset className="newsletter">
                <div className="mb-3">
                     <legend>Newsletter</legend>

                      <p>
                    select the newsletters you would like to receive
                </p>
    
                <label for="html">
                    <input type="checkbox" id="html" name="checkbox"/>
                    HTML News
                </label>
    
                <label for="css">
                    <input type="checkbox" id="css" name="checkbox"/>
                    CSS News
                </label>
    
                <label for="javascript">
                    <input type="checkbox" id="javascript" name="checkbox"/>
                    javascript News
                </label>
                <br/>

                <p>Newsletter Format</p>
    
                <label for="html-radio-format">
                    <input type="radio" id="html-radio-format" name="radio"/>
                    HTML
                </label>

                  <label for="text-radio-format">
                    <input type="radio" id="text-radio-format" name="radio"/>
                    Plain text
                </label>
                <br />

                <label for="textarea">other topics you'd like to hear about</label>
    
                <div className="field">
                    <textarea name="other-topics" id="textarea"></textarea>
                </div>

                </div>
            </fieldset>
        </form>

        </div>
    </div>
  )
}

export default SignUp