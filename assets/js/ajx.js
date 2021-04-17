$(document).ready(()=>{

	//for ABC Campaign
	 


    //for home page 
        $('#homepage').click(function(e){
          $('#homepage').addClass('active');
          $('#aboutpage').removeClass('active');
          $('#servicepage').removeClass('active');
          $('#contactpage').removeClass('active');
          e. preventDefault();
            $('#layoutajax').html('');
            $.ajax({
                url: '/',
                method: 'get',
   
                success: function () {
                    $('#layoutajax').append(newDom)
                    
                        $(".Modern-Slider").slick({
                        autoplay:true,
                        autoplaySpeed:10000,
                        speed:600,
                        slidesToShow:1,
                        slidesToScroll:1,
                        pauseOnHover:false,
                        dots:true,
                        pauseOnDotsHover:true,
                        cssEase:'linear',
                       // fade:true,
                        draggable:false,
                        prevArrow:'<button class="PrevArrow"></button>',
                        nextArrow:'<button class="NextArrow"></button>', 
                    });
            
                    function visible(partial) {
                        var $t = partial,
                            $w = jQuery(window),
                            viewTop = $w.scrollTop(),
                            viewBottom = viewTop + $w.height(),
                            _top = $t.offset().top,
                            _bottom = _top + $t.height(),
                            compareTop = partial === true ? _bottom : _top,
                            compareBottom = partial === true ? _top : _bottom;
            
                        return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));
                    
            
                    }
                },
                error: function (error) {
                    console.log(error.responseText);
                  

                }
            });
          
        });

        let newDom = () => {
            return `
         

    <!-- Banner Starts Here -->
    <div class="main-banner header-text" id="top">
        <div class="Modern-Slider">
          <!-- Item -->

	<!--for Campaign-->
	  <div class="item item-1">
          <div class="img-fill">
              <div class="text-content">
		<h2 style="color:white;">CREDIT SCORE Service</h2>
                <h6>Are you facing problem in getting loan for your business...??</h6>
                <h4>Are you tired of requestiong banks everday.??</h4>
                
                <a href="/information" id="information"class="filled-button">Let's go</a>
              </div>
          </div>
        </div>


          <div class="item item-2">
            <div class="img-fill">
                <div class="text-content">
                  <h6>We are ready to help you</h6>
                  <h4>Money Recovery</h4>
                  <p>Is your client not paying your money back ? <br> We have recovered more then 250 crores in in last 2.5 years.</p>
                  <a href="/service/#tabs-1" class="filled-button">Our Services</a>
                </div>
            </div>
          </div>
          <!-- // Item -->
          <!-- Item -->
          <div class="item item-3">
            <div class="img-fill">
                <div class="text-content">
                  <h6>We are here to support you</h6>
                  <h4>Credit Assurance</h4>
                  <p>Are you afraid to do business on CREDIT ? <br> Take our service and feel cool </p>
                  <a href="/service/#tabs-2" class="filled-button">Our services</a>
                </div>
            </div>
          </div>
          <!-- // Item -->
          <!-- Item -->
          <div class="item item-4">
            <div class="img-fill">
                <div class="text-content">
                  <h6>We are here to support you</h6>
                  <h4>Funding</h4>
                  <p>Are you struggeling for fund in your business ? <br> We can arrange fund as per your requirement.</p>
                  <a href="/service/#tabs-3" class="filled-button">Our Services</a>
                </div>
            </div>
          </div>
          <!-- // Item -->
        </div>
    </div>
    <!-- Banner Ends Here -->

    <div class="request-form">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h4>Request a call back right now ?</h4>
            <span>We are happy to help you, Feel Free to contact us</span>
          </div>
          <div class="col-md-4">
	    <a class="border-button" href="https://api.whatsapp.com/send?phone=918347064889" target="_blank"><i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i></a>
            <a href="contact.html" class="border-button">Contact Us</a>
          </div>
        </div>
      </div>
    </div>

    <div class="services">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Financial <em>Services</em></h2>
            
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <img src="/images/service_01.jpg" alt="">
              <div class="down-content">
                <h4>Money Recovery</h4>
                <ul class="list1" style="list-style:disc;">
                  <li>Party doesn't pick up the phone?</li
                  <li>Party promises but doesn't pay?</li>
                  <li>Party is buying from others,holding your money?</li>
                </ul>
                <a href="/service/#tabs-1" class="filled-button filled-in-button">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <img src="/images/service_02.jpg" alt="">
              <div class="down-content">
                <h4>Credit Assurance</h4>
                <ul class="list1" style="list-style:disc;">
                  <li>Are you doing business on Credit?</li>
                  <li>Does party pay you on time ?</li>
                  <li>Do you want to assure your given credit?</li>
                </ul>
                <a href="/service/#tabs-2" class="filled-button filled-in-button">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <img src="/images/service_03.jpg" alt="">
              <div class="down-content">
                <h4>Funding</h4>
                <ul class="list1" style="list-style:disc;">
                  <li>Do you struggle for fund in your business?</li>
                  <li>Do you want to expand business but not have a sufficient fund?</li> 
                  <li>Do you have project and looking for fund ?</li>
                </ul>
                <a href="/service/tabs-3" class="filled-button filled-in-button">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fun-facts">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="left-content">
              <span>WE PROVIDE ONE STOP SOLUTION</span>
              <h2>Our solutions for your <em>business growth</em></h2>
              <p>Business Vruddhi is a place where you can get all your finance related challenges to be solved with a expirinced proffessionals across india 
              <br><br>We believe in making you enrich by serving our unique services with value additions.</p>
              <a href="/service/#tabs-3" class="filled-button">Read More</a>
            </div>
          </div>
          <div class="col-md-6 align-self-center">
            <div class="row">
              <div class="col-md-6">
                <div class="count-area-content">
                  <div class="count-digit">1300</div>
                  <div class="count-title">Plus Cases &nbsp; Solved</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="count-area-content">
                  <div class="count-digit">250</div>
                  <div class="count-title">Crores<br> Recovered</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="count-area-content">
                  <div class="count-digit">750</div>
                  <div class="count-title">Plus Satisfied Clients</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="count-area-content">
                  <div class="count-digit">50</div>
                  <div class="count-title">Seminars and Webinars</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="more-info">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="more-info-content">
              <div class="row">
                <div class="col-md-6">
                  <div class="left-image">
                    <img src="/images/more-info.jpg" alt="">
                  </div>
                </div>
                <div class="col-md-6 align-self-center">
                  <div class="right-content">
                    <span>Who we are</span>
                    <h2>Get to know about <em>our company</em></h2>
                    <p>Business Vruddhi is unique platform where client get all kind of financial consultancy at a single point. We are planning to catter multiple unique and higly demanded financial services to our clients across india. <br><br>Business Vruddhi is working on its vision to enrich stackholders by being unique in industry</p>
                    <a href="#" class="filled-button">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="testimonials">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>What they say <em>about us</em></h2>
              <span>testimonials from our greatest clients</span>
            </div>
          </div>
          <div class="col-md-12">
            <div class="owl-testimonials owl-carousel">
              
              <div class="testimonial-item">
                <div class="inner-content">
                  <h4> Coming Soon... </h4>
                  <span>NA </span>
                  <p></p>
                </div>
                <img src="http://placehold.it/60x60" alt="">
              </div>
              
              <div class="testimonial-item">
                <div class="inner-content">
                  <h4>Coming Soon</h4>
                  <span> NA </span>
                  <p></p>
                </div>
                <img src="http://placehold.it/60x60" alt="">
              </div>
              
              <div class="testimonial-item">
                <div class="inner-content">
                  <h4>David Wood</h4>
                  <span>Chief Accountant</span>
                  <p>"Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique."</p>
                </div>
                <img src="http://placehold.it/60x60" alt="">
              </div>
              
              <div class="testimonial-item">
                <div class="inner-content">
                  <h4>Andrew Boom</h4>
                  <span>Marketing Head</span>
                  <p>"Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis."</p>
                </div>
                <img src="http://placehold.it/60x60" alt="">
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="callback-form">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Request a <em>call back</em></h2>
              <span> DROP YOUR CONTACT DETAILS </span>
            </div>
          </div>
          <div class="col-md-12">
            <div class="contact-form">
              <form id="contact" action="/contact_feedback" method="POST">
                <div class="row">
                  <div class="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="name" type="text" class="form-control" id="name" placeholder="Full Name" required="">
                    </fieldset>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="email" type="text" class="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address" required="">
                    </fieldset>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="number" type="text" class="form-control" id="subject" placeholder="Mobile Number" required="">
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your Message" required=""></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="border-button">Send Message</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="partners">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="owl-partners owl-carousel">
            
              <div class="partner-item">
                <img src="/images/client-01.png" title="1" alt="1">
              </div>
              
              <div class="partner-item">
                <img src="/images/client-01.png" title="2" alt="2">
              </div>
              
              <div class="partner-item">
                <img src="/images/client-01.png" title="3" alt="3">
              </div>
              
              <div class="partner-item">
                <img src="/images/client-01.png" title="4" alt="4">
              </div>
              
              <div class="partner-item">
                <img src="/images/client-01.png" title="5" alt="5">
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>


        `
        }


        $('#aboutpage').click(function(e){
          $('#homepage').removeClass('active');
          $('#aboutpage').addClass('active');
          $('#servicepage').removeClass('active');
          $('#contactpage').removeClass('active');
            e. preventDefault();
       

            $('#layoutajax').html('');
            $.ajax({
                url: '/about',
                method: 'get',
   
                success: function () {
                    $('#layoutajax').append(aboutDom)
                },
                error: function (error) {
                    console.log(error.responseText);
                  

                }
            });
           
        });

        let aboutDom = () => {
            return `
            <link rel="stylesheet" href="/css/fontawesome.css">
            <link rel="stylesheet" href="/css/templatemo-finance-business.css">
            <link rel="stylesheet" href="/css/owl.css">
        
        
            <div class="page-heading header-text">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <h1>About Us</h1>
                    <span>DELIVER UNIQUE FINANCIAL SOLUTIONS</span>
                  </div>
                </div>
              </div>
            </div>
        
            <div class="more-info about-info">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="more-info-content">
                      <div class="row">
                        <div class="col-md-6 align-self-center">
                          <div class="right-content">
                            <span>Our solid background on finance</span>
                            <h2>Get to know about <em>Our company</em></h2>
                            <p class="text-justify">Business Vruddhi has started jouney from 30.09.2020 to carve new path in industry. We belive in delivering quality service and value addition to our clients. We works on identical financial services across india. We are commited to enrich our clients and stackholers by adding values and fulfilling their needs. </p>
                            
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="left-image">
                            <img src="/images/about-image.jpg" alt="">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
            <div class="team">
              <div class="container">
                <div class="row" style="
                justify-content: center;">
                  <div class="col-md-12">
                    <div class="section-heading">
                      <h2>Our team <em>member</em></h2>
                      <span>MOTIVATED AND DEDICATED TEAM</span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="team-item">
                      <img src="/images/team_01.jpg" alt="" height="250px" width="370px">
                      <div class="down-content">
                        <h4>Viral Patel</h4>
                        <span>Founder</span>
                        <p class="text-justify">Viral Patel is Passionate and dynamic leader with great vision. He has more than 3.5 years of corporate experience with worlds leading organisation. He has done MBA in Marketing and have Experiece in market research.</p>
                        <div class="soc"  style="display: flex;justify-content: space-evenly;font-size: 25px" >
		         <a href="#"><i class="fa fa-facebook"></i></a>
                         <a href="#"><i class="fa fa-twitter"></i></a>
			 <a href="#"><i class="fa fa-linkedin"></i></a>
			</div>
                      </div>
                    </div>
                  </div>  
            
                </div>
              </div>
            </div>
        
            <div class="fun-facts">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="left-content">
                    <span>WE PROVIDE ONE STOP SOLUTION</span>
                    <h2>Our solutions for your <em>business growth</em></h2>
                    <p>Business Vruddhi is a place where you can get all your finance related challenges to be solved with a expirinced proffessionals across india 
                    <br><br>We believe in making you enrich by serving our unique services with value additions.</p>
                    <a href="" class="filled-button">Read More</a>
                  </div>
                </div>
                <div class="col-md-6 align-self-center">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="count-area-content">
                        <div class="count-digit">1300</div>
                        <div class="count-title">Plus Cases &nbsp; Solved</div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="count-area-content">
                        <div class="count-digit">250</div>
                        <div class="count-title">Crores<br> Recovered</div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="count-area-content">
                        <div class="count-digit">750</div>
                        <div class="count-title">Plus Satisfied Clients</div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="count-area-content">
                        <div class="count-digit">50</div>
                        <div class="count-title">Seminars and Webinars</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
            <div class="testimonials">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="section-heading">
                      <h2>What they say <em>about us</em></h2>
                      <span>testimonials from our greatest clients</span>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="owl-testimonials owl-carousel">
                      
                      <div class="testimonial-item">
                        <div class="inner-content">
                          <h4>George Walker</h4>
                          <span>Chief Financial Analyst</span>
                          <p>"Nulla ullamcorper, ipsum vel condimentum congue, mi odio vehicula tellus, sit amet malesuada justo sem sit amet quam. Pellentesque in sagittis lacus."</p>
                        </div>
                        <img src="http://placehold.it/60x60" alt="">
                      </div>
                      
                      <div class="testimonial-item">
                        <div class="inner-content">
                          <h4>John Smith</h4>
                          <span>Market Specialist</span>
                          <p>"In eget leo ante. Sed nibh leo, laoreet accumsan euismod quis, scelerisque a nunc. Mauris accumsan, arcu id ornare malesuada, est nulla luctus nisi."</p>
                        </div>
                        <img src="http://placehold.it/60x60" alt="">
                      </div>
                      
                      <div class="testimonial-item">
                        <div class="inner-content">
                          <h4>David Wood</h4>
                          <span>Chief Accountant</span>
                          <p class="text-justify">"Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique."</p>
                        </div>
                        <img src="http://placehold.it/60x60" alt="">
                      </div>
                      
                      <div class="testimonial-item">
                        <div class="inner-content">
                          <h4>Andrew Boom</h4>
                          <span>Marketing Head</span>
                          <p>"Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis."</p>
                        </div>
                        <img src="http://placehold.it/60x60" alt="">
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
          `
        }

        $('#servicepage').click(function(e){
          $('#homepage').removeClass('active');
          $('#aboutpage').removeClass('active');
          $('#servicepage').addClass('active');
          $('#contactpage').removeClass('active');
            e. preventDefault();
           

            $('#layoutajax').html('');
            $.ajax({
                url: '/service',
                method: 'get',
   
                success: function () {
                    $('#layoutajax').append(serviceDom)
                },
                error: function (error) {
                    console.log(error.responseText);
                  

                }
            });
           
        });  
        let serviceDom=()=>{
            return `


            <!-- Page Content -->
            <div class="page-heading header-text">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <h1>Our Services</h1>
                    <span>WE ARE HERE TO SERVE YOU</span>
                  </div>
                </div>
              </div>
            </div>
        
            <div class="single-services">
              <div class="container">
                <div class="row" id="tabs">
                  <div class="col-md-4">
                    <ul>
                      <li><a href='#tabs-1'>Money Recovery <i class="fa fa-angle-right"></i></a></li>
                      <li><a href='#tabs-2'>Credit Assurance <i class="fa fa-angle-right"></i></a></li>
                      <li><a href='#tabs-3'>Funding Services <i class="fa fa-angle-right"></i></a></li>
                      <li><a href='#tabs-4'>Export Funding <i class="fa fa-angle-right"></i></a></li>
                    </ul>
                  </div>
                  <div class="col-md-8">
                    <section class='tabs-content'>
                      <article id='tabs-1'>
                        <img src="/images/single_service_01.jpg" alt="">
                        <h4>MONEY RECOVERY</h4>
                        
                        
                <div class="col-12" style="margin:2px 0px"> 
                  <div class="panel-group margin_0 " id="accordion1">
                      <div class="panel panel-default border border-dark">
                          <div class="panel-heading">
                              <h4 class="panel-title">
                                  <a class="collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapse1">
                                      <i class="rt-icon2-bubble highlight"></i>
                                      Do you have any outstandings with parties ? Where?
                                  </a>
                              </h4>
                          </div>
                          <div style="height: 0px;" id="collapse1" class="panel-collapse collapse">
                              <div class="panel-body">
                              <ul class="list1" style="list-style:disc;">
                              	<li>Party doesn't pick the phone?</li>
                              	<li>Outstanding since long time? </li>
                              	<li>Party is sighting problems, but spending extravagantaly on personal lifestyle?</li>
                              	<li>Party is buying from others,holding your money? </li>
                              	<li>Party is not responding?</li> 
                              	<li>Party promises but doesn't pay?</li>
                              </ul>
                              </div>
                          </div>
                      </div>                 
                    </div> 
                </div>
                        
                <div class="col-12" style="margin:2px 0px"> 
                <div class="panel-group margin_0 " id="accordion2">
                    <div class="panel panel-default border1">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapse2">
                                    <i class="rt-icon2-bubble highlight"></i>
                                    Profile of Doable Cases 
                                </a>
                            </h4>
                        </div>
                        <div style="height: 0px;" id="collapse2" class="panel-collapse collapse">
                            <div class="panel-body">
			    <ul class="list1" style="list-style:disc;">
                            	<li> Their should not be an existing dispute</li>
                          	<li> Last transaction with the defaulting party must not be over 3 years
                          	</li>
                          	<li> Outstanding must be provable or backed by documents</li>
                          	<li> Must not have an exisiting litigation between the parties</li>
                          	<li> Debtor must be solvent & must have the capacity to pay</li> 
                          	<li> Debtor must be in business & traceable</li>
                             </ul>
                            </div>
                        </div>
                    </div>                 
                  </div> 
              </div>
                      
                        
              <div class="col-12" style="margin:2px 0px"> 
              <div class="panel-group margin_0 " id="accordion3">
                  <div class="panel panel-default border1">
                      <div class="panel-heading">
                          <h4 class="panel-title">
                              <a class="collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapse3">
                                  <i class="rt-icon2-bubble highlight"></i>
                                  Kind of dues recoverable
                              </a>
                          </h4>
                      </div>
                      <div style="height: 0px;" id="collapse3" class="panel-collapse collapse">
                          <div class="panel-body">
			  <ul class="list1" style="list-style:disc;">
                          <li>Dues for goods/material sold</li>
                          <li>Contractual fees</li>
                          <li>Professional fees</li>
                          <li>Interest/Loan money</li>
                          <li>Rent</li> 
                          <li>Salary</li>
                      	  </ul> 
                          </div>
                      </div>
                  </div>                 
                </div> 
            </div>
                     
                        
                          
                        
            <div class="col-12" style="margin:2px 0px"> 
            <div class="panel-group margin_0 " id="accordion4">
                <div class="panel panel-default border1">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a class="collapsed" data-toggle="collapse" data-parent="#accordion4" href="#collapse4">
                                <i class="rt-icon2-bubble highlight"></i>
                                Key features of recovery process
                            </a>
                        </h4>
                    </div>
                    <div style="height: 0px;" id="collapse4" class="panel-collapse collapse">
                        <div class="panel-body">
                        <li> Token advance(Fully Refundable)</li>
                        <li> High chance of recovery</li>
                        <li> Total legal process (Legal Mechanism)</li>
                        <li> Recovery in short period </li>
                        <li> Success based charges</li> 
                        <li> 99% Success rate</li>
                        <li> Pan india coverage</li>
                     
                        </div>
                    </div>
                </div>                 
              </div> 
          </div>
                      
                          
                                      
                      
        </article>
                      <br>
                      <br>
                      <hr>
        <article id='tabs-2'>
                        <img src="/images/single_service_02.jpg" alt="">
                        <h4>CREDIT ASSURANCE</h4>

                        <div class="col-12" style="margin:2px 0px"> 
                        <div class="panel-group margin_0 " id="accordion5">
                            <div class="panel panel-default border border-dark">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a class="collapsed" data-toggle="collapse" data-parent="#accordion5" href="#collapse5">
                                            <i class="rt-icon2-bubble highlight"></i>
                                            Challenges faced by Business while giving Credits
                                        </a>
                                    </h4>
                                </div>
                                <div style="height: 0px;" id="collapse5" class="panel-collapse collapse">
                                    <div class="panel-body">
				    <ul class="list1" style="list-style:disc;">
                                          <li> When outstanding increases,Parties often stops responding you and starts buying from other party</li>
                                          <li> At the time of payment,raising imaginary disputes to deduct the payments</li>
                                          <li> Trouble of parties holding your money,paying only when you supply new material</li>
                                          <li> Delay in Collection from debtors causing stress on Working
                                          Capital</li>
                                          <li>Deprivation of opportunity,profit or interest because delay
                                          in payment</li> 
                                          <li>Frustration of false commitments by parties</li>
                                          <li>Shutting down of Business and parties running away </li>
                                          <li>Wasting valuable time on follow up for stuck money</li>
                                          <li>Paying Interest to Banks but not receiving it in return from
                                          your creditors </li>
                                          <li>Creating small issues into bigger ones & using it as an
                                          alibi to hold your payment </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>                 
                          </div> 
                      </div>

                      
                      <div class="col-12" style="margin:2px 0px"> 
                      <div class="panel-group margin_0 " id="accordion6">
                          <div class="panel panel-default border border-dark">
                              <div class="panel-heading">
                                  <h4 class="panel-title">
                                      <a class="collapsed" data-toggle="collapse" data-parent="#accordion6" href="#collapse6">
                                          <i class="rt-icon2-bubble highlight"></i>
                                          Benifits of Credit Assurance
                                      </a>
                                  </h4>
                              </div>
                              <div style="height: 0px;" id="collapse6" class="panel-collapse collapse">
                                  <div class="panel-body">
                                      <ul class="list1" style="list-style:disc;">
				      <li> Boost up your Cash Flows</li>
                                      <li> Faster Rotation of money</li>
                                      <li> Empowers you to have credit appraisal of the parties</li>
                                      <li> Reduces your headache of collection as it’ll be managed by us</li>
                                      <li>Scope & Coverage of Business will increase,calculated
                                      risk</li> 
                                      <li>Improved profits as Minimal Bad Debts & lower cost of WC</li>
                                      <li>Party would not be able to use rejection/dispute to delay payment
                                      or cut money </li>
                                      <li>In case of insolvency of the party, your claim shall preference
                                      above others</li>
                                      <li> You don’t have to personally go to court or waste time in legal
                                      proceeding</li>
				      </ul>
                                
                                  </div>
                              </div>
                          </div>                 
                        </div> 
                    </div>
                        
                          
                          
                         
                  </article>
                      <br>
                      <br>
                      <hr>


                    
                  <article id='tabs-3'>
                        <img src="/images/single_service_03.jpg" alt="">
                        <h4>FUNDING</h4>

                        <div class="col-12" style="margin:2px 0px"> 
                        <div class="panel-group margin_0 " id="accordion7">
                            <div class="panel panel-default border border-dark">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a class="collapsed" data-toggle="collapse" data-parent="#accordion7" href="#collapse7">
                                            <i class="rt-icon2-bubble highlight"></i>
                                            Start Up Funding-(Equity)
                                        </a>
                                    </h4>
                                </div>
                                <div style="height: 0px;" id="collapse7" class="panel-collapse collapse">
                                    <div class="panel-body">
				    	<ul class="list1" style="list-style:disc;">
                                        <li>Are you a Startup At least 2 to 3 yrs Old? and Seeking funds, We can help</li>
                                        <li>Venture Debt & Equity for Startup companies Companies with minimum 3 yrs vintage</li>
                                        <li>Technology backed companies Healthtech, Edutech, Fintech, Artificial intelligence, IOT, Automation and similar companies</li>
                                        <li>Minimum traction required is 1.5 Cr Top line Easy and faster scaling up models</li>
                                        <li>We do not work on idea or co concept stage, we don't do seed funding</li> 
                                        <li>Service Charges - On Successful Completion.</li>
                                        <li>We have a Option for 100% Funding Guarantee in 90 days</li>
					</ul>
                                  
                                    </div>
                                </div>
                            </div>                 
                          </div> 
                      </div>


                  
                      <div class="col-12" style="margin:2px 0px"> 
                      <div class="panel-group margin_0 " id="accordion8">
                          <div class="panel panel-default border border-dark">
                              <div class="panel-heading">
                                  <h4 class="panel-title">
                                      <a class="collapsed" data-toggle="collapse" data-parent="#accordion8" href="#collapse8">
                                          <i class="rt-icon2-bubble highlight"></i>
                                          InSecured Funding
                                      </a>
                                  </h4>
                              </div>
                              <div style="height: 0px;" id="collapse8" class="panel-collapse collapse">
                                  <div class="panel-body">
				  <ul class="list1" style="list-style:disc;">
                                  <li>Are You Looking for Un-Secured Business Loan</li>
                                  <li>Yes we Can Help you,If you have Good Credit Score and Eligibility we can arrange 3rd party collateral</li>
                                  <li>Loan amount 1cr  to 200 cr</li>
                                  <li>ROI – 10 to 18%</li>
                                  <li>Tenure – Up to 7 years</li> 
                                  <li>Eligibility Criteria</li>
                                  <li>Company Profile</li
                                  <ul class="list1" style="list-style:disc;">
                                     <li>Minimum 3 years Business Vintage-Mandatory</li>
                                     <li>Turn Over Minimum 1cr + Annually</li>
                                     <li>Own House Proof Must</li>
                                     <li>GST Certificate last 1 year</li>
                                     <li>Last 3 years ITR,Balance Sheet & P&L</li>
                                     <li>KYC of the Company & Promoters</li>
                                     <li>Last One year Bank Statement</li>
                                     <li>Address Proof.</li>
                                  </ul>      
                                  <li>No NPA cases,CIBIL Minimum 650  </li>
                                  <li>Loan Eligibility – 4 x EBITA and 6 x PAT</li>
                                 </ul>
                                  </div>
                              </div>
                          </div>                 
                        </div> 
                    </div>
                      
                          
                    <div class="col-12" style="margin:2px 0px"> 
                    <div class="panel-group margin_0 " id="accordion9">
                        <div class="panel panel-default border border-dark">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion9" href="#collapse9">
                                        <i class="rt-icon2-bubble highlight"></i>
                                        NPA Account Restructuring or OTS
                                    </a>
                                </h4>
                            </div>
                            <div style="height: 0px;" id="collapse9" class="panel-collapse collapse">
                                <div class="panel-body">
				<ul class="list1" style="list-style:disc;"> 
                                <li>NPA after 2016</li>
                                <li> If the Company is Still Operational and having Revenue Traction it will be Easy,
                               
                                  <ul class="list1" style="list-style:disc;">
                                    <li>&emsp;•	If Company is closed and no Revenue it will be difficult</li>
                                    <li>&emsp;•	Having Hard Asset Collateral of 2x</li>
                                    <li>&emsp;•	Having Good chances or Revival</li>
                                    <li>&emsp;•	Any Alternate sources of Income is an Added Advantage</li>
                                    <li>&emsp;•	Should be ok for a Higher ROI ,As ARC is Expensive</li>
                                    <li>&emsp;•	Should Have Patience in Resolution As it is time consuming</li>
                                    <li>&emsp;•	In case of OTS should be in Position to arrange at least 30% of the Value</li>
                                    <li>&emsp;•	Other Terms and Conditions Can be discussed over the call</li>
                                  </ul>

                                </li>
                                <li>We can help in cities like Bangalore,Hyderabad,Pune,Mumbai,Cochin,Chennai,Delh/NCR,Ahmadabad Only</li>
      				</ul>
                              
                                </div>
                            </div>
                        </div>                 
                      </div> 
                  </div>
                        
                          
                          
                
                      
                          
                </article>
                      <br>
                      <br>
                      <hr>
                      <article id='tabs-4'>
                        <img src="/images/single_service_04.jpg" alt="">
                        <h4>EXPORT FUNDING</h4>
                        

                        <div class="col-12" style="margin:2px 0px"> 
                        <div class="panel-group margin_0 " id="accordion10">
                            <div class="panel panel-default border border-dark">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a class="collapsed" data-toggle="collapse" data-parent="#accordion10" href="#collapse10">
                                            <i class="rt-icon2-bubble highlight"></i>
                                            Are You an Exporter and Are you looking for collateral<br> Free Trade Finance Facilities??
                                        </a>
                                    </h4>
                                </div>
                                <div style="height: 0px;" id="collapse10" class="panel-collapse collapse">
                                    <div class="panel-body">
    					<ul class="list1" style="list-style:disc;">
                                        <li>We can Help, Our flexible trade finance facilities are tailored for exporters who have exceeded bank limits or do not have any additional collateral to pledge. </li>
                                        <li>We give you the necessary capital to grow your business, and our non-recourse facilities help you mitigate the risks of international trade</li>
                                        <li>Our Finance Product Option can help you Offer Credit Terms to your importers and become competitive,
                                          <ul>
                                              <li>&nbsp;&emsp;Cut the time spent in waiting for payments</li>
                                              <li>&nbsp;&emsp;Avoid expensive LCs</li>
                                              <li>&nbsp;&emsp;Grow your Business</li>
                                          </ul>
                                        </li>

                                        <li>We unlock the cash tied up in your supply chain into readily usable cash flow.</li>
          				</ul>
                                  
                                    </div>
                                </div>
                            </div>                 
                          </div> 
                      </div>


                         
                          
                      </article>
                      <br>
        
                      <hr>
                    </section>
                  </div>
                </div>
              </div>
            </div>
        
            <div class="callback-form callback-services">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="section-heading">
                      <h2>Request a <em>call back</em></h2>
       
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="contact-form">
                      <form id="contact" action="/contact_feedback" method="POST">
                        <div class="row">
                          <div class="col-lg-4 col-md-12 col-sm-12">
                            <fieldset>
                              <input name="name" type="text" class="form-control" id="name" placeholder="Full Name" required="">
                            </fieldset>
                          </div>
                          <div class="col-lg-4 col-md-12 col-sm-12">
                            <fieldset>
                              <input name="email" type="text" class="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address" required="">
                            </fieldset>
                          </div>
                          <div class="col-lg-4 col-md-12 col-sm-12">
                            <fieldset>
                              <input name="number" type="text" class="form-control" id="subject" placeholder="Mobile number" required="">
                            </fieldset>
                          </div>
                          <div class="col-lg-12">
                            <fieldset>
                              <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your Message" required=""></textarea>
                            </fieldset>
                          </div>
                          <div class="col-lg-12">
                            <fieldset>
                              <button type="submit" id="form-submit" class="border-button">Send Message</button>
                            </fieldset>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
            <div class="partners">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="owl-partners owl-carousel">
                      <div class="partner-item">
                        <img src="/images/client-01.png" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
        
           
        
          `
        }
          $('#contactpage').click(function(e){
            $('#homepage').removeClass('active');
            $('#aboutpage').removeClass('active');
            $('#servicepage').removeClass('active');
            $('#contactpage').addClass('active');
            e. preventDefault();
          

            $('#layoutajax').html('');
            $.ajax({
                url: '/contact',
                method: 'get',
   
                success: function () {
                    $('#layoutajax').append(contacttDom)
                },
                error: function (error) {
                    console.log(error.responseText);
                  

                }
            });
           
        });
        let contacttDom=()=>{
            return `<!DOCTYPE html>
            <html lang="en">
            
                <link rel="stylesheet" href="/css/fontawesome.css">
                <link rel="stylesheet" href="/css/templatemo-finance-business.css">
                <link rel="stylesheet" href="/css/owl.css">
            
            
              
                <!-- Page Content -->
                <div class="page-heading header-text">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <h1>Contact Us</h1>
                        <span>feel free to send us a message now!</span>
                      </div>
                    </div>
                  </div>
                </div>
            
                <div class="contact-information">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="contact-item">
                          <i class="fa fa-phone"></i>
                          <h4>Phone</h4>
                
                          <a href="#">8347064889</a>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="contact-item">
                          <i class="fa fa-envelope"></i>
                          <h4>Email</h4>
                        
                          <a href="#">Businessvruddhiofficial@gmail.com</a>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="contact-item">
                          <i class="fa fa-map-marker"></i>
                          <h4>Location</h4>
                          <p>Ahmedabad</p>
                          <a href="#map">View on Google Maps</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            
                <div class="callback-form contact-us">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="section-heading">
                          <h2>Send us a <em>message</em></h2>
                        
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="contact-form">
                          <form id="contact" action="/contact_feedback" method="POST">
                            <div class="row">
                              <div class="col-lg-4 col-md-12 col-sm-12">
                                <fieldset>
                                  <input name="name" type="text" class="form-control" id="name" placeholder="Full Name" required="">
                                </fieldset>
                              </div>
                              <div class="col-lg-4 col-md-12 col-sm-12">
                                <fieldset>
                                  <input name="email" type="text" class="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address" required="">
                                </fieldset>
                              </div>
                              <div class="col-lg-4 col-md-12 col-sm-12">
                                <fieldset>
                                  <input name="number" type="text" class="form-control" id="subject" placeholder="Mobile Number" required="">
                                </fieldset>
                              </div>
                              <div class="col-lg-12">
                                <fieldset>
                                  <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your Message" required=""></textarea>
                                </fieldset>
                              </div>
                              <div class="col-lg-12">
                                <fieldset>
                                  <button type="submit" id="form-submit" class="filled-button">Send Message</button>
                                </fieldset>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            
                <div id="map">
            <!-- How to change your own map point
                1. Go to Google Maps
                2. Click on your location point
                3. Click "Share" and choose "Embed map" tab
                4. Copy only URL and paste it within the src="" field below
            -->
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8893992601793!2d72.50101878429405!3d23.012353649852724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b26b81c2595%3A0x3db060230c66e1be!2sMondeal%20Square!5e0!3m2!1sen!2sin!4v1601558638586!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            
                <div class="partners contact-partners">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="owl-partners owl-carousel">
                          <div class="partner-item">
                            <img src="/images/client-01.png" alt="">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            
            
            
               
            
                `
        }


      
    });
