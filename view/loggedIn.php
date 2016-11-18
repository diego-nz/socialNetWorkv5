<!DOCTYPE html>
<html>
<?php include_once ( 'view/overAll/header.html'); ?>

<body>
    <script type="text/javascript" src="core/controller/loggedInController.js"></script>
    <?php include( 'view/overAll/loggedInTopNav.html'); ?>

    <section class="engine"></section>
    <section class="mbr-cards mbr-section mbr-section-nopadding mbr-after-navbar" id="index-features1-0" style="background-color: rgb(255, 255, 255);">

        <div class="mbr-cards-row row striped">
            <div class="mbr-cards-col col-xs-12 col-md-4 col-lg-3 " style="padding-top: 160px; padding-bottom: 160px;">
                <div class="container">
                    <div class="card cart-block">
                        <div class="card-block" style="text-align:left;">
                            <h4 class="card-title">Mi panel de control</h4>
                            <h6 class="card-h"> <?php echo "¡Hola ".$_SESSION["session_user"]."!"; ?> </h6>
                            <div id="panelContent">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mbr-cards-col col-xs-12 col-md-4 col-lg-6" style="padding-top: 160px; padding-bottom: 160px;">
                <div class="container">
                    <div class="card cart-block">
                        <div class="card-block">
                            <h4 id="middleTitle" class="card-title"></h4>
                            <div id="stateMessage">

                            </div>
                            <div id="spinner">

                            </div>
                            <div id="middlePanel">

                            </div>
                        </div>
                    </div>

                <?php include_once('view/modal.html'); ?>

                </div>
            </div>
            <div class="mbr-cards-col col-xs-12 col-md-4 col-lg-3" style="padding-top: 160px; padding-bottom: 160px;">
                <div class="container">
                    <div class="card cart-block">

                        <div class="card-block">
                            <h4 class="card-title">Publicidad</h4>

                        </div>
                    </div>
                </div>
            </div>



        </div>
    </section>
    <?php include_once ( 'view/overAll/footer.html'); ?>
</body>

</html>
