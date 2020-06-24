<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Hexagram;

class ConsultantController extends Controller
{
    public function consultants($id){
        $consultant = User::where('api_token',$id)->first();
        return view('consultant',compact('consultant'));
    }

    public function hex($id){
        $hex = Hexagram::find($id);
        return view('hex/hexInfo',compact('hex'));
    }
}
