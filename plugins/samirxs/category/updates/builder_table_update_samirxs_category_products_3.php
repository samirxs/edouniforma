<?php namespace Samirxs\Category\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSamirxsCategoryProducts3 extends Migration
{
    public function up()
    {
        Schema::rename('samirxs_category_product', 'samirxs_category_products');
    }
    
    public function down()
    {
        Schema::rename('samirxs_category_products', 'samirxs_category_product');
    }
}
