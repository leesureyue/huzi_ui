export default {
    plugins:[
        ['umi-plugin-react',{
            antd:true,
            dva:true,
            locale: {
              enable: true,
            }
        }]
    ],
    routes:[{
      path:'/',
      component:'index.js',
      routes:[
        {patf:'/',component:'Dashboard/Analysis'},
        {path:'/dashboard/analysis',component:'Dashboard/Analysis'},
      ]
    }]
}