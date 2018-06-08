import React from "react";
import Person from "../Person/Person";

class BackgroundPhoto extends React.Component {
    render() {
        return (
            <div className={"index"}>
                <div style={{
                    height:"300px",
                    flex: 1,
                   //  alignSelf: 'stretch',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    width : "400px",
                    backgroundsize: 'cover',
                    // remove width and height to override fixed static size
                    backgroundImage: "url(https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.breakingbelizenews.com%2Fwp-content%2Fuploads%2F2016%2F03%2Fbreakingnews3.jpg&f=1)"}} />
            </div>
        );
    }
}
export default BackgroundPhoto;
