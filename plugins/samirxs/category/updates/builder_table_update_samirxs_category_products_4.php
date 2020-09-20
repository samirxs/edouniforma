<?php namespace Samirxs\Category\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSamirxsCategoryProducts4 extends Migration
{
    public function up()
    {
        Schema::table('samirxs_category_products', function($table)
        {
            $table->integer('category_id');
        });
    }
    
    public function down()
    {
        Schema::table('samirxs_category_products', function($table)
        {
            $table->dropColumn('category_id');
        });
    }
}
