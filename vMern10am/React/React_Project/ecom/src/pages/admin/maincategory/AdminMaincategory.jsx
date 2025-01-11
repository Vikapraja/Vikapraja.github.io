import React, { useEffect, useState } from 'react'
import HeroSection from '../../../Components/HeroSection'
import AdminSidebar from '../../../Components/AdminSidebar'
import { Link } from 'react-router-dom'

import $ from 'jquery';                                         // Import jQuery
import 'datatables.net-dt/css/dataTables.dataTables.min.css';   // Import DataTables styles
import 'datatables.net';

export default function AdminMaincategory() {
    let [MaincategoryStateData, setMaincategoryStateData] = useState([])

    async function deleteRecord(id) {
        if (window.confirm("Are You Sure to Delete that Item : ")) {
            let response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}/maincategory/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                }
            })
            response = await response.json()
            getAPIData()
        }
    }
    async function getAPIData() {
        let response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}/maincategory`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        setMaincategoryStateData(response)
        let time = setTimeout(() => {
            $('#DataTable').DataTable()
        }, 500)
        return time
    }
    useEffect(() => {
        let time = getAPIData()
        return () => clearTimeout(time)
    }, [])
    return (
        <>
            <HeroSection title="Admin - Maincategory" />
            <div className="container-fluid py-5 mb-5">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light text-center p-2'>Maincategory <Link to="/admin/maincategory/create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
                        <div className="table-responsive">
                            <table id='DataTable' className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Pic</th>
                                        <th>Active</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        MaincategoryStateData.map((item) => {
                                            return <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    <Link to={`${process.env.REACT_APP_BACKEND_SERVER}/${item.pic}`} target='_blank' rel='noreferrer'>
                                                        <img src={`${process.env.REACT_APP_BACKEND_SERVER}/${item.pic}`} height={50} width={80} alt="" />
                                                    </Link>
                                                </td>
                                                <td className={`${item.active ? 'text-success' : 'text-danger'}`}>{item.active ? "Yes" : "No"}</td>
                                                <td><Link to={`/admin/maincategory/update/${item.id}`} className='btn btn-primary'><i className='fa fa-edit fs-4'></i></Link></td>
                                                <td><button className='btn btn-danger' onClick={() => deleteRecord(item.id)}><i className='fa fa-trash fs-4'></i></button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
