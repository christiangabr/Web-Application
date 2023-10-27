import { useState } from "react";

const ProfileUpdateForm = () => {
    const [fullName, setfullName] = useState('')
    const [address1, setaddress1] = useState('')
    const [address2, setaddress2] = useState('')
    const [city, setcity] = useState('')
    const [state, setstate] = useState('')
    const [zipcode, setzipcode] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const profile = {fullName, address1, address2, city, state, zipcode}

        const response = await fetch('/api/profiles', {
            method: 'POST',
            body: JSON.stringify(profile),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setfullName('')
            setaddress1('')
            setaddress2('')
            setcity('')
            setstate('')
            setzipcode('')
            setError(null)
            console.log('Profile Updated.')
        }
    }
    return (
        <form className="update" onSubmit={handleSubmit}>
            <h3>Update Profile</h3>

            <label>Full Name:</label>
            <input
                type="text"
                onChange={(e) => setfullName(e.target.value)}
                value={fullName}
            />

            <label>Address 1:</label>
            <input
                type="text"
                onChange={(e) => setaddress1(e.target.value)}
                value={address1}
            />

            <label>Address 2:</label>
            <input
                type="text"
                onChange={(e) => setaddress2(e.target.value)}
                value={address2}
            />

            <label>City:</label>
            <input
                type="text"
                onChange={(e) => setcity(e.target.value)}
                value={city}
            />

            <label>State:</label>
            <input
                type="text"
                onChange={(e) => setstate(e.target.value)}
                value={state}
            />

            <label>Zipcode:</label>
            <input
                type="number"
                onChange={(e) => setzipcode(e.target.value)}
                value={zipcode}
            />

            <button>Update Profile</button>
            {error && <div className="error"></div>}
        </form>
    )
}

export default ProfileUpdateForm