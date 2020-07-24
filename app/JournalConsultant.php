<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class JournalConsultant extends Model
{
    protected $guarded = [];

    public function hex_transform(){
        return $this->hasMany(Hexagram::class, 'id','transform_hex_id');
    }

    public function hex_original(){
        return $this->hasMany(Hexagram::class, 'id','original_hex_id');
    }
}
