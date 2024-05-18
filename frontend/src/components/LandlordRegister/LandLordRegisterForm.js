import React, {useState} from 'react'
import '../../styles/RegisterLandlord.css'

function LandLordRegisterForm() {

  const[name, setName] = useState("");
  const[password, setPassword] = useState("");
  const[address, setAdrress] = useState("");
  const[gender, setGender] = useState("");
  const[phone, setPhone] = useState("");
  const[email, setEmail] = useState("");
  const[remarks, setRemarks] = useState("");
  const[city, setCity] = useState("");
  const[accountNo, setAccountNo] = useState("");
  const[bankName, setBankName] = useState("");
  const[vatNo, setVatNo] = useState("");

  //handle submission
  const createLandlord = async (e) => {
    e.preventDefault();
    const data = {
      name,
      password,
      address,
      gender,
      phone,
      email,
      remarks,
      city,
      accountNo,
      bankName,
      vatNo
    };
    const url = "http://127.0.0.1:5000/"

  };


  return (
    <div>    
    <div className='register-landlord-wrapper'>
        
        <form className='register-landlord'>
        <p className='register-landlord-title'>REGISTER AS A LANDLORD</p>
          <div className='form-wrapper'>
          <div className='form-left'>
            <label for="name">Name: </label>
            <input type="text" id='name'/>

            <label for="password">Password: </label>
            <input type="password" id='password'/>

            <label for="name">Repeat Password: </label>
            <input type="password" id='name'/>

            <label for="address">Address: </label>
            <input type="text" id='address'/>

            <label for="gender">Gender: </label>
            <input type="text" id='gender'/>

            <label for="phone">Phone: </label>
            <input type="text" id='phone'/>
            </div>

            <div className='form-right'>
            <label for="email">Eamil: </label>
            <input type="text" id='email'/>

            <label for="remarks">Remarks: </label>
            <input type="text" id='remarks'/>

            <label for="city">City: </label>
            <input type="text" id='city'/>

            <label for="acountno">Account No: </label>
            <input type="text" id='acountno'/>

            <label for="bankname">Bank Name: </label>
            <input type="text" id='bankname'/>

            <label for="vat">VAT/PIN No: </label>
            <input type="text" id='vat'/>
            </div>
            </div>
            <button type='submit'>Register Landlord</button>
        </form>
    </div>
    </div>
  )
}

export default LandLordRegisterForm
// name,password,address,gender,phone,email,remarks,city,account_no,bank_name,vat_no