<?php

namespace app\Http\Controllers;
use App\Post;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;


class PostsController extends Controller
{
    
    public function index(){
        //fetch all posts data
        $posts = Post::orderBy('created','desc')->get();
        
        //pass posts data to view and load list view
        return view('posts.index', ['posts' => $posts]);
    }
    
    public function add(){
        //load form view
        return view('posts.add');
    }
    
    public function insert(Request $request){
        //validate post data
        $this->validate($request, [
            'title' => 'required',
            'amount' => 'required',
            'category' => 'required'
        ]);
        
        //get post data
        $postData = $request->all();
        
        //insert post data
        Post::create($postData);
        return redirect()->intended('/');
        
    }
    
    public function edit($id){
        //get post data by id
        $post = Post::find($id);
        
        //load form view
        return view('posts.edit', ['post' => $post]);
    }
    
    public function update($id, Request $request){
        //validate post data
        $this->validate($request, [
            'title' => 'required',
            'amount' => 'required',
            'category' => 'required'
        ]);
        
        //get post data
        $postData = $request->all();
        
        //update post data
        Post::find($id)->update($postData);
        return redirect()->intended('/');
    }
    
    public function delete($id){
        //update post data
        Post::find($id)->delete();
        return redirect()->intended('/');
    }
    
}