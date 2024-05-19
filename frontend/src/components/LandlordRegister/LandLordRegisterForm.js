import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/RegisterLandlord.css';

function LandLordRegisterForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [remarks, setRemarks] = useState("");
  const [city, setCity] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [bankName, setBankName] = useState("");
  const [vatNo, setVatNo] = useState("");

  // Handle form submission
  const createLandlord = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

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

    const url = "http://127.0.0.1:5000/create_landlord";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      if (!response.ok) {
        alert(result.message);
      } else {
        alert("Landlord created successfully!");
        // Optionally clear the form or redirect the user
      }
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred while creating landlord. Please try again.");
    }
  };

  return (
    <div className='register-landlord-wrapper'>
      <form className='register-landlord' onSubmit={createLandlord}>
        <p className='register-landlord-title'>REGISTER AS A LANDLORD</p>
        <div className='form-wrapper'>
          <div className='form-left'>
            <label htmlFor="name">Name: </label>
            <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="password">Password: </label>
            <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />

            <label htmlFor="repeatPassword">Repeat Password: </label>
            <input type="password" id='repeatPassword' value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />

            <label htmlFor="address">Address: </label>
            <input type="text" id='address' value={address} onChange={(e) => setAddress(e.target.value)} />

            <label htmlFor="gender">Gender: </label>
            <input type="text" id='gender' value={gender} onChange={(e) => setGender(e.target.value)} />

            <label htmlFor="phone">Phone: </label>
            <input type="text" id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <div className='form-right'>
            <label htmlFor="email">Email: </label>
            <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="remarks">Remarks: </label>
            <input type="text" id='remarks' value={remarks} onChange={(e) => setRemarks(e.target.value)} />

            <label htmlFor="city">City: </label>
            <input type="text" id='city' value={city} onChange={(e) => setCity(e.target.value)} />

            <label htmlFor="accountNo">Account No: </label>
            <input type="text" id='accountNo' value={accountNo} onChange={(e) => setAccountNo(e.target.value)} />

            <label htmlFor="bankName">Bank Name: </label>
            <input type="text" id='bankName' value={bankName} onChange={(e) => setBankName(e.target.value)} />

            <label htmlFor="vatNo">VAT/PIN No: </label>
            <input type="text" id='vatNo' value={vatNo} onChange={(e) => setVatNo(e.target.value)} />
          </div>
        </div>
        <button type='submit'>Register Landlord</button>
        <p className='already-have-an-account'>Already have an account? <Link to="/landlordlogin"><p>login here</p></Link></p>
        
      </form>
    </div>
  );
}

export default LandLordRegisterForm;
