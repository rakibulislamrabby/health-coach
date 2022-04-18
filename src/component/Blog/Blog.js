import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-4 text-decoration-underline text-success'> Question & Ans Section</h2>
            {/* qus-1 */}
            <div>
                <h5>1. Difference between authorization and authentication</h5>
                <p className='ps-3'>Authentication</p>
                <ul>
                    <li>It is usually performed before the authorization.</li>
                    <li>Authentication is the first step of authorization so always comes first.
                    </li>
                    <li>Authentication is the process of identifying a user to provide access to a system.</li>
                    <li>It requires the login details of the user, such as user name & password, etc.</li>

                </ul>
                <p>Authorization</p>
                <ul>
                    <li>It is usually done once the user is successfully authenticated.</li>
                    <li>Authorization is done after successful authentication.</li>
                    <li>Authorization is the process of giving permission to access the resources.</li>
                    <li>It requires the user's privilege or security level.</li>
                </ul>
            </div>
            {/* Qus-2 */}
            <div>
                <h5>2. Why we are using firebase? What other options do you have to implement authentication?</h5>
                <p>Firebase can be seen as a server-less backend for your mobile apps or web apps, etc. It is a service provided by Google. Firebase can be used when you do not want to spend a lot of time developing your own backend. It can be used for rapid development.</p>
                <h6>We are using Firebase Becouse-</h6>
                <ul>
                    <li>Incredibly Built-In Analytics</li>
                    <li>Web Development Made Easy</li>
                    <li>Growth and User Engagement</li>
                </ul>
                <h6>The other options of implement authentication</h6>
                <ul>
                    <li>JWT token use: JWTs are used as a secure way to authenticate users and share information. Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn't been altered after it was signed by the issuer</li>

                    <li>oAuth: Integrating OAuth 2.0 into your app has several benefits: It allows you to read data of a user from another application. It supplies the authorization workflow for web, desktop applications, and mobile devices. Is a server side web app that uses authorization code and does not interact with user credentials.</li>
                </ul>
            </div>

            {/* Qus-3 */}
            <div>
                <h5>3. What other services does firebase provide other than authentication</h5>
                <p>Firebase is originally developed by Firebase inc and later acquired by Google. It provides different kinds of services that help you to develop high-quality mobile and web applications to grow your business. It is compatible with Web, iOS, Android, and OS X clients. With Firebase, developers don’t need to worry about the backend programming, Authentication, API development, database (real-time cloud-hosted NoSQL database and cloud firestore), File storage, etc. Firebase provides all the services with very efficient and fast performance.</p>
                <p>Firebase Other Service is-</p>

                <ul>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                </ul>
            </div>
        </div>
    );
};

export default Blog;