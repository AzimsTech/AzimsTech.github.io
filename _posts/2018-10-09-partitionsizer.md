---
layout: post
published: true
title: PartitionSizer
comments: false
---
## A New Post

Enter text in [Markdown](http://daringfireball.net/projects/markdown/). Use the toolbar above, or click the **?** button for formatting help.
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<form class="form-inline">
  <div class="row">
    <div class="col-lg-6">
      <div class="input-group">
        <input id="targetSize" type="text" class="form-control" aria-label="..." placeholder="Target partition size">
        <div class="input-group-btn">
          <button id="unit" type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">GB <span class="caret"></span></button>
          <ul class="dropdown-menu dropdown-menu-right">
            <li><a href="#" data-value="gb">GB</a></li>
            <li><a href="#" data-value="tb">TB</a></li>
            <li><a href="#" data-value="mb">MB</a></li>
          </ul>
        </div><!-- /btn-group -->

        
      </div><!-- /input-group -->
      <button type="button" class="btn btn-primary" onclick="calculate()">Submit</button>
    </div><!-- /.col-lg-6 -->
  </div><!-- /.row -->
</form>

<script>
var units = $(".dropdown-menu li a").attr("data-value");

$(".dropdown-menu li a").click(function(){
  $(this).parents(".input-group-btn").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".input-group-btn").find('.btn').val($(this).data('value'));
  units = $(this).attr("data-value");
  
});

function calculate(){
    var targetSize = document.getElementById("targetSize").value;
    var ans="";

         if(units=="gb"){
        ans = ((Number(targetSize)*1000)*1.024)+1024;
       
      }
      else if(units=="tb"){
          ans = ((Number(targetSize)*1000000)*1.048576)+4096;
      }
      else if(units=="mb"){
          ans = (Number(targetSize)*1.024)+1024;
      }
        units = $(".dropdown-menu li a").attr("data-value");
     alert(ans);
} 



</script>