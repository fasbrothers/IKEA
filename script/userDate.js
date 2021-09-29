import { getLocalStorage, setLocalStorage } from './storage.js';

const userData = {
    wishListData: getLocalStorage('wishList'),
    get wishList() {
        return this.wishListData;
    },
    set wishList(id) {
        if (this.wishListData.includes(id)) {
            const index = this.wishListData.indexOf(id);
            this.wishListData.splice(index, 1);
        } else {
            this.wishListData.push(id)
        }
        setLocalStorage('wishList', this.wishList)
    },
    cartListData: getLocalStorage('cardList'),

    get cartList() {
        return this.cartListData;
    },

    set cartList(id) {
        let obj = this.cartList.find(item => item.id === id);
        if (obj) {
            obj.count++
        } else {
            obj = {
                id,
                count: 1,
            };
            this.cartListData.push(obj);
        }
        setLocalStorage('cardList', this.cartList)
    },
    set changeCountCartList(itemCart) {
        let obj = this.cartList.find(item => item.id === itemCart.id);
        obj.count = itemCart.count;

        setLocalStorage('cardList', this.cartList)
    },
    set deleteItemCart(idd) {
        let index = -1;
        this.cartList.forEach((item, i) => {
            if (item.id === idd) {
                index = i;
            }
        });
        this.cartList.splice(index, 1);
        setLocalStorage('cardList', this.cartList)

    }
};

export default userData;
