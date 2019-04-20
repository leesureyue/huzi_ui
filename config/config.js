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
        {path:'/',component:'Dashboard/Login'},
        {path:'/welcome',component:'Dashboard/Welcome'},
        {path:'analysis',component:'Dashboard/Analysis'},
        {path:'monitor',component:'Dashboard/Monitor'},
       
      ]
    }]
}