<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHexagramTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hexagram', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('code')->nullable();
            $table->text('opening')->nullable();
            $table->text('nobleman')->nullable();
            $table->text('weather')->nullable();
            $table->text('general')->nullable();
            $table->text('wealth')->nullable();
            $table->text('relationship')->nullable();
            $table->text('business')->nullable();
            $table->text('family')->nullable();
            $table->text('legal')->nullable();
            $table->text('travel')->nullable();
            $table->text('health')->nullable();
            $table->text('property')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hexagram');
    }
}
