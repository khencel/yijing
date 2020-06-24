<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hexagram extends Model
{
    protected $table = "hexagram";
    protected $guarded = [];

    public function dailyHex(){
        return $this->hasOne(DailyHex::class);
    }
}
