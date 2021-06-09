import axios from "axios";

var data = [
  {
    id: "5f40a6baac77a903d8f682c6",
    price: 1.59,
    stock: 13,
    title: "Sabritas Xtra Flamin Hot",
    image: "product-1.jpg",
    discount: 5,
    category: "chips",
  },
  {
    id: "5f40a6ba41d9e56044ced586c",
    price: 1.79,
    stock: 21,
    title: "Sabritas Adobada",
    image: "product-2.jpg",
    discount: 10,
    category: "chips",
  },
  {
    id: "5f40a6baa9e6e2799a1d5fac4",
    price: 1.49,
    stock: 20,
    title: "Sabritas Limon",
    image: "product-3.jpg",
    discount: 0,
    category: "chips",
  },
  {
    id: "5f40a6baf0f068a477921d29",
    price: 1.29,
    stock: 10,
    title: "Sabritas Original",
    image: "product-4.jpg",
    discount: 0,
    category: "chips",
  },
  {
    id: "5f40a866337a3bb00793da52",
    price: 1.89,
    stock: 34,
    title: "Sabritas Horneados Bolitas",
    image: "product-5.jpg",
    discount: 4,
    category: "chips",
  },
  {
    id: "5f40a866ea0a04e6891b7084",
    price: 1.69,
    stock: 14,
    title: "Sabritas Chile Piquin",
    image: "product-6.jpg",
    discount: 0,
    category: "chips",
  },
  {
    id: "5f40a866ea0a04e6891212333",
    price: 1.99,
    stock: 11,
    title: "Sabritas crujitos",
    image: "product-7.jpg",
    discount: 12,
    minimum: 6,
    category: "chips",
  },
  {
    id: "5f40a866ea0a04e68911s1231328",
    price: 1.49,
    stock: 11,
    title: "Fritos chile & limon",
    image: "product-8.jpg",
    discount: 12,
    category: "chips",
  },
  {
    id: "5f40a866ea0a04e68911231328",
    price: 0.99,
    stock: 11,
    title: "Sabritas Sal y Limon",
    image: "product-9.jpg",
    discount: 12,
    category: "peanuts",
  },
  {
    id: "5f40a6baacr77a903d8fki682c6",
    price: 1.19,
    stock: 13,
    title: "Sabritas Japones",
    image: "product-10.jpg",
    discount: 5,
    category: "peanuts",
  },
  {
    id: "5f40a6ba41d9e5044ced586c",
    price: 0.99,
    stock: 21,
    title: "Sabritas Chile y Limon",
    image: "product-11.jpg",
    discount: 10,
    category: "peanuts",
  },
  {
    id: "5f40a6baae6e22fa1d5fac4",
    price: 2.75,
    stock: 20,
    title: "Penafiel",
    image: "product-12.jpg",
    discount: 0,
    category: "beverages",
  },
  {
    id: "5f40a6baf0f068a497921d29",
    price: 2.75,
    stock: 10,
    title: "Penafiel Manzana",
    image: "product-13.jpg",
    discount: 0,
    category: "beverages",
  },
  {
    id: "5fa866337a3bb003da52",
    price: 3.49,
    stock: 34,
    title: "Coca Cola",
    image: "product-14.jpg",
    discount: 4,
    category: "beverages",
  },
  {
    id: "5f40a866ea0a55e6891b7084",
    price: 2.09,
    stock: 14,
    title: "Sangria",
    image: "product-15.jpg",
    discount: 0,
    category: "beverages",
  },
  {
    id: "5480a866ea0a04e6891212333",
    price: 2.25,
    stock: 11,
    title: "Jarito Tamarindo",
    image: "product-16.jpg",
    discount: 12,
    minimum: 6,
    category: "beverages",
  },
  {
    id: "5f40a866ea0a884e68911s12313265",
    price: 0.25,
    stock: 11,
    title: "Hormigas",
    image: "product-17.jpg",
    discount: 12,
    category: "candy",
  },
  {
    id: "5f40a866ea0a04e68911633528",
    price: 0.5,
    stock: 11,
    title: "Rebanaditas",
    image: "product-18.jpg",
    discount: 12,
    category: "candy",
  },
  {
    id: "5640a866ea0a04e68911233528",
    price: 0.75,
    stock: 11,
    title: "Lucas Salsagheti",
    image: "product-19.jpg",
    discount: 12,
    category: "candy",
  },
  {
    id: "5f55a866ea0a04e68911233528",
    price: 0.75,
    stock: 11,
    title: "Pulparindo Tamarindo",
    image: "product-20.jpg",
    discount: 12,
    category: "candy",
  },
];

/**
 * server endpoint and functionality
 * get
 * /api/products => get everyones products
 * /api/products/<yourname> -> get your products
 *
 * post
 * /api/products => save products onto the DB
 *
 * delete
 * /api/products/clear/<yourname> => delete your prods from DB
 */

class ProductService {
  serverUrl = "http://fsdiapi.azurewebsites.net";

  async getCatalog() {
    //connect to a server
    //read the catalog from there
    let response = await axios.get(this.serverUrl + "/api/products/chris");
    return response.data;
    //mock data
  }

  async seedData() {
    //send data from the array on the top to the server

    for (let i = 0; i < data.length; i++) {
      let prod = data[i];
      prod.name = "chris";
      await axios.post(this.serverUrl + "/api/products", prod);
    }
  }
}

export default ProductService;
