<?php

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('layouts/master');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('user/users',function(){
    return view('user-management/user/index');
});

Route::get('/hexagram', function(){
    return view('hex/index');
});

Route::get('/trigram', function(){
    return view('tri/index');
});

Route::get('/profile' , function(){
    if(Gate::denies('manage-users')){
        return view('user-profile');
    };   
    return view('profile');
});

Route::get('/book', function(){
    return view('book');
});


Route::get('/hex', function(){
    return view('hex/hexagram');
});

Route::get('/tri', function(){
    return view('tri/trigram');
});


Route::get('/hex/{id}', 'ConsultantController@hex');

Route::get('/consultan/{id}','ConsultantController@consultants');

Route::get('email/verify/{id}','EmailVerificationController@verify');







Route::get('/db-seed', function() {
    $output = [];
    \Artisan::call('db:seed', $output);
    dd($output);
});

Route::get('/schedule-run', function() {
    $output = [];
    \Artisan::call('schedule:run', $output);
    dd($output);
});

Route::get('/upload-hex', function() {
    $output = [];
    \Artisan::call('upload:hex', $output);
    dd($output);
});

Route::get('/migrate-fresh', function() {
    $output = [];
    \Artisan::call('migrate:fresh', $output);
    dd($output);
});

Route::get('/migrate', function() {
    $output = [];
    \Artisan::call('migrate', $output);
    dd($output);
});

Route::get('/config-clear', function() {
    $output = [];
    \Artisan::call('config:clear', $output);
    dd($output);
});

Route::get('/cache-clear', function() {
    $output = [];
    \Artisan::call('cache:clear', $output);
    dd($output);
});








