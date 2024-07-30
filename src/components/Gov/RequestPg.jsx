import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RequestPg = () => {
    // Define dummy data
    const dummyData = [
        {
            id: '1',
            username: 'John Doe',
            group: 'O+',
            units: 2,
            usrlocation: 'New York',
            date: '2024-07-30',
            certificates: ['cert1', 'cert2'],
            mobile: '123-456-7890',
        },
        {
            id: '2',
            username: 'Jane Smith',
            group: 'A-',
            units: 1,
            usrlocation: 'Los Angeles',
            date: '2024-07-29',
            certificates: ['cert3'],
            mobile: '987-654-3210',
        },
        // Add more dummy data as needed
    ];

    const [requests, setRequests] = useState(dummyData);

    return (
        <>
            <div className="gov-req">
                <h2>
                    Requests <div className="gov-req-count">{requests.length}</div>
                </h2>
                <table>
                    <thead>
                        <tr className='gov-req-head'>
                            <td>Users</td>
                            <td>Group</td>
                            <td>Units</td>
                            <td>Location</td>
                            <td>Date</td>
                            <td>Certificate No.</td>
                            <td>Mobile No</td>
                            <td>More</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Render user details */}
                        {requests.map(items => (
                            <tr key={items.id}>
                                {/* <td><img src={items.img} width={60} height={60} style={{ borderRadius: "50%" }} alt="" /><p style={{ marginTop: "15px", marginLeft: "15px" }}>{items.name}</p> </td> */}
                                <td><div className="group"><i className="fa-solid fa-user" style={{ marginRight: "10px" }}></i>{items.username}</div></td>
                                <td><div className="group">{items.group}</div></td>
                                <td><div className="group">{items.units}</div></td>
                                <td><div className="group">{items.usrlocation}</div></td>
                                <td><div className="mobileNo">{items.date}</div></td>
                                <td><div className="mobileNo">{items.certificates.length}</div></td>
                                <td><div className="mobileNo">{items.mobile}</div></td>
                                <td><Link to={`/gov/details/${items.id}`}><button className='btn'>More</button></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RequestPg;
