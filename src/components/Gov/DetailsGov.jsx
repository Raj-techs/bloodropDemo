import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

// Dummy data
const dummyRequests = [
    {
        id: '1',
        username: 'John Doe',
        group: 'O+',
        units: 2,
        usrlocation: 'New York',
        date: '2024-07-30',
        certificates: ['https://img.freepik.com/premium-vector/certificate-blood-donation-04_983286-1509.jpg', 'https://static.vecteezy.com/system/resources/previews/023/841/229/non_2x/blood-donation-charity-certificate-donor-day-heart-vector.jpg'],
        mobile: '123-456-7890',
    },
    {
        id: '2',
        username: 'Jane Smith',
        group: 'A-',
        units: 1,
        usrlocation: 'Los Angeles',
        date: '2024-07-29',
        certificates: ['https://img.freepik.com/premium-vector/certificate-blood-donation-04_983286-1509.jpg', 'https://static.vecteezy.com/system/resources/previews/023/841/229/non_2x/blood-donation-charity-certificate-donor-day-heart-vector.jpg'],
        mobile: '987-654-3210',
    },
];

const dummyBanks = [
    { bankName: 'Bank A', city: 'New York', address: '123 Street', bloodGroups: { 'A+': 5, 'O+': 2 }, units: 10 },
    { bankName: 'Bank B', city: 'Los Angeles', address: '456 Avenue', bloodGroups: { 'A-': 3, 'O-': 1 }, units: 5 },
];

const dummyUsers = [
    { bankName: 'Bank A', group: 'O+', name: 'John Doe' },
    { bankName: 'Bank B', group: 'A-', name: 'Jane Smith' },
];

const DetailsGov = () => {
    let { id } = useParams();
    const [reqData, setReqData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setReqData(dummyRequests);
        setLoading(false);
    }, []);

    const donor = reqData.find(item => item.id === id);
    const [banksData, setBanksData] = useState(dummyBanks);
    const [usersData, setUsersData] = useState(dummyUsers);

    const defaultDate = new Date().toISOString().slice(0, 10);

    const handleAllocate = async (bank) => {
        if (!donor || !donor.units) {
            console.error("Error: donor is missing or does not contain 'units'");
            return;
        }

        try {
            const data = {
                fromBank: bank.bankName,
                fromLocation: bank.address,
                fromCity: bank.city,
                fromUsername: donor.username,
                userLocation: donor.usrlocation,
                group: donor.group,
                units: donor.units,
                transferToBankName: bank.bankName,
                transferCity: bank.city,
                status: "processing...",
                date: defaultDate
            };
            console.log(data);

            Swal.fire({
                title: 'Success!',
                text: 'Blood allocated successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } catch (error) {
            console.error("Error allocating data", error);
        }
    };

    return (
        <>
            <div className="nav">
                <div className="logo"><h1>Government</h1></div>
                <div className="opts">
                    <ul>
                        <Link to='/'><li>Home</li></Link>
                        <li>About</li>
                        <li>Services</li>
                        <li>Blog</li>
                        <li>Blood</li>
                    </ul>
                </div>
                <div className="more">
                    <ul>
                        <h5>Login</h5>
                        <h5>SignUp</h5>
                    </ul>
                </div>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : !donor ? (
                <p>No donor found</p>
            ) : (
                <div className="worker-profile">
                    <div className="worker-img">
                        <h1 style={{ position: "absolute", top: "80px", left: "10px", fontSize: "2em", fontWeight: "bolder" }}>Request</h1>
                        <i className="fa-solid fa-user" style={{ fontSize: "6em", marginBottom: "10px",color:"black" }}></i>
                        <table width="300px">
                            <tbody>
                                <tr>
                                    <th>Name :</th>
                                    <td>{donor.username}</td>
                                </tr>
                                <tr>
                                    <th>Group :</th>
                                    <td>{donor.group}</td>
                                </tr>
                                <tr>
                                    <th>Units Needed :</th>
                                    <td>{donor.units}</td>
                                </tr>
                                <tr>
                                    <th>Mobile :</th>
                                    <td>{donor.mobile}</td>
                                </tr>
                                <tr>
                                    <th>Location :</th>
                                    <td>{donor.usrlocation}</td>
                                </tr>
                                <tr>
                                    <th>Certificates :</th>
                                    <td>{donor.certificates.length}</td>
                                </tr>
                                <tr>
                                    <th>Date :</th>
                                    <td>{donor.date}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="worker-work">
                        {donor.certificates.map((certificate, index) => (
                            <div key={index} id={`report-${index + 1}`}>
                                <b>Certi-{index + 1}</b>
                                <img src={certificate} alt={`Certificate ${index + 1}`} width="100%" height="100%" />
                            </div>
                        ))}
                    </div>
                    <div className="worker-cAp">
                        <h2>Visited Status</h2>
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Day</th>
                                    <th>Certi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>22/6/2024</td>
                                    <td>10:20 AM</td>
                                    <td>Monday</td>
                                    <td><a href="#report-1">check</a></td>
                                </tr>
                                <tr>
                                    <td>22/6/2024</td>
                                    <td>12:00 PM</td>
                                    <td>Wednesday</td>
                                    <td><a href="#report-2">check</a></td>
                                </tr>
                                <tr>
                                    <td>22/6/2024</td>
                                    <td>3:30 PM</td>
                                    <td>Tuesday</td>
                                    <td><a href="#report-3">check</a></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="msg-box">
                            <h3>Message</h3>
                            <textarea cols="40" rows="4" placeholder='Enter msg to Patient'></textarea>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            )}
            <div style={{ height: "100vh", position: "relative", overflowY: "scroll" }}>
                <NeedAllocate reqUser={donor} dummyBanks={dummyBanks} />
            </div>
        </>
    );
};

