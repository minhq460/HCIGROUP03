import React, { Component } from 'react';
import Footer from './Footer';
import Header2 from './Header2';

class Technology extends Component {
    render() {
        return (
            <div>
                <Header2 />
                <section className="text-left" id="">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="Home">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Technology</li>
                            </ol>
                        </nav>
                        <div className="col-md-12 text-center">
                            <div className="heading-area mx-570 mb-lg-4 mb-3 ">
                                <h2 className="title"><span className="alt-color js-rotating"> ReactJs to Firebase</span> </h2>
                            </div>
                        </div>

                        <hr />
                        <div className="techmaster-font-open-sans post-content">
                            <span id="toc-chu-n-b-" /><h3><strong>1. What is Firebase:</strong></h3>
                            <p>- Firebase is a platform for developing mobile applications and websites, including simple and powerful APIs without backend or server.</p>
                            <p>
                                - Firebase is a database service operating on cloud - cloud platforms.
                                Attached to that is Google's extremely powerful server system.
                                The main function is to help users program the application by simplifying operations with the database. In particular, simple API application programming interfaces.
                                The goal is to increase the number of users and get more profits.

                                In particular, it is a versatile service and extremely good security.
                                 Firebase supports both Android and IOS platforms. It is not difficult to understand that many developers choose Firebase as the first platform to build applications for millions of users around the world.</p>
                            <span id="toc-chu-n-b-" /><h3><strong>2. Preparation:</strong></h3>
                            <p>- Before starting, make sure you have installed 2 modules&nbsp;<code>create-react-app</code> và&nbsp;<code>firebase-tools</code></p>
                            <p>- In the terminal, run the following 2 commands:</p>
                            <pre className=" language-bash" style={{ background: '#272822' }}><code className=" language-bash" style={{ color: 'white' }}><span className="token function" style={{ color: '#e90' }}>npm</span> i -g create-react-app</code></pre>
                            <pre className=" language-bash" style={{ background: '#272822' }}><code className=" language-bash" style={{ color: 'white' }}><span className="token function" style={{ color: '#e90' }}>npm</span> i -g firebase-tools</code></pre>
                            <p>⛟  Next, prepare yourself a Firebase account. Firebase is from Google, so all signups / subscriptions use Gmail accounts. Login / Registration is complete, select <code>Go to console </code> in the upper right corner to move to the page to create a new project, select Next <code>Create a project</code>.</p>
                            <p>- In the project name field, choose a name for your project, here I put it <code>firebase-deploy</code>.</p>
                            <p>☑ Tick selected <code>I accept Firebase terms</code> then press <code>Continue</code>.</p>
                            <p><img alt="" height={860} src="/agency/img/1.png" width={1917} style={{ margin: 'auto' }} /></p>
                            <p>⛟  Next press <code>Continue</code></p>
                            <p><img alt="" height={858} src="/agency/img/2.png" width={1901} style={{ margin: 'auto' }} /></p>
                            <p>- Choose <code>Create project</code> or change your choice to your liking.</p>
                            <p><img alt="" height={859} src="/agency/img/3.png" width={1902} style={{ margin: 'auto' }} /></p>
                            <p>- Once created, we can start deploying the ReactJs app to Firebase.</p>
                            <span id="toc-b-c-1-" /><h4><strong>Step 1:</strong></h4>
                            <p>- First, create a new ReactJs app with the name firebase-deploy, for example, the tool used will be&nbsp;<code>create-react-app</code>&nbsp;</p>
                            <pre className=" language-bash" style={{ background: '#272822' }}><code className=" language-bash" style={{ color: 'white' }}>create-react-app firebase-deploy</code></pre>
                            <p>- After the program has finished running, you will see the firebase-deploy folder has the following structure:</p>
                            <p><img alt="" height={218} src="/agency/img/4.png" width={323} style={{ margin: 'auto' }} /></p>
                            <span id="toc-b-c-2-" /><h4><strong>Step 2:</strong></h4>
                            <p>- If you're familiar with the use of create-react-app to create ReactJs app, you also know firebase-deploy is currently in development build mode. To deploy the app to hosting, you must switch the app from development build to production build, the conversion is as follows:</p>
                            <pre className=" language-bash" style={{ background: '#272822' }}><code className=" language-bash" style={{ color: 'white' }}><span className="token builtin class-name" style={{ color: 'hsl(75,70%,60%)' }}>cd</span> firebase-deploy</code></pre>
                            <p>-Here, I'm using yarn so the command to build will be as follows:</p>
                            <pre className=" language-bash" style={{ background: '#272822' }}><code className=" language-bash" style={{ color: 'white' }}><span className="token function" style={{ color: '#e90' }}>yarn</span> build</code></pre>
                            <p>- If you use npm, the build statement will be:</p>
                            <pre className=" language-bash" style={{ background: '#272822' }}><code className=" language-bash" style={{ color: 'white' }}><span className="token function" style={{ color: '#e90' }}>npm</span> run build</code></pre>
                            <p>- To learn more about yarn and npm, try this post&nbsp;<a href="https://techmaster.vn/posts/34378/yarn-vs-npm-moi-thu-ban-can-biet">Yarn vs npm: Everything you need to know</a></p>
                            <p>- After the build is completed, you will see an additional build folder in firebase-deploy</p>
                            <p><img alt="" height={209} src="/agency/img/5.png" width={323} style={{ margin: 'auto' }} /></p>
                            <span id="toc-b-c-3-" /><h4><strong>Step 3:</strong></h4>
                            <p>- Login to firebase with the command:</p>
                            <pre className=" language-bash" style={{ background: '#272822' }}><code className=" language-bash" style={{ color: 'white' }}>firebase login</code></pre>
                            <p>- At this point, the Firebase CLI will ask if you want it to collect data and reporting on errors, whether you can choose to have (Y) or not (n):</p>
                            <p><img alt="" height={27} src="/agency/img/6.png" width={558} style={{ margin: 'auto' }} /></p>
                            <p>- Then it will open a new tab on the browser to login to a new account or select Gmail account is available on the browser. After logging in, the terminal will notify you that you have successfully logged in.</p>
                            <p><img alt="" height={47} src="/agency/img/7.png" width={350} style={{ margin: 'auto' }} /></p>
                            <span id="toc-b-c-4-" /><h4><strong>Step 4:</strong></h4>
                            <p>- In the terminal, run the command:</p>
                            <pre className=" language-bash" style={{ background: '#272822' }}><code className=" language-bash" style={{ color: 'white' }}>firebase init</code></pre>
                            <p>- At the terminal will run firebase CLI with some options as follows:</p>
                            <p><img alt="" height={92} src="/agency/img/8.png" width={963} style={{ margin: 'auto' }} /></p>
                            <p>- Here we choose Hosting and confirm by pressing Enter.</p>
                            <p><img alt="" height={163} src="/agency/img/9.png" width={517} style={{ margin: 'auto' }} /></p>
                            <p><img alt="" height={71} src="/agency/img/10.png" width={498} style={{ margin: 'auto' }} /></p>
                            <p>- Click Use an existing project to select the project we just created above. Project firebase-deploy will appear here, continue Enter to go to Hosting Setup</p>
                            <p>- Hosting Setup will continue to be options, you choose as follows:</p>
                            <p> + What do you want to use as your public directory? =  build<br />
                            + Configure as a single-page app (rewrite all urls to /index.html)? =  y<br />
                            + File build/index.html already exists. Overwrite? = N</p>

                            <p>- After setup hosting, you will see firebase-deploy folder with 2 more files .firebaserc and firebase.json.</p>
                            <p><img alt="" height={252} src="/agency/img/11.png" width={322} style={{ margin: 'auto' }} /></p>
                            <p>- Open filebase.json and add the headers to your hosting like this:</p>
                            <pre className=" language-bash" style={{ background: '#272822' }}><code className=" language-bash" style={{ color: 'white' }}><span className="token string">"headers"</span><span className="token builtin class-name">:</span> <span className="token punctuation">[</span>{"\n"}{"  "}<span className="token punctuation">{"{"}</span><span className="token string">"source"</span><span className="token builtin class-name">:</span> <span className="token string">"/service-worker.js"</span>, <span className="token string">"headers"</span><span className="token builtin class-name">:</span> <span className="token punctuation">[</span><span className="token punctuation">{"{"}</span><span className="token string">"key"</span><span className="token builtin class-name">:</span> <span className="token string">"Cache-Control"</span>, <span className="token string">"value"</span><span className="token builtin class-name">:</span> <span className="token string">"no-cache"</span><span className="token punctuation">{"}"}</span><span className="token punctuation">]</span><span className="token punctuation">{"}"}</span>{"\n"}<span className="token punctuation">]</span></code></pre>
                            <p><img alt="" height={541} src="/agency/img/12.png" width={1049} style={{ margin: 'auto' }} /></p>
                            <span id="toc-b-c-5-" /><h4><strong>Step 5:</strong></h4>
                            <p>- Run the following command in the terminal:</p>
                            <pre className=" language-bash" style={{ background: '#272822' }}><code className=" language-bash" style={{ color: 'white' }}>firebase deploy</code></pre>
                            <p>- Wait for the command to finish running, you will see a success message and there will be 2 links in which Hosting URL is the link to your ReactJs app.</p>
                            <p><img alt="" height={68} src="/agency/img/13.png" width={630} style={{ margin: 'auto' }} /></p>
                            <p>- So is the complete deployment♥.</p>
                            <p style={{ textAlign: 'right' }}><strong>Good luck ☺</strong></p>
                        </div>
                    </div>

                </section>

                <Footer />

            </div>
        );
    }
}

export default Technology;