import React from 'react'
import './ReservedBooks.css'

function ReservedBooks() {
    return (
        <div className='reservedbooks-container'>
            <h className='reservedbooks-title'>Books On Hold</h>
            <table className='reservedbooks-table'>
                <tr>
                    <th>Name</th>
                    <th>Book</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>Amit</td>
                    <td>Rich Dad Poor Dad</td>
                    <td>12/2/2025</td>
                </tr>
                <tr>
                    <td>Shashank</td>
                    <td>The Subtle Art</td>
                    <td>10/2/2025</td>
                </tr>
                <tr>
                    <td>Tanishq</td>
                    <td>Wings Of Fire</td>
                    <td>15/2/2025</td>
                </tr>
                <tr>
                    <td>Sumit</td>
                    <td>The Secret</td>
                    <td>02/2/2025</td>
                </tr>
                <tr>
                    <td>Surya</td>
                    <td>Bad Guys</td>
                    <td>21/2/2025</td>
                </tr>
                <tr>
                    <td>Sujit</td>
                    <td>Giovanni Rovelli</td>
                    <td>02/2/2025</td>
                </tr>
            </table>
        </div>
    )
}

export default ReservedBooks
