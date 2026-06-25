<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\Product;
use Database\Seeders\Category;
use Database\Seeders\Brand;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Ahamdullah',
        //     'email' => 'test@example.com',
        //     'password' => '1234',
        //     'lastname'=> 'rahimi',
        //     'phonenumber' => '0839203',
        //     'profile_image' => 'bhjnkmlcdsvmkccdvf',
        //     'age' => 47
        // ]);

        $this->call([
            BrandSeeder::class,
            CategorySeeder::class,
            ProductSeeder::class
        ]);
    }
}
