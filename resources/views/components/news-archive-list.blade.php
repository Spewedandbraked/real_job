<div class="news-archive">
    <ul class="news-archive__list">
        @foreach ($news as $article)
            <li class="news-archive__item">
                <a href="{{ route('news.article', ['article' => $article['id']]) }}"
                    class="news-archive__link">
                    <span class="news-archive__title">
                        {{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $article['created_at'])->format('d.m.Y') }}
                    </span>
                    <span class="news-archive__text"><x-news.content :data="$article['blocks']"
                            :cutter="true" /></span>
                </a>
            </li>
        @endforeach
        {{-- <li class="news-archive__item">
        <a href="news-detail.html" class="news-archive__link">
            <span class="news-archive__title">
                <mark>Анонс.</mark>
                состоится семинар для сметчиков
            </span>
            <span class="news-archive__text">Приглашаем всех желающих принять участие в&nbsp;вебинарах,
                которые проходят еженедельно по&nbsp;пятницам в&nbsp;11.00&nbsp;часов.</span>
        </a>
    </li> --}}
        <li class="news-archive__item">
            <a href="{{ route('news.index') }}" class="news-archive__link">
                Продолжение новостей
                <i class="icon icon--arrow-nav icon-arrow-nav"></i>
            </a>
        </li>
    </ul>
</div>