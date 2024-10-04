<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ContactRequest;

class ContactController extends Controller
{
   public function send(ContactRequest $request) {
        dd($request['content']);
        return redirect(route('contact'));
   }
}
