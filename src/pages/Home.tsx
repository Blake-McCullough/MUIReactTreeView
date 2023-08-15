import React from 'react';


const Home: React.FunctionComponent = () => {
    document.title = "Home";
    var eplod_id = sessionStorage.getItem("eplod_id");


    return (
        <>
            <h2 style={{ textAlign: "center" }}>Test Data</h2>

        </>
    );
};

export default Home;
