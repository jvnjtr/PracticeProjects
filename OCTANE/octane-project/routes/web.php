<?php

use App\Http\Controllers\UserRegistration;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/api/userRegistration',[UserRegistration::class,'index']);
Route::post('/api/login',[AuthController::class,'login']);
Route::middleware(['jwt.auth'])->group(function () {

    Route::get('/api/profile', [AuthController::class, 'profile']);
    Route::get('/api/dashboard', [AuthController::class, 'dashboard']);
    
    // add all protected APIs here
});