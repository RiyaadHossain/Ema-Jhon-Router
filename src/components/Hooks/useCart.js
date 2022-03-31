import { useEffect, useState } from "react"
import { getStoredCart } from "../../utilities/fakedb"

const useCart = (products) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = getStoredCart()
        const newCart = []
        for (const id in storedCart) {
            const previousProduct = products.find(product => product.id === id)
            if (previousProduct) {
                previousProduct.quantity = storedCart[id]
                newCart.push(previousProduct)
            }
        }
        setCart(newCart)
    }, [products])
    return [cart, setCart]
}

export default useCart