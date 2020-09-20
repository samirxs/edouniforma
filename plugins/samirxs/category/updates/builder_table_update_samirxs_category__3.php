<?php namespace Samirxs\Category\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSamirxsCategory3 extends Migration
{
    public function up()
    {
        Schema::table('samirxs_category_', function($table)
        {
            $table->boolean('product_yes');
        });
    }
    
    public function down()
    {
        Schema::table('samirxs_category_', function($table)
        {
            $table->dropColumn('product_yes');
        });
    }
}
