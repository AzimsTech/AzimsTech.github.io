---
layout: post
published: true
title: PartitionSizer
---
## A New Post

Enter text in [Markdown](http://daringfireball.net/projects/markdown/). Use the toolbar above, or click the **?** button for formatting help.
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


<div class="row">
  <div class="col-lg-6">
    <div class="input-group">
      <input type="text" class="form-control" aria-label="...">
      <div class="input-group-btn">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action <span class="caret"></span></button>
        <ul class="dropdown-menu dropdown-menu-right">
          <li><a href="#" data-value="action">Action</a></li>
          <li><a href="#" data-value="another action">Another action</a></li>
          <li><a href="#" data-value="something else here">Something else here</a></li>
          <li><a href="#" data-value="separated link">Separated link</a></li>
        </ul>
      </div><!-- /btn-group -->
    </div><!-- /input-group -->
  </div><!-- /.col-lg-6 -->
</div><!-- /.row -->

<script>
$(".dropdown-menu li a").click(function(){
  $(this).parents(".input-group-btn").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".input-group-btn").find('.btn').val($(this).data('value'));
});
</script>