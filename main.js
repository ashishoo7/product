const app =  Vue.createApp({
    data(){
        return{
            cart:0,
            product: 'Boots',
            image: './assets/images/socks_green.jpg',
            // url: 'https://github.com/ashishoo7/product',
            // inStock:false
            inStock: true,
            onSale: false,
            details: ['50% Cotton','20% Wool', '30% Polyester'],
            sizes: ['XS: EUR','S USA', 'M INA', 'L PAK', 'XL UK'],
            varients:[
                {id:224 , color:'blue', image: './assets/images/socks_blue.jpg'},
                {id:225, color:'green', image: './assets/images/socks_green.jpg '}, 
            ]
        }
    },
  methods:{

    addToCart(){
        this.cart +=1;
    },
    updateImage(varientImage){
      this.image=varientImage;
    }
  }
    })