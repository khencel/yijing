<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\DiaryOracle;

class PrintController extends Controller
{
    public function printOracle($id){
        $diary = DiaryOracle::with('derivation.oracle')->find($id);
        $user = \Auth::user();

        return response()->json([
            'diary' =>  $diary,
            'user'  =>  $user
        ]);
    }
}
