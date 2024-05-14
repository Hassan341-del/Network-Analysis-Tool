import React from 'react'
import './Result.css'
export default function Result() {
  return (
    <>
    <h1 className='text-center my-5'> Results</h1>
    <div className='d-flex justify-content-center justify-items-center'>
        <div className='table-div'>
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col' className='table-data'>Name</th>
                    <th scope='col' className='table-data'>ID</th>
                    <th scope='col' className='table-data'>Following Count</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='table-data'>UserA</td>
                    <td className='table-data'>UserA_ID</td>
                    <td className='table-data'>3000</td>
                </tr>
                <tr>
                    <td className='table-data'>UserB</td>
                    <td className='table-data'>UserB_ID</td>
                    <td className='table-data'>4000</td>
                </tr>
                <tr>
                    <td className='table-data'>UserC</td>
                    <td className='table-data'>UserC_ID</td>
                    <td className='table-data'>5000</td>
                </tr>
                <tr>
                    <td className='table-data'>UserD</td>
                    <td className='table-data'>UserD_ID</td>
                    <td className='table-data'>6000</td>
                </tr>
                <tr>
                    <td className='table-data'>UserE</td>
                    <td className='table-data'>UserE_ID</td>
                    <td className='table-data'>7000</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    </>
  )
}
