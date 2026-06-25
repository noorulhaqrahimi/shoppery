<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $fillable =[
        'order_id',
        'product_id',
        'quantity',
        'price'
    ];

    public function Order(){
        return $this->belongsTo(Order::class);
    }

    public function Product(){
        return $this->belongsTo(Product::class);
    }

}
