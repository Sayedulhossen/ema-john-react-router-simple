// called CRUD operation
// create
// read
// update
// delete

// unique ------key--localStorage e save kore rakhi tahole ei save kora key use kore amra shei product guloke filter metod/ find method use kore khuje ber korte pari..

// adding product to localStorage for
const getDb = () => localStorage.getItem("shopping_cart");

const addToDB = (id)=> {
    const exist =getDb();
    const shopping_cart = {};
    if(!exist){
        shopping_cart[id] = 1;
    } else{
        const shopping_cart = JSON.parse(exist)
            if(shopping_cart[id]){
                const newCount = shopping_cart[id] +1;
                shopping_cart[id] = newCount;
            }
            else{
                shopping_cart[id] = 1;
            }
            updateDb(shopping_cart);
    }

}
//localStorage e merged data----ager data+ notun data update korbo
const updateDb = (cart) =>{
    localStorage.setItem("shopping_cart", cart);
}