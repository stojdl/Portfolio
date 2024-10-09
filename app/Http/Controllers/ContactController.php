<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ContactRequest;
use App\Models\Offer;

class ContactController extends Controller
{
   public function send(ContactRequest $request) {
        $offer = Offer::create([
           'name' => $request['name'],
           'email' => $request['email'],
           'text' => $request['text'],
        ]);
        
        return back();
   }
}
