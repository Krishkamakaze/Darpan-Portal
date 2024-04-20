import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
{/* Students name
Fathers name
roll number
Programme Name
Department
Branch
Mobile number
Email id
Address with pin code
Aadhar ID
*/}
export default function InputPage(props) {
    // const {appointment} = useParams();
    // console.log(appointment);
    let conditionalInputs = [];
    const navigate=useNavigate();
    const [formdata,setFormdata] = useState({
        'studentName':'',
        'fatherName':'',
        'rollnumber':'',
        'programme':'',
        'department':'',
        'branch':'',
        'mobilenumber':'',
        'email':'',
        'address':'',
        'aadharnumber':'',
        'marksheetcopy':'',
        'aadharcopy':'',
    });
    const handleChange=(e)=>{
        // console.log(e.target.value);
        const {name,value} = e.target;
        setFormdata({
            ...formdata,
            [name]:value,
        })
    }
    // const handleChangeOptions=(e)=>{
    //     console.log(e.target.value);
    //     const {name,value} = e.target;
    //     setFormdata({
    //         ...formdata,
    //         [name]:value,
    //     })
    // }
    const handleupload=(e)=>{
        const file = e.target.files[0];
        // console.log(file)
        // if (file && file.size>(5000*1024)) {
        //     console.log("exceeds file size");
        //     return
        // }
        if(!file){
            console.log('no file uploaded')
            return
        }
        setFormdata({
            ...formdata,
            [e.target.name]:file,
        })
    }
    const handleSubmit=(event)=>{
        event.preventDefault();

        console.log({formdata});
        navigate('/');
    }
    if(props.title==="duplicate marksheet"){
        conditionalInputs.push(
        <>
        <label htmlFor="fircopy" className='InputPage-Labels'>FIR copy pdf:</label>
        <input type="file" id='fircopy' accept="application/pdf" className="InputPage-field" name="fircopy" onChange={handleupload}/>
        <label htmlFor="newscopy" className='InputPage-Labels'>News Advertisement copy pdf:</label>
        <input type="file" id='newscopy' accept="application/pdf" className="InputPage-field" name="newscopy" onChange={handleupload}/>
        <label htmlFor="paymentcopy" className='InputPage-Labels'>Payment screenshot pdf:</label>
        <input type="file" id='paymentcopy' accept="application/pdf" className="InputPage-field" name="paymentcopy" onChange={handleupload}/>
        </>)
    }
    return (
            <>
            <form onSubmit={handleSubmit}>
            <h1 >{props.title}</h1>
            <div className='InputPage-main'>
            <label htmlFor="studentName"  className='InputPage-Labels' >Student's name:</label>
            <input type="text" id='studentName' autoFocus className="InputPage-field" value={formdata.studentName} placeholder='Student name'name="studentName" onChange={handleChange}/>
            <label htmlFor="fatherName" className='InputPage-Labels'>Father's name:</label>
            <input type="text" id='fatherName' className="InputPage-field" placeholder='Father name'name="fatherName" onChange={handleChange}/>
            <label htmlFor="rollNumber" className='InputPage-Labels'>Roll number:</label>
            <input type="text" id='rollNumber' className="InputPage-field" placeholder='Roll number'name="rollnumber" onChange={handleChange}/>
            <label htmlFor="programmeName" className='InputPage-Labels'>Programme name:</label>
            {/* <input type="text" id='programmeName' className="InputPage-field" placeholder='Programme name'name="programme" onChange={handleChange}/> */}
            <select name="programme" id="programmeName" className="InputPage-field" onChange={handleChange}>
                <option value="">Select</option>
                <option value="B.tech">B.tech</option>
                <option value="M.tech">M.tech</option>
                <option value="MCA">MCA</option>
            </select>
            <label htmlFor="department" className='InputPage-Labels'>Department:</label>
            <input type="" id='department' className="InputPage-field" placeholder='Department'name="department" onChange={handleChange}/>
            {/* <select name="department" id="department" className="InputPage-field" onChange={handleChange}>
                <option value="">csss</option>
                <option value="">iit</option>
                <option value="">papapa</option>
                <option value="">gpgp</option>
            </select> */}
            <label htmlFor="branch" className='InputPage-Labels'>Branch:</label>
            <input type="text" id='branch' className="InputPage-field" placeholder='Branch name'name="branch" onChange={handleChange}/>
            <label htmlFor="mobileNumber" className='InputPage-Labels'>Mobile number:</label>
            <input type="tel" pattern="[0-9]*" title="enter only numberic values"id='mobileNumber' className="InputPage-field" placeholder='Mobile number'name="mobilenumber" onChange={handleChange}/>
            <label htmlFor="emailId" className='InputPage-Labels'>Email Id:</label>
            <input type="email" id='emailId' className="InputPage-field" placeholder='Email id'name="email" onChange={handleChange}/>
            <label htmlFor="address" className='InputPage-Labels'>Address:</label>
            <input type="text" id='address' className="InputPage-field" placeholder='Address'name="address" onChange={handleChange}/>
            <label htmlFor="aadhar" className='InputPage-Labels'>Aadhar number:</label>
            <input type="text" id='aadhar' className="InputPage-field" placeholder='Aadhar number'name="aadharnumber" onChange={handleChange}/>
            <label htmlFor="marksheet" className='InputPage-Labels'>No dues copy pdf:</label>
            <input type="file" id='marksheet' accept="application/pdf" className="InputPage-field" name="marksheetcopy" onChange={handleupload}/>
            <label htmlFor="aadharcopy" className='InputPage-Labels'>Aadhar copy pdf:</label>
            <input type="file" id='aadharcopy' accept="application/pdf" className="InputPage-field" name="aadharcopy" onChange={handleupload}/>
            {/* duplicate marksheet */}
            {conditionalInputs}
            </div>
            
            <button type='submit' className="submitButton">Submit</button>
            
            </form>
            </>
    )
}
