const products=[
    { id:'1' ,name:'impresora' ,price:500 ,stock:10 ,category:'impresora' ,foto:'https://http2.mlstatic.com/D_NQ_NP_850549-MLA48196101439_112021-O.jpg'},
    { id:'2' ,name:'auricular' ,price:800 ,stock:50 ,category:'auriculares' ,foto:'https://www.sony.com.ar/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF'},
    { id:'3' ,name:'monitor' ,price:600 ,stock:15 ,category:'monitores' ,foto:'https://http2.mlstatic.com/D_NQ_NP_779978-MLA32191048467_092019-O.jpg'},
    {id:'4' ,name:'teclado' ,price:200 ,stock:20 ,category:'teclados' ,foto:'https://ae01.alicdn.com/kf/Hf69d9eff730146b8aaa7b8e5db72c5d0B/Womier-Teclado-mec-nico-de-87-teclas-K87-80-87-TKL-carcasa-PCB-interruptor-intercambiable-en.jpg_Q90.jpg_.webp'},
    {id:'5' ,name:'mouse' ,price:400 ,stock:30 ,category:'mouse' ,foto:'https://s3-sa-east-1.amazonaws.com/saasargentina/oaPmQNJPQeMZynN9AOk5/imagen'}
]

export const gFetch =()=>{
	
	return new Promise(( res, rej )=>{ 
		setTimeout(()=>{
            res(products)
			//rej('404 not found')
        }, 3000)	
	})
} 

