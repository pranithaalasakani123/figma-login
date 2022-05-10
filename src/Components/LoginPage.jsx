import React from 'react';
import './LoginPage.css';
import Logo from './Logo';
import HeadingPage from './HeadingPage';
import Para from './Para';
import EmailInput from './EmailInput';
import Industry from './Industry';
import CompanySize from './CompanySize';
import Started from './Started';

function LoginPage() {
    return (
        <div>
            <div className='login_page'>
                <Logo />
                <HeadingPage />
                <Para />
                <EmailInput title='Company name' placeholder='e.g. Example Inc' />
                <Industry />
                <CompanySize />
                <Started />
            </div>
            <div style={{position:'absolute',top:'700px',left:'650px'}}>
                Terms of use  |  Privacy policy
            </div>
        </div>
    )
}

export default LoginPage