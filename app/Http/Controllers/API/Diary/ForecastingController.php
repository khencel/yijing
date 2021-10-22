<?php

namespace App\Http\Controllers\API\Diary;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Hexagram;

class ForecastingController extends Controller
{
    public function getHex($code){
        return Hexagram::where('code',$code)->first();
    }
}
