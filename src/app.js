import React from "react";
import { Layout } from "antd";

const { Header, Content } = Layout;
const App = () => {
  return (
    <Layout>
      <Header>
        <div>Webpack React</div>
      </Header>
      <Content></Content>
    </Layout>
  );
};

export default App;
