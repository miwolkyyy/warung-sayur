document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "anggur hijau", img: "anggur hijau.jpeg", type: "fruit", price: 55000 },
      { id: 2, name: "anggur", img: "anggur.jpeg", type: "fruit", price: 45000 },
      { id: 3, name: "apel", img: "apel.jpeg", type: "fruit", price: 35000 },
      { id: 4, name: "bawang bombai merah", img: "bawang bombai merah.jpeg", type: "herbs", price: 25000 },
      { id: 5, name: "bawang bombai", img: "bawang bombai.jpeg", type: "herbs", price: 20000 },
      { id: 6, name: "bawang merah", img: "bawang merah.jpeg", type: "herbs", price: 18000 },
      { id: 7, name: "bawang putih", img: "bawang putih.jpeg", type: "herbs", price: 20000 },
      { id: 8, name: "bayam", img: "bayam.jpeg", type: "vegetable", price: 8000 },
      { id: 9, name: "bayam merah", img: "bayam merah.jpeg", type: "vegetable", price: 10000 },
      { id: 10, name: "blueberry", img: "blueberry.jpeg", type: "fruit", price: 20000 },
      { id: 11, name: "brokoli", img: "brokoli.jpeg", type: "vegetable", price: 7000 },
      { id: 12, name: "buncis", img: "buncis.jpeg", type: "vegetable", price: 4000 },
      { id: 13, name: "bunga kol", img: "bunga kol.jpeg", type: "vegetable", price: 6000 },
      { id: 14, name: "cabai hijau besar", img: "cabai hijau besar.jpeg", type: "vegetable", price: 16000 },
      { id: 15, name: "cabai hijau", img: "cabai hijau.jpeg", type: "vegetable", price: 15000 },
      { id: 16, name: "cabai kering", img: "cabai kering.jpeg", type: "vegetable", price: 15000 },
      { id: 17, name: "cambah kedelai", img: "cambah kedelai.jpeg", type: "vegetable", price: 5000 },
      { id: 18, name: "ceri", img: "ceri.jpeg", type: "fruit", price: 40000 },
      { id: 19, name: "daun bawang", img: "daun bawang.jpeg", type: "vegetable", price: 25000 },
      { id: 20, name: "daun ketumbar", img: "daun ketumbar.jpeg", type: "vegetable", price: 25000 },
      { id: 21, name: "durian", img: "durian.jpeg", type: "fruit", price: 65000 },
      { id: 22, name: "jeruk", img: "jeruk.jpeg", type: "fruit", price: 15000 },
      { id: 23, name: "kacang panjang", img: "kacang panjang.jpeg", type: "vegetable", price: 15000 },
      { id: 24, name: "kangkung", img: "kangkung.jpeg", type: "vegetable", price: 15000 },
      { id: 25, name: "kelengkeng", img: "kelengkeng.jpeg", type: "fruit", price: 15000 },
      { id: 26, name: "kentang", img: "kentang.jpeg", type: "vegetable", price: 15000 },
      { id: 27, name: "kol merah", img: "kol merah.jpeg", type: "vegetable", price: 15000 },
      { id: 28, name: "kol ", img: "kol.jpeg", type: "vegetable", price: 15000 },
      { id: 29, name: "kubis ", img: "kubis.jpeg", type: "vegetable", price: 15000 },
      { id: 30, name: "lemon ", img: "lemon.jpeg", type: "fruit", price: 15000 },
      { id: 31, name: "mangga ", img: "mangga.jpeg", type: "fruit", price: 15000 },
      { id: 32, name: "manggis ", img: "manggis.jpeg", type: "fruit", price: 15000 },
      { id: 33, name: "nangka ", img: "nangka.jpeg", type: "fruit", price: 15000 },
      { id: 34, name: "pakcoy ", img: "pak coy.jpeg", type: "vegetable", price: 15000 },
      { id: 35, name: "paprika kuning ", img: "paprika hijau.jpeg", type: "vegetable", price: 15000 },
      { id: 36, name: "paprika merah ", img: "paprika merah.jpeg", type: "vegetable", price: 15000 },
      { id: 37, name: "paprika kuning ", img: "paprika kuning.jpeg", type: "vegetable", price: 15000 },
      { id: 38, name: "pear ", img: "pear.jpeg", type: "fruit", price: 15000 },
      { id: 39, name: "pepaya ", img: "pepaya.jpeg", type: "fruit", price: 15000 },
      { id: 40, name: "pisang ", img: "pisang.jpeg", type: "fruit", price: 15000 },
      { id: 41, name: "salak ", img: "salak.jpeg", type: "fruit", price: 15000 },
      { id: 42, name: "sawi pagoda ", img: "sawi Pagoda.jpeg", type: "vegetable", price: 15000 },
      { id: 43, name: "selada merah ", img: "selada merah.jpeg", type: "vegetable", price: 15000 },
      { id: 44, name: "selada", img: "selada.jpeg", type: "vegetable", price: 15000 },
      { id: 45, name: "Seledri", img: "Seledri.jpeg", type: "vegetable", price: 15000 },
      { id: 46, name: "semangka", img: "semangka.jpeg", type: "fruit", price: 15000 },
      { id: 47, name: "strawberry", img: "strawberry.jpeg", type: "fruit", price: 15000 },
      { id: 48, name: "terong", img: "terong.jpeg", type: "vegetable", price: 15000 },
      { id: 49, name: "tomat merah", img: "tomat.jpeg", type: "vegetable", price: 15000 },
      { id: 50, name: "tomat hijau", img: "tomat hijau.jpeg", type: "vegetable", price: 15000 },
      { id: 51, name: "tomat kuning", img: "tomat kuning.jpeg", type: "vegetable", price: 15000 },
    ],
  })),
    Alpine.store("cart", {
      items: [],
      total: 0,
      quantity: 0,
      add(newItem) {
        const chartitem = this.items.find((item) => item.id === newItem.id);
        if (!chartitem) {
          this.items.push({ ...newItem, quantity: 1, total: newItem.price });
          this.quantity++;
          this.total += newItem.price;
        } else {
          this.items = this.items.map((item) => {
            if (item.id !== newItem.id) {
              return item;
            } else {
              item.quantity++;
              item.total = item.quantity * item.price;
              this.quantity++;
              this.total += item.price;
              return item;
            }
          });
        }
      },
      remove(id) {
        const cartitem = this.items.find((item) => item.id === id);
        if (cartitem.quantity > 1) {
          this.items = this.items.map((item) => {
            if (item.id !== id) {
              return item;
            } else {
              item.quantity--;
              item.total = item.quantity * item.price;
              this.quantity--;
              this.total -= item.price;
              return item;
            }
          });
        } else if (cartitem.quantity === 1) {
          this.items = this.items.filter((item) => item.id !== id);
          this.quantity--;
          this.total = cartitem.price;
        }
      },
    });
});

// converting

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
