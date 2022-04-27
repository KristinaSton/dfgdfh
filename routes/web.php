<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IncomeController;
use App\Http\Controllers\ExpenseController;
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
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/table', [App\Http\Controllers\TableController::class, 'index'])->name('table');

Route::post('/get/each/income/details', [IncomeController::class, 'getIncomeDetails'])->name('income.details');
Route::get('/get/income/list', [IncomeController::class, 'getIncomeList'])->name('income.list');
Route::post('/update/income/data', [IncomeController::class, 'updateIncomeData']);
Route::delete('/delete/income/data/{income}', [IncomeController::class, 'destroy']);
Route::post('/store/income/data', [IncomeController::class, 'store']);

Route::post('/get/each/expense/details', [ExpenseController::class, 'getExpenseDetails'])->name('expense.details');
Route::get('/get/expense/list', [ExpenseController::class, 'getExpenseList'])->name('expense.list');
Route::post('/update/expense/data', [ExpenseController::class, 'updateExpenseData']);
Route::delete('/delete/expense/data/{expense}', [ExpenseController::class, 'destroy']);
Route::post('/store/expense/data', [ExpenseController::class, 'store']);