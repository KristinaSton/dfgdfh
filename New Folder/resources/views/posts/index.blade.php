@extends('layouts.app')

@section('content')
<div class="row">
    <div class="col-lg-12">
        <!-- @if(Session::has('success_msg'))
        <div class="alert alert-success">{{ Session::get('success_msg') }}</div>
        @endif -->
    <!-- Posts list -->
    @if(!empty($posts))
        <div class="row">
            <div class="col-lg-12 margin-tb">
                <div class="pull-left">
                    <h2>Income </h2>
                </div>
                <div class="pull-right">
                    <a class="btn btn-success" href="{{ url('posts/add') }}"> Add New</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <table class="table table-striped task-table">
                    <!-- Table Headings -->
                    <thead>
                        <th width="20%">Added</th>
                        <th width="30%">Title</th>
                        <th width="10%">Amount</th>
                        <th width="20%">Category</th>
                        <th width="20%">Action</th>
                    </thead>
    
                    <!-- Table Body -->
                    <tbody>
                    @foreach($posts as $post)
                        <tr>
                            <td class="table-text">
                                <div>{{$post->created}}</div>
                            </td>
                            <td class="table-text">
                                <div>{{$post->title}}</div>
                            </td>
                            <td class="table-text">
                                <div>{{$post->content}}</div>
                            </td>
                            <td class="table-text">
                                <div>{{$post->content}}</div>
                            </td>
                            <td>
                                <a href="{{ url('/posts/details', $post->id) }}" class="label label-success">Details</a>
                                <a href="{{ url('/posts/edit', $post->id) }}" class="label label-warning">Edit</a>
                                <a href="{{ url('/posts/delete', $post->id) }}" class="label label-danger" onclick="return confirm('Are you sure to delete?')">Delete</a>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    @endif
    </div>
</div>
@endsection