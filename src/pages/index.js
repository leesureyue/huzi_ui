import {Component} from 'react';
import {Layout,Menu,Icon} from "antd";
import GlobalHeader from '../component/GlobalHeader';
import SiderMenu  from '../component/SiderMenu';
import logo from '../images/menu-logo.svg';
import cookie from 'react-cookies'; 
import { getMenuData } from '../common/menu';

import styles from './index.less';

const {Header,Content} = Layout;

class DashboardLayout extends Component{ 
    constructor(props) {
      super(props);
      this.state = {
        collapsed: false,
        login:false, 
      };
    }

    handleMenuCollapse = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
    render(){ 
      let name = cookie.load('name');

      return ( 
          <Layout  className={styles.layout}>
            {
              typeof(name)!='undefined' && 
              <SiderMenu
              logo={logo}
              collapsed={this.state.collapsed}
              menuData={getMenuData()}
              location={this.props.location}
              onCollapse={this.handleMenuCollapse}
              />
            }
            <Layout>
              <Header style={{ padding: 0 }}>
              <GlobalHeader
                  logo={logo}
                  collapsed={this.state.collapsed}
                  currentUser={{
                    name: 'wuhuzi',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
                    userid: '00000001', 
                  }}
                  onCollapse={this.handleMenuCollapse}
                /> 
              </Header>
              <Content style={{margin: '24px 24px 0'}} >
                {this.props.children}
              </Content>
              
            </Layout>
          </Layout>
        )
    }
}

export default DashboardLayout;