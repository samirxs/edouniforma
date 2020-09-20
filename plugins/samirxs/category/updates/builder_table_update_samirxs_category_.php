<?php namespace Samirxs\Category\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSamirxsCategory extends Migration
{
    public function up()
    {
        Schema::table('samirxs_category_', function($table)
        {
            $table->renameColumn('id', 'category_id');
        });
    }
    
    public function down()
    {
        Schema::table('samirxs_category_', function($table)
        {
            $table->renameColumn('category_id', 'id');
        });
    }
}
