import React from 'react'

export default function Schools() {
  return (
    <>
     <table className="w-75 bg-danger border border-white mx-4 my-4 ">

            <tr className="text-start">
                <th>School</th>
                <th>Courses</th>
            </tr>

            <tr className="text-start">
                <td>Dieudonné International School</td>
                <td>Primary and JHS</td>
            </tr> 
        </table> 

        <table className="w-75 bg-danger border border-white mx-4 my-4 ">
            <tr className="text-start">
                <th>School</th>
                <th>Courses</th>
            </tr>
        
            <tr className="text-start">
                <td>St. Thomas Aquinas SHS</td>
                <td>SHS</td>
            </tr>
        </table>

        <table className="w-75 bg-danger border border-white mx-4 my-4 ">
            <tr className="text-start">
                <th>School</th>
                <th>Courses</th>
            </tr>
        
            <tr className="text-start">
                <td>University of Ghana</td>
                <td>BSc. Information Technology</td>
            </tr>
        </table>
    </>
  )
}
