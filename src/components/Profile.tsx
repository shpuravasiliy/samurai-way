import React from 'react';

const Profile = () => {
    return (
        <div>
            <div className='content'>
                <div>
                    <img
                        className='profile-img'
                        src="https://spottingit.com/wp-content/uploads/2018/11/Social-networks-are-a-reality-that-every-company-must-know-how-to-manage-in-a-very-personalized-way.jpg"
                        alt="Image Social network"
                    />
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;