const NeedAllocate = (props) => {
    const [available, setAvailable] = useState(props.dummyBanks || []);
    const [searchText, setSearchText] = useState("");
    const [bankNameToTransfer, setBankNameToTransfer] = useState("");
    const [cityNameToGet, setCityNameToGet] = useState("");

    const defaultDate = new Date().toISOString().slice(0, 10);

    useEffect(() => {
        setAvailable(props.dummyBanks || []);
    }, [props.dummyBanks]);

    const filterAvailBanks = filterBank(available, searchText);

    function filterBank(available, searchKey) {
        if (!available) return [];
        return available.filter(p => p.city && p.city.toLowerCase().includes(searchKey.toLowerCase()));
    }

    const handleAllocate = (bank) => {
        if (!props.reqUser || !props.reqUser.units) {
            console.error("Error: reqUser is missing or does not contain 'units'");
            return;
        }

        const data = {
            fromBank: bank.bankName,
            fromLocation: bank.address,
            fromCity: bank.city,
            fromUsername: props.reqUser.username,
            userLocation: props.reqUser.usrlocation,
            group: props.reqUser.group,
            units: props.reqUser.units,
            transferToBankName: bank.bankName,
            transferCity: bank.city,
            status: "processing...",
            date: defaultDate
        };
        console.log(data);

        Swal.fire({
            title: 'Success!',
            text: 'Blood allocated successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    return (
        <div className="table">
            <div className="search">
                <input
                    type="text"
                    placeholder="Search by city"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                
            </div>
           <center>
           <table style={{marginTop:"20px",width:"80%"}}>
                <thead>
                    <tr>
                        <th>Bank Name</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Blood Groups</th>
                        <th>Units</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filterAvailBanks.map((bank, index) => (
                        <tr key={index}>
                            <td>{bank.bankName}</td>
                            <td>{bank.city}</td>
                            <td>{bank.address}</td>
                            <td>
                                {Object.keys(bank.bloodGroups).map((group, idx) => (
                                    <div key={idx}>{group}: {bank.bloodGroups[group]}</div>
                                ))}
                            </td>
                            <td>{bank.units}</td>
                            <td>
                                <button onClick={() => handleAllocate(bank)}>Allocate</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
           </center>
        </div>
    );
};

export default DetailsGov;
