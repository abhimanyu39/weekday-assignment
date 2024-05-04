import "./App.css";
import Content from "./components/Layout/content";
import Header from "./components/Layout/header";
import Layout from "./components/Layout/layout";

function App() {
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
