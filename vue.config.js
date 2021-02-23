module.export={
    devServer:{
        proxy:{
            '/api':{
                
                 target:'http://localhost.charlesproxy.com:8080',
                //  target:'http://localhost:8080/data/cityList.json',

                changeOrigin:true
            }
        }
    }
}   