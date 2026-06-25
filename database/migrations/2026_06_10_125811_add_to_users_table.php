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
        Schema::table('users', function (Blueprint $table) {
            $table->string('lastname');
            $table->string('phonenumber');
            $table->string('profile_image');
            $table->integer('age');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            Schema::dropIfExists('lastname');
            Schema::dropIfExists('phonenumber');
            Schema::dropIfExists('profile_image');
            Schema::dropIfExists('age');
        });
    }
};
