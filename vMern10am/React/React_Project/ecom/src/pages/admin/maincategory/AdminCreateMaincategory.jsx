import React, { useEffect, useState } from 'react'
import HeroSection from '../../../Components/HeroSection'
import AdminSidebar from '../../../Components/AdminSidebar'
import { Link, useNavigate } from 'react-router-dom'

import formValidator from '../../../FormValidators/formValidator'
import imageValidator from '../../../FormValidators/imageValidator'
export default function AdminCreateMaincategory() {
    let [MaincategoryStateData, setMaincategoryStateData] = useState([])
    let [data, setData] = useState({
        name: "",
        pic: "",
        active: true
    })
    let [error, setError] = useState({
        name: "Name Field is Mendatory",
        pic: "Pic Field is Mendatory"
    })
    let [show, setShow] = useState(false)
    let navigate = useNavigate()

    function getInputData(e) {
        let name = e.target.name
        let value = e.target.files ? "maincategory/" + e.target.files[0].name : e.target.value

        if (name !== "active") {
            setError((old) => {
                return {
                    ...old,
                    [name]: e.target.files ? imageValidator(e) : formValidator(e)
                }
            })
        }
        setData((old) => {
            return {
                ...old,
                [name]: name === "active" ? (value === "1" ? true : false) : value
            }
        })
    }
    async function postSubmit(e) {
        e.preventDefault()
        let errorItem = Object.values(error).find(x => x !== "")
        if (errorItem)
            setShow(true)
        else {
            let item = MaincategoryStateData.find(x => x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase())
            if (item) {
                setShow(true)
                setError((old) => {
                    return {
                        ...old,
                        "name": "Maincategory Already Exist"
                    }
                })
            }
            else {
                let response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}/maincategory`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ ...data })
                })
                response = await response.json()
                if (response)
                    navigate("/admin/maincategory")
                else
                    alert("Something Went Wrong")
            }
        }
    }

    useEffect(() => {
        (async () => {
            let response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}/maincategory`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })
            response = await response.json()
            setMaincategoryStateData(response)
        })()
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
                        <h5 className='bg-primary text-light text-center p-2'>Maincategory <Link to="/admin/maincategory"><i className='fa fa-arrow-left text-light float-end'></i></Link></h5>
                        <form onSubmit={postSubmit}>
                            <div className="mb-3">
                                <label>Name*</label>
                                <input type="text" name="name" onChange={getInputData} placeholder='Maincategory Name' className={`form-control border-3 ${show && error.name ? 'border-danger' : 'border-primary'}`} />
                                {show && error.name ? <p className='text-danger text-capitalize'>{error.name}</p> : null}
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Pic*</label>
                                    <input type="file" name="pic" onChange={getInputData} className={`form-control border-3 ${show && error.pic ? 'border-danger' : 'border-primary'}`} />
                                    {show && error.pic ? <p className='text-danger text-capitalize'>{error.pic}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Active*</label>
                                    <select name="active" onChange={getInputData} className='form-select border-3 border-primary'>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3">
                                <button type="submit" className='btn btn-primary w-100'>Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
