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
            <div class="col-xs-6 col-sm-6 col-md-6">
                <table class="table table-striped task-table">
                    <caption><h2 >Income</h2></caption>
                    <!-- Table Headings -->
                    <thead>
                        <th width="20%">Added</th>
                        <th width="30%">Title</th>
                        <th width="10%">Amount</th>
                        <th width="20%">Category</th>
                        <th width="20%">
                        <a class="btn btn-success" href="{{ url('posts/add') }}"> Add New</a>
                        </th>
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
                                <div>{{$post->amount}}</div>
                            </td>
                            <td class="table-text">
                                <div>{{$post->category}}</div>
                            </td>
                            <td>
                                <a href="{{ url('/posts/edit', $post->id) }}" class="label label-warning">Edit</a>
                                <a href="{{ url('/posts/delete', $post->id) }}" class="label label-danger">Delete</a>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6">
                <table class="table table-striped task-table">
                <caption><h2 >Expenses</h2></caption>
                    <!-- Table Headings -->
                    <thead>
                        <th width="20%">Added</th>
                        <th width="30%">Title</th>
                        <th width="10%">Amount</th>
                        <th width="20%">Category</th>
                        <th width="20%">
                        <a class="btn btn-success" href="{{ url('posts/add') }}"> Add New</a>
                        </th>
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
                                <a href="{{ url('/posts/edit', $post->id) }}" class="label label-warning">Edit</a>
                                <a href="{{ url('/posts/delete', $post->id) }}" class="label label-danger">Delete</a>
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