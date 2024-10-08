<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        app()->setLocale(session('localization', config('app.locale')));

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            // 'inertiaVersion' => Inertia::version(fn ()=> $version),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'mysqlVersion' => DB::scalar('select version()'),
            'navigation' => __('navigation'),
        ];
    }
}
