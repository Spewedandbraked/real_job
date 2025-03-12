<?php
//пройти через все варианты и найти CONTENT на случай,
//если при сортировке на первое место будет установлен другой тип данных
foreach ($data as $key => $part) {
    if (strtoupper($part['type']) == 'CONTENT') {
        if ($cutter ?? false == true) {
            //обрезка первого маленького-блока из текстового поля.
            return print_r(explode('</p>', $part['data']['content'])[0]);
        }
        return print_r($part['data']['content']);
    }
}
