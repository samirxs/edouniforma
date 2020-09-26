<?php

use Samirxs\Slider\Models\Slider;
use Illuminate\Http\Request;


Route::get('api/sliders', function () {
  $slider = Slider::with(['img'])->get();

  return $slider;
});
