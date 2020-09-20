<?php namespace Samirxs\Category\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSamirxsCategoryCategProd3 extends Migration
{
    public function up()
    {
        Schema::table('samirxs_category_categ_prod', function($table)
        {
            $table->dropPrimary(['lol_id','product_id']);
            $table->renameColumn('lol_id', 'category_id');
            $table->primary(['category_id','product_id']);
        });
    }
    
    public function down()
    {
        Schema::table('samirxs_category_categ_prod', function($table)
        {
            $table->dropPrimary(['category_id','product_id']);
            $table->renameColumn('category_id', 'lol_id');
            $table->primary(['lol_id','product_id']);
        });
    }
}
