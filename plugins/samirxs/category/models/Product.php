<?php namespace Samirxs\Category\Models;

use Model;

/**
 * Model
 */
class Product extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;


    /**
     * @var string The database table used by the model.
     */
    public $table = 'samirxs_category_products';

    /**
     * @var array Validation rules
     */
    public $rules = [
        
    ];

    /**
     * Relations
    */

    public $belongsToMany= [
        'category' => [
            'Samirxs\Category\Models\Category',
            'table' => 'samirxs_category_category_products',
            'order' => 'id',
        ]
    ];

    public $attachMany = [
        'img' => 'System\Models\File'
    ];

}
