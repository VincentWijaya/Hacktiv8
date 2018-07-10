Competencies: Pseudocode

Buatlah Pseudocode untuk kasus berikut:
Sebuah perahu layar sedang melaju dengan kecepatan 30km/jam
Perahu tersebut dipengaruhi oleh kecepatan ombak yang berlawanan dengan arah lain

- Jika ombak dibawah 1 meter maka kecepatan tetap.
- Jika ombak setinggi 1 meter maka kecepatan akan berkurang sebesar 7km/jam
- Jika ombak setinggi 2 meter maka kecepatan akan berkurang sebesar 15km/jam
- Jika ombak lebih tinggi daripada 2 meter maka perahu akan terbalik, sehingga kecepatan menjadi 0km/jam

Tampilkan kecepatan perahu jika di depan ada ombak setinggi x meter

STORE 'kecepatan' with 30
STORE 'ombak' with 1
STORE 'kecepatanAsli' without any value

IF 'ombak' equals to 1 THEN
  CALCULATE 'kecepatan' substract with 7
  SET 'kecepatanAsli' with calculation result
  DISPLAY 'kecepatanAsli'
ELSE IF 'ombak' equals to 2 THEN
  CALCULATE 'kecepatan' substract with 15
  SET 'kecepatanAsli' with calculation result
  DISPLAY 'kecepatanAsli'
ELSE IF 'ombak' more than 2 THEN
  SET 'kecepatanAsli' with 0
  DISPLAY 'kecepatanAsli'
ELSE
  DISPLAY 'kecepatan'
END IF
