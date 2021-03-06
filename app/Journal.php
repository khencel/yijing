<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Journal extends Model
{
    protected $table = 'journals';
    protected $guarded = [];

    public function attribute(){
        return $this->belongsTo(Attribute::class,'type','id');
    }

    public function hex_original(){
        return $this->hasMany(Hexagram::class, 'id','original_hex_id');
    }

    public function hex_transform(){
        return $this->hasMany(Hexagram::class, 'id','transform_hex_id');
    }

    public function trigram(){
        return $this->hasMany(Trigram::class, 'id','trigram_id');
    }
}
