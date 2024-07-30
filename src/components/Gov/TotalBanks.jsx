// import React, { useEffect, useState } from 'react'
// import { UsersData } from '../../data/Users'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import Loading from '../Loading'
// import LoadingOne from '../LoadingOne'
// const TotalBanks = () => {
//   const [loading, setLoading] = useState(true);

//     const [users, setUsers] = useState([]);
//     const [banks,setbanks]=useState([])
//     const [searchCity,setsearchCity]=useState('') 
//     const [searchBloodGroup,setsearchBloodGroup]=useState('') 
//     const [filteredUsers, setFilteredUsers] = useState([]);
//     const [filterAvailBankss, setFilterAvailBankss] = useState(banks);
//     useEffect(_=>{
//         axios.get("http://localhost:3000/banks").then(res=>setbanks(res.data))
//         console.log(banks);
//         axios.get('http://localhost:3000/users')
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the users!", error);
//       });
//     },[])
    
//   useEffect(() => {
//     // Simulate a network request
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//   }, []);

//   if (loading) {
//     return <LoadingOne/>;
//   }


//     const filterAvailBanks = filterBank(banks,searchCity)
//     const filterAvailBGroups = filterGroups(filteredUsers,searchBloodGroup)

//     function filterBank(available,searchKey){
//         if (!available) return [];
//         return (available.filter(p => p.city && p.city.toLowerCase().includes(searchKey.toLowerCase()))
//         )
    
//     }
//     function filterGroups(available,searchKey){
//         if (!available) return [];
//         return (available.filter(p => p.group && p.group.toLowerCase().includes(searchKey.toLowerCase()))
//         )
    
//     }
//     const handleRowClick = (bankName) => {
//         const filtered = users.filter(user => user.bankName === bankName);
//         setFilteredUsers(filtered);
//         console.log(filteredUsers);
//       };
//   return (
//     <>
//       <div className="total-banks">
//         <div className="total-header">
//             <button className='complete-btn'>Gov</button>
//             <button className='complete-btn'>Private</button>
//             <button className='complete-btn'>Red Cross</button>
//         <input type="text" placeholder='Search for City' onChange={e=>setsearchCity(e.target.value)} style={{width:"170px",height:"30px",margin:"10px",border:"2px solid black"}} />
//           <p>Total Banks : {filterAvailBanks.length}</p>
//         </div>

//         <div className="total-bank">
//         <input type="text" placeholder='Search for Group'  onChange={e=>setsearchBloodGroup(e.target.value)} style={{width:"170px",height:"30px",margin:"10px",marginTop:"40px",border:"2px solid black"}} />
//         <p>Total Groups : {filterAvailBGroups.length}</p>
//         {filterAvailBGroups ? <table className="table table-hover" style={{ marginTop: "25px", borderRadius: "20px" }}>
//   <thead>
//     <tr>
//       <th scope="col">User</th>
//       <th scope="col">Group</th>
//       <th scope="col">Age</th>
//       <th scope="col">Mobile</th>
//       <th scope="col">Location</th>
//       <th scope="col">More</th>
//     </tr>
//   </thead>
//   <tbody>
//     {filterAvailBGroups.length === 0 ? (
//       <tr>
//         <td colSpan="6" style={{ textAlign: "center" }}>No Users Found</td>
//       </tr>
//     ) : (
//       filterAvailBGroups.map((items, index) => (
//         <tr key={index}>
//           <td style={{ fontSize: ".6em" }}>
//             <i className="fa-solid fa-user"></i>
//             <p style={{ fontSize: "1.6em" }}>{items.name}</p>
//           </td>
//           <td className="group">{items.group}</td>
//           <td className="group">{items.age}</td>
//           <td className="group">{items.mobile}</td>
//           <td className="group">{items.location}</td>
//           <td>
//             <button className="btn">Details</button>
//           </td>
//         </tr>
//       ))
//     )}
//   </tbody>
// </table>
//  : <h1>No Users Found</h1>}
//         </div>

//         <div className="total-users">
//         <table className="table" style={{ borderRadius: "20px", width: "100%" }}>
//   <caption>List of Banks</caption>
//   <thead>
//     <tr>
//       <th scope="col">Bank</th>
//       <th scope="col">Location</th>
//       <th scope="col">State</th>
//       <th scope="col">Mobile</th>
//       <th scope="col">More</th>
//     </tr>
//   </thead>
//   <tbody>
//     {filterAvailBanks.length === 0 ? (
//       <tr>
//         <td colSpan="5" style={{ textAlign: "center" }}>No Banks Found</td>
//       </tr>
//     ) : (
//       filterAvailBanks.map((items, index) => (
//         <tr key={index}>
//           <td style={{ fontSize: ".6em" }}>
//             <i className="fa-solid fa-user"></i>
//             <p style={{ fontSize: "1.6em" }}>{items.bankName}</p>
//           </td>
//           <td className="group">{items.city}</td>
//           <td className="group">{items.state}</td>
//           <td className="group">{items.contactNo}</td>
//           <td>
//             <button className="btn" onClick={() => handleRowClick(items.bankName)}>Details</button>
//           </td>
//         </tr>
//       ))
//     )}
//   </tbody>
// </table>

