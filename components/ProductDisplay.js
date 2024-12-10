app.component('product-display', {
    props: {
  premium :{
    type: Boolean,
    required: true
  }
    },
template:  
/*html*/
`<div class="product-display">
<div class="product-container">
 <div class="product-image"> 
 <img :src="image" alt="socks" 
 :class= "{'out-of-stock-img':!(inStock)}">
 
<!-- <a :href="url">click here</a> -->
<!-- <img v-bind:src="image" alt="socks"> -->
 </div>
 <div class="product-info"> 
    <h1>{{brand  + ' ' + product}} <span v-if ="onSale"> : On Sale</span></h1>
    
    <ul>
        <li v-for = "detail in details"> {{ detail }} </li>
        
    </ul>
    <ul>
        <li v-for = "size in sizes"> {{size}} </li>
    </ul>
    <div
        v-for = "(varient, index) in varients" 
        :key="varient.id" 
        @mouseover="updateVarient(index)" 
        class="color-circle "
        :style="{backgroundColor:varient.color}" > 
    </div>
    </ul>
    <!-- <p v-show = "onSale" >On Sale</p> -->
    <p v-if = "inStock">In Stock</p>
    <p>Shipping: {{ shipping  }}</p>
    <p v-else>All most sold out !</p>
    <button class="button"
    :class="{'disabledButton': !(inStock)}"
    :disabled = '!(inStock)'
    @click="addToCart">Add To Cart</button>
    <!-- <p v-else>Out Of Stock</p> -->
</div>
</div>
</div>`,

data(){
    return{
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
},
shipping(){
    if(this.premium){
        return 'Free Delivery'
    }
    return 2.99
}
}
})