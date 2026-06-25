<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class cart extends Model
{
    protected $fillable = [
        'user_id'
    ];

    public function User(){
        return $this->belongsTo(User::class);
    }

    public function CartItem(){
        return $this->hasMany(CartItem::class);
    }

}
