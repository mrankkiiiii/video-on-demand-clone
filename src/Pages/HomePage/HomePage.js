import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const HomePage = () => {
  useEffect(() => {
    axios({
      method: "post",
      url: "https://videoapi-dot-virtualeventdemo.el.r.appspot.com/",
      responseType: "stream",
    }).then(function (response) {
        console.log("response",response.data.result)
    }).catch((err)=> {
        console.log("err",err)
    });
    return () => {
      // cleanup
    };
  }, []);
  return (
    <div>
      <Button>hello</Button>
    </div>
  );
};

export default HomePage;
