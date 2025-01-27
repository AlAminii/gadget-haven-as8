import toast from "react-hot-toast"

const getAllitems = ()=>{
    const all = localStorage.getItem('items')
    if(all){
        const items = JSON.parse(all)
        return items
    }else{
        return []
    }
}

const getAllwishlist = ()=>{
    const all = localStorage.getItem('wishlists')
    if(all){
        const items = JSON.parse(all)
        return items
    }else{
        return []
    }
}

const addtoCart = item =>{

const items = getAllitems()
const isExixt = items.find(gadget=> gadget.product_id === item.product_id)
if(isExixt) return toast.error('already exixt!');
items.push(item)
localStorage.setItem('items', JSON.stringify(items))
toast.success('succefull added')
}

// wish list 
const addtoWishlist = item =>{
    const items = getAllwishlist()
    const isExixt = items.find(gadget=> gadget.product_id === item.product_id)
    if(isExixt) return toast.error('already exixt!');
    items.push(item)

    localStorage.setItem('wishlists', JSON.stringify(items))
    toast.success('succefull added')
}

export {addtoCart, getAllitems, addtoWishlist, getAllwishlist}