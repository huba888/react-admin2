import {BrowserRouter,Routes,Route,unstable_HistoryRouter as HistoryRouter} from 'react-router-dom'
import Login from '@/pages/Login'
import './App.css'
import Layout from '@/pages/Layout'
import AuthComponent from './components/AuthComponent';
import Home from './pages/Home';
import Article from './pages/Article';
import Publish from './pages/Publish';
import history from './utils/history';
function App() {
  return (
    //为了完成不在路由组件上下文的情况下实现路由跳转
    <HistoryRouter history={history}>
      <Routes>
        <Route path='/' element={
          <AuthComponent>
            <Layout/>
          </AuthComponent>
        }>
          <Route index element={<Home></Home>}></Route>
          <Route path='article' element={<Article></Article>}></Route>
          <Route path='publish' element={<Publish></Publish>}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
