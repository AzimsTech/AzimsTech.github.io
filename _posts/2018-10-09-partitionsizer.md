---
layout: post
published: true
title: PartitionSizer
---
## A New Post

Enter text in [Markdown](http://daringfireball.net/projects/markdown/). Use the toolbar above, or click the **?** button for formatting help.

<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<link rel="stylesheet" href="/css/home.css">
<!------ Include the above in your HEAD tag ---------->

<div class="container">
      <div class="price-box">
        <div class="row">
          <div class="col-sm-6">
                <form class="form-horizontal form-pricing" role="form">

                  <div class="price-slider">
                    <h4 class="great">Amount</h4>
                    <span>Minimum $100K is required</span>
                    <div class="col-sm-12">
                      <div id="slider_amirol"></div>
                    </div>
                  </div>
                  <div class="price-slider">
                    <h4 class="great">Duration</h4>
                    <span>Please choose one</span>
                    <div class="btn-group btn-group-justified">
                      <div class="btn-group btn-group-lg">
                        <button type="button" class="btn btn-primary btn-lg btn-block month active-month selected-month" id='24month'>24 Months</button>
                      </div>
                      <div class="btn-group btn-group-lg">
                        <button type="button" class="btn btn-primary btn-lg btn-block month" id='18month'>18 Months</button>
                      </div>
                      <div class="btn-group btn-group-lg">
                        <button type="button" class="btn btn-primary btn-lg btn-block month" id='12month'>12 Months</button>
                      </div>
                    </div>
                  </div>
                  <div class="price-slider">
                    <h4 class="great">Term</h4>
                    <span>Please choose one</span>
                      <input name="sliderVal" type="hidden" id="sliderVal" value='0' readonly="readonly" />
                <input name="month" type="hidden" id="month" value='24month' readonly="readonly" />
                <input name="term" type="hidden" id="term" value='quarterly' readonly="readonly" />
                      <div class="btn-group btn-group-justified">
                        <div class="btn-group btn-group-lg">
                    <button type="button" class="btn btn-primary btn-lg btn-block term active-term selected-term" id='quarterly'>Quarterly</button>
                  </div>
                        <div class="btn-group btn-group-lg">
                          <button type="button" class="btn btn-primary btn-lg btn-block term" id='monthly'>Monthly</button>
                  </div>
                        <div class="btn-group btn-group-lg">
                          <button type="button" class="btn btn-primary btn-lg btn-block term" id='weekly'>Weekly</button>
                        </div>
                      </div>
                  </div>
              </div>
              <div class="col-sm-6">
                <div class="price-form">

                  <div class="form-group">
                      <div class="row">
                        <div class="col-sm-6">
                          <label for="amount_amirol" class="control-label">Annually ($): </label>
                          <span class="help-text">Amount that you need to pay</span>
                        </div>
                        <div class="col-sm-6">
                            <input type="hidden" id="amount_amirol" class="form-control">
                            <!-- <p class="price lead" id="total"></p> -->
                            <input class="price lead" name="totalprice" type="text" id="total" disabled="disabled" style="" />
                        </div>
                    </div>
                    </div>
                    <div class="form-group">
                      <div class="row">
                        <div class="col-sm-6">
                          <label for="amount_amirol" class="control-label">Monthly ($): </label>
                          <span class="help-text">Amount that you need to pay</span>
                        </div>
                        <div class="col-sm-6">
                            <input type="hidden" id="amount_amirol" class="form-control">
                            <!-- <p class="price lead" id="total12"></p> -->
                            <input class="price lead" name="totalprice12" type="text" id="total12" disabled="disabled" style="" />
                        </div>
                    </div>
                    </div>
                    <div class="form-group">
                      <div class="row">
                        <div class="col-sm-6">
                          <label for="amount_amirol" class="control-label">Weekly ($): </label>
                          <span class="help-text">Amount that you need to pay</span>
                        </div>
                        <div class="col-sm-6">
                            <input type="hidden" id="amount_amirol" class="form-control">
                            <!-- <p class="price lead" id="total52"></p> -->
                            <input class="price lead" name="totalprice52" type="text" id="total52" disabled="disabled" style="" />
                        </div>
                    </div>
                    </div>
                    <div style="margin-top:30px"></div>
                    <hr class="style">

                  <div class="form-group">
                      <div class="col-sm-12">
                        <button type="submit" class="btn btn-primary btn-lg btn-block">Proceed <span class="glyphicon glyphicon-chevron-right"></span></button>
                      </div>
                  </div>
                    <div class="form-group">
                      <div class="col-sm-12">
                          <img src="https://github.com/AmirolAhmad/Bootstrap-Calculator/blob/master/images/payment.png?raw=true" class="img-responsive payment" />
                      </div>
                    </div>

                  </div>

                </form>
            </div>
            <p class="text-center" style="padding-top:10px;font-size:12px;color:#2c3e50;font-style:italic;">Created by <a href="https://twitter.com/AmirolAhmad" target="_blank">AmirolAhmad</a></p>
        </div>

          </div>

      </div>
      
    <script src="https://code.jquery.com/ui/1.10.4/jquery-ui.min.js"></script>


    <script>

// JavaScript Document
var p = {

    0: "100K",
    1: "150K",
    2: "200K",
    3: "250K",
    4: "300K",
    5: "350K",
    6: "400K",
    7: "450K",
    8: "500K",
    9: "550K",
    10: "600K",
    11: "650K",
    12: "700K",
    13: "750K",
    14: "800K",
    15: "850K",
    16: "900K",
    17: "950K",
    18: "1,000K",
    19: "1,100K",
    20: "1,200K",
    21: "1,300K",
    22: "1,400K",
    23: "1,500K",
    24: "1,600K",
    25: "1,700K",
    26: "1,800K",
    27: "19,00K",
    28: "2,000K",
};

var t = {

    0: "100000",
    1: "150000",
    2: "200000",
    3: "250000",
    4: "300000",
    5: "350000",
    6: "400000",
    7: "450000",
    8: "500000",
    9: "550000",
    10: "600000",
    11: "650000",
    12: "700000",
    13: "750000",
    14: "800000",
    15: "850000",
    16: "900000",
    17: "950000",
    18: "1000000",
    19: "1100000",
    20: "1200000",
    21: "1300000",
    22: "1400000",
    23: "1500000",
    24: "1600000",
    25: "1700000",
    26: "1800000",
    27: "1900000",
    28: "2000000",

}

var obj = {
    '24month' : {
        'quarterly' : '1.41',
        'monthly' : '1.28',
        'weekly' : '1.2'
    },
    '18month' : {
        'quarterly' : '1.38',
        'monthly' : '1.25',
        'weekly' : '1.8'
    },
    '12month' : {

        'quarterly' : '1.35',
        'monthly' : '1.225',
        'weekly' : '1.15'
    }
};

$(document).ready(function() {

    $("#total").val("10000");

    

    $("#slider_amirol").slider({
        range: "min",
        animate: true,

        min: 0,
        max: 28,
        step: 1,
        slide: 
            function(event, ui) 
            {
                update(1,ui.value); //changed
                calcualtePrice(ui.value);
            }
    });

    $('.month').on('click',function(event) {
        var id = $(this).attr('id');

        $('.month').removeClass('selected-month');
        $(this).addClass('selected-month');
        $(".month").removeClass("active-month");
        $(this).addClass("active-month");

        $('#month').val(id);

        calcualtePrice()
    });

    $('.term').on('click',function(event) {
        var id = $(this).attr('id');

        $('.term').removeClass('selected-term');
        $(this).addClass('selected-term');
        $(".term").removeClass("active-term");
        $(this).addClass("active-term");
        $('#term').val(id);

        calcualtePrice()
    });

    update();
    calcualtePrice();
});
        

        
function update(slider,val) {

    if(undefined === val) val = 0;
    var amount = p[val];

    $('#sliderVal').val(val);

    $('#slider_amirol a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
}

function calcualtePrice(val){
    
    if(undefined === val)
        val = $('#sliderVal').val();

    var month = $('#month').val();
    var term = obj[month][$('#term').val()];

    var totalPrice = t[val]*term;

    $("#total").val(totalPrice.toFixed(2));
    $("#total12").val(Math.round((totalPrice)/12).toFixed(2));
    $("#total52").val(Math.round((totalPrice)/52).toFixed(2));
}

    </script>