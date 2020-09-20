<?php
use Samirxs\Category\Models\Category;
use Illuminate\Http\Request;


Route::get('api/categories', function(){
  $categories = Category::all();

  return $categories;
});
