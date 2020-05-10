import React, {useContext} from 'react';
import Layout from '../../Layout';
import {Helmet} from 'react-helmet';
import Teaser from '../../../components/Teaser/Teaser';
import configuration from '../../../utils/constants';
import {AuthContext} from '../../../context/AuthContext';
import useInputValue from '../../../utils/input-value';
import {login} from '../../../api/auth';

const Companies = () => {

    let {setCurrentUser, setToken} = useContext(AuthContext);

    let email = useInputValue('email');
    let password = useInputValue('password');

    const handleSubmit = (event) => {
        event.preventDefault();
        // login({
        //     email: email.value,
        //     password: password.value
        // }).then(({ user, token }) => {
        //     setToken(token);
        //     setCurrentUser(user);
        // }).catch(error => {
        //     error.json().then(({errors}) => email.parseServerError(errors));
        // });
    };

    const PageTitle = 'Organization Sign-up'

    return (
        <Layout>
            <Helmet>
    <title>{configuration.appTitle} - {PageTitle}</title>
            </Helmet>
            <Teaser additionalClass="small" teaser={PageTitle}/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                        <form onSubmit={handleSubmit} className="form p-5">
                            <label htmlFor="name">Name</label>
                            <div className="mb-4">
                                <input id="email" name="email" type="email" required autoFocus className={`w-100`} placeholder=""/>
                            </div>

                            <label htmlFor="email">Email</label>
                            <div className="mb-4">
                                <input id="email" name="email" type="email" required autoFocus className={`w-100 ${email.error ? 'border-red-500' : ''}`} placeholder="example@domain.com" {...email.bind}/>
                                { email.error && <p className="text-red-500 text-xs">{ email.error }</p> }
                            </div>

                            <label htmlFor="password">Password</label>
                            <input name="password" type="password" className="w-100 mb-2" required {...password.bind}/>

                            <label htmlFor="confirm_password">Confirm Password</label>
                            <input name="confirm_password" type="password" className="w-100 mb-2" required/>

                            <a href="/forgot-password">Forgot password?</a>
                            <button type="submit" className="button primary round w-100 text-uppercase mt-4">Sign in</button>
                            <p className="text-center mt-2">New to PocovidScreen? <a href="/sign-up" title="Create an account">Create an account</a>.</p>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Companies;