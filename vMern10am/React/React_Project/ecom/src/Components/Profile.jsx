import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile({ title }) {
    return (
        <>
            <h5 className='bg-primary text-light text-center p-2'>{title} Profile</h5>
            <div className='row'>
                <div className="col-md-6 mb-3">
                    <img src="/img/noimage.jpg" height={430} width={"100%"} alt="" />
                </div>
                <div className="col-md-6 mb-3">
                    <table className='table table-bordered'>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>Nitin Chauhan</td>
                            </tr>
                            <tr>
                                <th>User Name</th>
                                <td>nitin</td>
                            </tr>
                            <tr>
                                <th>Email Address</th>
                                <td>vishankchauhan@gmail.com</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>+91-9873848046</td>
                            </tr>
                            {
                                title !== "Admin" ?
                                    <>
                                        <tr>
                                            <th>Address</th>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <th>Pin</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th>City</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th>State</th>
                                            <td></td>
                                        </tr>
                                    </> : null
                            }
                            <tr>
                                <td colSpan={2}>
                                    <Link to="/update-profile" className='btn btn-primary w-100'>Update Profile</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
