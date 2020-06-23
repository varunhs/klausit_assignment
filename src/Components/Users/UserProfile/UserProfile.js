import React, { useState } from "react";
import './userProfile.css'
import { Input } from 'reactstrap';
import { toast } from 'react-toastify';


const UsersProfile = (props) => {
    const { userData } = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumberName] = useState("");
    const [selectData, setSelectDetails] = useState("");
    const [checkBoxValue, setCheckBoxValue] = useState("");
    const [dataObject, setDataObject] = useState("");
    const [showDataObj, setShowDataObject] = useState(false);


    const lastNameChange = (event) => {
        setLastName(event.target.value);
        setShowDataObject(false);
    }
    const firstNameChange = (event) => {
        setFirstName(event.target.value);
        setShowDataObject(false);
    }
    const phoneNumberChange = (event) => {
        setPhoneNumberName(event.target.value);
        setShowDataObject(false);
    }
    const emailChange = (event) => {
        setEmail(event.target.value);
        setShowDataObject(false);
    }
    const selectOptionChange = (event) => {
        setSelectDetails(event.target.value);
        setShowDataObject(false);
    }

    const checkBoxChange = (event) => {
        setCheckBoxValue(event.target.value);
        setShowDataObject(false);
    }

    const submitForm = () => {
        let dataObj;
        if (!firstName || !lastName || !email || !phoneNumber || !selectData || !checkBoxValue) {
            toast.error("All fields are required !", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            alert("All fields are required")
        } else {
            dataObj = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber,
                selectDataValue: selectData,
                checkBoxValue: checkBoxValue
            }
        }
        console.log("console", dataObj);
        setShowDataObject(true);
        setDataObject(dataObj);

    }
    return (
        <>
            <div className="moreUserDetails">
                <div>
                    User Details:-
                </div>
                <div className="userDetailsSection">
                    {
                        userData && userData.avatar ? <img src={userData.avatar} alt="User" /> : ""
                    }&nbsp;&nbsp;
                    <div >
                        <p>
                            {userData && userData.first_name ? userData.first_name : ""}&nbsp;&nbsp;
                            {userData && userData.last_name ? userData.last_name : ""}
                        </p>
                        <p>
                            {userData && userData.email ? userData.email : ""}&nbsp;&nbsp;
                        </p>
                    </div>

                </div>
            </div>
            <div className='formContainer'>
                <div className='labelFiledContainer'>
                    <label className='inputLabel'>First Name</label>
                    <input
                        label={'First name'}
                        name="firstName"
                        type="text"
                        placeholder={'Enter first name'}
                        onChange={firstNameChange}
                    />
                </div>
                <div className='labelFiledContainer'>
                    <label className='inputLabel'>Last Name</label>
                    <input
                        className='inputField'
                        type="text"
                        name="lastName"
                        placeholder={'Enter last name'}
                        onChange={lastNameChange}
                    />
                </div>

                <div className='labelFiledContainer'>
                    <label className='inputLabel'>Phone Number</label>
                    <input
                        className='inputField'
                        type="number"
                        name="phoneNumber"
                        placeholder={'Enter phone number'}
                        onChange={phoneNumberChange}
                    />
                </div>
                <div className='labelFiledContainer'>
                    <label className='inputLabel'>Email</label>
                    <input
                        className='inputField'
                        type="email"
                        name="email"
                        placeholder={'Enter email'}
                        onChange={emailChange}
                    />
                </div>
                <div className='labelFiledContainer'>
                    <label className='inputLabel'>Select</label>
                    <Input type="select" name="select" id="select"
                        onChange={selectOptionChange}
                    >
                        <option readOnly >Select</option>
                        <option value="google">Google</option>
                        <option value="facebook">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="gmail">Gmail</option>
                    </Input>
                </div>
                <div className='labelFiledContainer'>
                    <label className='inputLabel'>Check the box</label>
                    <input
                        type="checkbox"
                        id="checkBox"
                        name="checkBox"
                        value="checked value"
                        onChange={checkBoxChange}
                    />
                </div>
            </div>
            <div className="submitButton">
                <input
                    type="submit"
                    value="Submit"
                    onClick={submitForm}
                />
            </div>
            {
                showDataObj && dataObject ?
                    <div>
                        <p>Form Entered Details </p>
                        <table>
                            <tbody className="bordered">
                                <tr><td>First name</td><td>{dataObject.firstName}</td></tr>
                                <tr><td>Last name</td><td>{dataObject.lastName}</td></tr>
                                <tr><td>Email</td><td>{dataObject.email}</td></tr>
                                <tr><td>Phone Number</td><td>{dataObject.phoneNumber}</td></tr>
                                <tr><td>Selected value</td><td>{dataObject.selectDataValue}</td></tr>
                                <tr><td> Checkbox</td><td>{dataObject.checkBoxValue}</td></tr>
                            </tbody>
                        </table>
                    </div>
                    : ""
            }
        </>
    )
}


export default UsersProfile;