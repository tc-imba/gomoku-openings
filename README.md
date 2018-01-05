# gomoku-openings

**Important: This part is only for reference, you may not dismiss these when developing your own AI.**

Black (the player who makes the first move) was long known to have a big advantage, so we will specify the beginning of the game so that both players will get the same advantage to make the game fair.

We assume the openings are exactly the displayed 5x5 square in the center, x represents black and o represents white, and black always plays in the center on the first step.

The followings are all of the opening situations (on the Judge System):

Other cases (called 妖刀) are abandoned in formal competitions, so we don't consider them.

It's difficult to find English translation for those names of openings, so they are all in Chinese.

## 直指 (黑优)

### 1. 花月
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   | o | x |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 |   |   |   |   |   |
  +---+---+---+---+---+
```
### 2. 雨月
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   | o |   |   |
  +---+---+---+---+---+
7 |   |   | x | x |   |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 |   |   |   |   |   |
  +---+---+---+---+---+
```
### 3. 松月
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   | o |   |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   | x |   |   |
  +---+---+---+---+---+
9 |   |   |   |   |   |
  +---+---+---+---+---+
```
### 4. 溪月
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   | x |   |
  +---+---+---+---+---+
6 |   |   | o |   |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 |   |   |   |   |   |
  +---+---+---+---+---+
```
### 5. 寒星
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   | x |   |   |
  +---+---+---+---+---+
6 |   |   | o |   |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 |   |   |   |   |   |
  +---+---+---+---+---+
```
### 6. 瑞星
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   | o |   |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 |   |   | x |   |   |
  +---+---+---+---+---+
```
### 7. 金星
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   | o |   |   |
  +---+---+---+---+---+
7 |   |   | x |   | x |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 |   |   |   |   |   |
  +---+---+---+---+---+
```

## 斜指 (黑优)

### 8. 浦月
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   |   | o |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   | x |   |
  +---+---+---+---+---+
9 |   |   |   |   |   |
  +---+---+---+---+---+
```
### 9. 云月
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   |   | o |   |
  +---+---+---+---+---+
7 |   |   | x | x |   |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 |   |   |   |   |   |
  +---+---+---+---+---+
```
### 10. 峡月
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   |   | o | x |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 |   |   |   |   |   |
  +---+---+---+---+---+
```
### 11. 银月
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   |   | o |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   | x |   |   |
  +---+---+---+---+---+
9 |   |   |   |   |   |
  +---+---+---+---+---+
```
### 12. 岚月
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   |   | o |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 |   |   |   | x |   |
  +---+---+---+---+---+
```
### 13. 名月
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   |   | o |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 |   | x |   |   |   |
  +---+---+---+---+---+
```
### 14. 水月
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   |   | o |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   |   | x |
  +---+---+---+---+---+
9 |   |   |   |   |   |
  +---+---+---+---+---+
```
### 15. 恒星
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   |   | o |   |
  +---+---+---+---+---+
7 |   |   | x |   | x |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 |   |   |   |   |   |
  +---+---+---+---+---+
```
### 16. 明星
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   |   | o |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 |   |   | x |   |   |
  +---+---+---+---+---+
```

## 直指 (白优或均势)
### 17. 残月
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   | o |   | x |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 |   |   |   |   |   |
  +---+---+---+---+---+
```
### 18. 新月
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   | o |   |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   |   | x |
  +---+---+---+---+---+
9 |   |   |   |   |   |
  +---+---+---+---+---+
```
### 19. 丘月
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   | o |   |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   | x |   |
  +---+---+---+---+---+
9 |   |   |   |   |   |
  +---+---+---+---+---+
```
### 20. 山月
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   | o |   |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 |   |   |   | x |   |
  +---+---+---+---+---+
```
### 21. 游星
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   | o |   |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 |   |   |   |   | x |
  +---+---+---+---+---+
```
### 22. 疏星
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   | x |
  +---+---+---+---+---+
6 |   |   | o |   |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 |   |   |   |   |   |
  +---+---+---+---+---+
```

## 斜指 (白优或均势)
### 23. 斜月
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   |   | o |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   | x |   |   |   |
  +---+---+---+---+---+
9 |   |   |   |   |   |
  +---+---+---+---+---+
```
### 24. 长星
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   | x |
  +---+---+---+---+---+
6 |   |   |   | o |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 |   |   |   |   |   |
  +---+---+---+---+---+
```
### 25. 流星
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   |   | o |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 |   |   |   |   | x |
  +---+---+---+---+---+
```
### 26. 彗星
```
    5   6   7   8   9
  +---+---+---+---+---+
5 |   |   |   |   |   |
  +---+---+---+---+---+
6 |   |   |   | o |   |
  +---+---+---+---+---+
7 |   |   | x |   |   |
  +---+---+---+---+---+
8 |   |   |   |   |   |
  +---+---+---+---+---+
9 | x |   |   |   |   |
  +---+---+---+---+---+
```


## Reference
1. [Gomoku - Wikipedia](https://en.wikipedia.org/wiki/Gomoku)
2. [五子棋26种开局 - 百度文库](http://wenku.baidu.com/link?url=oDoH2qYWR6MRDVLuwNRnYDlOUN8n0Zg5YuVg5IyFR58v8nI1A0wDMC2ERctDs5Nwmg9cQIXnI33cM7EG_rrafprMe0idLYzYO8hVnPCu_tG)
