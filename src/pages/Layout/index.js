import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import {Outlet,Link,useLocation, useNavigate} from 'react-router-dom'
import './index.scss'
import useStore from '@/store'
import {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
const { Header, Sider } = Layout

const GeekLayout = () => {
    const {userStore,loginStore}  =useStore()
    const {pathname} = useLocation()
    useEffect(()=>{
        userStore.getUserInfo()
    },[])
    //退出登陆
    const navigate = useNavigate()
    
    const logout= ()=>{
        loginStore.loginOut()
        navigate('login')
    }
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userStore.userInfo.username}</span>
          <span className="user-logout">
            <Popconfirm
            onConfirm={logout}
             title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={[pathname]}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item icon={<HomeOutlined />} key="/">
              <Link to={"/"}>数据概览</Link>
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="/article">
               <Link to={'/article'}>内容管理</Link>
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />} key="/publish">
               <Link to={'publish'}>发布文章</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
            <Outlet></Outlet>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default observer(GeekLayout)