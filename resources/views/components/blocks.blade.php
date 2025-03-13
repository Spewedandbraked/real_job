@foreach ($blocks as $key => $block)
    @switch($block['type'])
        @case('image')
            <picture class="content__picture">
                <source srcset="{{ asset('storage/' . $block['data']['image_path']) }}">
                <img src="{{ asset('storage/' . $block['data']['image_path']) }}" alt width height>
            </picture>
        @break

        @case('content')
            <?php $out[0] = $blocks[$key]; ?>
            <div class="article__text article__text--cols">
                <x-news.content :data="$out" />
            </div>
        @break

        @case('blockquote')
            <blockquote>{{ $block['data']['quote'] }}</blockquote>
        @break

        @case('title')
            <h2>{{ $block['data']['title'] }}</h2>
        @break

        @case('doubleTitle')
            <h2><span>{{ $block['data']['first_title'] }}:</span>{{ $block['data']['second_title'] }}</h2>
        @break

        @case('multiImage')
            <div class="content--slider swiper mySwiper js-content-slider">
                <div class="content-slider swiper-wrapper">
                    @foreach ($block['data']['images'] as $key => $image)
                        <picture
                            class="content-slider__picture swiper-slide  content-slider__picture--{{ $key == 0 ? 'big' : 'small' }}">
                            <source srcset="{{ asset('storage/' . $image['image_path']) }}">
                            <img src="{{ asset('storage/' . $image['image_path']) }}" alt width height>
                        </picture>
                    @endforeach
                </div>
            </div>
        @break

        @default
            @dump($block['type'])
    @endswitch
@endforeach
