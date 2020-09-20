<?php namespace Samirxs\Slider\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class Slide extends Controller
{
    public $implement = [        'Backend\Behaviors\ListController',        'Backend\Behaviors\FormController'    ];
    
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Samirxs.Slider', 'main-menu-item');
    }
}
