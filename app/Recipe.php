<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = ['name', 'cookTime', 'prepTime', 'author', 'url', 'rating', 'note', 'image'];

    public function ingredients()
    {
        return $this->hasMany(RecipeIngredient::class);
    }

    public function instructions()
    {
        return $this->hasMany(RecipeInstruction::class);
    }
}
