<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Wishlist;

class WishlistController extends Controller
{
    public function store(Request $request)
    {
        $exists = Wishlist::where('product_id', $request->product_id)
        ->where('user_id', 1)
        ->first();

        if($exists){
            return response()->json([
                'message' => 'Already in Wishlist!'
            ]);
        }

        Wishlist::create([
            'product_id' => $request->product_id,
            'user_id' => 1,
        ]);

        return response()->json([
            'message' => 'Added to wishlist!'
        ]);
    }
}
