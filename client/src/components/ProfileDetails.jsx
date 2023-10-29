
const ProfileDetails = ({profile}) => {
    return (
        <div className="profile-details">
            <div class="row p-3 border bg-light">
            <p><strong>Full Name: </strong> {profile.fullName}</p>
            <p><strong>Address 1: </strong> {profile.address1}</p>
            <p><strong>Address 2: </strong> {profile.address2}</p>
            <p><strong>City: </strong> {profile.city}</p>
            <p><strong>State: </strong> {profile.state}</p>
            <p><strong>Zipcode: </strong> {profile.zipcode}</p>
            </div>
        </div>
    )

}

export default ProfileDetails