import React, { Fragment , useState, useEffect} from 'react';
import { Codepen, Clock, Anchor, Server, TrendingDown, ArrowDown, ArrowUp } from 'react-feather';
import CountUp from 'react-countup';
import { Line } from 'react-chartjs-2';
import { buyData, buyOption } from '../../../data/default';
import DataTable from 'react-data-table-component'
import Breadcrumb from '../../common/breadcrumb';
import LiveChart from './liveChart';
import { Latency, Bandwidth, ClusterLoad, LiveCPUUsage, MemoryUsage, ProcessExplorer, IOActivity, Brandley, Cara, Airi, Cedric, Storage } from "../../../constant";
import { collection, getDocs, addDoc, doc, deleteDoc} from 'firebase/firestore';
import { db, firebase_app } from '../../../data/config';

//import { BaseAuth } from 'firebase-admin/lib/auth/base-auth';

//import { initializeApp } from 'firebase-admin/app';

//const { initializeApp } = require('firebase-admin/app');

//import {loadStripe} from '@stripe/stripe-js';

//const stripe = await loadStripe('rk_test_51L4IxYSHjQZvTzeDQFU7MyQHt21fGYrtZRYIw5Y0UPyifrecyNziOfUHVEIqvWT5eC8vH5fh7zDow9mGqg3xYELO00zISua1pc');

