<?php namespace Samirxs\Slider\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSamirxsSlider extends Migration
{
    public function up()
    {
        Schema::create('samirxs_slider_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('title');
            $table->text('description');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('samirxs_slider_');
    }
}
