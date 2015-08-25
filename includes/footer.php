<footer class="footer">
    <!-- Top bar -->
    <?php include('top.php'); ?>
    <!-- End of Top bar -->

    <div class="container">
        <div class="footer-bottom">
            <div class="row">
                <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="company">
                        <p>
                            <span>ООО “ДенталВей”, 2009–2015</span>
                            <span>Лицензии клиник на осуществление медицинской деятельности:</span>
                        </p>
                        <p>© денто-люкс.рф, 2015</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <ul class="social clearfix">
                        <li>
                            <a href="#" class="icon-twitter"></a>
                        </li>
                        <li>
                            <a href="#" class="icon-facebook"></a>
                        </li>
                        <li>
                            <a href="#" class=" icon-Vkontakte"></a>
                        </li>
                        <li>
                            <a href="#" class="icon-google"></a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 col-lg-3 hidden-xs hidden-sm">
                    <div class="counter">
                        <img class="count" src="images/counter.png" alt="">
                        <img class="count" src="images/counter.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>


<!-- Callback Form -->
<div class="hidden">
    <div class="form-popup" id="callback">
        <span class="btn-close"></span>
        <div class="form-title">Обратный звонок</div>
        <form class="form">
            <div class="form-group">
                <input type="text" name="name" class="form-control form-name" placeholder="Ваше имя">
                <input type="text" name="phone" class="form-control form-phone" placeholder="Введите ваш телефон">
            </div>
            <button type="submit" class="btn btn-green btn-large">ПЕРЕЗВОНИТЕ МНЕ</button>
        </form>

        <div class="hidden">
            <div class="form-done">
                <p>
                    Мы свяжемся с вами в течение<br/>
                    15 минут. Не выключайте,<br/>
                    пожалуйтса, телефон
                </p>
                <div class="text-right">
                    <span class="close-link">Закрыть</span>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- Question Form -->
<div class="hidden">
    <div class="form-popup" id="form-quest">
        <span class="btn-close"></span>
        <div class="form-title">Задать вопрос</div>
        <form class="form">
            <div class="form-group">
                <input type="text" name="name" class="form-control form-name" placeholder="Ваше имя">
                <input type="text" name="phone" class="form-control form-phone" placeholder="Введите ваш телефон">
            </div>
            <div class="form-group">
                <textarea name="text" class="form-control" placeholder="Опишите суть вопроса"></textarea>
            </div>
            <button type="submit" class="btn btn-green btn-large">ОТПРАВИТЬ</button>
        </form>

        <div class="hidden">
            <div class="form-done">
                <p>
                    Мы свяжемся с вами в течение<br/>
                    15 минут. Не выключайте,<br/>
                    пожалуйтса, телефон
                </p>
                <div class="text-right">
                    <span class="close-link">Закрыть</span>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Order Form -->
<div class="hidden">
    <div class="form-popup" id="order-form">
        <span class="btn-close"></span>
        <div class="form-title">Запись на прием</div>
        <form class="form">
            <div class="form-group">
                <input type="text" name="name" class="form-control form-name" placeholder="Ваше имя">
                <input type="text" name="phone" class="form-control form-phone" placeholder="Введите ваш телефон">
            </div>
            <div class="form-group">
                <textarea name="text" class="form-control" placeholder="Желаемые дата и время приема"></textarea>
            </div>
            <button type="submit" class="btn btn-green btn-large">Записаться</button>
        </form>

        <div class="hidden">
            <div class="form-done">
                <p>
                    Мы свяжемся с вами в течение<br/>
                    15 минут. Не выключайте,<br/>
                    пожалуйтса, телефон
                </p>
                <div class="text-right">
                    <span class="close-link">Закрыть</span>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
<script src="http://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
<script src="js/vendor/bootstrap.min.js"></script>
<script src="js/vendor/jquery.fancybox/jquery.fancybox.pack.js"></script>
<script src="js/vendor/slick/slick.js"></script>
<script src="js/main.js"></script>