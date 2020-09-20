<?php
use Samirxs\Category\Models\Category;
use Illuminate\Http\Request;


Route::get('api/categories', function(){
  $categories = Category::all();

  return $categories;
});

Route::get('api/photos', function(){
  $categories = Category::all();
  $yourFile = \System\Models\File::find($categories[0]['id']);

  return $yourFile;
});
