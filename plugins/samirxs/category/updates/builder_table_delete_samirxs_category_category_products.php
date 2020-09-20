<?php namespace Samirxs\Category\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableDeleteSamirxsCategoryCategoryProducts extends Migration
{
    public function up()
    {
        Schema::dropIfExists('samirxs_category_category_products');
    }
    
    public function down()
    {
        Schema::create('samirxs_category_category_products', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('category_id');
            $table->integer('product_id');
        });
    }
}