const ServerComponent = () => {

    const [users,setUsers]=useState([])
    const dB = firebase_app.firestore();
    const [selectedUser, setSelectedUser] = useState({});
    const [cellValue, setCellValue] = useState('');

    useEffect(() => {
        fetchUsers();
        const unsubscribe = dB.collection('Users').onSnapshot((snapshot) => {
            const getUser = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            }))
            setUsers(getUser)
            setSelectedUser(getUser[0])
          })
          //console.log(selectedUser.id);
          return () => unsubscribe();

      },[dB]);

    const fetchUsers = async() => {
        const todoRef = collection(db, 'Users');
        let allTodos = await getDocs(todoRef);
        allTodos.docs.forEach(element => {
            var data = element.data();
            setUsers(arr => [...arr , data]);
            //console.log(users.data);
        });
        }

   const deleteUSER = (id) => {
    console.log(id);
    const userRef = doc(db, "Users", id);
    deleteDoc(userRef);

//     getAuth()
//   .deleteUser(id)
//   .then(() => {
//     console.log('Successfully deleted user');
//   })
//   .catch((error) => {
//     console.log('Error deleting user:', error);
//   });

};

    return (
        <Fragment>
            {/* <Breadcrumb parent="Dashboard" title="Server" /> */}
            <Breadcrumb parent="Dashboard" title="All Users" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 xl-50 col-sm-6">
                        <div className="card server-card-bg">
                            <div className="card-body server-widgets">
                                <div className="d-flex">
                                    <Codepen />
                                    <div className="top-server">
                                        <h6 className="mb-0">{Storage}</h6>
                                    </div>
                                </div>
                                <div className="bottom-server">
                                    <h5 className="mb-0">{"85GB /"} <span>{"100Gb"}</span></h5>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar-animated bg-primary progress-bar-striped" role="progressbar" style={{ width: "55%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 xl-50 col-sm-6">
                        <div className="card server-card-bg">
                            <div className="card-body server-widgets">
                                <div className="d-flex">
                                    <Clock />
                                    <div className="top-server">
                                        <h6 className="mb-0">{Latency}</h6>
                                    </div>
                                </div>

                                <div className="bottom-server">
                                    <h5 className="mb-0">
                                        <span className="second-color counter">
                                            <CountUp end={40} />
                                        </span>{"ms"}
                                    </h5>
                                </div>

                                <div className="progress">
                                    <div className="progress-bar-animated bg-primary progress-bar-striped" role="progressbar" style={{ width: "25%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 xl-50 col-sm-6">
                        <div className="card server-card-bg">
                            <div className="card-body server-widgets">
                                <div className="d-flex">
                                    <Server />
                                    <div className="top-server">
                                        <h6 className="mb-0">{Bandwidth}</h6>
                                    </div>
                                </div>
                                <div className="bottom-server">
                                    <h5 className="mb-0">{"75GB /"} <span>{"100Gb"}</span></h5>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar-animated bg-primary progress-bar-striped" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 xl-50 col-sm-6">
                        <div className="card server-card-bg">
                            <div className="card-body server-widgets">
                                <div className="d-flex">
                                    <Anchor />
                                    <div className="top-server">
                                        <h6 className="mb-0">{ClusterLoad}</h6>
                                    </div>
                                </div>
                                <div className="bottom-server">
                                    <h5 className="mb-0">{"70%"} <span>
                                        <TrendingDown />
                                    </span>
                                    </h5>
                                </div>
                                <div className="last-server">
                                    <h6 className="mb-0 f-14">{"Lower than average"}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{LiveCPUUsage}</h5>
                            </div>
                            <div className="card-body chart-block">
                                <div className="server-chart-container">
                                    <LiveChart />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{MemoryUsage}</h5>
                            </div>
                            <div className="card-body server-canvas">
                                <Line data={buyData} options={buyOption} width={700} height={350} />
                            </div>
                        </div>
                    </div> */}
                    <div className="col-sm-12">

                        <div className="card">
                            <div className="card-header server-header">
                                <h5 className="d-inline-block">All Users</h5><span className="badge badge-primary m-l-10 d-inline-block mt-0">{users.length + " Users"}</span>
                            </div>
                            <div className="card-body">
                                {/* <div className="table-responsive">
                                    <DataTable
                                        columns={columns}
                                        key={users.id}
                                        data={users}
                                        striped={true}
                                        center={true}
                                        persistTableHead
                                    />
                                </div> */}

<div className="table-responsive sellers">
                    <table className="table table-bordernone">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Authentication</th>
                          <th scope="col">Email</th>
                          <th scope="col">Secret ID</th>
                          <th scope="col">Password</th>

                        </tr>
                      </thead>
                      <tbody>
                      {
            users.map((data, i) => (
              <tr key={i}>
              <td>
                <div className="d-inline-block align-middle">

                  <div className="d-inline-block">
                    <p>{data.Name}</p>
                  </div>
                </div>
              </td>
              <td>
                <p>{data.Authenticaion}</p>
              </td>
              <td>
                <p>{data.Email}</p>
              </td>
              <td>
                <p>{data.id}</p>
              </td>
              <td>
                <p>{data.Password}</p>
              </td>
              <td>
              <button className="btn btn-danger btn-sm" onClick={()=>deleteUSER(data.id)}>
                                                        <i className="fa fa-trash"></i> Delete
                                                    </button>
              </td>
            </tr>
            ))
        }
                      </tbody>
                    </table>
                  </div>

                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xl-4 xl-100">
                        <div className="card">
                            <div className="card-header server-header">
                                <h5 className="d-inline-block">{IOActivity}</h5><span className="badge badge-primary m-l-10 d-inline-block mt-0">{"Last 10 Activity"}</span>
                            </div>
                            <div className="card-body">
                                <div className="server-activity">
                                    <div className="d-flex">
                                        <ArrowDown className="font-primary m-r-10" />
                                        <span>{Brandley}</span>
                                        <div className="flex-grow-1 text-end"><span>{"14 KB"}</span></div>
                                    </div>
                                    <div className="d-flex">
                                        <ArrowDown className="font-primary m-r-10" />
                                        <span>{Cara}</span>
                                        <div className="flex-grow-1 text-end"><span>{"5 KB"}</span></div>
                                    </div>
                                    <div className="d-flex">
                                        <ArrowUp className="font-secondary m-r-10" />
                                        <span>{Airi}</span>
                                        <div className="flex-grow-1 text-end"><span>{"15 MB"}</span></div>
                                    </div>
                                    <div className="d-flex">
                                        <ArrowUp className="font-primary m-r-10" />
                                        <span>{Cedric}</span>
                                        <div className="flex-grow-1 text-end"><span>{"4 KB"}</span></div>
                                    </div>
                                    <div className="d-flex">
                                        <ArrowDown className="font-secondary m-r-10" />
                                        <span>{Cara}</span>
                                        <div className="flex-grow-1 text-end"><span>{"20 KB"}</span></div>
                                    </div>
                                    <div className="d-flex">
                                        <ArrowUp className="font-primary m-r-10" />
                                        <span>{Airi}</span>
                                        <div className="flex-grow-1 text-end"><span>{"25 MB"}</span></div>
                                    </div>
                                    <div className="d-flex">
                                        <ArrowDown className="font-primary m-r-10" />
                                        <span>{Brandley}</span>
                                        <div className="flex-grow-1 text-end"><span>{"14 KB"}</span></div>
                                    </div>
                                    <div className="d-flex">
                                        <ArrowDown className="font-primary m-r-10" />
                                        <span>{Cara}</span>
                                        <div className="flex-grow-1 text-end"><span>{"5 KB"}</span></div>
                                    </div>
                                    <div className="d-flex">
                                        <ArrowUp className="font-secondary m-r-10" />
                                        <span>{Airi}</span>
                                        <div className="flex-grow-1 text-end"><span>{"15 MB"}</span></div>
                                    </div>
                                    <div className="d-flex">
                                        <ArrowUp className="font-primary m-r-10" />
                                        <span>{Cedric}</span>
                                        <div className="flex-grow-1 text-end"><span>{"4 KB"}</span></div>
                                    </div>
                                    <div className="d-flex">
                                        <ArrowDown className="font-secondary m-r-10" />
                                        <span>{Cara}</span>
                                        <div className="flex-grow-1 text-end"><span>{"20 KB"}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </Fragment>
    );
}

export default ServerComponent;