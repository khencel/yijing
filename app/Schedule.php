<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    protected $table = "schedule_user";
    protected $guarded = [];

    public function users(){
        return $this->belongsTo(User::class);
    }

    public function appointmentUser(){
        return $this->hasMany(User::class,'id','user_id');
    }

    public function consultant(){
        return $this->hasMany(User::class,'id','consultant_id');
    }
}
