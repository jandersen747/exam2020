<?php
$s = file_get_contents('./data/newIncidents.json');
header("Content-type: text/plain");
echo $s;