import React from 'react';
import PropTypes from 'prop-types'; 

// Nhận prop 'theme' với giá trị mặc định là 'light'
function UserProfile({ userData, theme = 'light' }) { 
  return (
    // className động dựa trên theme prop
    <div className={`profile-card theme-${theme}`} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', backgroundColor: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
      <img
        src={userData.avatarUrl}
        alt={userData.name}
        width={userData.imageSize}
        height={userData.imageSize}
        className="profile-avatar"
      />
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p style={{ fontSize: '0.8em', fontStyle: 'italic' }}>Theme: {theme}</p>
    </div>
  );
}

UserProfile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,          
    avatarUrl: PropTypes.string,
    imageSize: PropTypes.number,
  }).isRequired, 
  theme: PropTypes.string,
};

export default UserProfile;