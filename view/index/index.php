<!DOCTYPE html>
<html>
<?php include ( 'view/overAll/header.html'); ?>

<body>
    <?php include( 'view/overAll/indextopNav.html'); ?>

    <div id="modalLogIn" class="modal fade in">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="Close">&times;</button>
                    <h3 style="text-align:center;">¡Bienvenido!</h3>
                </div>
                <div id="loginError" style="text-align:center;">

                </div>
                <div class="modal-body">
                    <div role="form" onkeypress="enterLogin(event)">
                        <div class="form-group">
                            <span class="glyphicons glyphicons-user"></span>
                            <span id="spinner"></span>
                            <input type="text" class="form-control" name="txtUserLogIn" id="txtUserLogin" placeholder="Usuario">
                            <input type="password" class="form-control" name="txtPasswordLogIn" id="txtPasswordLogin" placeholder="Contraseña">
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <input type="button" id="btnLogIn" class="btn btn-success" onclick="login()" value="Enviar" />
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="core/controller/loginController.js">
    </script>

    <section class="mbr-slider mbr-section mbr-section__container carousel slide mbr-section-nopadding mbr-after-navbar" data-ride="carousel" data-keyboard="false" data-wrap="true" data-pause="false" data-interval="4000" id="index-slider-0">
        <div>
            <div>
                <div>
                    <ol class="carousel-indicators">
                        <li data-app-prevent-settings="" data-target="#index-slider-0" data-slide-to="0" class="active"></li>
                        <li data-app-prevent-settings="" data-target="#index-slider-0" data-slide-to="1"></li>
                        <li data-app-prevent-settings="" data-target="#index-slider-0" class="" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="mbr-section mbr-section-hero carousel-item dark center mbr-section-full active" data-bg-video-slide="false" style="background-image: url(assets/images/imagen1-2000x1290-95.png);">
                            <div class="mbr-table-cell">
                                <div class="mbr-overlay" style="opacity: 0.3;"></div>
                                <div class="container-slide container">

                                    <div class="row">
                                        <div class="col-md-8 col-md-offset-2 text-xs-center">
                                            <h2 class="mbr-section-title display-1">Bienvenido a SocialNetWork</h2>
                                            <p class="mbr-section-lead lead">Tu nueva red social.
                                                <br>Búsqueda de empleo y contratación de personal.</p>

                                            <div class="mbr-section-btn"> <a class="btn btn-lg btn-white btn-white-outline" href="index.html#begin">Da click para comenzar<br></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mbr-section mbr-section-hero carousel-item dark center mbr-section-full" data-bg-video-slide="false" style="background-image: url(assets/images/imagen2-2000x1290-36.jpg);">
                            <div class="mbr-table-cell">
                                <div class="mbr-overlay"></div>
                                <div class="container-slide container">

                                    <div class="row">
                                        <div class="col-md-8 col-md-offset-2 text-xs-center">
                                            <h2 class="mbr-section-title display-1"></h2>
                                            <p class="mbr-section-lead lead">Todos los días una nueva oportunidad de trabajo.</p>

                                            <div class="mbr-section-btn"> <a class="btn btn-lg btn-white btn-white-outline" href="index.html#begin">Da click para comenzar</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mbr-section mbr-section-hero carousel-item dark center mbr-section-full" data-bg-video-slide="false" style="background-image: url(assets/images/imagen3-2000x1290-84.png);">
                            <div class="mbr-table-cell">
                                <div class="mbr-overlay" style="background-color: rgb(0, 0, 0);"></div>
                                <div class="container-slide container">

                                    <div class="row">
                                        <div class="col-md-8 col-md-offset-2 text-xs-center">

                                            <p class="mbr-section-lead lead">¡Contrata profesionales con solo un click!</p>

                                            <div class="mbr-section-btn"> <a class="btn btn-lg btn-white btn-white-outline" href="index.html#begin">Da click para comenzar</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a data-app-prevent-settings="" class="left carousel-control" role="button" data-slide="prev" href="#index-slider-0">
                        <span class="icon-prev" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a data-app-prevent-settings="" class="right carousel-control" role="button" data-slide="next" href="#index-slider-0">
                        <span class="icon-next" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="mbr-cards mbr-section mbr-section-nopadding" id="index-features1-0" style="background-color: rgb(255, 255, 255);">

        <div class="mbr-cards-row row striped" id="begin">
            <div class="mbr-cards-col col-xs-3 col-md-3 col-lg-3" style="padding-top: 80px; padding-bottom: 80px;">
                <div class="container">
                    <div class="card cart-block">
                        <div class="card-block">
                            <span class="card-title">Haz clic sobre la empresa si buscar gente profesional</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mbr-cards-col col-xs-3 col-md-3 col-lg-3" style="padding-top: 80px; padding-bottom: 80px;">
                <div class="container">
                    <div class="card cart-block">
                        <div class="card-img">
                            <a href="?view=signUp&type=2"><img src="assets/images/empresa-600x600-48.png" class="card-img-top" alt="Persona" id="imgPerson"></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mbr-cards-row row striped">
                <div class="mbr-cards-col col-xs-3 col-md-3 col-lg-3" style="padding-top: 80px; padding-bottom: 80px;">
                    <div class="container">
                        <div class="card cart-block">
                            <div class="card-block">
                                <span class="card-title">Haz clic sobre la persona si deseas buscar empleo</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mbr-cards-col col-xs-3 col-md-3 col-lg-3" style="padding-top: 80px; padding-bottom: 80px;">
                    <div class="container">
                        <div class="card cart-block">
                            <div class="card-img">
                                <a href="?view=signUp&type=2"><img src="assets/images/persona-600x600-10.png" class="card-img-top" alt="Persona" id="imgPerson"></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mbr-cards-row row striped" id="aboutUs">
            <div class="mbr-cards-col col-xs-3 col-md-3 col-lg-3" style="padding-top: 80px; padding-bottom: 80px;">
                <div class="container">
                    <div class="card cart-block">
                        <div class="card-block">
                           <br>
                           <br>
                           <br>
                           <br>
                           <br>
                           <br>
                           <br>
                            <span class="card-title">¿Quienés somos?</span>
                            <div class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nulla, tempore! Atque, animi? Beatae distinctio incidunt eaque, aspernatur, ipsum quos maiores voluptatum nam, ad inventore voluptatem praesentium dolores maxime perferendis.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mbr-cards-col col-xs-3 col-md-3 col-lg-3" style="padding-top: 80px; padding-bottom: 80px;">
                <div class="container">
                    <div class="card cart-block">
                        <div class="card-block">
                           <br>
                           <br>
                           <br>
                           <br>
                           <br>
                           <br>
                           <br>
                            <span class="card-title">Misión</span>
                            <div class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nulla, tempore! Atque, animi? Beatae distinctio incidunt eaque, aspernatur, ipsum quos maiores voluptatum nam, ad inventore voluptatem praesentium dolores maxime perferendis.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mbr-cards-col col-xs-3 col-md-3 col-lg-3" style="padding-top: 80px; padding-bottom: 80px;">
                <div class="container">
                    <div class="card cart-block">
                        <div class="card-block">
                           <br>
                           <br>
                           <br>
                           <br>
                           <br>
                           <br>
                           <br>
                            <span class="card-title">Visión</span>
                            <div class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nulla, tempore! Atque, animi? Beatae distinctio incidunt eaque, aspernatur, ipsum quos maiores voluptatum nam, ad inventore voluptatem praesentium dolores maxime perferendis.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mbr-cards-col col-xs-3 col-md-3 col-lg-3" style="padding-top: 80px; padding-bottom: 80px;">
                <div class="container">
                    <div class="card cart-block">
                        <div class="card-block">
                           <br>
                           <br>
                           <br>
                           <br>
                           <br>
                           <br>
                           <br>


                            <span class="card-title">Valores</span>
                            <div class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nulla, tempore! Atque, animi? Beatae distinctio incidunt eaque, aspernatur, ipsum quos maiores voluptatum nam, ad inventore voluptatem praesentium dolores maxime perferendis.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <?php include( "view/overAll/indexFooter.html"); include ( 'view/overAll/footer.html'); ?>
</body>

</html>
