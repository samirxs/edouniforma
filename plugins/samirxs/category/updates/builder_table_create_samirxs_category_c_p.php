<?php namespace Samirxs\Category\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSamirxsCategoryCP extends Migration
{
    public function up()
    {
        Schema::create('samirxs_category_c_p', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('category_id');
            $table->integer('product_id');
            $table->primary(['category_id','product_id']);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('samirxs_category_c_p');
    }
}
