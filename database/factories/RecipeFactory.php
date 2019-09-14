<?php

use Faker\Generator as Faker;

$factory->define(App\Recipe::class, function (Faker $faker) {
    return [
        'name' => $faker->words($nb = 2, $asText = true),
        'description' => $faker->words($nb = 5, $asText = true),
        'cookTime' => $faker->numberBetween($min = 0, $max = 60),
        'prepTime' => $faker->numberBetween($min = 0, $max = 60),
        'author' => $faker->name($gender = null),
        'url' => $faker->url(),
        'note' => $faker->text($maxNbChars = 200),
        'image' => $faker->imageUrl($width = 640, $height = 480, 'food'),
        'rating' => $faker->numberBetween($min = 1, $max = 5),
    ];
});
