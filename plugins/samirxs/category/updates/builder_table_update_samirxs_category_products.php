<?php namespace Samirxs\Category\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSamirxsCategoryProducts extends Migration
{
    public function up()
    {
        Schema::table('samirxs_category_products', function($table)
        {
            $table->dropColumn('img_id');
        });
    }
    
    public function down()
    {
        Schema::table('samirxs_category_products', function($table)
        {
            $table->integer('img_id');
        });
    }
}
