import React from 'react'

function AboutMe() {
  return (
     <section className="about-me bg-light">
            <div className="container py-4"> 

                <h3 className="section-name mb-4 "> <span className="border border-primary px-2 py-2 "> About Me </span> </h3>
                
                <div className="w-50 p-3">
                    <img src='img/mypic.jpg' alt="my picture" className="w-100" />
                </div>
                
                

                <div className="about-me-details w-70 mt-4">
                    <p className="lg-base">
                        My name is <b>Thomas Asare</b>. <br />
                        I am 23 years of age and a student at the <a className="text-reset" href="https://www.ug.edu.gh/" target="_blank">University of
                            Ghana</a>
                        I am offering the Bachelor of Science in IT and currently in level 200.
                        I come from a small town in Germany called <a className="text-reset" href="https://en.wikipedia.org/wiki/Kaiserslautern"
                            target="_blank">Kaiserslautern.</a>
                        
                        I came to Ghana at the age of six and attended <a className="text-reset" href="https://dis-edu.org/" target="_blank">Dieudonne International
                            School</a> at Adenta West.
                        After I completed JHS at Dieudonné, I attended <a className="text-reset"
                            href="https://en.wikipedia.org/wiki/St._Thomas_Aquinas_Senior_High_School" target="_blank">St. Thomas Aquinas
                            SHS</a> for a year before transfering to
                        <a className="text-reset" href="https://www.is-neustadt.de/en/index.html" target="_blank">International School Neustadt</a> in Germany.
                        My hobbies are modding Android devices and buliding custom system units, which I mostly do for friends and
                        friends of friends.I also enjoying jogging and swimming.
                        I aspire to be a penetration tester after I graduate from the University of Ghana.
                    </p>
                </div>
            </div>
        </section>
  )
}

export default AboutMe