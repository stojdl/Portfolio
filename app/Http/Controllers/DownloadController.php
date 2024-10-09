<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DownloadController extends Controller
{
    public function resume() {
        $path = public_path('downloads/CV-stojdl.pdf');
        //  dd(url('downloads/CV-stojdl.pdf'));
        if (!file_exists($path)) {
            abort(404); // Pokud soubor neexistuje, vrátí 404
        }
        return response()->download($path);
    }
}
