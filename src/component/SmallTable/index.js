import React from 'react';
import {Table,Icon} from 'antd';


class SmallTable extends React.Component{

  constructor(props){
    super(props)
  }

  state = {
    filteredInfo: null,
    sortedInfo: null,
    tableData:[],
    loading: false, 
    pagination:{pageSize:5}
  };

  componentDidMount(){
    fetch('/table/getTableData')
    .then(res=>res.json())
    .then(data=>{  
      this.setState({tableData:data})
    })
  }
  handleChange = (pagination, filters, sorter) => { 
    const pager = { ...this.state.pagination }; 
    this.setState({
      pagination: pager,
    });
     
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter, 
    });
  }

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  }

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  }

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  }


  render(){
    
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: '排名',
      dataIndex: 'ranking',
      key: 'ranking',
      filteredValue: filteredInfo.name || null,
      sorter: (a, b) => a.ranking - b.ranking,
      sortOrder: sortedInfo.columnKey === 'ranking' && sortedInfo.order,
    }, {
      title: '品类',
      dataIndex: 'category',
      key: 'category',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'category' && sortedInfo.order,
    }, {
      title: '总点击数',
      dataIndex: 'total',
      key: 'total',
      filteredValue: filteredInfo.address || null,
      sorter: (a, b) => a.total - b.total,
      sortOrder: sortedInfo.columnKey === 'total' && sortedInfo.order,
    },{
      title:'支付占比',
      dataIndex:'paid',
      key:'paid',
      render:text=>(<span>{text} % <Icon type="caret-up" 
      style={{color:'red'}}/>
      </span>)
    }];

    return (
      <Table  columns={columns} 
              onChange={this.handleChange}
              pagination={this.state.pagination}
              rowKey={record => record.id} 
              dataSource={this.state.tableData}  
      size='small'/>
    )
  }

}

export default SmallTable;