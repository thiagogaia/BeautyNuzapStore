# BeautyNuzapStore - New Store for Nuzap

### About the project

Beauty store for init a simple e-commerce

<div style="width:100%;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;">
  <img src="./public/img/print-home-desktop.png" width="65%" height="auto" />
  <img src="./public/img/print-home-mobile.png" width="30%" height="auto" />
</div>

## Instructions:

1. Downloading dependencies

```bash
npm install or npm i
```

2. Then create a **.env** file, copying the format of the **.env.example** file:

```
cp .env.example .env
```

3. Running the project

```bash
npm run dev
```

Open `http://localhost:5173/<store-name>` to view it in the browser.

example [http://localhost:5173/joelik](http://localhost:5173/joelik)

To stop execution press `Ctrl + c`

# Requests

The application's base URL:
https://nuzap.com.br/

The first request made is to search for data from the desired store, for this we use the endpoint

- `/store-api/<store-name>`

then we set up the home page using 3 other requests, these that share a common part of the url

COMMON_URL: `/products?_url=<store-name>&_page=<desired-page>&_limit=<results-per-page>`

we will use `COMMON_URL` to represent this part of the url to make the document easier to read

### Endpoints

| Method | Route                                   | Description                          |
| ------ | --------------------------------------- | ------------------------------------ |
| GET    | COMMON_URL                              | list of products                     |
| GET    | COMMON_URL`&_product_price=promo`       | filter and list products on sale     |
| GET    | COMMON_URL`&_product_type=release`      | filter and list products in launch   |
| GET    | COMMON_URL`&_category_id=<gategory-id>` | filter and list products by category |
| GET    | COMMON_URL`&_name_like=<product-name>`  | filter and list products by name     |

Note: all parameters connected by `&` can be concatenated allowing a more precise search, for example:

- COMMON_URL`&_category_id=<gategory-id>&_name_like=<product-name>`

will allow you to search for products with the desired name in a specific category.

# Pages

## 1. **Home Page**

On this page we use 3 requests

1. list of products
2. filter and list products on sale
3. filter and list products in launch

The endpoints used on this page can be seen in the table above - [ Return to Endpoints ](#endpoints)

## 2. **Product listing page**

This page lists the products that can be filtered by the category contained in the header, using the search field or the filters available on the page itself. The available filters are:

- filter and list products by category
- filter and list products by name

These endpoints can be seen in the table above - [ Return to Endpoints ](#endpoints)

other options that can be added to the URL to further specify the search are

- filter and list products by price
- filter and list products by order by
- filter and list products variations
- filter and list products variation items

| Query                         | Description                              |
| ----------------------------- | ---------------------------------------- |
| `&_maxprice=<value>`          | filter and list products by price        |
| `&_variations=<variation-id>` | filter and list products variations      |
| `&_variation_items=<item-id>` | filter and list products variation items |
| `&_order_by=<order-type>`     | filter and list products by order by     |

filtering and listing product variations and variation items allows you to receive a list of ids in addition to just one id, examples of values accepted:

- `&_variations=123`
- `&_variations=123,654,789,753,195`

The accepted ordering types for filtering using `&_order_by` are currently:

| Order type | Description                          |
| ---------- | ------------------------------------ |
| name_asc   | ordered from A to Z                  |
| price_asc  | ordered from lowest price to highest |
| price_desc | ordered from highest price to lowest |

If `&_order_by` is not specified, products will be filtered from newest to oldest

Note: remembering that parameters can be connected by `&` allowing a more precise search, for example:

- COMMON_URL`&_variations=123,654&_order_by=price_asc&_maxprice=150`

This will bring me the products from the two categories entered, ordered from lowest to highest price, with a maximum price of 150.

## 3. **Product page**

This page differs from the others because it does not share the `COMMON_URL`, the URL used in the request is:

- `/products/<nome-do-produto>?_store=<store-name>`

which is used to search for data on a specific product from a specific store.
