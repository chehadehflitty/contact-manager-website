<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;


Route::get('/getContacts', [ContactController::class, "getAll"]);
Route::post('/putContact', [ContactController::class, "store"]);
Route::get('/showContact/{id}', [ContactController::class, "show"]);
Route::post('/updateContact/{id}', [ContactController::class, "update"]);
Route::delete('/deleteContact/{id}', [ContactController::class, "delete"]);
