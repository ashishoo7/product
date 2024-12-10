const app =  Vue.createApp({
    data(){
        return{
            cart:[],
            premium:false,
            description:true
        }
    },
  methods:{
    updateCart(id){
      this.cart +=1;
    },
    removeCart(id){
      this.cart -=1;
    }
   }
    })