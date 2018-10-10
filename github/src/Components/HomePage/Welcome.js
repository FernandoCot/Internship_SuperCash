import React from "react";

class Welcome extends React.Component{
    render() {
        return(
            <section name="Section_Cover">
                <div className="container-fluid fluid-welcome">
                    <div className="container mobile_pad0">
                        <div className="container mobile_pad0">
                            <div className="row-cover row">
                                <div className="col-12 col-md-7 text-left">
                                    <h1 className="tit-welcome font_white">
                                        Built for developers
                                    </h1>
                                    <h4 className="txt-welcome">
                                        GitHub is a development platform inspired by the way you work. From <span className="pointer font_white border_light_gray">open source</span> to <span className="pointer font_white border_light_gray">business</span>, you can host and review code, manage projects, and build software alongside 28 million developers.
                                    </h4>
                                </div>
                                <div className="col-12 col-md-5">
                                    <form className="form_signup text-left" method="get" action="#">
                                        <label>Username</label>
                                        <br />
                                        <input className="font_gray input_control" placeholder="Pick a username"></input>
                                        <br />
                                        <label>Email</label>
                                        <br />
                                        <input className="font_gray input_control" placeholder="you@example.com"></input>
                                        <br />
                                        <label>Password</label>
                                        <br />
                                        <input className="font_gray input_control" placeholder="Create a password"></input>
                                        <br />
                                        <p>Make sure it's at least 7 characters, including a number, and a lowercase letter.</p>
                                        <button className="btn_green_signup">Sign up for Github</button>
                                        <p className="text-center">
                                            By clicking “Sign up for GitHub”, you agree to our 
                                            <a href="https://help.github.com/terms" target="blank"> terms of service </a>
                                            and <a href="https://help.github.com/privacy" target="blank">privacy statement</a>. 
                                            We’ll occasionally send you account related emails.</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Welcome;