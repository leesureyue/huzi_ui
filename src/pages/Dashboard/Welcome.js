import React from 'react';
import {Form,Radio,Button,Input,DatePicker,Select} from 'antd';
import styles from './Welcome.less'
import cookie from 'react-cookies';
import reqwest from 'reqwest';



const {RangePicker } =DatePicker;
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
}

const TaskCreateForm = Form.create('choooseOne')(
  class extends React.Component{
    constructor(props){
      super(props);
    }

    state={
      choose:'choose_1'
    }

    handleFormChooseChange=(e)=>{
      this.props.form.resetFields()
       this.setState({choose:e.target.value})
    } 
    handleSubmit=(e)=>{
      e.preventDefault();
      this.props.form.validateFields((err, fieldsValue) => {
        const rangeDate = fieldsValue['date'];
        const values ={
          ...fieldsValue,
          'date':rangeDate[0].format('YYYY-MM-DD')+'='
          +rangeDate[1].format('YYYY-MM-DD')
        }
        if (!err) { 
          if(this.state.choose=='choose_1'){
            reqwest({
              url:'/create/session/task',
              method:'POST',
              data:values
            })
            .then(res=>{
              console.log(res)
            })
          }else{
            reqwest({
              url:'/create/pageflow/task',
              method:'POST',
              data:values
            })
            .then(res=>{
              console.log(res)
            })
          }
        }
      });
    }


    
    render(){   
      const children=[];
      for(let i=1;i<=100;i++){
        children.push(<Select.Option key={i}>{i}</Select.Option>)
      }
      return(
        <div>
          <Form layout='horizontal'
          className={styles.createFormStyle} 
          onSubmit={this.handleSubmit}>
            <Form.Item label='TASK CHOOSE' 
            {...formItemLayout}>  
            <Radio.Group 
            buttonStyle="solid"
            defaultValue="horizontal" 
            defaultValue='choose_1'
            onChange={this.handleFormChooseChange} 
            >
              <Radio.Button
              style={{minWidth:'175px'}} 
              value="choose_1">选项 1</Radio.Button>
              <Radio.Button 
              style={{minWidth:'175px'}} 
              value="choose_2">选项 2</Radio.Button>
            </Radio.Group>
            </Form.Item>

            <Form.Item label='TASKNAME' 
            {...formItemLayout}>
            {
              this.props.form.getFieldDecorator('taskName',{
                rules: [{ required: true, message: 'Please input the task name!' }],
              })(
                <Input placeholder='请输入任务名称' allowClear/>
              )
            }
            </Form.Item>
            {
              this.state.choose=='choose_1' && 
              <Form.Item label='AGE'
              {...formItemLayout}>
                <Form.Item 
                style={{ display: 'inline-block', 
                width: 'calc(50% - 12px)' }}
                >
                {
                  this.props.form.getFieldDecorator('startAge',{
                    rules: [{ 
                      required: true, 
                      message: 'Please input the age!' }],
                  })( 
                    <Select  style={{width:'150px'}}>
                      {children}
                    </Select>
                  )
                } 
                </Form.Item>
                <span style={{ display: 'inline-block',
                 width: '24px', textAlign: 'center' }}>
                  -
                </span>
                <Form.Item
                style={{ display: 'inline-block', 
                width: 'calc(50% - 12px)' }}>
                {
                  this.props.form.getFieldDecorator('endAge',{
                    rules: [{ 
                      required: true, 
                      message: 'Please input the age!' }],
                  })( 
                    <Select  style={{width:'150px'}}>
                      {children}
                    </Select>
                  )
                }  
                </Form.Item>
              </Form.Item>
            }
            <Form.Item label='DATE'
            {...formItemLayout}>
            {
              this.props.form.getFieldDecorator('date',{
                rules: [{ 
                  required: true,
                  message: 'Please choose the date!' }],
              })(
                <RangePicker  
                showTime 
                format="YYYY-MM-DD HH:mm:ss" />
              )
            }
            </Form.Item>
            {
              this.state.choose=='choose_2'&& 
              <Form.Item label='PAGEFLOW' key='pageflow'
              {...formItemLayout}>
              {
                this.props.form.getFieldDecorator('pageflow',{
                  rules: [{ 
                    required: true,
                    message: 'Please input the pageflow!' }],
                })(
                  <Input placeholder='please input the page flow' allowClear/>
                )
              }
              </Form.Item> 
            }
            <Form.Item 
            wrapperCol={{ span: 12, offset: 5 }}>
            <Button type="primary"
             htmlType="submit">START</Button>
            </Form.Item>
          </Form>
        </div>
      )
    }
  }
)

class WelcomePage extends React.Component{ 
  constructor(props){
    super(props);
  }


  componentWillMount(){
    let name = cookie.load('name');
    if(typeof(name)=='undefined'){
      this.props.history.push('/')
    }
  }

  render(){
    return(
      <div> 
        <TaskCreateForm  />
      </div>
    )
  }
}


export default WelcomePage;