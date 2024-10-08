<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DownloadController;
use App\Http\Controllers\LocalizationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\Localization;
use App\Http\Resources\OfferResource;
use App\Models\Offer;

    Route::get('/', function () {
        return Inertia::render('Welcome', [
            "welcome" => __('welcome'),
        ]);
    })->name('welcome');

    Route::group(['prefix' => '/projekty'], function () {
        Route::get('/', function () {
            return Inertia::render('Projects/index', [
                "projects" => __('projects'),
            ]);
        })->name('projects');
        Route::get('/internal_paradigma', function () {
            return Inertia::render('Projects/InternalParadigma');
        })->name('projects.internal_paradigma');
    });
    
    Route::group(['prefix' => '/kontakt'], function () {
        Route::get('/', function () {
            return Inertia::render('Contact', [
                'contact' => __('contact'),
            ]);
        })->name('contact');
        Route::post('/send', [ContactController::class, 'send'])->name('send');
    });

    Route::group(['prefix' => '/ke-stazeni'], function () {
        Route::get('/', function () {
            return Inertia::render('Download', [
                'download' => __('download'),
            ]);
        })->name('download');
        Route::get('/CV', [DownloadController::class, 'resume'])->name("download.resume");
    });


    Route::group(['prefix' => '/app', 'middleware' => 'auth'], function () {
        Route::get('/', function () {
            return redirect(route('orders'));
        });

        Route::get('/nabidky', function () {
            return Inertia::render('Offers', [
                'offers' => OfferResource::collection(Offer::all()),
            ]);
        })->name('offers');

        Route::get('/pristupove-klice', function () {
            return Inertia::render('AccessKeys');
        })->name('keys');
    });
    
    
    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

Route::post('/change_language', [LocalizationController::class, 'change'])->name('lang.change');


require __DIR__.'/auth.php';
