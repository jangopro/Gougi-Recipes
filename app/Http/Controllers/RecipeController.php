<?php

namespace App\Http\Controllers;

use App\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    public function index()
    {
        $recipes = Recipe::all();

        return $recipes->toJson();
    }

    public function show($id)
    {
        $recipe = Recipe::with('instructions', 'ingredients')->find($id);

        return $recipe->toJson();
    }

    public function store(Request $request)
      {
        $validatedData = $request->validate([
          'name' => 'required',
          'description' => 'required',
        ]);

        $project = Recipe::create([
          'name' => $validatedData['name'],
          'description' => $validatedData['description'],
        ]);

        return response()->json('Recipe created!');
      }
}
