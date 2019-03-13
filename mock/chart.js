export default {
  'get /chart/getColumnChartData':function(req,res,next){
    res.json({
      result:[
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 1150 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
        {genre:'The Other',sold:123}
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
      ]
    })
  }
}