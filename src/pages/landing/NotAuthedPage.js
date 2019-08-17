import React from "react";

class NotAuthedPage extends React.Component {

    render() {
        return (
            <div>
                <h1>Not Authorized</h1>
                <p>
                    Your account lacks the access for this page.
                </p>
            </div>
        )
    }
}

export default NotAuthedPage;