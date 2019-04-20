export default {
  'get /chart/getColumnChartData':function(req,res,next){
    res.json([
      { id:1, genre: 'Sports', sold: 275 },
      { id:2,genre: 'Strategy', sold: 1150 },
      { id:3,genre: 'Action', sold: 120 },
      { id:4,genre: 'Shooter', sold: 350 },
      { id:5,genre: 'Other', sold: 150 },
      { id:6,genre:'The Other',sold:123},
      { id:7, genre: 'one', sold: 275 },
      { id:8,genre: 'two', sold: 1150 },
      { id:9,genre: 'three', sold: 120 },
      { id:10,genre: 'four', sold: 350 },
      { id:11,genre: 'six', sold: 150 },
      { id:12,genre:'seven',sold:123}  
    ])
  },
  'get /chart/getPieChartData':function(req,res,next){
    res.json(
      [
        { item: '事例一', count: 123 },
        { item: '事例二', count: 345 },
        { item: '事例三', count: 234 },
        { item: '事例四', count: 230 },
        { item: '事例五', count: 524 }
      ])
  },
  'get /get/pay/conversion/rate':function(req,res,next){
    res.json([ 
      {gender: 'Store 1',value: 40.5,},
      {gender: 'Store 2',value: 0.25,}, 
      {gender: 'Store 3',value: 25},
      {gender: 'Store 4',value:20},
      {gender: 'Store 5',value: 40,},
      
     
    ])
  },
  'get /chart/getBarChartData':function(req,res,next){
    res.json(
      [
        {country:'china',population:1234},
        {country:'china1-1',population:345},
        {country:'china1-2',population:674},
        {country:'china1-3',population:125},
        {country:'china1-4',population:689}
      ])
  },
  'get /table/getTableData':function(req,res,next){
    res.json([
      { 
        id: 1,
        ranking: 1,
        category: '类别1',
        total: 1732,
        paid:0.1356
      }, {
       
        id: 2,
        ranking:2,
        category: '类别2',
        total: 1628,
        paid:0.1356
      }, {
       
        id:3,
        ranking:3,
        category: '类别3',
        age: 32,
        total: 1634,
        paid:0.1346
      }, {
        
        id:4,
        ranking:4,
        category: '类别4',
        age: 32,
        total: 1290,
        paid:0.1356
      },
      {
       
        id: 5,
        ranking:2,
        category: '类别2',
        total: 1628,
        paid:0.1356
      }, {
       
        id:6,
        ranking:3,
        category: '类别3',
        age: 32,
        total: 1634,
        paid:0.1356
      }, 
      {
       
        id: 7,
        ranking:2,
        category: '类别2',
        total: 1628,
        paid:0.1356
      }, {
       
        id:8,
        ranking:3,
        category: '类别3',
        age: 32,
        total: 1634,
        paid:0.1356
      }, 
      {
       
        id: 9,
        ranking:2,
        category: '类别2',
        total: 1628,
        paid:0.1356
      }, {
       
        id:10,
        ranking:3,
        category: '类别3',
        age: 32,
        total: 1634,
        paid:0.1356
      } 
    ])
  },
  'get /chart/getCurveChart':function(req,res,next){
    res.json([
      {name: "Jan",orderCount: 7.0,clickCount: 3.9},
      {name: "Feb",orderCount: 6.9,clickCount: 4.2},
      {name: "Mar",orderCount: 9.5,clickCount: 5.7},
      {name: "Apr",orderCount: 14.5,clickCount: 8.5},
      {name: "May",orderCount: 18.4,clickCount: 11.9},
      {name: "Jun",orderCount: 21.5,clickCount: 15.2},
      {name: "Jul",orderCount: 25.2,clickCount: 17.0},
      {name: "Aug",orderCount: 26.5,clickCount: 16.6},
      {name: "Sep",orderCount: 23.3,clickCount: 14.2},
      {name: "Oct",orderCount: 18.3,clickCount: 10.3}, 
      {name: "One",orderCount: 25.2,clickCount: 17.0},
      {name: "Two",orderCount: 26.5,clickCount: 16.6},
      {name: "Three",orderCount: 23.3,clickCount: 14.2},
      {name: "Four",orderCount: 18.3,clickCount: 10.3}, 
    ])
  },
  'post /create/session/task':function(req,res,next){
    res.json({
      code:200,
      success:true,
      msg:'success'
    })
  },
  'post /create/pageflow/task':function(req,res,next){
    res.json({
      code:200,
      success:true,
      msg:'success'
    })
  },
  'get /chart/getColumnChartData/rank':function(req,res,next){
    res.json([
      { id:1, genre: 'Sports', sold: 275 },
      { id:2,genre: 'Strategy', sold: 1150 },
      { id:3,genre: 'Action', sold: 120 },
      { id:4,genre: 'Shooter', sold: 350 },
      { id:5,genre: 'Other', sold: 150 },
      { id:6,genre:'The Other',sold:123},
      { id:7, genre: 'one', sold: 275 },
      { id:8,genre: 'two', sold: 1150 },
      { id:9,genre: 'three', sold: 120 },
      { id:10,genre: 'four', sold: 350 },
       
    ])
  },
  'post /user/login':function(req,res,next){
    res.json({
      userName:'wuhuzi',
      userPassword:'123',
    })
  }
}