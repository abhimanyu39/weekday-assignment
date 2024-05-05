import { useEffect, useRef, useState } from "react";
import "./App.css";
import { getjob } from "./api/getJobs";
import Content from "./components/Layout/content";
import Header from "./components/Layout/header";
import Layout from "./components/Layout/layout";
import { Provider, useDispatch, useSelector } from "react-redux";
import { updateJobs } from "./redux/jobSlicer";
import { store } from "./redux/store";
import { debounce } from "./utils";

function App() {
  const dispatch = useDispatch();
  const initialRender = useRef(null);

  const selectedFilters = useSelector((state) => state.filters);
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
    if (!initialRender.current) {
      debounce(getJobs(requestBody), 1000);
      initialRender.current = true;
    }
  }, []);

  useEffect(() => {
    console.log(selectedFilters);
  }, [selectedFilters]);

  // useEffect(() => {
  //   if (requestBody.offset > 0) {
  //     debounce(getJobs(requestBody), 1000);
  //   }
  // }, [requestBody]);

  console.log(requestBody);
  return (
    <>
      <Layout>
        <Header />
        <Content
          getJobs={getJobs}
          requestBody={requestBody}
          setRequestBody={setRequestBody}
        />
      </Layout>
    </>
  );
}

export default App;
