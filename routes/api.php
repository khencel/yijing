<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->group(function(){
    // user
    Route::get('user/cast','API\HexagramController@castHex');
    Route::get('user/subscribe','API\HexagramController@subscribe');
    Route::get('user/trigram','API\TrigramController@castTrigram');
    Route::post('user/transform/name','API\HexagramController@transformName');

    // admin/user
    Route::get('admin/user','API\ADMIN\UserController@index');
    Route::post('admin/store','API\ADMIN\UserController@store');
    Route::get('admin/show/{id}','API\ADMIN\UserController@show');
    Route::put('admin/update/{id}','API\ADMIN\UserController@update');
    Route::get('admin/delete/{id}','API\ADMIN\UserController@destroy');
    Route::get('admin/role','API\ADMIN\UserController@role');

    Route::post('admin/user/type','API\ADMIN\UserController@userType');


    // admin/hexagram
    Route::get('hex/index','API\HexagramController@index');
    Route::get('hex/show/{id}','API\HexagramController@show');
    Route::put('hex/update/{id}','API\HexagramController@update');

    // admin/trigram
    Route::get('tri/index','API\TrigramController@index');
    Route::get('tri/show/{id}','API\TrigramController@show');
    Route::put('tri/update/{id}','API\TrigramController@update');

    // admin/nature
    Route::get('nature/index','API\NatureController@index');
    Route::get('properties/property','API\NatureController@property');

    // Users
    Route::get('user/profile','API\UserController@index');
    Route::put('user/profile/update/{id}','API\UserController@update');
    Route::post('user/profile/changePassword','API\UserController@changePassword');
    Route::get('user/consultant','API\UserController@consultant');
    Route::post('user/bookNow','API\UserController@bookNow');
    Route::post('user/check','API\UserController@check');
    Route::get('user/schedule','API\UserController@schedule');
    Route::get('user/attribute','API\UserController@attribute');
    Route::get('user/payment','API\UserController@payment');

    Route::get('consultant/journal/{id}','API\JournalController@customerJournal');
    // Journal
    Route::resources([
        'journal' => 'API\JournalController',
        'announcement' => 'API\AnnouncementController'
    ]);
   
});

Route::post('user/registration','API\RegistrationController@store');


// Route::get('hex/index','API\HexagramController@index');

Route::post('user/hexagram','API\HexagramController@dailyHex');

