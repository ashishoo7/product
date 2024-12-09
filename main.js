const app =  Vue.createApp({
    data(){
        return{
            cart:0,
            product: 'IPD',
            brand: 'Vue Mastery For',
            selectedVarient: 0,
            // image: './assets/images/socks_green.jpg',
            // url: 'https://github.com/ashishoo7/product',
            // inStock:false
            // inStock: true,
            onSale: true,
            
            details: ['50% Cotton','20% Wool', '30% Polyester'],
            sizes: ['XS: EUR','S USA', 'M INA', 'L PAK', 'XL UK'],
            varients:[
                {id:224 , color:'blue', image: './assets/images/socks_blue.jpg', quantity:50},
                {id:225, color:'green', image: './assets/images/socks_green.jpg ', quantity:0}, 
            ]
        }
    },
  methods:{

    addToCart(){
        this.cart +=1;
    },
    updateVarient(index){
      this.selectedVarient=index 
    }, 
  },
  computed:{
    title(){
      return this.brand + '' + this.product + '' + this.onSale
    },
    image(){
      return this.varients[this.selectedVarient].image
    },
    inStock(){
      return this.varients[this.selectedVarient].quantity
    }
  }
    })