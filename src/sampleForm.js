import { useState } from 'react';

const SampleForm = () => {
    const [name, setName] = useState("");
    const [lastname, setlastName] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const [emailid, setemailid
    ] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name !== '' && name.length > 5) {
            if (lastname !== '' && lastname.length > 5) {
                if (phonenumber) {
                    if (emailid) {
                        alert(`Form details: Name: ${name + ' ' + lastname} 
                      Phone No.: ${phonenumber}   
                      Email Id: ${emailid}`)
                    } else {
                        alert('please provide valid mail id')
                    }

                } else {
                    alert('please provide valid phonenumber')
                }

            } else {
                alert('please provide valid lastname, it must include 5 charecters')
            }
        }
        else {
            alert('please provide valid name, it must include 5 charecters')

        }
    }
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>Enter your First Name:
                    <input
                        type="text"
                        value={name}
                        placeholder="Your first name.."
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>Enter your Last Name:
                    <input
                        type="text"
                        value={lastname}
                        placeholder="Your last name.."
                        onChange={(e) => setlastName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>Enter your Phone No.:
                    <input
                        type="tel"
                        value={phonenumber}
                        placeholder="Your phone number.."
                        pattern="[0-9]{4}[0-9]{2}[0-9]{4}"
                        onChange={(e) => setphonenumber(e.target.value)}
                        required
                    />
                    <br />
                    <label>Enter your Email Id:
                        <input
                            type="email"
                            value={emailid}
                            placeholder="abc@gmail.com.."
                            onChange={(e) => setemailid(e.target.value)}
                            required
                        />
                    </label>

                </label>
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default SampleForm;