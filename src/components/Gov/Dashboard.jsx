// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const Dashboard = () => {
//     const [banks, setBanks] = useState([]);
//     const [donors, setDonors] = useState([]);
//     const [donorsCount, setDonorsCount] = useState(0);

//     useEffect(() => {
//         axios.get("http://localhost:3000/banks")
//             .then(res => setBanks(res.data))
//             .catch(error => console.error("Error fetching banks:", error));

//         axios.get("http://localhost:3000/registered")
//             .then(res => {
//                 setDonors(res.data);
//                 // Calculate the number of available donors
//                 const availableDonorsCount = res.data.filter(donor => donor.donar === 'Yes').length;
//                 setDonorsCount(availableDonorsCount);
//             })
//             .catch(error => console.error("Error fetching users:", error));
//     }, []);

//     return (
//         <>
//             <div className="gov-dash">
//                 <div className="divs">
//                     <i className="fa-regular fa-hospital"></i>
//                     <h2>Total Banks</h2>
//                     <h3>{banks.length}</h3>
//                 </div>
//                 <div className="divs">
//                     <i className="fa-solid fa-person-circle-plus"></i>
//                     <h2>Total Users</h2>
//                     <h3>{donors.length}</h3>
//                 </div>
//                 <div className="divs">
//                     <i className="fa-solid fa-hand-holding-medical"></i>
//                     <h2>Donors</h2>
//                     <h3>{donorsCount}</h3>
//                 </div>
//                 <div className="divs">
//                     <i className="fa-regular fa-hand"></i>
//                     <h2>Total Requests</h2>
//                     <h3>5</h3>
//                 </div> 
//                 <div className="divs">
//                     <i className="fa-regular fa-user"></i>
//                     <h2>Thalassemia Cases</h2>
//                     <h3>0</h3>
//                 </div>   
//             </div>
//         </>
//     );
// }

// export default Dashboard;

import React, { useState } from 'react';

const Dashboard = () => {
    const [banks, setBanks] = useState([
        { id: 1, name: 'Bank 1' },
        { id: 2, name: 'Bank 2' },
        { id: 3, name: 'Bank 3' },
    ]);

    const [donors, setDonors] = useState([
        { id: 1, name: 'Donor 1', donar: 'Yes' },
        { id: 2, name: 'Donor 2', donar: 'No' },
        { id: 3, name: 'Donor 3', donar: 'Yes' },
        { id: 4, name: 'Donor 4', donar: 'No' },
        { id: 5, name: 'Donor 5', donar: 'Yes' },
    ]);

    const [donorsCount, setDonorsCount] = useState(donors.filter(donor => donor.donar === 'Yes').length);

    return (
        <>
            <div className="gov-dash">
                <div className="divs">
                    <i className="fa-regular fa-hospital"></i>
                    <h2>Total Banks</h2>
                    <h3>{banks.length}</h3>
                </div>
                <div className="divs">
                    <i className="fa-solid fa-person-circle-plus"></i>
                    <h2>Total Users</h2>
                    <h3>{donors.length}</h3>
                </div>
                <div className="divs">
                    <i className="fa-solid fa-hand-holding-medical"></i>
                    <h2>Donors</h2>
                    <h3>{donorsCount}</h3>
                </div>
                <div className="divs">
                    <i className="fa-regular fa-hand"></i>
                    <h2>Total Requests</h2>
                    <h3>5</h3>
                </div> 
                <div className="divs">
                    <i className="fa-regular fa-user"></i>
                    <h2>Thalassemia Cases</h2>
                    <h3>0</h3>
                </div>   
            </div>
        </>
    );
}

export default Dashboard;