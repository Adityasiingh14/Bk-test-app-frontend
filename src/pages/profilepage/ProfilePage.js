import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <form className="profile-form">
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" placeholder="Enter Your Name" />
        </div>
        <div className="form-group">
          <label>Your Email</label>
          <input type="email" placeholder="Enter Your Email" />
        </div>
        <div className="form-group">
          <label>Your Address</label>
          <input type="text" placeholder="Enter Your Address" />
        </div>
        <button type="submit" className="save-button">Save</button>
        <button type="button" className="logout-button">Logout</button>
      </form>
    </div>
  );
};

export default ProfilePage;
