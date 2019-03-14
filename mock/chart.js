export default {
  'get /chart/getColumnChartData':function(req,res,next){
    res.json({
      result:[
        { id:1, genre: 'Sports', sold: 275 },
        { id:2,genre: 'Strategy', sold: 1150 },
        { id:3,genre: 'Action', sold: 120 },
        { id:4,genre: 'Shooter', sold: 350 },
        { id:5,genre: 'Other', sold: 150 },
        { id:6,genre:'The Other',sold:123}  
      ]
    })
  },
  'get /chart/getPieChartData':function(req,res,next){
    res.json({
      result:[
        { item: '事例一', count: 40 },
        { item: '事例二', count: 21 },
        { item: '事例三', count: 17 },
        { item: '事例四', count: 13 },
        { item: '事例五', count: 9 }
      ],
      code:300,
      msg:'接口调用失败'
  })
  },
  'get /chart/getCricleListChart':function(req,res,next){
    res.json({
      result:[
      {gender: 'Store 1',value: 40,},
      {gender: 'Store 2',value: 25,}, 
      {gender: 'Store 3',value: 25,},
      {gener:'Store 4',value:20}
    ]
    })
  },
  'get /chart/getBarChartData':function(req,res,next){
    res.json({
      result:[
        {country:'china',population:1234},
        {country:'china1-1',population:345},
        {country:'china1-2',population:674},
        {country:'china1-3',population:125},
        {country:'china1-4',population:689}
      ],
      code:200,
      msg:'suuccess'
    })
  },
  'get /table/getTableData':function(req,res,next){
    res.json({
      result:[{

        id: 1,
        ranking: 1,
        category: '类别1',
        total: 1732,
        paid:'20%'
      }, {
       
        id: 2,
        ranking:2,
        category: '类别2',
        total: 1628,
        paid:'20%'
      }, {
       
        id:3,
        ranking:3,
        category: '类别3',
        age: 32,
        total: 1634,
        paid:'20%'
      }, {
        
        id:4,
        ranking:4,
        category: '类别4',
        age: 32,
        total: 1290,
        paid:'20%'
      }],
      code:200,
      total:100,
      pageSize:20,
      currentPage:2,
      msg:'success'
    })
  }
}