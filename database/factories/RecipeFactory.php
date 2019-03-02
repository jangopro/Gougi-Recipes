<?php

use Faker\Generator as Faker;

$factory->define(App\Recipe::class, function (Faker $faker) {
    return [
        'name' => $faker->words($nb = 2, $asText = true),
        'description' => $faker->words($nb = 5, $asText = true)
    ];
});
