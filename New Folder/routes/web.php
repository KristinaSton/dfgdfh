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

use Illuminate\Http\Request;

// Route::get('/posts', 'PostsController@index')->name('posts.index');
// Route::get('/posts/details/{id}', 'PostsController@details')->name('posts.details');
// Route::get('/posts/add', 'PostsController@add')->name('posts.add');
// Route::post('/posts/insert', 'PostsController@insert')->name('posts.insert');
// Route::get('/posts/edit/{id}', 'PostsController@edit')->name('posts.edit');
// Route::post('/posts/update/{id}', 'PostsController@update')->name('posts.update');
// Route::get('/posts/delete/{id}', 'PostsController@delete')->name('posts.delete');



Route::get('/', function () {return view('welcome');});
Route::get('/posts', 'PostsController@index');
Route::get('/posts/details/{id}', function () {return view('posts.details');});
Route::get('/posts/add', function () {return view('posts.add');});
Route::post('/posts/insert', 'PostsController@insert')->name('posts.insert');
Route::get('/posts/edit/{id}', function () {return view('posts.edit');});
Route::post('/posts/update/{id}', function () {return view('posts.update');});
Route::get('/posts/delete/{id}', function () {return view('posts.delete');});
