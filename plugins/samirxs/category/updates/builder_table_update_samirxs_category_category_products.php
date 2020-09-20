<?php namespace Samirxs\Category\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSamirxsCategoryCategoryProducts extends Migration
{
    public function up()
    {
        Schema::rename('samirxs_category_categ_prod', 'samirxs_category_category_products');
    }
    
    public function down()
    {
        Schema::rename('samirxs_category_category_products', 'samirxs_category_categ_prod');
    }
}
