<?php namespace Samirxs\Category\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSamirxsCategory4 extends Migration
{
    public function up()
    {
        Schema::table('samirxs_category_', function($table)
        {
            $table->text('description')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('samirxs_category_', function($table)
        {
            $table->dropColumn('description');
        });
    }
}
