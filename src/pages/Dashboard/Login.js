import React from 'react';
import {Form, Icon, Input, Button, Checkbox,message,Avatar} from 'antd';
import styles from './Login.less';
import cookie from 'react-cookies';
import reqwest from 'reqwest';

class NormalForm extends React.Component{

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        reqwest({
          url:'/user/login',
          data:values,
          method:'post'
        }).then(res=>{
          if(typeof(res.userName)=='undefined'){
            message.error('用户名或密码错误')
          }else{
            cookie.save('name',res.userName);
            cookie.save('password',res.userPassword)
            this.props.history.push('/welcome')
          }
        })
      }
    });
  }

  constructor(props){
    super(props);
    this.state={
      login:false,
    }
  }

  componentWillMount(){
    let name  = cookie.load('name');
    let pwd = cookie.load('pwd');
    if(typeof(name)!='undefined'){ 
      this.setState({login:true})
      this.props.history.push('/welcome')
    }
  }


  render(){
    return (
    <div className={styles.contentStyles}>
    <div className={styles.userStyle}>
    <Avatar size={64} icon="user" />
    </div>
    <Form  
    onSubmit={this.handleSubmit} 
    className={styles.loginForm}> 
      <Form.Item>
        {this.props.form.getFieldDecorator('userName', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
        )}
      </Form.Item>

      <Form.Item>
          {this.props.form.getFieldDecorator('userPassword', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>

        <Form.Item>
          {this.props.form.getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className={styles.forgot} href="">Forgot password</a>
          <Button type="primary" 
          htmlType="submit" 
          className={styles.loginButton}>
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
    </Form>
    <div className={styles.pageFooter}>
    河南大学软件学院 · Wuhuzi · @CopyRight </div>
    </div>)
  }
}


export default Form.create('login')(NormalForm);