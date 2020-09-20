<?php namespace Samirxs\Category\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSamirxsCategoryCategProd extends Migration
{
    public function up()
    {
        Schema::rename('samirxs_category_c_p', 'samirxs_category_categ_prod');
    }
    
    public function down()
    {
        Schema::rename('samirxs_category_categ_prod', 'samirxs_category_c_p');
    }
}
