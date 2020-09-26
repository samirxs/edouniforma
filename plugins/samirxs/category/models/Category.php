<?php namespace Samirxs\Category\Models;

use Model;

/**
 * Model
 */
class Category extends Model
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
    public $table = 'samirxs_category_';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $belongsToMany= [
        'product' => [
            'Samirxs\Category\Models\Product',
            'table' => 'samirxs_category_category_products',
            'order' => 'title',
        ]
    ];


    public $attachOne = [
        'c_img' => 'System\Models\File'
    ];
}
