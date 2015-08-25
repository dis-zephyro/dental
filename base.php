<!doctype html>
<html class="no-js" lang="ru">

    <head>
        <?php include('includes/head.php'); ?>
    </head>

    <body>
        <header class="header">
            <!-- Top bar -->
            <?php include('includes/top.php'); ?>
            <!-- End of Top bar -->

            <!-- Topnav -->
            <?php include('includes/topnav.php'); ?>
            <!-- End of Topnav -->
        </header>

        <section class="main">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-md-4 col-lg-3">
                        <!-- SideNav -->
                        <?php include('includes/sidenav.php'); ?>
                        <!-- End SideNav -->

                        <!-- NewsBlock -->
                        <?php include('includes/news-block.php'); ?>
                        <!-- End NewsBlock -->
                    </div>
                    <div class="col-sm-8 col-md-8 col-lg-9">
                        <div class="content">
                            <ol class="breadcrumb">
                                <li><a href="#">Главная</a></li>
                                <li><a href="#">Наши врачи</a></li>
                            </ol>
                            <h1>Header h1</h1>
                            <h2>Header h2</h2>
                            <h3>Header h3</h3>
                        </div>
                    </div>
                </div>
            </div>

        </section>


        <!-- Top bar -->
        <?php include('includes/footer.php'); ?>
        <!-- End of Top bar -->

    </body>

</html>