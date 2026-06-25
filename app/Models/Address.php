<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = [
        'user_id',
        'address_text',
        'city',
        'country',
        'postal_code'
    ];

    public function User(){
        return $this->belongsToMany(User::class);
    }

    public function Billing(){
        return $this->hasMany(Billing::class);
    }
}
