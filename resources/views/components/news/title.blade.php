@switch($data[0]['title_type_id'])
    @case(2)
        <span class="news-block__part">{{ strtoupper($data[0]['first_title']) }}:</span>
        {{ strtoupper($data[0]['second_title']) }}
    @break

    @default
        {{ strtoupper($data[0]['title']) }}
@endswitch
