<?php

namespace App\Http\Controllers\api;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $posts = Post::all();
        return $posts;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        //
        $post = Post::create($request->validated());
        return response()->json([
            "message" => "Post Created Successfully",
            "data" => $post
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $post = Post::findOrFail($id);
        if(!$post){
            return response()->json([
                "message"=> "The post is not found"
            ]);
        }
        return $post;

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, string $id)
    {
        //
        $post = Post::findOrFail($id);
        if(!$post){
            return response()->json([
            "message"=> "The post is not found"
        ]);
        }

        $post->update($request->validated());
        return response()->json([
            "message" => "Post updated successfully",
            "data" => $post
        ]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $post = Post::findOrFail($id);
        if(!$post){
            return response()->json([
            "message"=> "The post is not found"
        ]);
        }

        $post->delete();
        return response()->json([
            "stats" => true,
            "message" => "Post is deleted successfully"
        ]);
    }
}
