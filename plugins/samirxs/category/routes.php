<?php

use Samirxs\Category\Models\Category;
use Samirxs\Category\Models\Product;
use Illuminate\Http\Request;


Route::get('api/categories', function () {
  $categories = Category::with(['c_img', 'product'])->get();

  return $categories;
});


Route::post('api/products', function (Request $req) {
  $data = $req->input();
  $id = $data['id'];
  $products = Product::whereHas('category', function ($query) use ($id) {
    $query->where('id', '=', $id);
  })->with(['p_img'])->get();

  return $products;
});


Route::get('api/product/{id}', function ($id) {
  $product = Product::where('id', '=', $id)->with(['p_img'])->get();

  return $product;
});
