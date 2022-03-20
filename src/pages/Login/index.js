
import { Card,Form,Checkbox,Input,Button } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'
import useStore from '@/store' 
function Login(){
    const {loginStore} = useStore()

    const onFinish = async (values) => {
      console.log('onfinish')
      loginStore.setToken({
        mobile:values.mobile,
        code:values.code
      })
      console.log('onfinish end')
      };
    return (
        <div className="login">
        <Card className="login-container">
          <img className="login-logo" src={logo} alt="" />
          <Form
          onFinish={onFinish}
          >
      <Form.Item
         name="mobile"
         rules={[
           {
             pattern: /^1[3-9]\d{9}$/,
             message: '手机号码格式不对',
             validateTrigger: 'onBlur'
           },
           { required: true, message: '请输入手机号' }
         ]}
      >
        <Input size="large" placeholder="请输入手机号" />
      </Form.Item>
      <Form.Item
         name="code"
         rules={[
           { len: 6, message: '验证码6个字符', validateTrigger: 'onBlur' },
           { required: true, message: '请输入验证码' }
         ]}
      >
        <Input size="large" placeholder="请输入验证码" />
      </Form.Item>
      <Form.Item>
        <Checkbox className="login-checkbox-label">
          我已阅读并同意「用户协议」和「隐私条款」
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" size="large" block>
          登录
        </Button>
      </Form.Item>
    </Form>
        </Card>
      </div>
    )
}

export default Login