<?php

use Samirxs\Slider\Models\Slider;
use Illuminate\Http\Request;

Route::get('api/sliders', function(){
  $slider = Slider::all();

  return $slider;
});
