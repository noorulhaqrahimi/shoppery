<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained()->cascadeOnDelete();
            $table->foreignId('brand_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('subtitle');
            $table->string('sku')->unique();
            $table->longText('description')->nullable();
            $table->integer('quantity')->default(0);
            $table->decimal('weight', 10, 2);
            $table->string('unit');
            $table->decimal('price', 12, 2);
            $table->decimal('discount', 3,2)->nullable();
            $table->decimal('rating', 10, 2)->nullable();
            $table->boolean('is_hot_deal')->default(false);
            $table->boolean('is_featured')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
