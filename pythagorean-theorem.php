<?php
  function pythag($a, $b) {
    $sumOfSquares = $a * $a + $b * $b;
    $c = sqrt($sumOfSquares);

    return $c;
  }

  $solution = pythag(5, 12);

  echo "The hypotenuse of the triangle is " . $solution .
    " units\n";
 ?>
