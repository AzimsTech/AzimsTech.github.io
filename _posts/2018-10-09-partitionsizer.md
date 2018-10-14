---
layout: post
published: true
title: PartitionSizer
js: /js/partitionSizer.js
---
## A New Post

Enter text in [Markdown](http://daringfireball.net/projects/markdown/). Use the toolbar above, or click the **?** button for formatting help.


<form>
  <div class="container">
      <div class="row">
          <div class="form-group">
              <label for="inpuFname">Target size</label>
              <div class="input-group">
                  <input type="text" value="" class="form-control" name="text">
                  <div class="input-group-btn bs-dropdown-to-select-group">
                      <button type="button" class="btn btn-default dropdown-toggle as-is bs-dropdown-to-select" data-toggle="dropdown">
                          <span data-bind="bs-drp-sel-label">Select...</span>
                          <input type="hidden" name="selected_value" data-bind="bs-drp-sel-value" value="">
                          <span class="caret"></span>
                          <span class="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul class="dropdown-menu" role="menu" style="">
                          <li data-value="1"><a href="#">GB</a></li>
                          <li data-value="2"><a href="#">TB</a></li>
                          <li data-value="3"><a href="#">MB</a></li>
                      </ul>
                  </div>
              </div>
                <button type="submit" class="btn btn-primary">Submit</button>
          </div>
          Check the hidden field for values!
      </div>
  </div>
 </form>


