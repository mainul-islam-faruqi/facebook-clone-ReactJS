import React from 'react';
import { Button } from '@material-ui/core';

const Login = () => {
    return (
        <div className="login">
            <div className="login__top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDnQr7_YTbHdheXzINJsubSxaRBOy1_0Ikug&usqp=CAU" alt=""/>
                <img src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png" alt=""/>
            </div>
            

            <Button type="submit" onClick="">
                Sign In
            </Button>
        </div>
    );
};

export default Login;