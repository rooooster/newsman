---
layout: site
permalink: /site/

title: ''
description: ''

og-image: ''
---

# Доставляем актуальные новости по электронной почте

### Подписки

* Система виджетов для сбора подписок

* Хранение и управление базой контактов

* Валидация мэил адресов

### Контент

* Парсер новостей через RSS/ API/ Open Graph

* Анализ популярности новостей

* Персонализация контента под каждого получателя

### Рассылки

* Основные типы: breaking, digest, popular, weekly

* Проверенные алгоритмы рассылок

* Возможность корректировать алгоритмы и добавлять собственные события

* Разовые рассылки (конкурс, важная информация, письмо редактора тд) через панель управления

### Окружение 

* Antispam экспертиза

* Выделенный сервер с отличной репутацией

* Консультации и поддержка 24/7

* Готовы к большим объемам данных

### Аналитика

* Отчеты любой сложности по запросу

* Мониторинг отправок/переходов в панели управления

## How to join

<form>
    <div>
        <label>Имя:</label>
        <input type="name" name="name"/>
    </div>
    <div>
        <label>Email:</label>
        <input type="email" name="email"/>
    </div>
    <div>
        <label>RSS вашего сайта:</label>
        <input type="text" name="rss"/>
    </div>
    <div>
        <label>Подтвердите владение этим сайтом:</label>
        <input type="text" name="owner"/>
    </div>
    <input type="submit" value="регистрация"/>
</form>

* это submit form

* Подсказка: Подготовить RSS ленту, с содержанием, которое вы хотите использовать в письмах, как минимум это:

* заголовок, картинка, краткое описание новости, id статьи или уникальный url;

* Подсказка: Добавьте на сайте страницу с адресом: domain.com/someuniqid.html или добавьте поддомен n.domain.com с записью: 68.152.13.111

* Что будет дальше?

* Мы отправим доступ в учетную запись Mailfire - https://admin.mailfire.io/

* Вы размещаете в футере сайта код:

<div class="highlighter-rouge"><pre class="highlight"><code><span class="nt">&lt;html&gt;</span>
<span class="nt">&lt;body&gt;</span>
<span class="nt">&lt;script&gt;</span>
    <span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">w</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">f</span><span class="p">)</span> <span class="p">{</span>
        <span class="nx">w</span><span class="p">[</span><span class="nx">f</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{(</span><span class="nx">w</span><span class="p">[</span><span class="nx">f</span><span class="p">].</span><span class="nx">q</span> <span class="o">=</span> <span class="nx">w</span><span class="p">[</span><span class="nx">f</span><span class="p">].</span><span class="nx">q</span> <span class="o">||</span> <span class="p">[]).</span><span class="nx">push</span><span class="p">(</span><span class="nx">arguments</span><span class="p">)};</span>
        <span class="nx">w</span><span class="p">[</span><span class="s1">'_mf_object_name'</span><span class="p">]</span> <span class="o">=</span> <span class="nx">f</span><span class="p">;</span>
        <span class="kd">var</span> <span class="nx">l</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">'script'</span><span class="p">);</span>
        <span class="nx">l</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="s1">'https://scripts.mailfire.io/build/widget/wrapper.js'</span><span class="p">;</span>
        <span class="nx">l</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">'text/javascript'</span><span class="p">;</span>
        <span class="nx">l</span><span class="p">.</span><span class="nx">async</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
        <span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="nx">d</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s1">'script'</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span>
        <span class="nx">s</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">l</span><span class="p">,</span> <span class="nx">s</span><span class="p">);</span>
    <span class="p">})(</span><span class="nb">window</span><span class="p">,</span> <span class="nb">document</span><span class="p">,</span> <span class="s1">'mf'</span><span class="p">);</span>
    <span class="nx">mf</span><span class="p">.</span><span class="nx">project</span> <span class="o">=</span> <span class="mi">18</span><span class="p">;</span>
    <span class="nx">mf</span><span class="p">(</span><span class="s1">'init'</span><span class="p">,</span> <span class="s1">'auto'</span><span class="p">);</span>
<span class="nt">&lt;/script&gt;</span>
<span class="nt">&lt;/body&gt;</span>
<span class="nt">&lt;/html&gt;</span>
 
b) «Пиксель» аналитики
 
<span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"https://n.mailfire.io/online/1"</span> <span class="na">style=</span><span class="s">"display:none"</span> <span class="nt">/&gt;</span>
</code></pre></div>

* и уже на следующий день начинаем рассылку новостей!

## Figures and clients*

* 981 728 подписалось на новостные рассылки

* 27 281 952 Breaking news отправлено

* 229 615 803 писем отправлено

* 524 941 845 новостей проанализировано

#### Каждый 5-й подписчик читает новости в почте ежедневно

* В среднем, на протяжении месяца, активный пользователь читает до 55 писем с нашими новостными подборками

* Сайты наших клиентов суммарно посещает 10 000 000 человек в день

* Отправляем почту на более 100 почтовых сервисов

_* по состоянию на 01.11.2016_
