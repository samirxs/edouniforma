<?php namespace Samirxs\Category\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSamirxsCategory extends Migration
{
    public function up()
    {
        Schema::create('samirxs_category_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('parent_id');
            $table->string('title');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('samirxs_category_');
    }
}
