<?php


use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//user
Route::post('/AddUser', [UserController::class, 'AddUser']);
Route::get('/DeleteUser/{id}', [UserController::class, 'DeleteUser']);
Route::get('/SelectUser', [UserController::class, 'SelectUser']);
Route::post('/UpdateUser', [UserController::class, 'UpdateUser']);
//category
Route::post('/AddCategory', [CategoryController::class, 'AddCategory']);
Route::get('/DeleteCategory/{id}', [CategoryController::class, 'DeleteCategory']);
Route::get('/SelectCategory', [CategoryController::class, 'SelectCategory']);
Route::post('/UpdateCategoryWithImage', [CategoryController::class, 'UpdateCategoryWithImage']);
Route::post('/UpdateCategoryWithoutImage', [CategoryController::class, 'UpdateCategoryWithoutImage']);
//product
Route::post('/AddProduct', [ProductController::class, 'AddProduct']);
Route::get('/DeleteProduct/{id}', [ProductController::class, 'DeleteProduct']);
Route::get('/SelectProduct', [ProductController::class, 'SelectProduct']);
Route::get('/SelectProductByCategory/{Category}', [ProductController::class, 'SelectProductByCategory']);
Route::post('/UpdateProductWithImage', [ProductController::class, 'UpdateProductWithImage']);
Route::post('/UpdateProductWithoutImage', [ProductController::class, 'UpdateProductWithoutImage']);
//Dashboard
Route::get('/CountProduct', [DashboardController::class, 'CountProduct']);
Route::get('/CountCategory', [DashboardController::class, 'CountCategory']);
Route::get('/CountTransaction', [DashboardController::class, 'CountTransaction']);
Route::get('/CountTotalIncome', [DashboardController::class, 'CountTotalIncome']);
// Cart
Route::post('/CartAdd', [CartController::class, 'CartAdd']);
Route::get('/CartItemPlus/{id}/{quantity}/{price}', [CartController::class, 'CartItemPlus']);
Route::get('/CartItemMinus/{id}/{quantity}/{price}', [CartController::class, 'CartItemMinus']);
Route::get('/RemoveCartList/{id}', [CartController::class, 'RemoveCartList']);
Route::get('/CartList', [CartController::class, 'CartList']);
// Transaction
Route::get('/CartSell/{invoice}', [TransactionController::class, 'CartSell']);
Route::get('/TransactionList', [TransactionController::class, 'TransactionList']);
Route::get('/RecentTransactionList', [TransactionController::class, 'RecentTransactionList']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

















//
//use App\Http\Controllers\CartController;
//use App\Http\Controllers\CategoryController;
//use App\Http\Controllers\DashboardController;
//use App\Http\Controllers\ProductController;
//use App\Http\Controllers\ReportController;
//use App\Http\Controllers\TransactionController;
//use App\Http\Controllers\UserController;
//use Illuminate\Http\Request;
//use Illuminate\Support\Facades\Route;
//
//
////user
//Route::post('/AddUser',[UserController::class,'AddUser']);
//Route::get('/DeleteUser/{id}',[UserController::class,'DeleteUser']);
//Route::get('/SelectUser',[UserController::class,'SelectUser']);
//Route::post('/UpdateUser',[UserController::class,'UpdateUser']);
////category
//Route::post('/AddCategory',[CategoryController::class,'AddCategory']);
//Route::get('/DeleteCategory/{id}',[CategoryController::class,'DeleteCategory']);
//Route::get('/SelectCategory',[CategoryController::class,'SelectCategory']);
//Route::post('/UpdateCategoryWithImage',[CategoryController::class,'UpdateCategoryWithImage']);
//Route::post('/UpdateCategoryWithoutImage',[CategoryController::class,'UpdateCategoryWithoutImage']);
////product
//Route::post('/AddProduct',[ProductController::class,'AddProduct']);
//Route::get('/DeleteProduct/{id}',[ProductController::class,'DeleteProduct']);
//Route::get('/SelectProduct',[ProductController::class,'SelectProduct']);
//Route::get('/SelectProductByCategory/{Category}',[ProductController::class,'SelectProductByCategory']);
//Route::post('/UpdateProductWithImage',[ProductController::class,'UpdateProductWithImage']);
//Route::post('/UpdateProductWithoutImage',[ProductController::class,'UpdateProductWithoutImage']);
////Dashboard
//Route::get('/CountProduct',[DashboardController::class,'CountProduct']);
//Route::get('/CountCategory',[DashboardController::class,'CountCategory']);
//Route::get('/CountTransaction',[DashboardController::class,'CountTransaction']);
//Route::get('/CountTotalIncome',[DashboardController::class,'CountTotalIncome']);
//// Cart
//Route::post('/CartAdd',[CartController::class,'CartAdd']);
//Route::get('/CartItemPlus/{id}/{quantity}/{price}',[CartController::class,'CartItemPlus']);
//Route::get('/CartItemMinus/{id}/{quantity}/{price}',[CartController::class,'CartItemMinus']);
//Route::get('/RemoveCartList/{id}',[CartController::class,'RemoveCartList']);
//Route::get('/CartList',[CartController::class,'CartList']);
//// Transaction
//Route::get('/CartSell/{invoice}',[TransactionController::class,'CartSell']);
//Route::get('/TransactionList',[TransactionController::class,'TransactionList']);
//Route::get('/RecentTransactionList',[TransactionController::class,'RecentTransactionList']);
//
//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