//         </div>
//       </div>
//     </>
//   )
// }

// export default TotalBanks

import React, { useEffect, useState } from 'react';
import LoadingOne from '../LoadingOne';

// Dummy data
const dummyBanks = [
  { bankName: 'Bank A', city: 'New York', state: 'NY', contactNo: '123-456-7890' },
  { bankName: 'Bank B', city: 'Los Angeles', state: 'CA', contactNo: '234-567-8901' },
  { bankName: 'Bank C', city: 'Chicago', state: 'IL', contactNo: '345-678-9012' },
];

const dummyUsers = [
  { name: 'John Doe', group: 'O+', age: '29', mobile: '987-654-3210', location: 'New York', bankName: 'Bank A' },
  { name: 'Jane Smith', group: 'A-', age: '34', mobile: '876-543-2109', location: 'Los Angeles', bankName: 'Bank B' },
  { name: 'Alice Johnson', group: 'B+', age: '28', mobile: '765-432-1098', location: 'Chicago', bankName: 'Bank C' },
];

const TotalBanks = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [banks, setBanks] = useState([]);
  const [searchCity, setSearchCity] = useState('');
  const [searchBloodGroup, setSearchBloodGroup] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filterAvailBanks, setFilterAvailBanks] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setBanks(dummyBanks);
    setUsers(dummyUsers);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingOne />;
  }

  const filterBanks = (available, searchKey) => {
    if (!available) return [];
    return available.filter(p => p.city && p.city.toLowerCase().includes(searchKey.toLowerCase()));
  };

  const filterGroups = (available, searchKey) => {
    if (!available) return [];
    return available.filter(p => p.group && p.group.toLowerCase().includes(searchKey.toLowerCase()));
  };

  const handleRowClick = (bankName) => {
    const filtered = users.filter(user => user.bankName === bankName);
    setFilteredUsers(filtered);
  };

  const filterAvailBank= filterBanks(banks, searchCity);
  const filterAvailBGroups = filterGroups(filteredUsers, searchBloodGroup);

  return (
    <>
      <div className="total-banks">
        <div className="total-header">
          <button className='complete-btn'>Gov</button>
          <button className='complete-btn'>Private</button>
          <button className='complete-btn'>Red Cross</button>
          <input
            type="text"
            placeholder='Search for City'
            onChange={e => setSearchCity(e.target.value)}
            style={{ width: "170px", height: "30px", margin: "10px", border: "2px solid black" }}
          />
          <p>Total Banks: {filterAvailBank.length}</p>
        </div>

        <div className="total-bank">
          <input
            type="text"
            placeholder='Search for Group'
            onChange={e => setSearchBloodGroup(e.target.value)}
            style={{ width: "170px", height: "30px", margin: "10px", marginTop: "40px", border: "2px solid black" }}
          />
          <p>Total Groups: {filterAvailBGroups.length}</p>
          {filterAvailBGroups.length > 0 ? (
            <table className="table table-hover" style={{ marginTop: "25px", borderRadius: "20px" }}>
              <thead>
                <tr>
                  <th scope="col">User</th>
                  <th scope="col">Group</th>
                  <th scope="col">Age</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Location</th>
                  <th scope="col">More</th>
                </tr>
              </thead>
              <tbody>
                {filterAvailBGroups.map((item, index) => (
                  <tr key={index}>
                    <td style={{ fontSize: ".6em" }}>
                      <i className="fa-solid fa-user"></i>
                      <p style={{ fontSize: "1.6em" }}>{item.name}</p>
                    </td>
                    <td className="group">{item.group}</td>
                    <td className="group">{item.age}</td>
                    <td className="group">{item.mobile}</td>
                    <td className="group">{item.location}</td>
                    <td>
                      <button className="btn">Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1>No Users Found</h1>
          )}
        </div>

        <div className="total-users">
          <table className="table" style={{ borderRadius: "20px", width: "100%" }}>
            <caption>List of Banks</caption>
            <thead>
              <tr>
                <th scope="col">Bank</th>
                <th scope="col">Location</th>
                <th scope="col">State</th>
                <th scope="col">Mobile</th>
                <th scope="col">More</th>
              </tr>
            </thead>
            <tbody>
              {filterAvailBanks.length > 0 ? (
                filterAvailBanks.map((item, index) => (
                  <tr key={index}>
                    <td style={{ fontSize: ".6em" }}>
                      <i className="fa-solid fa-user"></i>
                      <p style={{ fontSize: "1.6em" }}>{item.bankName}</p>
                    </td>
                    <td className="group">{item.city}</td>
                    <td className="group">{item.state}</td>
                    <td className="group">{item.contactNo}</td>
                    <td>
                      <button className="btn" onClick={() => handleRowClick(item.bankName)}>Details</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>No Banks Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TotalBanks;
