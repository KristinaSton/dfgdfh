<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostsController;
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




Route::get('/', [PostsController::class,'index']);
Route::get('/posts/add', [PostsController::class,'add']);
Route::post('/posts/insert', [PostsController::class,'insert'])->name('posts.insert');
Route::get('/posts/edit/{id}', [PostsController::class,'edit']);
Route::post('/posts/update/{id}', [PostsController::class,'update'])->name('posts.update');
Route::get('/posts/delete/{id}', [PostsController::class,'delete']);

