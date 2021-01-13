import "antd/dist/antd.css";

import { Button, Col, Input, Layout, Menu, Row } from "antd";
import { ReactComponent as SalveIcon } from "icons/salve.svg";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import { menuRoutes, routes } from "static/routes";

import Icon, { ShoppingCartOutlined } from "@ant-design/icons";

import styles from "./Layout.module.scss";

const { Header, Footer } = Layout;

const App = () => {
  const history = useHistory();
  console.log(history);
  const search = (value: string) => {
    history.push(`/search/${value}`);
  };
  return (
    <div className={styles.App}>
      <Layout className={styles.Layout}>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          >
            <Row align="middle">
              <Col flex="none">
                <Menu theme="dark" mode="horizontal">
                  <Menu.Item key="logo">
                    <Link to="/">
                      <div className={styles.Logo}>
                        <span>S</span>
                        <Icon
                          style={{ fontSize: 42 }}
                          component={SalveIcon}
                        ></Icon>
                        <span>LVE</span>
                      </div>
                    </Link>
                  </Menu.Item>
                  {menuRoutes.map((route) => {
                    return (
                      <Menu.Item key={route.path}>
                        <Link to={route.path}>{route.name}</Link>
                      </Menu.Item>
                    );
                  })}
                </Menu>
              </Col>
              <Col flex="auto">
                <Input.Search
                  className={styles.Search}
                  placeholder="Поиск товаров. Например, ибупрофен"
                  enterButton
                  onSearch={search}
                />
              </Col>
              <Col flex="none">
                <Link to="/cart">
                  <Button
                    className={styles.Cart}
                    type="primary"
                    icon={<ShoppingCartOutlined />}
                    size="middle"
                  >
                    Корзина
                  </Button>
                </Link>
              </Col>
            </Row>
          </Header>
          <Switch>
            {routes.map((route) => {
              const Component = route.component;
              return (
                <Route exact={route.exact} path={route.path}>
                  <Component />
                </Route>
              );
            })}
          </Switch>
          <Footer className={styles.Footer} style={{ textAlign: "center" }}>
            sTIMPonk 2021
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

const wrapper = () => (
  <Router>
    <App />
  </Router>
);

export default wrapper;
