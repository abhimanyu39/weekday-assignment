import { useEffect, useState } from "react";
import "./App.css";
import { getjob } from "./api/getJobs";
import Content from "./components/Layout/content";
import Header from "./components/Layout/header";
import Layout from "./components/Layout/layout";
import { Provider, useDispatch } from "react-redux";
import { updateJobs } from "./redux/jobSlicer";
import { store } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const [requestBody, setRequestBody] = useState({
    limit: 10,
    offset: 0,
  });

  const getJobs = async (body) => {
    const res = await getjob(body);

    if (res) {
      console.log(updateJobs);
      dispatch(updateJobs(res.jdList));
      console.log(res);
    }
  };

  useEffect(() => {
    getJobs(requestBody);
  }, []);

  return (
    <>
      <Layout>
        <Header />
        <Content />
      </Layout>
    </>
  );
}

export default App;
