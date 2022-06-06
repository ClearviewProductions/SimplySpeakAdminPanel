import React, { Fragment } from 'react';
import man from '../../../assets/images/dashboard/user.png'
import { Link } from 'react-router-dom';
import { Edit } from 'react-feather';
import {ELANA,GeneralManager, About} from '../../../constant'
import { firebase_app } from '../../../data/config';

const UserPanel = () => {
    const url = '';
    const profileName = firebase_app.auth().currentUser.displayName;
    return (
        <Fragment>
            <div className="sidebar-user text-center">
                <div>
                    <img className="img-60 rounded-circle lazyloaded blur-up" src={url ? url : man} alt="#" />
                    <div className="profile-edit">
                        <Link to={`${process.env.PUBLIC_URL}/users/userEdit`}>
                            <Edit />
                        </Link>
                    </div>
                </div>
                <h6 className="mt-3 f-14">{profileName}</h6>
                <p>{About}.</p>
            </div>
        </Fragment>
    );
};

export default UserPanel;