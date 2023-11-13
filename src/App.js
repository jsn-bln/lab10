import './App.css';
import React, {useState} from 'react';
import ResultPage from './components/ResultPage';



function App() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agreeTerms: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormSubmitted(true);
  };
  
  return (
    <div className="App">
      { formSubmitted? (<ResultPage formData={formData} />) : 
        (
          <>
            <h1>Data Entry Form</h1>
            <form onSubmit={handleSubmit}>
              <div className='group1'>
                <div className='form-input'>
                  <label>Email</label>
                  <input type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Enter email'/>
                </div>
                <div className='form-input'>
                  <label>Name</label>
                  <input type='text' placeholder='Enter name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}/>
                </div>
              </div>
              
              <div className='address'>
                <label>Address 1</label>
                <input type='text' placeholder='1234 Main St.'
                    name='address1'
                    value={formData.address1}
                    onChange={handleChange}/>
              </div>
              <div className='address'>
                <label>Address 2</label>
                <input type='text' placeholder='Apartment, studio, or floor'
                    name='address2'
                    value={formData.address2}
                    onChange={handleChange}/>
              </div>
              <div className='group2'>
                <div className='form-input'>
                  <label>City</label>
                  <input type='text' placeholder=''
                      name='city'
                      value={formData.city}
                      onChange={handleChange}/>
                </div> 
                <div className='form-input'>
                  <label>Province</label>
                  <select value={formData.province}
                      name='province'
                      onChange={handleChange}>
                    <option>Alberta</option>
                    <option> British Columbia</option>
                    <option>Manitoba</option>
                    <option>New Brunswick</option>
                    <option>Newfoundland and Labrador</option>
                    <option>Nova Scotia</option>
                    <option>Ontario</option>
                    <option>Prince Edward Island</option>
                    <option>Quebec</option>
                    <option>Saskatchewan</option>
                  </select>
                </div> <div className='form-input'>
                  <label>Postal Code</label>
                  <input type='text' placeholder='A1B 2C3'
                      name='postalCode'
                      value={formData.postalCode}
                      onChange={handleChange}
                      />
                </div>
              </div>
              <div className='form-checkbox'>
                <input type='checkbox' placeholder='Agree'
                    name='agreeTerms'
                    value={formData.agreeTerms}
                    onChange={handleChange}/>
                <label>Agree Terms & Condition?</label>
              </div>
              
              <button  type='submit' className='sbt-btn'>Submit</button>
            </form>
          </>


        )}
        
    </div>
  );
}

export default App;
