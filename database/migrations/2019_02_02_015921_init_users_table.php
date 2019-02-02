<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Migrations\Migration;

class InitUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@domain.com',
            'password' => '$2y$10$dYOq3OaF7XGyjjahK886AO9M0qji6HLLeIYreksUXkgqNh6RfFE6G',
            'api_token' => 'OUVjkknag89s8c987235iohiscovy89q235',
            'remember_token' => '',
            'created_at' => '2019-01-25 06:21:37',
            'updated_at' => '2019-01-25 06:21:37'
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::table('users')->truncate();
    }
}
