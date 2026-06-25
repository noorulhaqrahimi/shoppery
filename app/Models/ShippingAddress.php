<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ShippingAddress extends Model
{
   protected $fillable =[
    'user_id',
    'text',
    'city',
    'country',
    'postal_code'
   ];

   public function users(){
    return $this->belongsToMany(User::class);
   }

   public function orders(){
    return $this->hasMany(Order::class);
   }
}
